# Tech-CRM API 文档

## 概述

Tech-CRM 的前端代码主要通过模拟数据展示界面，实际项目中可以通过集成后端 API 来实现数据的获取和管理。本文档提供了 API 集成的基本指南和推荐实现方式。

## API 结构

### 认证 API

#### 登录

```
POST /api/auth/login
```

**请求体**:
```json
{
  "username": "admin",
  "password": "password"
}
```

**响应**:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "1",
    "username": "admin",
    "name": "管理员",
    "role": "administrator"
  }
}
```

#### 登出

```
POST /api/auth/logout
```

**响应**:
```json
{
  "success": true
}
```

### 仪表盘数据 API

#### 获取仪表盘统计数据

```
GET /api/dashboard/stats
```

**响应**:
```json
{
  "totalRevenue": 1234567,
  "customerCount": 1234,
  "orderCount": 567,
  "conversionRate": 24.8,
  "averageOrderValue": 12345,
  "targetCompletion": 78.5,
  "lastUpdated": "2023-03-21T14:30:00Z"
}
```

#### 获取销售图表数据

```
GET /api/dashboard/sales-chart
```

**响应**:
```json
{
  "labels": ["1月", "2月", "3月", "4月", "5月", "6月"],
  "datasets": [
    {
      "label": "今年",
      "data": [1200000, 1350000, 1400000, 1300000, 1450000, 1500000]
    },
    {
      "label": "去年",
      "data": [1100000, 1200000, 1300000, 1250000, 1350000, 1400000]
    }
  ]
}
```

### 客户 API

#### 获取客户列表

```
GET /api/customers
```

**查询参数**:
```
page: 页码 (默认 1)
limit: 每页数量 (默认 10)
search: 搜索关键词
sort: 排序字段
order: 排序方向 (asc/desc)
```

**响应**:
```json
{
  "total": 1234,
  "page": 1,
  "limit": 10,
  "data": [
    {
      "id": "1",
      "name": "张三",
      "company": "科技有限公司",
      "email": "zhangsan@example.com",
      "phone": "13800138000",
      "status": "active",
      "createdAt": "2023-01-15T08:30:00Z",
      "totalSpent": 45600
    },
    // ... 更多客户数据
  ]
}
```

#### 获取单个客户

```
GET /api/customers/:id
```

**响应**:
```json
{
  "id": "1",
  "name": "张三",
  "company": "科技有限公司",
  "email": "zhangsan@example.com",
  "phone": "13800138000",
  "status": "active",
  "createdAt": "2023-01-15T08:30:00Z",
  "totalSpent": 45600,
  "address": "北京市朝阳区科技路100号",
  "notes": "重要客户，需重点关注",
  "tags": ["VIP", "科技", "北京"]
}
```

#### 创建客户

```
POST /api/customers
```

**请求体**:
```json
{
  "name": "李四",
  "company": "创新科技有限公司",
  "email": "lisi@example.com",
  "phone": "13900139000",
  "status": "active",
  "address": "上海市浦东新区张江高科技园区",
  "notes": "新客户",
  "tags": ["新客户", "科技", "上海"]
}
```

**响应**:
```json
{
  "id": "2",
  "name": "李四",
  "company": "创新科技有限公司",
  "email": "lisi@example.com",
  "phone": "13900139000",
  "status": "active",
  "createdAt": "2023-03-22T10:15:00Z",
  "totalSpent": 0,
  "address": "上海市浦东新区张江高科技园区",
  "notes": "新客户",
  "tags": ["新客户", "科技", "上海"]
}
```

#### 更新客户

```
PUT /api/customers/:id
```

**请求体**:
```json
{
  "name": "李四",
  "phone": "13911139111",
  "notes": "重要客户，提供特殊折扣"
}
```

**响应**:
```json
{
  "id": "2",
  "name": "李四",
  "company": "创新科技有限公司",
  "email": "lisi@example.com",
  "phone": "13911139111",
  "status": "active",
  "createdAt": "2023-03-22T10:15:00Z",
  "updatedAt": "2023-03-23T14:30:00Z",
  "totalSpent": 0,
  "address": "上海市浦东新区张江高科技园区",
  "notes": "重要客户，提供特殊折扣",
  "tags": ["新客户", "科技", "上海"]
}
```

#### 删除客户

```
DELETE /api/customers/:id
```

**响应**:
```json
{
  "success": true
}
```

### 订单 API

#### 获取订单列表

```
GET /api/orders
```

**查询参数**:
```
page: 页码 (默认 1)
limit: 每页数量 (默认 10)
search: 搜索关键词
status: 订单状态过滤
customerId: 客户ID过滤
dateFrom: 开始日期
dateTo: 结束日期
sort: 排序字段
order: 排序方向 (asc/desc)
```

**响应**:
```json
{
  "total": 567,
  "page": 1,
  "limit": 10,
  "data": [
    {
      "id": "ORD-2023-001",
      "customerId": "1",
      "customerName": "张三",
      "amount": 12500,
      "status": "completed",
      "date": "2023-03-15T09:30:00Z",
      "items": 5
    },
    // ... 更多订单数据
  ]
}
```

#### 获取单个订单

```
GET /api/orders/:id
```

**响应**:
```json
{
  "id": "ORD-2023-001",
  "customerId": "1",
  "customerName": "张三",
  "customerEmail": "zhangsan@example.com",
  "amount": 12500,
  "status": "completed",
  "date": "2023-03-15T09:30:00Z",
  "paymentMethod": "credit_card",
  "shippingAddress": "北京市朝阳区科技路100号",
  "items": [
    {
      "id": "1",
      "name": "高性能服务器",
      "quantity": 2,
      "unitPrice": 5000,
      "totalPrice": 10000
    },
    {
      "id": "2",
      "name": "企业级软件许可",
      "quantity": 1,
      "unitPrice": 2500,
      "totalPrice": 2500
    }
  ],
  "notes": "客户要求尽快发货"
}
```

#### 创建订单

```
POST /api/orders
```

**请求体**:
```json
{
  "customerId": "2",
  "amount": 8500,
  "paymentMethod": "bank_transfer",
  "shippingAddress": "上海市浦东新区张江高科技园区",
  "items": [
    {
      "id": "3",
      "name": "网络安全设备",
      "quantity": 1,
      "unitPrice": 8500,
      "totalPrice": 8500
    }
  ],
  "notes": "需要安装服务"
}
```

**响应**:
```json
{
  "id": "ORD-2023-002",
  "customerId": "2",
  "customerName": "李四",
  "customerEmail": "lisi@example.com",
  "amount": 8500,
  "status": "pending",
  "date": "2023-03-22T11:45:00Z",
  "paymentMethod": "bank_transfer",
  "shippingAddress": "上海市浦东新区张江高科技园区",
  "items": [
    {
      "id": "3",
      "name": "网络安全设备",
      "quantity": 1,
      "unitPrice": 8500,
      "totalPrice": 8500
    }
  ],
  "notes": "需要安装服务"
}
```

#### 更新订单状态

```
PATCH /api/orders/:id/status
```

**请求体**:
```json
{
  "status": "shipped",
  "notes": "已发货，预计3天内送达"
}
```

**响应**:
```json
{
  "id": "ORD-2023-002",
  "status": "shipped",
  "updatedAt": "2023-03-23T10:00:00Z",
  "notes": "已发货，预计3天内送达"
}
```

### 合同 API

#### 获取合同列表

```
GET /api/contracts
```

**查询参数**:
```
page: 页码 (默认 1)
limit: 每页数量 (默认 10)
search: 搜索关键词
status: 合同状态过滤
customerId: 客户ID过滤
dateFrom: 开始日期
dateTo: 结束日期
```

**响应**:
```json
{
  "total": 123,
  "page": 1,
  "limit": 10,
  "data": [
    {
      "id": "CONT-2023-001",
      "title": "年度服务协议",
      "customerId": "1",
      "customerName": "张三",
      "value": 120000,
      "startDate": "2023-01-01T00:00:00Z",
      "endDate": "2023-12-31T23:59:59Z",
      "status": "active"
    },
    // ... 更多合同数据
  ]
}
```

## 实现指南

### API 客户端实现

建议使用 `axios` 或 `fetch` API 实现 API 客户端。以下是使用 axios 的示例：

```typescript
// lib/api-client.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器，添加认证 token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器，处理常见错误
apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // 处理未授权错误，例如重定向到登录页
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default apiClient;
```

### 数据获取示例

使用 React Query 进行数据获取和缓存管理：

```typescript
// hooks/use-customers.ts
import { useQuery, useMutation, useQueryClient } from 'react-query';
import apiClient from '@/lib/api-client';

// 获取客户列表
export function useCustomers(params = {}) {
  return useQuery(['customers', params], async () => {
    const response = await apiClient.get('/customers', { params });
    return response;
  });
}

// 获取单个客户
export function useCustomer(id) {
  return useQuery(['customer', id], async () => {
    const response = await apiClient.get(`/customers/${id}`);
    return response;
  }, {
    enabled: !!id,
  });
}

// 创建客户
export function useCreateCustomer() {
  const queryClient = useQueryClient();
  
  return useMutation(
    (customerData) => apiClient.post('/customers', customerData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('customers');
      },
    }
  );
}

// 更新客户
export function useUpdateCustomer() {
  const queryClient = useQueryClient();
  
  return useMutation(
    ({ id, data }) => apiClient.put(`/customers/${id}`, data),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries('customers');
        queryClient.invalidateQueries(['customer', data.id]);
      },
    }
  );
}

// 删除客户
export function useDeleteCustomer() {
  const queryClient = useQueryClient();
  
  return useMutation(
    (id) => apiClient.delete(`/customers/${id}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('customers');
      },
    }
  );
}
```

### 在组件中使用

```tsx
// 组件中使用示例
import { useCustomers, useCreateCustomer } from '@/hooks/use-customers';

export function CustomerList() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  
  const { data, isLoading, error } = useCustomers({ page, limit: 10, search });
  const createCustomer = useCreateCustomer();
  
  const handleAddCustomer = async (formData) => {
    try {
      await createCustomer.mutateAsync(formData);
      // 显示成功消息
    } catch (error) {
      // 处理错误
    }
  };
  
  if (isLoading) return <div>加载中...</div>;
  if (error) return <div>发生错误: {error.message}</div>;
  
  return (
    <div>
      {/* 使用获取的数据渲染UI */}
    </div>
  );
}
```

## 错误处理

### 常见错误代码

| 错误代码 | 描述 | 处理方式 |
|---------|------|----------|
| 400 | 错误请求 | 显示详细错误信息，指导用户修正输入 |
| 401 | 未授权 | 重定向到登录页面 |
| 403 | 禁止访问 | 显示权限不足提示 |
| 404 | 资源不存在 | 显示资源未找到提示 |
| 422 | 验证错误 | 显示表单字段验证错误 |
| 500 | 服务器错误 | 显示通用错误消息，提供重试选项 |

### 错误处理组件

```tsx
// components/error-boundary.tsx
import { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}
```

## 部署注意事项

1. 确保 API 端点在开发环境和生产环境中正确配置
2. 使用环境变量存储 API 基础 URL
3. 实现适当的 CORS 策略
4. 使用 HTTPS 加密所有 API 通信
5. 实现请求速率限制和防护措施
6. 考虑使用 API 网关管理 API 流量和安全

## 附录

### 状态码汇总

| 状态码 | 描述 |
|-------|------|
| 200 | 请求成功 |
| 201 | 资源创建成功 |
| 204 | 成功处理但无返回内容 |
| 400 | 错误请求 |
| 401 | 未授权 |
| 403 | 禁止访问 |
| 404 | 资源不存在 |
| 422 | 验证错误 |
| 500 | 服务器错误 |

### 数据模型参考

详细的数据模型规范，包括字段类型、验证规则和关系定义，可参考项目的数据库设计文档。 