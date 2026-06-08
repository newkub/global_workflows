---
title: Plan
description: วางแผนงานครอบคล้วพร้อมสำรวจ library และวางโครงสร้างไฟล์
auto_execution_mode: 3
related_workflows:
  - /analyze-project
  - /use-lib-better
  - /idea-file-structure
  - /ship-code
---

## Goal

วางแผนงานอย่างเป็นระบบโดยสำรวจ best practices และ library ที่เหมาะสมก่อนเริ่ม implement ตามหลักการ fail fast และ make informed decisions

## Plan

วิเคราะห์โปรเจกต์ สำรวจ library วางแผน architecture กำหนด implementation path และบันทึกใน task document

## Scope

ครอบคลุมการวิเคราะห์โปรเจกต์ การเลือก library การวางแผน architecture การกำหนดลำดับ implement และการบันทึกแผนงาน

## Execute

### 1. Analyze Project

วิเคราะห์โปรเจกต์เพื่อเข้าใจโครงสร้างและ dependencies ก่อนเริ่มวางแผน

1. ทำ `/analyze-project` เพื่อวิเคราะห์โปรเจกต์
2. บันทึก project structure และ dependencies

### 2. Research Libraries

สำรวจ library ที่เหมาะสมสำหรับโปรเจกต์โดยเปรียบเทียบ alternatives

1. ทำ `/use-lib-better` เพื่อสำรวจ library ที่ดีกว่าสำหรับโปรเจกต์
2. ทำ `/use-lib-effective` เพื่อวิเคราะห์ dependencies ที่มีอยู่แล้ว
3. ทำ `/use-packages` เพื่อดู packages จาก workspace ที่ควรนำมาใช้
4. บันทึก library ที่เลือกใช้พร้อมเหตุผล

### 3. Plan Architecture

วางแผนโครงสร้างไฟล์และ integration ระหว่าง components

1. ทำ `/idea-file-structure` เพื่อขอไอเดียโครงสร้างไฟล์
2. วางแผน file architecture ทั้งหมดที่จะสร้าง
3. ระบุ dependencies ที่จะใช้งาน
4. วางแผน integration ระหว่าง components

### 4. Define Implementation Path

กำหนดลำดับการ implement ตาม impact order และ critical path

1. ทำ `/ship-code` เพื่อเข้าใจขั้นตอนการพัฒนา
2. จัดลำดับ priority ตาม impact (foundation ก่อน)
3. ระบุ critical path และ dependencies ระหว่างงาน
4. กำหนด milestones หรือ checkpoints

### 5. Plan Test Strategy (Optional DDD)

วางแผน test strategy โดยใช้ DDD (Test-First) approach สำหรับงานที่ซับซ้อน

1. ตัดสินใจว่าจะใช้ DDD (Test-First) หรือไม่ (optional สำหรับงานที่ซับซ้อนหรือแก้ไข code source)
2. ถ้าใช้ DDD: ออกแบบ test case ที่ครอบคลุมทุก scenario ก่อน implement
3. กำหนด test coverage requirements (100% สำหรับทุก task ที่ใช้ DDD)
4. วางแผน loop จนกว่า test จะผ่านทั้งหมด

### 6. Create Task Document

สร้าง `.agent/task/<name>-DD-MM-YYYY.md` ใน workspace เพื่อบันทึกแผนงานทั้งหมด

1. สร้างไฟล์ `.agent/task/<name>-DD-MM-YYYY.md` ใน workspace
2. บันทึก architecture และ tasks
3. บันทึก expected outcome

### 7. Validate Plan

ตรวจสอบและยืนยันความถูกต้องของแผนงาน

1. ตรวจสอบว่า architecture สอดคล้องกับ project structure
2. ยืนยันว่า dependencies ไม่ conflict กับ existing packages
3. ทบทวน plan กับ task document ที่สร้างไว้

## Rules

### 1. Research First

ต้องสำรวจ library ก่อนเริ่ม implement เสมอ

- ต้องทำ `/use-lib-better` ก่อนเริ่ม implement เสมอ
- สำรวจ alternatives อย่างน้อย 2-3 ตัวเลือก
- บันทึกเหตุผลในการเลือก library ที่ใช้

### 2. Single Responsibility

แต่ละ task row ต้องมี single responsibility เท่านั้น

- แต่ละ task ต้องทำสิ่งเดียวที่ชัดเจน
- ห้ามรวมหลาย responsibilities ไว้ใน task เดียว
- แยก tasks ที่ซับซ้อนออกเป็น tasks ย่อย
- ทำให้แต่ละ task สามารถ test และ verify ได้ง่าย

### 3. Complete Architecture

วางโครงสร้างไฟล์ทั้งหมดก่อนเริ่มเขียน code

- วางโครงสร้างไฟล์ทั้งหมดก่อนเริ่มเขียน code
- ระบุ interfaces และ contracts ระหว่าง modules
- คำนึงถึง scalability และ maintainability

### 4. Impact Order

จัดลำดับ implement ตามลำดับความสำคัญ

- Foundation components ก่อน (config, types, utils)
- Dependencies ของขั้นตอนถัดไปก่อน
- High risk items เพื่อ fail fast
- Core business logic ก่อน features รอบข้าง

### 5. Dependencies Management

จัดการ dependencies อย่างมีประสิทธิภาพ

- ใช้ existing packages จาก workspace ถ้ามี
- Avoid dependency bloat - เลือกเฉพาะที่จำเป็น
- Check compatibility กับ existing versions
- Consider bundle size สำหรับ frontend packages

### 6. Documentation

บันทึกข้อมูลอย่างครบถ้วน

- บันทึก architectural decisions
- Document integration patterns
- ระบุ assumptions และ constraints
- เตรียม migration plan ถ้ามี breaking changes

## Expected Outcome

- [ ] Task document ที่ครอบคล้วทุกด้านของงาน
- [ ] Library choices ที่มีเหตุผลรองรับ
- [ ] File architecture ที่ชัดเจน
- [ ] Implementation roadmap ที่ practical

## Common Mistakes

ข้อผิดพลาดที่พบบ่อย:

- ข้ามการวิเคราะห์โปรเจกต์และไปเริ่ม implement เลย
- เลือก library โดยไม่สำรวจ alternatives
- ไม่วางแผน architecture ก่อนเขียน code
- ไม่จัดลำดับ implementation ตาม impact order
- บันทึกแผนไม่ครบถ้วน

## Anti-Patterns

รูปแบบที่ไม่ควรทำ:

- ❌ เริ่ม implement โดยไม่วิเคราะห์โปรเจกต์
- ❌ เลือก library แบบ random โดยไม่มีเหตุผล
- ❌ เขียน code โดยไม่วางแผน architecture
- ❌ Implement ตามลำดับที่ไม่ใช่ impact order
- ❌ ไม่บันทึกแผนงาน

## Task Document Template

ตัวอย่าง template สำหรับ `.agent/task/<name>-DD-MM-YYYY.md`:

```markdown
---
title: Task Name
description: Brief task description
created: DD-MM-YYYY
updated: DD-MM-YYYY
priority: high | medium | low
status: pending | in_progress | completed
assignee: optional
estimated_hours: optional
tags: optional
related_tasks: []
---

## Goal

Task objective

## Context

Context and reason for this task

## Architecture

File structure and integration:

### Before

```
old/structure
└── file.ts
```

### After

```
new/structure
├── components/
│   └── Component.tsx
└── utils/
    └── helpers.ts
```

## Tasks

Task list:

### 🔴 High Impact

| # | Status | Task | Why | Test Case |
|---|--------|------|-----|-----------|
| 1 | [ ] | Foundation (config, types, utils) | Foundation for all tasks | Verify foundation works |
| 2 | [ ] | Core components | Core of the work | Test component rendering |

### 🟡 Medium Impact

| # | Status | Task | Why | Test Case |
|---|--------|------|-----|-----------|
| 3 | [ ] | Integration | Connect components together | Verify integration works |
| 4 | [ ] | Testing | Verify correctness | All tests pass |

### 🟢 Low Impact

| # | Status | Task | Why | Test Case |
|---|--------|------|-----|-----------|
| 5 | [ ] | Documentation | Documentation support | Docs are complete |

## Dependencies

List of dependencies used:

| Library | Version | Purpose | Used In |
|--------|---------|---------|---------|
| vitest | latest | Testing framework | tests/ |
| - | - | - | - |

## Expected Outcome

Success criteria:

- [ ] Criterion 1
- [ ] Criterion 2
```

### Task Document Sections Summary

| Section | Required | Description |
|---------|----------|-------------|
| `## Goal` | ✅ | Task objective |
| `## Context` | ✅ | Context and reason for this task |
| `## Architecture` | ✅ | File structure and integration (Before/After format) |
| `## Tasks` | ✅ | Task list (table grouped by impact with #, Status, Task, Why, Test Case) |
| `## Dependencies` | ⭕ | List of dependencies used (optional) |
| `## Expected Outcome` | ⭕ | Success criteria (optional) |

### Frontmatter Fields

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `title` | ✅ | string | ชื่องาน |
| `description` | ✅ | string | คำอธิบายกระชับ |
| `created` | ✅ | date | วันที่สร้าง (DD-MM-YYYY) |
| `updated` | ⭕ | date | วันที่อัปเดตล่าสุด |
| `priority` | ⭕ | enum | high/medium/low |
| `status` | ⭕ | enum | pending/in_progress/completed |
| `estimated_hours` | ⭕ | number | ประมาณการชั่วโมง |
| `tags` | ⭕ | array | ป้ายกำกับ |
