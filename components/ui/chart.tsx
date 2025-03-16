"use client"

import * as React from "react"
import { Tooltip as RechartTooltip, TooltipProps } from "recharts"
import { Legend } from "recharts"

import { cn } from "@/lib/utils"

// 图表配置类型定义
export type ChartDataItem = {
  label?: React.ReactNode
  icon?: React.ComponentType
  color?: string
  theme?: Record<"dark" | "light", string>
}

export type ChartConfig = {
  [key: string]: ChartDataItem
}

interface ChartContainerProps {
  className?: string
  children: React.ReactNode
  config: ChartConfig
}

export function ChartContainer({ className, children, config }: ChartContainerProps) {
  const containerStyle = React.useMemo(() => {
    return Object.entries(config).reduce((acc, [key, value]) => {
      if (value.color) {
        acc[`--color-${key}`] = value.color
      } else if (value.theme) {
        acc[`--color-${key}-light`] = value.theme.light
        acc[`--color-${key}-dark`] = value.theme.dark
      }
      return acc
    }, {} as Record<string, string>)
  }, [config])

  return (
    <div className={cn("w-full", className)} style={containerStyle}>
      {children}
    </div>
  )
}

// 自定义内容组件的类型
type ContentType = React.ReactElement | ((props: TooltipProps<number, string>) => React.ReactNode) | undefined

interface ChartTooltipProps {
  content?: ContentType
  className?: string
}

export function ChartTooltip({ className, content }: ChartTooltipProps) {
  return (
    <RechartTooltip
      content={content}
      wrapperClassName={cn("recharts-tooltip-wrapper", className)}
    />
  )
}

interface ChartTooltipContentProps {
  className?: string
  payload?: Array<{ name: string; value: string | number; color?: string; dataKey?: string; fill?: string; stroke?: string }>
  active?: boolean
  label?: string
}

export function ChartTooltipContent({ className, payload, active, label }: ChartTooltipContentProps) {
  if (!active || !payload?.length) {
    return null
  }

  return (
    <div className={cn("rounded-md border bg-background p-2 shadow-md", className)}>
      <div className="space-y-1">
        <p className="text-sm font-medium">{label}</p>
        <div className="space-y-0.5">
          {payload.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                <div
                  className="mr-1 h-2 w-2 rounded-full"
                  style={{
                    backgroundColor: item.color || item.fill || item.stroke,
                  }}
                />
                <p className="text-xs text-muted-foreground">{item.name}</p>
              </div>
              <p className="text-xs font-medium">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export { Legend as ChartLegend }
