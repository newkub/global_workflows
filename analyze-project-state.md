---
title: Analyze Project State
description: วิเคราะห์ project state: documentation, content quality, features, errors, missing implementation
auto_execution_mode: 3
related_workflows:
  - /analyze-documentation
  - /analyze-content-quality
  - /analyze-features
  - /analyze-errors
  - /analyze-missing-implementation
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ project state และ completeness ของ codebase

## Scope

Documentation, content quality, features, errors, missing implementation

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม project state metrics ผ่าน scripts (doc scan, TODO detection, error analysis)

### 2. Analyze Documentation

1. ทำ `/analyze-documentation` วิเคราะห์ README, API docs, JSDoc, changelog, examples
2. ทำ `/analyze-content-quality` วิเคราะห์ content accuracy, completeness, clarity, consistency ใน docs/content

### 3. Analyze Features And Gaps

1. ทำ `/analyze-features` วิเคราะห์และจัดระเบียบ features ใน project
2. ทำ `/analyze-missing-implementation` วิเคราะห์สิ่งที่ขาดหายไปใน codebase

### 4. Analyze Errors

1. ถ้ามี errors จากการ run commands ให้ทำ `/analyze-errors` เพื่อหา root cause

### 5. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: missing implementation → errors → documentation → content quality → features

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม severity

### 2. Conditional Execution

- ถ้า project ไม่มี errors ให้ข้าม `/analyze-errors`
- ถ้า project ไม่มี features ที่ซับซ้อน ให้ข้าม `/analyze-features`

### 3. Severity Classification

- **Critical**: missing critical implementation, unresolved errors
- **High**: missing API docs, missing README, missing changelog
- **Medium**: inconsistent documentation, missing examples, content gaps
- **Low**: missing JSDoc, missing content clarity, feature organization

### 4. Use Scripts For Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ TODO/FIXME detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

### 5. Non-Redundancy

- แต่ละ sub-workflow มี scope ที่ไม่ทับซ้อนกัน
- ใช้ references แทนการเขียนซ้ำเนื้อหาจาก sub-workflows

## Expected Outcome

- Project state gaps ระบุพร้อม severity
- พร้อมสำหรับ orchestrator consolidation หรือ `/improve-completeness`
