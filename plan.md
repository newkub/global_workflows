---
title: Plan
description: วางแผนงานและ architecture
auto_execution_mode: 3
related_workflows:
  - /analyze-project
  - /use-lib-better
  - /use-lib-effective
  - /prioritize
  - /deep-research
  - /use-scripts
  - /follow-content-quality
  - /recommend-architecture
  - /follow-architecture
  - /report-format-table
  - /report-format-file-structure
---

## Goal

วางแผนงานและ architecture อย่างเป็นระบบก่อนเริ่ม implement

## Scope

ครอบคลุมการวางแผน tasks, libraries, implementation path, file architecture, module structure, interfaces, และการ validate แผนงานก่อน implement

## Execute

### 1. Analyze And Research

วิเคราะหาโปรเจกต์และสำรวจ libraries

1. ทำ `/analyze-project` เพื่อวิเคราะหา project structure และ dependencies
2. ระบุ scope และ requirements ของงานที่ต้องทำ
3. ระบุ constraints และ assumptions
4. ถ้า project มี `AGENTS.md` ให้อ่านและทำตาม
5. ทำ `/use-lib-better` เพื่อสำรวจ library alternatives
6. ทำ `/use-lib-effective` เพื่อวิเคราะหา dependencies ที่มีอยู่
7. สำรวจ alternatives อย่างน้อย 2-3 ตัวเลือก
8. ประเมินแต่ละ candidate ตามเกณฑ์: modern, type safety, performance, DX, maintenance
9. บันทึก library ที่เลือกใช้พร้อมเหตุผล

### 2. Define Implementation Path

กำหนดลำดับการ implement ตาม impact order

1. ทำ `/prioritize` เพื่อจัดลำดับ tasks ตาม impact และ effort
2. จัดลำดับ priority: foundation ก่อน, high risk เพื่อ fail fast
3. ระบุ critical path และ dependencies ระหว่าง tasks
4. กำหนด milestones และ timeline พร้อม buffer
5. ระบุ tasks ที่สามารถทำ parallel ได้

### 3. Plan Architecture

วางแผน architecture และ structure

1. ทำ `/refactor` เพื่อขอไอเดียโครงสร้างไฟล์
2. ทำ `/recommend-architecture` เพื่อแนะนำ architecture ที่เหมาะสม
3. วางแผน file architecture โดยจัดกลุ่มตาม responsibility
4. กำหนด naming conventions สำหรับ files และ directories
5. ระบุ barrel files และ entry points
6. วางแผน directory structure แบบ tree พร้อม comment
7. สร้าง file pattern table: File Pattern, Description, Naming, Import
8. แยก modules ตาม domain หรือ feature
9. กำหนด dependencies ระหว่าง modules (high-level → low-level)
10. ระบุ public APIs ของแต่ละ module
11. วางแผน data flow ระหว่าง modules
12. กำหนด module boundaries ชัดเจน
13. ระบุ shared modules และ common utilities
14. กำหนด interfaces สำหรับ module communication
15. กำหนด data contracts (DTOs, entities, value objects)
16. กำหนด API contracts ถ้ามี
17. กำหนด event contracts ถ้ามี
18. ออกแบบ interfaces ตาม interface segregation principle
19. วางแผน integration กับ external services ถ้ามี
20. กำหนด integration patterns (adapters, facades, repositories)
21. วางแผน error handling และ retry logic
22. กำหนด caching strategy
23. วางแผน transaction boundaries
24. ระบุ data validation points

### 4. Plan Test Strategy

วางแผน test strategy

1. ตัดสินใจว่าจะใช้ DDD หรือไม่
2. ออกแบบ test case ที่ครอบคลุม: unit, integration, e2e
3. กำหนด test coverage requirements
4. วางแผน test execution strategy
5. ระบุ test data และ fixtures
6. วางแผน regression test strategy

### 5. Create Documents

สร้าง task document และ architecture document

1. สร้างไฟล์ `.agents/task/<name>-DD-MM-YYYY.md`
2. บันทึก tasks ทั้งหมดพร้อม expected outcome
3. บันทึก library choices พร้อมเหตุผล
4. บันทึก milestones และ timeline พร้อม success criteria
5. บันทึก test strategy และ coverage requirements
6. บันทึก assumptions, constraints, และ risks
7. บันทึก migration plan ถ้ามี breaking changes
8. สร้างไฟล์ `.agents/architecture/<name>-DD-MM-YYYY.md`
9. บันทึก file architecture diagram แบบ tree
10. บันทึก module dependencies และ data flow
11. บันทึก interfaces และ contracts ทั้งหมด
12. บันทึก integration plan และ patterns
13. บันทึก architectural decisions พร้อมเหตุผล
14. บันทึก assumptions และ constraints

### 6. Validate And Report

ตรวจสอบและรายงานแผนงาน

1. ยืนยัน dependencies ไม่ conflict กับ existing versions
2. ทบทวน plan กับ task document เพื่อตรวจสอบความครบถ้วน
3. ตรวจสอบ timeline realistic หรือไม่
4. ตรวจสอบทุก task มี single responsibility และ test ได้
5. ตรวจสอบไม่มี missing tasks หรือ gaps
6. รอยืนยันจาก user ก่อนเริ่ม implement
7. แบ่งงานเป็น tasks ย่อยๆ ตาม `single responsibility`
8. จัดลำดับ tasks ตาม `impact order`
9. ระบุไฟล์ที่จะสร้างใหม่, แก้ไข, หรือลบ
10. ระบุ dependencies ระหว่าง tasks
11. ระบุ risks และ mitigation strategies
12. จัดรูปแบบตาราง tasks ตาม `/report-format-table`
13. แสดง file structure ตาม `/report-format-file-structure`
14. ลงมือทำทันทีหลังรายงาน

## Rules

- ทำ task planning ก่อน code planning เสมอ
- สำรวจ libraries ก่อน implement
- จัดลำดับ implement ตาม impact order: foundation ก่อน, high risk เพื่อ fail fast
- วางโครงสร้างไฟล์ทั้งหมดก่อนเขียน code
- แต่ละ module ต้องมี single responsibility
- Dependencies ควรไปในทิศทางเดียว (high-level → low-level)
- หลีกเลี่ยย circular dependencies
- บันทึก architectural decisions พร้อมเหตุผล
- ต้อง report plan ก่อนลงมือทำ
- ต้องได้รับการยืนยันจาก user ก่อน implement

## Expected Outcome

- Task document ที่ครอบคลุมใน `.agents/task/`
- Architecture document ที่ครอบคลุมใน `.agents/architecture/`
- Library choices ที่มีเหตุผล
- Implementation roadmap ที่ practical และ prioritized
- Timeline ที่ realistic พร้อม buffer
- Test strategy ที่ครอบคลุม
- Risks และ mitigation strategies ที่ชัดเจน
- Report plan พร้อม task table และ file structure
