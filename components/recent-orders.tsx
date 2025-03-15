import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// 模拟订单数据
const orders = [
  {
    id: "ORD-001",
    customer: "科技创新有限公司",
    product: "企业级云服务套餐",
    amount: "¥25,000",
    status: "已完成",
    date: "2023-03-20",
  },
  {
    id: "ORD-002",
    customer: "数字解决方案公司",
    product: "数据分析平台 - 年度订阅",
    amount: "¥18,000",
    status: "处理中",
    date: "2023-03-18",
  },
  {
    id: "ORD-003",
    customer: "未来科技集团",
    product: "智能办公系统 - 企业版",
    amount: "¥42,000",
    status: "已完成",
    date: "2023-03-15",
  },
  {
    id: "ORD-004",
    customer: "智能系统有限公司",
    product: "网络安全解决方案",
    amount: "¥15,000",
    status: "待付款",
    date: "2023-03-12",
  },
  {
    id: "ORD-005",
    customer: "云计算服务公司",
    product: "人工智能API服务 - 季度订阅",
    amount: "¥30,000",
    status: "已完成",
    date: "2023-03-10",
  },
]

export function RecentOrders() {
  return (
    <Card className="tech-card">
      <CardHeader>
        <CardTitle>最近订单</CardTitle>
        <CardDescription>查看最近的销售订单和状态</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>订单号</TableHead>
              <TableHead>客户</TableHead>
              <TableHead>产品</TableHead>
              <TableHead>金额</TableHead>
              <TableHead>状态</TableHead>
              <TableHead>日期</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell>{order.amount}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      order.status === "已完成"
                        ? "border-green-500/50 bg-green-500/10 text-green-500"
                        : order.status === "处理中"
                          ? "border-blue-500/50 bg-blue-500/10 text-blue-500"
                          : "border-yellow-500/50 bg-yellow-500/10 text-yellow-500"
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell>{order.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

