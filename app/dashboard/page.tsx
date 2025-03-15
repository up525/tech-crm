import { DashboardLayout } from "@/components/dashboard-layout"
import { StatCard } from "@/components/stat-card"
import { SalesChart } from "@/components/sales-chart"
import { RecentOrders } from "@/components/recent-orders"
import { CustomerDistribution } from "@/components/customer-distribution"
import { ActivityCalendar } from "@/components/activity-calendar"
import { SalesFunnel } from "@/components/sales-funnel"
import { DollarSign, Users, ShoppingCart, TrendingUp, BarChart3, Target } from "lucide-react"

/**
 * 仪表盘页面组件
 * 展示系统的主要数据概览和关键指标
 * 
 * @returns {JSX.Element} 仪表盘页面JSX元素
 */
export default function DashboardPage() {
  return (
    <DashboardLayout>
      {/* 仪表盘标题和更新时间 */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">仪表盘</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">最后更新: 2023年3月21日 14:30</span>
        </div>
      </div>

      {/* 关键指标卡片网格 - 展示主要业务指标 */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* 总收入统计卡片 */}
        <StatCard
          title="总收入"
          value="¥1,234,567"
          description="本月销售总额"
          icon={DollarSign}
          trend="up"
          trendValue="12.5%"
        />
        {/* 客户数量统计卡片 */}
        <StatCard title="客户数量" value="1,234" description="活跃客户总数" icon={Users} trend="up" trendValue="8.2%" />
        {/* 订单数量统计卡片 */}
        <StatCard
          title="订单数量"
          value="567"
          description="本月订单总数"
          icon={ShoppingCart}
          trend="up"
          trendValue="5.3%"
        />
        {/* 转化率统计卡片 */}
        <StatCard
          title="转化率"
          value="24.8%"
          description="潜在客户转化率"
          icon={TrendingUp}
          trend="down"
          trendValue="2.1%"
        />
        {/* 平均订单金额统计卡片 */}
        <StatCard
          title="平均订单金额"
          value="¥12,345"
          description="本月平均订单金额"
          icon={BarChart3}
          trend="up"
          trendValue="3.7%"
        />
        {/* 目标完成率统计卡片 */}
        <StatCard
          title="目标完成率"
          value="78.5%"
          description="本季度销售目标完成率"
          icon={Target}
          trend="neutral"
          trendValue="0.5%"
        />
      </div>

      {/* 销售图表和客户分布图表区域 */}
      <div className="grid gap-6 mt-6 md:grid-cols-2">
        {/* 销售趋势图表 */}
        <SalesChart />
        {/* 客户分布图表 */}
        <CustomerDistribution />
      </div>

      {/* 最近订单区域 */}
      <div className="mt-6">
        <RecentOrders />
      </div>

      {/* 活动日历和销售漏斗图区域 */}
      <div className="grid gap-6 mt-6 md:grid-cols-2">
        {/* 活动日历组件 */}
        <ActivityCalendar />
        {/* 销售漏斗图组件 */}
        <SalesFunnel />
      </div>
    </DashboardLayout>
  )
}

