---
title: Review GitHub Issue
description: Review GitHub issue/PR ตรวจสอบความถูกต้อง และคุณภาพด้วย GitHub MCP tools
auto_execution_mode: 3
related_workflows:
  - /check-correctness
  - /check-consistency
  - /check-completeness
  - /check-quality
  - /fix-my-github-issue
---

## Goal

Review GitHub issue/PR ตรวจสอบความถูกต้อง ความสมบูรณ์ และคุณภาพของการเปลี่ยนแปลง

## Scope

Review GitHub issue หรือ pull request โดยใช้ GitHub MCP tools เพื่อ:
- อ่าน issue/PR details จาก GitHub
- ตรวจสอบ code changes
- ตรวจสอบ test coverage
- ตรวจสอบ documentation updates
- ให้ feedback และ suggestions

## Execute

### 1. Get Issue/PR Details

1. ใช้ GitHub MCP tools เพื่อดึง issue/PR details:
   - `mcp8_issue_read` สำหรับ issue
   - `mcp8_pull_request_read` สำหรับ pull request
2. อ่าน description, comments, และ code changes
3. ระบุประเภทของการเปลี่ยนแปลง (feature, bugfix, refactor, docs)
4. ตรวจสอบว่ามี test cases ครอบคลุมหรือไม่
5. ระบุ dependencies ที่เกี่ยวข้อง

### 2. Check Correctness

1. ทำ `/check-correctness` เพื่อตรวจสอบความถูกต้องตามที่ผู้ใช้ระบุ
2. ตรวจสอบว่า logic ถูกต้อง
3. ตรวจสอบว่า edge cases ได้รับการจัดการ
4. ตรวจสอบว่า error handling ครบถ้วน

### 3. Check Consistency

1. ทำ `/check-consistency` เพื่อตรวจสอบความสม่ำเสมอ
2. ตรวจสอบ naming conventions
3. ตรวจสอบ code style
4. ตรวจสอบความสอดคล้องกับ patterns ที่มีอยู่

### 4. Check Completeness

1. ทำ `/check-completeness` เพื่อตรวจสอบความสมบูรณ์
2. ตรวจสอบว่า features ครบถ้วน
3. ตรวจสอบว่า tests ครอบคลุม
4. ตรวจสอบว่า documentation ครบถ้วน

### 5. Check Quality

1. ทำ `/check-quality` เพื่อตรวจสอบคุณภาพโค้ด
2. ตรวจสอบ code complexity
3. ตรวจสอบ technical debt
4. ตรวจสอบ performance issues

### 6. Identify Conflicts

1. ตรวจสอบ conflicts กับ code ที่มีอยู่
2. ตรวจสอบ conflicts กับ dependencies
3. ตรวจสอบ conflicts กับ architecture
4. ตรวจสอบ conflicts กับ conventions

### 7. Provide Feedback

1. สรุปปัญหาที่พบ
2. จัดลำดับความสำคัญของปัญหา
3. แนะนำการแก้ไข
4. ระบุ blockers ที่ต้องแก้ก่อน merge
5. ใช้ `mcp8_add_issue_comment` หรือ `mcp8_add_comment_to_pending_review` เพื่อแสดงความคิดเห็น

## Rules

### 1. Correctness Check

ตรวจสอบความถูกต้องของการเปลี่ยนแปลง

- Logic ต้องถูกต้องตาม requirements
- Edge cases ต้องได้รับการจัดการ
- Error handling ต้องครบถ้วน
- ไม่มี side effects ที่ไม่คาดคิด

### 2. Consistency Check

ตรวจสอบความสม่ำเสมอ

- Naming conventions ต้องสอดคล้องกับโปรเจกต์
- Code style ต้องสอดคล้องกับ standards
- Patterns ต้องสอดคล้องกับที่มีอยู่
- Architecture ต้องสอดคล้องกับ design

### 3. Completeness Check

ตรวจสอบความสมบูรณ์

- Features ต้องครบถ้วนตาม requirements
- Tests ต้องครอบคลุมทุก scenarios
- Documentation ต้องอัพเดท
- Configuration ต้องถูกต้อง

### 4. Quality Check

ตรวจสอบคุณภาพโค้ด

- Code complexity ต้องอยู่ในระดับที่ยอมรับได้
- ไม่มี code duplication
- ไม่มี technical debt ที่สำคัญ
- Performance ต้องไม่ลดลง

### 5. Conflict Detection

ตรวจสอบ conflicts

- ไม่ conflicts กับ code ที่มีอยู่
- ไม่ conflicts กับ dependencies
- ไม่ conflicts กับ architecture
- ไม่ conflicts กับ conventions

### 6. Feedback Quality

ให้ feedback ที่มีประสิทธิภาพ

- สรุปปัญหาอย่างชัดเจน
- จัดลำดับความสำคัญ
- แนะนำการแก้ไขที่เป็นประโยชน์
- ระบุ blockers ที่ต้องแก้ก่อน merge

## Expected Outcome

- GitHub issue/PR ถูก review อย่าง systematic
- ปัญหาทั้งหมดถูกระบุและจัดลำดับ
- ความถูกต้องถูกตรวจสอบ
- ความสม่ำเสมอถูกตรวจสอบ
- ความสมบูรณ์ถูกตรวจสอบ
- คุณภาพโค้ดถูกตรวจสอบ
- Conflicts ถูกระบุ
- Feedback ถูกส่งไปยัง GitHub ผ่าน MCP tools

