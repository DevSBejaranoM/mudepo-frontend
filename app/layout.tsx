import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { initializeApp } from "firebase/app";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mudepo",
  description: "Bienvenido a Mudepo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const firebaseConfig = {
    apiKey: "AIzaSyDObNpqRLzM2wAE3HjD_wAwQSjKiwG_qHI",
    authDomain: "mudepo-2d1e5.firebaseapp.com",
    projectId: "mudepo-2d1e5",
    storageBucket: "mudepo-2d1e5.appspot.com",
    messagingSenderId: "1086752633854",
    appId: "1:1086752633854:web:2b8e446978d8b3bff686af"
  };
  const app = initializeApp(firebaseConfig);
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
