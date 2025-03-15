"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Send, Paperclip, MoreVertical, Phone, Video } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// 模拟联系人数据
const contacts = [
  {
    id: 1,
    name: "张三",
    company: "科技创新有限公司",
    avatar: "/placeholder.svg?height=40&width=40&text=张",
    lastMessage: "我们需要讨论一下新的合同细节",
    time: "10:30",
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: "李四",
    company: "数字解决方案公司",
    avatar: "/placeholder.svg?height=40&width=40&text=李",
    lastMessage: "产品演示安排在下周二下午3点",
    time: "昨天",
    unread: 0,
    online: false,
  },
  {
    id: 3,
    name: "王五",
    company: "未来科技集团",
    avatar: "/placeholder.svg?height=40&width=40&text=王",
    lastMessage: "报价单已经发送，请查收",
    time: "昨天",
    unread: 1,
    online: true,
  },
  {
    id: 4,
    name: "赵六",
    company: "智能系统有限公司",
    avatar: "/placeholder.svg?height=40&width=40&text=赵",
    lastMessage: "我们对您的提案很感兴趣",
    time: "周一",
    unread: 0,
    online: false,
  },
  {
    id: 5,
    name: "钱七",
    company: "云计算服务公司",
    avatar: "/placeholder.svg?height=40&width=40&text=钱",
    lastMessage: "谢谢您的支持",
    time: "周一",
    unread: 0,
    online: true,
  },
]

// 模拟消息数据
const messages = [
  {
    id: 1,
    contactId: 1,
    text: "您好，关于我们之前讨论的企业级云服务套餐",
    time: "10:00",
    sender: "contact",
  },
  {
    id: 2,
    contactId: 1,
    text: "我们公司决定采购贵公司的服务",
    time: "10:02",
    sender: "contact",
  },
  {
    id: 3,
    contactId: 1,
    text: "您好张总，非常感谢您的信任！我们将提供最优质的服务。",
    time: "10:05",
    sender: "user",
  },
  {
    id: 4,
    contactId: 1,
    text: "我们需要讨论一下新的合同细节",
    time: "10:30",
    sender: "contact",
  },
]

export function MessageCenter() {
  const [selectedContact, setSelectedContact] = useState(contacts[0])
  const [messageText, setMessageText] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [currentMessages, setCurrentMessages] = useState(
    messages.filter((message) => message.contactId === contacts[0].id),
  )

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.company.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleContactSelect = (contact) => {
    setSelectedContact(contact)
    setCurrentMessages(messages.filter((message) => message.contactId === contact.id))
  }

  const handleSendMessage = () => {
    if (messageText.trim() === "") return

    const newMessage = {
      id: currentMessages.length + 1,
      contactId: selectedContact.id,
      text: messageText,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      sender: "user",
    }

    setCurrentMessages([...currentMessages, newMessage])
    setMessageText("")
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="tech-card md:col-span-1">
        <CardContent className="p-4">
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="搜索联系人..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="space-y-1">
              {filteredContacts.map((contact) => (
                <div
                  key={contact.id}
                  className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors ${
                    selectedContact.id === contact.id ? "bg-primary/10 text-primary" : "hover:bg-muted"
                  }`}
                  onClick={() => handleContactSelect(contact)}
                >
                  <div className="relative">
                    <Avatar>
                      <AvatarImage src={contact.avatar} alt={contact.name} />
                      <AvatarFallback>{contact.name[0]}</AvatarFallback>
                    </Avatar>
                    {contact.online && (
                      <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-background"></span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-medium truncate">{contact.name}</p>
                      <p className="text-xs text-muted-foreground">{contact.time}</p>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{contact.lastMessage}</p>
                  </div>
                  {contact.unread > 0 && <Badge className="ml-auto bg-primary">{contact.unread}</Badge>}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="tech-card md:col-span-2">
        <CardContent className="p-0">
          <div className="flex flex-col h-[600px]">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={selectedContact.avatar} alt={selectedContact.name} />
                  <AvatarFallback>{selectedContact.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{selectedContact.name}</p>
                  <p className="text-xs text-muted-foreground">{selectedContact.company}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Phone className="h-4 w-4" />
                  <span className="sr-only">通话</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <Video className="h-4 w-4" />
                  <span className="sr-only">视频</span>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                      <span className="sr-only">更多选项</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>选项</DropdownMenuLabel>
                    <DropdownMenuItem>查看联系人信息</DropdownMenuItem>
                    <DropdownMenuItem>搜索消息</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>清除聊天记录</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {currentMessages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}
                  >
                    <p>{message.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.sender === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                      }`}
                    >
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Paperclip className="h-4 w-4" />
                  <span className="sr-only">附件</span>
                </Button>
                <Input
                  placeholder="输入消息..."
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSendMessage()
                    }
                  }}
                />
                <Button size="icon" onClick={handleSendMessage}>
                  <Send className="h-4 w-4" />
                  <span className="sr-only">发送</span>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

