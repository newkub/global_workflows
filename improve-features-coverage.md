---
title: Improve Features Coverage
description: วิเคราะห์และเติมเต็ม features ที่ยังไม่มี coverage ด้วย minimal approach
auto_execution_mode: 3
related_workflows:
  - /write-windsurf-global-workflows
  - /dont-over-engineer
  - /analyze-features
  - /follow-code-quality
---

## Goal

ทำ `/improve-features-coverage` เพื่อวิเคราะห์ features ที่ยังไม่มี implementation, test, หรือ documentation และเติมเต็มด้วย minimal changes

## Scope

ใช้สำหรับตรวจสอบและเติมเต็ม features ใน project โดยเน้น features ที่มีอยู่จริงใน codebase ไม่ต้อง research จาก external sources

## Execute

### 1. Analyze Existing Features

วิเคราะห์ features ที่มีอยู่ใน project

1. ทำ `/analyze-features` เพื่อดู features ทั้งหมด
2. ตรวจสอบ features ที่มี implementation แต่ไม่มี test
3. ตรวจสอบ features ที่มี implementation แต่ไม่มี documentation
4. ตรวจสอบ features ที่มี TODO หรือ MOCK comments
5. จัดลำดับ priority ตาม impact และความสำคัญ

### 2. Identify Missing Coverage

ระบุสิ่งที่ขาดสำหรับแต่ละ feature

1. ตรวจสอบ implementation completeness
2. ตรวจสอบ test coverage
3. ตรวจสอบ documentation coverage
4. ระบุ features ที่ critical แต่ไม่มี coverage
5. ระบุ features ที่มีปัญหาจาก system-retrieved memory

### 3. Apply Minimal Fixes

เติมเต็ม coverage ด้วย minimal changes ตาม `/dont-over-engineer`

1. เขียน test สำหรับ features ที่ยังไม่มี (unit test เท่านั้น)
2. เขียน documentation สำหรับ features ที่ยังไม่มี (README comment หรือ inline doc)
3. แก้ exports ที่ขาด (เพิ่ม export statement เดียว)
4. แก้ type definitions ที่ขาด (เพิ่ม type export เดียว)
5. ไม่ refactor ทั้ง module เพื่อแก้ปัญหาเล็กๆ

### 4. Verify Implementation

ตรวจสอบว่าแก้ไขได้จริง

1. รัน `bun run test` เพื่อตรวจสอบ tests
2. รัน `bun run typecheck` เพื่อตรวจสอบ types
3. ตรวจสอบว่า exports ถูกต้อง
4. ตรวจสอบว่าไม่มี side effects

## Rules

### 1. Minimal Changes

ใช้ minimal changes ตาม `/dont-over-engineer`

- ใช้ `single-line change` เมื่อเป็นไปได้
- เพิ่ม export statement เดียว ไม่ refactor ทั้ง module
- เขียน unit test เท่านั้น ไม่เขียน integration test ถ้าไม่จำเป็น
- เขียน inline doc หรือ README comment ไม่สร้าง documentation file ใหม่

### 2. Feature Priority

จัดลำดับ features ตามความสำคัญ

- Features ที่มีปัญหาจาก system-retrieved memory ก่อน
- Features ที่ critical แต่ไม่มี test ก่อน
- Features ที่มี TODO/MOCK comments ก่อน
- Features ที่ missing exports หรือ type definitions ก่อน

### 3. Test Coverage

เขียน test อย่าง minimal

- เขียน unit test สำหรับ functions ที่ยังไม่มี test
- ไม่เขียน integration test ถ้าไม่จำเป็น
- ไม่เขียน E2E test สำหรับ features ที่เรียบง่าย
- ใช้ test framework ที่มีอยู่แล้ว (Vitest)

### 4. Documentation Coverage

เขียน documentation อย่าง minimal

- เพิ่ม JSDoc comments สำหรับ functions ที่ยังไม่มี
- เพิ่ม README comments สำหรับ modules ที่ยังไม่มี
- ไม่สร้าง documentation files ใหม่ถ้าไม่จำเป็น
- อัปเดต index files ถ้ามี exports ใหม่

### 5. Export And Type Fixes

แก้ exports และ types อย่าง minimal

- เพิ่ม export statement เดียวสำหรับ types ที่ขาด
- เพิ่ม re-export ใน index files ถ้าจำเป็น
- ไม่ refactor ทั้ง module structure
- ไม่สร้าง abstraction ใหม่

## Expected Outcome

- Features ทั้งหมดมี test coverage ขั้นต่ำ
- Features ทั้งหมดมี documentation ขั้นต่ำ
- Exports และ type definitions ครบถ้วน
- ไม่มี TODO/MOCK comments ที่ไม่จำเป็น
- Changes เป็น minimal และตรงประเด็น
