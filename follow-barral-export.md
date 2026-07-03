---
title: Follow Barrel Export
description: ทำให้ไฟล์หลักมีเฉพาะ re-export และ refactor logic ออกเป็นไฟล์ย่อย
auto_execution_mode: 3
related_workflows:
  - /refactor-modules
  - /refactor-to-module-single-responsibility
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

1. ค้นหาไฟล์หลักใน project เช่น `index.ts`, `mod.rs`, `lib.rs`
2. ตรวจสอบว่าไฟล์เหล่านี้มี logic implementation หรือไม่
3. ระบุส่วนที่เป็น re-export และส่วนที่เป็น implementation

### 2. Refactor Implementation

1. ทำ `/refactor-to-module-single-responsibility` เพื่อสร้างไฟล์ย่อยตาม responsibility
2. ย้าย implementation logic จาก entry file ไปยังไฟล์ย่อย
3. ตั้งชื่อไฟล์ย่อยให้สะท้อนถึง responsibility

### 3. Update Entry File

1. แก้ไขไฟล์หลักให้มีเฉพาะ re-export statements
2. ใช้ barrel export pattern เพื่อ re-export จากไฟล์ย่อย
3. เก็บ re-export ไว้ในไฟล์หลักเพื่อทำ public API

### 4. Verify Structure

1. ตรวจสอบว่า entry file มีเฉพาะ re-export เท่านั้น
2. ตรวจสอบว่าไฟล์ย่อยมี single responsibility
3. รัน typecheck และ lint เพื่อยืนยัน

## Rules

### 1. Entry File Standards

- Entry files (`index.ts`, `mod.rs`) ต้องมีเฉพาะ re-export เท่านั้น
- ห้ามมี implementation logic ใน entry files
- ใช้ barrel export pattern เพื่อจัดระเบียบ exports
- Re-export ต้องเป็น public API ที่ชัดเจน

### 2. Refactoring Guidelines

- ทำตาม `/refactor-to-module-single-responsibility` สำหรับการแยกไฟล์
- ตั้งชื่อไฟล์ให้สะท้อนถึง functionality
- จัดโครงสร้าง folder ตาม module organization
- หลีกเลี่ยง circular dependencies

### 3. Export Best Practices

- Re-export จากไฟล์ย่อยเท่านั้น ไม่ re-export จาก dependencies
- ใช้ named exports แทน default exports เมื่อเป็นไปได้
- รักษา backward compatibility ของ imports
- Document public API ใน entry file

## Expected Outcome

- Entry files มีเฉพาะ re-export statements
- Implementation logic แยกออกเป็นไฟล์ย่อยตาม single responsibility
- โครงสร้างโปรเจกต์ชัดเจนและจัดระเบียบ
- Imports/Exports ยังทำงานได้เหมือนเดิม
- ไม่มี circular dependencies 
