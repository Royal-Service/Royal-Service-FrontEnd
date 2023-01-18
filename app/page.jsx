"use client";
// import { Inter } from "@next/font/google";
import About from "./components/About";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import Container from "react-bootstrap/Container";
import { AuthProvider } from "./contexts/Auth";
import { useRouter,usePathname } from "next/navigation";
// import { useAuth } from "./contexts/Auth";
import Header from './components/Header'
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {


  // const { tokens } = useAuth(AuthContext);
  const router = useRouter();

  return (
    <div>
     
     
     <Header></Header>
        <div style={{ overflow: "hidden", width: "100%" }}>
        <button type="button" onClick={() => router.push('/login')}>
                Login
              </button>
              <button type="button" onClick={() => router.push('/register')}>
            
                Register
              </button>

          <Container className="mt-5 px-5">
            <Hero />
            <About />
            <WhyUs />
          </Container>
        </div>
       

     
    </div>
  );
}