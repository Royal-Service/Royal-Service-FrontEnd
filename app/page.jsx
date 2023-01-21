"use client";
// import { Inter } from "@next/font/google";
import About from "./components/About";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import Container from "react-bootstrap/Container";
import { AuthProvider } from "./contexts/Auth";
import { useRouter,usePathname } from "next/navigation";
// import { useAuth } from "./contexts/Auth";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {


  // const { tokens } = useAuth(AuthContext);
  const router = useRouter();

  return (
    <div >
     
     
     
        <div style={{ overflow: "hidden", width: "100%" }}>


          <Container className="mt-0 px-0 " id ="heee">
            <Hero />
            <About />
            <WhyUs />
          </Container>
        </div>
       

     
    </div>
  );
}
