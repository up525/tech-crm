"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useTheme } from "next-themes"
import { useEnhancedTheme } from "./enhanced-theme-provider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function SettingsTabs() {
  const { theme, setTheme } = useTheme()
  const { colorTheme, setColorTheme } = useEnhancedTheme()
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [smsNotifications, setSmsNotifications] = useState(false)
  const [darkMode, setDarkMode] = useState(theme === "dark")

  const handleDarkModeChange = (checked: boolean) => {
    setDarkMode(checked)
    setTheme(checked ? "dark" : "light")
  }

  return (
    <Card className="tech-card">
      <CardContent className="p-6">
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">个人资料</TabsTrigger>
            <TabsTrigger value="appearance">外观</TabsTrigger>
            <TabsTrigger value="notifications">通知</TabsTrigger>
            <TabsTrigger value="security">安全</TabsTrigger>
          </TabsList>
          <TabsContent value="profile" className="mt-6 space-y-6">
            <div className="flex flex-col gap-6 md:flex-row">
              <div className="flex flex-col items-center gap-4 md:w-1/3">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg?height=96&width=96&text=管" alt="用户头像" />
                  <AvatarFallback className="text-2xl">管</AvatarFallback>
                </Avatar>
                <Button>更换头像</Button>
              </div>
              <div className="space-y-4 md:w-2/3">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">姓名</Label>
                    <Input id="name" defaultValue="管理员" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">邮箱</Label>
                    <Input id="email" defaultValue="admin@techcrm.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">电话</Label>
                    <Input id="phone" defaultValue="13800138000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">角色</Label>
                    <Input id="role" defaultValue="系统管理员" disabled />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">个人简介</Label>
                  <Textarea id="bio" defaultValue="负责系统管理和用户权限配置，确保系统安全稳定运行。" rows={4} />
                </div>
                <div className="flex justify-end">
                  <Button>保存更改</Button>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="appearance" className="mt-6 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">深色模式</h3>
                  <p className="text-sm text-muted-foreground">启用深色模式以减少眼睛疲劳</p>
                </div>
                <Switch checked={darkMode} onCheckedChange={handleDarkModeChange} />
              </div>
              <div className="space-y-2">
                <Label>主题色</Label>
                <RadioGroup
                  defaultValue={colorTheme}
                  onValueChange={(value) => setColorTheme(value as any)}
                  className="grid grid-cols-2 gap-4 pt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="dark" id="theme-blue" />
                    <Label htmlFor="theme-blue" className="flex items-center gap-2">
                      <span className="h-4 w-4 rounded-full bg-[#0070f3]"></span>
                      蓝色
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="purple" id="theme-purple" />
                    <Label htmlFor="theme-purple" className="flex items-center gap-2">
                      <span className="h-4 w-4 rounded-full bg-[#8b5cf6]"></span>
                      紫色
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="green" id="theme-green" />
                    <Label htmlFor="theme-green" className="flex items-center gap-2">
                      <span className="h-4 w-4 rounded-full bg-[#10b981]"></span>
                      绿色
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="red" id="theme-red" />
                    <Label htmlFor="theme-red" className="flex items-center gap-2">
                      <span className="h-4 w-4 rounded-full bg-[#ef4444]"></span>
                      红色
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Label htmlFor="font-size">字体大小</Label>
                <Select defaultValue="medium">
                  <SelectTrigger id="font-size">
                    <SelectValue placeholder="选择字体大小" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">小</SelectItem>
                    <SelectItem value="medium">中</SelectItem>
                    <SelectItem value="large">大</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-end">
                <Button>保存更改</Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="notifications" className="mt-6 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">启用通知</h3>
                  <p className="text-sm text-muted-foreground">接收系统和业务相关的通知</p>
                </div>
                <Switch checked={notificationsEnabled} onCheckedChange={setNotificationsEnabled} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">电子邮件通知</h3>
                  <p className="text-sm text-muted-foreground">通过电子邮件接收通知</p>
                </div>
                <Switch
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                  disabled={!notificationsEnabled}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">短信通知</h3>
                  <p className="text-sm text-muted-foreground">通过短信接收通知</p>
                </div>
                <Switch
                  checked={smsNotifications}
                  onCheckedChange={setSmsNotifications}
                  disabled={!notificationsEnabled}
                />
              </div>
              <div className="space-y-2">
                <Label>通知类型</Label>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="new-order" defaultChecked />
                    <Label htmlFor="new-order">新订单通知</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="contract-expiry" defaultChecked />
                    <Label htmlFor="contract-expiry">合同到期提醒</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="payment-reminder" defaultChecked />
                    <Label htmlFor="payment-reminder">付款提醒</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="system-updates" />
                    <Label htmlFor="system-updates">系统更新通知</Label>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <Button>保存更改</Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="security" className="mt-6 space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">修改密码</h3>
                <p className="text-sm text-muted-foreground">定期更改密码以提高账户安全性</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="current-password">当前密码</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">新密码</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">确认新密码</Label>
                <Input id="confirm-password" type="password" />
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">双因素认证</h3>
                <p className="text-sm text-muted-foreground">启用双因素认证以增强账户安全性</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">双因素认证</p>
                    <p className="text-sm text-muted-foreground">使用身份验证器应用进行双因素认证</p>
                  </div>
                  <Switch defaultChecked={false} />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">登录历史</h3>
                <p className="text-sm text-muted-foreground">查看您的账户最近的登录活动</p>
                <div className="rounded-lg border bg-card p-4 space-y-2">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">北京, 中国</p>
                      <p className="text-xs text-muted-foreground">Chrome on Windows</p>
                    </div>
                    <p className="text-sm">今天, 14:20</p>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">上海, 中国</p>
                      <p className="text-xs text-muted-foreground">Safari on macOS</p>
                    </div>
                    <p className="text-sm">昨天, 09:30</p>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">广州, 中国</p>
                      <p className="text-xs text-muted-foreground">Firefox on Windows</p>
                    </div>
                    <p className="text-sm">2023-03-18, 16:45</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <Button>保存更改</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

