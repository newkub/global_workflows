---
title: Follow Barrel Files
description: ทำให้ entry files มีเฉพาะ re-export และจัดการ imports ให้ถูกต้องตาม best practices
auto_execution_mode: 3
related_workflows:
  - /improve-comment
  - /refactor
---

## Goal

ทำให้ไฟล์หลัก (entry files) เช่น `index.ts`, `mod.rs` มีเฉพาะ re-export เท่านั้น และจัดการ import/export ให้ถูกต้องตาม barrel files best practices

## Scope

ใช้สำหรับทุก workspace ที่มี entry files และ barrel files โดย:

- ใช้กับ entry files ทุกระดับ (root, nested, deep nested)
- ใช้กับทุก module ที่มี public API
- ใช้กับ packages ใน monorepo ทุก package
- ใช้กับทั้ง library และ application code

## Execute

### 1. Identify Entry Files

ค้นหาและวิเคราะห์ entry files

1. ค้นหาไฟล์หลักใน project เช่น `index.ts`, `mod.rs`, `lib.rs`, `main.rs`
2. ตรวจสอบว่าไฟล์เหล่านี้มี logic implementation ผสมกับ re-export หรือไม่
3. ระบุส่วนที่เป็น re-export และส่วนที่เป็น implementation
4. ตรวจสอบ imports ภายใน module ว่า import จาก barrel file หรือ direct module
5. จัดลำดับ priority ตาม impact และ dependencies

### 2. Refactor Implementation

ย้าย implementation logic ไปยังไฟล์ย่อย

1. สร้างไฟล์ย่อยตาม responsibility
2. ย้าย implementation logic จาก entry file ไปยังไฟล์ย่อยที่เหมาะสม
3. จัดกลุ่ม logic ที่เกี่ยวข้องกันไว้ในไฟล์เดียวกัน
4. ตรวจสอบ imports และ exports ทั้งหมดหลังย้าย

### 3. Update Entry File

แก้ไข entry file ให้มีเฉพาะ re-export

1. แก้ไขไฟล์หลักให้มีเฉพาะ re-export statements เท่านั้น
2. สร้าง named re-export จากไฟล์ย่อย (`export { xxx } from './xxx'`)
3. จัดลำดับ re-export ตาม logical grouping
4. ห้ามมี side effects ใน barrel file เช่น `export const foo = 5`
5. เพิ่ม comments อธิบาย public API ถ้าจำเป็น (ดู /improve-comment สำหรับ best practices)

ตัวอย่าง:

```typescript
// ✅ ถูกต้อง - entry file มีเฉพาะ re-export
// Re-export types
export { type IUser, type IConfig } from './types';
// Re-export functions
export { createUser, deleteUser } from './user';
export { getConfig, setConfig } from './config';
// Re-export constants
export { DEFAULT_CONFIG } from './constants';

// ❌ ผิด - มี side effects ใน barrel file
export const API_URL = 'https://api.example.com'; // ห้ามมี constants ใน barrel file
```

### 4. Fix Imports

แก้ไข imports ให้ถูกต้องตาม barrel files best practices

1. ภายใน module เดียวกัน: import จากไฟล์โดยตรง (`import { xxx } from './xxx'`) ไม่ใช่จาก barrel
2. ภายนอก module: import จาก barrel file (`import { xxx } from '../module'`)
3. ตรวจสอบว่าไม่มี circular imports จากการ import ผ่าน barrel ภายใน module
4. ใช้ lint rule `import/no-cycle` เพื่อตรวจจับ circular dependencies
5. ถ้ามี name conflicts ให้ใช้ rename (`export { xxx as yyy } from './xxx'`)

### 5. Verify Structure

ตรวจสอบและยืนยันการเปลี่ยนแปลง

1. ตรวจสอบว่า entry file มีเฉพาะ re-export เท่านั้น
2. ตรวจสอบว่าไม่มี side effects ใน barrel file
3. ตรวจสอบว่าไม่มี circular dependencies ระหว่างไฟล์ย่อย
4. รัน typecheck และ lint เพื่อยืนยัน
5. ทดสอบ imports จาก external modules ที่ใช้ entry file

## Rules

### 1. Entry File Standards

- Entry files (`index.ts`, `mod.rs`, `lib.rs`, `main.rs`) ต้องมีเฉพาะ re-export เท่านั้น
- ห้ามมี implementation logic, functions, classes, constants หรือ side effects ใน entry files
- Side effects ทำให้ barrel file ไม่สามารถ optimize ได้ (เช่น `optimizePackageImports` ใน Next.js)
- อนุญาตให้มี type exports หรือ interface definitions ใน entry files ถ้าจำเป็น

### 2. Import Best Practices

- ภายใน module เดียวกัน: import จากไฟล์โดยตรง (`import { xxx } from './xxx'`)
- ห้าม import จาก barrel file ภายใน module เดียวกัน (`import { xxx } from './'` หรือ `import { xxx } from '@/module'`)
- การ import จาก barrel ภายใน module ทำให้เกิด circular import
- ภายนอก module: import จาก barrel file เพื่อ encapsulate internal structure
- ใช้ lint rule `import/no-cycle` เพื่อตรวจจับ circular dependencies

### 3. Export Best Practices

- Re-export จากไฟล์ย่อยเท่านั้น ไม่ re-export จาก dependencies โดยตรง
- ใช้ named exports เท่านั้น (`export { xxx } from './xxx'`) ห้ามใช้ `export * from`
  - `export *` ทำให้ไม่สามารถ tree-shake ได้
  - `export *` ทำให้เกิด name conflicts ได้ง่าย
  - `export *` ทำให้ไม่รู้ว่า export อะไรบ้างจาก barrel file
  - `export *` ทำให้ tooling และ IDE ไม่สามารถ provide auto-complete ได้ดี
- ห้ามใช้ default exports เพื่อ tree-shaking ที่ดีขึ้น
- ถ้ามี name conflicts ให้ใช้ rename (`export { xxx as yyy } from './xxx'`)
- รักษา backward compatibility ของ imports โดย re-export เดิม
- จัดลำดับ re-export ตาม logical grouping และ importance

### 4. Refactoring Guidelines

- ตั้งชื่อไฟล์ให้สะท้อนถึง functionality และ responsibility
- จัดโครงสร้าง folder ตาม module organization และ domain
- หลีกเลี่ยง circular dependencies ระหว่างไฟล์ย่อย
- แยก concerns ที่แตกต่างกันออกจากกันอย่างชัดเจน
- จัดกลุ่ม related functions ไว้ในไฟล์เดียวกัน

### 5. Performance Considerations

- Barrel files โหลดทุก module ที่ re-export แบบ synchronous
- หลีกเลี่ยง barrel files ที่ re-export module จำนวนมาก (เกิน 20 ไฟล์)
- สำหรับ library: barrel file จำเป็นสำหรับ single entry point ใน `package.json`
- สำหรับ application: พิจารณาใช้ barrel เฉพาะที่จำเป็น
- ใช้ `optimizePackageImports` ใน Next.js เพื่อ optimize barrel imports

## Expected Outcome

- Entry files มีเฉพาะ re-export statements ไม่มี side effects
- Imports ภายใน module ใช้ direct module path ไม่ผ่าน barrel
- Imports ภายนอก module ใช้ barrel file เป็น entry point
- Implementation logic แยกออกเป็นไฟล์ย่อยตาม single responsibility
- ไม่มี circular dependencies
