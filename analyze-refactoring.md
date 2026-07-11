---
title: Analyze Refactoring
description: วิเคราะห์ refactoring readiness, technical debt, code smells priority
auto_execution_mode: 3
related_workflows:
  - /analyze-quality-dimensions
  - /analyze-patterns
  - /analyze-complexity
  - /analyze-srp
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ refactoring readiness เพื่อจัดลำดับ technical debt และ refactoring opportunities

## Scope

Refactoring readiness, technical debt, code smells priority, refactoring safety, test coverage for refactoring

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม refactoring metrics ผ่าน scripts (debt scan, test coverage, complexity analysis)

### 2. Check Technical Debt

1. ระบุ technical debt items (TODO, FIXME, HACK, WORKAROUND)
2. ระบุ deprecated code ที่ยังใช้งาน
3. ระบุ workaround code ที่ควรแก้ให้ถูกต้อง
4. ระบุ missing abstraction layers
5. ระบุ missing interface segregation

### 3. Check Refactoring Safety

1. ระบุ code ที่ไม่มี test coverage เพียงพอสำหรับ refactoring
2. ระบุ missing characterization tests
3. ระบุ missing integration tests สำหรับ critical paths
4. ระบุ missing type safety ที่ป้องกัน regression
5. ระบุ missing snapshot tests สำหรับ stable outputs

### 4. Check Refactoring Priority

1. ระบุ high-traffic code ที่ซับซ้อน (high impact + high complexity)
2. ระบุ frequently changed code ที่ซับซ้อน (churn + complexity)
3. ระบุ bug-prone code ที่ซับซ้อน (bug history + complexity)
4. ระบุ missing refactoring roadmap
5. ระบุ missing refactoring tickets/issues

### 5. Check Refactoring Opportunities

1. ระบุ Extract Method opportunities
2. ระบุ Extract Class opportunities
3. ระบุ Replace Conditional with Polymorphism
4. ระบุ Simplify Conditional Expressions
5. ระบุ Remove Dead Code opportunities

### 6. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: refactoring safety → technical debt → refactoring priority → opportunities

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม file:line และ severity

### 2. Severity Classification

- **Critical**: no tests สำหรับ critical code, high complexity + high traffic
- **High**: high technical debt, missing characterization tests, frequently changed complex code
- **Medium**: missing abstraction, deprecated code, workaround code
- **Low**: missing refactoring roadmap, missing snapshot tests, TODO without priority

### 3. Use Scripts For Refactoring Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ TODO/FIXME detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- Refactoring opportunities ระบุพร้อม priority และ severity
- พร้อมสำหรับ `/refactor` หรือ `/prioritize`
