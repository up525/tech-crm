import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

/**
 * StatCard组件属性接口
 * 
 * @property {string} title - 卡片标题
 * @property {string} value - 主要显示的统计值
 * @property {string} [description] - 可选的描述文本
 * @property {LucideIcon} icon - 卡片右上角显示的图标组件
 * @property {'up' | 'down' | 'neutral'} [trend] - 数据变化趋势
 * @property {string} [trendValue] - 趋势变化的数值
 * @property {string} [className] - 额外的CSS类名
 */
interface StatCardProps {
  title: string
  value: string
  description?: string
  icon: LucideIcon
  trend?: "up" | "down" | "neutral"
  trendValue?: string
  className?: string
}

/**
 * 统计卡片组件
 * 用于展示关键指标数据，支持显示趋势和比较信息
 * 
 * @param {StatCardProps} props - 组件属性
 * @returns {JSX.Element} 统计卡片JSX元素
 */
export function StatCard({ title, value, description, icon: Icon, trend, trendValue, className }: StatCardProps) {
  return (
    // 使用Card组件作为容器，添加技术风格卡片样式和淡入动画效果
    <Card className={cn("tech-card animate-fade-in", className)}>
      {/* 卡片头部，包含标题和图标 */}
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {/* 渲染传入的图标组件 */}
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      {/* 卡片内容区域 */}
      <CardContent>
        {/* 主要统计值，使用大号粗体字体 */}
        <div className="text-2xl font-bold">{value}</div>
        {/* 如果有描述文本，则显示描述 */}
        {description && <p className="text-xs text-muted-foreground">{description}</p>}
        {/* 如果有趋势数据和趋势值，则显示趋势信息 */}
        {trend && trendValue && (
          <div className="mt-2 flex items-center text-xs">
            <span
              className={cn(
                "mr-1 rounded-sm px-1 py-0.5",
                // 根据趋势类型应用不同的背景色和文字颜色
                trend === "up" && "bg-green-500/10 text-green-500", // 上升趋势使用绿色
                trend === "down" && "bg-red-500/10 text-red-500",   // 下降趋势使用红色
                trend === "neutral" && "bg-yellow-500/10 text-yellow-500", // 持平趋势使用黄色
              )}
            >
              {/* 根据趋势类型显示不同的箭头符号 */}
              {trend === "up" ? "↑" : trend === "down" ? "↓" : "→"} {trendValue}
            </span>
            {/* 显示比较时间段说明 */}
            <span className="text-muted-foreground">相比上月</span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

