---
title: Follow Import
description: จัดการ import strategy: alias, barrel export, ordering, type-only, circular detection
auto_execution_mode: 3
related:
  - /follow-barrel-export
  - /follow-typescript
  - /follow-config
  - /use-scripts
---

## Goal

จัดการ import strategy อย่างครบถ้วน: alias configuration, barrel exports, import ordering, type-only imports, circular dependency detection และ import optimization

## Scope

ใช้สำหรับโปรเจกต์ที่ต้องการ import strategy ที่สม่ำเสมอ — ครอบคลุม TypeScript, JavaScript, Python, Java, Rust และภาษาอื่นๆ

## Execute

### 1. Analyze Import Landscape

ตรวจสอบ import patterns ที่มีอยู่ในโปรเจกต์

> Goal: เข้าใจ import patterns ปัจจุบันและปัญหา

1. อ่าน configuration files หลัก (`package.json`, `tsconfig.json`, `vite.config.ts`, `biome.jsonc`)
2. ตรวจสอบ import aliases ที่มีอยู่แล้ว
3. ค้นหา relative imports ที่ซับซ้อน (`../../../`) ด้วย `/scan-codebase`
4. ตรวจสอบ barrel exports ที่มีอยู่
5. ระบุ build tool และ language runtime ที่ใช้

### 2. Configure Import Aliases

ตั้งค่า import aliases ใน configuration files

> Goal: Import aliases สอดคล้องกันทุก config

1. ตั้งค่า `paths` ใน `tsconfig.json` สำหรับ TypeScript
2. ตั้งค่า `resolve.alias` ใน `vite.config.ts` สำหรับ Vite
3. ตั้งค่า `imports` ใน `package.json` สำหรับ Bun
4. ตั้งค่า framework-specific aliases (Next.js, Nuxt, Solid, etc.)
5. ทำ `/follow-config` เพื่อตรวจสอบ consistency ระหว่าง configuration files
6. ใช้ naming conventions ที่สม่ำเสมอ: `#` prefix สำหรับ TypeScript, `@/` สำหรับ frameworks

### 3. Replace Relative Imports

แทนที่ relative paths ที่ซับซ้อนด้วย import aliases

> Goal: Import paths สั้น อ่านง่าย สม่ำเสมอ

1. ค้นหา relative imports ที่ซับซ้อน (`../../../`)
2. แทนที่ด้วย import alias ที่ตั้งค่าไว้
3. จัดเรียง imports ตามลำดับ: external → internal alias → relative
4. ใช้ type-only imports สำหรับ types (ถ้าภาษารองรับ)
5. ถ้ามีไฟล์มากกว่า 10 ไฟล์ → ใช้ `/use-scripts` สำหรับ automation

### 4. Manage Barrel Exports

ตรวจสอบและจัดการ barrel exports

> Goal: Barrel exports สะอาด export เฉพาะ public API

1. ทำ `/follow-barrel-export` เพื่อสร้าง barrel exports สำหรับ folders ที่มี public API
2. export เฉพาะส่วนที่ต้องการให้โมดูลอื่นใช้งาน
3. ซ่อน implementation details
4. อัปเดท imports ให้ใช้ barrel exports
5. ตรวจสอบว่าไม่มี side effects ใน barrel files

### 5. Enforce Import Ordering

จัดเรียง imports ให้สม่ำเสมอทั้งโปรเจกต์

> Goal: Import ordering สม่ำเสมอ อ่านง่าย

1. กำหนด import order: external → internal alias → relative → type-only
2. จัดกลุ่ม imports ด้วย blank lines
3. ใช้ Biome `organizeImports` หรือเทียบเท่าสำหรับ auto-sorting
4. ตรวจสอบว่าไม่มี duplicate imports จาก same module
5. รัน linter เพื่อ enforce import ordering

### 6. Detect Circular Dependencies

ตรวจจับและแก้ไข circular dependencies

> Goal: ไม่มี circular dependencies

1. รัน `madge --circular --extensions ts,tsx` เพื่อตรวจจับ circular dependencies
2. วิเคราะห์ dependency graph ที่พบ
3. แก้ไขโดย: extract shared module, use dependency injection, หรือ restructure
4. ยืนยันว่าไม่มี circular dependencies เหลืออยู่

### 7. Optimize Imports

เพิ่มประสิทธิภาพ imports

> Goal: Imports มีประสิทธิภาพ ไม่มี waste

1. ตรวจสอบ unused imports ด้วย linter
2. ใช้ tree-shakeable imports (named imports แทน namespace imports)
3. หลีกเลี่ยงการ import ทั้ง module เมื่อต้องการเฉพาะบางส่วน
4. ใช้ dynamic imports สำหรับ code splitting ถ้าเหมาะสม
5. ตรวจสอบ bundle size impact ของ imports

### 8. Verify

ตรวจสอบว่า import strategy ทำงานได้ถูกต้อง

> Goal: Import strategy ทำงานได้ ไม่มี errors

1. รัน type check ตรวจสอบว่าไม่มี errors
2. รัน linter ตรวจสอบว่าไม่มี lint errors
3. รัน build ตรวจสอบว่าไม่มี build errors
4. ตรวจสอบว่าไม่มี circular dependencies
5. ยืนยันว่า functionality ทั้งหมดยังทำงานได้ปกติ

## Rules

### Import Aliases

- ใช้ import alias เสมอเมื่อเป็นไปได้ แทน relative paths ที่ซับซ้อน (`../../../`)
- ถ้าเป็น TypeScript ใช้ `#` สำหรับ root alias (เช่น `#domain`, `#shared`)
- ตั้งค่า import alias ให้สอดคล้องกับโครงสร้างโปรเจกต์
- ใช้ naming conventions ที่สม่ำเสมอสำหรับ aliases
- ทำ `/follow-config` เพื่อตรวจสอบ consistency ระหว่าง configuration files

### Import Ordering

- จัดเรียง imports ตามลำดับ: external → internal alias → relative → type-only
- จัดกลุ่ม imports ด้วย blank lines
- ใช้ type-only imports สำหรับ types (ถ้าภาษารองรับ)
- หลีกเลี่ยงการ import ทั้ง folder โดยไม่จำเป็น
- ใช้ Biome `organizeImports` สำหรับ auto-sorting

### Barrel Exports

- สร้าง barrel exports เฉพาะที่ public API เท่านั้น
- export เฉพาะส่วนที่ต้องการให้โมดูลอื่นใช้งาน (ซ่อน implementation details)
- รักษา consistency ในรูปแบบการ export
- ตรวจสอบว่าไม่มี side effects ใน barrel files
- ทำ `/follow-barrel-export` สำหรับรายละเอียด

### Circular Dependencies

- ตรวจจับ circular dependencies ด้วย `madge`
- แก้ไขโดย extract shared module หรือ restructure
- ห้าม ignore circular dependency warnings
- รัน `madge` อย่างสม่ำเสมอเพื่อ catch ตั้งแต่เนิ่นๆ

### Import Optimization

- ลบ unused imports
- ใช้ named imports แทน namespace imports เพื่อ tree-shaking
- ใช้ dynamic imports สำหรับ code splitting ถ้าเหมาะสม
- ตรวจสอบ bundle size impact

### High Impact Content

- ถ้ามีไฟล์มากกว่า 10 ไฟล์ที่ต้องแก้ → ใช้ `/use-scripts` สำหรับ automation
- จัดลำดับความสำคัญ: circular dependencies > unused imports > alias migration > ordering

### Non-Redundancy

- รายละเอียด barrel exports อยู่ใน `/follow-barrel-export` แล้ว
- รายละเอียด TypeScript config อยู่ใน `/follow-typescript` แล้ว
- รายละเอียด configuration อยู่ใน `/follow-config` แล้ว

## Expected Outcome

- Import aliases สอดคล้องกันทุก configuration files
- ไม่มี relative paths ที่ซับซ้อน (`../../../`)
- Import ordering สม่ำเสมอทั้งโปรเจกต์
- Barrel exports สะอาด export เฉพาะ public API
- ไม่มี circular dependencies
- ไม่มี unused imports
- Type safety รักษาไว้ (ถ้าภาษารองรับ)
- Functionality ทั้งหมดยังทำงานได้ปกติ
