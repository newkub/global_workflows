---
title: Idea UX/UI
description: สร้างไอเดีย UX/UI improvements ใหม่และปรับปรุง UX/UI ที่มีอยู่ วิเคราะห์ usability gaps, user experience และ design trends ด้วย continuous numbering และ scope ที่ชัดเจน
auto_execution_mode: 3
---

## Goal

สร้างไอเดีย UX/UI improvements ใหม่และปรับปรุง UX/UI ที่มีอยู่ วิเคราะห์ usability gaps, user experience และ design trends ด้วย continuous numbering และ scope ที่ชัดเจน

## Plan

วิเคราะห์ UX/UI ปัจจุบัน วิจัย design trends สร้างไอเดีย improvements และจัดลำดับตาม impact

## Scope

ครอบคลุมการวิเคราะห์ UX/UI การวิจัย design trends การสร้างไอเดีย improvements และการจัดลำดับตาม impact

## Execute

### 1. Analyze UX/UI

วิเคราะห์ UX/UI ปัจจุบันและ component structure

- ทำ `/analyze-project` เพื่อดูภาพรวมโปรเจกต์
- ทำ `/refactor-to-workspace` เพื่อวิเคราะห์โครงสร้าง components
- สำรวจ UX/UI ทั้งหมดในโปรเจกต์
- ระบุ usability gaps และ missing design elements
- ระบุ UI components ที่สามารถ reuse ได้จาก packages ที่มีอยู่
- ระบุ boundary ของแต่ละ component เพื่อกำหนด scope ของ UX/UI improvements

### 2. Define Scope and Research

กำหนด scope และวิจัย design trends

- กำหนด scope ของแต่ละ UX/UI improvement ให้ชัดเจน
- ตรวจสอบว่า improvement ไม่ over-scope จนเกินความสามารถของ components
- ศึกษา UX/UI patterns ยอดนิยมใน similar products
- วิเคราะห์ emerging design trends และ best practices
- หา user feedback จาก usability testing, reviews, analytics
- ศึกษา design systems และ accessibility guidelines (WCAG)

### 3. Generate Ideas

สร้างไอเดีย UX/UI improvements ทั้ง Extends และ New

- สร้างไอเดียปรับปรุง UX/UI ที่มีอยู่ (Extends)
- สร้างไอเดีย UX/UI improvements ใหม่ที่ยังไม่มี (New)
- ระบุ usability problem ที่แต่ละ improvement จะ solve
- กำหนด target users และ use cases
- ระบุ component type (button, form, layout, navigation, etc)
- จัดกลุ่ม UX/UI improvements ตาม design areas

### 4. Create Task Document

สร้างไฟล์ task document พร้อมตาราง UX/UI improvements

- สร้างไฟล์ `.agents/task/<name>-DD-MM-YYYY.md` ใน workspace
- สร้างตารางเดียวรวม 40 UX/UI improvements (Extends + New)
- แต่ละ improvement มี continuous numbering 1-40
- ระบุ หมายเลข, ชื่อ UX/UI Improvement, คำอธิบาย, ปัญหาที่แก้, วิธีทำ, Dependencies, Component/Category, ประเภท, ความยาก, ผลกระทบ, Interface, หัวข้อ, Scope
- Type ระบุเป็น: Extends (ปรับปรุงจากเดิม) หรือ New (ใหม่)
- Interface ระบุเป็น: component, layout, pattern, interaction, animation, etc
- Topics ระบุหัวข้อ เช่น accessibility, responsive, dark-mode, etc
- Scope ระบุขอบเขต เช่น component-level, page-level, app-level, cross-app
- ใช้ impact indicators: 🔴 สูง, 🟡 ปานกลาง, 🟢 ต่ำ
- ใช้ difficult indicators: 🔴 ยาก, 🟡 ปานกลาง, 🟢 ง่าย
- เรียงลำดับตารางตาม Impact (สูง → ปานกลาง → ต่ำ)

### 5. Prioritize and Roadmap

จัดลำดับและเสนอ roadmap

- จัดลำดับตาม value vs effort
- ใช้ framework เช่น RICE (Reach, Impact, Confidence, Effort)
- ระบุ quick wins และ strategic improvements
- กำหนด MVP scope สำหรับแต่ละ UX/UI improvement
- เสนอ roadmap สำหรับ implement UX/UI improvements
- แนะนำ phasing strategy (MVP → v2 → v3)
- ให้ resource estimates และ timeline
- สร้าง criteria สำหรับ validate UX/UI improvement success

## Rules

### 1. Single Table (40 UX/UI Improvements)

ตารางเดียวรวมทั้ง Extends และ New UX/UI improvements

- ตารางเดียวรวมทั้ง Extends และ New UX/UI improvements
- ทั้งหมด 40 UX/UI improvements เรียงลำดับ 1-40
- Type column ระบุ: Extends (ปรับปรุงจากเดิม) หรือ New (ใหม่)

### 2. Column Order

ลำดับคอลัมน์ตามมาตรฐาน

- ลำดับคอลัมน์: # | UX/UI Improvement | Description | Problem/Solves | How To | Dependencies | Component/Category | Type | Difficult | Impact | Interface | Topics | Scope
- Type ระบุประเภท: Extends (ปรับปรุงจากเดิม) หรือ New (ใหม่)
- Difficult ระบุ: 🔴 ยาก, 🟡 ปานกลาง, 🟢 ง่าย
- Impact ระบุ: 🔴 สูง, 🟡 ปานกลาง, 🟢 ต่ำ
- Interface ระบุ: component, layout, pattern, interaction, animation, etc
- Scope ระบุ: component-level, page-level, app-level, cross-app

### 3. Continuous Numbering

ใช้ continuous numbering ตลอดทั้งตาราง

- เริ่มจาก 1 ถึง 40 ต่อเนื่องกัน
- ไม่แบ่งแยกระหว่าง Extends และ New
- เรียงตามลำดับ Impact ก่อน แล้วตามลำดับเลข

### 4. Sort by Impact

เรียงลำดับตารางตาม Impact

- เรียงลำดับตารางตาม Impact: 🔴 สูง → 🟡 ปานกลาง → 🟢 ต่ำ
- ภายในแต่ละ Impact level เรียงตามลำดับ numbering

### 5. Define Problem First

ทุก UX/UI improvement ต้อง solve real usability problem

- ทุก UX/UI improvement ต้อง solve real usability problem
- ไม่สร้าง improvement เพราะเท่ห์อย่างเดียว
- Validate ว่า users ต้องการจริง
- Focus บน usability pain points ที่มี impact สูง

### 6. Direct Execution

ทำงานอัตโนมัติโดยไม่หยุดถาม

- ถ้าผู้ใช้บอกว่า "ทำ ... ให้" ให้ทำตาม `/ship-verify` เลย
- ไม่ต้องทำตาม workflow ปกติถ้าผู้ใช้สั่งโดยตรง
- ทำงานอัตโนมัติโดยไม่หยุดถาม

### 7. Output Format

สร้างไฟล์ task document พร้อมตาราง UX/UI improvements

- สร้างไฟล์ `.agents/task/<name>-DD-MM-YYYY.md` ใน workspace
- บันทึกตาราง UX/UI improvements ในไฟล์
- ใช้ markdown table สำหรับแสดง UX/UI improvements
- ตารางรวมทั้งหมด 40 อันดับ เรียงตาม Impact
- ตารางเป็นภาษาไทยทั้งหมด

## Expected Outcome

- ตารางเดียวรวม 40 UX/UI improvements (Extends + New) พร้อม continuous numbering
- Column Type ระบุ Extends หรือ New
- เรียงลำดับตาม Impact (สูง → ปานกลาง → ต่ำ)
- Column order: #, UX/UI Improvement, Description, Problem/Solves, How To, Dependencies, Component/Category, Type, Difficult, Impact, Interface, Topics, Scope
- Interface ระบุประเภท: component, layout, pattern, interaction, animation, etc
- Topics ระบุหัวข้อ เช่น accessibility, responsive, dark-mode, etc
- Scope ระบุขอบเขต: component-level, page-level, app-level, cross-app

