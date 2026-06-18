"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun data-icon="inline-start" className="hidden dark:block" />
      <Moon data-icon="inline-start" className="block dark:hidden" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
