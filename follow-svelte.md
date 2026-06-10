---
title: Svelte with Vite
description: ตั้งค่า Vite + Svelte 5 + TypeScript (client-side only)
auto_execution_mode: 3
---

## Goal

ตั้งค่าและพัฒนา Svelte 5 project ด้วย Vite และ TypeScript (client-side only)

## Scope

ใช้สำหรับ Svelte 5 projects ที่ใช้ Vite เป็น build tool (client-side only)
หมายเหตุ: ถ้าต้องการ fullstack meta-framework ให้ใช้ `/follow-svelte-kit` แทน

## Execute

### 1. Setup Project

1. สร้าง `vite.config.ts` ด้วย `@sveltejs/vite-plugin-svelte`
2. สร้าง `svelte.config.js` ด้วย `vitePreprocess` และ `runes: true`
3. ตั้งค่า `tsconfig.json` ด้วย `moduleResolution: bundler`
4. เพิ่ม scripts ใน `package.json` (dev, build, preview)
5. ตั้งค่า server port และ build options

### 2. Configure TypeScript

1. ตั้งค่า `target: ES2020` และ `module: ESNext`
2. ใช้ `moduleResolution: bundler`
3. ตั้งค่า `baseUrl` และ `paths` สำหรับ import aliases
4. เปิดใช้ `strict: true`

### 3. Setup Styling

1. ทำ `/unocss` สำหรับ styling
2. ใช้ UnoCSS ทั้งหมดถ้าเป็นไปได้
3. หลีกเลี่ยง style scoped

### 4. Development

1. ใช้ `.svelte` พร้อม `lang="ts"`
2. กำหนด types สำหรับ props
3. ทำ `/refactor` เพื่อปรับปรุงโค้ด

## Rules

### 1. Configuration

ตั้งค่า project ตามมาตรฐาน Svelte 5:

- ใช้ `@sveltejs/vite-plugin-svelte` สำหรับ Svelte transformation
- ใช้ `vitePreprocess` สำหรับ TypeScript preprocessing
- ตั้งค่า `runes: true` สำหรับ Svelte 5 Runes
- ตั้งค่า `moduleResolution: bundler` ใน TypeScript

### 2. Component Development

พัฒนา components ตาม best practices:

- ใช้ `.svelte` พร้อม `lang="ts"` สำหรับทุก components
- กำหนด types สำหรับ props อย่างชัดเจน
- ใช้ UnoCSS สำหรับ styling
- หลีกเลี่ยง style scoped

### 3. Code Quality

รักษาคุณภาพโค้ด:

- ทำ `/refactor` เสมอเมื่อพัฒนา
- ปรับปรุงโค้ดให้ถูกต้องตาม framework
- ใช้ TypeScript strict mode
- ตั้งค่า path aliases อย่างถูกต้อง

## Expected Outcome

- Svelte 5 project ตั้งค่าครบถ้วนด้วย Vite
- TypeScript configuration ถูกต้อง
- UnoCSS integration สำเร็จ
- Component development ตาม best practices
