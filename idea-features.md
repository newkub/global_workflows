---
title: Idea Features
description: สร้างไอเดีย features ใหม่และปรับปรุง features ที่มีอยู่ พร้อม continuous numbering และ markdown parser
auto_execution_mode: 3
related:
  - /analyze-project
  - /plan
  - /compare-and-idea-features
  - /implement-features-to-mvp
  - /validate-features
  - /refactor
  - /realize-implementation
  - /update-features
  - /report-architecture-diagram
  - /report-uxui-sketch
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

### 2. Analyze Package Structure And Define Scope

1. วิเคราะห์โครงสร้าง packages จาก project structure
2. ระบุ code ที่สามารถ reuse ได้จาก packages ที่มีอยู่
3. วิเคราะห์ dependencies ระหว่าง packages
4. ระบุ boundary ของแต่ละ package เพื่อกำหนด scope ของ features
5. กำหนด scope ของแต่ละ feature: package-level, app-level, หรือ cross-package
6. ตรวจสอบว่า feature ไม่ over-scope จนเกินความสามารถของ packages

### 3. Research Market

1. ศึกษา features ยอดนิยมใน similar products
2. วิเคราะห์ emerging technologies และ trends
3. หา user requests จาก forums, reviews, feedback
4. ศึกษา industry reports และ predictions

### 4. Collect Existing Features

1. ทำ `/update-features` เพื่อวิเคราะห์ features ที่มีอยู่
2. อ่าน `.devin/features/<workspace>/features.md` และ `.devin/features/<workspace>/modules/*.ts` เพื่อเข้าใจ features ที่มีอยู่
3. แสดง existing features ในแชทด้วย

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
5. ตอบ 2 ตาราง (Extends และ New) ในแชทโดยตรง พร้อม 24 คอลัมน์
6. แสดง existing features และ idea features ในแชท
7. วาด ANSI UX/UI sketch สำหรับแต่ละ feature จาก codebase จริง โดยทำ `/report-uxui-sketch`
8. วาด ANSI architecture diagram สำหรับระบบที่จะสร้าง โดยทำ `/report-architecture-diagram`
9. สรุปตาราง DB tables, API endpoints, Components, Files ที่จะสร้างทั้งหมด
. ไม่สร้างไฟล์ .md, .html หรือ .json

## Rules

### 1. Group By Type With Continuous Numbering

- แยกเป็น 2 ตารางตาม Type: Extends และ New
- Continuous numbering รวมทั้ง 2 ตาราง: Extends เริ่มจาก 1, New ต่อจากเลขสุดท้ายของ Extends
- แต่ละตาราง 15 row, 2 ตาราง รวมกันไม่เกิน 30 row
- Sorting: เรียงตามลำดับเลข (#) ก่อน แล้วตามลำดับ Impact (🔴 สูง → 🟡 ปานกลาง → 🟢 ต่ำ)
- Description เป็นคำอธิบายปกติ สั้นกระชับ ไม่เกิน 1 บรรทัด
- Scope ระบุ: package-level, app-level, หรือ cross-package

### 2. Column Order (24 คอลัมน์)

- ลำดับคอลัมน์: # | Impact | Feature | Description | Why | How To | Phase | Effort | Difficult | Scope | Interface | Target | Topics | Deps | Routing | Components | Types | API | DB | Risk | Estimate | MVP Score | UX/UI
- Description: สั้นกระชับ ไม่เกิน 1 บรรทัด เช่น `เพิ่ม OAuth login`
- Why: ระบุเหตุผล/ปัญหาที่แก่ เช่น `ผู้ใช้ login ยาก`
- How To: แนวทาง implement สั้นๆ เช่น `ขยาย pgEnum ใน services.ts`
- Impact: 🔴 สูง, 🟡 ปานกลาง, 🟢 ต่ำ
- Phase: MVP, v2, v3
- Effort: S, M, L, XL
- Difficult: 🔴 ยาก, 🟡 ปานกลาง, 🟢 ง่าย
- Scope: package-level, app-level, หรือ cross-package
- Interface: api, cli, web, mobile, library, sdk, etc
- Target: customer, provider, staff, admin, partner, หรือ multiple
- Topics: หัวข้อ เช่น auth, booking, payment, ui, etc
- Deps: dependencies สั้นๆ เช่น `supabase`, `stripe`, `-` ถ้าไม่มี
- Routing: route paths เช่น `/provider/$id/services`, `-` ถ้าไม่มี
- Components: UI components ที่ต้องสร้าง/แก้ เช่น `FormBuilder, FieldEditor`, `-` ถ้าไม่มี
- Types: TypeScript types/interfaces ที่ต้องสร้าง เช่น `BookingForm, PricingTier`, `-` ถ้าไม่มี
- API: API endpoints เช่น `POST /api/bookings`, `-` ถ้าไม่มี
- DB: database tables เช่น `bookings`, `spaces`, `-` ถ้าไม่มี
- Risk: 🔴 สูง, 🟡 ปานกลาง, 🟢 ต่ำ
- Estimate: เวลาประมาณ เช่น `1d`, `3d`, `1w`, `2w`
- MVP Score: คะแนน RICE 1-10
- UX/UI: 🔴 ต้องปรับ UX/UI เยอะ, 🟡 ปรับบางส่วน, 🟢 ใช้ existing UI

### 3. Summary Tables

- สรุปตาราง DB tables ทั้งหมดที่จะสร้าง/แก้
- สรุปตาราง API endpoints ทั้งหมดที่จะสร้าง
- สรุปตาราง Components ทั้งหมดที่จะสร้าง/แก้
- สรุปตาราง Files ทั้งหมดที่จะสร้าง/แก้

### 4. Define Problem First

- ทุก feature ต้อง solve real problem
- ไม่สร้าง feature เพราะเท่ห์อย่างเดียว
- Validate ว่า users ต้องการจริง
- Focus บน pain points ที่มี impact สูง

### 5. Start with MVP

- เริ่มด้วย minimum viable version
- Build iteratively ไม่ใช่ big bang
- รับ feedback early และ often
- Pivot ได้ถ้าไม่ work

### 6. Assess Technical Feasibility

- ประเมิน effort อย่าง realistic
- พิจารณา long-term maintenance cost
- ระบุ technical debt ที่อาจเกิด
- หา balance ระหว่าง innovation และ stability

### 7. Direct Execution

- ถ้าผู้ใช้บอกว่า "ทำ ... ให้" ให้ทำตาม `/refactor` และ `/realize-implementation` เลย
- ไม่ต้องทำตาม workflow ปกติถ้าผู้ใช้สั่งโดยตรง
- ทำงานอัตโนมัติโดยไม่หยุดถาม

## Expected Outcome

- 2 ตาราง (Extends และ New) พร้อม 24 คอลัมน์, continuous numbering รวมทั้ง 2 ตาราง, ตารางละ 15 row รวมกันไม่เกิน 30 row
- เรียงลำดับตาม Impact (สูง → ปานกลาง → ต่ำ)
- ANSI UX/UI sketch และ architecture diagram จาก codebase จริง
- สรุปตาราง DB, API, Components, Files ที่จะสร้างทั้งหมด
- Roadmap และ architecture แสดงในแชท
- ไม่สร้างไฟล์ใดๆ ตอบในแชทเท่านั้น