import type React from "react"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { UserMenu } from "@/components/user-menu"
import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background/95 px-6 backdrop-blur">
        <div className="flex items-center gap-2 font-bold text-xl text-primary">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">T</div>
          客户销售管理系统
        </div>
        <div className="flex-1">
          <form className="hidden sm:block">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="搜索..."
                className="w-full rounded-lg bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>
          </form>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Bell className="h-5 w-5" />
            <span className="sr-only">通知</span>
          </Button>
          <ThemeToggle />
          <UserMenu />
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 shrink-0 border-r bg-card/50 sm:block">
          <div className="flex h-full max-h-screen flex-col">
            <div className="flex-1 overflow-auto py-2">
              <MainNav />
            </div>
          </div>
        </aside>
        <main className="flex-1 overflow-auto bg-muted/10 hexagon-pattern">
          <div className="container py-6">{children}</div>
        </main>
      </div>
    </div>
  )
}

