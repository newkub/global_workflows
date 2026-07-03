---
title: Follow Solid Start
description: ตั้งค่าและพัฒนา SolidStart project ด้วย official Solid Start, Vinxi, และ Bun
auto_execution_mode: 3
---

## Goal

ตั้งค่าและพัฒนา SolidStart application ด้วย official Solid Start meta-framework ที่ใช้ Vinxi และรองรับ SSR, Streaming SSR, CSR, SSG, และ Islands Architecture

## Scope

ใช้สำหรับ SolidStart projects ที่ใช้ official Solid Start จาก solidjs.com และ Vinxi meta-framework

## Execute

### 1. Setup Project

ตั้งค่า SolidStart project ตามมาตรฐาน

1. ตรวจสอบ Node.js version 22+ ก่อน
2. ติดตั้ง dependencies: `bun add solid-js @solidjs/router @solidjs/start`
3. ติดตั้ง dev dependencies: `bun add -d vite vite-plugin-solid typescript`
4. ถ้าใช้ monorepo กับ workspaces, เพิ่ม `@solidjs/start` ใน `nohoist` property
5. สร้าง `vite.config.ts` พร้อม `vite-plugin-solid` และ UnoCSS plugin

### 2. Configure Vite

ตั้งค่า Vite สำหรับ Solid.js

1. สร้าง `vite.config.ts` พร้อม `vite-plugin-solid`
2. เพิ่ม UnoCSS plugin: `import UnoCSS from "unocss/vite"`
3. ตั้งค่า plugins: `solid()`, `UnoCSS()`
4. ตั้งค่า resolve aliases สำหรับ clean imports
5. ตั้งค่า server options สำหรับ file system access

### 3. Configure TypeScript

ตั้งค่า TypeScript สำหรับ SolidStart

1. ตั้งค่า `jsx: preserve` และ `jsxImportSource: solid-js`
2. ตั้งค่า `target: ESNext` และ `module: ESNext`
3. ใช้ `moduleResolution: bundler`
4. ตั้งค่า `baseUrl` และ `paths` สำหรับ import aliases
5. เปิดใช้ `strict: true`
6. ใช้ type definitions จาก `env.d.ts` ของ `@solidjs/start` สำหรับ environment variables

### 4. Setup UnoCSS

ตั้งค่า UnoCSS สำหรับ styling

1. ติดตั้ง UnoCSS: `bun add -d unocss`
2. สร้าง `uno.config.ts` พร้อม `presetWind4` และ `presetIcons`
3. ตั้งค่า theme, safelist, และ shortcuts
4. เพิ่ม UnoCSS plugin ใน `vite.config.ts`
5. ทำ `/unocss` สำหรับ UnoCSS best practices

### 5. Development

พัฒนา application ตาม best practices

1. รัน `bun run dev` สำหรับ development server (ใช้ Vite)
2. ทำ `/follow-solidjs` สำหรับ Solid.js component development
3. ใช้ file-system based routing ใน `routes` directory
4. ใช้ Server Functions ด้วย `use server` directive สำหรับ server-side logic
5. สร้าง API Routes ด้วย export functions (`$GET`, `$POST`, `$PUT`, `$DELETE`)
6. ใช้ Middleware System สำหรับ request interception
7. ตั้งค่า environment variables ด้วย env plugin (`env:server`, `env:client`)
8. ทำ `/refactor-workspace` เพื่อปรับปรุงโค้ด

### 6. Build And Deploy

Build และ deploy สำหรับ production

1. รัน `bun run build` สำหรับ production build (ใช้ Vite)
2. ใช้ Vite build system
3. ตั้งค่า deployment target (Vercel, Cloudflare, Node.js, etc.)

## Rules

### 1. Project Setup

ตั้งค่า project ตามมาตรฐาน:

- ต้องใช้ Node.js 22+ หรือสูงกว่า
- ติดตั้ง dependencies: `solid-js`, `@solidjs/router`, `@solidjs/start`
- ติดตั้ง dev dependencies: `vite`, `vite-plugin-solid`, `typescript`
- สร้าง `vite.config.ts` พร้อม `vite-plugin-solid` และ UnoCSS plugin
- ถ้าใช้ monorepo กับ workspaces, เพิ่ม `@solidjs/start` ใน `nohoist`

### 2. Vite Configuration

ตั้งค่า Vite อย่างถูกต้อง:

- ใช้ `vite-plugin-solid` สำหรับ Solid.js compilation
- เพิ่ม UnoCSS plugin สำหรับ styling
- ตั้งค่า resolve aliases สำหรับ clean imports
- ตั้งค่า server options สำหรับ file system access

### 3. TypeScript Configuration

ตั้งค่า TypeScript อย่างถูกต้อง:

- ตั้งค่า `jsx: preserve` และ `jsxImportSource: solid-js`
- ใช้ `moduleResolution: bundler` สำหรับ modern resolution
- ตั้งค่า path aliases สำหรับ clean imports
- เปิดใช้ strict mode สำหรับ safety
- ใช้ type definitions จาก `env.d.ts` สำหรับ environment variables

### 4. UnoCSS Configuration

ตั้งค่า UnoCSS อย่างถูกต้อง:

- ใช้ `presetWind4` สำหรับ Tailwind-compatible utilities
- ใช้ `presetIcons` สำหรับ icon support
- ตั้งค่า theme, safelist, และ shortcuts
- เพิ่ม UnoCSS plugin ใน Vite config

### 5. Code Quality

รักษาคุณภาพโค้ด:

- ทำ `/refactor-workspace` เสมอเมื่อพัฒนา
- ปรับปรุงโค้ดให้ถูกต้องตาม framework
- ใช้ TypeScript strict mode
- ตั้งค่า path aliases อย่างถูกต้อง
- ตั้งค่า environment variables อย่างถูกต้อง

### 6. Related Workflows

เชื่อมโยงกับ workflows ที่เกี่ยวข้อง:

- ทำ `/follow-solidjs` สำหรับ Solid.js component development
- ทำ `/unocss` สำหรับ styling

## Expected Outcome

- SolidStart project ตั้งค่าครบถ้วนด้วย official Solid Start และ Vinxi
- TypeScript configuration ถูกต้อง
- UnoCSS integration สำเร็จ
- Component development ตาม best practices
- Server Functions ด้วย `use server` directive ทำงานได้
- API Routes ด้วย export functions ทำงานได้
- Environment variables ตั้งค่าอย่างถูกต้อง
- Rendering mode เลือกได้อย่างเหมาะสม
- Build และ deployment พร้อมใช้งาน
