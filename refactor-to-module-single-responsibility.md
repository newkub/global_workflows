---
title: Refactor To Module Single Responsibility
description: ตัดสินใจเมื่อไหร่ควร refactor modules ตาม SRP ด้วย cohesion และ change analysis
auto_execution_mode: 3
related_workflows:
  - /refactor-file-to-single-responsibility
  - /refactor-to-single-package-responsibility
  - /deep-refactor
---

## Goal

ตัดสินใจเมื่อไหร่ควร refactor modules ตาม Single Responsibility Principle (SRP) โดยเน้น cohesion, change frequency, และ runtime boundaries เพื่อความ maintainable และ testable

## Scope

ครอบคลุมการตัดสินใจว่าควร refactor modules หรือไม่, ประเมิน cohesion, change frequency, runtime boundaries, และหลีกเลี่ยง over-refactoring สำหรับทุกภาษาและ architecture

## Execute

### 1. Evaluate Module Complexity

ประเมินว่า module ซับซ้อนเกินไปหรือไม่

1. ทำ `/analyze-project` เพื่อดูภาพรวมโปรเจกต์
2. ตรวจสอบ cognitive complexity และ navigability ของ module
3. ระบุ reasons to change ที่หลากหลาย
4. ตรวจสอบ coupling ระหว่าง concerns
5. ประเมิน test setup complexity

### 2. Analyze Change Patterns

วิเคราะห์ patterns การเปลี่ยนแปลงของ module

- ส่วนต่างๆ ของ module เปลี่ยนพร้อมกันหรือไม่
- ถูก maintain โดยทีมเดียวกันหรือไม่
- มี release lifecycle เดียวกันหรือไม่
- concerns เหล่านี้ evolve แยกกันหรือไม่

### 3. Assess Refactor Necessity

ตัดสินใจว่าควร refactor หรือไม่

- Module มีหลาย reasons to change
- Module ยากต่อการ test เพราะ concerns ปนกัน
- Module มี coupling สูงระหว่าง concerns
- Module ไม่ appropriately coupled
- Module ยากต่อการ understand และ maintain

### 4. Consider Runtime Boundaries

พิจารณา runtime และ deployment boundaries

- พิจารณา runtime boundary และ deployment boundary
- อย่าแยก concerns ที่ operate ร่วมกันตลอดเวลาโดยไม่จำเป็น
- พิจารณาว่า concerns มี deployment cohesion หรือไม่

### 5. Plan Refactor Strategy

วางแผนการ refactor ถ้าจำเป็น

1. ทำ `/refactor-file-to-single-responsibility` เพื่อแยก functions
2. ทำ `/deep-refactor` เพื่อ verify ด้วย typecheck และ tests
3. จัดลำดับ dependencies ให้ชัดเจน
4. สร้าง abstractions เมื่อจำเป็นและ beneficial
5. ทำ `/improve-naming` เพื่อตั้งชื่อที่สื่อความหมาย

### 6. Verify Refactor Impact

ตรวจสอบผลกระทบของ refactor

1. ทำ `/run-test` เพื่อยืนยัน functionality
2. ทำ `/run-lint` เพื่อตรวจสอบ code quality
3. ประเมินว่า module ดีขึ้นหรือไม่
4. ตรวจสอบว่าไม่เกิด circular dependencies
5. ประเมินว่าไม่เกิด fragmentation

### 7. Update References

อัปเดท references ทั้งหมดที่เกี่ยวข้อง

1. ทำตาม `@[/edit-relative]`

## Rules

### 1. Cohesion First

Prefer high cohesion over artificial separation

- ไม่แยก modules เพื่อ conceptual purity เท่านั้น
- รวม code ที่ changes together, deploys together, tests together
- รวม code ที่ understood better together
- หลีกเลี่ยง fragmentation ที่เพิ่ม cognitive load

### 2. When To Refactor

Refactor เมื่อ:

- Module มีหลาย reasons to change
- Module ยากต่อการ test เพราะ concerns ปนกัน
- Module มี coupling สูงระหว่าง concerns
- Module ไม่ appropriately coupled
- Module ยากต่อการ understand

### 3. When Not To Refactor

ไม่ refactor เมื่อ:

- Module มี single responsibility ชัดเจน
- Module ยาวแต่ cohesive สูง
- Module ไม่มีปัญหาในการ test
- Module changes together, deploys together
- Refactor จะทำลาย stability หรือเพิ่ม fragmentation

### 4. Appropriate Coupling

Module appropriately coupled เมื่อ:

- ใช้ abstractions เมื่อจำเป็นและ beneficial
- ไม่ lock implementation โดยไม่จำเป็น
- ใช้ language idioms อย่างเหมาะสม
- สามารถ isolate ได้เมื่อจำเป็น
- มี clear interfaces เมื่อจำเป็น

### 5. Over-Refactoring Signs

หลีกเลี่ยง over-refactoring เมื่อ:

- แยก modules เล็กเกินไป (micro-modules)
- สร้าง abstractions ที่ไม่จำเป็น
- เพิ่ม complexity โดยไม่ได้ผล
- แยกโดยไม่พิจารณา usage patterns
- สร้าง dependencies ที่ซับซ้อน
- แยกแล้วต้องส่ง dependencies เยอะ

### 6. Language-Agnostic Principles

หลักการที่ใช้ได้กับทุกภาษา

- Single Responsibility Principle (SRP) - one reason to change
- High Cohesion, Low Coupling
- Separation of Concerns
- Change Frequency Analysis
- Runtime Boundary Awareness

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

## Expected Outcome

- Modules ที่มี single responsibility เมื่อจำเป็น
- Modules ที่ appropriately coupled
- High cohesion และ low coupling
- ไม่ over-refactor
- Code ที่ maintainable และ testable
- Dependencies ที่ชัดเจน
- ใช้ได้กับทุกภาษา

## Common Mistakes

- Refactor เมื่อไม่จำเป็น
- Over-refactor จนเกินไป
- ไม่พิจารณา change frequency
- แยกโดยไม่ดู usage patterns
- สร้าง abstractions ที่ไม่จำเป็น
- ไม่ verify ผลกระทบ
- แยกโดยไม่พิจารณา runtime boundaries

## Anti-Patterns

- ❌ Refactor ทุก module โดยไม่ประเมิน
- ❌ แยก modules เล็กเกินไป
- ❌ สร้าง abstractions ที่ไม่ใช้
- ❌ Refactor โดยไม่ดู impact
- ❌ แยก concerns ที่ operate ร่วมกัน
- ❌ ไม่ verify ด้วย tests
- ❌ ใช้ language idioms ผิด

