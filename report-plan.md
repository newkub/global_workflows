---
title: Report Plan
description: รายงานแผนงานก่อนดำเนินการ พร้อมตาราง tasks และ file structure
auto_execution_mode: 3
related_workflows:
  - /report-format-table
  - /report-format-file-structure
  - /report-format-summary
  - /plan-task
  - /plan-code
  - /follow-content-quality
---

## Goal

รายงานแผนงานก่อนดำเนินการโดยแสดง task breakdown เป็นตาราง และ file structure ที่จะกระทบ แล้วลงมือทำทันที

## Scope

ใช้สำหรับการรายงานแผนงานก่อนลงมือทำงานทุกประเภท ทั้ง code, workflow, config, และ documentation

## Execute

### 1. Analyze Request

วิเคราะห์สิ่งที่ผู้ใช้ต้องการ

1. ระบุ scope ของงานที่ต้องทำ
2. ระบุไฟล์ที่จะเกี่ยวข้องและผลกระทบ
3. ระบุ dependencies และ constraints
4. ถ้า project มี `AGENTS.md` ให้อ่านและทำตาม

### 2. Prepare Plan Data

เตรียมข้อมูลแผนงานก่อนจัดรูปแบบ

1. แบ่งงานเป็น tasks ย่อยๆ ตาม `single responsibility`
2. จัดลำดับ tasks ตาม `impact order`: foundation ก่อน, high risk เพื่อ fail fast
3. ระบุไฟล์ที่จะสร้างใหม่, แก้ไข, หรือลบ
4. ระบุ dependencies ระหว่าง tasks
5. ระบุ risks และ mitigation strategies

### 3. Format Task Table

จัดรูปแบบตาราง tasks ตาม `/report-format-table`

1. กำหนด columns: #, Task, Description, Files, Type, Priority, Status
2. ใช้ `Type` ระบุ: `create`, `edit`, `delete`, `refactor`
3. ใช้ `Priority` ระบุ: `P0` (critical), `P1` (high), `P2` (medium), `P3` (low)
4. ใช้ `Status` ระบุ: ⏳ pending, 🔄 in_progress, ✅ completed
5. จัดเรียง rows ตาม priority และ execution order
6. ใช้ `backticks` สำหรับ file paths และ commands

### 4. Show File Structure

แสดง file structure ที่จะกระทบตาม `/report-format-file-structure`

1. แสดง tree structure ของไฟล์ที่จะกระทบ
2. ใช้ tree characters (`├──`, `└──`) สำหรับ hierarchy
3. ใช้ markers สำหรับไฟล์ใหม่ (`[NEW]`), แก้ไข (`[EDIT]`), ลบ (`[DELETE]`)
4. เพิ่ม comment ด้านหลังไฟล์อธิบาย purpose
5. ถ้ามีไฟล์เกิน 10 ไฟล์ ให้จัดกลุ่มตาม directory

### 5. Report Plan

รายงานแผนงานในแชทก่อนดำเนินการ

1. แสดง task table ตามขั้นตอนที่ 3
2. แสดง file structure ตามขั้นตอนที่ 4
3. สรุปแผนงานด้วย `/report-format-summary` เพื่อ highlight สิ่งสำคัญ
4. ระบุ risks และ mitigation strategies
5. ระบุ success criteria สำหรับแต่ละ task

### 6. Execute Plan

ลงมือทำตามแผนงานที่รายงาน

1. ทำตาม task table ตามลำดับ priority
2. อัพเดท `Status` column เป็น 🔄 เมื่อเริ่มทำ task
3. อัพเดท `Status` column เป็น ✅ เมื่อ task เสร็จ
4. ถ้าพบ issues ระหว่างทำ ให้รายงานและปรับแผนงาน

## Rules

### 1. Report First Execute Second

ต้องรายงานแผนก่อนลงมือทำ

- ต้องแสดง task table ก่อนเริ่มทำ
- ต้องแสดง file structure ก่อนเริ่มทำ
- ลงมือทำทันทีหลังรายงาน ไม่ต้องรอยืนยัน
- ถ้าผู้ใช้บอกว่า "ทำ ... ให้" ให้รายงานแผนแล้วทำเลย

### 2. Task Table Structure

โครงสร้างตาราง tasks

- ใช้ columns: #, Task, Description, Files, Type, Priority, Status
- ใช้ `Type`: `create`, `edit`, `delete`, `refactor`
- ใช้ `Priority`: `P0`, `P1`, `P2`, `P3`
- ใช้ `Status`: ⏳, 🔄, ✅
- จัดเรียงตาม priority และ execution order

### 3. File Structure Format

รูปแบบ file structure

- ใช้ tree characters (`├──`, `└──`) สำหรับ hierarchy
- ใช้ markers: `[NEW]`, `[EDIT]`, `[DELETE]` สำหรับ action type
- เพิ่ม comment ด้านหลังไฟล์อธิบาย purpose
- จัดกลุ่มตาม directory ถ้าเกิน 10 ไฟล์

### 4. Task Breakdown

แบ่ง tasks ให้ละเอียด

- แต่ละ task ต้องมี `single responsibility`
- แยก tasks ที่ซับซ้อนออกเป็น tasks ย่อย
- แต่ละ task ต้องทำสิ่งเดียวที่ชัดเจน
- ระบุ files ที่กระทบในทุก task

### 5. Execution Order

จัดลำดับการทำตาม priority

- Foundation components ก่อน
- Dependencies ของขั้นตอนถัดไปก่อน
- High risk items เพื่อ fail fast
- Hard to change ก่อน

### 6. Content Quality

ทำตาม `/follow-content-quality` สำหรับคุณภาพเนื้อหา

- ใช้ `backticks` สำหรับ `file paths`, `commands`, `/workflow-name`
- ใช้ bold สำหรับ headers และ keywords สำคัญ
- ตารางต้องอ่านง่ายบนทุก device
- ข้อความกระชับ ตรงประเด็น

## Expected Outcome

- ผู้ใช้เข้าใจแผนงานก่อนลงมือทำ
- Task table ที่ละเอียดและจัดลำดับ priority
- File structure ที่แสดงไฟล์ที่จะกระทบ
- ลงมือทำทันทีหลังรายงาน
- ผลลัพธ์เหมือนกันทุกครั้ง
