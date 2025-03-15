"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MoreHorizontal, Search, Filter, Download, Plus, FileText, Eye, Edit, Trash2 } from "lucide-react"
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

// 模拟订单数据
const orders = [
  {
    id: "ORD-001",
    customer: "科技创新有限公司",
    product: "企业级云服务套餐",
    amount: "¥25,000",
    status: "已完成",
    date: "2023-03-20",
    paymentMethod: "银行转账",
    salesPerson: "张三",
  },
  {
    id: "ORD-002",
    customer: "数字解决方案公司",
    product: "数据分析平台 - 年度订阅",
    amount: "¥18,000",
    status: "处理中",
    date: "2023-03-18",
    paymentMethod: "信用卡",
    salesPerson: "李四",
  },
  {
    id: "ORD-003",
    customer: "未来科技集团",
    product: "智能办公系统 - 企业版",
    amount: "¥42,000",
    status: "已完成",
    date: "2023-03-15",
    paymentMethod: "银行转账",
    salesPerson: "王五",
  },
  {
    id: "ORD-004",
    customer: "智能系统有限公司",
    product: "网络安全解决方案",
    amount: "¥15,000",
    status: "待付款",
    date: "2023-03-12",
    paymentMethod: "待定",
    salesPerson: "赵六",
  },
  {
    id: "ORD-005",
    customer: "云计算服务公司",
    product: "人工智能API服务 - 季度订阅",
    amount: "¥30,000",
    status: "已完成",
    date: "2023-03-10",
    paymentMethod: "支付宝",
    salesPerson: "张三",
  },
  {
    id: "ORD-006",
    customer: "移动应用开发公司",
    product: "云存储服务 - 高级版",
    amount: "¥12,000",
    status: "处理中",
    date: "2023-03-08",
    paymentMethod: "微信支付",
    salesPerson: "李四",
  },
  {
    id: "ORD-007",
    customer: "电子商务平台",
    product: "客户关系管理系统",
    amount: "¥35,000",
    status: "已完成",
    date: "2023-03-05",
    paymentMethod: "银行转账",
    salesPerson: "王五",
  },
  {
    id: "ORD-008",
    customer: "教育科技公司",
    product: "在线学习平台 - 企业版",
    amount: "¥28,000",
    status: "已取消",
    date: "2023-03-03",
    paymentMethod: "信用卡",
    salesPerson: "赵六",
  },
]

interface OrderListProps {
  searchTerm?: string;
  statusFilter?: string;
  onSearchChange?: (value: string) => void;
  onStatusFilterChange?: (value: string) => void;
}

export function OrderList({ 
  searchTerm = "", 
  statusFilter = "all", 
  onSearchChange,
  onStatusFilterChange
}: OrderListProps) {
  const [currentSearchTerm, setCurrentSearchTerm] = useState(searchTerm)
  const [currentStatusFilter, setCurrentStatusFilter] = useState(statusFilter)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setCurrentSearchTerm(value)
    if (onSearchChange) {
      onSearchChange(value)
    }
  }

  const handleStatusFilterChange = (value: string) => {
    setCurrentStatusFilter(value)
    if (onStatusFilterChange) {
      onStatusFilterChange(value)
    }
  }

  const filteredOrders = orders.filter(
    (order) =>
      (order.customer.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
        order.id.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
        order.product.toLowerCase().includes(currentSearchTerm.toLowerCase())) &&
      (currentStatusFilter === "all" || order.status === currentStatusFilter),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "已完成":
        return "border-green-500/50 bg-green-500/10 text-green-500"
      case "处理中":
        return "border-blue-500/50 bg-blue-500/10 text-blue-500"
      case "待付款":
        return "border-yellow-500/50 bg-yellow-500/10 text-yellow-500"
      case "已取消":
        return "border-red-500/50 bg-red-500/10 text-red-500"
      default:
        return "border-gray-500/50 bg-gray-500/10 text-gray-500"
    }
  }

  return (
    <Card className="tech-card">
      <CardContent className="p-6">
        <div className="space-y-4">
          {(onSearchChange === undefined || onStatusFilterChange === undefined) && (
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="flex items-center gap-2">
                {onSearchChange === undefined && (
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="搜索订单..."
                      className="pl-8 w-full sm:w-[300px]"
                      value={currentSearchTerm}
                      onChange={handleSearchChange}
                    />
                  </div>
                )}
                {onStatusFilterChange === undefined && (
                  <Select value={currentStatusFilter} onValueChange={handleStatusFilterChange}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="筛选状态" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">所有状态</SelectItem>
                      <SelectItem value="已完成">已完成</SelectItem>
                      <SelectItem value="处理中">处理中</SelectItem>
                      <SelectItem value="待付款">待付款</SelectItem>
                      <SelectItem value="已取消">已取消</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              </div>
              {onSearchChange === undefined && onStatusFilterChange === undefined && (
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
                    新建订单
                  </Button>
                </div>
              )}
            </div>
          )}
          <div className="rounded-lg border bg-card">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>订单号</TableHead>
                  <TableHead>客户</TableHead>
                  <TableHead>产品</TableHead>
                  <TableHead>金额</TableHead>
                  <TableHead>状态</TableHead>
                  <TableHead>日期</TableHead>
                  <TableHead>销售人员</TableHead>
                  <TableHead className="text-right">操作</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.map((order) => (
                  <TableRow key={order.id} className="group">
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>{order.product}</TableCell>
                    <TableCell>{order.amount}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={getStatusColor(order.status)}>
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>{order.salesPerson}</TableCell>
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
                            编辑订单
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <FileText className="mr-2 h-4 w-4" />
                            生成发票
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem destructive>
                            <Trash2 className="mr-2 h-4 w-4" />
                            删除订单
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

