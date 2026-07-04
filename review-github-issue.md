---
title: Review GitHub Issue
description: อ่านและวิเคราะห์ GitHub issue อย่างเป็นระบบด้วย GitHub MCP tools
auto_execution_mode: 3
related_workflows:
  - /create-github-issue
  - /fix-my-github-issue
  - /review-issue
  - /report
---

## Goal

อ่านและวิเคราะห์ GitHub issue อย่างเป็นระบบ เพื่อทำความเข้าใจปัญหา ประเมิน scope และเตรียมข้อมูลก่อนดำเนินการแก้ไข

## Scope

ใช้สำหรับ GitHub issues ที่ต้องการ review, triage, หรือ assess ก่อน assign หรือ fix

## Execute

### 1. Fetch Issue Data

ดึงข้อมูล issue จาก GitHub repository

1. ใช้ `mcp7_issue_read` ด้วย method `get` เพื่ออ่าน issue details
2. ใช้ `mcp7_issue_read` ด้วย method `get_comments` เพื่ออ่าน comments
3. ใช้ `mcp7_issue_read` ด้วย method `get_labels` เพื่ออ่าน labels
4. ถ้ามี sub-issues ให้ใช้ method `get_sub_issues`
5. ถ้ามี parent issue ให้ใช้ method `get_parent`
6. บันทึกข้อมูลสำคัญ: issue number, title, body, labels, assignee, state, created/updated dates

### 2. Analyze Issue Content

วิเคราะห์เนื้อหา issue เพื่อทำความเข้าใจปัญหา

1. ระบุประเภทปัญหา (bug, feature, enhancement, documentation, refactor)
2. วิเคราะห์ problem statement และ expected behavior
3. ตรวจสอบ steps to reproduce ว่าครบถ้วนหรือไม่
4. ประเมินความชัดเจนของ description และ context
5. ตรวจสอบ environment details ที่ระบุ
6. ระบุข้อมูลที่ขาดหายไปและต้องการเพิ่มเติม

### 3. Check For Duplicates And Relations

ตรวจสอบ issues ที่ซ้ำซ้อนหรือเกี่ยวข้อง

1. ใช้ `mcp7_search_issues` ค้นหา issues ที่คล้ายกันใน repository
2. ใช้ `mcp7_list_issues` ตรวจสอบ open issues ที่เกี่ยวข้อง
3. ตรวจสอบ parent/sub-issues ที่เชื่อมโยง
4. ระบุ duplicate issues ถ้ามี
5. ตรวจสอบว่ามี PR ที่อ้างถึง issue นี้แล้วหรือไม่ด้วย `mcp7_search_pull_requests`

### 4. Assess Priority And Scope

ประเมิน priority และ scope ของ issue

1. ประเมิน impact ต่อ users และ system
2. ประเมิน urgency ตาม labels และ comments
3. ประเมิน estimated effort (small, medium, large)
4. ระบุ affected components และ files ที่อาจเกี่ยวข้อง
5. ประเมินความเสี่ยงของการแก้ไข
6. ถ้า project มี codebase ให้ทำ `/code-search` หาไฟล์ที่เกี่ยวข้อง

### 5. Evaluate Actionability

ประเมินว่า issue พร้อมดำเนินการหรือไม่

1. ตรวจสอบความครบถ้วนของข้อมูล (description, steps, environment)
2. ประเมินว่าสามารถ reproduce ได้หรือไม่
3. ตรวจสอบว่ามี acceptance criteria ชัดเจนหรือไม่
4. ระบุข้อมูลที่ต้องขอเพิ่มจากผู้รายงาน
5. กำหนดสถานะ: ready, needs-info, blocked, duplicate, wontfix

### 6. Report Findings

รายงานผลการ review

1. ทำ `/report` สรุป findings เป็นตาราง
2. ระบุ issue summary, type, priority, scope, actionability
3. แนะนำ action ถัดไป:
   - ถ้า ready: ทำ `/fix-my-github-issue`
   - ถ้า needs-info: แสดงความคิดเห็นใน issue ขอข้อมูลเพิ่มเติม
   - ถ้า duplicate: ระบุ duplicate issue และปิด
   - ถ้า blocked: ระบุ blocking issue
4. ทำ `/suggest-next-action` เสนอ action ถัดไป

## Rules

### 1. Data Collection

- ใช้ GitHub MCP tools (`mcp7_*`) สำหรับดึงข้อมูลจาก GitHub เท่านั้น
- อ่าน issue, comments, labels, และ relations ครบถ้วน
- บันทึกข้อมูลสำคัญไว้อ้างอิง
- ถ้า issue มี linked PR ให้ตรวจสอบด้วย

### 2. Analysis Scope

- แยกแยะระหว่าง review (workflow นี้) และ fix (`/fix-my-github-issue`)
- ห้ามแก้ไขโค้ดในขั้นตอน review เด็ดขาด
- ใช้ `/review-issue` สำหรับ script-based codebase scanning เพิ่มเติม
- ใช้ `/code-search` สำหรับค้นหาไฟล์ที่เกี่ยวข้องใน codebase

### 3. Duplicate Detection

- ค้นหาทั้ง open และ closed issues
- ตรวจสอบ keywords ที่คล้ายกันใน title และ body
- ตรวจสอบ labels ที่เหมือนกัน
- ระบุ duplicate พร้อม issue number ที่ซ้ำ

### 4. Priority Assessment

- ประเมินจาก impact และ urgency
- ใช้ labels ที่มีอยู่เป็นข้อมูลประกอบ
- พิจารณาจำนวน users ที่ได้รับผลกระทบ
- พิจารณา frequency ของปัญหา

### 5. Communication

- รายงาน findings ชัดเจนและกระชับ
- ระบุ issue number และ repository ที่ตรวจสอบ
- ถ้าต้องขอข้อมูลเพิ่ม ให้เตรียม comment ที่ชัดเจน
- ทำ `/report` สำหรับ output formatting

## Expected Outcome

- Issue ถูกอ่านและวิเคราะห์อย่างครบถ้วน
- ประเภท, priority, และ scope ถูกประเมินชัดเจน
- Duplicates และ relations ถูกตรวจสอบ
- Actionability ถูกประเมินและระบุสถานะ
- Action ถัดไปถูกเสนอตามสถานะของ issue
