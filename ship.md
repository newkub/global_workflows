---
title: Ship
description: Ship code ครบวงจร ทดสอบ release และ deploy
auto_execution_mode: 3
related_workflows:
  - /read-related-workflows
  - /follow-workflows
  - /follow-skills
  - /ask-requirement
  - /plan
  - /implement-features-to-mvp
  - /update-project
  - /follow-monorepo
  - /review-codebase-everything
  - /resolve-issue
  - /loop-until-complete
  - /run-verify
  - /watch-github-actions
  - /create-git-worktree
  - /commit
  - /run-release
  - /run-deploy
  - /follow-agents-md
  - /report
  - /suggest-next-action
---

## Goal

Ship code ครบวงจรตั้งแต่ planning ไปจนถึง release และ deploy พร้อมรายงานผล

## Scope

ครอบคลุมการวางแผน ตั้งค่าพื้นฐาน refactor ปรับปรุงคุณภาพ verify release และ deploy

## Execute

### 1. Prepare

เตรียมความพร้อมก่อนเริ่ม ship

1. ทำ `/read-related-workflows` และ `/follow-workflows` เพื่ออ่าน workflows ที่เกี่ยวข้อง
2. ตรวจสอบ working tree clean และอยู่บน `main`/`master`, `bun install` ผ่าน
3. ทำ `/create-git-worktree` เพื่อสร้าง worktree ใน `worktree/` สำหรับ branch ที่จะทำงาน
4. ถ้า requirement ไม่ชัดเจน ให้ทำ `/ask-requirement`
5. ทำ `/plan` เพื่อวางแผนงาน (ถ้าเสี่ยงสูงให้รอยืนยัน user)
6. ถ้า MVP phase ให้ทำ `/implement-features-to-mvp`
7. ทำ `/update-project` เพื่ออัพเดท `.devin`, `README`, `AGENTS.md`
8. ถ้าเป็น monorepo ให้ทำ `/follow-monorepo` และทำ phases 2-5 สำหรับแต่ละ workspace ตามลำดับ foundation ก่อน
9. ถ้า project ต้องการ deployment ให้ทำ `/follow-deploy` เพื่อตั้งค่า CI/CD

### 2. Review And Fix

ทำ comprehensive review และแก้ไข issues ครบทุกมิติ

1. ทำ `/review-codebase-everything` เพื่อ review ครบทุกมิติ แก้ไข issues ตาม severity จนครบ
2. ถ้าพบ issues ให้ทำ `/resolve-issue` แล้วทำ `/loop-until-complete` ขั้นตอน 1 จนกว่าจะผ่าน

### 3. Verify

ตรวจสอบ quality gates ก่อน ship

1. ทำ `/loop-until-complete` กับ `/run-verify` จนกว่าจะผ่าน
2. ทำ `/watch-github-actions` เพื่อตรวจสอบว่า CI ผ่านทุก checks
3. ถ้าพบ CI failures ให้ทำ `/resolve-issue` ก่อนดำเนินการต่อ

### 4. Test And Validate

ทดสอบการใช้งานจริง

1. ทำ `/test-usage` เพื่อทดสอบการใช้งานผ่าน interface ต่างๆ
2. ถ้าพบ issues ให้ทำ `/resolve-issue` แล้วทำ `/loop-until-complete` กลับไปทำ Phase 2 จนกว่าจะผ่าน

### 5. Ship

Git operations, release และ deploy

1. ทำ `/commit` เพื่อ commit ทุกการเปลี่ยนแปลงใน worktree
2. ทำ `/git-push` เพื่อ push ไปยัง remote
3. ทำ `/create-pr` ถ้าจำเป็นต้องสร้าง pull request
4. กลับไป `main` worktree และ merge branch เข้า `main`
5. ลบ worktree ด้วย `git worktree remove worktree/<branch-name>`
6. ทำ `/run-release` (optional — auto-detect platforms และ release)
7. ทำ `/run-deploy` (optional — รวม post-deploy validation และ rollback)
8. ทำ `/update-readme` เพื่ออัพเดท docs ให้ตรงกับ version ใหม่

### 6. Finalize

ตรวจสอบความครบถ้วนและรายงานผล

1. ตรวจสอบสถานะของทุก phase (1-5) ว่าทำเสร็จแล้วทั้งหมด
2. ทำ `/follow-agents-md` เพื่อตรวจสอบว่า `AGENTS.md` ทำตามครบถ้วน
3. รวบรวมสถานะและทำ `/report` พร้อม `/report-format-table`
4. ใช้ symbols: ✅ ผ่าน, ❌ ไม่ผ่าน, ⏭️ ข้าม, ⚠️ มี warning
5. ทำ `/suggest-next-action` เพื่อแนะนำ action ถัดไป

## Rules

### 1. Foundation First

- ทำ `/update-project` ก่อนเพื่อตั้งค่า configuration และ structure
- ตั้งค่า CI/CD และ monorepo structure ก่อน review
- Review และ fix issues ก่อน verify

### 2. Safety

- ตรวจสอบ working tree clean และอยู่บน `main`/`master` ก่อนเริ่ม
- ใช้ `/create-git-worktree` สร้าง worktree แทนการ checkout branch ใหม่
- หลัง merge ให้ลบ worktree เสมอเพื่อรักษาความสะอาด
- Security scan และ vulnerability check อยู่ใน `/review-codebase-everything` แล้ว
- ถ้าพบ critical vulnerabilities ให้ห้าม deploy จนกว่าจะแก้ไข

### 3. Error Resolution

- ทำ `/resolve-issue` เมื่อพบ error แล้วทำ `/loop-until-complete` ซ้ำจนกว่าจะผ่าน
- ห้ามข้าม errors หรือทำ workaround

### 4. Execution Order

- ทำตามลำดับ phases ห้ามข้าม phase
- แต่ละ phase เป็น gate condition ถ้าไม่ผ่านไม่ต้องไป phase ถัดไป
- ทำงานอัตโนมัติโดยไม่หยุดถาม ยกเว้นกรณีเสี่ยงสูง
- Release และ deploy เป็น optional ตาม project configuration

### 5. Monorepo Workspace Processing

- ทำ workspaces ที่เป็น foundation ก่อน (shared packages, utilities)
- ทำ workspaces ที่มี dependencies ซับซ้อนทีหลัง
- หลีกเลี่ยง circular dependencies ระหว่าง workspaces

### 6. MVP Discipline

- ใช้ `/implement-features-to-mvp` ถ้า project อยู่ใน MVP phase
- ทำเฉพาะ must-have features ใน MVP
- หยุดเมื่อ MVP requirements ครบถ้วน

### 7. Non-Redundancy

- ห้าม duplicate รายละเอียดที่มีอยู่ใน sub-workflows
- Orchestrator อ้างถึง sub-workflow โดยไม่ระบุรายละเอียดภายใน
- Review, refactor, security, test quality, migration validation อยู่ใน `/review-codebase-everything` แล้ว
- รายละเอียด verify, release, deploy อยู่ใน `/run-verify`, `/run-release`, `/run-deploy` แล้ว

## Expected Outcome

- Requirement ชัดเจน และ plan ได้รับการยืนยันจาก user
- Code ผ่าน comprehensive review และ issues ถูกแก้ไขครบถ้วน ผ่าน `/review-codebase-everything`
- Code ผ่าน verify, CI/CD และ usage test
- Git operations สำเร็จ, packages ถูก release และ application ถูก deploy (ถ้ามี)
- รายงานผลลัพธ์การ ship code ครบวงจรตาม `/report`
