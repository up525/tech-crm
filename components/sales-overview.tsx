"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChartContainer, ChartLegend } from "@/components/ui/chart"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer, Tooltip, TooltipProps } from "recharts"
import { Skeleton } from "@/components/ui/skeleton"

// 数据类型定义
type DataPoint = {
  month: string
  value: number
}

type YearData = {
  [key: string]: DataPoint[]
}

type SalesDataType = {
  revenue: YearData
  orders: YearData
  customers: YearData
}

// 模拟API请求获取数据
const fetchSalesData = async (): Promise<SalesDataType> => {
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 800))
  
  // 实际项目中，这里应该是一个真实的API调用
  // 例如: return await fetch('/api/sales-data').then(res => res.json())
  
  return {
    revenue: {
      "2023": [
        { month: "1月", value: 120000 },
        { month: "2月", value: 150000 },
        { month: "3月", value: 180000 },
        { month: "4月", value: 170000 },
        { month: "5月", value: 190000 },
        { month: "6月", value: 210000 },
        { month: "7月", value: 230000 },
        { month: "8月", value: 250000 },
        { month: "9月", value: 270000 },
        { month: "10月", value: 290000 },
        { month: "11月", value: 310000 },
        { month: "12月", value: 350000 },
      ],
      "2022": [
        { month: "1月", value: 100000 },
        { month: "2月", value: 120000 },
        { month: "3月", value: 140000 },
        { month: "4月", value: 130000 },
        { month: "5月", value: 150000 },
        { month: "6月", value: 170000 },
        { month: "7月", value: 190000 },
        { month: "8月", value: 210000 },
        { month: "9月", value: 230000 },
        { month: "10月", value: 250000 },
        { month: "11月", value: 270000 },
        { month: "12月", value: 290000 },
      ],
      "2021": [
        { month: "1月", value: 80000 },
        { month: "2月", value: 90000 },
        { month: "3月", value: 110000 },
        { month: "4月", value: 100000 },
        { month: "5月", value: 120000 },
        { month: "6月", value: 130000 },
        { month: "7月", value: 150000 },
        { month: "8月", value: 170000 },
        { month: "9月", value: 190000 },
        { month: "10月", value: 210000 },
        { month: "11月", value: 230000 },
        { month: "12月", value: 250000 },
      ],
    },
    orders: {
      "2023": [
        { month: "1月", value: 120 },
        { month: "2月", value: 150 },
        { month: "3月", value: 180 },
        { month: "4月", value: 170 },
        { month: "5月", value: 190 },
        { month: "6月", value: 210 },
        { month: "7月", value: 230 },
        { month: "8月", value: 250 },
        { month: "9月", value: 270 },
        { month: "10月", value: 290 },
        { month: "11月", value: 310 },
        { month: "12月", value: 350 },
      ],
      "2022": [
        { month: "1月", value: 100 },
        { month: "2月", value: 120 },
        { month: "3月", value: 140 },
        { month: "4月", value: 130 },
        { month: "5月", value: 150 },
        { month: "6月", value: 170 },
        { month: "7月", value: 190 },
        { month: "8月", value: 210 },
        { month: "9月", value: 230 },
        { month: "10月", value: 250 },
        { month: "11月", value: 270 },
        { month: "12月", value: 290 },
      ],
      "2021": [
        { month: "1月", value: 80 },
        { month: "2月", value: 90 },
        { month: "3月", value: 110 },
        { month: "4月", value: 100 },
        { month: "5月", value: 120 },
        { month: "6月", value: 130 },
        { month: "7月", value: 150 },
        { month: "8月", value: 170 },
        { month: "9月", value: 190 },
        { month: "10月", value: 210 },
        { month: "11月", value: 230 },
        { month: "12月", value: 250 },
      ],
    },
    customers: {
      "2023": [
        { month: "1月", value: 50 },
        { month: "2月", value: 65 },
        { month: "3月", value: 80 },
        { month: "4月", value: 75 },
        { month: "5月", value: 90 },
        { month: "6月", value: 100 },
        { month: "7月", value: 110 },
        { month: "8月", value: 120 },
        { month: "9月", value: 130 },
        { month: "10月", value: 140 },
        { month: "11月", value: 150 },
        { month: "12月", value: 170 },
      ],
      "2022": [
        { month: "1月", value: 40 },
        { month: "2月", value: 50 },
        { month: "3月", value: 60 },
        { month: "4月", value: 55 },
        { month: "5月", value: 70 },
        { month: "6月", value: 80 },
        { month: "7月", value: 90 },
        { month: "8月", value: 100 },
        { month: "9月", value: 110 },
        { month: "10月", value: 120 },
        { month: "11月", value: 130 },
        { month: "12月", value: 140 },
      ],
      "2021": [
        { month: "1月", value: 30 },
        { month: "2月", value: 35 },
        { month: "3月", value: 45 },
        { month: "4月", value: 40 },
        { month: "5月", value: 50 },
        { month: "6月", value: 60 },
        { month: "7月", value: 70 },
        { month: "8月", value: 80 },
        { month: "9月", value: 90 },
        { month: "10月", value: 100 },
        { month: "11月", value: 110 },
        { month: "12月", value: 120 },
      ],
    },
  }
}

// 准备比较数据
const prepareComparisonData = (currentYearData: DataPoint[], previousYearData: DataPoint[]) => {
  return currentYearData.map((item, index) => ({
    month: item.month,
    current: item.value,
    previous: previousYearData[index]?.value || 0,
  }))
}

// 自定义Tooltip内容组件
interface CustomTooltipProps extends TooltipProps<number, string> {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    dataKey: string;
    color?: string;
    fill?: string;
    stroke?: string;
  }>;
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (!active || !payload?.length) {
    return null
  }

  return (
    <div className="rounded-md border bg-background p-2 shadow-md">
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

export function SalesOverview() {
  const [activeTab, setActiveTab] = useState("revenue")
  const [yearFilter, setYearFilter] = useState("2023")
  const [comparisonMode, setComparisonMode] = useState(false)
  const [salesData, setSalesData] = useState<SalesDataType | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // 获取数据
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        const data = await fetchSalesData()
        setSalesData(data)
        setError(null)
      } catch (err) {
        setError("获取数据失败，请刷新重试")
        console.error("Failed to fetch data:", err)
      } finally {
        setLoading(false)
      }
    }
    
    loadData()
  }, [])

  // 标签切换处理
  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }

  // 准备图表数据
  const getChartData = () => {
    if (!salesData) return []
    
    const currentYearData = salesData[activeTab as keyof SalesDataType][yearFilter]
    
    if (!currentYearData) return []

    if (comparisonMode) {
      const previousYear = String(Number.parseInt(yearFilter) - 1)
      const previousYearData = salesData[activeTab as keyof SalesDataType][previousYear]

      if (previousYearData) {
        return prepareComparisonData(currentYearData, previousYearData)
      }
    }

    return currentYearData.map((item) => ({
      month: item.month,
      value: item.value,
    }))
  }

  const chartData = getChartData()

  // 获取Y轴格式化函数
  const getYAxisFormatter = () => {
    if (activeTab === "revenue") {
      return (value: number) => `¥${(value / 10000).toFixed(0)}万`
    } else {
      return (value: number) => value.toString()
    }
  }

  // 图表配置
  const chartConfig = {
    ...(comparisonMode
      ? {
          current: {
            label: `${yearFilter}年`,
            color: "hsl(var(--chart-1))",
          },
          previous: {
            label: `${Number.parseInt(yearFilter) - 1}年`,
            color: "hsl(var(--chart-2))",
          },
        }
      : {
          value: {
            label: activeTab === "revenue" ? "销售额" : activeTab === "orders" ? "订单数" : "客户数",
            color: "hsl(var(--chart-1))",
          },
        }),
  }

  // 加载中或错误状态
  if (loading) {
    return (
      <Card className="tech-card">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle>销售概览</CardTitle>
            <CardDescription>加载中...</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Skeleton className="h-[40px] w-full" />
            <Skeleton className="h-[350px] w-full" />
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card className="tech-card">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle>销售概览</CardTitle>
            <CardDescription className="text-red-500">{error}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-[350px]">
            <p className="text-muted-foreground">数据加载失败，请稍后再试</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="tech-card">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>销售概览</CardTitle>
          <CardDescription>查看销售趋势和业绩指标</CardDescription>
        </div>
        <div className="flex items-center gap-2">
          <Select value={yearFilter} onValueChange={setYearFilter}>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="年份" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2021">2021</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
            </SelectContent>
          </Select>
          <Select value={comparisonMode ? "yes" : "no"} onValueChange={(value) => setComparisonMode(value === "yes")}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="对比模式" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="no">单年数据</SelectItem>
              <SelectItem value="yes">同比对比</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="revenue" value={activeTab} className="w-full" onValueChange={handleTabChange}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="revenue">收入</TabsTrigger>
            <TabsTrigger value="orders">订单</TabsTrigger>
            <TabsTrigger value="customers">客户</TabsTrigger>
          </TabsList>
          <TabsContent value="revenue" className="mt-4">
            <ChartContainer config={chartConfig} className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis tickFormatter={getYAxisFormatter()} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  {comparisonMode ? (
                    <>
                      <Line 
                        type="monotone" 
                        dataKey="current" 
                        stroke="hsl(var(--chart-1))" 
                        name={`${yearFilter}年`} 
                        strokeWidth={2}
                        activeDot={{ r: 6 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="previous"
                        stroke="hsl(var(--chart-2))"
                        name={`${Number.parseInt(yearFilter) - 1}年`}
                        strokeWidth={2}
                      />
                    </>
                  ) : (
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="hsl(var(--chart-1))" 
                      name="销售额" 
                      strokeWidth={2}
                      activeDot={{ r: 6 }}
                    />
                  )}
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </TabsContent>
          <TabsContent value="orders" className="mt-4">
            <ChartContainer config={chartConfig} className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis tickFormatter={getYAxisFormatter()} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  {comparisonMode ? (
                    <>
                      <Line 
                        type="monotone" 
                        dataKey="current" 
                        stroke="hsl(var(--chart-1))" 
                        name={`${yearFilter}年`} 
                        strokeWidth={2}
                        activeDot={{ r: 6 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="previous"
                        stroke="hsl(var(--chart-2))"
                        name={`${Number.parseInt(yearFilter) - 1}年`}
                        strokeWidth={2}
                      />
                    </>
                  ) : (
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="hsl(var(--chart-1))" 
                      name="订单数" 
                      strokeWidth={2}
                      activeDot={{ r: 6 }}
                    />
                  )}
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </TabsContent>
          <TabsContent value="customers" className="mt-4">
            <ChartContainer config={chartConfig} className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis tickFormatter={getYAxisFormatter()} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  {comparisonMode ? (
                    <>
                      <Line 
                        type="monotone" 
                        dataKey="current" 
                        stroke="hsl(var(--chart-1))" 
                        name={`${yearFilter}年`} 
                        strokeWidth={2}
                        activeDot={{ r: 6 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="previous"
                        stroke="hsl(var(--chart-2))"
                        name={`${Number.parseInt(yearFilter) - 1}年`}
                        strokeWidth={2}
                      />
                    </>
                  ) : (
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="hsl(var(--chart-1))" 
                      name="客户数" 
                      strokeWidth={2}
                      activeDot={{ r: 6 }}
                    />
                  )}
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

