"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts"

// 模拟销售数据
const salesData = {
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

// 准备比较数据
const prepareComparisonData = (currentYearData: any[], previousYearData: any[]) => {
  return currentYearData.map((item, index) => ({
    month: item.month,
    current: item.value,
    previous: previousYearData[index]?.value || 0,
  }))
}

export function SalesOverview() {
  const [activeTab, setActiveTab] = useState("revenue")
  const [yearFilter, setYearFilter] = useState("2023")
  const [comparisonMode, setComparisonMode] = useState(false)

  // 准备图表数据
  const getChartData = () => {
    const currentYearData = salesData[activeTab as keyof typeof salesData][yearFilter as keyof typeof salesData.revenue]

    if (comparisonMode) {
      const previousYear = String(Number.parseInt(yearFilter) - 1)
      const previousYearData =
        salesData[activeTab as keyof typeof salesData][previousYear as keyof typeof salesData.revenue]

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
      return (value: number) => value
    }
  }

  // 获取图表配置
  const getChartConfig = () => {
    if (comparisonMode) {
      return {
        current: {
          label: `${yearFilter}年`,
          color: "hsl(var(--chart-1))",
        },
        previous: {
          label: `${Number.parseInt(yearFilter) - 1}年`,
          color: "hsl(var(--chart-2))",
        },
      }
    } else {
      return {
        value: {
          label: activeTab === "revenue" ? "销售额" : activeTab === "orders" ? "订单数" : "客户数",
          color: "hsl(var(--chart-1))",
        },
      }
    }
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
        <Tabs defaultValue="revenue" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="revenue">收入</TabsTrigger>
            <TabsTrigger value="orders">订单</TabsTrigger>
            <TabsTrigger value="customers">客户</TabsTrigger>
          </TabsList>
          <TabsContent value="revenue" className="mt-4">
            <ChartContainer config={getChartConfig()} className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis tickFormatter={getYAxisFormatter()} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  {comparisonMode ? (
                    <>
                      <Line type="monotone" dataKey="current" stroke="var(--color-current)" name={`${yearFilter}年`} />
                      <Line
                        type="monotone"
                        dataKey="previous"
                        stroke="var(--color-previous)"
                        name={`${Number.parseInt(yearFilter) - 1}年`}
                      />
                    </>
                  ) : (
                    <Line type="monotone" dataKey="value" stroke="var(--color-value)" name="销售额" />
                  )}
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </TabsContent>
          <TabsContent value="orders" className="mt-4">
            <ChartContainer config={getChartConfig()} className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  {comparisonMode ? (
                    <>
                      <Line type="monotone" dataKey="current" stroke="var(--color-current)" name={`${yearFilter}年`} />
                      <Line
                        type="monotone"
                        dataKey="previous"
                        stroke="var(--color-previous)"
                        name={`${Number.parseInt(yearFilter) - 1}年`}
                      />
                    </>
                  ) : (
                    <Line type="monotone" dataKey="value" stroke="var(--color-value)" name="订单数" />
                  )}
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </TabsContent>
          <TabsContent value="customers" className="mt-4">
            <ChartContainer config={getChartConfig()} className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  {comparisonMode ? (
                    <>
                      <Line type="monotone" dataKey="current" stroke="var(--color-current)" name={`${yearFilter}年`} />
                      <Line
                        type="monotone"
                        dataKey="previous"
                        stroke="var(--color-previous)"
                        name={`${Number.parseInt(yearFilter) - 1}年`}
                      />
                    </>
                  ) : (
                    <Line type="monotone" dataKey="value" stroke="var(--color-value)" name="客户数" />
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

