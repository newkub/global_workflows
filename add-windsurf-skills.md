---
title: Add Windsurf Skills
description: สร้าง skills folder ที่ C:\Users\Veerapong\.codeium\windsurf\skills และทำตาม /follow-write-skills
auto_execution_mode: 3
---

## Goal

สร้าง Windsurf Skills ให้มีโครงสร้างสม่ำเสมอตามมาตรฐาน `/follow-write-skills`

## Execute

### 1. Prepare Skill Content

1. วางแผนเนื้อหา skill ที่จะสร้าง
2. ทำ `/follow-write-skills` เพื่อดูโครงสร้างมาตรฐาน
3. อ้างอิง skills ที่คล้ายกันใน skills folder

### 2. Create Skill Folder Structure

1. สร้าง folder ที่ `C:\Users\Veerapong\.codeium\windsurf\skills\skill-name`
2. สร้าง subfolders ตาม structure: project/, guide/, interface/, reference/, examples/, rules/, patterns/, usecase/, workflows/, integration/, changelog/
3. สร้างไฟล์ SKILL.md ใน root folder
4. ใช้ `/follow-write-skills` เพื่อดูรายละเอียดแต่ละ folder

### 3. Write SKILL.md Index

1. เขียนคำอธิบายสั้นๆ เกี่ยวกับวัตถุประสงค์
2. สรุปเนื้อหาในตาราง 3 คอลัมน์
3. จัดกลุ่มไฟล์ตามโฟลเดอร์
4. เรียงลำดับตามการใช้งาน

### 4. Write Content Files

1. สร้างไฟล์ใน guide/ ทั้งหมด (REQUIRED)
2. สร้าง reference/official.md (REQUIRED)
3. สร้างไฟล์ใน folder อื่นๆ ตามความจำเป็น (OPTIONAL)
4. ใช้ชื่อไฟล์ที่สื่อความหมายโดยตรง ไม่มี prefix
5. ใช้ kebab-case สำหรับชื่อไฟล์หลายคำ
6. ใช้ `/follow-content-quality` สำหรับทุกไฟล์ `.md`

### 5. Validate Skill

1. ตรวจสอบตาม `/follow-write-skills`
2. ตรวจสอบว่าแต่ละไฟล์ไม่เกิน 200 บรรทัด
3. ตรวจสอบ folder structure ครบถ้วน
4. ตรวจสอบ file naming สอดคล้องกัน

### 6. Update References

1. ทำ `/update-reference` หากมี file operations
2. ตรวจสอบ consistency กับ skills อื่น

## Rules

### 1. File Location

ตำแหน่งและชื่อไฟล์:

- ต้องสร้างที่ `C:\Users\Veerapong\.codeium\windsurf\skills\skill-name`
- ใช้ชื่อ folder เป็น kebab-case
- สร้าง SKILL.md ใน root folder

### 2. Folder Structure

ตาม `/follow-write-skills`:

- SKILL.md - index file (REQUIRED)
- project/ - OPTIONAL ข้อมูลพื้นฐาน project
- guide/ - REQUIRED guides และ tutorials
- interface/ - OPTIONAL interface documentation
- reference/ - REQUIRED ลิงก์และ references
- examples/ - OPTIONAL ตัวอย่างการใช้งาน
- rules/ - OPTIONAL rules และ conventions
- patterns/ - OPTIONAL design patterns
- usecase/ - OPTIONAL use cases
- workflows/ - OPTIONAL workflows
- integration/ - OPTIONAL integration กับ tools อื่นๆ
- changelog/ - OPTIONAL changelog และ version history

### 3. File Naming

ตาม `/follow-write-skills`:

- ใช้ชื่อสื่อความหมายโดยตรง
- ไม่ใช้ prefix ชื่อ skill
- ใช้ kebab-case เสมอ
- ชื่อไฟล์ต้องสอดคล้องกับเนื้อหา

### 4. Content Standards

ตาม `/follow-write-skills`:

- ใช้ภาษาชัดเจน เข้าใจง่าย
- อธิบาย context และเหตุผล
- ใช้ `/learn-from-web` ก่อนเขียนเนื้อหา dependencies
- สรุปข้อมูลสำคัญในตารางเมื่อมีหลายรายการ
- แต่ละไฟล์ต้องไม่เกิน 200 บรรทัด

### 5. Required Files

ไฟล์ที่ต้องมี:

- SKILL.md - index file
- guide/key-concept.md
- guide/all-features.md
- guide/installation.md
- guide/configuration.md
- guide/quick-start.md
- guide/best-practices.md
- guide/troubleshooting.md
- reference/official.md

### 6. Interface Documentation

สำหรับ interface/ folder:

- programmatic-api/ - index.md สรุปทุกอย่างใน folder
- cli/ - index.md สรุปทุกอย่างใน folder
- web/ - index.md สรุปทุกอย่างใน folder
- configuration/ - index.md สรุปทุกอย่างใน folder

### 7. Content Quality

คุณภาพเนื้อหา:

- ใช้ `/follow-content-quality` ก่อนเริ่มเขียน
- เนื้อหาไม่เกิน 200 บรรทัดต่อไฟล์
- ถ้าเกิน 200 บรรทัดให้ refactor แยกไฟล์
- ใช้ folder structure สำหรับจัดกลุ่มไฟล์ที่แยกออกมา

## Expected Outcome

- Skill folder สร้างที่ `C:\Users\Veerapong\.codeium\windsurf\skills\skill-name`
- โครงสร้างสอดคล้องกับ `/follow-write-skills`
- SKILL.md index ครบถ้วน
- File naming สอดคล้องกัน
- Content มีคุณภาพ ไม่เกิน 200 บรรทัดต่อไฟล์
