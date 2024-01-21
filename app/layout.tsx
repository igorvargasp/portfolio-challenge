import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Theme from "@/providers/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"],weight: ['100','200', '300', '400', '500', '600'] });

export const metadata: Metadata = {
  title: "Igor`s Portfolio",
  description: "Igor`s personal website ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" >

      <body className={`${outfit.className} dark:bg-black`}>
        <Theme>
        <Header/>
        {children}
        <Footer/>
        </Theme>
      </body>
    </html>
  );
}
