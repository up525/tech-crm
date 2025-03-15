"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// 模拟区域销售数据
const regionalData = [
  { region: "华东", value: 35, color: "#0070f3" },
  { region: "华北", value: 25, color: "#6366f1" },
  { region: "华南", value: 20, color: "#10b981" },
  { region: "西南", value: 12, color: "#f59e0b" },
  { region: "西北", value: 8, color: "#ef4444" },
]

export function RegionalSales() {
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

    // 绘制饼图
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const radius = Math.min(centerX, centerY) - 40

    // 计算总和
    const total = regionalData.reduce((sum, item) => sum + item.value, 0)

    // 绘制饼图
    let startAngle = 0
    regionalData.forEach((item, index) => {
      const sliceAngle = (2 * Math.PI * item.value) / total
      const endAngle = startAngle + sliceAngle

      // 绘制扇形
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, radius, startAngle, endAngle)
      ctx.closePath()

      // 填充颜色
      ctx.fillStyle = item.color
      ctx.fill()

      // 绘制标签线
      const midAngle = startAngle + sliceAngle / 2
      const labelRadius = radius * 1.2
      const labelX = centerX + Math.cos(midAngle) * labelRadius
      const labelY = centerY + Math.sin(midAngle) * labelRadius

      // 绘制标签
      ctx.fillStyle = "#ffffff"
      ctx.font = "14px sans-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(`${item.region} ${item.value}%`, labelX, labelY)

      startAngle = endAngle
    })

    // 绘制中心圆
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius * 0.6, 0, 2 * Math.PI)
    ctx.fillStyle = "#1a1a1a"
    ctx.fill()

    // 绘制中心文字
    ctx.fillStyle = "#ffffff"
    ctx.font = "bold 16px sans-serif"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText("区域销售分布", centerX, centerY - 10)
    ctx.font = "14px sans-serif"
    ctx.fillText("按百分比", centerX, centerY + 15)
  }, [])

  return (
    <Card className="tech-card">
      <CardHeader>
        <CardTitle>区域销售分布</CardTitle>
        <CardDescription>按地区划分的销售额分布</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <canvas ref={canvasRef} className="h-full w-full" />
        </div>
      </CardContent>
    </Card>
  )
}

