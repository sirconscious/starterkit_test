import Link from "next/link";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          CRUD App
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A simple post management app built with Next.js, Clerk authentication, and Prisma on Postgres.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button asChild>
            <Link href="/posts">View Posts</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/posts/new">New Post</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
