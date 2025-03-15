# Tech-CRM 主题系统文档

## 概述

Tech-CRM 采用灵活的主题系统，支持明暗模式切换和主题色彩定制。本文档介绍了主题系统的架构、使用方法和自定义方式。

## 主题系统架构

### 核心组件

1. **ThemeProvider**：基础主题提供者组件，来自 `next-themes` 库
2. **EnhancedThemeProvider**：增强型主题提供者，扩展了基础功能，支持自定义主题
3. **ThemeToggle**：主题切换组件，用于在明暗模式之间切换
4. **ModeToggle**：模式切换组件，提供下拉菜单选择不同的主题

### 主题配置

主题配置存储在 `lib/themes.ts` 文件中，定义了应用支持的主题和相关设置：

```typescript
// lib/themes.ts 主要结构
export const themes = [
  {
    name: "light",
    label: "明亮",
    activeColor: {
      light: "0 0% 9%",
      dark: "0 0% 98%",
    },
    cssVars: {
      light: {
        background: "0 0% 100%",
        foreground: "0 0% 9%",
        primary: "221.2 83.2% 53.3%",
        // ... 其他颜色变量
      },
      dark: {
        background: "0 0% 9%",
        foreground: "0 0% 98%",
        primary: "217.2 91.2% 59.8%",
        // ... 其他颜色变量
      },
    },
  },
  // ... 其他主题
];
```

## 使用主题系统

### 在应用中启用主题

主题系统在根布局组件 (`app/layout.tsx`) 中初始化，包裹整个应用：

```tsx
import { EnhancedThemeProvider } from "@/components/enhanced-theme-provider"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <EnhancedThemeProvider defaultTheme="dark">{children}</EnhancedThemeProvider>
      </body>
    </html>
  )
}
```

### 主题切换

使用 `ThemeToggle` 或 `ModeToggle` 组件来允许用户切换主题：

```tsx
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <h1>Tech-CRM</h1>
      <ThemeToggle />
    </header>
  )
}
```

### 访问当前主题

可以使用 `useTheme` hook 访问和操作当前主题：

```tsx
import { useTheme } from "next-themes"

export function ThemeAwareComponent() {
  const { theme, setTheme } = useTheme()
  
  return (
    <div>
      <p>当前主题: {theme}</p>
      <button onClick={() => setTheme("dark")}>切换到暗色主题</button>
    </div>
  )
}
```

## 自定义主题

### 添加新主题

要添加新主题，需要在 `lib/themes.ts` 文件中扩展 `themes` 数组：

```typescript
// 添加新主题示例
export const themes = [
  // ... 现有主题
  {
    name: "purple",
    label: "紫色",
    activeColor: {
      light: "270 100% 50%",
      dark: "270 100% 60%",
    },
    cssVars: {
      light: {
        background: "0 0% 100%",
        foreground: "270 10% 15%",
        primary: "270 100% 50%",
        // ... 其他颜色变量
      },
      dark: {
        background: "270 20% 10%",
        foreground: "270 10% 90%",
        primary: "270 100% 60%",
        // ... 其他颜色变量
      },
    },
  },
];
```

### CSS 变量系统

主题系统使用 CSS 变量实现主题切换，变量命名遵循以下格式：

```
--theme-{颜色名称}
```

主要的颜色变量包括：

- `--theme-background`: 背景色
- `--theme-foreground`: 前景色（文本）
- `--theme-primary`: 主色调
- `--theme-primary-foreground`: 主色调上的文本颜色
- `--theme-secondary`: 次要色调
- `--theme-secondary-foreground`: 次要色调上的文本颜色
- `--theme-muted`: 柔和背景色
- `--theme-muted-foreground`: 柔和背景上的文本颜色
- `--theme-accent`: 强调色
- `--theme-accent-foreground`: 强调色上的文本颜色
- `--theme-destructive`: 危险/警告色
- `--theme-destructive-foreground`: 危险色上的文本颜色
- `--theme-border`: 边框颜色
- `--theme-input`: 输入框背景色
- `--theme-ring`: 聚焦环颜色

### 修改现有主题

要修改现有主题，可以更新 `lib/themes.ts` 中相应主题的配置：

```typescript
// 修改暗色主题示例
export const themes = [
  // ... 其他主题
  {
    name: "dark",
    label: "暗色",
    activeColor: {
      light: "0 0% 9%",
      dark: "0 0% 98%", 
    },
    cssVars: {
      dark: {
        background: "215 28% 17%", // 修改为深蓝色背景
        foreground: "210 40% 98%",
        primary: "217.2 91.2% 59.8%",
        // ... 其他颜色保持不变
      },
      // ... light 主题设置
    },
  },
];
```

### 创建主题变体

您还可以基于现有主题创建变体，例如高对比度版本：

```typescript
// 创建高对比度暗色主题
export const themes = [
  // ... 其他主题
  {
    name: "dark-high-contrast",
    label: "高对比度暗色",
    activeColor: {
      light: "0 0% 0%",
      dark: "0 0% 100%",
    },
    cssVars: {
      dark: {
        background: "0 0% 0%",
        foreground: "0 0% 100%",
        primary: "217.2 91.2% 70%",
        // ... 其他高对比度设置
      },
    },
  },
];
```

## 响应式主题适配

Tech-CRM 的主题系统支持响应式设计，确保在不同设备和屏幕尺寸上提供一致的视觉体验：

### 媒体查询

可以在主题配置中使用媒体查询来针对不同屏幕尺寸设置不同的样式：

```typescript
// 响应式主题配置示例
export const themes = [
  {
    name: "responsive",
    label: "响应式主题",
    cssVars: {
      light: {
        background: "0 0% 100%",
        foreground: "0 0% 9%",
        primary: {
          default: "221.2 83.2% 53.3%", // 默认值
          sm: "221.2 83.2% 55%",        // 小屏幕
          md: "221.2 83.2% 58%",        // 中等屏幕
          lg: "221.2 83.2% 60%",        // 大屏幕
        },
        // ... 其他颜色变量
      },
      // ... 暗色主题配置
    },
  },
];
```

### 使用 Tailwind 类与主题系统结合

```tsx
<div className="bg-background text-foreground hover:bg-primary hover:text-primary-foreground">
  这个元素使用主题系统的颜色
</div>
```

## 主题切换动画

Tech-CRM 实现了平滑的主题切换动画效果，避免突兀的颜色变化。这些效果在 `enhanced-theme-provider.tsx` 中实现：

```tsx
// 主题切换时的过渡效果
useEffect(() => {
  const root = document.documentElement
  if (root.classList.contains('theme-transitioning')) return
  
  root.classList.add('theme-transitioning')
  
  // 应用主题变化
  // ...

  // 移除过渡类
  setTimeout(() => {
    root.classList.remove('theme-transitioning')
  }, 200)
}, [theme])
```

相应的 CSS 定义在全局样式表中：

```css
/* 主题过渡效果 */
:root {
  --theme-transition-duration: 200ms;
}

.theme-transitioning * {
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke !important;
  transition-duration: var(--theme-transition-duration) !important;
  transition-timing-function: ease-out !important;
}
```

## 预设主题样式

Tech-CRM 内置了多种预设主题风格供用户选择：

1. **明亮** (light): 现代简洁的浅色主题
2. **暗色** (dark): 专业的深色主题
3. **系统** (system): 跟随操作系统的明暗模式设置
4. **绿色** (green): 以绿色为主色调的主题
5. **蓝色** (blue): 以蓝色为主色调的主题
6. **紫色** (purple): 以紫色为主色调的主题
7. **琥珀色** (amber): 以琥珀色为主色调的主题

## 故障排除

### 主题切换不生效

常见原因和解决方法：

1. **水合问题**：确保根 HTML 元素添加了 `suppressHydrationWarning` 属性
2. **类名冲突**：检查是否有其他样式覆盖了主题变量
3. **缓存问题**：清除浏览器缓存，尝试强制刷新

### 闪烁问题

如果在加载时出现主题闪烁：

1. 确保在 `<head>` 中添加了主题初始化脚本
2. 使用 `next-themes` 的 `disableTransitionOnChange` 属性

## 最佳实践

1. **使用语义化颜色变量**：使用 `bg-background` 而非硬编码的颜色
2. **避免直接使用颜色代码**：不要使用 `bg-[#ffffff]` 等硬编码颜色
3. **利用 Tailwind 的主题扩展**：将主题颜色集成到 Tailwind 配置中
4. **测试所有主题**：确保 UI 在所有支持的主题下都能正常显示
5. **考虑高对比度支持**：为视力障碍用户优化主题
6. **动画效果适度**：确保主题切换动画不会影响性能或可用性 