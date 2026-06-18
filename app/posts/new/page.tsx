import Link from "next/link"
import { redirect } from "next/navigation"
import { auth } from "@clerk/nextjs/server"
import { prisma } from "@/lib/prisma"

async function createPost(formData: FormData) {
  "use server"

  const { userId } = await auth()
  if (!userId) redirect("/sign-in")

  const title = formData.get("title") as string
  const content = formData.get("content") as string
  const published = formData.get("published") === "on"

  if (!title?.trim()) return

  await prisma.post.create({
    data: {
      title,
      content,
      published,
      authorId: userId,
    },
  })

  redirect("/posts")
}

export default async function NewPostPage() {
  return (
    <div className="max-w-xl mx-auto px-6 py-10 w-full">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/posts" className="text-gray-500 hover:text-gray-800 transition-colors">
          ← Posts
        </Link>
        <span>/</span>
        <span className="text-gray-800 font-medium">New post</span>
      </div>

      <h1 className="text-2xl font-semibold tracking-tight mb-8">New post</h1>

      <form action={createPost} className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="title" className="text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            required
            placeholder="Enter a post title…"
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-shadow"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="content" className="text-sm font-medium text-gray-700">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            rows={6}
            placeholder="Write your post content here…"
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-shadow"
          />
        </div>

        <div className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3 border border-gray-200">
          <div>
            <p className="text-sm font-medium text-gray-900">Publish immediately</p>
            <p className="text-xs text-gray-500">Post will be visible to everyone</p>
          </div>
          <input type="checkbox" name="published" className="w-4 h-4 accent-gray-900 rounded" />
        </div>

        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-gray-900 px-5 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
          >
            Create post
          </button>
          <Link
            href="/posts"
            className="inline-flex h-10 items-center justify-center rounded-lg border border-gray-300 px-5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  )
}