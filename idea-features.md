---
title: Idea Features
description: สร้างไอเดีย features ใหม่และปรับปรุง features ที่มีอยู่ พร้อม continuous numbering และระบุประเภท feature
auto_execution_mode: 3
---

## Goal

สร้างไอเดีย features ใหม่และปรับปรุง features ที่มีอยู่ วิเคราะห์ gaps, user needs และ market trends ด้วย continuous numbering และ scope ที่ชัดเจน

## Plan

วิเคราะห์โปรเจกต์ สำรวจ library วางแผน architecture กำหนด implementation path และบันทึกใน task document

## Scope

ครอบคลุมการวิเคราะห์โปรเจกต์ การเลือก library การวางแผน architecture การกำหนดลำดับ implement และการบันทึกแผนงาน

## Execute

### 1. Analyze Project

วิเคราะห์โปรเจกต์เพื่อเข้าใจโครงสร้างและ dependencies ก่อนเริ่มวางแผน

- ทำ `/analyze-project` เพื่อวิเคราะห์โปรเจกต์
- บันทึก project structure และ dependencies

### 2. Analyze Package Structure

- วิเคราะห์โครงสร้าง packages จาก project structure
- ระบุ code ที่สามารถ reuse ได้จาก packages ที่มีอยู่
- วิเคราะห์ dependencies ระหว่าง packages
- ระบุ boundary ของแต่ละ package เพื่อกำหนด scope ของ features

### 3. Define Feature Scope

- กำหนด scope ของแต่ละ feature ให้ชัดเจน
- ตรวจสอบว่า feature ไม่ over-scope จนเกินความสามารถของ packages
- ระบุว่า feature ควรอยู่ใน package ไหน
- กำหนดว่า feature ควรเป็น part ของ package หรือ standalone app

### 4. Research Market

- ศึกษา features ยอดนิยมใน similar products
- วิเคราะห์ emerging technologies และ trends
- หา user requests จาก forums, reviews, feedback
- ศึกษา industry reports และ predictions

### 5. Generate Ideas

- สร้างไอเดียปรับปรุง features ที่มีอยู่ (Extends)
- สร้างไอเดีย features ใหม่ที่ยังไม่มี (New)
- ระบุ problem ที่แต่ละ feature จะ solve
- กำหนด target users และ use cases
- ระบุ interface type (api, cli, web, library, etc)
- จัดกลุ่ม features ตาม topics

### 6. Create Task Document

สร้างไฟล์ task document ใน workspace

- สร้างไฟล์ `.agents/task/<name>-DD-MM-YYYY.md` ใน workspace
- บันทึก architecture และ tasks
- บันทึก expected outcome

### 7. Prioritize by Value

- จัดลำดับตาม value vs effort
- ใช้ framework เช่น RICE (Reach, Impact, Confidence, Effort)
- ระบุ quick wins และ strategic bets
- กำหนด MVP scope สำหรับแต่ละ feature

### 8. Define Roadmap

- เสนอ roadmap สำหรับ implement features
- แนะนำ phasing strategy (MVP → v2 → v3)
- ให้ resource estimates และ timeline
- สร้าง criteria สำหรับ validate feature success

## Rules

### 1. Two Tables (Required & Optional)

- แยกเป็น 2 ตาราง: Required Features และ Optional Features
- Required Features: features ที่จำเป็นสำหรับ MVP
- Optional Features: features ที่เพิ่ม value แต่ไม่จำเป็นสำหรับ MVP
- แต่ละตารางมี continuous numbering เริ่มจาก 1
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

### 3. Continuous Numbering

- แต่ละตารางมี continuous numbering เริ่มจาก 1
- ไม่แบ่งแยกระหว่าง Extends และ New
- เรียงตามลำดับ Impact ก่อน แล้วตามลำดับเลข

### 4. Sort by Impact

- เรียงลำดับตารางตาม Impact: 🔴 สูง → 🟡 ปานกลาง → 🟢 ต่ำ
- ภายในแต่ละ Impact level เรียงตามลำดับ numbering

### 5. Define Problem First

- ทุก feature ต้อง solve real problem
- ไม่สร้าง feature เพราะเท่ห์อย่างเดียว
- Validate ว่า users ต้องการจริง
- Focus บน pain points ที่มี impact สูง

### 6. Start with MVP

- เริ่มด้วย minimum viable version
- Build iteratively ไม่ใช่ big bang
- รับ feedback early และ often
- Pivot ได้ถ้าไม่ work

### 7. Assess Technical Feasibility

- ประเมิน effort อย่าง realistic
- พิจารณา long-term maintenance cost
- ระบุ technical debt ที่อาจเกิด
- หา balance ระหว่าง innovation และ stability

### 8. Scope Validation

- ตรวจสอบว่า feature ไม่ over-scope จนเกินความสามารถของ packages
- กำหนด scope ให้ชัดเจน: package-level, app-level, หรือ cross-package
- ตรวจสอบว่า feature สอดคล้องกับ boundary ของ packages
- พิจารณา dependencies ระหว่าง packages ก่อนกำหนด scope

### 9. Direct Execution

- ถ้าผู้ใช้บอกว่า "ทำ ... ให้" ให้ทำตาม `/realize-implementation` เลย
- ไม่ต้องทำตาม workflow ปกติถ้าผู้ใช้สั่งโดยตรง
- ทำงานอัตโนมัติโดยไม่หยุดถาม

### 10. Output Format

สร้างไฟล์ task document พร้อม 2 ตาราง features

- สร้างไฟล์ `.agents/task/<name>-DD-MM-YYYY.md` ใน workspace
- บันทึก 2 ตาราง (Required Features และ Optional Features) ในไฟล์
- ใช้ markdown table สำหรับแสดง features
- แต่ละตารางมี continuous numbering เริ่มจาก 1
- ตารางเป็นภาษาไทยทั้งหมด
- บันทึก architecture และ tasks ในไฟล์

## Expected Outcome

- 2 ตาราง (Required Features และ Optional Features) พร้อม continuous numbering
- Column Type ระบุ Extends หรือ New
- เรียงลำดับตาม Impact (สูง → ปานกลาง → ต่ำ)
- Column order: #, Status, Feature, Description, Problem/Solves, How To, Dependencies, Parent/Category, Type, Difficult, Impact, จัดลำดับ, Interface, Topics, Scope
- Status ระบุสถานะ: ⬜ ยังไม่ทำ, 🔄 กำลังทำ, ✅ เสร็จแล้ว, ❌ ยกเลิก
- Interface ระบุประเภท: api, cli, web, library, sdk, etc
- Topics ระบุหัวข้อ เช่น authentication, database, ui, etc
- Scope ระบุขอบเขต: package-level, app-level, cross-package
- เมื่อ implement เสร็จ 1 feature ให้ update Status เป็น ✅ ใน task document

