"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { ContractList } from "@/components/contract-list"
import { Button } from "@/components/ui/button"
import { PlusCircle, Download, FileText, RefreshCcw } from "lucide-react"
import { useState } from "react"

export default function ContractsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">合同管理</h1>
        <div className="flex items-center gap-4">
          <Button variant="secondary" size="sm" className="flex items-center gap-1">
            <RefreshCcw className="h-4 w-4 mr-1" />
            刷新
          </Button>
          <Button variant="secondary" size="sm" className="flex items-center gap-1">
            <FileText className="h-4 w-4 mr-1" />
            查看模板
          </Button>
          <Button variant="secondary" size="sm" className="flex items-center gap-1">
            <Download className="h-4 w-4 mr-1" />
            导出
          </Button>
          <Button variant="default" size="sm" className="flex items-center gap-1">
            <PlusCircle className="h-4 w-4 mr-1" />
            新增合同
          </Button>
        </div>
      </div>

      <ContractList 
        searchTerm={searchTerm} 
        statusFilter={statusFilter} 
        onSearchChange={setSearchTerm} 
        onStatusFilterChange={setStatusFilter} 
      />
    </DashboardLayout>
  )
}

