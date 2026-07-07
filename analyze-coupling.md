---
title: Analyze Coupling
description: วิเคราะห์ module coupling, circular dependencies, dependency direction, import depth
auto_execution_mode: 3
related_workflows:
  - /analyze-code-patterns
  - /analyze-architecture
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ module coupling เพื่อระบุ tight coupling และ circular dependencies

## Scope

Module coupling, circular dependencies, dependency direction, import depth, afferent/efferent coupling

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม coupling metrics ผ่าน scripts (import graph, dependency direction, circular detection)

### 2. Check Circular Dependencies

1. ระบุ circular dependencies ทั้งหมดใน codebase
2. ระบุ self-referencing modules
3. ระบุ indirect circular dependencies (A → B → C → A)
4. ระบุ missing dependency injection opportunities
5. ระบุ missing interface segregation สำหรับ breaking cycles

### 3. Check Coupling Levels

1. ระบุ modules ที่มี afferent coupling สูง (imported by many)
2. ระบุ modules ที่มี efferent coupling สูง (imports many)
3. ระบุ tight coupling (content coupling, common coupling)
4. ระบุ missing loose coupling patterns (data coupling, message coupling)
5. ระบุ missing abstraction layer ระหว่าง modules

### 4. Check Dependency Direction

1. ระบุ dependency direction violations (lower layer imports higher layer)
2. ระบุ cross-layer imports ที่ไม่ผ่าน interface
3. ระบุ missing dependency inversion
4. ระบุ missing dependency rule enforcement
5. ระบุ domain layer ที่ import infrastructure

### 5. Check Import Depth

1. ระบุ import chains ที่ยาวเกินไป (> 5 levels)
2. ระบุ missing barrel exports สำหรับ reducing depth
3. ระบุ missing module boundaries
4. ระบุ transitive dependencies ที่ไม่จำเป็น
5. ระบุ missing lazy loading สำหรับ heavy modules

### 6. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: circular dependencies → coupling levels → dependency direction → import depth

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม module path และ severity

### 2. Severity Classification

- **Critical**: circular dependencies, dependency direction violations
- **High**: tight coupling, high afferent/efferent coupling, cross-layer imports
- **Medium**: long import chains, missing barrel exports, transitive dependencies
- **Low**: missing lazy loading, missing module boundaries

### 3. Use Scripts For Coupling Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ `madge` สำหรับ circular dependency detection
- ใช้ ast-grep สำหรับ import pattern detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- Coupling issues ระบุพร้อม module path และ severity
- พร้อมสำหรับ `/refactor` หรือ `/fix-circular-dependencies`
