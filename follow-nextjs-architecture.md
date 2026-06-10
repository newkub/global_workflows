---
title: Next.js Architecture
description: จัดโครงสร้างโปรเจกต์ Next.js ตาม best practices
auto_execution_mode: 3
---

## Goal

จัดโครงสร้างโปรเจกต์ Next.js ตาม best practices และ App Router patterns

## Execute

### 1. Setup Project Structure

สร้างโครงสร้างโปรเจกต์พื้นฐาน

1. สร้างโฟลเดอร์หลัก: `app/`, `components/`, `lib/`, `public/`
2. สร้าง `app/` สำหรับ App Router (pages, layouts, templates)
3. สร้าง `components/` สำหรับ reusable components
4. สร้าง `lib/` สำหรับ utility functions
5. สร้าง `hooks/` สำหรับ custom React hooks
6. สร้าง `types/` สำหรับ TypeScript types

### 2. Configure Next.js

ตั้งค่า Next.js และ build tools

1. ติดตั้ง dependencies: `next`, `react`, `react-dom`
2. ตั้งค่า `next.config.js` หรือ `next.config.mjs`
3. ตั้งค่า TypeScript config สำหรับ Next.js
4. ตั้งค่า `tsconfig.json` พร้อม path aliases
5. ตั้งค่า environment variables ใน `.env.local`

### 3. Implement App Router Patterns

ใช้ App Router patterns ของ Next.js

1. ใช้ `app/` directory สำหรับ routing
2. ใช้ `layout.tsx` สำหรับ shared layouts
3. ใช้ `page.tsx` สำหรับ route pages
4. ใช้ `loading.tsx` สำหรับ loading states
5. ใช้ `error.tsx` สำหรับ error boundaries
6. ใช้ `not-found.tsx` สำหรับ 404 pages
7. ใช้ `template.tsx` สำหรับ re-render layouts

### 4. Data Fetching

จัดการ data fetching อย่างมีประสิทธิภาพ

1. ใช้ `async/await` ใน Server Components
2. ใช้ `fetch` พร้อม `cache` options
3. ใช้ `revalidate` สำหรับ ISR
4. ใช้ `dynamic` สำหรับ dynamic rendering
5. ใช้ `generateStaticParams` สำหรับ SSG
6. ใช้ Route Handlers สำหรับ API routes

### 5. State Management

จัดการ state อย่างมีประสิทธิภาพ

1. ใช้ Server Components สำหรับ data fetching
2. ใช้ Client Components สำหรับ interactivity
3. ใช้ React Context สำหรับ global state
4. ใช้ Server Actions สำหรับ mutations
5. ใช้ `use` hook สำหรับ async resources
6. ใช้ state management libraries ถ้าจำเป็น

## File Structure

```
app/
├── (auth)/             # Auth routes group
├── (dashboard)/        # Dashboard routes group
├── api/                # API routes
├── layout.tsx          # Root layout
├── page.tsx            # Home page
├── loading.tsx         # Global loading
├── error.tsx           # Global error
└── not-found.tsx       # Global 404
components/             # Reusable components
├── ui/                # Base UI components
└── features/          # Feature-specific components
lib/                   # Utility functions
hooks/                 # Custom React hooks
types/                 # TypeScript types
public/                # Static assets
```

## File Patterns

| Folder | File | Purpose | Pattern |
|--------|------|---------|---------|
| `app` | `layout.tsx` | Shared layouts | `layout.tsx` |
| `app` | `page.tsx` | Route pages | `page.tsx` |
| `app` | `loading.tsx` | Loading states | `loading.tsx` |
| `app` | `error.tsx` | Error boundaries | `error.tsx` |
| `app` | `not-found.tsx` | 404 pages | `not-found.tsx` |
| `app/api` | `route.ts` | API routes | `route.ts` |
| `components/ui` | `*.tsx` | Base UI components | `PascalCase.tsx` |
| `components/features` | `*.tsx` | Feature components | `PascalCase.tsx` |
| `lib` | `*.ts` | Utility functions | `camelCase.ts` |
| `hooks` | `*.ts` | Custom hooks | `useCamelCase.ts` |
| `types` | `*.ts` | TypeScript types | `PascalCase.ts` |

## Rules

- ใช้ Server Components เป็น default
- ใช้ Client Components เฉพาะเมื่อจำเป็น (interactivity, hooks)
- ใช้ `'use client'` directive สำหรับ Client Components
- แยก data fetching ไป Server Components
- แยก interactivity ไป Client Components
- ใช้ `app/` directory สำหรับ routing
- ใช้ `layout.tsx` สำหรับ shared UI
- ใช้ `page.tsx` สำหรับ route pages
- ใช้ `loading.tsx` สำหรับ loading states
- ใช้ `error.tsx` สำหรับ error handling
- ใช้ dynamic routes ด้วย `[slug]`
- ใช้ `Image` component สำหรับ images
- ใช้ `Link` component สำหรับ navigation
- ใช้ `font` optimization สำหรับ fonts
- ใช้ caching strategies สำหรับ data
- ใช้ `dynamic` imports สำหรับ code splitting
- ใช้ ISR สำหรับ static content
- ใช้ Next.js types สำหรับ components
- ใช้ path aliases ใน `tsconfig.json`
- ตั้งค่า strict mode ใน `tsconfig.json`
- ใช้ type-safe data fetching
- ใช้ type-safe route parameters

## Expected Outcome

- โครงสร้างโปรเจกต์ Next.js ที่ถูกต้อง
- App Router patterns ที่เหมาะสม
- Server/Client Component separation ที่ดี
- Data fetching ที่มีประสิทธิภาพ
- TypeScript support ครบถ้วน

