import { DashboardLayout } from "@/components/dashboard-layout"
import { SalesOverview } from "@/components/sales-overview"
import { ProductPerformance } from "@/components/product-performance"
import { SalesTeamPerformance } from "@/components/sales-team-performance"
import { ConversionRates } from "@/components/conversion-rates"
import { RegionalSales } from "@/components/regional-sales"

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">数据分析</h1>
      </div>

      <div className="space-y-6">
        <SalesOverview />

        <div className="grid gap-6 md:grid-cols-2">
          <ProductPerformance />
          <SalesTeamPerformance />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <ConversionRates />
          <RegionalSales />
        </div>
      </div>
    </DashboardLayout>
  )
}

