---
title: Analyze SRP
description: วิเคราะห์ Single Responsibility Principle violations, mixed concerns, God modules
auto_execution_mode: 3
related_workflows:
  - /analyze-cohesion
  - /analyze-coupling
  - /analyze-complexity
  - /analyze-structure
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ Single Responsibility Principle (SRP) violations เพื่อระบุ modules และ files ที่มี multiple reasons to change

## Scope

SRP violations, mixed concerns, God classes/modules, reason-to-change analysis, export count, route file thickness, module boundary analysis

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม SRP metrics ผ่าน scripts (concern detection, export count, file length, module breakdown)

### 2. Detect Mixed Concerns

1. ระบุ files ที่มี 3+ concerns ผสมกัน (เช่น server + form + state + render)
2. ระบุ files ที่มี server-side และ client-side logic ผสมกัน
3. ระบุ files ที่มี data-fetch + form + validation ผสมกัน
4. ระบุ files ที่มี routing + business logic + rendering ผสมกัน
5. ระบุ files ที่มี auth + data access + rendering ผสมกัน

### 3. Detect God Classes And God Modules

1. ระบุ classes ที่มี methods > 7
2. ระบุ modules ที่มี files > 15
3. ระบุ files ที่มี exports > 5
4. ระบุ files ที่มี lines > 250
5. ระบุ modules ที่มี avg concerns/file > 2

### 4. Analyze Reasons To Change

1. ระบุ modules ที่มี multiple actors ที่ต้องการเปลี่ยนแปลง (stakeholder analysis)
2. ระบุ files ที่เปลี่ยนบ่อยเพราะหลาย reason (git history analysis)
3. ระบุ modules ที่มี mixed business rules จากหลาย domains
4. ระบุ files ที่มี mixed abstraction levels
5. ระบุ modules ที่รับผิดชอบหลาย use cases ที่ไม่เกี่ยวข้องกัน

### 5. Check Route File Thickness

1. ระบุ route files ที่มี business logic (should be thin)
2. ระบุ route files ที่มี data fetching logic (should delegate)
3. ระบุ route files ที่มี form handling (should extract)
4. ระบุ route files ที่มี 3+ concerns
5. ระบุ route files ที่มี lines > 100

### 6. Check Module Boundaries

1. ระบุ modules ที่ควร split ตาม responsibility
2. ระบุ missing module separation ตาม concern
3. ระบุ modules ที่มี leaking implementation details
4. ระบุ modules ที่ไม่มี clear public API
5. ระบุ shared utilities ที่ควรเป็น feature-specific

### 7. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: mixed concerns → God classes/modules → reasons to change → route thickness → module boundaries

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม file path และ severity

### 2. Severity Classification

- **Critical**: 5+ concerns ใน file เดียว, God class (>10 methods), server+client mix
- **High**: 3+ concerns, exports > 5, route files with logic, lines > 250
- **Medium**: 2 concerns, missing module split, mixed abstraction levels
- **Low**: missing public API, leaking details, single function modules

### 3. Use Scripts For SRP Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ concern detection และ export counting
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์
- ใช้ `sg outline` สำหรับ structure analysis ตาม `/analyze-structure`

### 4. Non-Redundancy

- SRP เป็น subset ของ cohesion ใช้ `/analyze-cohesion` สำหรับ broader analysis
- ใช้ `/analyze-coupling` สำหรับ dependency analysis ไม่ทับซ้อนกับ SRP
- ใช้ `/analyze-complexity` สำหรับ complexity metrics ไม่ทับซ้อนกับ SRP

## Expected Outcome

- SRP violations ระบุพร้อม file path, concerns list และ severity
- พร้อมสำหรับ `/refactor`, `/restructure` หรือ `/improve-cohesion`
