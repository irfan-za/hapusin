import "./globals.css";
import { Inter } from "@next/font/google";
import Link from "next/link";
import { Header } from "./header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head />
      <body className="relative min-h-screen bg-black bg-gradient-to-tr from-zinc-900/50 to-zinc-700/30">
        <Header />

        <main className=" min-h-[80vh] ">{children}</main>

        <footer className="bottom-0 border-t inset-2x-0 border-zinc-500/10">
          <div className="flex flex-col gap-1 px-6 py-12 mx-auto text-xs text-center text-zinc-700 max-w-7xl lg:px-8">
            <p>
              Built by{" "}
              <Link
                href="https://portfolio.irfan-za.vercel.app/"
                className="font-semibold duration-150 hover:text-zinc-200"
              >
                @irfan-za
              </Link>
            </p>
            <p>
              Hapusin is deployed on{" "}
              <Link
                target="_blank"
                href="https://vercel.com"
                className="underline duration-150 hover:text-zinc-200"
              >
                Vercel
              </Link>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
