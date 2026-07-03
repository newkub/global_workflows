---
title: Follow Svelte Kit
description: ตั้งค่าและพัฒนา SvelteKit project ด้วย Svelte 5 และ Vite
auto_execution_mode: 3
---

## Goal

ตั้งค่าและพัฒนา SvelteKit application ด้วย meta-framework ที่รองรับ SSR, SSG และ CSR

## Scope

ใช้สำหรับ SvelteKit projects ที่ใช้ Svelte 5 Runes และ Vite

## Execute

### 1. Initialize Project

สร้าง SvelteKit project ใหม่ด้วย `sv` CLI

1. รัน `npx sv create my-app` หรือ `bunx sv create my-app`
2. เลือก TypeScript และ tooling ที่ต้องการ
3. Install dependencies ด้วย `npm install` หรือ `bun install`
4. รัน `npm run dev` หรือ `bun run dev` สำหรับ development server

### 2. Configure TypeScript

ตั้งค่า TypeScript สำหรับ SvelteKit

1. ตั้งค่า `moduleResolution: bundler`
2. ตั้งค่า `baseUrl` และ `paths` สำหรับ import aliases
3. เปิดใช้ `strict: true`
4. ใช้ generated types จาก SvelteKit

### 3. Setup Styling

ตั้งค่า styling สำหรับ project

1. ทำ `/unocss` สำหรับ UnoCSS integration
2. ใช้ UnoCSS ทั้งหมดถ้าเป็นไปได้
3. หลีกเลี่ยง style scoped

### 4. Development

พัฒนา application ตาม best practices

1. ใช้ Svelte 5 Runes (`$state`, `$derived`, `$effect`, `$props`)
2. สร้าง pages ใน `src/routes` ด้วย file-based routing
3. ใช้ `.svelte` พร้อม `lang="ts"`
4. กำหนด types สำหรับ props ด้วย `$props`
5. ทำ `/refactor-workspace` เพื่อปรับปรุงโค้ด

### 5. Build And Deploy

Build และ deploy สำหรับ production

1. รัน `npm run build` หรือ `bun run build` สำหรับ production build
2. เลือก adapter สำหรับ deployment (Vercel, Netlify, Cloudflare, Node)
3. ตั้งค่า `svelte.config.js` สำหรับ adapter
4. Deploy ตาม platform ที่เลือก

## Rules

### 1. Project Initialization

ตั้งค่า project ตามมาตรฐาน SvelteKit:

- ใช้ `npx sv create` หรือ `bunx sv create` สำหรับ scaffold project
- เปิดใช้ TypeScript สำหรับ type safety
- เปิดใช้ SSR สำหรับ SEO และ performance
- ใช้ Vite เป็น build tool

### 2. Svelte 5 Runes

ใช้ Svelte 5 Runes สำหรับ reactivity:

- ใช้ `$state` สำหรับ local state
- ใช้ `$derived` สำหรับ derived state
- ใช้ `$effect` สำหรับ side effects
- ใช้ `$props` สำหรับ component props
- หลีกเลี่ยง legacy reactivity (`let`, `$:`)

### 3. Routing

ใช้ file-based routing ของ SvelteKit:

- สร้าง pages ใน `src/routes`
- ใช้ `+page.svelte` สำหรับ page components
- ใช้ `+page.js` หรือ `+page.server.js` สำหรับ load functions
- ใช้ `+layout.svelte` สำหรับ layouts
- ใช้ `+error.svelte` สำหรับ error pages

### 4. Data Loading

ใช้ load functions สำหรับ data loading:

- ใช้ `page.data` สำหรับ universal load functions
- ใช้ `page.server` สำหรับ server-only load functions
- ใช้ `layout.data` สำหรับ layout data
- ใช้ `url`, `route`, `params` สำหรับ URL data
- ใช้ `await` สำหรับ async operations

### 5. Code Quality

รักษาคุณภาพโค้ด:

- ทำ `/refactor-workspace` เสมอเมื่อพัฒนา
- ปรับปรุงโค้ดให้ถูกต้องตาม framework
- ใช้ TypeScript strict mode
- ตั้งค่า path aliases อย่างถูกต้อง

### 6. Related Workflows

เชื่อมโยงกับ workflows ที่เกี่ยวข้อง:

- ทำ `/unocss` สำหรับ styling
- ทำ `/follow-svelte-architecture` สำหรับ architecture
- ทำ `/follow-vite` สำหรับ Vite configuration

## Expected Outcome

- SvelteKit project ตั้งค่าครบถ้วนด้วย Svelte 5
- TypeScript configuration ถูกต้อง
- UnoCSS integration สำเร็จ
- Svelte 5 Runes ใช้งานถูกต้อง
- File-based routing ตั้งค่าครบถ้วน
- Build และ deployment พร้อมใช้งาน
