---
title: Analyze Architecture
description: วิเคราะห์ architecture patterns, layer boundaries, module coupling, dependency direction
auto_execution_mode: 3
related_workflows:
  - /analyze-structure
  - /analyze-foundation
  - /improve-architecture
  - /follow-architecture
  - /recommend-architecture
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ architecture patterns และ design decisions ระดับสูงของ codebase เพื่อระบุ architectural issues

## Scope

Architecture patterns, layer boundaries, module coupling, dependency direction, separation of concerns, domain boundaries, monolith vs microservices, monorepo structure, shared code strategy

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม architecture metrics ผ่าน scripts (dependency graph, layer violation detection, coupling analysis)

### 2. Identify Architecture Pattern

1. ระบุ architecture pattern ที่ใช้ (layered, clean, hexagonal, modular monolith, microservices)
2. ระบุความสอดคล้องระหว่าง pattern ที่ตั้งใจและ pattern ที่ใช้จริง
3. ระบุ hybrid patterns และ inconsistencies ในการ apply
4. ระบุ missing architectural boundaries ที่ควรมี

### 3. Check Layer Boundaries

1. ระบุ layer violations (UI → database, domain → infrastructure)
2. ระบุ circular dependencies ระหว่าง layers
3. ระบุ bypass ของ abstraction layers (direct database access จาก UI)
4. ระบุ leaky abstractions ที่ส่งผลต่อ layer independence
5. ระบุ missing layer (domain layer ที่หายไป, missing service layer)

### 4. Analyze Module Coupling

1. คำนวณ afferent/efferent coupling ต่อ module
2. ระบุ modules ที่ coupling สูง (imports > 10)
3. ระบุ modules ที่เป็น hub (afferent coupling > 15)
4. ระบุ deep dependency chains (depth > 5)
5. ระบุ dependency direction violations (lower layer → upper layer)

### 5. Check Domain Boundaries

1. ระบุ bounded contexts และ domain boundaries
2. ระบุ cross-domain imports ที่ไม่ผ่าน public API
3. ระบุ shared state ระหว่าง domains
4. ระบุ domain logic ที่กระจายอยู่ในหลาย modules
5. ระบุ missing domain isolation

### 6. Analyze Monorepo Structure

1. ระบุ workspace boundaries และ dependency direction
2. ระบุ shared code ที่ไม่อยู่ใน shared package
3. ระบุ workspace ที่มี coupling สูงกับ workspace อื่น
4. ระบุ missing workspace isolation
5. ระบุ cross-workspace imports ที่ไม่ผ่าน public API

### 7. Check Separation Of Concerns

1. ระบุ modules ที่มีหลาย responsibilities (mixed concerns)
2. ระบุ business logic ใน UI components
3. ระบุ data access logic ใน business layer
4. ระบุ infrastructure concerns ใน domain layer
5. ระบุ missing abstraction ระหว่าง concerns

### 8. Analyze Dependency Injection

1. ระบุ hardcoded dependencies ที่ควรเป็น injected
2. ระบุ missing DI container หรือ service locator
3. ระบุ dependencies ที่สร้างใน module แทนที่จะรับจากภายนอก
4. ระบุ missing interface segregation
5. ระบุ tight coupling ที่แก้ด้วย DI ได้

### 9. Check Architectural Consistency

1. ระบุ patterns ที่ใช้ต่างกันในส่วนเดียวกันของ codebase
2. ระบุ naming conventions ที่ไม่สอดคล้องกับ architecture
3. ระบุ folder structure ที่ไม่สอดคล้องกับ architecture pattern
4. ระบุ missing architectural documentation
5. ระบุ architectural drift จาก original design

### 10. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: layer violations → domain boundaries → coupling → SoC → DI → consistency → pattern alignment

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม location และ severity

### 2. Severity Classification

- **Critical**: layer violations, circular dependencies, missing domain boundaries
- **High**: high coupling, deep dependency chains, missing SoC
- **Medium**: missing DI, architectural inconsistencies, leaky abstractions
- **Low**: missing documentation, minor pattern deviations

### 3. Architecture Pattern Awareness

- ตรวจสอบว่า pattern ที่ใช้เหมาะสมกับ project size และ complexity
- ระบุ over-engineering (microservices สำหรับ small project)
- ระบุ under-engineering (no layers สำหรับ complex project)

### 4. Monorepo Considerations

- ถ้าเป็น monorepo ให้วิเคราะห์ workspace boundaries
- ระบุ shared code strategy ที่ไม่เหมาะสม
- ตรวจสอบ workspace dependency direction

### 5. Use Scripts For Dependency Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ `madge` สำหรับ dependency graph analysis
- ใช้ ast-grep สำหรับ layer violation detection

## Expected Outcome

- Architecture issues ระบุพร้อม pattern, location และ severity
- Layer violations และ coupling issues จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-architecture` หรือ `/refactor`
