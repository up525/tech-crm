"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Plus, CalendarIcon, Clock, MapPin, Users } from "lucide-react"

// 模拟事件数据
const events = [
  {
    id: 1,
    title: "与科技创新有限公司会议",
    date: "2023-03-15",
    time: "10:00 - 11:30",
    location: "线上会议",
    type: "meeting",
    attendees: ["张三", "李四", "王五"],
  },
  {
    id: 2,
    title: "产品演示：数据分析平台",
    date: "2023-03-16",
    time: "14:00 - 15:30",
    location: "公司会议室A",
    type: "demo",
    attendees: ["赵六", "钱七"],
  },
  {
    id: 3,
    title: "销售团队周会",
    date: "2023-03-18",
    time: "09:30 - 10:30",
    location: "公司会议室B",
    type: "internal",
    attendees: ["张三", "李四", "王五", "赵六", "钱七"],
  },
  {
    id: 4,
    title: "客户回访：未来科技集团",
    date: "2023-03-20",
    time: "13:00 - 14:00",
    location: "客户办公室",
    type: "follow-up",
    attendees: ["张三", "王五"],
  },
  {
    id: 5,
    title: "新产品发布会",
    date: "2023-03-22",
    time: "15:00 - 17:00",
    location: "会展中心",
    type: "event",
    attendees: ["张三", "李四", "王五", "赵六", "钱七"],
  },
  {
    id: 6,
    title: "季度销售总结",
    date: "2023-03-25",
    time: "10:00 - 12:00",
    location: "公司会议室A",
    type: "internal",
    attendees: ["张三", "李四", "王五", "赵六"],
  },
]

export function CalendarView() {
  const [currentMonth, setCurrentMonth] = useState(2) // 3月
  const [currentYear, setCurrentYear] = useState(2023)
  const [selectedDate, setSelectedDate] = useState("2023-03-15")

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
    const dayEvents = events.filter((event) => event.date === date)
    calendarDays.push({ day, date, events: dayEvents })
  }

  // 获取事件类型的颜色
  const getEventColor = (type: string) => {
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

  // 获取选中日期的事件
  const selectedDateEvents = events.filter((event) => event.date === selectedDate)

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Card className="tech-card md:col-span-2">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={prevMonth}>
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">上个月</span>
              </Button>
              <div className="font-medium text-lg">
                {monthNames[currentMonth]} {currentYear}
              </div>
              <Button variant="outline" size="icon" onClick={nextMonth}>
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">下个月</span>
              </Button>
            </div>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              添加事件
            </Button>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-sm">
            <div className="font-medium text-muted-foreground p-2">一</div>
            <div className="font-medium text-muted-foreground p-2">二</div>
            <div className="font-medium text-muted-foreground p-2">三</div>
            <div className="font-medium text-muted-foreground p-2">四</div>
            <div className="font-medium text-muted-foreground p-2">五</div>
            <div className="font-medium text-muted-foreground p-2">六</div>
            <div className="font-medium text-muted-foreground p-2">日</div>
            {calendarDays.map((dayData, index) => (
              <div
                key={index}
                className={`min-h-[100px] p-1 ${
                  dayData
                    ? `rounded-md border ${
                        dayData.date === selectedDate
                          ? "border-primary bg-primary/10"
                          : "border-border/50 bg-card hover:bg-muted/50"
                      } cursor-pointer`
                    : ""
                }`}
                onClick={() => dayData && setSelectedDate(dayData.date)}
              >
                {dayData && (
                  <div className="h-full w-full">
                    <div className="text-xs font-medium p-1">{dayData.day}</div>
                    <div className="mt-1 flex flex-col gap-1">
                      {dayData.events.slice(0, 3).map((event, eventIndex) => (
                        <div
                          key={eventIndex}
                          className="flex items-center gap-1 overflow-hidden text-xs p-1 rounded-sm bg-muted/50"
                        >
                          <div className={`h-2 w-2 rounded-full ${getEventColor(event.type)}`} />
                          <div className="truncate">{event.title}</div>
                        </div>
                      ))}
                      {dayData.events.length > 3 && (
                        <Badge variant="outline" className="mt-1 text-xs">
                          +{dayData.events.length - 3} 更多
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
      <Card className="tech-card md:col-span-1">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <CalendarIcon className="h-5 w-5 text-primary" />
            <h3 className="font-medium text-lg">
              {selectedDate.split("-")[0]}年{selectedDate.split("-")[1]}月{selectedDate.split("-")[2]}日
            </h3>
          </div>
          {selectedDateEvents.length > 0 ? (
            <div className="space-y-4">
              {selectedDateEvents.map((event) => (
                <div key={event.id} className="p-3 rounded-lg border bg-card/50">
                  <h4 className="font-medium">{event.title}</h4>
                  <div className="mt-2 space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees.join(", ")}</span>
                    </div>
                  </div>
                  <div className="mt-3 flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      编辑
                    </Button>
                    <Button size="sm">详情</Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-[300px] text-muted-foreground">
              <CalendarIcon className="h-12 w-12 mb-2 opacity-20" />
              <p>当天没有安排的事件</p>
              <Button className="mt-4 gap-2">
                <Plus className="h-4 w-4" />
                添加事件
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

