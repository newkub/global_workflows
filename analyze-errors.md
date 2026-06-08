---
title: Analyze Errors
description: วิเคราะห์ errors จาก run- commands เพื่อหา root cause และจัดลำดับการแก้ไข
auto_execution_mode: 3
---

## Goal

วิเคราะห์ errors จาก output ของ run- commands (run-build, run-test, run-lint, run-typecheck) เพื่อหา root cause และจัดลำดับการแก้ไขอย่างเป็นระบบ

## Scope

Analyze errors จาก:
- Build errors (compilation, dependency)
- Test failures (assertion, timeout)
- Lint errors (style, best practices)
- Type errors (type mismatches, missing types)
- Runtime errors (panic, exceptions)

## Execute

### 1. Collect Error Output

รับ output จาก run- command ล่าสุด:

- อ่าน terminal output หรือ log file
- ดึง errors, warnings, และ diagnostic messages
- บันทึก command ที่รัน และ environment context

### 2. Categorize Errors

แยก errors เป็น categories:

| Category | Examples | Priority |
|----------|----------|----------|
| **Syntax errors** | TypeScript syntax, Rust syntax, ESLint syntax | Critical |
| **Type errors** | Type mismatches, missing types, wrong generic | Critical |
| **Build errors** | Dependency missing, compilation failed, linker error | Critical |
| **Runtime errors** | Panic, exceptions, undefined, null reference | High |
| **Test failures** | Assertion failed, timeout, setup/teardown error | High |
| **Lint errors** | Style violations, unused code, best practices | Medium |
| **Warnings** | Deprecations, unused imports, type inference | Low |

### 3. Rank By Criticality

จัดลำดับความสำคัญของ errors:

**Critical (แก้ทันที):**
- Build failures ที่ block compilation
- Type errors ที่ block compilation
- Syntax errors ที่ block parsing

**High (แก้เร็วๆ):**
- Runtime errors ที่ crash application
- Test failures ที่ block CI/CD
- Missing dependencies

**Medium (แก้ในรอบนี้):**
- Lint errors ที่ block commit
- Warnings ที่อาจกลายเป็น errors

**Low (แก้ภายหลัง):**
- Style issues
- Deprecations
- Unused code

### 4. Find Root Cause Chain

วิเคราะห์ dependency chain ของ errors:

```
Error A (symptom)
  ↓ caused by
Error B (intermediate)
  ↓ caused by
Root Cause (fundamental issue)
```

**Techniques:**
- หา errors ที่อยู่ในไฟล์เดียวกัน
- หา errors ที่เกี่ยวข้องกับ module/package เดียวกัน
- หา patterns ที่ซ้ำกันหลายไฟล์
- หา errors ที่เกิดจาก change เดียวกัน

### 5. Group Related Errors

รวม errors ที่มี root cause เดียวกัน:

**Grouping criteria:**
- Same source file
- Same module/package
- Same error type
- Same dependency
- Same change

**Output:**
```
Group 1: Type errors in src/modules/auth/
  - Error 1: Missing type in user.ts
  - Error 2: Wrong type in session.ts
  - Root cause: Missing User interface

Group 2: Build errors in src/adapters/db/
  - Error 3: Missing dependency
  - Error 4: Compilation failed
  - Root cause: Missing @types/bun
```

### 6. Generate Fix Plan

สร้าง fix plan พร้อมลำดับ:

**Priority 1: Root causes**
- แก้ fundamental issues ก่อน
- แก้ missing dependencies
- แก้ type definitions

**Priority 2: Cascading errors**
- แก้ errors ที่เกิดจาก root cause
- แก้ errors ที่ block compilation
- แก้ errors ที่ block tests

**Priority 3: Isolated errors**
- แก้ errors ที่ไม่เกี่ยวข้องกับ root cause
- แก้ lint errors
- แก้ warnings

**Example fix plan:**
```
1. Add missing @types/bun (root cause)
2. Fix User interface definition (root cause)
3. Fix type errors in user.ts (cascading)
4. Fix type errors in session.ts (cascading)
5. Fix lint errors in auth/ (isolated)
```

### 7. Call Appropriate Workflow

เลือก workflow ที่เหมาะสมตามประเภทของ issues:

**ถ้าเป็น cascade issues:**
- มี errors หลายตัวที่เกี่ยวข้องกัน
- ไม่ชัดเจนว่าอะไรคือ root cause
- → ทำ `/debug-issue`

**ถ้าเป็น isolated errors:**
- errors ชัดเจนและแยกกัน
- รู้วิธีแก้แต่ละอย่าง
- → ทำ `/resolve-errors`

**ถ้าเป็น production incident:**
- ระบบ production หยุดทำงาน
- มีผลกระทบต่อผู้ใช้
- → ทำ `/incident-triage` ก่อน แล้วทำ `/debug-issue`

## Rules

### 1. Core Principles

หลักการพื้นฐานในการแก้ errors

- แก้ root cause ก่อนเสมอ
- แก้ errors ที่ block compilation ก่อน
- แก้ errors ที่มีผลกระทบต่อ tests ก่อน
- แก้ lint errors สุดท้าย

### 2. Error Classification

ใช้ classification table ในการจัดประเภท errors ตามความรุนแรง

- Critical: Build failures, type errors, syntax errors
- High: Runtime errors, test failures
- Medium: Lint errors, warnings
- Low: Style issues, deprecations

### 3. Root Cause Detection

ใช้ dependency chain analysis ในการหา root cause ของ errors

- หา errors ที่อยู่ในไฟล์เดียวกัน
- หา errors ที่เกี่ยวข้องกับ module/package เดียวกัน
- หา patterns ที่ซ้ำกันหลายไฟล์

### 4. Fix Plan Prioritization

ใช้ 3-level prioritization ในการสร้าง fix plan ที่มีประสิทธิภาพ

- Priority 1: Root causes
- Priority 2: Cascading errors
- Priority 3: Isolated errors

### 5. Workflow Selection

ใช้ decision tree ในการเลือก workflow ที่เหมาะสมกับประเภท issues

- Cascade issues → `/debug-issue`
- Isolated errors → `/resolve-errors`
- Production incident → `/incident-triage` → `/debug-issue`

### 6. Batch Error Processing

ใช้ `/use-scripts` สำหรับ errors จำนวนมาก

- ถ้า errors มีจำนวนมากกว่า 10 ตัว ให้ทำ `/use-scripts`
- สร้าง script parser สำหรับ extract error patterns
- ใช้ Bun native APIs สำหรับ file operations
- ลบ scripts หลังใช้งาน

## Expected Outcome

- รู้ว่าต้องแก้อะไรก่อน
- รู้ว่าอะไรคือ root cause
- มี fix plan ที่ชัดเจน
- เลือก workflow ที่เหมาะสม
- ลดการแก้ errors ซ้ำๆ
