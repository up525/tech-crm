"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { CalendarView } from "@/components/calendar-view"
import { Button } from "@/components/ui/button"
import { PlusCircle, Filter, Calendar, ChevronLeft, ChevronRight } from "lucide-react"

export default function CalendarPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">日程安排</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center border rounded-lg overflow-hidden">
            <Button variant="ghost" size="sm" className="h-8 px-2 rounded-none border-r">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 px-3 rounded-none border-r">今天</Button>
            <Button variant="ghost" size="sm" className="h-8 px-2 rounded-none">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="secondary" size="sm" className="flex items-center gap-1">
            <Filter className="h-4 w-4 mr-1" />
            筛选
          </Button>
          <Button variant="default" size="sm" className="flex items-center gap-1">
            <PlusCircle className="h-4 w-4 mr-1" />
            新建日程
          </Button>
        </div>
      </div>

      <CalendarView />
    </DashboardLayout>
  )
}

