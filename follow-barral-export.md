---
title: Follow Barrel Export
description: ทำให้ไฟล์หลักมีเฉพาะ re-export และ refactor logic ออกเป็นไฟล์ย่อย
auto_execution_mode: 3
related_workflows:
  - /refactor-modules
---

## Goal

ทำให้ไฟล์หลัก (entry files) เช่น `index.ts`, `mod.rs` มีเฉพาะ re-export เท่านั้น และ refactor logic ออกเป็นไฟล์ย่อยๆ ตาม single responsibility

## Scope

ใช้สำหรับทุก workspace ที่มี entry files ที่มี implementation logic ผสมกับ re-export โดย:

- ใช้กับ entry files ทุกระดับ (root, nested, deep nested)
- ใช้กับทุก module ที่มี public API
- ใช้กับ packages ใน monorepo ทุก package

## Execute

### 1. Identify Entry Files

ค้นหาและวิเคราะห์ entry files

1. ค้นหาไฟล์หลักใน project เช่น `index.ts`, `mod.rs`, `lib.rs`, `main.rs`
2. ตรวจสอบว่าไฟล์เหล่านี้มี logic implementation ผสมกับ re-export หรือไม่
3. ระบุส่วนที่เป็น re-export และส่วนที่เป็น implementation ด้วยการวิเคราะห์ AST หรือ manual review
4. จัดลำดับ priority ตาม impact และ dependencies

### 2. Refactor Implementation

ย้าย implementation logic ไปยังไฟล์ย่อย

1. ทำตาม `/refactor-modules` เพื่อสร้างไฟล์ย่อยตาม responsibility
2. ย้าย implementation logic จาก entry file ไปยังไฟล์ย่อยที่เหมาะสม
3. จัดกลุ่ม logic ที่เกี่ยวข้องกันไว้ในไฟล์เดียวกัน
4. ตรวจสอบ imports และ exports ทั้งหมดหลังย้าย

### 3. Update Entry File

แก้ไข entry file ให้มีเฉพาะ re-export

1. แก้ไขไฟล์หลักให้มีเฉพาะ re-export statements เท่านั้น
2. Re-export จากไฟล์ย่อยตาม barrel export pattern
3. จัดลำดับ re-export ตาม logical grouping
4. เพิ่ม comments อธิบาย public API ถ้าจำเป็น

### 4. Verify Structure

ตรวจสอบและยืนยันการเปลี่ยนแปลง

1. ตรวจสอบว่า entry file มีเฉพาะ re-export เท่านั้น
2. ตรวจสอบว่าไม่มี circular dependencies ระหว่างไฟล์ย่อย
3. รัน typecheck และ lint เพื่อยืนยัน
4. ทดสอบ imports จาก external modules ที่ใช้ entry file

## Rules

### 1. Entry File Standards

- Entry files (`index.ts`, `mod.rs`, `lib.rs`, `main.rs`) ต้องมีเฉพาะ re-export เท่านั้น
- ห้ามมี implementation logic, functions, classes, หรือ constants ใน entry files
- ใช้ barrel export pattern เพื่อจัดระเบียบ exports และทำ public API
- Re-export ต้องเป็น public API ที่ชัดเจนและ stable
- อนุญาตให้มี type exports หรือ interface definitions ใน entry files ถ้าจำเป็น

### 2. Refactoring Guidelines

- ทำตาม `/refactor-modules` สำหรับการแยกไฟล์
- ตั้งชื่อไฟล์ให้สะท้อนถึง functionality และ responsibility
- จัดโครงสร้าง folder ตาม module organization และ domain
- หลีกเลี่ยง circular dependencies ระหว่างไฟล์ย่อย
- แยก concerns ที่แตกต่างกันออกจากกันอย่างชัดเจน
- จัดกลุ่ม related functions ไว้ในไฟล์เดียวกัน

### 3. Export Best Practices

- Re-export จากไฟล์ย่อยเท่านั้น ไม่ re-export จาก dependencies โดยตรง
- ใช้ named exports แทน default exports เมื่อเป็นไปได้สำหรับ tree-shaking
- รักษา backward compatibility ของ imports โดย re-export เดิม
- Document public API ใน entry file ด้วย comments หรือ JSDoc
- จัดลำดับ re-export ตาม logical grouping และ importance
- ใช้ `export * from` สำหรับ barrel exports และ `export { } from` สำหรับ selective exports

## Expected Outcome

- Entry files มีเฉพาะ re-export statements
- Implementation logic แยกออกเป็นไฟล์ย่อยตาม single responsibility
- โครงสร้างโปรเจกต์ชัดเจนและจัดระเบียบ
- Imports/Exports ยังทำงานได้เหมือนเดิม
- ไม่มี circular dependencies 
