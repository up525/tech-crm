import { Card, CardContent } from "@/components/ui/card"
import { FileText, CheckCircle, Clock, AlertCircle } from "lucide-react"

export function ContractStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="tech-card">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">总合同</p>
              <p className="text-2xl font-bold">128</p>
            </div>
            <div className="rounded-full bg-primary/10 p-2 text-primary">
              <FileText className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-xs text-muted-foreground">
            <span className="flex items-center text-green-500">
              <span className="mr-1">↑</span> 8.5%
            </span>
            <span className="ml-1">相比上月</span>
          </div>
        </CardContent>
      </Card>
      <Card className="tech-card">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">已签署</p>
              <p className="text-2xl font-bold">95</p>
            </div>
            <div className="rounded-full bg-green-500/10 p-2 text-green-500">
              <CheckCircle className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-xs text-muted-foreground">
            <span className="flex items-center text-green-500">
              <span className="mr-1">↑</span> 10.3%
            </span>
            <span className="ml-1">相比上月</span>
          </div>
        </CardContent>
      </Card>
      <Card className="tech-card">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">待审核</p>
              <p className="text-2xl font-bold">22</p>
            </div>
            <div className="rounded-full bg-blue-500/10 p-2 text-blue-500">
              <Clock className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-xs text-muted-foreground">
            <span className="flex items-center text-yellow-500">
              <span className="mr-1">→</span> 1.5%
            </span>
            <span className="ml-1">相比上月</span>
          </div>
        </CardContent>
      </Card>
      <Card className="tech-card">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">即将到期</p>
              <p className="text-2xl font-bold">11</p>
            </div>
            <div className="rounded-full bg-yellow-500/10 p-2 text-yellow-500">
              <AlertCircle className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-xs text-muted-foreground">
            <span className="flex items-center text-red-500">
              <span className="mr-1">↑</span> 5.2%
            </span>
            <span className="ml-1">相比上月</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

