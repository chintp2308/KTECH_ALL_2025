import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="flex gap-4 p-4 bg-gray-100 justify-center ">
          <Link
            href="/"
            className="text-green-600 hover:text-green-800 hover:font-bold"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="text-green-600 hover:text-green-800 hover:font-bold"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-green-600 hover:text-green-800 hover:font-bold"
          >
            Contact
          </Link>
          <Link
            href="/products"
            className="text-green-600 hover:text-green-800 hover:font-bold"
          >
            Products
          </Link>
          <Link
            href="/login"
            className="text-green-600 hover:text-green-800 hover:font-bold"
          >
            Login
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
