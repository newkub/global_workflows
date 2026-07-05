---
title: Ship
description: Ship code ครบวงจร ทดสอบ และรัน development server
auto_execution_mode: 3
related_workflows:
  - /plan
  - /update-project
  - /implement-features-to-mvp
  - /refactor
  - /run-verify
  - /validate-test
  - /cleanup-files
  - /run-dev
  - /report-ship
---

## Goal

Ship code ครบวงจรตั้งแต่ planning ไปจนถึง development server

## Scope

ครอบคลุมการวางแผน ตั้งค่าพื้นฐาน refactor ปรับปรุงคุณภาพ verify และรัน development server

## Execute

### 1. Read Related Workflows

1. ทำ `/read-related-workflows` เพื่ออ่าน workflows ที่เกี่ยวข้องก่อนเริ่มทำงาน

### 2. Planning

1. ทำ `/plan` เพื่อวางแผนงานและ architecture อย่างเป็นระบบ
2. รอยืนยันจาก user ก่อนเริ่มทำ

### 3. Define MVP Scope (Optional)

1. ถ้า project อยู่ใน MVP phase ให้ทำ `/implement-features-to-mvp` เพื่อจัดลำดับ features

### 4. Update Project

1. ทำ `/update-project` เพื่ออัพเดท `.devin`, `README`, `AGENTS.md`, และ documentation

### 5. Setup Deployment (Optional)

1. ถ้า project ต้องการ deployment ให้ทำ `/follow-deploy` เพื่อตั้งค่า CI/CD และ deployment configuration

### 6. Setup Monorepo

1. ถ้าเป็น monorepo ให้ทำ `/follow-monorepo` และ `/analyze-project` เพื่อดู workspace configuration
2. ทำขั้นตอน 7-15 สำหรับแต่ละ workspace ตามลำดับ foundation ก่อน

### 7. Refactor

1. ทำ `/refactor` เพื่อ refactor ทั้ง monorepo และ workspaces

### 8. Apply Best Practices

1. ทำ `/follow-best-practice` เพื่อ apply best practices ของ language, runtime, และ library

### 9. Make Real

1. ทำ `/realize-implementation` เพื่อแปลง TODO, MOCK, placeholder เป็น production code
2. ทำ `/update-references` เพื่ออัพเดท references

### 10. Code Review

1. ทำ `/review-codebase-and-fix` เพื่อตรวจสอบคุณภาพโค้ด
2. ถ้าพบ issues ทำ `/resolve-errors` และทำซ้ำขั้นตอน 7-9 จนกว่าจะผ่าน

### 11. Cleanup

1. ทำ `/cleanup-files` เพื่อลบไฟล์ โฟลเดอร์ dependencies และ dead code ที่ไม่จำเป็น

### 12. Run Verify

1. ทำ `/run-verify` เพื่อรัน verify จนกว่าจะผ่าน (scan, lint, typecheck, test, build)

### 13. Verify Test Quality (Optional)

1. ถ้า project มี tests ให้ทำ `/validate-test` เพื่อตรวจสอบ test quality

### 14. Run Dev

1. ทำ `/run-dev` เพื่อรัน development server จนกว่าจะผ่าน

### 15. Report Ship

1. ทำ `/report-ship` เพื่อรายงานผลลัพธ์การ ship code ครบวงจร

## Rules

### 1. Foundation First

- ทำ `/update-project` ก่อนเพื่อตั้งค่า configuration และ structure
- ตั้งค่า `CI/CD` และ monorepo structure ก่อน refactor

### 2. Quality Over Speed

- ทำ `/refactor` ก่อน `/follow-best-practice`
- ทำ `/review-codebase-and-fix` ก่อน cleanup
- แปลง TODO, MOCK เป็น production code ก่อน verify

### 3. MVP Discipline

- ใช้ `/implement-features-to-mvp` ถ้า project อยู่ใน MVP phase
- ทำเฉพาะ must-have features ใน MVP
- หยุดเมื่อ MVP requirements ครบถ้วน

### 4. Error Resolution

- ทำ `/resolve-errors` เมื่อพบ error
- ทำซ้ำขั้นตอน 7-10 จนกว่าจะผ่าน code review
- ห้ามข้าม errors หรือทำ workaround

### 5. Execution Order

- ทำตามลำดับ: planning → refactor → verify → dev server
- ห้ามข้ามขั้นตอน
- ทำงานอัตโนมัติโดยไม่หยุดถาม

### 6. Monorepo Workspace Processing

- ทำ workspaces ที่เป็น foundation ก่อน (shared packages, utilities)
- ทำ workspaces ที่มี dependencies ซับซ้อนทีหลัง
- หลีกเลี่ยง circular dependencies ระหว่าง workspaces

## Expected Outcome

- Plan ครอบคลุมและได้รับการยืนยันจาก user
- Configuration ตั้งค่าถูกต้อง พร้อม `.devin` structure
- Code ผ่าน refactor, best practices, และ review
- TODO, MOCK, placeholder แปลงเป็น production code
- Code ผ่านการ verify ทุกด้าน (scan, lint, typecheck, test, build)
- Test quality ผ่านการ verify ครบวงจร (ถ้าใช้)
- Development server ทำงานได้ ไม่มี critical errors
- References อัพเดทครบถ้วน ไม่มี references เสียหาย
- Codebase สะอาด ไม่มีไฟล์หรือ dependencies ที่ไม่จำเป็น
- รายงานผลลัพธ์การ ship code ครบวงจร
