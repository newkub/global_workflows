---
title: Ship
description: Ship code ครบวงจรจาก planning ไปจนถึง build
auto_execution_mode: 3
---

## Goal

Ship code ครบวงจรตั้งแต่ planning ไปจนถึง build

## Scope

ครอบคลุมการวางแผน ตั้งค่าพื้นฐาน refactor ปรับปรุงคุณภาพ และ build

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

### 3. Setup Foundation

ตั้งค่าพื้นฐานก่อนเริ่มพัฒนา

1. ทำ `/follow-package-manifest` เพื่อตั้งค่า package manifest
2. ทำ `/update-readme` เพื่ออัพเดท README

### 4. Setup .devin

ตั้งค่า .devin structure สำหรับ project

1. ทำ `/write-dot-devin` เพื่ออัพเดท .devin ให้มี review, rules, hooks, scripts, workflows, skills ครบถ้วน
2. ทำ `/config` สำหรับตั้งค่า project

### 5. Setup CI/CD

ตั้งค่า CI/CD pipeline สำหรับ automated deployment (optional)

1. ทำ `/follow-github-actions` เพื่อตั้งค่า GitHub Actions สำหรับ CI/CD
2. เลือก workflows ตามความต้องการ (ci.yml, security, testing, deployment, monitoring)
3. ตั้งค่า Renovate และ Release-it ถ้าจำเป็น

### 6. Follow AGENTS.md

ทำตาม AGENTS.md ที่ระบุใน project

1. ทำ `/follow-agents-md` เพื่อทำตาม AGENTS.md ครบถ้วน

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

1. ทำ `/implement-to-production` เพื่อแปลงเป็น production code
2. ตรวจสอบว่าไม่มี mock implementations เหลือ
3. ทำ `/update-reference` เพื่ออัพเดท references

### 11. Code Review

ตรวจสอบคุณภาพโค้ดก่อนส่งต่อ

1. ทำ `/review-codebase` เพื่อตรวจสอบคุณภาพโค้ด
2. ถ้าพบ issues ทำ `/resolve-errors` เพื่อแก้ไข
3. ถ้ายังมี issues ให้ทำซ้ำขั้นตอน 2-9 จนกว่าจะผ่าน

### 12. Enhance Codebase

ปรับปรุงคุณภาพ codebase ครบวงจร

1. ทำ `/improve-codebase-everything` เพื่อปรับปรุงคุณภาพ codebase ครบวงจร

### 13. Security Check

ตรวจสอบ security vulnerabilities

1. ทำ `/check-vulnerability` เพื่อตรวจสอบ security vulnerabilities

### 14. Run Build

รัน build เพื่อตรวจสอบว่า build สำเร็จ

1. ทำ `/loop-until-complete` เพื่อรันจนกว่าจะผ่าน:
   - ทำ `/run-build` เพื่อรัน build

### 15. Run Examples

รัน examples เพื่อตรวจสอบว่าทำงานได้

1. ทำ `/loop-until-complete` เพื่อรันจนกว่าจะผ่าน:
   - ทำ `/run-examples` เพื่อรัน examples

### 16. Update Docs

อัพเดท documentation ถ้ามี docs/

1. ถ้ามี docs/ ให้ทำ `/update-docs` เพื่ออัพเดท documentation

### 17. Cleanup

ทำความสะอาด project ก่อนส่ง

1. ทำ `/follow-cleanup` เพื่อลบไฟล์และโฟลเดอร์ที่ไม่จำเป็น

### 18. Continue

ดำเนินการต่อ

1. ทำ `/continue` เพื่อดำเนินการต่อ

## Rules

### 1. Execution Order

ทำตามลำดับขั้นตอนอย่างเคร่งครัดและทำตามขอบเขตที่กำหนด

- Read related workflows ต้องทำก่อน planning เสมอ
- Planning ต้องทำก่อน implement เสมอ
- Foundation ต้องทำก่อน `.devin` setup
- `.devin` setup ต้องทำก่อน CI/CD setup (optional)
- CI/CD setup ต้องทำก่อน `/follow-agents-md` (optional)
- `/follow-agents-md` ต้องทำก่อน monorepo setup (ถ้ามี)
- Monorepo setup ต้องทำก่อน refactor
- Refactor ต้องทำก่อน apply best practices
- Apply best practices ต้องทำก่อน `/implement-to-production`
- `/implement-to-production` ต้องทำก่อน code review
- Code review ต้องทำก่อน `/improve-codebase-everything`
- `/improve-codebase-everything` ต้องทำก่อน security check
- Security check ต้องทำก่อน build
- Build ต้องทำก่อน examples
- Examples ต้องทำก่อน docs update
- Docs update ต้องทำก่อน cleanup
- Cleanup ต้องทำก่อน `/continue`
- ทำตามขั้นตอนที่กำหนดจนครบ
- ห้ามข้ามขั้นตอน
- ทำตาม `/resolve-errors` เมื่อพบ error
- ทำงานอัตโนมัติโดยไม่หยุดถาม
- ทำ `/update-reference` หลัง refactor
- ทำ `/update-reference` หลัง `/implement-to-production`

## Expected Outcome

- Plan ที่ครอบคล้วและได้รับการยืนยันจาก user
- Configuration files ตั้งค่าถูกต้อง
- Documentation อัพเดทแล้ว
- Tasks setup พร้อมใช้งาน
- .devin structure ตั้งค่าถูกต้องพร้อม rules, hooks, scripts, workflows, skills
- Monorepo structure ตั้งค่าถูกต้อง (ถ้าเป็น monorepo)
- Code ผ่านการ refactor ตาม Clean Architecture
- TODO, MOCK, placeholder ถูกแปลงเป็น production code
- Code ผ่านการ review และไม่มี issues ร้ายแรง
- Code quality ปรับปรุงครบวงจร
- Performance ปรับปรุงแล้ว
- Platform compatibility และ CI/CD ปรับปรุงแล้ว
- Security และ accessibility ปรับปรุงแล้ว
- Code ผ่าน security check
- Build สำเร็จ
- Examples ทำงานได้
- Imports และ references อัพเดทครบถ้วน
- ไม่มี references ที่เสียหาย

