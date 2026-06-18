import Link from "next/link"
import { prisma } from "@/lib/prisma"
import { Show } from '@clerk/nextjs'


export default async function Page() {
  const posts = await prisma.post.findMany()

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 w-full">
      <div className="flex items-center justify-between pb-6 border-b border-gray-200">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Posts</h1>
          <p className="text-sm text-gray-500 mt-1">{posts.length} post{posts.length !== 1 ? "s" : ""} total</p>
        </div>
        <Link
          href="/posts/new"
          className="inline-flex h-9 items-center justify-center rounded-lg bg-gray-900 px-4 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
        >
          New Post
        </Link>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-24">
          <p className="text-gray-400 text-lg">No posts yet.</p>
          <Link
            href="/posts/new"
            className="inline-flex mt-4 h-9 items-center justify-center rounded-lg bg-gray-900 px-4 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
          >
            Create the first post
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-3 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-md ${
                    post.published
                      ? "bg-green-50 text-green-700"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {post.published ? "Published" : "Draft"}
                </span>
                <span className="text-xs text-gray-400">#{post.id}</span>
              </div>

              <h2 className="text-base font-medium leading-snug">{post.title}</h2>

              {post.content && (
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                  {post.content}
                </p>
              )}

              <div className="flex items-center gap-2 pt-3 border-t border-gray-100 mt-auto">
                <span className="text-xs text-gray-400">by {post.authorId.slice(0, 8)}…</span>
              </div>
            </div>
          ))}
        </div>
      )} 
       <Show
        when={{ plan: 'primium' }}
        fallback={
          <div>
            <p>This is a premium feature.</p>
            <a href="/pricing">Upgrade to Premium →</a>
          </div>
        }
      >
        <p>Premium only content!</p>
      </Show>
    </div>
  )
}