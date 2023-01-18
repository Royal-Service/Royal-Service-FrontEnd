"use client"
import './globals.css'
import Footer from './components/Footer';
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider,AuthContext } from "./contexts/Auth";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        
      <AuthProvider>
      <Header></Header>
      <main>{children}</main>
      </AuthProvider>
      <Footer ></Footer>
      </body>
    </html>
  )
}
