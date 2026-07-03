---
title: Idea Refactor Files
description: สร้างไอเดีย refactor files และ modules พร้อม continuous numbering และระบุประเภท refactor
auto_execution_mode: 3
related_workflows:
  - /refactor-workspace
  - /refactor-file-to-single-responsibility
  - /refactor-module-to-single-responsibility
  - /refactor-long-files-to-single-responsibility
  - /analyze-project
  - /check-long-files
---

## Goal

สร้างไอเดีย refactor files และ modules ใหม่และปรับปรุงที่มีอยู่ วิเคราะห์ code quality issues, technical debt และ improvement opportunities ด้วย continuous numbering และ scope ที่ชัดเจน

## Scope

ครอบคลุมการวิเคราะห์ files/modules ที่ต้อง refactor, การสร้างไอเดีย refactor improvements, การจัดลำดับตาม impact และ effort, และการบันทึกใน task document

## Execute

### 1. Analyze Codebase

วิเคราะห์ codebase เพื่อระบุ files/modules ที่ต้อง refactor

1. ทำ `/analyze-project` เพื่อดูภาพรวมโปรเจกต์
2. ทำ `/check-long-files` เพื่อค้นหาไฟล์ที่ยาวเกิน `threshold`
3. ทำ `/check-duplication` เพื่อตรวจสอบ `code duplication`
4. ทำ `/analyze-consistency` เพื่อตรวจสอบ `naming` และ `style consistency`
5. ระบุ `files/modules` ที่มี `multiple responsibilities`
6. ระบุ `files/modules` ที่มี `coupling` สูง
7. ระบุ `technical debt` ที่สะสม

### 2. Define Refactor Scope

กำหนด scope ของแต่ละ refactor idea

1. กำหนด `scope` ของแต่ละ `refactor idea` ให้ชัดเจน
2. ตรวจสอบว่า `refactor` ไม่ `over-scope` จนเกินความสามารถ
3. ระบุว่า `refactor` ควรอยู่ใน `file/module` ไหน
4. กำหนดว่า `refactor` ควรเป็น `file-level` หรือ `module-level`
5. ระบุ `dependencies` ระหว่าง `files/modules`

### 3. Generate Refactor Ideas

สร้างไอเดีย refactor improvements ทั้ง Extends และ New

1. สร้างไอเดียปรับปรุง `files/modules` ที่มีอยู่ (Extends)
2. สร้างไอเดีย `refactor improvements` ใหม่ที่ยังไม่มี (New)
3. ระบุ `code quality problem` ที่แต่ละ `refactor` จะ solve
4. กำหนด `target files/modules` และ `use cases`
5. ระบุ `refactor type` (`split`, `extract`, `rename`, `restructure`, etc)
6. จัดกลุ่ม `refactor ideas` ตาม `categories`

### 4. Create Task Document

สร้างไฟล์ task document พร้อมตาราง refactor ideas

1. ทำตาม Rules ข้อ 1 สำหรับสร้างตาราง `refactor ideas`
2. บันทึกในไฟล์ `.agents/task/<name>-DD-MM-YYYY.md` ใน `workspace`

### 5. Prioritize and Roadmap

จัดลำดับและเสนอ roadmap

1. จัดลำดับตาม `value vs effort`
2. ใช้ `framework` เช่น `RICE` (Reach, Impact, Confidence, Effort)
3. ระบุ `quick wins` และ `strategic refactors`
4. กำหนด `MVP scope` สำหรับแต่ละ `refactor idea`
5. เสนอ `roadmap` สำหรับ `implement refactor ideas`
6. แนะนำ `phasing strategy` (MVP → v2 → v3)
7. ให้ `resource estimates` และ `timeline`
8. สร้าง `criteria` สำหรับ `validate refactor success`

## Rules

### 1. Single Table (Refactor Ideas)

ตารางเดียวรวมทั้ง Extends และ New refactor ideas

- ตารางเดียวรวมทั้ง `Extends` และ `New refactor ideas`
- ทั้งหมด `continuous numbering`
- `Type column` ระบุ: Extends (ปรับปรุงจากเดิม) หรือ New (ใหม่)
- ระบุ หมายเลข, ชื่อ `Refactor Idea`, คำอธิบาย, ปัญหาที่แก้, วิธีทำ, `Dependencies`, `File/Module`, ประเภท, ความยาก, ผลกระทบ, `Refactor Type`, หัวข้อ, `Scope`
- `Type` ระบุเป็น: Extends (ปรับปรุงจากเดิม) หรือ New (ใหม่)
- `Refactor Type` ระบุเป็น: `split`, `extract`, `rename`, `restructure`, `move`, `delete`, etc
- `Topics` ระบุหัวข้อ เช่น `naming`, `duplication`, `coupling`, `performance`, etc
- `Scope` ระบุขอบเขต เช่น `file-level`, `module-level`, `package-level`
- ใช้ `impact indicators`: 🔴 สูง, 🟡 ปานกลาง, 🟢 ต่ำ
- ใช้ `difficult indicators`: 🔴 ยาก, 🟡 ปานกลาง, 🟢 ง่าย
- เรียงลำดับตารางตาม `Impact` (สูง → ปานกลาง → ต่ำ)

### 2. Column Order

ลำดับคอลัมน์ตามมาตรฐาน

- ลำดับคอลัมน์: # | Refactor Idea | Description | Problem/Solves | How To | Dependencies | File/Module | Type | Difficult | Impact | Refactor Type | Topics | Scope
- `Type` ระบุประเภท: Extends (ปรับปรุงจากเดิม) หรือ New (ใหม่)
- `Difficult` ระบุ: 🔴 ยาก, 🟡 ปานกลาง, 🟢 ง่าย
- `Impact` ระบุ: 🔴 สูง, 🟡 ปานกลาง, 🟢 ต่ำ
- `Refactor Type` ระบุ: `split`, `extract`, `rename`, `restructure`, `move`, `delete`, etc
- `Scope` ระบุ: `file-level`, `module-level`, `package-level`

### 3. Continuous Numbering

ใช้ continuous numbering ตลอดทั้งตาราง

- `Continuous numbering` ตลอดทั้งตาราง
- ไม่แบ่งแยกระหว่าง `Extends` และ `New`
- เรียงตามลำดับ `Impact` ก่อน แล้วตามลำดับเลข

### 4. Sort by Impact

เรียงลำดับตารางตาม Impact

- เรียงลำดับตารางตาม `Impact`: 🔴 สูง → 🟡 ปานกลาง → 🟢 ต่ำ
- ภายในแต่ละ `Impact level` เรียงตามลำดับ `numbering`

### 5. Define Problem First

ทุก refactor idea ต้อง solve real code quality problem

- ทุก `refactor idea` ต้อง solve real `code quality problem`
- ไม่ `refactor` เพราะเท่ห์อย่างเดียว
- `Validate` ว่า `refactor` มี `impact` จริง
- Focus บน `pain points` ที่มี `impact` สูง

### 6. Refactor Types

ระบุประเภท refactor ที่ชัดเจน

| Refactor Type | Description | Example |
|---------------|-------------|---------|
| `split` | แยก file/module ออกเป็นส่วนย่อย | split long file |
| `extract` | ดึง logic ออกเป็น function/module | extract function |
| `rename` | เปลี่ยนชื่อให้สื่อความหมาย | rename variable |
| `restructure` | ปรับโครงสร้างให้ถูกต้อง | restructure folder |
| `move` | ย้าย file/module ไปตำแหน่งที่เหมาะสม | move utility |
| `delete` | ลบ code ที่ไม่ใช้ | remove dead code |

### 7. Direct Execution

ทำงานอัตโนมัติโดยไม่หยุดถาม

- ถ้าผู้ใช้บอกว่า "ทำ ... ให้" ให้ทำตาม `/refactor-workspace` เลย
- ไม่ต้องทำตาม `workflow` ปกติถ้าผู้ใช้สั่งโดยตรง
- ทำงานอัตโนมัติโดยไม่หยุดถาม

### 8. Output Format

สร้างไฟล์ task document พร้อมตาราง refactor ideas

- สร้างไฟล์ `.agents/task/<name>-DD-MM-YYYY.md` ใน `workspace`
- ใช้ `markdown table` สำหรับแสดง `refactor ideas`
- ตารางเป็นภาษาไทยทั้งหมด

## Expected Outcome

- ตารางเดียวรวม `refactor ideas` (Extends + New) พร้อม `continuous numbering`
- `Column Type` ระบุ Extends หรือ New
- เรียงลำดับตาม `Impact` (สูง → ปานกลาง → ต่ำ)
- `Column order`: #, Refactor Idea, Description, Problem/Solves, How To, Dependencies, File/Module, Type, Difficult, Impact, Refactor Type, Topics, Scope
- `Refactor Type` ระบุประเภท: `split`, `extract`, `rename`, `restructure`, `move`, `delete`, etc
- `Topics` ระบุหัวข้อ เช่น `naming`, `duplication`, `coupling`, `performance`, etc
- `Scope` ระบุขอบเขต: `file-level`, `module-level`, `package-level`
- เมื่อ `implement` เสร็จ 1 `refactor idea` ให้ update `Status` เป็น ✅ ใน `task document`

