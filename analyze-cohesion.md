---
title: Analyze Cohesion
description: วิเคราะห์ module cohesion, SRP adherence, feature grouping, responsibility analysis
auto_execution_mode: 3
related_workflows:
  - /analyze-code-patterns
  - /analyze-structure
  - /analyze-srp
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ module cohesion เพื่อระบุ SRP violations และ low cohesion

## Scope

Module cohesion, SRP adherence, feature grouping, responsibility analysis, module boundaries

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม cohesion metrics ผ่าน scripts (function grouping, responsibility scan, module analysis)

### 2. Check SRP Adherence

1. ระบุ modules ที่มี multiple responsibilities
2. ระบุ functions ที่ทำหน้าที่หลายอย่าง
3. ระบุ classes ที่มี reasons to change มากเกินไป
4. ระบุ missing module splitting ตาม responsibility
5. ระบุ mixed concerns ใน single module

### 3. Check Feature Grouping

1. ระบุ features ที่กระจายอยู่หลาย modules
2. ระบุ missing feature-based organization
3. ระบุ shared code ที่ควรเป็น feature-specific
4. ระบุ missing feature modules
5. ระบุ cross-feature dependencies ที่ไม่จำเป็น

### 4. Check Module Boundaries

1. ระบุ modules ที่ขนาดใหญ่เกินไป
2. ระบุ modules ที่เล็กเกินไป (single function modules)
3. ระบุ missing module encapsulation
4. ระบุ leaking internal implementation
5. ระบุ missing public/private separation

### 5. Check Responsibility Analysis

1. ระบุ modules ที่มี cohesive complexity ต่ำ (LCOM)
2. ระบุ missing interface-based cohesion
3. ระบุ missing functional cohesion
4. ระบุ temporal/procedural cohesion ที่ควรเป็น functional
5. ระบุ coincidental cohesion (worst type)

### 6. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: SRP adherence → module boundaries → feature grouping → responsibility analysis

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม module path และ severity

### 2. Severity Classification

- **Critical**: multiple responsibilities, coincidental cohesion, leaking internals
- **High**: mixed concerns, missing module splitting, low LCOM
- **Medium**: missing feature modules, cross-feature dependencies, temporal cohesion
- **Low**: single function modules, missing encapsulation, procedural cohesion

### 3. Use Scripts For Cohesion Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ function grouping detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- Cohesion issues ระบุพร้อม module path และ severity
- พร้อมสำหรับ `/refactor` หรือ `/restructure`
