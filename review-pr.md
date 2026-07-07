---
title: Review Pull Request
description: Review PR ก่อน merge เพื่อตรวจสอบคุณภาพและความพร้อม
auto_execution_mode: 3
related_workflows:
  - /follow-resolve-pr
  - /create-pr
  - /deep-review
  - /run-verify
  - /report-format-table
  - /follow-code-quality
---

## Goal

Review pull request ก่อน merge เพื่อให้มั่นใจว่า changes มีคุณภาพ ปลอดภัย และพร้อมเข้าสู่ target branch

## Scope

ใช้สำหรับ review PR ทุกประเภทก่อน merge เข้า `main` หรือ target branch ครอบคลุมการตรวจสอบ CI, code quality, tests, security และ breaking changes

## Execute

### 1. Verify CI And Checks

ตรวจสอบว่า CI checks ทั้งหมดผ่านก่อน review

1. ตรวจสอบ CI status ของ PR ผ่าน `mcp3_pull_request_read` ด้วย method `get_status`
2. ตรวจสอบ check runs ด้วย method `get_check_runs`
3. ถ้า CI fail ให้ทำ `/resolve-errors` แล้วรอ CI รันใหม่
4. ห้าม merge ถ้า CI ยัง fail

### 2. Review Changes

ตรวจสอบ changes ใน PR อย่างละเอียด

1. อ่าน PR diff ด้วย `mcp3_pull_request_read` method `get_diff`
2. อ่าน files ที่เปลี่ยนด้วย method `get_files`
3. ตรวจสอบว่า changes ตรงกับ PR description
4. ตรวจสอบว่าไม่มี unintended changes หรือ debug code
5. ถ้ามี changes ที่ซับซ้อน ให้ทำ `/deep-review`

### 3. Verify Code Quality

ตรวจสอบ code quality ของ changes

1. ตรวจสอบว่าผ่าน `/run-verify` (lint, typecheck, test, build)
2. ตรวจสอบว่าไม่มี `TODO`, `MOCK`, หรือ placeholder ใน production code
3. ตรวจสอบว่าไม่มี `console.log` หรือ debug statements
4. ตรวจสอบว่ามี tests สำหรับ changes ใหม่
5. ตรวจสอบว่าไม่มี breaking changes โดยไม่มี migration guide

### 4. Check Review Comments

ตรวจสอบ review comments และ discussions

1. อ่าน review comments ด้วย `mcp3_pull_request_read` method `get_review_comments`
2. อ่าน reviews ด้วย method `get_reviews`
3. ตรวจสอบว่า review threads ทั้งหมด resolved
4. ถ้ามี unresolved comments ให้ resolve ด้วย `mcp3_pull_request_review_write` method `resolve_thread`
5. ตรวจสอบว่าไม่มี requested changes ที่ยังไม่ได้แก้

### 5. Report Review Result

รายงานผลการ review ในรูปแบบตาราง

1. ทำ `/report-format-table` เพื่อจัดรูปแบบตาราง
2. สร้างตารางพร้อม columns: Category, Status, Details, Action Required
3. หมวดหมู่: CI Checks, Code Quality, Tests, Security, Breaking Changes, Review Comments
4. ระบุ action ที่ต้องทำก่อน merge (ถ้ามี)

### 6. Merge Or Request Changes

ตัดสินใจหลัง review

1. ถ้าทุกอย่างผ่าน: ทำ `/follow-resolve-pr` เพื่อ merge
2. ถ้ามี issues: ส่ง review ด้วย `mcp3_pull_request_review_write` method `create` และ event `REQUEST_CHANGES`
3. ถ้ามี minor suggestions: ส่ง review ด้วย event `COMMENT`
4. ถ้าทุกอย่างดี: ส่ง review ด้วย event `APPROVE`

## Rules

- ห้าม merge ถ้า CI checks ยัง fail
- ห้าม merge ถ้ามี unresolved review comments
- ห้าม merge ถ้ามี requested changes ที่ยังไม่ได้แก้
- ห้าม merge ถ้ามี merge conflicts ที่ยังไม่ resolve
- ตรวจสอบ breaking changes ก่อน merge ทุกครั้ง
- ใช้ `/follow-resolve-pr` สำหรับการ merge จริง
- ใช้ `/report-format-table` สำหรับรายงาน review result
- ถ้า PR ใหญ่เกินไป ให้แนะนำให้ split PR
- ถ้ามี security concerns ให้ทำ `/improve-security` ก่อน merge
- Review ต้องครอบคลุมทั้ง code, tests, และ documentation

## Expected Outcome

- CI checks ผ่านทั้งหมดก่อน merge
- Changes ถูกตรวจสอบอย่างละเอียด
- Code quality ผ่านมาตรฐาน
- Review comments ทั้งหมด resolved
- Review result รายงานในรูปแบบตาราง
- PR ถูก merge หรือ request changes ตามผลการ review
