---
title: Next.js Best Practices
description: แนวทางการจัดโครงสร้างและพัฒนา Next.js applications
auto_execution_mode: 3
related_workflows:
  - /follow-typescript
  - /follow-react
  - /follow-vite
  - /follow-unocss
---

## Goal

กำหนดแนวทางการพัฒนา Next.js applications ให้มีประสิทธิภาพสูงสุด

## Scope

จัดโครงสร้างและพัฒนา Next.js applications ด้วย App Router และ TypeScript

## Execute

### 1. Project Structure

1. ใช้ App Router ด้วย `app/` directory
2. สร้าง `app/layout.tsx` สำหรับ root layout
3. สร้าง `app/page.tsx` สำหรับ home page
4. สร้าง `app/globals.css` สำหรับ global styles
5. สร้าง `app/error.tsx`, `loading.tsx`, `not-found.tsx` สำหรับ error handling
6. ใช้ `app/api/` สำหรับ API routes

### 2. Directory Organization

1. ใช้ `components/` สำหรับ React components
2. ใช้ `hooks/` สำหรับ custom React hooks
3. ใช้ `lib/` สำหรับ utilities และ helpers
4. ใช้ `types/` สำหรับ TypeScript types
5. ใช้ `utils/` สำหรับ utility functions
6. ใช้ `public/` สำหรับ static assets

### 3. Configuration

1. ตั้งค่า `next.config.js` สำหรับ Next.js config
2. ตั้งค่า `tsconfig.json` ด้วย strict mode
3. ตั้งค่า `tailwind.config.js` สำหรับ Tailwind CSS
4. ตั้งค่า `package.json` scripts (dev, build, start, lint)
5. สร้าง `middleware.ts` สำหรับ middleware logic

### 4. Development

1. รัน dev server ด้วย `bun run dev`
2. ใช้ Server Components สำหรับ default
3. ใช้ Client Components เฉพาะเมื่อจำเป็นด้วย `use client`
4. ใช้ Server Actions สำหรับ mutations
5. ใช้ Route Handlers สำหรับ API endpoints

### 5. Performance

1. ใช้ Image component จาก `next/image`
2. ใช้ Link component จาก `next/link`
3. ใช้ dynamic imports สำหรับ code splitting
4. ใช้ `generateStaticParams` สำหรับ static generation
5. ใช้ revalidate สำหรับ ISR (Incremental Static Regeneration)

### 6. Best Practices

1. ใช้ TypeScript strict mode
2. ใช้ ESLint และ Prettier
3. ใช้ environment variables ด้วย `.env.local`
4. ใช้ App Router แทน Pages Router
5. ใช้ Server Components โดย default

## Rules

### 1. Directory Structure

โครงสร้างที่ถูกต้อง:

- ใช้ `app/` directory สำหรับ App Router
- ใช้ `components/` สำหรับ shared components
- ใช้ `hooks/` สำหรับ custom hooks
- ใช้ `lib/` สำหรับ utilities
- ใช้ `types/` สำหรับ TypeScript types
- ใช้ `public/` สำหรับ static assets

### 2. Component Usage

ใช้ components อย่างถูกต้อง:

- ใช้ Server Components โดย default
- ใช้ `use client` เฉพาะเมื่อจำเป็น
- ใช้ `next/image` สำหรับ images
- ใช้ `next/link` สำหรับ navigation
- ใช้ dynamic imports สำหรับ heavy components

### 3. Data Fetching

ใช้ data fetching อย่างถูกต้อง:

- ใช้ Server Components สำหรับ data fetching
- ใช้ Server Actions สำหรับ mutations
- ใช้ Route Handlers สำหรับ API endpoints
- ใช้ `generateStaticParams` สำหรับ static generation
- ใช้ revalidate สำหรับ ISR

### 4. Configuration

ตั้งค่า configuration อย่างถูกต้อง:

- ตั้งค่า `next.config.js` อย่างเหมาะสม
- ใช้ TypeScript strict mode
- ตั้งค่า Tailwind CSS อย่างถูกต้อง
- ใช้ environment variables ด้วย `.env.local`
- สร้าง `middleware.ts` สำหรับ middleware logic

## Expected Outcome

- Next.js project ที่มีโครงสร้างถูกต้อง
- App Router ที่ใช้งานได้
- TypeScript strict mode
- Performance ที่ดีขึ้น
- Configuration ที่เหมาะสม
