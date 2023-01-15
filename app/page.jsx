"use client";
import { Inter } from '@next/font/google'
import About from './components/About';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Search from './components/Search';
import Container from 'react-bootstrap/Container';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div style={{ "overflow": "hidden", "width": "100%" }}>
      <Container className="mt-5 px-5" >
            <Hero />
            <About />
            <WhyUs />
            {/* <Search /> */}
      </Container>
    </div>)
}
