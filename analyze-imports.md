---
title: Analyze Imports
description: วิเคราะห์ import organization, barrel exports, import order, unused imports, circular imports
auto_execution_mode: 3
related_workflows:
  - /analyze-code-patterns
  - /analyze-coupling
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ import organization เพื่อระบุ import quality และ barrel export gaps

## Scope

Import organization, barrel exports, import order, unused imports, circular imports, import depth

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม import metrics ผ่าน scripts (import scan, barrel detection, unused analysis)

### 2. Check Import Organization

1. ระบุ inconsistent import ordering
2. ระบุ missing import grouping (stdlib, external, internal, relative)
3. ระบุ missing import sorting (alphabetical)
4. ระบุ mixed import styles (default vs named vs namespace)
5. ระบุ missing import type separation (`import type`)

### 3. Check Barrel Exports

1. ระบุ missing barrel files (`index.ts`) สำหรับ directories
2. ระบุ incomplete barrel exports (missing re-exports)
3. ระบุ barrel files ที่ export มากเกินไป
4. ระบุ missing namespace re-exports
5. ระบุ inconsistent barrel naming

### 4. Check Unused Imports

1. ระบุ unused imports ทั้งหมด
2. ระบุ unused type imports
3. ระบุ side-effect only imports ที่ไม่จำเป็น
4. ระบุ duplicate imports ในไฟล์เดียวกัน
5. ระบุ over-importing (importing more than needed)

### 5. Check Import Quality

1. ระบุ relative imports ที่ควรเป็น alias imports
2. ระบุ deep imports ที่ข้าม barrel files
3. ระบุ missing path aliases
4. ระบุ inconsistent path alias usage
5. ระบุ missing `@/` หรือ `~/` prefix consistency

### 6. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: unused imports → circular imports → barrel exports → import organization → import quality

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม file:line และ severity

### 2. Severity Classification

- **Critical**: circular imports, missing barrel files สำหรับ shared modules
- **High**: unused imports, deep imports ที่ข้าม barrels, missing path aliases
- **Medium**: inconsistent ordering, missing import grouping, missing `import type`
- **Low**: inconsistent prefix, over-importing, side-effect imports

### 3. Use Scripts For Import Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ `knip` สำหรับ unused import detection
- ใช้ ast-grep สำหรับ import pattern detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- Import issues ระบุพร้อม file:line และ severity
- พร้อมสำหรับ `/refactor` หรือ `/use-import-alias`
