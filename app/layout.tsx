import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "CRUD App", template: "%s | CRUD App" },
  description: "A simple CRUD app built with Next.js, Clerk, and Prisma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ClerkProvider>
          <header className="sticky top-0 z-10 flex items-center justify-between h-16 px-6 border-b border-gray-200 bg-white/90 backdrop-blur-sm">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              CRUD App
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link href="/posts" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Posts
              </Link>
              <Show when="signed-out">
                <SignInButton>
                  <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton>
                  <button className="bg-[#6c47ff] text-white rounded-full text-sm font-medium h-9 px-4 hover:bg-[#5a3ee0] transition-colors cursor-pointer">
                    Sign Up
                  </button>
                </SignUpButton>
              </Show>
              <Show when="signed-in">
                <UserButton />
              </Show>
            </nav>
          </header>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
