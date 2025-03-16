# Tech-CRM

![Tech-CRM 界面截图](https://placeholder-for-screenshot.com/tech-crm-screenshot.png)

## 项目概述

Tech-CRM 是一个高科技感的客户销售管理系统，基于 Next.js 构建。该系统提供全面的客户关系管理功能，包括仪表盘分析、客户管理、销售订单跟踪、数据分析、合同管理、日程安排和系统设置等模块。

系统设计具有现代化的界面和流畅的用户体验，支持明暗主题切换，适合科技企业使用的专业 CRM 系统。

## 主要功能

- **仪表盘**: 展示关键业绩指标、销售趋势、客户分布和近期活动
- **客户管理**: 客户信息的添加、编辑、查询和分析
- **销售订单**: 订单创建、状态跟踪和销售分析
- **数据分析**: 多维度的数据分析和可视化报表
- **合同管理**: 合同文档的创建、存储和状态跟踪
- **日程安排**: 日历视图的会议和任务管理
- **系统设置**: 用户偏好和系统配置管理

## 技术栈

- **前端框架**: [Next.js](https://nextjs.org/)
- **样式**: [Tailwind CSS](https://tailwindcss.com/)
- **UI组件**: 基于 [shadcn/ui](https://ui.shadcn.com/)
- **状态管理**: React Hooks
- **部署**: 支持 Vercel, Netlify 或自托管

## 快速开始

### 前提条件

- Node.js 16.0 或更高版本
- PNPM 包管理器

### 安装步骤

1. 克隆仓库:

```bash
git clone https://github.com/yourusername/tech-crm.git
cd tech-crm
```

2. 安装依赖:

```bash
pnpm install
```

3. 运行开发服务器:

```bash
pnpm dev
```

4. 在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看应用

### 生产构建

```bash
pnpm build
pnpm start
```

## 项目结构

主要目录结构:

```
tech-crm/
├── app/                  # Next.js 应用程序主目录
├── components/           # React 组件
│   └── ui/               # 基础 UI 组件
├── document/             # 项目文档
├── hooks/                # 自定义 React Hooks
├── lib/                  # 工具函数和公共库
├── public/               # 静态资源
└── styles/               # 额外样式文件
```

详细的项目结构说明可以在 [项目文档](./project-documentation.md) 中找到。

## 文档

- [项目文档](./project-documentation.md): 完整的项目结构和模块说明
- [组件文档](./component-documentation.md): 组件库和用法说明
- [API文档](./api-documentation.md): API 结构和集成指南
- [主题文档](./theme-documentation.md): 主题系统和定制方法

## 开发指南

### 开发新功能

1. 创建新的功能分支:

```bash
git checkout -b feature/your-feature-name
```

2. 开发您的功能，并确保代码符合项目规范
3. 提交您的更改:

```bash
git commit -m "Add new feature: your feature description"
```

4. 推送到远程仓库:

```bash
git push origin feature/your-feature-name
```

5. 创建 Pull Request 并等待审核

### 代码规范

项目使用 ESLint 和 Prettier 确保代码质量和一致性:

```bash
# 运行代码检查
pnpm lint

# 运行格式化
pnpm format
```

## 贡献

我们欢迎所有形式的贡献，包括但不限于:

- 提交 bug 报告或功能请求
- 提交代码改进或新功能
- 完善项目文档
- 分享项目或提供使用反馈

## 许可证

本项目采用 [MIT 许可证](../LICENSE)。

## 联系方式

如有任何问题或建议，请通过以下方式联系我们:

- Email: your.email@example.com
- GitHub Issues: [https://github.com/yourusername/tech-crm/issues](https://github.com/yourusername/tech-crm/issues)

## 致谢

感谢所有为本项目做出贡献的开发者和使用者。 