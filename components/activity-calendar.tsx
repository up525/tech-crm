"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// 模拟活动数据
const activities = [
  { date: "2023-03-15", title: "与科技创新有限公司会议", type: "meeting" },
  { date: "2023-03-16", title: "产品演示：数据分析平台", type: "demo" },
  { date: "2023-03-18", title: "销售团队周会", type: "internal" },
  { date: "2023-03-20", title: "客户回访：未来科技集团", type: "follow-up" },
  { date: "2023-03-22", title: "新产品发布会", type: "event" },
  { date: "2023-03-25", title: "季度销售总结", type: "internal" },
]

export function ActivityCalendar() {
  const [currentMonth, setCurrentMonth] = useState(2) // 3月
  const [currentYear, setCurrentYear] = useState(2023)

  const monthNames = [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月",
  ]

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  // 生成日历网格
  const calendarDays = []
  const dayOffset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1 // 调整为周一开始

  // 添加上个月的天数
  for (let i = 0; i < dayOffset; i++) {
    calendarDays.push(null)
  }

  // 添加当月的天数
  for (let day = 1; day <= daysInMonth; day++) {
    const date = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
    const dayActivities = activities.filter((activity) => activity.date === date)
    calendarDays.push({ day, activities: dayActivities })
  }

  // 获取活动类型的颜色
  const getActivityColor = (type: string) => {
    switch (type) {
      case "meeting":
        return "bg-blue-500"
      case "demo":
        return "bg-green-500"
      case "internal":
        return "bg-purple-500"
      case "follow-up":
        return "bg-yellow-500"
      case "event":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <Card className="tech-card">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>活动日历</CardTitle>
          <CardDescription>查看计划中的销售活动和会议</CardDescription>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={prevMonth}>
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">上个月</span>
          </Button>
          <div className="font-medium">
            {monthNames[currentMonth]} {currentYear}
          </div>
          <Button variant="outline" size="icon" onClick={nextMonth}>
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">下个月</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-1 text-center text-sm">
          <div className="font-medium text-muted-foreground">一</div>
          <div className="font-medium text-muted-foreground">二</div>
          <div className="font-medium text-muted-foreground">三</div>
          <div className="font-medium text-muted-foreground">四</div>
          <div className="font-medium text-muted-foreground">五</div>
          <div className="font-medium text-muted-foreground">六</div>
          <div className="font-medium text-muted-foreground">日</div>
          {calendarDays.map((dayData, index) => (
            <div
              key={index}
              className={`aspect-square p-1 ${
                dayData ? "rounded-md border border-border/50 bg-card hover:bg-muted/50" : ""
              }`}
            >
              {dayData && (
                <div className="h-full w-full">
                  <div className="text-xs font-medium">{dayData.day}</div>
                  <div className="mt-1 flex flex-col gap-1">
                    {dayData.activities.slice(0, 2).map((activity, actIndex) => (
                      <div key={actIndex} className="flex items-center gap-1 overflow-hidden text-xs">
                        <div className={`h-2 w-2 rounded-full ${getActivityColor(activity.type)}`} />
                        <div className="truncate">{activity.title}</div>
                      </div>
                    ))}
                    {dayData.activities.length > 2 && (
                      <Badge variant="outline" className="mt-1 text-xs">
                        +{dayData.activities.length - 2} 更多
                      </Badge>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

