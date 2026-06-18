import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          CRUD App
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          A simple post management app built with Next.js, Clerk authentication, and Prisma on Postgres.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/posts"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-gray-900 px-6 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
          >
            View Posts
          </Link>
          <Link
            href="/posts/new"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-gray-300 px-6 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            New Post
          </Link>
        </div>
      </div>
    </main>
  );
}
