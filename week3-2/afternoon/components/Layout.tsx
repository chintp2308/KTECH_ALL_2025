import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Task Manager</h1>
          <div className="space-x-4">
            <Link href="/">Home</Link>
            <Link href="/task-ssr">SSR</Link>
            <Link href="/task-ssg">SSG</Link>
            <Link href="/task-csr">CSR</Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow container mx-auto p-4">{children}</main>

      <footer className="bg-gray-200 text-center p-4 text-sm text-gray-700">
        © 2025 PC – All rights reserved.
      </footer>
    </div>
  );
}
