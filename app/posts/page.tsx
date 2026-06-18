import Link from "next/link"
import { prisma } from "@/lib/prisma"
import { Show } from '@clerk/nextjs'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card"

export default async function Page() {
  const posts = await prisma.post.findMany()

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 w-full">
      <div className="flex items-center justify-between pb-6 border-b border-border">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Posts</h1>
          <p className="text-sm text-muted-foreground mt-1">{posts.length} post{posts.length !== 1 ? "s" : ""} total</p>
        </div>
        <Button asChild>
          <Link href="/posts/new">New Post</Link>
        </Button>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-24">
          <p className="text-muted-foreground text-lg">No posts yet.</p>
          <Button asChild className="mt-4">
            <Link href="/posts/new">Create the first post</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {posts.map((post) => (
            <Card key={post.id} className="flex flex-col gap-3">
              <CardContent className="flex flex-col gap-3 pt-(--card-spacing) flex-1">
                <div className="flex items-center justify-between">
                  <Badge variant={post.published ? "default" : "secondary"}>
                    {post.published ? "Published" : "Draft"}
                  </Badge>
                  <span className="text-xs text-muted-foreground">#{post.id}</span>
                </div>

                <h2 className="text-base font-medium leading-snug">{post.title}</h2>

                {post.content && (
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {post.content}
                  </p>
                )}

                <div className="flex items-center gap-2 pt-3 border-t border-border mt-auto">
                  <span className="text-xs text-muted-foreground">by {post.authorId.slice(0, 8)}…</span>
                </div>
              </CardContent>
            </Card>
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
