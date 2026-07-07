---
title: Analyze Complexity
description: วิเคราะห์ cyclomatic complexity, cognitive complexity, function/file length, nesting depth
auto_execution_mode: 3
related_workflows:
  - /analyze-code-patterns
  - /analyze-foundation
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ code complexity เพื่อระบุ functions และ files ที่ซับซ้อนเกินไป

## Scope

Cyclomatic complexity, cognitive complexity, function length, file length, nesting depth, parameter count

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม complexity metrics ผ่าน scripts (function scan, nesting analysis, parameter count)

### 2. Check Cyclomatic Complexity

1. ระบุ functions ที่มี cyclomatic complexity > 10
2. ระบุ functions ที่มี cyclomatic complexity > 15 (critical)
3. ระบุ missing switch/if/else refactoring opportunities
4. ระบุ missing early return patterns
5. ระบุ missing guard clauses

### 3. Check Cognitive Complexity

1. ระบุ functions ที่มี cognitive complexity สูง
2. ระบุ nested loops ที่ซ้อนกันเกิน 2 ระดับ
3. ระบุ mixed abstraction levels ใน function เดียว
4. ระบุ missing function extraction สำหรับ complex blocks
5. ระบุ recursive functions ที่ไม่มี termination guard

### 4. Check Function And File Length

1. ระบุ functions ที่ยาวเกิน 50 บรรทัด
2. ระบุ files ที่ยาวเกิน 250 บรรทัด
3. ระบุ classes ที่มี methods มากเกินไป (> 20)
4. ระบุ missing function splitting opportunities
5. ระบุ missing file splitting opportunities

### 5. Check Nesting Depth

1. ระบุ nesting depth > 3 ระดับ
2. ระบุ callback hell patterns
3. ระบุ missing promise chaining
4. ระบุ missing async/await flattening
5. ระบุ missing optional chaining

### 6. Check Parameter Count

1. ระบุ functions ที่มี parameters > 4 ตัว
2. ระบุ missing parameter object pattern
3. ระบุ missing default parameter values
4. ระบุ missing rest parameters
5. ระบุ boolean flag parameters ที่ควรแยก function

### 7. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: cyclomatic complexity → cognitive complexity → function length → nesting depth → file length → parameter count

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม file:line และ severity

### 2. Severity Classification

- **Critical**: complexity > 15, nesting > 5, file > 500 บรรทัด
- **High**: complexity > 10, function > 50 บรรทัด, nesting > 3
- **Medium**: file > 250 บรรทัด, parameters > 4, callback hell
- **Low**: missing guard clauses, missing early returns, boolean flags

### 3. Use Scripts For Complexity Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ nested block detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- Complexity hotspots ระบุพร้อม file:line และ severity
- พร้อมสำหรับ `/refactor` หรือ `/simplify-code`
