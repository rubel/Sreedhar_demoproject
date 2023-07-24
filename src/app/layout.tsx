import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Demo for Sreedhar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} container p-4 m-auto bg-slate-800 h-screen text-slate-50`}
      >
        <div className="mb-6">
          <ul className="flex">
            <li>
              <Link
                className="px-3 py-2 bg-gray-200 text-slate-700 mr-2 cursor-pointer rounded-md"
                href="/"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                className="px-3 py-2 bg-gray-200 text-slate-700 mr-2 cursor-pointer rounded-md"
                href="/new"
              >
                Create User
              </Link>
            </li>
          </ul>
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
