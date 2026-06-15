---
title: Refactor To Single Package Responsibility
description: ตัดสินใจเมื่อไหร่ควร refactor packages ตาม SRP ด้วย cohesion และ change analysis
auto_execution_mode: 3
related_workflows:
  - /refactor-to-module-single-responsibility
  - /refactor-to-modules
  - /deep-refactor
---

## Goal

ตัดสินใจเมื่อไหร่ควร refactor packages ตาม Single Responsibility Principle (SRP) โดยเน้น cohesion, change frequency, และ deployment boundaries เพื่อความ maintainable และ reusable

## Scope

ครอบคลุมการตัดสินใจว่าควร refactor packages หรือไม่, ประเมิน cohesion, change frequency, deployment boundaries, และหลีกเลี่ยง over-refactoring สำหรับ monorepos และ multi-package projects

## Execute

### 1. Evaluate Package Complexity

ประเมินว่า package ซับซ้อนเกินไปหรือไม่

1. ทำ `/analyze-project` เพื่อดูภาพรวมโปรเจกต์
2. ตรวจสอบ cognitive complexity และ navigability ของ package
3. ระบุ reasons to change ที่หลากหลาย
4. ตรวจสอบ coupling ระหว่าง concerns ภายใน package
5. ประเมิน test setup complexity
6. ตรวจสอบ dependencies ที่ไม่จำเป็น

### 2. Analyze Change Patterns

วิเคราะห์ patterns การเปลี่ยนแปลงของ package

- ส่วนต่างๆ ของ package เปลี่ยนพร้อมกันหรือไม่
- ถูก maintain โดยทีมเดียวกันหรือไม่
- มี release lifecycle เดียวกันหรือไม่
- concerns เหล่านี้ evolve แยกกันหรือไม่
- ถูกใช้โดย packages อื่นด้วย patterns เดียวกันหรือไม่

### 3. Assess Refactor Necessity

ตัดสินใจว่าควร refactor หรือไม่

- Package มีหลาย reasons to change
- Package ยากต่อการ test เพราะ concerns ปนกัน
- Package มี coupling สูงระหว่าง concerns
- Package ไม่ appropriately coupled
- Package ยากต่อการ understand และ maintain
- Package มี dependencies ที่ไม่จำเป็น
- Package ไม่ reusable ตามที่ควรจะเป็น

### 4. Consider Deployment Boundaries

พิจารณา deployment และ versioning boundaries

- พิจารณา deployment boundary และ versioning strategy
- อย่าแยก concerns ที่ deploy ร่วมกันเสมอโดยไม่จำเป็น
- พิจารณาว่า concerns มี deployment cohesion หรือไม่
- พิจารณา semantic versioning impact

### 5. Plan Refactor Strategy

วางแผนการ refactor ถ้าจำเป็น

1. ทำ `/refactor-to-module-single-responsibility` เพื่อแยก modules ภายใน package
2. ทำ `/deep-refactor` เพื่อ verify ด้วย typecheck และ tests
3. จัดลำดับ dependencies ระหว่าง packages ให้ชัดเจน
4. สร้าง abstractions เมื่อจำเป็นและ beneficial
5. ทำ `/improve-naming` เพื่อตั้งชื่อที่สื่อความหมาย
6. วางแผน versioning strategy สำหรับ packages ใหม่

### 6. Verify Refactor Impact

ตรวจสอบผลกระทบของ refactor

1. ทำ `/run-test` เพื่อยืนยัน functionality
2. ทำ `/run-lint` เพื่อตรวจสอบ code quality
3. ประเมินว่า package ดีขึ้นหรือไม่
4. ตรวจสอบว่าไม่เกิด circular dependencies ระหว่าง packages
5. ประเมินว่าไม่เกิด fragmentation
6. ตรวจสอบว่า consumers ยังใช้งานได้

### 7. Update References

อัปเดท references ทั้งหมดที่เกี่ยวข้อง

1. ทำตาม `@[/edit-relative]`
2. อัปเดท `package.json` dependencies
3. อัปเดท import paths ในทุก packages

## Rules

### 1. Cohesion First

Prefer high cohesion over artificial separation

- ไม่แยก packages เพื่อ conceptual purity เท่านั้น
- รวม code ที่ changes together, deploys together, tests together
- รวม code ที่ understood better together
- หลีกเลี่ยง fragmentation ที่เพิ่ม cognitive load
- พิจารณา dependency graph complexity

### 2. When To Refactor

Refactor เมื่อ:

- Package มีหลาย reasons to change
- Package ยากต่อการ test เพราะ concerns ปนกัน
- Package มี coupling สูงระหว่าง concerns
- Package ไม่ appropriately coupled
- Package ยากต่อการ understand
- Package มี dependencies ที่ไม่จำเป็น
- Package ไม่ reusable ตามที่ควรจะเป็น

### 3. When Not To Refactor

ไม่ refactor เมื่อ:

- Package มี single responsibility ชัดเจน
- Package ยาวแต่ cohesive สูง
- Package ไม่มีปัญหาในการ test
- Package changes together, deploys together
- Refactor จะทำลาย stability หรือเพิ่ม fragmentation
- Refactor จะเพิ่ม dependency graph complexity มากเกินไป

### 4. Appropriate Coupling

Package appropriately coupled เมื่อ:

- ใช้ abstractions เมื่อจำเป็นและ beneficial
- ไม่ lock implementation โดยไม่จำเป็น
- ใช้ language idioms อย่างเหมาะสม
- สามารถ isolate ได้เมื่อจำเป็น
- มี clear interfaces เมื่อจำเป็น
- Dependencies ระหว่าง packages ชัดเจนและจำเป็น

### 5. Over-Refactoring Signs

หลีกเลี่ยง over-refactoring เมื่อ:

- แยก packages เล็กเกินไป (micro-packages)
- สร้าง abstractions ที่ไม่จำเป็น
- เพิ่ม complexity โดยไม่ได้ผล
- แยกโดยไม่พิจารณา usage patterns
- สร้าง dependencies ที่ซับซ้อน
- แยกแล้วต้องส่ง dependencies เยอะ
- เพิ่ม dependency graph depth มากเกินไป

### 6. Monorepo Principles

หลักการสำหรับ monorepos

- Single Responsibility Principle (SRP) - one reason to change
- High Cohesion, Low Coupling
- Separation of Concerns
- Change Frequency Analysis
- Deployment Boundary Awareness
- Versioning Strategy Consistency
- Dependency Graph Manageability

### 7. Refactor Signals

ใช้ signals เหล่านี้เพื่อตัดสินใจ:

| Signal | Meaning | Refactor? |
|--------|---------|-----------|
| เปลี่ยนหลายเหตุผล | ต่ำ cohesion | ✅ |
| Test setup ยุ่ง | concern ปน | ✅ |
| แก้ bug แล้วกระทบหลายส่วน | coupling สูง | ✅ |
| แยกแล้ว import วน | boundary ผิด | ❌ |
| แยกแล้วต้องส่ง dependency เยอะ | over-splitting | ❌ |
| คนอ่านต้องเปิด 8 files | fragmentation | ❌ |
| ทุกอย่างเปลี่ยนพร้อมกันเสมอ | same lifecycle | ❌ |
| Dependencies วนกัน | circular deps | ❌ |
| Versioning ซับซ้อน | boundary ผิด | ❌ |

## Expected Outcome

- Packages ที่มี single responsibility เมื่อจำเป็น
- Packages ที่ appropriately coupled
- High cohesion และ low coupling
- ไม่ over-refactor
- Code ที่ maintainable และ reusable
- Dependencies ที่ชัดเจน
- Dependency graph ที่จัดการได้
- Versioning strategy ที่สม่ำเสมอ

## Common Mistakes

- Refactor เมื่อไม่จำเป็น
- Over-refactor จนเกินไป
- ไม่พิจารณา change frequency
- แยกโดยไม่ดู usage patterns
- สร้าง abstractions ที่ไม่จำเป็น
- ไม่ verify ผลกระทบ
- แยกโดยไม่พิจารณา deployment boundaries
- ไม่พิจารณา versioning impact
- สร้าง circular dependencies

## Anti-Patterns

- ❌ Refactor ทุก package โดยไม่ประเมิน
- ❌ แยก packages เล็กเกินไป
- ❌ สร้าง abstractions ที่ไม่ใช้
- ❌ Refactor โดยไม่ดู impact
- ❌ แยก concerns ที่ operate ร่วมกัน
- ❌ ไม่ verify ด้วย tests
- ❌ ใช้ language idioms ผิด
- ❌ สร้าง dependency graph ที่ซับซ้อน
- ❌ ไม่พิจารณา versioning strategy
