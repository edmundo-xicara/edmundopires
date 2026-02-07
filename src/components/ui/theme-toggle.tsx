"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={cn("inline-flex items-center justify-center w-10 h-10", className)} />
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <div
      className={cn(
        "relative inline-flex h-8 w-14 cursor-pointer items-center rounded-full border border-border bg-muted p-1 transition-colors duration-250",
        isDark ? "bg-muted" : "bg-muted",
        className
      )}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      role="button"
      tabIndex={0}
    >
      <div
        className={cn(
          "relative h-6 w-6 rounded-full bg-background shadow-sm transition-transform duration-250 flex items-center justify-center",
          isDark ? "translate-x-6" : "translate-x-0"
        )}
      >
        <div className="relative h-4 w-4">
          <Sun
            className={cn(
              "absolute inset-0 h-4 w-4 text-foreground transition-all duration-250",
              isDark ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
            )}
          />
          <Moon
            className={cn(
              "absolute inset-0 h-4 w-4 text-foreground transition-all duration-250",
              isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"
            )}
          />
        </div>
      </div>
    </div>
  )
}
