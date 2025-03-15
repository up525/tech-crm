import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCart, CheckCircle, Clock, DollarSign } from "lucide-react"

export function OrderStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="tech-card">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">总订单</p>
              <p className="text-2xl font-bold">256</p>
            </div>
            <div className="rounded-full bg-primary/10 p-2 text-primary">
              <ShoppingCart className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-xs text-muted-foreground">
            <span className="flex items-center text-green-500">
              <span className="mr-1">↑</span> 12.5%
            </span>
            <span className="ml-1">相比上月</span>
          </div>
        </CardContent>
      </Card>
      <Card className="tech-card">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">已完成</p>
              <p className="text-2xl font-bold">189</p>
            </div>
            <div className="rounded-full bg-green-500/10 p-2 text-green-500">
              <CheckCircle className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-xs text-muted-foreground">
            <span className="flex items-center text-green-500">
              <span className="mr-1">↑</span> 8.3%
            </span>
            <span className="ml-1">相比上月</span>
          </div>
        </CardContent>
      </Card>
      <Card className="tech-card">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">处理中</p>
              <p className="text-2xl font-bold">42</p>
            </div>
            <div className="rounded-full bg-blue-500/10 p-2 text-blue-500">
              <Clock className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-xs text-muted-foreground">
            <span className="flex items-center text-yellow-500">
              <span className="mr-1">→</span> 0.5%
            </span>
            <span className="ml-1">相比上月</span>
          </div>
        </CardContent>
      </Card>
      <Card className="tech-card">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">总收入</p>
              <p className="text-2xl font-bold">¥1,458,200</p>
            </div>
            <div className="rounded-full bg-primary/10 p-2 text-primary">
              <DollarSign className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-xs text-muted-foreground">
            <span className="flex items-center text-green-500">
              <span className="mr-1">↑</span> 15.2%
            </span>
            <span className="ml-1">相比上月</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

