# Tech-CRM 组件文档

## UI 组件库

Tech-CRM 项目使用了基于 shadcn/ui 的自定义组件库，这些组件位于 `components/ui` 目录下。以下是主要 UI 组件的详细说明：

### 基础 UI 组件

| 组件名称 | 文件路径 | 功能描述 |
|---------|----------|---------|
| Button | components/ui/button.tsx | 提供各种样式的按钮，支持不同的变体、尺寸和状态 |
| Input | components/ui/input.tsx | 文本输入框组件，支持各种输入类型和状态 |
| Select | components/ui/select.tsx | 下拉选择框组件，支持单选和多选 |
| Checkbox | components/ui/checkbox.tsx | 复选框组件，支持选中、未选中和禁用状态 |
| Card | components/ui/card.tsx | 卡片容器组件，用于展示内容块 |
| Table | components/ui/table.tsx | 表格组件，用于展示结构化数据 |
| Tabs | components/ui/tabs.tsx | 选项卡组件，用于在不同内容视图之间切换 |
| Dialog | components/ui/dialog.tsx | 对话框组件，用于显示模态内容和交互 |
| Tooltip | components/ui/tooltip.tsx | 工具提示组件，在悬停时显示辅助信息 |
| Avatar | components/ui/avatar.tsx | 头像组件，用于显示用户或实体的图像 |

### 布局组件

| 组件名称 | 文件路径 | 功能描述 |
|---------|----------|---------|
| DashboardLayout | components/dashboard-layout.tsx | 仪表盘布局组件，提供侧边栏、顶部栏和内容区域的统一布局 |
| Sidebar | components/ui/sidebar.tsx | 侧边栏组件，包含导航菜单和用户信息 |
| MainNav | components/main-nav.tsx | 主导航组件，显示应用程序的主要导航链接 |

### 数据展示组件

| 组件名称 | 文件路径 | 功能描述 |
|---------|----------|---------|
| SalesChart | components/sales-chart.tsx | 销售趋势图表，展示销售数据的时间趋势 |
| SalesOverview | components/sales-overview.tsx | 销售概览组件，展示销售关键指标和趋势 |
| CustomerDistribution | components/customer-distribution.tsx | 客户分布图表，展示客户的地理或行业分布 |
| ProductPerformance | components/product-performance.tsx | 产品性能图表，展示产品销售表现 |
| SalesFunnel | components/sales-funnel.tsx | 销售漏斗图，展示销售过程中的转化情况 |
| RegionalSales | components/regional-sales.tsx | 区域销售图表，展示不同地区的销售情况 |
| SalesTeamPerformance | components/sales-team-performance.tsx | 销售团队表现图表，展示团队绩效 |
| ConversionRates | components/conversion-rates.tsx | 转化率图表，展示线索至客户的转化情况 |

### 列表和表格组件

| 组件名称 | 文件路径 | 功能描述 |
|---------|----------|---------|
| CustomerList | components/customer-list.tsx | 客户列表组件，展示客户信息和交互功能 |
| OrderList | components/order-list.tsx | 订单列表组件，展示订单信息和交互功能 |
| ContractList | components/contract-list.tsx | 合同列表组件，展示合同信息和交互功能 |
| RecentOrders | components/recent-orders.tsx | 最近订单组件，展示最近创建或更新的订单 |

### 日历和活动组件

| 组件名称 | 文件路径 | 功能描述 |
|---------|----------|---------|
| CalendarView | components/calendar-view.tsx | 日历视图组件，展示日历和日程安排 |
| ActivityCalendar | components/activity-calendar.tsx | 活动日历组件，展示用户活动和事件 |

### 通知组件

| 组件名称 | 文件路径 | 功能描述 |
|---------|----------|---------|
| Toast | components/ui/toast.tsx | 提示通知组件，显示临时消息或通知 |

### 主题和样式组件

| 组件名称 | 文件路径 | 功能描述 |
|---------|----------|---------|
| ThemeProvider | components/theme-provider.tsx | 主题提供者组件，管理应用的主题状态 |
| EnhancedThemeProvider | components/enhanced-theme-provider.tsx | 增强型主题提供者，提供额外的主题功能 |
| ThemeToggle | components/theme-toggle.tsx | 主题切换组件，允许用户切换明暗主题 |
| ModeToggle | components/mode-toggle.tsx | 模式切换组件，提供明暗模式切换功能 |

### 统计组件

| 组件名称 | 文件路径 | 功能描述 |
|---------|----------|---------|
| StatCard | components/stat-card.tsx | 统计卡片组件，展示关键统计数据和趋势 |
| OrderStats | components/order-stats.tsx | 订单统计组件，展示订单相关的统计数据 |
| ContractStats | components/contract-stats.tsx | 合同统计组件，展示合同相关的统计数据 |

## 组件使用示例

### 使用 DashboardLayout 组件

```tsx
import { DashboardLayout } from "@/components/dashboard-layout"

export default function MyPage() {
  return (
    <DashboardLayout>
      <h1>我的页面内容</h1>
      {/* 其他内容 */}
    </DashboardLayout>
  )
}
```

### 使用 StatCard 组件

```tsx
import { StatCard } from "@/components/stat-card"
import { DollarSign } from "lucide-react"

export default function StatsSection() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <StatCard
        title="总收入"
        value="¥1,234,567"
        description="本月销售总额"
        icon={DollarSign}
        trend="up"
        trendValue="12.5%"
      />
      {/* 更多统计卡片 */}
    </div>
  )
}
```

### 使用图表组件

```tsx
import { SalesChart } from "@/components/sales-chart"
import { CustomerDistribution } from "@/components/customer-distribution"

export default function ChartsSection() {
  return (
    <div className="grid gap-6 mt-6 md:grid-cols-2">
      <SalesChart />
      <CustomerDistribution />
    </div>
  )
}
```

## 自定义组件开发指南

### 创建新组件

1. 在 `components` 目录下创建新的组件文件
2. 遵循组件命名规范：使用 PascalCase 命名
3. 使用 TypeScript 类型定义组件 props
4. 使用 Tailwind CSS 进行样式设计
5. 导出组件

示例：

```tsx
// components/my-new-component.tsx
import { ReactNode } from "react"

interface MyNewComponentProps {
  title: string
  children: ReactNode
}

export function MyNewComponent({ title, children }: MyNewComponentProps) {
  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div>{children}</div>
    </div>
  )
}
```

### 组件设计原则

1. **组合优于继承**：优先使用组合而非继承来复用组件逻辑
2. **单一职责**：每个组件应该只有一个职责
3. **无状态优先**：尽可能使用无状态组件，将状态提升到上层组件
4. **可测试性**：组件应该易于测试，避免复杂的依赖
5. **响应式设计**：使用 Tailwind CSS 的响应式工具类实现不同屏幕尺寸的适配

### 组件文档编写

为每个新组件编写清晰的文档，包括：

1. 组件名称和描述
2. Props 定义和说明
3. 使用示例
4. 注意事项

## 扩展组件库

当需要扩展组件库时，建议遵循以下步骤：

1. 评估是否可以使用现有组件组合实现所需功能
2. 如需创建新组件，先确定其用途和职责
3. 设计组件 API，定义必要的 props
4. 实现组件，确保代码质量和可维护性
5. 编写文档和使用示例
6. 添加必要的测试

## 组件最佳实践

1. 使用适当的语义化 HTML 元素
2. 确保组件的可访问性(a11y)
3. 使用 TypeScript 进行类型检查
4. 适当使用注释解释复杂逻辑
5. 避免过度优化和不必要的复杂性
6. 保持组件的一致性和可预测性 