"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  ShoppingCart,
  FileText,
  Calendar,
} from "lucide-react"

/**
 * 导航项目配置数组
 * 定义应用主导航的所有菜单项，包括名称、链接和图标
 */
const navItems = [
  {
    name: "仪表盘",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "客户管理",
    href: "/customers",
    icon: Users,
  },
  {
    name: "销售订单",
    href: "/orders",
    icon: ShoppingCart,
  },
  {
    name: "数据分析",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    name: "合同管理",
    href: "/contracts",
    icon: FileText,
  },
  {
    name: "日程安排",
    href: "/calendar",
    icon: Calendar,
  },
  {
    name: "系统设置",
    href: "/settings",
    icon: Settings,
  },
]

/**
 * 主导航组件
 * 显示应用程序的主要导航菜单，支持当前页面高亮显示
 * 
 * @returns {JSX.Element} 导航菜单JSX元素
 */
export function MainNav() {
  // 获取当前路径，用于确定哪个导航项是活跃的
  const pathname = usePathname()

  return (
    <nav className="flex flex-col gap-2 p-2">
      {/* 遍历导航项并渲染每个导航链接 */}
      {navItems.map((item, index) => {
        // 检查当前路径是否与导航项的href匹配，用于确定是否为活跃状态
        const isActive = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              // 基础样式和动态样式组合
              "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 tech-border",
              // 条件样式：活跃状态使用主色调，否则使用次要前景色并在悬停时变化
              isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
            style={{
              // 添加延迟动画效果，每个菜单项的延迟时间依次增加
              animationDelay: `${index * 50}ms`,
            }}
          >
            {/* 渲染导航项的图标，根据激活状态应用不同样式 */}
            <item.icon
              className={cn(
                "h-5 w-5 shrink-0 transition-all duration-200",
                isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground",
              )}
            />
            {/* 导航项的名称 */}
            {item.name}
          </Link>
        )
      })}
    </nav>
  )
}

