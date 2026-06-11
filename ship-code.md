---
title: Ship
description: Ship code ครบวงจรจาก planning ไปจนถึง edit (edit-only mode)
auto_execution_mode: 3
related_workflows:
  - /implement-features-to-mvp
  - /ship-run
  - /ship-code-all-workspace
---

## Goal

Ship code ครบวงจรตั้งแต่ planning ไปจนถึง edit (edit-only mode)

## Scope

ครอบคลุมการวางแผน ตั้งค่าพื้นฐาน refactor ปรับปรุงคุณภาพ และ edit (ไม่รัน build)

## Execute

### 1. Read Related Workflows

อ่านและสรุป workflows ที่เกี่ยวข้องทั้งหมดแบบ recursive ก่อนเริ่มทำงาน

1. ทำ `/read-related-workflows` เพื่ออ่านและสรุป workflows ที่เกี่ยวข้อง
2. ตรวจสอบ dependency graph ของ workflows ทั้งหมด
3. สรุป tasks ที่ต้องทำตามลำดับ
4. สรุป rules ที่ต้องปฏิบัติ
5. สรุป expected outcomes ทั้งหมด

### 2. Planning

วางแผนการพัฒนาอย่างเป็นระบบก่อนเริ่ม implement

1. ทำ `/plan` เพื่อวางแผนงานครอบคล้ว
2. รอยืนยันจาก user ก่อนเริ่มทำ

### 2.5. Define MVP Scope (Optional)

กำหนด scope สำหรับ MVP ถ้า project อยู่ใน MVP phase

1. ทำ `/implement-features-to-mvp` เพื่อจัดลำดับ features สำหรับ MVP
2. ระบุ must-have features สำหรับ MVP
3. สร้าง MVP checklist
4. ใช้ checklist นี้ใน step ต่อไป

### 3. Setup Foundation

ตั้งค่าพื้นฐานก่อนเริ่มพัฒนา

1. ทำ `/follow-package-manifest` เพื่อตั้งค่า package manifest
2. ทำ `/update-readme` เพื่ออัพเดท README

### 4. Setup .devin

ตั้งค่า .devin structure สำหรับ project

1. ทำ `/write-dot-devin` เพื่ออัพเดท .devin ให้มี review, rules, hooks, scripts, workflows, skills ครบถ้วน
2. ทำ `/config` สำหรับตั้งค่า project

### 5. Setup Deployment

ตั้งค่า deployment configuration และ CI/CD pipeline สำหรับ automated deployment (optional)

1. ทำ `/follow-deploy` เพื่อตั้งค่า deployment configuration และ CI/CD
2. เลือก platform ตามความต้องการ (Cloudflare, Vercel, Railway, Docker)
3. ตั้งค่า environment variables และ secrets
4. ตั้งค่า GitHub Actions สำหรับ CI/CD
5. ตั้งค่า Renovate และ Release-it ถ้าจำเป็น

### 6. Follow AGENTS.md

ทำตาม AGENTS.md ที่ระบุใน project

1. ทำ `/update-agents` เพื่อทำตาม AGENTS.md ครบถ้วน

### 7. Setup Monorepo

จัดการโครงสร้าง monorepo ถ้าเป็นโปรเจกต์ monorepo

1. ตรวจสอบว่าเป็น monorepo หรือไม่ (มี `apps/`, `packages/`, หรือ `crates/`)
2. ถ้าเป็น monorepo ให้ทำ `/follow-monorepo`

### 8. Refactor

ปรับปรุงโครงสร้างโค้ดตาม Clean Architecture

1. ทำ `/refactor` เพื่อปรับปรุงโครงสร้างโค้ด
2. ทำ `/update-reference` เพื่ออัพเดท references

### 9. Apply Best Practices

ปรับปรุงโค้ดตาม best practices ของ language, runtime, และ library

1. ทำ `/follow-best-practice` เพื่อ apply best practices
2. ตรวจสอบว่าโค้ดตรงตาม conventions
3. อัพเดท configuration ที่เกี่ยวข้อง

### 10. Make Real

แปลง TODO, MOCK, placeholder เป็น production code จริง

1. ทำ `/realize-implementation` เพื่อแปลงเป็น production code
2. ตรวจสอบว่าไม่มี mock implementations เหลือ
3. ทำ `/update-reference` เพื่ออัพเดท references

### 11. Code Review

ตรวจสอบคุณภาพโค้ดก่อนส่งต่อ

1. ทำ `/review-codebase` เพื่อตรวจสอบคุณภาพโค้ด
2. ถ้าพบ issues ทำ `/resolve-errors` เพื่อแก้ไข
3. ถ้ายังมี issues ให้ทำซ้ำขั้นตอน 2-10 จนกว่าจะผ่าน

### 12. Enhance Codebase

ปรับปรุงคุณภาพ codebase ครบวงจร

1. ทำ `/improve-codebase-everything` เพื่อปรับปรุงคุณภาพ codebase ครบวงจร

### 13. Update Docs

อัพเดท documentation ถ้ามี docs/

1. ถ้ามี docs/ ให้ทำ `/update-docs` เพื่ออัพเดท documentation

### 14. Cleanup

ทำความสะอาด project ก่อนส่ง

1. ทำ `/follow-cleanup` เพื่อลบไฟล์และโฟลเดอร์ที่ไม่จำเป็น

### 15. Continue

ดำเนินการต่อ

1. ทำ `/continue` เพื่อดำเนินการต่อ

## Rules

### 1. Foundation First

ตั้งค่าพื้นฐานก่อนเริ่มพัฒนา

- ตั้งค่า configuration และ structure ก่อน implement features
- ทำ `/follow-package-manifest` และ `/write-dot-devin` ก่อน
- ตั้งค่า `CI/CD` และ monorepo structure ก่อน refactor
- ทำตาม AGENTS.md สำหรับ project-specific requirements

### 2. Quality Over Speed

เน้นคุณภาพมากกว่าความเร็ว

- ทำ `/refactor` ก่อน `/follow-best-practice`
- ทำ `/review-codebase` ก่อน `/improve-codebase-everything`
- แปลง TODO, MOCK เป็น production code ก่อน ship
- ทำ `/update-reference` หลัง refactor และ `/realize-implementation`

### 3. MVP Discipline

รักษาวินัยในการ implement สำหรับ MVP

- ใช้ `/implement-features-to-mvp` ถ้า project อยู่ใน MVP phase
- ทำเฉพาะ must-have features ใน MVP
- ไม่ทำ optional features หรือ enhancements
- หยุดเมื่อ MVP requirements ครบถ้วน

### 4. Error Resolution

แก้ไข errors อย่างเป็นระบบ

- ทำ `/resolve-errors` เมื่อพบ error
- ทำซ้ำขั้นตอน 2-10 จนกว่าจะผ่าน code review
- ไม่ข้าม errors หรือทำ workaround
- ตรวจสอบ root cause ก่อนแก้ไข


## Expected Outcome

- Plan ครอบคล้วและได้รับการยืนยันจาก user
- Configuration ตั้งค่าถูกต้อง พร้อม .devin structure
- Code ผ่าน refactor, best practices, และ review
- TODO, MOCK, placeholder แปลงเป็น production code
- Code quality, performance, security, accessibility ปรับปรุงครบวงจร
- Code แก้ไขและอัพเดทครบถ้วน
- References อัพเดทครบถ้วน ไม่มี references เสียหาย

