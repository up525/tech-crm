import { DashboardLayout } from "@/components/dashboard-layout"
import { CalendarView } from "@/components/calendar-view"

export default function CalendarPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">日程安排</h1>
      </div>

      <CalendarView />
    </DashboardLayout>
  )
}

