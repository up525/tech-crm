import { DashboardLayout } from "@/components/dashboard-layout"
import { CustomerList } from "@/components/customer-list"

export default function CustomersPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">客户管理</h1>
      </div>

      <CustomerList />
    </DashboardLayout>
  )
}

