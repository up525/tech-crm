import { DashboardLayout } from "@/components/dashboard-layout"
import { ContractList } from "@/components/contract-list"
import { ContractStats } from "@/components/contract-stats"

export default function ContractsPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">合同管理</h1>
      </div>

      <ContractStats />
      <div className="mt-6">
        <ContractList />
      </div>
    </DashboardLayout>
  )
}

