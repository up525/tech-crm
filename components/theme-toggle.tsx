"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { useEnhancedTheme } from "./enhanced-theme-provider"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const { colorTheme, setColorTheme } = useEnhancedTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <Button variant="ghost" size="icon" className="w-9 h-9 opacity-0" />
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="w-9 h-9 rounded-full transition-all duration-300 hover:bg-primary/10 hover:text-primary"
        >
          {theme === "dark" ? (
            <Moon className="h-5 w-5 transition-all duration-300" />
          ) : (
            <Sun className="h-5 w-5 transition-all duration-300" />
          )}
          <span className="sr-only">切换主题</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>浅色模式</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>深色模式</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>系统默认</DropdownMenuItem>
        <DropdownMenuItem className="border-t mt-1 pt-1" onClick={() => setColorTheme("dark")}>
          蓝色主题
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setColorTheme("purple")}>紫色主题</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setColorTheme("green")}>绿色主题</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setColorTheme("red")}>红色主题</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

