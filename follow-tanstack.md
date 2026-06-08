title: Follow TanStack
description: ตั้งค่าและใช้งาน TanStack libraries สำหรับ data fetching, table, forms และ routing
auto_execution_mode: 3
## Purpose

ตั้งค่า TanStack libraries (Query, Table, Form, Router) สำหรับ data management และ UI components

## Scope

- TanStack Query - Data fetching, caching, synchronization
- TanStack Table - Headless table UI
- TanStack Form - Form management
- TanStack Router - Type-safe routing

## Inputs

| Input | Details |
|-------|-----------|
| Package Manager | Bun |
| Framework | React, Vue, Solid, Svelte |
| Features | Query, Table, Form, Router |

## Rules

| Category | Requirements |
|------|---------|
| **Selection** | เลือกเฉพาะ libraries ที่ใช้ |
| **Version** | ใช้เวอร์ชันล่าสุด |
| **Type Safety** | ใช้ TypeScript types อย่างเต็มรูปแบบ |
| **DevTools** | ติดตั้ง TanStack Query DevTools สำหรับ development |

## Structure

### Directory Structure

```text
project/
├── src/
│   ├── hooks/
│   │   └── useData.ts    # Query hooks
│   ├── components/
│   │   └── DataTable.tsx # Table component
│   └── lib/
│       └── queryClient.ts # Query client
└── package.json
```

### Phase Definitions

| Phase | Description | Main Activities |
|-------|-------------|---------------|
| Select | เลือก libraries | ระบุ TanStack packages |
| Install | ติดตั้ง | Bun add packages |
| Configure | กำหนดค่า | QueryClient, providers |
| Implement | ใช้งาน | Hooks, components |

## Steps

### Phase 0: Precondition

- 0.1 **ตรวจสอบ Environment**
  - มี Bun ติดตั้งแล้ว
  - มี frontend framework ติดตั้งแล้ว

### Phase 1: Select

- 1.1 **เลือก Libraries**
  - TanStack Query: `@tanstack/react-query`
  - TanStack Table: `@tanstack/react-table`
  - TanStack Form: `@tanstack/react-form`
  - TanStack Router: `@tanstack/react-router`

### Phase 2: Install

- 2.1 **ติดตั้ง Packages**
  - Query: `bun add @tanstack/react-query`
  - Query Devtools: `bun add -D @tanstack/react-query-devtools`
  - Table: `bun add @tanstack/react-table`
  - Form: `bun add @tanstack/react-form`
  - Router: `bun add @tanstack/react-router`

### Phase 3: Configure

- 3.1 **Query Client**
  - สร้าง `queryClient.ts`:

```ts [src/lib/queryClient.ts]
import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 2,
    },
  },
})
```

- 3.2 **Provider Setup**
  - เพิ่ม provider ใน app root:

```tsx
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/queryClient'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <YourApp />
    </QueryClientProvider>
  )
}
```

### Phase 4: Implement

- 4.1 **ใช้งาน Query**
  - สร้าง hooks สำหรับ data fetching:

```ts [src/hooks/useUsers.ts]
import { useQuery } from '@tanstack/react-query'

export function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await fetch('/api/users')
      return response.json()
    },
  })
}
```

## Outputs

| Output | Details |
|--------|-----------|
| Installed packages | TanStack libraries |
| Query client | Configuration |
| Hooks | Data fetching hooks |
| Components | Table, Form components |

## Expected Outcome

- TanStack libraries ติดตั้งสำเร็จ
- Query client ทำงานได้
- Data fetching, caching ทำงานได้
- Type-safe และมีประสิทธิภาพ

## Reference

- `/validate` - ตรวจสอบความถูกต้องก่อนเริ่ม
- `/connect-workflows` - เชื่อมโยง workflows
