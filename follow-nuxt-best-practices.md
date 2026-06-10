---
title: Nuxt Best Practices
description: Best practices สำหรับการพัฒนา Nuxt.js applications ตาม official documentation
auto_execution_mode: 3
---

## Goal

บันทึก best practices สำหรับการพัฒนา Nuxt.js applications เพื่อให้ code quality, performance, และ maintainability สูงสุด

## Execute

### 1. Project Structure

1. ใช้ `app/` directory ตามมาตรฐาน Nuxt 4
2. สร้าง `layers/` สำหรับ feature-based architecture
3. สร้าง `server/` สำหรับ Nitro API routes และ business logic
4. สร้าง `shared/` สำหรับ types และ utilities ที่ใช้ร่วมกัน
5. ใช้ `public/` สำหรับ static assets
6. ใช้ `modules/` สำหรับ local modules

### 2. App Directory Structure

1. ใช้ `app.vue` เป็น root component สำหรับ global layout
2. สร้าง `app.config.ts` สำหรับ app configuration
3. สร้าง `pages/` สำหรับ file-based routing
4. ใช้ `components/` สำหรับ Vue components ที่ auto-import
5. สร้าง `middleware/` สำหรับ route guards
6. ใช้ `stores/` สำหรับ Pinia
7. สร้าง `plugins/` สำหรับ Nuxt plugins
8. ใช้ `layouts/` สำหรับ layout components

### 3. Components Organization

1. ใช้ `ui/` สำหรับ base components (button, input, card)
2. ใช้ `layout/` สำหรับ layout-specific components (header, sidebar, footer)
3. ใช้ `[feature]/` สำหรับ components เฉพาะ feature
4. ใช้ `global/` สำหรับ components ที่ใช้ทุกหน้า (loading, error, toast)
5. ตั้งชื่อไฟล์ด้วย PascalCase เสมอ
6. ใช้ `index.vue` ใน folder สำหรับ main component
7. Components ทั้งหมด auto-import ได้

### 4. Composables Structure

1. ตั้งชื่อ composable ด้วย `use` prefix เสมอ
2. ใช้ `[feature]/` สำหรับ composables เฉพาะ feature
3. ใช้ `utils/` สำหรับ reusable utility composables
4. แยก types ไปไว้ใน `types/` พร้อม barrel export
5. Return object pattern สำหรับ expose หลาย values/functions
6. ใช้ `try/catch` สำหรับ error handling ใน data fetching
7. ใช้ `computed` สำหรับ derived state

### 5. Layers Setup

1. แต่ละ Layer มี app/, server/, shared/, nuxt.config.ts
2. ใช้ extends ใน nuxt.config.ts เพื่อรวม Layers
3. หลีกเลี่ยง circular dependencies ระหว่าง layers
4. แชร์ types ผ่าน barrel exports ในแต่ละ Layer
5. ตั้งชื่อ Layer ตาม feature/domain ชัดเจน
6. Layers ใน `~~/layers` auto-register อัตโนมัติ

### 6. Layer Configuration

1. ใช้ routeRules สำหรับ rendering mode (isr, ssr, prerender)
2. ใช้ nitro.routeRules สำหรับ cache และ storage
3. กำหนด runtimeConfig สำหรับ API keys และ feature flags
4. ใช้ app.head สำหรับ metadata และ SEO
5. ตั้งค่า typescript paths สำหรับ import aliases
6. ใช้ modules array สำหรับ layer-specific modules

### 7. Server Structure

1. ใช้ `api/` สำหรับ REST API endpoints แยกตาม feature
2. สร้าง `db/` สำหรับ database schema, migrations, connection
3. สร้าง `services/` สำหรับ business logic
4. สร้าง `repositories/` สำหรับ data access layer
5. สร้าง `middleware/` สำหรับ auth, logging, CORS
6. ใช้ `composables/` สำหรับ reusable server-side utilities

### 8. Shared Structure

1. ใช้ `types/` สำหรับ TypeScript interfaces, types, enums
2. สร้าง `utils/` สำหรับ pure functions ที่ใช้ทั้ง client และ server
3. แยก types ตาม feature domain
4. ใช้ barrel exports (`index.ts`) สำหรับทุก subfolder
5. เก็บ constants และ enums ที่ใช้ร่วมกันใน `constants/`

### 9. Barrel Export Pattern

1. ทุก feature folder ต้องมี index.ts
2. Layer ต้องมี barrel export สำหรับ shared/
3. ไม่ใช้ relative path import ใน cross-layer imports
4. ใช้ import alias สำหรับ external modules
5. ตรวจสอบไม่มี circular dependencies ใน barrel exports

### 10. Data Flow Architecture

1. Pages: รับ parameters และจัดการ routing
2. Components: แสดง UI และรับ user interactions
3. Composables: จัดการ business logic และ local state
4. Stores: จัดการ global state (Pinia)
5. API → Services → Repositories → DB: Server-side data flow

### 11. Modules Best Practices

1. Handle async setup อย่างระมัดระวัง defer ไปที่ hooks
2. Prefix exports ด้วย module name เพื่อป้องกัน conflicts
3. Use lifecycle hooks (onInstall, onUpgrade) สำหรับ one-time setup
4. Expose types และใช้ TypeScript
5. Use ESM syntax
6. Document และ provide demos
7. Stay version agnostic ใช้ meta.compatibility

### 12. Performance Optimization

1. ใช้ NuxtLink แทน `<a>` tags สำหรับ smart prefetching
2. ใช้ Hybrid Rendering ด้วย routeRules
3. ใช้ Lazy Loading Components ด้วย prefix `Lazy`
4. ใช้ Lazy Hydration สำหรับ control interactive timing
5. ใช้ useFetch และ useAsyncData สำหรับ prevent duplicate fetching
6. ใช้ Nuxt Image สำหรับ image optimization
7. ใช้ Nuxt Fonts สำหรับ font optimization
8. ใช้ Nuxt Scripts สำหรับ third-party scripts
9. ใช้ shallowRef, v-memo, v-once สำหรับ Vue performance
10. หลีกเลี่ยง overusing plugins
11. ลบ unused code และ dependencies
12. ใช้ Progressive Enhancement สำหรับ loading

### 13. Profiling Tools

1. ใช้ Nuxi Analyze สำหรับ analyze production bundle
2. ใช้ Nuxt DevTools สำหรับ render tree และ component inspection
3. ใช้ Chrome DevTools Performance และ Lighthouse
4. ใช้ PageSpeed Insights สำหรับ user experience reports
5. ใช้ WebPageTest สำหรับ deep diagnostic information

### 14. Hydration Best Practices

1. หลีกเลี่ยง browser-only APIs ใน server context
2. ใช้ universal APIs เช่น useCookie
3. ตรวจสอบ hydration mismatches ด้วย onMounted
4. ใช้ process.client หรือ process.server สำหรับ platform-specific code
5. ใช้ ClientOnly component สำหรับ client-only features

### 15. Code Standards

1. Vue components: ใช้ `script setup lang="ts"`, script อยู่บน template
2. Composables: ชื่อขึ้นต้นด้วย `use`
3. Server API: ใช้ `defineEventHandler` หรือ `defineNitroPlugin`
4. Types: ไม่ใช้ `any`, กำหนด types ชัดเจน
5. Import: Auto-import สำหรับ Nuxt built-ins, barrel export สำหรับ shared

### 16. Config Requirements

1. `nuxt.config.ts`: compatibilityDate, extends, modules, nitro preset
2. `package.json`: scripts (build, dev, generate, lint, format, test), type: module
3. `tsconfig.json`: references Nuxt generated configs, strict mode
4. Layer barrel: ทุก folder ต้องมี index.ts
5. Data flow: Pages → Components → Composables → Stores → API → Services → Repositories → DB

## Rules

- ใช้ `app/` directory สำหรับ Nuxt 4
- สร้าง `layers/` สำหรับ feature-based architecture
- ใช้ barrel exports สำหรับทุก folder
- ไม่ใช้ relative path ใน cross-layer imports
- Components ใช้ PascalCase, Composables ใช้ `use` prefix
- ไม่ใช้ `any` โดยเด็ดขาด
- ใช้ auto-imports สำหรับ Nuxt built-ins
- รัน type checker ก่อน commit
- รัน linter และ formatter อย่างสม่ำเสมอ
- ใช้ NuxtLink แทน `<a>` tags
- ใช้ useFetch/useAsyncData สำหรับ data fetching
- ใช้ routeRules สำหรับ rendering mode
- หลีกเลี่ยง hydration mismatches

## Expected Outcome

- Nuxt applications ที่มี code quality สูง
- Performance ที่ดีด้วย built-in optimizations
- Type safety เต็มรูปแบบ
- Maintainability สูงด้วย layer architecture
- Scalability ด้วย feature-based structure
- SEO ที่ดีด้วย SSR/SSG
- Hydration ที่ถูกต้อง

