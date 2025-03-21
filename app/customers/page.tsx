"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { CustomerList } from "@/components/customer-list"
import { Button } from "@/components/ui/button"
import { PlusCircle, Download, Search, RefreshCcw } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function CustomersPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">客户管理</h1>
        <div className="flex items-center gap-2">
          <div className="relative mr-2">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="搜索客户..."
              className="w-[200px] pl-8 rounded-lg bg-background"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <Button variant="secondary" size="sm" className="mr-1">
            <RefreshCcw className="h-4 w-4 mr-1" />
            刷新
          </Button>
          <Button variant="secondary" size="sm" className="mr-1">
            <Download className="h-4 w-4 mr-1" />
            导出
          </Button>
          <Button variant="default" size="sm">
            <PlusCircle className="h-4 w-4 mr-1" />
            新增客户
          </Button>
        </div>
      </div>

      <CustomerList 
        searchTerm={searchTerm} 
        onSearchChange={setSearchTerm} 
        shouldShowAddButton={false} 
      />
    </DashboardLayout>
  )
} 