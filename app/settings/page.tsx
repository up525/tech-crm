import { DashboardLayout } from "@/components/dashboard-layout"
import { SettingsTabs } from "@/components/settings-tabs"

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">系统设置</h1>
      </div>

      <SettingsTabs />
    </DashboardLayout>
  )
}

