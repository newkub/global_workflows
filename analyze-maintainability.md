---
title: Analyze Maintainability
description: วิเคราะห์ maintainability index, changeability, testability, readability
auto_execution_mode: 3
related_workflows:
  - /analyze-quality-dimensions
  - /analyze-complexity
  - /analyze-test
  - /analyze-srp
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ maintainability เพื่อระบุ code ที่ยากต่อการบำรุงรักษา

## Scope

Maintainability index, changeability, testability, readability, modifiability, stability

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม maintainability metrics ผ่าน scripts (complexity scan, test coverage, dependency analysis)

### 2. Check Maintainability Index

1. ระบุ modules ที่มี maintainability index ต่ำ (< 65)
2. ระบุ modules ที่มี high complexity + low coverage
3. ระบุ modules ที่มี high coupling + low cohesion
4. ระบุ modules ที่มี high churn (frequently changed)
5. ระบุ modules ที่มี high defect rate

### 3. Check Changeability

1. ระบุ rigid modules (hard to change without breaking others)
2. ระบุ fragile modules (changes break unexpected parts)
3. ระบุ immobile modules (hard to reuse)
4. ระบุ viscous modules (hard to change correctly)
5. ระบุ missing design for change patterns

### 4. Check Testability

1. ระบุ modules ที่ hard to test (high dependencies)
2. ระบุ missing test doubles (mocks, stubs, fakes)
3. ระบุ missing test utilities
4. ระบุ missing test fixtures
5. ระบุ missing test factories

### 5. Check Readability

1. ระบุ unclear naming
2. ระบุ missing comments สำหรับ complex logic
3. ระบุ inconsistent code style
4. ระบุ missing code documentation
5. ระบุ missing architectural decision records (ADR)

### 6. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: maintainability index → changeability → testability → readability

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม module path และ severity

### 2. Severity Classification

- **Critical**: MI < 50, rigid + fragile modules, untestable critical code
- **High**: MI < 65, high churn + high complexity, missing test utilities
- **Medium**: high coupling, missing ADR, inconsistent style
- **Low**: missing comments, missing fixtures, missing factories

### 3. Use Scripts For Maintainability Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ `/use-scripts` สำหรับ metrics calculation
- ใช้ ast-grep สำหรับ dependency pattern detection

## Expected Outcome

- Maintainability issues ระบุพร้อม module path และ severity
- พร้อมสำหรับ `/refactor` หรือ `/improve-code-quality`
