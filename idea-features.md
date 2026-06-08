---
title: Idea Features
description: สร้างไอเดีย features ใหม่และปรับปรุง features ที่มีอยู่ พร้อม continuous numbering และระบุประเภท feature
auto_execution_mode: 3
---

## Goal

สร้างไอเดีย features ใหม่และปรับปรุง features ที่มีอยู่ วิเคราะห์ gaps, user needs และ market trends ด้วย continuous numbering และ scope ที่ชัดเจน

## Execute

### 1. Analyze Existing Features

- ทำ `/analyze-project` เพื่อดูภาพรวมโปรเจกต์
- สำรวจ features ทั้งหมดในโปรเจกต์
- ระบุ gaps และ missing capabilities
- วิเคราะห์ user journeys และ pain points
- ประเมิน competitive landscape

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

### 6. Create Feature Report

- สร้างไฟล์ `idea-features.md`
- สร้างตารางเดียวรวม 20 features (Extends + New)
- แต่ละ feature มี continuous numbering 1-20
- ระบุ หมายเลข, ชื่อ Feature, คำอธิบาย, ปัญหาที่แก้, วิธีทำ, Dependencies, หมวดหมู่, ประเภท, ความยาก, ผลกระทบ, Interface, หัวข้อ, Scope
- Type ระบุเป็น: Extends (ปรับปรุงจากเดิม) หรือ New (ใหม่)
- Interface ระบุเป็น: api, cli, web, library, sdk, etc
- Topics ระบุหัวข้อ เช่น authentication, database, ui, etc
- Scope ระบุขอบเขต เช่น package-level, app-level, cross-package
- ใช้ impact indicators: 🔴 สูง, 🟡 ปานกลาง, 🟢 ต่ำ
- ใช้ difficult indicators: 🔴 ยาก, 🟡 ปานกลาง, 🟢 ง่าย
- เรียงลำดับตารางตาม Impact (สูง → ปานกลาง → ต่ำ)

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

### 9. Update Implementation Status

- เมื่อ implement feature เสร็จแล้ว ให้ update ไฟล์ `idea-features.md`
- เพิ่ม column "Status" ในตาราง features พร้อม values:
  - ⏳ Pending - ยังไม่เริ่มทำ
  - 🔄 In Progress - กำลังทำ
  - ✅ Done - เสร็จสมบูรณ์
  - ❌ Blocked - ถูก block
  - 🚫 Cancelled - ยกเลิก
- เพิ่ม column "Implementation Notes" สำหรับบันทึกสิ่งที่ทำไป
- เพิ่ม column "Completed Date" สำหรับบันทึกวันที่เสร็จ
- Update roadmap section ด้วย progress จริง

## Rules

### 1. Single Table (20 Features)

- ตารางเดียวรวมทั้ง Extends และ New features
- ทั้งหมด 20 features เรียงลำดับ 1-20
- Type column ระบุ: Extends (ปรับปรุงจากเดิม) หรือ New (ใหม่)

### 2. Column Order

- ลำดับคอลัมน์: # | Feature | Description | Problem/Solves | How To | Dependencies | Parent/Category | Type | Difficult | Impact | Interface | Topics | Scope
- Type ระบุประเภท: Extends (ปรับปรุงจากเดิม) หรือ New (ใหม่)
- How To อยู่หลัง Problem/Solves (อธิบายวิธีการ implement คร่าวๆ)
- Dependencies อยู่หลัง How To (libraries หรือ services ที่ใช้, ถ้าไม่มีใส่ -)
- Difficult อยู่ก่อน Impact (ระบุความยาก: 🔴 ยาก, 🟡 ปานกลาง, 🟢 ง่าย)
- Impact อยู่ก่อน Interface (ระบุผลกระทบ: 🔴 สูง, 🟡 ปานกลาง, 🟢 ต่ำ)
- Interface ระบุประเภท interface: api, cli, web, library, sdk, etc
- Topics ระบุหัวข้อ เช่น authentication, database, ui, etc
- Scope อยู่ column สุดท้าย (ระบุขอบเขต: package-level, app-level, cross-package)

### 3. Continuous Numbering

- เริ่มจาก 1 ถึง 20 ต่อเนื่องกัน
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

- ถ้าผู้ใช้บอกว่า "ทำ ... ให้" ให้ทำตาม `/ship-verify` เลย
- ไม่ต้องทำตาม workflow ปกติถ้าผู้ใช้สั่งโดยตรง
- ทำงานอัตโนมัติโดยไม่หยุดถาม

### 10. Output Format

- สร้างไฟล์ `idea-features.md` สำหรับเก็บ feature report
- ใช้ markdown table สำหรับแสดง features
- ตารางรวมทั้งหมด 20 อันดับ เรียงตาม Impact
- ตารางเป็นภาษาไทยทั้งหมด

## Expected Outcome

- ตารางเดียว 20 อันดับ (1-20) พร้อม continuous numbering
- Column Type ระบุ Extends หรือ New
- เรียงลำดับตาม Impact (สูง → ปานกลาง → ต่ำ)
- Column order: #, Feature, Description, Problem/Solves, How To, Dependencies, Parent/Category, Type, Difficult, Impact, Interface, Topics, Scope
- Interface ระบุประเภท: api, cli, web, library, sdk, etc
- Topics ระบุหัวข้อ เช่น authentication, database, ui, etc
- Scope ระบุขอบเขต: package-level, app-level, cross-package
- Feature roadmap พร้อม phasing strategy
- Resource estimates และ timeline
- Success criteria สำหรับ validate features
