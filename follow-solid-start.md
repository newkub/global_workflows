---
title: Follow Solid Start
description: ตั้งค่าและพัฒนา SolidStart project ด้วย Vinxi, Vite และ Nitro
auto_execution_mode: 3
---

## Goal

ตั้งค่าและพัฒนา SolidStart application ด้วย meta-framework ที่รองรับ CSR, SSR, และ SSG

## Scope

ใช้สำหรับ SolidStart projects ที่ใช้ Vinxi เป็น framework bundler

## Execute

### 1. Initialize Project

สร้าง SolidStart project ใหม่ด้วย starter

1. รัน `bun create solid` หรือ `npm init solid` หรือ `pnpm create solid` หรือ `yarn create solid`
2. เลือก template (basic, bare, with-solidbase, with-auth, with-drizzle, with-mdx, with-prisma, with-solid-styled, with-tailwindcss)
3. เลือก options (SSR, TypeScript)
4. Install dependencies ด้วย `bun i`

### 2. Configure TypeScript

ตั้งค่า TypeScript สำหรับ SolidStart

1. ตั้งค่า `jsx: preserve` และ `jsxImportSource: solid-js`
2. ตั้งค่า `target: ESNext` และ `module: ESNext`
3. ใช้ `moduleResolution: bundler`
4. ตั้งค่า `baseUrl` และ `paths` สำหรับ import aliases
5. เปิดใช้ `strict: true`

### 3. Setup Styling

ตั้งค่า styling สำหรับ project

1. ทำ `/unocss` สำหรับ UnoCSS integration
2. ใช้ UnoCSS ทั้งหมดถ้าเป็นไปได้
3. หลีกเลี่ยง CSS modules

### 4. Development

พัฒนา application ตาม best practices

1. รัน `bun run dev` สำหรับ development server
2. ใช้ `.tsx` สำหรับ components
3. กำหนด types สำหรับ props
4. ทำ `/refactor` เพื่อปรับปรุงโค้ด

### 5. Build And Deploy

Build และ deploy สำหรับ production

1. รัน `bun run build` สำหรับ production build
2. ใช้ Nitro สำหรับ production server
3. ตั้งค่า deployment target (Vercel, Cloudflare, Node.js, etc.)

## Rules

### 1. Project Initialization

ตั้งค่า project ตามมาตรฐาน SolidStart:

- ใช้ `bun create solid` หรือ package manager ที่ต้องการ
- เลือก template ที่เหมาะสมกับ use case
- เปิดใช้ SSR ถ้าต้องการ SEO และ performance
- เปิดใช้ TypeScript สำหรับ type safety

### 2. TypeScript Configuration

ตั้งค่า TypeScript อย่างถูกต้อง:

- ตั้งค่า `jsx: preserve` และ `jsxImportSource: solid-js`
- ใช้ `moduleResolution: bundler` สำหรับ modern resolution
- ตั้งค่า path aliases สำหรับ clean imports
- เปิดใช้ strict mode สำหรับ safety

### 3. Component Development

พัฒนา components ตาม best practices:

- ใช้ `.tsx` สำหรับทุก components
- กำหนด types สำหรับ props อย่างชัดเจน
- เขียน isomorphic code (ใช้ได้ทั้ง client และ server)
- ใช้ UnoCSS สำหรับ styling

### 4. Code Quality

รักษาคุณภาพโค้ด:

- ทำ `/refactor` เสมอเมื่อพัฒนา
- ปรับปรุงโค้ดให้ถูกต้องตาม framework
- ใช้ TypeScript strict mode
- ตั้งค่า path aliases อย่างถูกต้อง

### 5. Related Workflows

เชื่อมโยงกับ workflows ที่เกี่ยวข้อง:

- ทำ `/unocss` สำหรับ styling
- ทำ `/follow-solidjs-architecture` สำหรับ architecture
- ทำ `/follow-vite` สำหรับ Vite configuration

## Expected Outcome

- SolidStart project ตั้งค่าครบถ้วนด้วย Vinxi
- TypeScript configuration ถูกต้อง
- UnoCSS integration สำเร็จ
- Component development ตาม best practices
- Build และ deployment พร้อมใช้งาน
