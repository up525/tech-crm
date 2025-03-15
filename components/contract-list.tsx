"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  MoreHorizontal,
  Search,
  Filter,
  Download,
  Plus,
  FileText,
  Eye,
  Edit,
  Trash2,
  FileSignature,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

// 模拟合同数据
const contracts = [
  {
    id: "CON-001",
    title: "企业级云服务协议",
    customer: "科技创新有限公司",
    value: "¥250,000",
    status: "已签署",
    startDate: "2023-01-15",
    endDate: "2024-01-14",
    type: "服务协议",
  },
  {
    id: "CON-002",
    title: "数据分析平台年度订阅",
    customer: "数字解决方案公司",
    value: "¥180,000",
    status: "待审核",
    startDate: "2023-03-01",
    endDate: "2024-02-29",
    type: "订阅协议",
  },
  {
    id: "CON-003",
    title: "智能办公系统企业版许可",
    customer: "未来科技集团",
    value: "¥420,000",
    status: "已签署",
    startDate: "2023-02-10",
    endDate: "2025-02-09",
    type: "许可协议",
  },
  {
    id: "CON-004",
    title: "网络安全解决方案",
    customer: "智能系统有限公司",
    value: "¥150,000",
    status: "草稿",
    startDate: "-",
    endDate: "-",
    type: "服务协议",
  },
  {
    id: "CON-005",
    title: "人工智能API服务季度订阅",
    customer: "云计算服务公司",
    value: "¥90,000",
    status: "已签署",
    startDate: "2023-01-01",
    endDate: "2023-12-31",
    type: "订阅协议",
  },
  {
    id: "CON-006",
    title: "云存储服务高级版",
    customer: "移动应用开发公司",
    value: "¥120,000",
    status: "待签署",
    startDate: "2023-04-01",
    endDate: "2024-03-31",
    type: "服务协议",
  },
  {
    id: "CON-007",
    title: "客户关系管理系统实施",
    customer: "电子商务平台",
    value: "¥350,000",
    status: "已签署",
    startDate: "2023-02-15",
    endDate: "2023-08-14",
    type: "项目协议",
  },
  {
    id: "CON-008",
    title: "在线学习平台企业版",
    customer: "教育科技公司",
    value: "¥280,000",
    status: "即将到期",
    startDate: "2022-04-01",
    endDate: "2023-04-30",
    type: "许可协议",
  },
]

export function ContractList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredContracts = contracts.filter(
    (contract) =>
      (contract.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contract.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contract.customer.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (statusFilter === "all" || contract.status === statusFilter),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "已签署":
        return "border-green-500/50 bg-green-500/10 text-green-500"
      case "待审核":
        return "border-blue-500/50 bg-blue-500/10 text-blue-500"
      case "待签署":
        return "border-yellow-500/50 bg-yellow-500/10 text-yellow-500"
      case "草稿":
        return "border-gray-500/50 bg-gray-500/10 text-gray-500"
      case "即将到期":
        return "border-red-500/50 bg-red-500/10 text-red-500"
      default:
        return "border-gray-500/50 bg-gray-500/10 text-gray-500"
    }
  }

  return (
    <Card className="tech-card">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="搜索合同..."
                  className="pl-8 w-full sm:w-[300px]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="筛选状态" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">所有状态</SelectItem>
                  <SelectItem value="已签署">已签署</SelectItem>
                  <SelectItem value="待审核">待审核</SelectItem>
                  <SelectItem value="待签署">待签署</SelectItem>
                  <SelectItem value="草稿">草稿</SelectItem>
                  <SelectItem value="即将到期">即将到期</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
                <span className="sr-only">导出</span>
              </Button>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">高级筛选</span>
              </Button>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                新建合同
              </Button>
            </div>
          </div>
          <div className="rounded-lg border bg-card">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>合同编号</TableHead>
                  <TableHead>合同标题</TableHead>
                  <TableHead>客户</TableHead>
                  <TableHead>金额</TableHead>
                  <TableHead>状态</TableHead>
                  <TableHead>开始日期</TableHead>
                  <TableHead>结束日期</TableHead>
                  <TableHead className="text-right">操作</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredContracts.map((contract) => (
                  <TableRow key={contract.id} className="group">
                    <TableCell className="font-medium">{contract.id}</TableCell>
                    <TableCell>{contract.title}</TableCell>
                    <TableCell>{contract.customer}</TableCell>
                    <TableCell>{contract.value}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={getStatusColor(contract.status)}>
                        {contract.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{contract.startDate}</TableCell>
                    <TableCell>{contract.endDate}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">打开菜单</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>操作</DropdownMenuLabel>
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            查看详情
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            编辑合同
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <FileSignature className="mr-2 h-4 w-4" />
                            签署合同
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <FileText className="mr-2 h-4 w-4" />
                            下载PDF
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-500">
                            <Trash2 className="mr-2 h-4 w-4" />
                            删除合同
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

