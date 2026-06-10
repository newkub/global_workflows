---
title: Dead Code Removal
description: ลบโค้ดที่ไม่ได้ใช้ ลดขนาด codebase
auto_execution_mode: 3
---

## Goal

ลบโค้ดที่ไม่ได้ใช้ออกจาก codebase เพื่อลดขนาดและความซับซ้อน

## Scope

ลบ functions, types, variables, imports, files และ dependencies ที่ไม่ได้ใช้จาก codebase

## Execute

### 1. Identify Dead Code

ค้นหาโค้ดที่ไม่ได้ใช้

1. ใช้ AST analysis เพื่อหา functions, types, variables ที่ไม่มีการใช้
2. ใช้ knip สำหรับ JavaScript/TypeScript projects
3. ใช้ cargo-udeps สำหรับ Rust projects
4. ตรวจสอบ imports ที่ไม่ได้ใช้
5. ตรวจสอบ exports ที่ไม่มีการใช้จากภายนอก

### 2. Verify References

ตรวจสอบว่าโค้ดไม่ได้ถูกใช้จริง

1. ค้นหา references ทั่ว codebase
2. ตรวจสอบ dynamic imports
3. ตรวจสอบ reflection usage
4. ตรวจสอบ test files ที่อาจใช้โค้ด
5. ตรวจสอบ configuration ที่อาจอ้างอิงโค้ด

### 3. Remove Dead Code

ลบโค้ดที่ไม่ได้ใช้ออก

1. ลบ functions, types, variables ที่ไม่ได้ใช้
2. ลบ imports ที่ไม่ได้ใช้
3. ลบ files ที่ไม่มี exports ที่ใช้
4. ลบ dependencies ที่ไม่ได้ใช้
5. อัพเดท barrel exports

### 4. Clean Up

จัดระเบียบ codebase หลังลบ

1. อัพเดท imports
2. ลบ empty files
3. ลบ empty directories
4. อัพเดท exports
5. จัดระเบียบ imports

## Rules

### 1. Identification Accuracy

ตรวจสอบความถูกต้องก่อนลบ

- ตรวจสอบ references ทั่ว codebase
- ตรวจสอบ dynamic usage
- ตรวจสอบ test coverage
- ตรวจสอบ configuration references
- ใช้ tools ที่เชื่อถือได้

### 2. Removal Safety

ลบอย่างระมัดระวัง

- ลบทีละส่วนและทดสอบ
- ตรวจสอบ side effects
- ตรวจสอบ implicit dependencies
- ตรวจสอบ global state
- ทำ backup ก่อนลบ

### 3. Dependency Management

จัดการ dependencies ที่เกี่ยวข้อง

- ลบ dependencies ที่ไม่ได้ใช้
- อัพเดท package manifests
- ตรวจสอบ transitive dependencies
- ตรวจสอบ dev dependencies
- อัพเดท lock files

### 4. Barrel Exports

จัดการ barrel exports ให้ถูกต้อง

- อัพเดท barrel exports
- ลบ exports ที่ไม่ได้ใช้
- ตรวจสอบ public API
- รักษา backward compatibility
- Document exports ที่เปลี่ยนแปลง

## Expected Outcome

- Codebase ที่มีขนาดเล็กลง
- ไม่มี dead code เหลืออยู่
- Dependencies ที่สะอาด
- Imports ที่จัดระเบียบดี
- Barrel exports ที่ถูกต้อง
- Functionality ที่ยังทำงานได้

