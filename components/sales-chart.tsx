"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// 模拟销售数据
const salesData = {
  weekly: {
    "2023": [
      { label: "周一", value: 4200 },
      { label: "周二", value: 4500 },
      { label: "周三", value: 4800 },
      { label: "周四", value: 5200 },
      { label: "周五", value: 5800 },
      { label: "周六", value: 6000 },
      { label: "周日", value: 6200 },
    ],
    "2022": [
      { label: "周一", value: 3800 },
      { label: "周二", value: 4100 },
      { label: "周三", value: 4300 },
      { label: "周四", value: 4600 },
      { label: "周五", value: 5100 },
      { label: "周六", value: 5400 },
      { label: "周日", value: 5600 },
    ],
    "2021": [
      { label: "周一", value: 3200 },
      { label: "周二", value: 3500 },
      { label: "周三", value: 3700 },
      { label: "周四", value: 4000 },
      { label: "周五", value: 4300 },
      { label: "周六", value: 4500 },
      { label: "周日", value: 4700 },
    ],
  },
  monthly: {
    "2023": [
      { label: "1月", value: 18000 },
      { label: "2月", value: 21000 },
      { label: "3月", value: 24000 },
      { label: "4月", value: 28000 },
      { label: "5月", value: 31000 },
      { label: "6月", value: 35000 },
      { label: "7月", value: 38000 },
      { label: "8月", value: 42000 },
      { label: "9月", value: 45000 },
      { label: "10月", value: 48000 },
      { label: "11月", value: 52000 },
      { label: "12月", value: 56000 },
    ],
    "2022": [
      { label: "1月", value: 16000 },
      { label: "2月", value: 19000 },
      { label: "3月", value: 22000 },
      { label: "4月", value: 25000 },
      { label: "5月", value: 28000 },
      { label: "6月", value: 31000 },
      { label: "7月", value: 34000 },
      { label: "8月", value: 37000 },
      { label: "9月", value: 40000 },
      { label: "10月", value: 43000 },
      { label: "11月", value: 46000 },
      { label: "12月", value: 49000 },
    ],
    "2021": [
      { label: "1月", value: 14000 },
      { label: "2月", value: 16000 },
      { label: "3月", value: 18000 },
      { label: "4月", value: 21000 },
      { label: "5月", value: 24000 },
      { label: "6月", value: 27000 },
      { label: "7月", value: 30000 },
      { label: "8月", value: 33000 },
      { label: "9月", value: 36000 },
      { label: "10月", value: 39000 },
      { label: "11月", value: 42000 },
      { label: "12月", value: 45000 },
    ],
  },
  yearly: {
    all: [
      { label: "2019", value: 320000 },
      { label: "2020", value: 380000 },
      { label: "2021", value: 450000 },
      { label: "2022", value: 520000 },
      { label: "2023", value: 580000 },
    ],
  },
}

export function SalesChart() {
  const [activeTab, setActiveTab] = useState("weekly")
  const [selectedYear, setSelectedYear] = useState("2023")
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // 清除画布
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // 设置画布尺寸
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // 获取当前数据
    let data: { label: string; value: number }[] = []

    if (activeTab === "weekly") {
      data = salesData.weekly[selectedYear as keyof typeof salesData.weekly] || []
    } else if (activeTab === "monthly") {
      data = salesData.monthly[selectedYear as keyof typeof salesData.monthly] || []
    } else {
      data = salesData.yearly.all
    }

    // 计算最大值和最小值
    const max = Math.max(...data.map((item) => item.value)) * 1.1
    const min = Math.min(...data.map((item) => item.value)) * 0.9

    // 绘制网格
    ctx.strokeStyle = "rgba(99, 102, 241, 0.1)"
    ctx.lineWidth = 1

    const gridCount = 5
    const gridHeight = rect.height / gridCount
    for (let i = 1; i < gridCount; i++) {
      const y = i * gridHeight
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(rect.width, y)
      ctx.stroke()
    }

    // 绘制折线图
    const padding = 20
    const chartWidth = rect.width - padding * 2
    const chartHeight = rect.height - padding * 2
    const pointWidth = chartWidth / (data.length - 1)

    // 绘制折线
    ctx.strokeStyle = "rgba(0, 112, 243, 0.8)"
    ctx.lineWidth = 2
    ctx.beginPath()
    for (let i = 0; i < data.length; i++) {
      const x = padding + i * pointWidth
      const y = padding + chartHeight - ((data[i].value - min) / (max - min)) * chartHeight
      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    }
    ctx.stroke()

    // 绘制区域
    const gradient = ctx.createLinearGradient(0, 0, 0, rect.height)
    gradient.addColorStop(0, "rgba(0, 112, 243, 0.2)")
    gradient.addColorStop(1, "rgba(0, 112, 243, 0)")
    ctx.fillStyle = gradient
    ctx.beginPath()
    for (let i = 0; i < data.length; i++) {
      const x = padding + i * pointWidth
      const y = padding + chartHeight - ((data[i].value - min) / (max - min)) * chartHeight
      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    }
    ctx.lineTo(padding + (data.length - 1) * pointWidth, rect.height - padding)
    ctx.lineTo(padding, rect.height - padding)
    ctx.closePath()
    ctx.fill()

    // 绘制点
    ctx.fillStyle = "#0070f3"
    for (let i = 0; i < data.length; i++) {
      const x = padding + i * pointWidth
      const y = padding + chartHeight - ((data[i].value - min) / (max - min)) * chartHeight
      ctx.beginPath()
      ctx.arc(x, y, 4, 0, Math.PI * 2)
      ctx.fill()
    }

    // 绘制标签
    ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
    ctx.font = "10px sans-serif"
    ctx.textAlign = "center"
    for (let i = 0; i < data.length; i++) {
      const x = padding + i * pointWidth
      const y = rect.height - 5
      ctx.fillText(data[i].label, x, y)
    }

    // 绘制数值
    ctx.fillStyle = "rgba(255, 255, 255, 0.9)"
    ctx.font = "10px sans-serif"
    ctx.textAlign = "center"
    for (let i = 0; i < data.length; i++) {
      const x = padding + i * pointWidth
      const y = padding + chartHeight - ((data[i].value - min) / (max - min)) * chartHeight
      ctx.fillText(`¥${data[i].value.toLocaleString()}`, x, y - 10)
    }
  }, [activeTab, selectedYear])

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    // 如果切换到年度视图，不需要选择年份
    if (value === "yearly") {
      setSelectedYear("all")
    } else {
      setSelectedYear("2023")
    }
  }

  return (
    <Card className="tech-card">
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div>
            <CardTitle>销售趋势</CardTitle>
            <CardDescription>查看不同时间段的销售数据</CardDescription>
          </div>
          {activeTab !== "yearly" && (
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-[100px] mt-2 sm:mt-0">
                <SelectValue placeholder="选择年份" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
              </SelectContent>
            </Select>
          )}
        </div>
        <Tabs defaultValue="weekly" className="w-full" onValueChange={handleTabChange}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="weekly">周</TabsTrigger>
            <TabsTrigger value="monthly">月</TabsTrigger>
            <TabsTrigger value="yearly">年</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <canvas ref={canvasRef} className="h-full w-full" />
        </div>
      </CardContent>
    </Card>
  )
}

