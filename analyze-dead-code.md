---
title: Analyze Dead Code
description: วิเคราะห์ unused exports, unreachable code, orphaned files, dead dependencies
auto_execution_mode: 3
related_workflows:
  - /cleanup-unused-files
  - /cleanup-files
  - /check-unused-deps
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ dead code ใน codebase เพื่อระบุ unused exports, unreachable code, และ orphaned files

## Scope

Unused exports, unreachable code, orphaned files, unused dependencies, commented-out code, unused private methods, dead CSS, dead config

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม dead code metrics ผ่าน scripts (knip scan, unreachable detection, orphaned file analysis)

### 2. Detect Unused Exports

1. รัน `bun run knip` เพื่อ detect unused exports
2. ระบุ exported functions, classes, types ที่ไม่ถูก import จากที่ไหน
3. ระบุ barrel exports (`index.ts`) ที่ re-export สิ่งที่ไม่ใช้
4. ระบุ exports ที่ใช้เฉพาะใน tests เท่านั้น

### 3. Detect Unreachable Code

1. ระบุ code หลัง `return`, `throw`, `break`, `continue`
2. ระบุ branches ที่ไม่มีทางเข้าถึง (impossible conditions)
3. ระบุ `if (false)` และ `if (true)` blocks
4. ระบุ switch cases ที่ไม่มี matching value

### 4. Detect Orphaned Files

1. ระบุ files ที่ไม่ถูก import จากที่ไหนเลย
2. ระบุ files ที่ไม่อยู่ใน dependency graph
3. ระบุ test files ที่ไม่มี source file คู่กัน
4. ระบุ config files ที่ไม่ใช้แล้ว

### 5. Detect Unused Dependencies

1. รัน `bun run knip` เพื่อ detect unused dependencies
2. ทำ `/check-unused-deps` สำหรับ detailed analysis
3. ระบุ devDependencies ที่ไม่ใช้ใน scripts
4. ระบุ dependencies ที่ import แต่ไม่ใช้จริง

### 6. Detect Commented-Out Code

1. ระบุ commented-out code blocks (มากกว่า 3 บรรทัด)
2. ระบุ TODO/FIXME ที่ค้างนาน (> 6 เดือน)
3. ระบุ disabled code ที่ควรลบหรือ enable

### 7. Detect Dead CSS And Assets

1. ระบุ CSS classes ที่ไม่ถูกใช้
2. ระบุ images, fonts, icons ที่ไม่ถูกอ้างอิง
3. ระบุ unused UnoCSS shortcuts และ presets

### 8. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: unused dependencies → orphaned files → unused exports → unreachable code → commented-out → dead CSS

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม file, line, และ severity

### 2. False Positive Awareness

- ระบุ exports ที่อาจใช้โดย external consumers (public API)
- ระบุ files ที่อาจใช้โดย dynamic imports
- ตรวจสอบ `@public` JSDoc tag ก่อนลบ exports

### 3. Use Scripts For Batch Scanning

- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์
- ใช้ `knip` เป็น primary tool สำหรับ unused detection

## Expected Outcome

- Dead code ระบุพร้อม file, line, และ type
- พร้อมสำหรับ `/cleanup-unused-files` หรือ `/cleanup-files`
