"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// 模拟客户分布数据
const distributionData = [
  { label: "北京", value: 30 },
  { label: "上海", value: 25 },
  { label: "广州", value: 15 },
  { label: "深圳", value: 12 },
  { label: "杭州", value: 8 },
  { label: "其他", value: 10 },
]

const colors = [
  "#0070f3", // 蓝色
  "#6366f1", // 靛蓝色
  "#10b981", // 绿色
  "#f59e0b", // 琥珀色
  "#ef4444", // 红色
  "#8b5cf6", // 紫色
]

export function CustomerDistribution() {
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

    // 计算总和
    const total = distributionData.reduce((sum, item) => sum + item.value, 0)

    // 绘制饼图
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const radius = Math.min(centerX, centerY) - 40

    let startAngle = 0
    distributionData.forEach((item, index) => {
      const sliceAngle = (2 * Math.PI * item.value) / total
      const endAngle = startAngle + sliceAngle

      // 绘制扇形
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, radius, startAngle, endAngle)
      ctx.closePath()

      // 填充颜色
      ctx.fillStyle = colors[index % colors.length]
      ctx.fill()

      // 绘制标签线
      const midAngle = startAngle + sliceAngle / 2
      const labelRadius = radius * 0.7
      const labelX = centerX + Math.cos(midAngle) * labelRadius
      const labelY = centerY + Math.sin(midAngle) * labelRadius

      // 绘制标签
      ctx.fillStyle = "#ffffff"
      ctx.font = "12px sans-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(`${item.label} ${Math.round(item.value)}%`, labelX, labelY)

      startAngle = endAngle
    })

    // 绘制中心圆
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius * 0.5, 0, 2 * Math.PI)
    ctx.fillStyle = "#1a1a1a"
    ctx.fill()

    // 绘制中心文字
    ctx.fillStyle = "#ffffff"
    ctx.font = "bold 14px sans-serif"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText("客户分布", centerX, centerY)
  }, [])

  return (
    <Card className="tech-card">
      <CardHeader>
        <CardTitle>客户地域分布</CardTitle>
        <CardDescription>按地区划分的客户分布情况</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <canvas ref={canvasRef} className="h-full w-full" />
        </div>
      </CardContent>
    </Card>
  )
}

