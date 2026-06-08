---
trigger: always_on
---

## Setup

### config

#### `package.json`

```json [package.json]
{
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "typecheck": "tsc --noEmit",
    "lint": "biome check ."
  }
}
```

### Libraries

- /follow-unocss

## Project Structure

```plaintext
my-react-app/
├── src/
│   ├── components/
│   │   ├── ui/               # Dumb UI components
│   │   └── features/         # Feature UI components
│   ├── hooks/                # useX hooks (controller/facade)
│   ├── lib/                  # app utilities, clients, adapters
│   ├── pages/                # route-level components (ถ้ามี)
│   ├── styles/
│   ├── types/
│   ├── main.tsx
│   └── App.tsx
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Core Principles

1. ใช้ React.StrictMode

```tsx
<React.StrictMode>
    <App />
</React.StrictMode>
```

2. ใช้ React Server Component (RSC) ให้เหมาะสม เช่น

- component heavy ไม่มี interactive แค่แสดงข้อมูล
- ดึง data จาก server
- ต้องการ security
- re-render น่อย แต่ไม่มี state

3. ใช้ Error Boundaries ห่อส่วนเสี่ยงไว้ เพื่อไม่ให้แอป crash ทั้งหมด

```tsx
<ErrorBoundary>
  <SomeComp />
</ErrorBoundary>
```

4. ใช้ unocss => /follow-unocss

5. Memoization / Rendering Optimization

- ใช้ `React.memo`, `useMemo`, `useCallback` เมื่อจำเป็น
- อย่า over‑memoize ที่ไม่ช่วย performance จริง

6. Code Splitting & Lazy Loading

- แบ่ง bundle ตาม route หรือ component เพื่อให้ initial load เบาและเร็ว

```tsx
const Page = React.lazy(() => import('./Page'))
```

7. automatic batching แล้ว แต่ยังควรใช้ `useTransition` เพื่อแบ่ง priority update

```tsx
const [isPending, startTransition] = useTransition()

```

## Folder Rules

### `components/ui/`

- Do
  - component เล็ก ๆ โฟกัสอย่างเดียว
  - รับ props ส่ง events (Props in, Events out)
- Don't
  - ดึง data / เรียก API ใน component

```tsx
type ButtonProps = {
  label: string
  onClick: () => void
}

export const Button = ({ label, onClick }: ButtonProps) => {
  return <button type="button" onClick={onClick}>{label}</button>
}
```

### `components/features/`

- Do
  - แยกตาม feature (เช่น `components/features/auth/*`)
- Don't
  - ผูกกับ global state โดยไม่จำเป็น

```tsx
import { Button } from '../ui/Button'

export const LoginPanel = () => {
  return (
    <section>
      <h2>Login</h2>
      <Button label="Sign in" onClick={() => {}} />
    </section>
  )
}
```

### `hooks/`

- Do
  - เก็บ orchestration/flow (คล้าย `composables/facade`)
  - รวมหลาย ๆ `lib`/client ให้เป็น API ที่ UI เรียกง่าย
- Don't
  - ใส่ UI markup

```ts
import { useCallback, useState } from 'react'

export const useCounter = () => {
  const [count, setCount] = useState(0)

  const inc = useCallback(() => setCount((c) => c + 1), [])

  return { count, inc }
}
```

### `lib/`

- Do
  - client/adapters (เช่น fetch client), pure utilities, helpers
- Don't
  - import React component / hook เข้ามาใน `lib/`

```ts
export const assertNever = (value: never): never => {
  throw new Error(`Unexpected value: ${String(value)}`)
}
```

## Import Rules

```plaintext
pages                <-- components/features, hooks
components/features  <-- components/ui, hooks
components/ui        <-- (no internal dependencies)
hooks                <-- lib, types
lib                  <-- types
types                <-- (no internal dependencies)
```
