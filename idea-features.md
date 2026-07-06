---
title: Idea Features
description: สร้างไอเดีย features ใหม่และปรับปรุง features ที่มีอยู่ พร้อม continuous numbering และระบุประเภท feature
auto_execution_mode: 3
related_workflows:
  - /analyze-project
  - /refactor
  - /realize-implementation
---

## Goal

สร้างไอเดีย features ใหม่และปรับปรุง features ที่มีอยู่ วิเคราะห์ gaps, user needs และ market trends ด้วย continuous numbering และ scope ที่ชัดเจน

## Scope

ครอบคลุมการวิเคราะห์โปรเจกต์ การเลือก library การวางแผน architecture การกำหนดลำดับ implement และการตอบผลลัพธ์ในแชท

## Execute

### 1. Analyze Project

วิเคราะห์โปรเจกต์เพื่อเข้าใจโครงสร้างและ dependencies ก่อนเริ่มวางแผน

1. ทำ `/analyze-project` เพื่อวิเคราะห์โปรเจกต์
2. บันทึก project structure และ dependencies

### 2. Analyze Package Structure

1. วิเคราะห์โครงสร้าง packages จาก project structure
2. ระบุ code ที่สามารถ reuse ได้จาก packages ที่มีอยู่
3. วิเคราะห์ dependencies ระหว่าง packages
4. ระบุ boundary ของแต่ละ package เพื่อกำหนด scope ของ features

### 3. Define Feature Scope

1. กำหนด scope ของแต่ละ feature ให้ชัดเจน
2. ตรวจสอบว่า feature ไม่ over-scope จนเกินความสามารถของ packages
3. ระบุว่า feature ควรอยู่ใน package ไหน
4. กำหนดว่า feature ควรเป็น part ของ package หรือ standalone app

### 4. Research Market

1. ศึกษา features ยอดนิยมใน similar products
2. วิเคราะห์ emerging technologies และ trends
3. หา user requests จาก forums, reviews, feedback
4. ศึกษา industry reports และ predictions

### 5. Generate Ideas

1. สร้างไอเดียปรับปรุง features ที่มีอยู่ (Extends)
2. สร้างไอเดีย features ใหม่ที่ยังไม่มี (New)
3. ระบุ problem ที่แต่ละ feature จะ solve
4. กำหนด target users และ use cases
5. ระบุ interface type (api, cli, web, library, etc)
6. จัดกลุ่ม features ตาม topics

### 6. Prioritize And Present Results

1. จัดลำดับตาม value vs effort ด้วย framework เช่น RICE (Reach, Impact, Confidence, Effort)
2. ระบุ quick wins และ strategic bets
3. กำหนด MVP scope สำหรับแต่ละ feature
4. เสนอ roadmap สำหรับ implement features (MVP → v2 → v3)
5. ตอบ 2 ตาราง (Required Features และ Optional Features) ในแชทโดยตรง
6. แสดง architecture และ roadmap ในแชท

## Rules

### 1. Two Tables (Required & Optional)

- แยกเป็น 2 ตาราง: Required Features และ Optional Features
- Required Features: features ที่จำเป็นสำหรับ MVP
- Optional Features: features ที่เพิ่ม value แต่ไม่จำเป็นสำหรับ MVP
- แต่ละตารางมี continuous numbering เริ่มจาก 1 ไม่เกิน 20 row
- ไม่แบ่งแยกระหว่าง Extends และ New
- เรียงตามลำดับ Impact ก่อน (🔴 สูง → 🟡 ปานกลาง → 🟢 ต่ำ) แล้วตามลำดับเลข
- Type column ระบุ: Extends (ปรับปรุงจากเดิม) หรือ New (ใหม่)

### 2. Column Order

- ลำดับคอลัมน์: # | Feature | Description | Problem/Solves | How To | Dependencies | Parent/Category | Type | Difficult | Impact | จัดลำดับ | Interface | Status | Topics | Scope
- Type ระบุ: Extends (ปรับปรุงจากเดิม) หรือ New (ใหม่)
- Difficult ระบุ: 🔴 ยาก, 🟡 ปานกลาง, 🟢 ง่าย
- Impact ระบุ: 🔴 สูง, 🟡 ปานกลาง, 🟢 ต่ำ
- จัดลำดับ ระบุ: 1-N (ต่อเนื่องในแต่ละตาราง)
- Interface ระบุ: api, cli, web, library, sdk, etc
- Status ระบุ: ⬜ ยังไม่ทำ, 🔄 กำลังทำ, ✅ เสร็จแล้ว, ❌ ยกเลิก
- Topics ระบุหัวข้อ เช่น authentication, database, ui, etc
- Scope ระบุ: package-level, app-level, cross-package

### 3. Define Problem First

- ทุก feature ต้อง solve real problem
- ไม่สร้าง feature เพราะเท่ห์อย่างเดียว
- Validate ว่า users ต้องการจริง
- Focus บน pain points ที่มี impact สูง

### 4. Start with MVP

- เริ่มด้วย minimum viable version
- Build iteratively ไม่ใช่ big bang
- รับ feedback early และ often
- Pivot ได้ถ้าไม่ work

### 5. Assess Technical Feasibility

- ประเมิน effort อย่าง realistic
- พิจารณา long-term maintenance cost
- ระบุ technical debt ที่อาจเกิด
- หา balance ระหว่าง innovation และ stability

### 6. Scope Validation

- ตรวจสอบว่า feature ไม่ over-scope จนเกินความสามารถของ packages
- กำหนด scope ให้ชัดเจน: package-level, app-level, หรือ cross-package
- ตรวจสอบว่า feature สอดคล้องกับ boundary ของ packages
- พิจารณา dependencies ระหว่าง packages ก่อนกำหนด scope

### 7. Direct Execution

- ถ้าผู้ใช้บอกว่า "ทำ ... ให้" ให้ทำตาม `/refactor` และ `/realize-implementation` เลย
- ไม่ต้องทำตาม workflow ปกติถ้าผู้ใช้สั่งโดยตรง
- ทำงานอัตโนมัติโดยไม่หยุดถาม

### 8. Output Format

- ใช้ markdown table สำหรับแสดง features
- ตารางเป็นภาษาไทยทั้งหมด
- แสดง architecture และ roadmap ในแชท
- เมื่อ implement เสร็จ 1 feature ให้ update Status เป็น ✅ ในผลลัพธ์ที่ตอบในแชท

## Expected Outcome

- 2 ตาราง (Required Features และ Optional Features) พร้อม continuous numbering ไม่เกิน 20 row ต่อตาราง
- เรียงลำดับตาม Impact (สูง → ปานกลาง → ต่ำ)
- Column order และค่าต่างๆ ตาม Rule 1 และ Rule 2
- Roadmap และ architecture แสดงในแชท

