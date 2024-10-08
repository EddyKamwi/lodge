"use Client"
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Nav tabs */}
        <Navbar />
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
