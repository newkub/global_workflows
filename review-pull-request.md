---
title: Review Pull Request
description: รีวิว Pull Request จาก GitHub account ของผู้ใช้
auto_execution_mode: 3
---

## Goal

รีวิว Pull Request จาก GitHub account ของผู้ใช้

## Execute

### 1. Fetch PRs from User Account

1. ใช้ `gh pr list --author @me` หรือ `gh pr list --search "author:@me"`
2. ดู PRs ที่รอการ review
3. ตรวจสอบ PRs ที่ผู้ใช้สร้าง
4. ระบุ PRs ที่ต้องการ action

### 2. Analyze PR Details

1. อ่าน PR description และ context
2. ดู files changed
3. ตรวจสอบ commit history
4. วิเคราะห์ changes ที่สำคัญ

### 3. Review Code Changes

1. อ่าน diff อย่างละเอียด
2. ตรวจสอบ code quality
3. หา potential issues
4. ตรวจสอบ best practices

### 4. Provide Feedback

1. เขียน review comments ที่ constructive
2. ระบุสิ่งที่ดีและสิ่งที่ต้องแก้ไข
3. Suggest improvements
4. ถามถ้าไม่เข้าใจ

### 5. Request Changes or Approve

1. Request changes ถ้ามี issues
2. Approve ถ้าผ่านเกณฑ์
3. ตอบสนองต่อ comments
4. Follow up ถ้าจำเป็น

### 6. Generate Report

1. สร้างตารางสรุป PRs ที่รีวิว
2. จัดกลุ่ม PRs ตามสถานะ (open, closed, merged)
3. ระบุสถานะของแต่ละ PR (approved, requested changes, pending)
4. ระบุ issues ที่พบในแต่ละ PR
5. ให้คำแนะนำสำหรับแต่ละ PR
6. ใช้ numbered columns ในตาราง
7. เรียงลำดับตามความสำคัญ

## Rules

1. อ่านทุกไฟล์ที่เปลี่ยน
2. ไม่รีบผ่าน
3. ตรวจสอบ edge cases
4. ดูทั้ง code และ tests
5. ให้ feedback ที่ช่วยพัฒนา
6. ไม่วิจารณ์แบบ personal
7. Suggest solutions ไม่ใช่แค่บอกปัญหา
8. Be respectful
9. ตรวจสอบ PRs จาก account จริง
10. ดูทั้ง open และ closed PRs
11. ตรวจสอบ PR history
12. ระบุ patterns ที่ซ้ำ
13. ยึดมาตรฐาน code quality
14. ตรวจสอบ tests ครบถ้วน
15. ดู documentation updates
16. Verify CI/CD checks
17. ต้องใช้ตารางในการรายงานผล
18. ต้องจัดกลุ่ม PRs ตามสถานะ
19. ต้องใช้ numbered columns ในตาราง

## Expected Outcome

- PRs จาก user account ถูกรีวิวครบถ้วน
- Constructive feedback ที่ชัดเจน
- Code quality ได้มาตรฐาน
- Approved หรือ requested changes ที่เหมาะสม
- รายงานผลการรีวิวในรูปแบบตาราง
- Grouping และ sorting ของ PRs ที่ชัดเจน
