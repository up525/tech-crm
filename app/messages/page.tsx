import { DashboardLayout } from "@/components/dashboard-layout"
import { MessageCenter } from "@/components/message-center"

export default function MessagesPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">消息中心</h1>
      </div>

      <MessageCenter />
    </DashboardLayout>
  )
}

