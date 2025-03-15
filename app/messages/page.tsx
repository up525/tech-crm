"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { MessageCenter } from "@/components/message-center"
import { Button } from "@/components/ui/button"
import { PlusCircle, RefreshCcw, Bell } from "lucide-react"

export default function MessagesPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">消息中心</h1>
        <div className="flex items-center gap-4">
          <Button variant="secondary" size="sm" className="flex items-center gap-1">
            <RefreshCcw className="h-4 w-4 mr-1" />
            刷新
          </Button>
          <Button variant="secondary" size="sm" className="flex items-center gap-1">
            <Bell className="h-4 w-4 mr-1" />
            通知设置
          </Button>
          <Button variant="default" size="sm" className="flex items-center gap-1">
            <PlusCircle className="h-4 w-4 mr-1" />
            新建消息
          </Button>
        </div>
      </div>

      <MessageCenter />
    </DashboardLayout>
  )
}

