---
title: Analyze Duplication
description: วิเคราะห์ DRY violations, copy-paste detection, code clones, duplicate logic
auto_execution_mode: 3
related_workflows:
  - /analyze-code-patterns
  - /analyze-dead-code
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ code duplication เพื่อระบุ DRY violations และ code clones

## Scope

DRY violations, copy-paste detection, code clones, duplicate logic, duplicate patterns

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม duplication metrics ผ่าน scripts (clone detection, pattern matching, similarity analysis)

### 2. Check Code Clones

1. ระบุ exact code clones (Type 1: identical code)
2. ระบุ parameterized clones (Type 2: same structure, different variables)
3. ระบุ functional clones (Type 3: same logic, different implementation)
4. ระบุ missing shared utility extraction
5. ระบุ missing generic function extraction

### 3. Check DRY Violations

1. ระบุ duplicated business logic ในหลาย modules
2. ระบุ duplicated validation logic
3. ระบุ duplicated error handling patterns
4. ระบุ duplicated data transformation logic
5. ระบุ duplicated UI component patterns

### 4. Check Duplicate Patterns

1. ระบุ similar function signatures ที่ควรรวมเป็น generic
2. ระบุ similar type definitions ที่ควร share
3. ระบุ similar test setup patterns ที่ควรเป็น fixture
4. ระบุ similar config patterns ที่ควร centralize
5. ระบุ similar SQL query patterns ที่ควรเป็น shared query builder

### 5. Check Copy-Paste Indicators

1. ระบุ TODO/FIXME comments ที่ซ้ำกัน
2. ระบุ identical string literals ในหลายไฟล์
3. ระบุ identical import blocks
4. ระบุ identical CSS class combinations
5. ระบุ identical regex patterns

### 6. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: code clones → DRY violations → duplicate patterns → copy-paste indicators

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม file:line และ severity

### 2. Severity Classification

- **Critical**: duplicated business logic, duplicated security checks
- **High**: exact code clones > 20 บรรทัด, duplicated validation, duplicated error handling
- **Medium**: parameterized clones, similar function signatures, duplicated config
- **Low**: identical imports, identical string literals, identical CSS combinations

### 3. Use Scripts For Duplication Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ `jscpd` สำหรับ copy-paste detection
- ใช้ ast-grep สำหรับ structural clone detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- Duplication issues ระบุพร้อม file:line และ severity
- พร้อมสำหรับ `/refactor` หรือ `/improve-redundancy`
