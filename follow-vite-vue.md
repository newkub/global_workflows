---
title: Follow Vite Vue
description: ตั้งค่า Vite + Vue 3 + TypeScript พร้อม Auto Import
auto_execution_mode: 3
---

## 1. Setup

### 1.1. Vite Config

`vite.config.ts`
```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    vue(),
    tsconfigPaths(),
    AutoImport({ imports: ['vue', '@vueuse/core'] })
  ],
  server: { port: 3000, open: true }
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
    "strict": true,
    "types": ["vite/client", "vue"],
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
import vue from 'eslint-plugin-vue'

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  vue.configs['flat/essential']
]
```

### 1.4. Package Scripts

`package.json`
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint ."
  }
}
```

## 2. Package Configuration (ใช้เสมอ)

1.1. ตั้งค่า scripts ใน package.json

```json [package.json]
{
  "scripts": {
    "dev": "vite dev",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

## 2. Vite Configuration (ใช้เสมอ)

2.1. ตั้งค่า vite.config.ts

```ts [vite.config.ts]
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';
import Unocss from '@unocss/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Replace from 'unplugin-replace/vite';
import Unused from 'unplugin-unused/vite';
import TurboConsole from 'unplugin-turbo-console/vite';
import Terminal from 'vite-plugin-terminal';
import { analyzer } from 'vite-bundle-analyzer';
import Inspect from 'vite-plugin-inspect';
import AST from 'unplugin-ast/vite';
import Macros from 'unplugin-macros/vite';
import UnpluginIsolatedDecl from 'unplugin-isolated-decl/vite';
import Icons from 'unplugin-icons/vite';
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    nitro(),
    Unocss(), // @ai /follow-unocss
    AutoImport({
      imports: ['vue'],
      dts: true
    }),
    AST(),
    Icons({
      autoInstall: true,
    }),
    UnpluginIsolatedDecl(),
    Macros(),
    Replace(),
    TurboConsole({}),
    Terminal(),
    analyzer(),
    Inspect(),
    Unused({
      include: [/\.([cm]?[jt]sx?|vue)$/],
      exclude: [/node_modules/],
      level: 'warning',
      ignore: {
        peerDependencies: ['vue'],
      },
      depKinds: ['dependencies', 'peerDependencies'],
    }),
    tsconfigPaths(),
    checker({
      overlay: {
        initialIsOpen: false,
      },
      typescript: true,
      vueTsc: true,
      oxlint: true,
    })
  ]
});
```

## 3. TypeScript Configuration (ใช้เสมอ)

3.1. ตั้งค่า tsconfig.json

```json [tsconfig.json]
{
  "compilerOptions": {
    "types": ["vite/client", "vue"]
  }
}
```

## 4. Vue Components (ใช้เมื่อมีไฟล์ .vue)

4.1. ทำตาม workflow ที่เกี่ยวข้อง

- ทำ /follow-vueuse
- ทำ /follow-unocss
- ทำ /follow-pinia ถ้าควรใช้

4.2. ใช้ Vue Macros

- เปิดใช้งาน Vue Macros ใน config
- ใช้ macros เช่น defineProps, defineEmits

4.3. ใช้ TypeScript

- ใช้ script setup lang="ts"
- กำหนด types สำหรับ props และ emits

4.4. จัดลำดับส่วนประกอบ

- ให้ script อยู่ด้านบน template
- ให้ style อยู่ด้านล่างสุด

4.5. ใช้ UnoCSS

- ถ้าเป็นไปได้ให้ใช้ unocss ทั้งหมด
- หลีกเลี่ยงการใช้ style scoped

## 5. Code Refactoring (ใช้เสมอ)

5.1. ทำ /refactor

- refactor โค้ดให้ถูกต้องตาม framework
