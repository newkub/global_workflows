---
title: Ship Code
description: Ship code ครบวงจรจาก planning ไปจนถึง build
auto_execution_mode: 3
---

## Goal

Ship code ครบวงจรตั้งแต่ planning ไปจนถึง build

## Execute

### 1. Planning

วางแผนการพัฒนาอย่างเป็นระบบก่อนเริ่ม implement

1. ทำ `/plan` เพื่อวางแผนงานครอบคล้ว
2. รอยืนยันจาก user ก่อนเริ่มทำ

### 2. Setup Foundation

ตั้งค่าพื้นฐานก่อนเริ่มพัฒนา

1. ทำ `/setup-package-manifest` เพื่อตั้งค่า package manifest
2. ทำ `/update-readme` เพื่ออัพเดท README

### 3. Update AGENTS.md

อัปเดต AGENTS.md ตามโปรเจกต์

1. ทำ `/update-agents-md` เพื่ออัปเดต AGENTS.md
2. ทำ `/follow-agents-md` เพื่อทำตาม AGENTS.md

### 4. Setup Monorepo

จัดการโครงสร้าง monorepo ถ้าเป็นโปรเจกต์ monorepo

1. ตรวจสอบว่าเป็น monorepo หรือไม่ (มี apps/, packages/, หรือ crates/)
2. ถ้าเป็น monorepo ให้ทำ `/follow-monorepo`

### 5. Development Lifecycle

ทำตาม development lifecycle ครบวงจร

1. ทำ `/development-workflows` เพื่อทำตาม development lifecycle (Planning → Development → Testing → Build → Deployment → Iteration)

### 6. Refactor

ปรับปรุงโครงสร้างโค้ดตาม Clean Architecture

1. ทำ `/refactor` เพื่อปรับปรุงโครงสร้างโค้ด
2. ทำ `/follow-windsurf-project-rules` เพื่อทำตาม project rules
3. ทำ `/update-reference` เพื่ออัพเดท references

### 7. Make Real

แปลง TODO, MOCK, placeholder เป็น production code จริง

1. ทำ `/make-real` เพื่อแปลงเป็น production code
2. ตรวจสอบว่าไม่มี mock implementations เหลือ
3. ทำ `/update-reference` เพื่ออัพเดท references

### 8. Code Review

ตรวจสอบคุณภาพโค้ดก่อนส่งต่อ

1. ทำ `/review-code-and-fix` เพื่อตรวจสอบคุณภาพโค้ด
2. ถ้าพบ issues ทำ `/resolve-errors` เพื่อแก้ไข
3. ถ้ายังมี issues ให้ทำซ้ำขั้นตอน 2-7 จนกว่าจะผ่าน

### 9. Enhance Codebase

ปรับปรุงคุณภาพ codebase ครบวงจร

1. ทำ `/enhance-codebase` เพื่อปรับปรุงคุณภาพ codebase ครบวงจร

### 10. Security Check

ตรวจสอบ security vulnerabilities

1. ทำ `/check-vulnerability` เพื่อตรวจสอบ security vulnerabilities

### 11. Run Build

รัน build เพื่อตรวจสอบว่า build สำเร็จ

1. ทำ `/loop-until-complete` เพื่อรันจนกว่าจะผ่าน:
   - ทำ `/run-build` เพื่อรัน build

### 12. Run Examples

รัน examples เพื่อตรวจสอบว่าทำงานได้

1. ทำ `/loop-until-complete` เพื่อรันจนกว่าจะผ่าน:
   - ทำ `/run-examples` เพื่อรัน examples

### 13. Update Docs

อัพเดท documentation ถ้ามี docs/

1. ถ้ามี docs/ ให้ทำ `/update-docs` เพื่ออัพเดท documentation

### 14. Cleanup

ทำความสะอาด project ก่อนส่ง

1. ทำ `/cleanup` เพื่อลบไฟล์และโฟลเดอร์ที่ไม่จำเป็น

### 15. Continue

ดำเนินการต่อ

1. ทำ `/continue` เพื่อดำเนินการต่อ

## Rules

### 1. Execution Order

ทำตามลำดับขั้นตอนอย่างเคร่งครัด

- Planning ต้องทำก่อน implement เสมอ
- Foundation ต้องทำก่อน AGENTS.md update
- AGENTS.md update ต้องทำก่อน monorepo setup (ถ้ามี)
- Monorepo setup ต้องทำก่อน development lifecycle
- Development lifecycle ต้องทำก่อน refactor
- Refactor ต้องทำก่อน make-real
- Make-real ต้องทำก่อน code review
- Code review ต้องทำก่อน enhance-codebase
- Enhance-codebase ต้องทำก่อน security check
- Security check ต้องทำก่อน build
- Build ต้องทำก่อน examples
- Examples ต้องทำก่อน docs update
- Docs update ต้องทำก่อน cleanup
- Cleanup ต้องทำก่อน continue

### 2. Execution Scope

- ทำตามขั้นตอนที่กำหนดจนครบ
- ห้ามข้ามขั้นตอน
- ทำตาม `/resolve-errors` เมื่อพบ error
- ทำงานอัตโนมัติโดยไม่หยุดถาม

### 3. Reference Updates

อัพเดท references หลังจากแต่ละขั้นตอนสำคัญ

- ทำ `/update-reference` หลัง refactor
- ทำ `/update-reference` หลัง make-real

## Expected Outcome

### Planning And Foundation

- Plan ที่ครอบคล้วและได้รับการยืนยันจาก user
- Configuration files ตั้งค่าถูกต้อง
- Documentation อัพเดทแล้ว
- Tasks setup พร้อมใช้งาน
- Monorepo structure ตั้งค่าถูกต้อง (ถ้าเป็น monorepo)

### Code Quality

- Code ผ่านการ refactor ตาม Clean Architecture
- TODO, MOCK, placeholder ถูกแปลงเป็น production code
- Code ผ่านการ review และไม่มี issues ร้ายแรง
- Code quality ปรับปรุงครบวงจร
- Performance ปรับปรุงแล้ว
- Platform compatibility และ CI/CD ปรับปรุงแล้ว
- Security และ accessibility ปรับปรุงแล้ว

### Build And Quality

- Code ผ่าน security check
- Build สำเร็จ
- Examples ทำงานได้
- Documentation อัพเดทแล้ว

### References

- Imports และ references อัพเดทครบถ้วน
- ไม่มี references ที่เสียหาย
