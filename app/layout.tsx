import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

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
    <html lang="en">

      <body className={`${outfit.className} bg-black`}>{children}</body>
    </html>
  );
}
