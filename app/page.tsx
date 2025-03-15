import { redirect } from "next/navigation"

/**
 * 首页组件
 * 当用户访问网站根路径时，将自动重定向到仪表盘页面
 * 
 * @returns {void} - 执行重定向，不返回任何UI元素
 */
export default function Home() {
  // 使用Next.js的redirect函数将用户重定向到仪表盘页面
  redirect("/dashboard")
}

