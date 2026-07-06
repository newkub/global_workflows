---
title: Report Before
description: รายงานแผนการทำงานก่อนดำเนินการ โดยยังไม่ต้องทำจริง
auto_execution_mode: 3
related_workflows:
  - /plan
  - /deep-analyze
  - /analyze-structure
  - /report-before-after
  - /write-windsurf-global-workflows
---

## Goal

รายงานสิ่งที่จะทำก่อนดำเนินการ ให้ผู้ใช้ตรวจสอบและอนุมัติก่อนเริ่มทำจริง

## Scope

ใช้เมื่อผู้ใช้ต้องการดูแผนก่อนตัดสินใจ ไม่ว่าจะเป็น restructuring, refactoring, หรือการเปลี่ยนแปลงใดๆ

## Execute

### 1. Analyze Request

วิเคราะห์สิ่งที่ผู้ใช้ต้องการ

1. ทำ `/deep-analyze` หรือ `/analyze-structure` ตามความเหมาะสม
2. ระบุสิ่งที่จะเปลี่ยนแปลงและผลกระทบ
3. ระบุไฟล์ที่เกี่ยวข้อง

### 2. Report Plan

รายงานแผนการทำงาน

1. สรุปสภาพปัจจุบัน (Current State)
2. ระบุปัญหาที่พบ (Issues Found)
3. เสนอการเปลี่ยนแปลง (Proposed Changes) เป็นลำดับ
4. ระบุผลกระทบ (Impact) ต่อไฟล์และโครงสร้าง
5. จัดลำดับความสำคัญ (Priority) ของแต่ละการเปลี่ยนแปลง

### 3. Show Comparison

แสดงเปรียบเทียบก่อน-หลัง

1. ใช้ `table` แสดง Before vs After ถ้าเหมาะสม
2. ใช้ `code block` แสดงโครงสร้างไฟล์/โฟลเดอร์
3. ใช้ bullet points แสดงการเปลี่ยนแปลงทีละข้อ

### 4. Wait For Approval

รอการอนุมัติจากผู้ใช้

1. บอกผู้ใช้ว่า "ยังไม่ได้ทำอะไร รออนุมัติ"
2. รอผู้ใช้ตอบยืนยัน
3. เมื่อได้รับอนุมัติ ให้ดำเนินการตามแผน

## Rules

### 1. No Actual Changes

ห้ามแก้ไขจริงจนกว่าจะได้รับอนุมัติ

- ห้ามสร้างไฟล์
- ห้ามแก้ไขไฟล์
- ห้ามย้ายไฟล์
- ห้ามลบไฟล์
- ทำได้แค่อ่านและวิเคราะห์

### 2. Clear Report Format

รูปแบบรายงานต้องชัดเจน

```markdown
# Analysis Report

## Current State
[สภาพปัจจุบัน]

## Issues Found
- **[issue 1]**: [รายละเอียด]
- **[issue 2]**: [รายละเอียด]

## Proposed Changes
| Priority | Action | Impact |
|---|---|---|
| สูง | [action 1] | [impact 1] |
| กลาง | [action 2] | [impact 2] |

## Before vs After
### Before
[สภาพก่อน]

### After
[สภาพหลัง]
```

### 3. Concise And Direct

รายงานกระชับ ตรงประเด็น

- ไม่ต้องอธิบายยาว
- ใช้ bullet points และตาราง
- ระบุตัวเลขและสถิติถ้ามี
- จบด้วยคำถาม "จะทำเลยไหม?"

### 4. Use Related Workflows

ใช้ workflows ที่เกี่ยวข้องสำหรับ analysis

- ทำ `/deep-analyze` สำหรับ analysis ลึก
- ทำ `/analyze-structure` สำหรับโครงสร้างไฟล์
- ทำ `/plan` สำหรับวางแผน

## Expected Outcome

- ผู้ใช้เห็นแผนการทำงานก่อนตัดสินใจ
- ไม่มีการเปลี่ยนแปลงจริงจนกว่าจะอนุมัติ
- รายงานชัดเจน กระชับ ตรงประเด็น
- ผู้ใช้ตัดสินใจได้ว่าจะทำต่อหรือไม่
