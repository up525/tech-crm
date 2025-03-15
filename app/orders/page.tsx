"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { OrderList } from "@/components/order-list"
import { OrderStats } from "@/components/order-stats"
import { Button } from "@/components/ui/button"
import { PlusCircle, Download, Filter, RefreshCcw } from "lucide-react"
import { useState } from "react"

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">销售订单</h1>
        <div className="flex items-center gap-4">
          <Button variant="secondary" size="sm" className="flex items-center gap-1">
            <RefreshCcw className="h-4 w-4 mr-1" />
            刷新
          </Button>
          <Button variant="secondary" size="sm" className="flex items-center gap-1">
            <Filter className="h-4 w-4 mr-1" />
            筛选
          </Button>
          <Button variant="secondary" size="sm" className="flex items-center gap-1">
            <Download className="h-4 w-4 mr-1" />
            导出
          </Button>
          <Button variant="default" size="sm" className="flex items-center gap-1">
            <PlusCircle className="h-4 w-4 mr-1" />
            新增订单
          </Button>
        </div>
      </div>

      <OrderStats />
      <div className="mt-6">
        <OrderList 
          searchTerm={searchTerm} 
          statusFilter={statusFilter} 
          onSearchChange={setSearchTerm} 
          onStatusFilterChange={setStatusFilter} 
        />
      </div>
    </DashboardLayout>
  )
}

