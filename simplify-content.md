---
title: Simplify Content
description: ลดความซับซ้อนและทำให้ content ง่ายขึ้น
auto_execution_mode: 3
---

## Goal

ลดความซับซ้อนและทำให้ content ง่ายขึ้น

## Scope

ใช้สำหรับการลดความซับซ้อนของ content, codebase, architecture, และ workflows

## Execute

### 1. Analyze Complexity

วิเคราะห์ความซับซ้อนของ content และ codebase

1. ทำ `/analyze-over-engineering` เพื่อหาสิ่งที่ over-engineer
2. ทำ `/analyze-unnecessary` เพื่อหาสิ่งที่ไม่จำเป็น
3. ทำ `/analyze-consistency` เพื่อตรวจสอบความสม่ำเสมอ

### 2. Remove Unnecessary Complexity

ลบสิ่งที่ไม่จำเป็นและซับซ้อน

1. ทำ `/dont-over-engineer` เพื่อหลีกเลี่ยง over-engineering
2. ทำ `/no-hard-cord` เพื่อลบ hard code
3. ทำ `/no-use-ignore` เพื่อแก้ปัญหาที่ source
4. ทำ `/check-unused-deps` เพื่อลบ dependencies ที่ไม่ได้ใช้
5. ทำ `/check-unsued-files` เพื่อลบไฟล์ที่ไม่ได้ใช้

### 3. Simplify Architecture

ปรับปรุง architecture ให้ง่ายขึ้น

1. ทำ `/follow-clean-architecture` หรือ `/follow-layered-architecture`
2. ทำ `/separate-of-concern` เพื่อแยกโค้ดตาม responsibilities
3. ทำ `/refactor-to-modules` เพื่อ refactor เป็น modules ที่ชัดเจน

### 4. Simplify Workflows

ปรับปรุง workflows ให้ง่ายขึ้น

1. ทำ `/write-windsurf-global-workflows` เพื่อทำตามมาตรฐาน
2. ลบ workflows ที่ซ้ำซ้อนหรือไม่จำเป็น

## Rules

- ทำ `/dont-over-engineer` เสมอเมื่อเริ่มทำงาน
- ใช้ minimal changes เสมอ
- ตรวจสอบว่าการเปลี่ยนแปลงไม่ทำลาย functionality
- ทำ regression tests หลังการ simplify
- อัพเดท references หลังการแก้ไข
- ทำ `/update-references` หากมี file operations

## Expected Outcome

- Content มีความซับซ้อนน้อยลง
- Codebase มีความซับซ้อนน้อยลง
- Dependencies ที่ไม่ได้ใช้ถูกลบ
- ไฟล์ที่ไม่ได้ใช้ถูกลบ
- Architecture ง่ายและชัดเจนขึ้น
- Workflows สม่ำเสมอและไม่ซ้ำซ้อน
- Hard code ถูกลบ
- Ignore patterns ถูกลบ