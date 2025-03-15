import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { EnhancedThemeProvider } from "@/components/enhanced-theme-provider"

// 加载Inter字体并指定拉丁文子集
const inter = Inter({ subsets: ["latin"] })

// 定义网站元数据，包括标题和描述
export const metadata: Metadata = {
  title: "TechCRM - 客户销售管理系统", // 网站标题
  description: "高科技感的客户销售管理系统", // 网站描述
  generator: 'v0.dev' // 生成器标识
}

/**
 * 根布局组件
 * 作为应用的顶层布局，包裹所有页面内容
 * 
 * @param {Object} props - 组件属性
 * @param {React.ReactNode} props.children - 子组件，将被渲染在布局内
 * @returns {JSX.Element} 根布局JSX元素
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // lang属性设置为中文，suppressHydrationWarning用于抑制主题切换时的水合警告
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        {/* 
          EnhancedThemeProvider：主题提供者组件，管理应用的主题状态
          defaultTheme：设置默认主题为暗色模式
        */}
        <EnhancedThemeProvider defaultTheme="dark">{children}</EnhancedThemeProvider>
      </body>
    </html>
  )
}

// 导入全局样式
import './globals.css'