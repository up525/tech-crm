"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { SettingsTabs } from "@/components/settings-tabs"
import { Button } from "@/components/ui/button"
import { RotateCcw, Save } from "lucide-react"

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">系统设置</h1>
        <div className="flex items-center gap-4">
          <Button variant="secondary" size="sm" className="flex items-center gap-1">
            <RotateCcw className="h-4 w-4 mr-1" />
            重置
          </Button>
          <Button variant="default" size="sm" className="flex items-center gap-1">
            <Save className="h-4 w-4 mr-1" />
            保存设置
          </Button>
        </div>
      </div>

      <SettingsTabs />
    </DashboardLayout>
  )
}

