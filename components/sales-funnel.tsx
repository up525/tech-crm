"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// 模拟销售漏斗数据
const funnelData = [
  { stage: "潜在客户", count: 250, color: "#0070f3" },
  { stage: "初步接触", count: 180, color: "#6366f1" },
  { stage: "需求分析", count: 120, color: "#10b981" },
  { stage: "方案提供", count: 80, color: "#f59e0b" },
  { stage: "商务谈判", count: 40, color: "#ef4444" },
  { stage: "成交", count: 25, color: "#8b5cf6" },
]

export function SalesFunnel() {
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

    // 绘制漏斗
    const maxCount = funnelData[0].count
    const funnelWidth = rect.width * 0.8
    const funnelHeight = rect.height * 0.8
    const startX = (rect.width - funnelWidth) / 2
    const startY = (rect.height - funnelHeight) / 2
    const stageHeight = funnelHeight / funnelData.length

    funnelData.forEach((stage, index) => {
      const ratio = stage.count / maxCount
      const width = funnelWidth * ratio
      const x = startX + (funnelWidth - width) / 2
      const y = startY + index * stageHeight

      // 绘制梯形
      ctx.beginPath()
      if (index === 0) {
        // 第一个阶段是矩形
        ctx.rect(x, y, width, stageHeight)
      } else {
        // 其他阶段是梯形
        const prevRatio = funnelData[index - 1].count / maxCount
        const prevWidth = funnelWidth * prevRatio
        const prevX = startX + (funnelWidth - prevWidth) / 2

        ctx.moveTo(prevX, y)
        ctx.lineTo(prevX + prevWidth, y)
        ctx.lineTo(x + width, y + stageHeight)
        ctx.lineTo(x, y + stageHeight)
        ctx.closePath()
      }

      // 填充颜色
      const gradient = ctx.createLinearGradient(x, y, x + width, y)
      gradient.addColorStop(0, stage.color)
      gradient.addColorStop(1, `${stage.color}99`)
      ctx.fillStyle = gradient
      ctx.fill()

      // 绘制边框
      ctx.strokeStyle = "#333333"
      ctx.lineWidth = 1
      ctx.stroke()

      // 绘制文本
      ctx.fillStyle = "#ffffff"
      ctx.font = "12px sans-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(`${stage.stage} (${stage.count})`, rect.width / 2, y + stageHeight / 2)
    })
  }, [])

  return (
    <Card className="tech-card">
      <CardHeader>
        <CardTitle>销售漏斗</CardTitle>
        <CardDescription>各阶段销售转化情况</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <canvas ref={canvasRef} className="h-full w-full" />
        </div>
      </CardContent>
    </Card>
  )
}

