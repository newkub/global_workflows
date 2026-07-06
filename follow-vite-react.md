---
title: Follow Vite React
description: ตั้งค่า Vite + React + TypeScript พร้อม ESLint
auto_execution_mode: 3
---


## 1. Setup

### 1.1. Vite Config

`vite.config.ts`
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
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
    "jsx": "react-jsx",
    "strict": true,
    "baseUrl": ".",
    "paths": { "@/*": ["./src/*"] }
  }
}
```

### 1.3. ESLint Config

`eslint.config.js`
```javascript
import js from '@eslint/js'
import ts from 'typescript-eslint'
import reactHooks from 'eslint-plugin-react-hooks'

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    plugins: { 'react-hooks': reactHooks },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn'
    }
  }
]
```

### 1.4. Package Scripts

`package.json`
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint ."
  }
}
```

## 2. React Components Development (ใช้เมื่อมีไฟล์ .tsx)

2.1. ทำตาม workflow ที่เกี่ยวข้อง

- ทำ /components
- ทำ /unocss

2.2. ใช้ TypeScript

- ใช้ .tsx สำหรับ components
- กำหนด types สำหรับ props

2.3. ใช้ UnoCSS

- ถ้าเป็นไปได้ให้ใช้ unocss ทั้งหมด
- หลีกเลี่ยงการใช้ CSS modules

## 3. Code Refactoring (ใช้เสมอ)

3.1. ทำ /refactor-workspace

- refactor โค้ดให้ถูกต้องตาม framework

