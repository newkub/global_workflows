---
title: Follow Vite Svelte
description: ตั้งค่า Vite + Svelte 5 + TypeScript พร้อม Runes
auto_execution_mode: 3
---

## 1. Setup

### 1.1. Vite Config

`vite.config.ts`
```typescript
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
  server: { port: 3000, open: true },
  build: { outDir: 'dist', sourcemap: true }
})
```

### 1.2. Svelte Config

`svelte.config.js`
```javascript
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default {
  preprocess: vitePreprocess(),
  compilerOptions: { runes: true }
}
```

### 1.3. TypeScript Config

`tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "baseUrl": ".",
    "paths": { "@/*": ["./src/*"] }
  }
}
```

### 1.4. Package Scripts

`package.json`
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

## 2. Svelte Components Development (ใช้เมื่อมีไฟล์ .svelte)

2.1. ทำตาม workflow ที่เกี่ยวข้อง

- ทำ /follow-unocss

2.2. ใช้ TypeScript

- ใช้ .svelte พร้อม lang="ts"
- กำหนด types สำหรับ props

2.3. ใช้ UnoCSS

- ถ้าเป็นไปได้ให้ใช้ unocss ทั้งหมด
- หลีกเลี่ยงการใช้ style scoped

## 3. Code Refactoring (ใช้เสมอ)

3.1. ทำ /refactor

- refactor โค้ดให้ถูกต้องตาม framework
