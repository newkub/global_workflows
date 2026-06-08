---
title: Follow Vite Solid
description: ตั้งค่า Vite + Solid.js + TypeScript
auto_execution_mode: 3
---

## 1. Setup

### 1.1. Vite Config

`vite.config.ts`
```typescript
import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [solid(), tsconfigPaths()],
  server: { port: 3000, open: true },
  build: { outDir: 'dist', sourcemap: true }
})
```

### 1.2. TypeScript Config

`tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "preserve",
    "jsxImportSource": "solid-js",
    "strict": true,
    "baseUrl": ".",
    "paths": { "@/*": ["./src/*"] }
  }
}
```

### 1.3. Package Scripts

`package.json`
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  }
}
```

## 2. Solid Components Development (ใช้เมื่อมีไฟล์ .tsx)

2.1. ทำตาม workflow ที่เกี่ยวข้อง

- ทำ /follow-unocss

2.2. ใช้ TypeScript

- ใช้ .tsx สำหรับ components
- กำหนด types สำหรับ props

2.3. ใช้ UnoCSS

- ถ้าเป็นไปได้ให้ใช้ unocss ทั้งหมด
- หลีกเลี่ยงการใช้ CSS modules

## 3. Code Refactoring (ใช้เสมอ)

3.1. ทำ /refactor

- refactor โค้ดให้ถูกต้องตาม framework
