import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { NextAuthProvider } from "@/components/providers/authProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home page",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAuthProvider>
      <html lang="en">
        <body className={inter.className}>
          <main>{children}</main>
        </body>
      </html>
    </NextAuthProvider>
  );
}
