import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import ClientSideScript from "./components/ClientSideScript";

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
  return (
    <html lang="en">
      <head>
        <meta name="application-name" content="mudepo" />
        <meta
          name="apple-itunes-app"
          content={`app-id=6670308937, app-argument=https://mudepo.es/`}
        ></meta>

        <link rel="stylesheet" href="https://pdcc.gdpr.es/pdcc.min.css" />
        <script charSet="utf-8" src="https://pdcc.gdpr.es/pdcc.min.js"></script>
        <ClientSideScript />
      </head>
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
