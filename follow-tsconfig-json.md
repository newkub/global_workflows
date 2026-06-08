---
title: Setup TSConfig
description: Setup TypeScript configuration with tsconfig.json for single project and monorepo
auto_execution_mode: 3
---

## Goal

ตั้งค่า TypeScript configuration ด้วย tsconfig.json สำหรับ type safety สูงสุด รองรับทั้ง single project และ monorepo

## Execute

### 1. Create Root Config

1. สร้าง root tsconfig.json เสมอเป็นไฟล์หลัก
2. ใช้ bun-types เสมอใน types array
3. กำหนด compilerOptions พื้นฐาน
   - target: ESNext
   - module: ESNext
   - moduleResolution: bundler
   - lib: ESNext, DOM, DOM.Iterable
4. เปิด strict mode และ type safety options
   - strict: true
   - isolatedModules: true
   - skipLibCheck: true
5. ตั้งค่า baseUrl และ paths สำหรับ monorepo (ถ้าจำเป็น)
   - baseUrl: .
   - paths: #*

### 2. Setup Single Project

1. สร้าง tsconfig.json ใน project root
2. ตั้งค่า include และ exclude สำหรับ single project
3. กำหนด outDir และ rootDir ถ้าจำเป็น
4. ใช้ baseUrl และ paths สำหรับ path aliases

### 3. Setup Monorepo Structure

1. ติดตั้ง @wrikka/config package
   ```bash
   bun add -d @wrikka/config
   ```
2. สร้าง root tsconfig.json สำหรับ monorepo ที่ extends จาก @wrikka/config
3. สร้าง package tsconfig.json ที่ extends @wrikka/config/tsconfig.base.json
4. ใช้ composite: true สำหรับ packages
5. ตั้งค่า references ใน root config

### 4. Setup Nuxt Project

1. สำหรับ Nuxt projects ให้กำหนด tsconfig.json ที่ references ไปยัง .nuxt configs
2. ไม่ต้องมี compilerOptions เพิ่มเติม
3. Nuxt จะ generate tsconfig.*.json ในโฟลเดอร์ .nuxt อัตโนมัติ

## Rules

- ใช้ root tsconfig.json เป็นไฟล์หลักเสมอ
- ใช้ bun-types เสมอใน types array
- เปิด strict mode ทั้งหมด
- รองรับทั้ง single project และ monorepo
- ใช้ composite: true สำหรับ monorepo packages
- ใช้ extends @wrikka/config/tsconfig.base.json สำหรับ monorepo
- ไม่ต้องมี tsconfig.options.json ใน monorepo

### 1. Single Project Config

```json [tsconfig.json]
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "isolatedModules": true,
    "skipLibCheck": true,
    "baseUrl": ".",
    "paths": {
      "#/*": ["./src/*"]
    }
  }
}
```

### 2. Monorepo Root Config

```json [tsconfig.json]
{
  "extends": "@wrikka/config/tsconfig.base.json",
  "files": [],
  "include": [
    "**/*"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "build",
    ".nuxt",
    ".output",
    ".turbo",
    "**/*.d.ts",
    "**/*.config.js",
    "**/*.config.ts"
  ],
  "references": [
    { "path": "./apps/web" },
    { "path": "./packages/ui" }
  ]
}
```

### 3. Monorepo Package Config

```json [packages/*/tsconfig.json]
{
  "extends": "@wrikka/config/tsconfig.base.json",
  "compilerOptions": {
    "composite": true,
    "outDir": "./dist",
    "rootDir": "./src"
  }
}
```

### 4. Nuxt Project Config

```json [nuxt.config.ts หรือ tsconfig.json สำหรับ Nuxt]
{
  "files": [],
  "references": [
    {
      "path": "./.nuxt/tsconfig.app.json"
    },
    {
      "path": "./.nuxt/tsconfig.server.json"
    },
    {
      "path": "./.nuxt/tsconfig.shared.json"
    },
    {
      "path": "./.nuxt/tsconfig.node.json"
    }
  ]
}
```

## Expected Outcome

- Root tsconfig.json เป็นไฟล์หลักเสมอ
- ใช้ bun-types ในทุก configs
- รองรับทั้ง single project และ monorepo
- Monorepo structure ชัดเจนด้วย composite projects
- Type safety สูงสุดด้วย strict mode
- Build performance ดีขึ้นด้วย incremental compilation
