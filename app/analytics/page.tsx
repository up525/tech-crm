"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { SalesOverview } from "@/components/sales-overview"
import { ProductPerformance } from "@/components/product-performance"
import { SalesTeamPerformance } from "@/components/sales-team-performance"
import { ConversionRates } from "@/components/conversion-rates"
import { RegionalSales } from "@/components/regional-sales"
import { Button } from "@/components/ui/button"
import { Download, Filter, Share2 } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">数据分析</h1>
        <div className="flex items-center gap-4">
          <Button variant="secondary" size="sm" className="flex items-center gap-1">
            <Filter className="h-4 w-4 mr-1" />
            时间筛选
          </Button>
          <Button variant="secondary" size="sm" className="flex items-center gap-1">
            <Share2 className="h-4 w-4 mr-1" />
            分享
          </Button>
          <Button variant="default" size="sm" className="flex items-center gap-1">
            <Download className="h-4 w-4 mr-1" />
            导出报表
          </Button>
        </div>
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

