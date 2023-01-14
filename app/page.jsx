"use client";
import { Inter } from '@next/font/google'
import About from './components/About';
import Header from './components/Header'
import Hero from './components/Hero';
import Container from 'react-bootstrap/Container';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div style={{ "overflow": "hidden", "width": "100%" }}>
      <Header />
      <Container className="mt-5 px-5" >
            <Hero />
            <About />
        </Container>

    </div>)
}
