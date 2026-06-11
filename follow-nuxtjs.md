---
title: Nuxt Best Practices
description: สร้างหรือปรับปรุง Nuxt 3/4 project ด้วย Universal Rendering และ Nitro
auto_execution_mode: 3
related_workflows:
  - /follow-vue
  - /follow-typescript
  - /follow-vite
  - /follow-unocss
---

## Goal

กำหนดแนวทางการพัฒนา Nuxt 3/4 applications ให้มีประสิทธิภาพสูงสุด

## Scope

สร้างหรือปรับปรุง Nuxt 3/4 project ด้วย Universal Rendering และ Nitro

## Execute

### 1. Setup

1. ระบุ Project Location ใน monorepo เช่น `apps/web/`
2. เลือก Nuxt Version ระหว่าง 3.x หรือ 4.x (default: 4.x)
3. กำหนด Rendering Mode: SSR, SSG, CSR, หรือ Hybrid
4. ตัดสินใจใช้ Database หรือไม่ (Drizzle ORM)
5. เลือก UI Framework: UnoCSS, Tailwind, หรืออื่นๆ
6. กำหนด Architecture: ใช้ Layers และ Modules หรือไม่

### 2. Directory Structure

1. ใช้ `app/` directory สำหรับ Nuxt 4
2. สร้าง `layers/` สำหรับ feature-based architecture
3. จัดกลุ่ม components, composables ตาม feature ในแต่ละ Layer
4. ใช้ auto-imports สำหรับ components และ composables
5. แยก business logic เป็น services และ repositories ใน `server/`

### 3. Configuration

1. ตั้งค่า `nuxt.config.ts` (extends, modules, nitro, typescript)
2. ตั้งค่า `package.json` scripts (build, dev, generate, lint, format, test)
3. ตั้งค่า `tsconfig.json` ด้วย strict mode
4. สร้าง barrel exports สำหรับทุก folder
5. กำหนด data flow: Pages → Components → Composables → Stores → API → Services → Repositories → DB

### 4. Code Standards

1. Vue components: ใช้ `script setup lang="ts"`, script อยู่บน template
2. Composables: ชื่อขึ้นต้นด้วย `use`, อยู่ใน `composables/` หรือ `layers/[feature]/composables/`
3. Server API: ใช้ `defineEventHandler` หรือ `defineNitroPlugin`
4. Types: ไม่ใช้ `any`, กำหนด types ชัดเจนใน `shared/types/`
5. Import: Auto-import สำหรับ Nuxt built-ins, barrel export สำหรับ shared
6. Icons: ใช้ `@nuxt/icon` ด้วย preset `mdi` เท่านั้น ไม่ใช้ SVG โดยตรง
7. Components: Import จาก `components/ui/` เท่านั้น สำหรับ shared UI components
8. Barrel Exports: ทุก `index.ts` แค่ re-export เท่านั้น ไม่มี logic
9. Deprecated: ลบ `@deprecated` ทั้งหมด ไม่ให้เหลือใน codebase
10. SEO: ใช้ `useHead` ในทุก page component สำหรับ meta tags

### 5. Performance

1. ใช้ `Lazy` prefix สำหรับ lazy loading components
2. ใช้ `hydrate-on-visible` สำหรับ lazy hydration
3. ใช้ route rules สำหรับ hybrid rendering
4. ใช้ `<NuxtLink>` แทน `<a>` tag ทั้งหมด
5. ใช้ `useFetch` และ `useAsyncData` พร้อม key parameter
6. ใช้ `useStorage` สำหรับ key-value storage

### 6. Plugins Best Practices

1. หลีกเลี่ยง plugins ที่มีการคำนวณหนัก
2. ใช้ composables แทน plugins เมื่อเป็นไปได้
3. ใช้ `parallel: true` สำหรับ async plugins
4. ใช้ Composition API เมื่อเป็นไปได้

### 7. Assets Management

1. ใช้ `~/assets` สำหรับ processed files
2. ใช้ `~/public` สำหรับ static files
3. Build-time validation สำหรับ `/assets`
4. ใช้ `useHead` สำหรับ SEO meta tags

### 8. Error Handling

1. ใช้ `NuxtErrorBoundary` สำหรับ handle errors
2. สร้าง error pages ใน `error.vue`
3. ใช้ try-catch สำหรับ async operations
4. ใช้ `onErrorCaptured` สำหรับ error tracking

### 9. Verification

1. รัน `nuxt typecheck` ตรวจสอบ TypeScript errors
2. รัน lint และ format ตรวจสอบ code quality
3. รัน `nuxt build` และ `nuxt generate` ยืนยัน build ผ่าน
4. ทดสอบ dev server รันได้โดยไม่มี errors
5. ตรวจสอบ HMR และ auto-imports ทำงานถูกต้อง

## Rules

### 1. Directory Structure

โครงสร้างที่ถูกต้อง:

- ใช้ `app/` directory สำหรับ Nuxt 4
- สร้าง `layers/` สำหรับ feature-based architecture
- Vue components ใช้ `script setup lang="ts"` เท่านั้น
- Composables ต้องมี prefix `use`
- ใช้ barrel exports สำหรับทุก folder
- ใช้ auto-imports สำหรับ Nuxt built-ins

### 2. Code Standards

มาตรฐานการเขียน code:

- ไม่ใช้ `any` โดยเด็ดขาด
- ไม่ใช้ relative path ใน cross-layer imports
- ใช้ default import alias (`~/`, `#server`, `#shared`)
- ใช้ `<NuxtLink>` แทน `<a>` tag ทั้งหมด
- ใช้ `@nuxt/icon` ด้วย preset `mdi` สำหรับ icons ทั้งหมด
- Components ที่ใช้ซ้ำต้อง import จาก `components/ui/`
- ทุก `index.ts` แค่ re-export ไม่มี logic
- ลบ `@deprecated` ทั้งหมดจาก codebase
- ใช้ `useHead` ในทุก page component สำหรับ SEO meta tags

### 3. Performance Optimization

ตั้งค่า performance:

- ใช้ `Lazy` prefix สำหรับ lazy loading
- หลีกเลี่ยง costly plugins
- ใช้ `~/assets` สำหรับ processed files
- ใช้ `~/public` สำหรับ static files
- ใช้ route rules สำหรับ hybrid rendering

### 4. Error Handling

จัดการ errors:

- ใช้ `NuxtErrorBoundary` สำหรับ handle errors
- สร้าง error pages ใน `error.vue`
- ใช้ try-catch สำหรับ async operations
- ใช้ `onErrorCaptured` สำหรับ error tracking

## Expected Outcome

- Nuxt 3/4 project ที่มีโครงสร้างถูกต้อง
- Layers และ Modules ที่จัดระเบียบดี
- Code ที่มี type safety ด้วย TypeScript
- Performance ที่ดีขึ้น
- Build และ test ที่ผ่านทั้งหมด
- Error handling ที่ดี
- Assets management ที่ถูกต้อง
