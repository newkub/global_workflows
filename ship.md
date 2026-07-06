---
title: Ship
description: Ship code ครบวงจร ทดสอบ release และ deploy
auto_execution_mode: 3
related_workflows:
  - /ask-requirement
  - /read-related-workflows
  - /follow-workflows
  - /follow-skills
  - /plan
  - /update-project
  - /implement-features-to-mvp
  - /follow-monorepo
  - /analyze-project
  - /refactor
  - /follow-best-practice
  - /realize-implementation
  - /update-references
  - /review-codebase
  - /resolve-errors
  - /cleanup-files
  - /run-verify
  - /validate-test
  - /run-dev
  - /test-usage
  - /run-release
  - /run-deploy
  - /follow-agents-md
  - /follow-deploy
  - /report
  - /report-format-table
  - /report-format-terminal
  - /suggest-next-action
  - /follow-code-quality
---

## Goal

Ship code ครบวงจรตั้งแต่ planning ไปจนถึง release และ deploy พร้อมรายงานผล

## Scope

ครอบคลุมการวางแผน ตั้งค่าพื้นฐาน refactor ปรับปรุงคุณภาพ verify release และ deploy

## Execute

### 1. Read Related Workflows

1. ทำ `/read-related-workflows` เพื่ออ่าน workflows ที่เกี่ยวข้องก่อนเริ่มทำงาน
2. ทำ `/follow-workflows` เพื่ออ่านและทำตาม workflows ทั้ง global และ project
3. ทำ `/follow-skills` เพื่ออ่านและใช้ skills ที่เหมาะสมกับ task

### 2. Clarify Requirement

1. ตรวจสอบว่า requirement จาก user ชัดเจนหรือไม่
2. ถ้า requirement ไม่ชัดเจน ให้ทำ `/ask-requirement` เพื่อถามความต้องการผ่าน CLI หรือ Web UI
3. ถ้า requirement ชัดเจนแล้ว ให้ข้ามขั้นตอนนี้

### 3. Planning

1. ทำ `/plan` เพื่อวางแผนงานและ architecture อย่างเป็นระบบ
2. ถ้า plan มีความเสี่ยงสูง (เช่น เปลี่ยน architecture, ลบไฟล์จำนวนมาก) ให้รอยืนยันจาก user ก่อนเริ่มทำ
3. ถ้า plan มีความเสี่ยงต่ำ ให้ดำเนินการได้เลย

### 4. Define MVP Scope (Optional)

1. ถ้า project อยู่ใน MVP phase ให้ทำ `/implement-features-to-mvp` เพื่อจัดลำดับ features

### 5. Update Project

1. ทำ `/update-project` เพื่ออัพเดท `.devin`, `README`, `AGENTS.md`, และ documentation
2. ถ้า project ต้องการ deployment ให้ทำ `/follow-deploy` เพื่อตั้งค่า CI/CD และ deployment configuration

### 6. Setup Monorepo

1. ถ้าเป็น monorepo ให้ทำ `/follow-monorepo` และ `/analyze-project` เพื่อดู workspace configuration
2. ทำ steps 7-15 สำหรับแต่ละ workspace ตามลำดับ foundation ก่อน (shared packages → apps → integrations)
3. Steps 16-17 (Release, Deploy) เป็น global ทำครั้งเดียวหลังจบทุก workspace
4. ถ้าไม่ใช่ monorepo ให้ทำ steps 7-17 แบบ single project

### 7. Refactor

1. ทำ `/refactor` เพื่อ refactor ทั้ง monorepo และ workspaces

### 8. Apply Best Practices

1. ทำ `/follow-best-practice` เพื่อ apply best practices ของ language, runtime, และ library

### 9. Make Real

1. ทำ `/realize-implementation` เพื่อแปลง TODO, MOCK, placeholder เป็น production code
2. ทำ `/update-references` เพื่ออัพเดท references

### 10. Code Review

1. ทำ `/review-codebase` เพื่อตรวจสอบคุณภาพโค้ด
2. ถ้าพบ issues ทำ `/resolve-errors` และทำซ้ำขั้นตอน 7-9 จนกว่าจะผ่าน

### 11. Cleanup

1. ทำ `/cleanup-files` เพื่อลบไฟล์ โฟลเดอร์ dependencies และ dead code ที่ไม่จำเป็น

### 12. Run Verify

1. ทำ `/run-verify` เพื่อรัน verify จนกว่าจะผ่าน (scan, lint, typecheck, test, build)

### 13. Verify Test Quality (Optional)

1. ถ้า project มี tests ให้ทำ `/validate-test` เพื่อตรวจสอบ test quality

### 14. Run Dev

1. ทำ `/run-dev` เพื่อรัน development server จนกว่าจะผ่าน

### 15. Test Usage

1. ทำ `/test-usage` เพื่อทดสอบการใช้งานจริงของผู้ใช้ผ่าน interface ต่างๆ (CLI, API, Browser, SDK, TUI, Mobile, Extension, Bot)
2. ถ้าพบ issues ให้ทำ `/resolve-errors` และทำซ้ำขั้นตอน 7-9 จนกว่าจะผ่าน

### 16. Release (Optional)

1. ทำ `/run-release` เพื่อ auto-detect platforms และ release ไปยัง npm, crates.io, VSCode, Chrome Web Store, Docker Hub
2. ถ้า project ไม่มี packages ที่ต้อง release ให้ข้ามขั้นตอนนี้

### 17. Deploy (Optional)

1. ทำ `/run-deploy` เพื่อ deploy ไปยัง Vercel, Cloudflare, Railway หรือ platform อื่น
2. ถ้า project ไม่ต้องการ deployment ให้ข้ามขั้นตอนนี้

### 18. Check Completion

1. ตรวจสอบสถานะของทุก step (2-17) ว่าทำเสร็จแล้วทั้งหมด ถ้ายังมี step ที่ไม่เสร็จ ให้กลับไปทำ step นั้นก่อน
2. ถ้าทุก step เสร็จแล้ว ให้ทำ `/follow-agents-md` เพื่อตรวจสอบว่า `AGENTS.md` ทำตามครบถ้วน
3. ถ้า `/follow-agents-md` ก็ทำเสร็จแล้ว ให้บอกผู้ใช้ว่า "ทำหมดแล้ว" และแนะนำให้ทำ `/idea-features`

### 19. Report Ship

1. รวบรวมสถานะของทุก step และทำ `/report` พร้อม `/report-format-table` สำหรับตารางสถานะ
2. ใช้ symbols: ✅ ผ่าน, ❌ ไม่ผ่าน, ⏭️ ข้าม, ⚠️ มี warning
3. แสดง metrics สำคัญ: lint, typecheck, test, build, dev server, usage test, release, deploy
4. ทำ `/suggest-next-action` เพื่อแนะนำ action ถัดไป

## Rules

### 1. Foundation First

- ทำ `/update-project` ก่อนเพื่อตั้งค่า configuration และ structure
- ตั้งค่า `CI/CD` และ monorepo structure ก่อน refactor

### 2. Quality Over Speed

- ทำ `/refactor` ก่อน `/follow-best-practice`
- ทำ `/review-codebase` ก่อน cleanup
- แปลง TODO, MOCK เป็น production code ก่อน verify

### 3. MVP Discipline

- ใช้ `/implement-features-to-mvp` ถ้า project อยู่ใน MVP phase
- ทำเฉพาะ must-have features ใน MVP
- หยุดเมื่อ MVP requirements ครบถ้วน

### 4. Error Resolution

- ทำ `/resolve-errors` เมื่อพบ error แล้วทำซ้ำ steps 7-9 จนกว่าจะผ่าน code review
- ห้ามข้าม errors หรือทำ workaround

### 5. Execution Order

- ทำตามลำดับ steps ใน Execute ห้ามข้ามขั้นตอน
- ทำงานอัตโนมัติโดยไม่หยุดถาม ยกเว้นกรณีเสี่ยงสูง
- Release และ deploy เป็น optional ตาม project configuration

### 6. Monorepo Workspace Processing

- ทำ workspaces ที่เป็น foundation ก่อน (shared packages, utilities)
- ทำ workspaces ที่มี dependencies ซับซ้อนทีหลัง
- หลีกเลี่ยง circular dependencies ระหว่าง workspaces

## Expected Outcome

- Requirement ชัดเจน และ plan ได้รับการยืนยันจาก user
- Configuration ตั้งค่าถูกต้อง พร้อม `.devin` structure
- Code ผ่าน refactor, best practices, review และแปลง TODO/MOCK เป็น production code
- Code ผ่าน verify ทุกด้าน (scan, lint, typecheck, test, build) และ test quality (ถ้ามี)
- Usage test ผ่านทุก interface ที่เกี่ยวข้อง
- Development server ทำงานได้ ไม่มี critical errors
- Packages ถูก release และ application ถูก deploy (ถ้ามี)
- Codebase สะอาด ไม่มีไฟล์หรือ dependencies ที่ไม่จำเป็น
- รายงานผลลัพธ์การ ship code ครบวงจรตาม `/report`
