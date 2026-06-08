---
description: สร้างไอเดีย UX/UI improvements ใหม่และปรับปรุง UX/UI ที่มีอยู่ วิเคราะห์ usability gaps, user experience และ design trends ด้วย continuous numbering และ scope ที่ชัดเจน
---

## Goal

สร้างไอเดีย UX/UI improvements ใหม่และปรับปรุง UX/UI ที่มีอยู่ วิเคราะห์ usability gaps, user experience และ design trends ด้วย continuous numbering และ scope ที่ชัดเจน

## Execute

### 1. Analyze Existing UX/UI

- ทำ `/analyze-project` เพื่อดูภาพรวมโปรเจกต์
- สำรวจ UX/UI ทั้งหมดในโปรเจกต์
- ระบุ usability gaps และ missing design elements
- วิเคราะห์ user journeys และ pain points
- ประเมิน accessibility compliance
- ตรวจสอบ responsive design issues

### 2. Analyze Component Structure

- ทำ `/refactor-to-workspace` เพื่อวิเคราะห์โครงสร้าง components
- ระบุ UI components ที่สามารถ reuse ได้จาก packages ที่มีอยู่
- วิเคราะห์ design system และ consistency
- ระบุ boundary ของแต่ละ component เพื่อกำหนด scope ของ UX/UI improvements

### 3. Define UX/UI Scope

- กำหนด scope ของแต่ละ UX/UI improvement ให้ชัดเจน
- ตรวจสอบว่า improvement ไม่ over-scope จนเกินความสามารถของ components
- ระบุว่า improvement ควรอยู่ใน component ไหน
- กำหนดว่า improvement ควรเป็น part ของ component หรือ standalone module

### 4. Research Design Trends

- ศึกษา UX/UI patterns ยอดนิยมใน similar products
- วิเคราะห์ emerging design trends และ best practices
- หา user feedback จาก usability testing, reviews, analytics
- ศึกษา design systems และ accessibility guidelines (WCAG)

### 5. Generate Ideas

- สร้างไอเดียปรับปรุง UX/UI ที่มีอยู่ (Extends)
- สร้างไอเดีย UX/UI improvements ใหม่ที่ยังไม่มี (New)
- ระบุ usability problem ที่แต่ละ improvement จะ solve
- กำหนด target users และ use cases
- ระบุ component type (button, form, layout, navigation, etc)
- จัดกลุ่ม UX/UI improvements ตาม design areas

### 6. Create UX/UI Report

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

### 7. Prioritize by Value

- จัดลำดับตาม value vs effort
- ใช้ framework เช่น RICE (Reach, Impact, Confidence, Effort)
- ระบุ quick wins และ strategic improvements
- กำหนด MVP scope สำหรับแต่ละ UX/UI improvement

### 8. Define Roadmap

- เสนอ roadmap สำหรับ implement UX/UI improvements
- แนะนำ phasing strategy (MVP → v2 → v3)
- ให้ resource estimates และ timeline
- สร้าง criteria สำหรับ validate UX/UI improvement success

## Rules

### 1. Single Table (40 UX/UI Improvements)

- ตารางเดียวรวมทั้ง Extends และ New UX/UI improvements
- ทั้งหมด 40 UX/UI improvements เรียงลำดับ 1-40
- Type column ระบุ: Extends (ปรับปรุงจากเดิม) หรือ New (ใหม่)

### 2. Column Order

- ลำดับคอลัมน์: # | UX/UI Improvement | Description | Problem/Solves | How To | Dependencies | Component/Category | Type | Difficult | Impact | Interface | Topics | Scope
- Type ระบุประเภท: Extends (ปรับปรุงจากเดิม) หรือ New (ใหม่)
- How To อยู่หลัง Problem/Solves (อธิบายวิธีการ implement คร่าวๆ)
- Dependencies อยู่หลัง How To (libraries หรือ services ที่ใช้, ถ้าไม่มีใส่ -)
- Difficult อยู่ก่อน Impact (ระบุความยาก: 🔴 ยาก, 🟡 ปานกลาง, 🟢 ง่าย)
- Impact อยู่ก่อน Interface (ระบุผลกระทบ: 🔴 สูง, 🟡 ปานกลาง, 🟢 ต่ำ)
- Interface ระบุประเภท interface: component, layout, pattern, interaction, animation, etc
- Topics ระบุหัวข้อ เช่น accessibility, responsive, dark-mode, etc
- Scope อยู่ column สุดท้าย (ระบุขอบเขต: component-level, page-level, app-level, cross-app)

### 3. Continuous Numbering

- เริ่มจาก 1 ถึง 40 ต่อเนื่องกัน
- ไม่แบ่งแยกระหว่าง Extends และ New
- เรียงตามลำดับ Impact ก่อน แล้วตามลำดับเลข

### 4. Sort by Impact

- เรียงลำดับตารางตาม Impact: 🔴 สูง → 🟡 ปานกลาง → 🟢 ต่ำ
- ภายในแต่ละ Impact level เรียงตามลำดับ numbering

### 5. Define Problem First

- ทุก UX/UI improvement ต้อง solve real usability problem
- ไม่สร้าง improvement เพราะเท่ห์อย่างเดียว
- Validate ว่า users ต้องการจริง
- Focus บน usability pain points ที่มี impact สูง

### 6. Start with MVP

- เริ่มด้วย minimum viable version
- Build iteratively ไม่ใช่ big bang
- รับ user feedback early และ often
- Pivot ได้ถ้าไม่ work

### 7. Assess Technical Feasibility

- ประเมิน effort อย่าง realistic
- พิจารณา long-term maintenance cost
- ระบุ technical debt ที่อาจเกิด
- หา balance ระหว่าง innovation และ consistency

### 8. Scope Validation

- ตรวจสอบว่า UX/UI improvement ไม่ over-scope จนเกินความสามารถของ components
- กำหนด scope ให้ชัดเจน: component-level, page-level, app-level, หรือ cross-app
- ตรวจสอบว่า improvement สอดคล้องกับ boundary ของ components
- พิจารณา dependencies ระหว่าง components ก่อนกำหนด scope

### 9. Direct Execution

- ถ้าผู้ใช้บอกว่า "ทำ ... ให้" ให้ทำตาม `/ship-verify` เลย
- ไม่ต้องทำตาม workflow ปกติถ้าผู้ใช้สั่งโดยตรง
- ทำงานอัตโนมัติโดยไม่หยุดถาม

### 10. Output Format

- แสดงผลลัพธ์ใน chat โดยตรง ไม่ต้องสร้างไฟล์แยก
- ใช้ markdown table สำหรับแสดง UX/UI improvements
- ตารางรวมทั้งหมด 40 อันดับ เรียงตาม Impact
- ตารางเป็นภาษาไทยทั้งหมด
