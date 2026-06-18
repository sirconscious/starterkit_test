import Link from "next/link"
import { redirect } from "next/navigation"
import { auth } from "@clerk/nextjs/server"
import { prisma } from "@/lib/prisma"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

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
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <Link href="/posts" className="text-muted-foreground hover:text-foreground transition-colors">
          ← Posts
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium">New post</span>
      </div>

      <h1 className="text-2xl font-semibold tracking-tight mb-8">New post</h1>

      <form action={createPost} className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            type="text"
            required
            placeholder="Enter a post title…"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="content">Content</Label>
          <Textarea
            id="content"
            name="content"
            rows={6}
            placeholder="Write your post content here…"
          />
        </div>

        <div className="flex items-center justify-between bg-muted rounded-lg px-4 py-3 border border-border">
          <div>
            <p className="text-sm font-medium text-foreground">Publish immediately</p>
            <p className="text-xs text-muted-foreground">Post will be visible to everyone</p>
          </div>
          <input type="checkbox" name="published" className="size-4 accent-foreground rounded" />
        </div>

        <div className="flex items-center gap-3 pt-2">
          <Button type="submit">Create post</Button>
          <Button variant="outline" asChild>
            <Link href="/posts">Cancel</Link>
          </Button>
        </div>
      </form>
    </div>
  )
}
