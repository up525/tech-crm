import { DashboardLayout } from "@/components/dashboard-layout"
import { OrderList } from "@/components/order-list"
import { OrderStats } from "@/components/order-stats"

export default function OrdersPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">销售订单</h1>
      </div>

      <OrderStats />
      <div className="mt-6">
        <OrderList />
      </div>
    </DashboardLayout>
  )
}

