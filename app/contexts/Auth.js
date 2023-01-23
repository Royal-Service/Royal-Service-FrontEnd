'use client';
// 1. create the provider, that will provide the global state to my app
// 1.1 create the context
// 1.2 create the context wrapper (provider)

import { createContext, useState, useContext } from "react";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useRouter } from 'next/navigation';

const registerURL = "http://127.0.0.1:8000/register/";
const loginURL = "http://127.0.0.1:8000/login/"
const refreshUrl = "http://127.0.0.1:8000/login/refresh/"
const AuthContext = createContext(undefined);

export function useAuth() {
    const Auth = useContext(AuthContext);
    if (!Auth) throw new Error("Check your AuthProvider in you _app.js, maybe")
    return Auth;
}

export function AuthProvider({ children }) {

    const router = useRouter();
    
    let lsData = null
    if (typeof window !== 'undefined') {
        lsData = localStorage.getItem("AuthTokens");
    }

    const [tokens, setTokens] = useState(() =>
        lsData ? JSON.parse(lsData) : null
    );
    const [userInfo, setUserInfo] = useState(() => {
        return lsData ? jwt_decode(lsData).email : null;
    });
    const [craftsmanID,setCraftsmanID]=useState(()=>{
        return lsData ? jwt_decode(lsData).craftsman_id : null;
    } );
    const [custmerID,setCustmerID]=useState(()=>{
        return lsData ? jwt_decode(lsData).custmer_id : null;
    } );
    

    async function Signup(userInput) {
        try {

            const res = await axios.post(createUserUrl, userInput);
            if (res.status === 400) {
                console.log(`${res.status} bad request`)
            }
            if (res.status === 201 || res.status === 200) {
                login(email, password);
            }
        }
        catch (error) {
            console.log(` Error Signing in: ${error}`)
        }

    }

    async function login(email, password) {
        try {
            const res = await axios.post(loginURL, { email, password });
            if (res.status === 200) {
                setTokens(res.data); // access + refresh
                setUserInfo(jwt_decode(res.data.access)); // user_id 
                setCraftsmanID(jwt_decode(res.data.access))
                setCustmerID(jwt_decode(res.data.access))
                if (jwt_decode(res.data.access).craftsman_id){
                    localStorage.setItem("craftsman",true)
                }else if(jwt_decode(res.data.access).custmer_id) {
                    localStorage.setItem("custmer",true)
                }
                localStorage.setItem("AuthTokens", JSON.stringify(res.data))
                localStorage.setItem("flag",true)
                return true
            }
        }
        catch (error) {
            console.log(`Error Logging in: ${error}`)
        }
    }

    async function refreshToken() {
        const body = {
            refresh: tokens.refresh
        }
        const res = await axios.post(refreshUrl, body);
        if (res.status === 200) {
            const newTokens = {
                access: res.data.access,
                refresh: tokens.refresh
            }
            console.log("refresh token res", res.data); // access
            console.log(55555555555, newTokens);
            setTokens(newTokens);

            console.log(66666666666, tokens);

            // setUserInfo(jwt_decode(newTokens.access));
            localStorage.setItem("AuthTokens", JSON.stringify(newTokens));
        } else {
            logout();
        }
    }

    function isAuth() {
        try {
            console.log(4444444, tokens.access, tokens.refresh)
            if (tokens.access && tokens.refresh) {
                const access = jwt_decode(tokens?.access);
                const refresh = jwt_decode(tokens?.refresh);
                const now = Math.ceil(Date.now() / 1000);
                console.log(access?.email);
                setUserInfo(access?.email);
                setCraftsmanID(access?.craftsman_id)
                setCustmerID(access?.custmer_id)
                if (access.exp > now) {
                    console.log("Access token hasn't expired")
                    return true;
                }
                if (access?.exp < now && refresh.exp > now) {
                    // refreshToken();
                    console.log("Need to refresh token");
                    return false;
                }
                return false;
            }
        } catch (error) {
            console.log(`Error in authenticating the user${error}`);
            return false;
        }
    }

    function logout() {
        setTokens(null);
        setUserInfo(null);
        setCraftsmanID(null);
        setCustmerID(null);
        localStorage.removeItem("AuthTokens")
        localStorage.removeItem("flag")
        localStorage.removeItem("craftsman")
        localStorage.removeItem("custmer")
        router.push("/");
    }

    const globalState = {
        tokens,
        Signup,
        login,
        logout,
        refreshToken,
        isAuth,
        userInfo,
        craftsmanID,
        custmerID
    }
    return (
        <AuthContext.Provider value={globalState}>
            {children}
        </AuthContext.Provider>
    )
}