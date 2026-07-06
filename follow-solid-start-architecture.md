---
title: Follow SolidStart Architecture
description: จัดโครงสร้างโปรเจกต์ SolidStart ตาม best practices และ file-system based routing
auto_execution_mode: 3
---


## Goal

จัดโครงสร้างโปรเจกต์ SolidStart ตาม best practices ที่รองรับ SSR, SSG, CSR และ Islands Architecture

## Execute

### 1. Setup Project Structure

สร้างโครงสร้างโปรเจกต์พื้นฐาน

1. สร้าง `public/` สำหรับ static assets
2. สร้าง `src/routes/` สำหรับ file-system routing
3. สร้าง `src/components/` สำหรับ reusable components
4. สร้าง `src/functions/` สำหรับ server functions
5. สร้าง `src/utils/` สำหรับ utility functions
6. สร้าง `src/types/` สำหรับ TypeScript types

### 2. Configure Entry Points

ตั้งค่า entry points สำหรับ client และ server

1. ตั้งค่า `src/entry-client.tsx` สำหรับ client-side hydration
2. ตั้งค่า `src/entry-server.tsx` สำหรับ server-side rendering
3. ตั้งค่า `src/app.tsx` สำหรับ HTML root layout
4. ตั้งค่า `app.config.ts` สำหรับ project configuration

### 3. Implement File-System Routing

ใช้ file-system based routing ของ SolidStart

1. สร้าง page routes ใน `src/routes/` ด้วย `.tsx` files
2. ใช้ `[param].tsx` สำหรับ dynamic routes
3. ใช้ `[[optional]].tsx` สำหรับ optional parameters
4. ใช้ `[...splat].tsx` สำหรับ catch-all routes
5. ใช้ `(group)/` สำหรับ route grouping
6. สร้าง API routes ด้วย export HTTP methods

### 4. Implement Server Functions

ใช้ server functions สำหรับ client-server communication

1. สร้าง server functions ใน `src/functions/` ด้วย `"use server"`
2. เรียก server functions จาก client components
3. ใช้ serialization อัตโนมัติสำหรับ arguments และ return values
4. จัดการ errors และ validation บน server

### 5. Configure Rendering Modes

ตั้งค่า rendering modes ตามความต้องการ

1. ตั้งค่า SSR mode ใน `app.config.ts` (default)
2. ตั้งค่า SPA mode ด้วย `ssr: false`
3. ตั้งค่า SSG mode ด้วย prerender options
4. ใช้ Islands Architecture ด้วย `clientOnly` function
5. ตั้งค่า streaming SSR สำหรับ performance

## File Structure

```
public/                 # Static assets
src/
├── routes/            # File-system routing
│   ├── index.tsx      # Home page
│   ├── about.tsx      # About page
│   ├── [param].tsx    # Dynamic route
│   └── api/           # API routes
├── components/        # Reusable components
│   ├── ui/           # Base UI components
│   └── features/     # Feature components
├── functions/         # Server functions
├── utils/            # Utility functions
├── types/            # TypeScript types
├── entry-client.tsx  # Client entry point
├── entry-server.tsx  # Server entry point
└── app.tsx           # HTML root layout
app.config.ts         # Project configuration
```

## File Patterns

| Folder | File | Purpose | Pattern |
|--------|------|---------|---------|
| `src/routes` | `*.tsx` | Page routes | `PascalCase.tsx` |
| `src/routes` | `[param].tsx` | Dynamic routes | `[param].tsx` |
| `src/routes/api` | `*.ts` | API routes | `camelCase.ts` |
| `src/components` | `*.tsx` | Reusable components | `PascalCase.tsx` |
| `src/functions` | `*.ts` | Server functions | `camelCase.ts` |
| `src/utils` | `*.ts` | Utility functions | `camelCase.ts` |
| `src/types` | `*.ts` | TypeScript types | `PascalCase.ts` |

## Rules

### 1. Routing System

ใช้ file-system based routing ของ SolidStart

- ใช้ `src/routes/` สำหรับ page routes
- ใช้ `[param].tsx` สำหรับ dynamic segments
- ใช้ `[[optional]].tsx` สำหรับ optional parameters
- ใช้ `[...splat].tsx` สำหรับ catch-all routes
- ใช้ `(group)/` สำหรับ route grouping
- ใช้ export HTTP methods สำหรับ API routes
- ใช้ `FileRoutes` component ใน `app.tsx`

### 2. Entry Points

ตั้งค่า entry points อย่างถูกต้อง

- ใช้ `entry-client.tsx` สำหรับ client hydration
- ใช้ `entry-server.tsx` สำหรับ server rendering
- ใช้ `app.tsx` สำหรับ HTML root layout
- ใช้ `Html`, `Head`, `Body`, `Routes` components
- ไม่แก้ไข entry files ในกรณีส่วนใหญ่

### 3. Server Functions

ใช้ server functions สำหรับ server-side logic

- ใช้ `"use server"` directive สำหรับ server functions
- วาง server functions ใน `src/functions/`
- เรียก server functions จาก client components
- ใช้ serialization อัตโนมัติ
- จัดการ errors บน server

### 4. Rendering Modes

เลือก rendering modes ที่เหมาะสม

- ใช้ SSR mode สำหรับ SEO และ performance
- ใช้ SPA mode สำหรับ interactive applications
- ใช้ SSG mode สำหรับ static content
- ใช้ Islands Architecture สำหรับ selective hydration
- ตั้งค่าใน `app.config.ts`

### 5. Component Organization

จัดระเบียบ components อย่างเหมาะสม

- แยก UI components ใน `src/components/ui/`
- แยก feature components ใน `src/components/features/`
- ใช้ `props` interface สำหรับ type safety
- ใช้ `children` prop สำหรับ composition
- ใช้ `splitProps` สำหรับ prop destructuring

### 6. Configuration

ตั้งค่า configuration อย่างถูกต้อง

- ใช้ `app.config.ts` สำหรับ project config
- ใช้ `defineConfig` helper สำหรับ type safety
- ตั้งค่า rendering modes ใน config
- ตั้งค่า deployment targets
- ตั้งค่า middleware ใน config

## Expected Outcome

- โครงสร้างโปรเจกต์ SolidStart ที่ถูกต้อง
- File-system based routing ที่เหมาะสม
- Server functions ที่ทำงานได้อย่างมีประสิทธิภาพ
- Rendering modes ที่เหมาะสมกับ use case
- Component organization ที่ดี
- TypeScript support ครบถ้วน
