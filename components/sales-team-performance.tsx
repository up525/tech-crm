"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// 模拟销售团队数据
const salesTeam = [
  { name: "张三", sales: 325000, target: 300000, color: "#0070f3" },
  { name: "李四", sales: 280000, target: 300000, color: "#6366f1" },
  { name: "王五", sales: 210000, target: 250000, color: "#10b981" },
  { name: "赵六", sales: 185000, target: 200000, color: "#f59e0b" },
  { name: "钱七", sales: 150000, target: 180000, color: "#ef4444" },
]

export function SalesTeamPerformance() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // 设置画布尺寸
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // 绘制水平条形图
    const barHeight = 30
    const barGap = 20
    const maxValue = Math.max(...salesTeam.map((member) => Math.max(member.sales, member.target)))
    const chartWidth = rect.width - 150
    const startX = 120
    const startY = 30

    // 绘制标题
    ctx.fillStyle = "#ffffff"
    ctx.font = "14px sans-serif"
    ctx.textAlign = "left"
    ctx.fillText("销售额", startX, startY - 10)
    ctx.textAlign = "right"
    ctx.fillText("目标", rect.width - 10, startY - 10)

    salesTeam.forEach((member, index) => {
      const y = startY + index * (barHeight + barGap)

      // 绘制名称
      ctx.fillStyle = "#ffffff"
      ctx.font = "14px sans-serif"
      ctx.textAlign = "left"
      ctx.fillText(member.name, 10, y + barHeight / 2 + 5)

      // 绘制销售额条形
      const salesWidth = (member.sales / maxValue) * chartWidth
      ctx.fillStyle = member.color
      ctx.fillRect(startX, y, salesWidth, barHeight)

      // 绘制销售额文本
      ctx.fillStyle = "#ffffff"
      ctx.textAlign = "left"
      ctx.fillText(`¥${(member.sales / 10000).toFixed(1)}万`, startX + salesWidth + 5, y + barHeight / 2 + 5)

      // 绘制目标线
      const targetX = startX + (member.target / maxValue) * chartWidth
      ctx.strokeStyle = "#ffffff"
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(targetX, y)
      ctx.lineTo(targetX, y + barHeight)
      ctx.stroke()

      // 绘制目标文本
      ctx.fillStyle = "#ffffff"
      ctx.textAlign = "right"
      ctx.fillText(`¥${(member.target / 10000).toFixed(1)}万`, rect.width - 10, y + barHeight / 2 + 5)

      // 绘制完成率
      const completionRate = (member.sales / member.target) * 100
      const completionColor = completionRate >= 100 ? "#10b981" : completionRate >= 80 ? "#f59e0b" : "#ef4444"
      ctx.fillStyle = completionColor
      ctx.textAlign = "center"
      ctx.fillText(`${completionRate.toFixed(1)}%`, startX + salesWidth / 2, y + barHeight / 2 + 5)
    })
  }, [])

  return (
    <Card className="tech-card">
      <CardHeader>
        <CardTitle>销售团队表现</CardTitle>
        <CardDescription>销售团队成员的业绩和目标完成情况</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <canvas ref={canvasRef} className="h-full w-full" />
        </div>
      </CardContent>
    </Card>
  )
}

