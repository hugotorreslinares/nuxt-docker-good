import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Header } from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js App",
  description: "Modern layout with Header, Body, Footer and NextAuth Google Authentication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-50`}
      >
        <Providers>
          <Header />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <footer className="w-full border-t border-gray-200 dark:border-gray-800 py-6 bg-white dark:bg-gray-950">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                &copy; {new Date().getFullYear()} NextApp. All rights reserved.
              </p>
              <div className="flex gap-4 text-xs text-gray-500 dark:text-gray-400">
                <a href="#" className="hover:underline">Privacy Policy</a>
                <a href="#" className="hover:underline">Terms of Service</a>
              </div>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
