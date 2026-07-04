---
title: Optimize Build
description: ปรับปรุง build configuration และลดขนาด output
auto_execution_mode: 3
related_workflows:
  - /run-build
  - /run-clean
  - /check-unused-deps
---

## Goal

ปรับปรุง build configuration และลดขนาด output เพื่อให้ build เร็วและมีขนาดเล็ก

## Scope

ครอบคลุมการวิเคราะห์และปรับปรุง build configuration, dependencies, imports, และ assets

## Execute

### 1. Analyze Build Configuration

1. อ่าน build config (`bunup.config.ts`, `tsdown.config.ts`, `vite.config.ts`, หรือ `tauri.conf.json`)
2. ตรวจสอบ output formats และ targets
3. ตรวจสอบ `external` dependencies ที่ตั้งค่าไว้

### 2. Optimize Dependencies

1. ทำ `/check-unused-deps` เพื่อหา dependencies ที่ไม่ได้ใช้
2. ตรวจสอบ barrel files ที่ทำให้ bundle ใหญ่ขึ้น
3. ใช้ tree-shaking โดยตั้งค่า `sideEffects: false` ใน `package.json` ถ้าเป็นไปได้

### 3. Optimize Imports

1. ตรวจสอบ dynamic imports สำหรับ code splitting
2. ลบ unused exports และ dead code
3. ใช้ `/scan-codebase` เพื่อหา unused files

### 4. Optimize Assets

1. ตรวจสอบ asset sizes ใน `src/`
2. ลบ assets ที่ไม่ได้ใช้
3. ใช้ compression สำหรับ large assets ถ้าจำเป็น

### 5. Configure Build Options

1. เปิดใช้ `minify` ใน build config
2. ตั้งค่า `sourcemap` ตามความจำเป็น (production: ปิด, development: เปิด)
3. ตั้งค่า `target` ให้ตรงกับ runtime ที่รองรับ

### 6. Clean And Rebuild

1. ทำ `/run-clean` เพื่อลบ build artifacts และ cache เก่า
2. รัน build และเปรียบเทียบขนาด output กับก่อน optimize

## Rules

### 1. Measure Before And After

- บันทึก build time และ output size ก่อน optimize
- เปรียบเทียบหลัง optimize เพื่อยืนยันการปรับปรุง
- หยุดเมื่อไม่มีการปรับปรุงที่ significant

### 2. Preserve Functionality

- ตรวจสอบว่า output ยังทำงานได้หลัง optimize
- ห้ามลบ dependencies ที่จำเป็น
- ทำ `/run-build` หลัง optimize เพื่อยืนยัน

### 3. Build Tool Specifics

- `bunup`: ตั้งค่า `minify`, `sourcemap`, `external` ใน `bunup.config.ts`
- `tsdown`: ตั้งค่า `minify`, `sourcemap`, `external` ใน `tsdown.config.ts`
- `vite`: ตั้งค่า `build.minify`, `build.sourcemap` ใน `vite.config.ts`
- `tauri`: ตั้งค่า `bundle` options ใน `tauri.conf.json`

## Expected Outcome

- Build time ลดลง
- Output size ลดลง
- ไม่มี unused dependencies หรือ dead code
- Build ยังทำงานได้ถูกต้อง
