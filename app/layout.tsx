import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes"
import "./globals.css";
import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

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
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <ClerkProvider>
          <header className="sticky top-0 z-50 flex items-center justify-between h-16 px-6 border-b border-border bg-background/90 backdrop-blur-sm">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              CRUD App
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/posts" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Posts
              </Link>
              <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </Link>
              <ThemeToggle />
              <Show when="signed-out">
                <SignInButton>
                  <Button variant="ghost" size="sm">
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton>
                  <Button size="sm">
                    Sign Up
                  </Button>
                </SignUpButton>
              </Show>
              <Show when="signed-in">
                <UserButton userProfileUrl="/user-profile" />
              </Show>
            </nav>
          </header>
          {children}
        </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
