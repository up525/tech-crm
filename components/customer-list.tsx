"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MoreHorizontal, Search, UserPlus, Filter, Star, StarOff } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

// 模拟客户数据
const customers = [
  {
    id: "CUST-001",
    name: "张三",
    company: "科技创新有限公司",
    email: "zhangsan@tech-innovation.com",
    phone: "13800138001",
    status: "活跃",
    value: "¥125,000",
    lastContact: "2023-03-15",
    starred: true,
  },
  {
    id: "CUST-002",
    name: "李四",
    company: "数字解决方案公司",
    email: "lisi@digital-solutions.com",
    phone: "13900139002",
    status: "潜在",
    value: "¥75,000",
    lastContact: "2023-03-10",
    starred: false,
  },
  {
    id: "CUST-003",
    name: "王五",
    company: "未来科技集团",
    email: "wangwu@future-tech.com",
    phone: "13700137003",
    status: "活跃",
    value: "¥250,000",
    lastContact: "2023-03-18",
    starred: true,
  },
  {
    id: "CUST-004",
    name: "赵六",
    company: "智能系统有限公司",
    email: "zhaoliu@smart-systems.com",
    phone: "13600136004",
    status: "不活跃",
    value: "¥50,000",
    lastContact: "2023-02-28",
    starred: false,
  },
  {
    id: "CUST-005",
    name: "钱七",
    company: "云计算服务公司",
    email: "qianqi@cloud-computing.com",
    phone: "13500135005",
    status: "活跃",
    value: "¥180,000",
    lastContact: "2023-03-20",
    starred: true,
  },
]

export function CustomerList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [starredCustomers, setStarredCustomers] = useState(
    customers.reduce(
      (acc, customer) => {
        acc[customer.id] = customer.starred
        return acc
      },
      {} as Record<string, boolean>,
    ),
  )

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const toggleStar = (id: string) => {
    setStarredCustomers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="搜索客户..."
              className="pl-8 w-full sm:w-[300px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
            <span className="sr-only">筛选</span>
          </Button>
        </div>
        <Button className="gap-2">
          <UserPlus className="h-4 w-4" />
          添加客户
        </Button>
      </div>
      <div className="rounded-lg border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40px]"></TableHead>
              <TableHead>客户</TableHead>
              <TableHead>状态</TableHead>
              <TableHead>价值</TableHead>
              <TableHead>最近联系</TableHead>
              <TableHead className="text-right">操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCustomers.map((customer) => (
              <TableRow key={customer.id} className="group">
                <TableCell>
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toggleStar(customer.id)}>
                    {starredCustomers[customer.id] ? (
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    ) : (
                      <StarOff className="h-4 w-4 text-muted-foreground" />
                    )}
                    <span className="sr-only">{starredCustomers[customer.id] ? "取消星标" : "添加星标"}</span>
                  </Button>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarImage
                        src={`/placeholder.svg?height=36&width=36&text=${customer.name.charAt(0)}`}
                        alt={customer.name}
                      />
                      <AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{customer.name}</div>
                      <div className="text-sm text-muted-foreground">{customer.company}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      customer.status === "活跃"
                        ? "border-green-500/50 bg-green-500/10 text-green-500"
                        : customer.status === "潜在"
                          ? "border-blue-500/50 bg-blue-500/10 text-blue-500"
                          : "border-gray-500/50 bg-gray-500/10 text-gray-500"
                    }
                  >
                    {customer.status}
                  </Badge>
                </TableCell>
                <TableCell>{customer.value}</TableCell>
                <TableCell>{customer.lastContact}</TableCell>
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
                      <DropdownMenuItem>查看详情</DropdownMenuItem>
                      <DropdownMenuItem>编辑客户</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-500">删除客户</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

