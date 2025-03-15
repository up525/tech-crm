import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

// 模拟产品数据
const products = [
  {
    name: "企业级云服务套餐",
    sales: "¥325,000",
    units: 13,
    trend: "up",
    trendValue: "15.2%",
  },
  {
    name: "数据分析平台 - 年度订阅",
    sales: "¥280,000",
    units: 18,
    trend: "up",
    trendValue: "12.5%",
  },
  {
    name: "智能办公系统 - 企业版",
    sales: "¥210,000",
    units: 5,
    trend: "down",
    trendValue: "3.8%",
  },
  {
    name: "网络安全解决方案",
    sales: "¥185,000",
    units: 12,
    trend: "up",
    trendValue: "8.3%",
  },
  {
    name: "人工智能API服务 - 季度订阅",
    sales: "¥150,000",
    units: 15,
    trend: "neutral",
    trendValue: "0.5%",
  },
]

export function ProductPerformance() {
  return (
    <Card className="tech-card">
      <CardHeader>
        <CardTitle>产品表现</CardTitle>
        <CardDescription>按销售额排名的产品表现</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>产品</TableHead>
              <TableHead>销售额</TableHead>
              <TableHead>销量</TableHead>
              <TableHead>趋势</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.sales}</TableCell>
                <TableCell>{product.units}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      product.trend === "up"
                        ? "border-green-500/50 bg-green-500/10 text-green-500"
                        : product.trend === "down"
                          ? "border-red-500/50 bg-red-500/10 text-red-500"
                          : "border-yellow-500/50 bg-yellow-500/10 text-yellow-500"
                    }
                  >
                    {product.trend === "up" ? "↑" : product.trend === "down" ? "↓" : "→"} {product.trendValue}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

