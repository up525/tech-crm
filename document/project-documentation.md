# Tech-CRM 项目开发文档

## 项目概述
Tech-CRM 是一个高科技感的客户销售管理系统，基于 Next.js 构建，提供了全面的客户关系管理功能，包括仪表盘、客户管理、销售订单、数据分析、合同管理、日程安排和系统设置等模块。

## 技术栈
- **前端框架**: Next.js
- **样式**: Tailwind CSS
- **UI组件**: 基于 shadcn/ui 的组件库
- **状态管理**: React Hooks
- **图表**: 自定义图表组件

## 项目结构

### 目录结构
```
tech-crm/
├── app/                  # Next.js 应用程序的主要目录
│   ├── analytics/        # 数据分析模块
│   ├── calendar/         # 日程安排模块
│   ├── contracts/        # 合同管理模块
│   ├── customers/        # 客户管理模块
│   ├── dashboard/        # 仪表盘模块
│   ├── globals.css       # 全局样式
│   ├── layout.tsx        # 根布局组件
│   ├── login/            # 登录模块
│   ├── orders/           # 销售订单模块
│   ├── page.tsx          # 主页重定向到仪表盘
│   └── settings/         # 系统设置模块
├── components/           # React 组件
│   ├── ui/               # 基础 UI 组件，基于 shadcn/ui
│   ├── activity-calendar.tsx  # 活动日历组件
│   ├── calendar-view.tsx      # 日历视图组件
│   ├── contract-list.tsx      # 合同列表组件
│   ├── customer-list.tsx      # 客户列表组件
│   ├── dashboard-layout.tsx   # 仪表盘布局组件
│   ├── main-nav.tsx           # 主导航组件
│   ├── order-list.tsx         # 订单列表组件
│   ├── sales-chart.tsx        # 销售图表组件
│   ├── sales-overview.tsx     # 销售概览组件
│   └── ...其他组件
├── hooks/                # 自定义 React Hooks
│   ├── use-mobile.tsx    # 移动设备检测 Hook
│   └── use-toast.ts      # Toast 通知 Hook
├── lib/                  # 工具函数和公共库
│   ├── themes.ts         # 主题配置
│   └── utils.ts          # 通用工具函数
├── public/               # 静态资源
└── styles/               # 额外样式文件
```

## 主要模块说明

### 仪表盘 (Dashboard)
仪表盘模块提供系统的整体概览，包括关键业绩指标(KPI)、销售趋势图表、最近订单、客户分布情况和活动日历等。

### 客户管理 (Customers)
客户管理模块允许用户查看、添加、编辑和删除客户信息，追踪客户互动历史，并分析客户行为。

### 销售订单 (Orders)
销售订单模块负责管理所有销售订单，包括订单创建、编辑、状态跟踪和销售分析。

### 数据分析 (Analytics)
数据分析模块提供深入的业务数据分析，包括销售趋势、客户行为、产品性能和团队表现等多维度图表和报告。

### 合同管理 (Contracts)
合同管理模块负责合同的创建、存储、跟踪和到期提醒，支持对合同条款和状态的管理。

### 日程安排 (Calendar)
日程安排模块提供日历视图，支持会议、任务和提醒的安排和管理。

### 系统设置 (Settings)
系统设置模块允许用户配置系统参数、个人偏好、账户信息和通知设置等。

## 组件说明

### 导航组件 (main-nav.tsx)
提供应用的主导航菜单，包含所有主要模块的链接。

### 仪表盘布局 (dashboard-layout.tsx)
为所有应用页面提供一致的布局结构，包括侧边栏、顶部栏和内容区域。

### 图表组件
- sales-chart.tsx: 销售趋势图表
- customer-distribution.tsx: 客户分布图表
- sales-funnel.tsx: 销售漏斗图
- product-performance.tsx: 产品性能图表

### 列表组件
- customer-list.tsx: 客户列表组件
- order-list.tsx: 订单列表组件
- contract-list.tsx: 合同列表组件

### UI 组件
项目使用了基于 shadcn/ui 的自定义组件库，包括按钮、表格、表单控件等基础UI组件。

## 开发指南

### 添加新页面
1. 在 `app` 目录下创建新的目录和 `page.tsx` 文件
2. 在页面中使用 `DashboardLayout` 组件包裹内容
3. 根据需要添加新的组件和功能

### 添加新组件
1. 在 `components` 目录下创建新的组件文件
2. 遵循项目的组件命名规范
3. 使用 Tailwind CSS 进行样式设计
4. 导出组件并在页面中引用

### 主题开发
项目支持暗色和亮色主题，主题配置在 `lib/themes.ts` 中定义。

## 部署指南
本项目可以部署到支持 Next.js 的任何平台，如 Vercel、Netlify 或自托管服务器。

### 环境准备
- Node.js 16.x 或更高版本
- PNPM 包管理器

### 构建步骤
1. 安装依赖：`pnpm install`
2. 构建项目：`pnpm build`
3. 启动服务：`pnpm start`

## 贡献指南
1. 创建一个新的功能分支
2. 实现新功能或修复 bug
3. 提交代码并创建 Pull Request
4. 代码审查通过后合并到主分支

## 维护与更新
定期更新依赖包以确保安全性和性能，关注技术栈的更新和新功能的引入。 