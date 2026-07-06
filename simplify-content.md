---
title: Simplify Content
description: ลดความซับซ้อนและทำให้ content ง่ายขึ้น
auto_execution_mode: 3
related_workflows:
  - /dont-over-engineer
  - /follow-content-quality
  - /write-windsurf-global-workflows
---

## Goal

ลดความซับซ้อนและทำให้ content ง่ายขึ้น

## Scope

ใช้สำหรับการลดความซับซ้อนของ content, codebase, architecture, และ workflows

## Execute

### 1. Analyze Complexity

วิเคราะห์ความซับซ้อนของ content และ codebase

1. ทำ `/analyze-over-engineering` เพื่อหาสิ่งที่ over-engineer
2. ทำ `/analyze-consistency` เพื่อตรวจสอบความสม่ำเสมอ

### 2. Remove Unnecessary Complexity

ลบสิ่งที่ไม่จำเป็นและซับซ้อน

1. ทำ `/dont-over-engineer` เพื่อหลีกเลี่ยง over-engineering
2. ทำ `/no-hard-code` เพื่อลบ hard code
3. ทำ `/no-use-ignore` เพื่อแก้ปัญหาที่ source
4. ถ้า project มี dependencies ให้ทำ `/check-unused-deps` เพื่อลบ dependencies ที่ไม่ได้ใช้
5. ถ้า project มีไฟล์ที่ไม่ได้ใช้ ให้ทำ `/check-unsued-files`

### 3. Simplify Architecture

ปรับปรุง architecture ให้ง่ายขึ้น

1. ถ้า project มี architecture ซับซ้อน ให้ทำ `/follow-clean-architecture` หรือ `/follow-layered-architecture`
2. ทำ `/refactor` เพื่อแยกโค้ดตาม responsibilities
3. ทำ `/refactor-modules` เพื่อ refactor เป็น modules ที่ชัดเจน

### 4. Simplify Workflows

ปรับปรุง workflows ให้ง่ายขึ้น

1. ทำ `/write-windsurf-global-workflows` เพื่อทำตามมาตรฐาน
2. ลบ workflows ที่ซ้ำซ้อนหรือไม่จำเป็น

## Rules

### 1. Execution

- ใช้ minimal changes เสมอ
- ตรวจสอบว่าการเปลี่ยนแปลงไม่ทำลาย functionality
- ถ้า project มี tests ให้ทำ regression tests หลังการ simplify

### 2. Context Preservation

- การ simplify ต้องเก็บ context ครบ ไม่ลบข้อมูลสำคัญออก
- ลดความซ้ำซ้อนแต่เนื้อหาหลักต้องยังอยู่ครบ
- รวมกลุ่มข้อที่เกี่ยวข้องแทนการลบทิ้ง
- ใช้ sub-headings จัดกลุ่มแทนการ merge bullets ที่ทำให้ context หาย
- ตรวจสอบหลัง simplify ว่า context ยังครบก่อนบันทึก

### 3. References

- อัพเดท references หลังการแก้ไข
- ทำ `/update-references` ถ้ามี file operations

## Expected Outcome

- Content มีความซับซ้อนน้อยลง
- Codebase มีความซับซ้อนน้อยลง
- Dependencies ที่ไม่ได้ใช้ถูกลบ
- ไฟล์ที่ไม่ได้ใช้ถูกลบ
- Architecture ง่ายและชัดเจนขึ้น
- Workflows สม่ำเสมอและไม่ซ้ำซ้อน
- Hard code ถูกลบ
- Ignore patterns ถูกลบ