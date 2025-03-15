"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// 模拟转化率数据
const conversionData = [
  { stage: "访问", value: 100, color: "#0070f3" },
  { stage: "注册", value: 65, color: "#6366f1" },
  { stage: "询价", value: 40, color: "#10b981" },
  { stage: "报价", value: 25, color: "#f59e0b" },
  { stage: "成交", value: 15, color: "#ef4444" },
]

export function ConversionRates() {
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

    // 绘制漏斗图
    const funnelWidth = rect.width * 0.8
    const funnelHeight = rect.height * 0.8
    const startX = (rect.width - funnelWidth) / 2
    const startY = (rect.height - funnelHeight) / 2
    const stageHeight = funnelHeight / conversionData.length

    // 计算每个阶段的宽度比例
    const maxValue = conversionData[0].value
    const widthRatios = conversionData.map((stage) => stage.value / maxValue)

    // 绘制漏斗
    conversionData.forEach((stage, index) => {
      const ratio = widthRatios[index]
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
        const prevRatio = widthRatios[index - 1]
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
      ctx.font = "14px sans-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(`${stage.stage} (${stage.value}%)`, rect.width / 2, y + stageHeight / 2)

      // 绘制转化率
      if (index > 0) {
        const conversionRate = (stage.value / conversionData[index - 1].value) * 100
        ctx.font = "12px sans-serif"
        ctx.fillText(`转化率: ${conversionRate.toFixed(1)}%`, rect.width / 2, y - 5)
      }
    })
  }, [])

  return (
    <Card className="tech-card">
      <CardHeader>
        <CardTitle>转化率分析</CardTitle>
        <CardDescription>销售漏斗各阶段转化率</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <canvas ref={canvasRef} className="h-full w-full" />
        </div>
      </CardContent>
    </Card>
  )
}

