import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav className="flex justify-center gap-4 p-4 bg-green-200 ">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/products">Products</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/login">Login</Link>
      </nav>
      <Component {...pageProps} />
    </>
  );
}
