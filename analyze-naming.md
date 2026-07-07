---
title: Analyze Naming
description: วิเคราะห์ naming conventions, consistency, clarity, API naming patterns
auto_execution_mode: 3
related_workflows:
  - /analyze-foundation
  - /analyze-api
  - /improve-naming-convention
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ naming conventions เพื่อระบุ inconsistency และ clarity issues

## Scope

Variable naming, function naming, file naming, component naming, API naming, database naming, CSS class naming, constant naming

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม naming metrics ผ่าน scripts (naming pattern detection, convention scan, inconsistency analysis)

### 2. Check Variable Naming

1. ระบุ inconsistent casing (camelCase vs snake_case vs PascalCase)
2. ระบุ ambiguous names (data, item, value, temp)
3. ระบุ missing descriptive names
4. ระบุ inconsistent boolean naming (is/has/can/should prefixes)
5. ระบุ inconsistent constant naming (SCREAMING_SNAKE_CASE)

### 3. Check Function Naming

1. ระบุ inconsistent verb prefixes (get/fetch/load/retrieve)
2. ระบุ missing action verbs ใน function names
3. ระบุ inconsistent async function naming (async suffix, Promise suffix)
4. ระบุ too long หรือ too short function names
5. ระบุ inconsistent event handler naming (on/handle prefix)

### 4. Check File And Directory Naming

1. ระบุ inconsistent file casing (kebab-case vs PascalCase vs camelCase)
2. ระบุ inconsistent directory naming
3. ระบุ missing index files
4. ระบุ inconsistent test file naming
5. ระบุ inconsistent type file naming

### 5. Check Component Naming

1. ระบุ inconsistent component casing (PascalCase)
2. ระบุ missing descriptive component names
3. ระบุ inconsistent component file naming
4. ระบุ inconsistent HOC naming
5. ระบุ inconsistent hook naming (use prefix)

### 6. Check API Naming

1. ระบุ inconsistent endpoint naming (plural vs singular)
2. ระบุ inconsistent HTTP method usage
3. ระบุ inconsistent query parameter naming
4. ระบุ inconsistent response field naming
5. ระบุ inconsistent error code naming

### 7. Check Database Naming

1. ระบุ inconsistent table naming (plural vs singular)
2. ระบุ inconsistent column naming (snake_case vs camelCase)
3. ระบุ inconsistent foreign key naming
4. ระบุ inconsistent index naming
5. ระบุ inconsistent constraint naming

### 8. Check CSS Naming

1. ระบุ inconsistent CSS class naming (BEM, utility, module)
2. ระบุ inconsistent CSS variable naming
3. ระบุ inconsistent ID naming
4. ระบุ missing semantic class names
5. ระบุ inconsistent shortcut class naming

### 9. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: API naming → database naming → component naming → function naming → variable naming → file naming → CSS naming

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม file:line และ severity

### 2. Severity Classification

- **Critical**: inconsistent API naming, inconsistent database naming
- **High**: inconsistent component naming, inconsistent function naming
- **Medium**: ambiguous names, inconsistent casing, inconsistent file naming
- **Low**: inconsistent CSS naming, inconsistent constant naming

### 3. Framework Awareness

- ตรวจสอบ Biome naming rules
- ตรวจสอบ ast-grep naming patterns
- ระบุ framework-specific naming conventions

### 4. Use Scripts For Naming Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ naming pattern detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- Naming inconsistencies ระบุพร้อม file:line และ severity
- API และ database naming issues จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-naming-convention`
