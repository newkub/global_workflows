---
title: Idea Features
description: สร้างไอเดีย features ใหม่และปรับปรุง features ที่มีอยู่ พร้อม continuous numbering และระบุประเภท feature
auto_execution_mode: 3
related_workflows:
  - /analyze-project
  - /plan
  - /compare-and-idea-features
  - /implement-features-to-mvp
  - /validate-features
  - /refactor
  - /realize-implementation
  - /update-features
  - /follow-html
  - /open-web
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

1. ทำ `/update-features` เพื่อสร้าง `existing-features.json`
2. อ่าน `existing-features.json` เพื่อเข้าใจ features ที่มีอยู่
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
5. ตอบ 2 ตาราง (Extends และ New) ในแชทโดยตรง พร้อม col Req และ Opt
6. แสดง architecture และ roadmap ในแชท

### 7. Generate Output Files

1. สร้าง `.devin/features/<workspace>/idea-features.json` พร้อม features ทั้งหมด
2. สร้าง `.devin/features/<workspace>/features.html` ตาม `/follow-html` แสดง existing + idea features
3. ทำ `/open-web` เพื่อเปิด `features.html` ใน browser
4. แสดง existing features และ idea features ในแชท

## Rules

### 1. Group By Type With Required And Optional Columns

- แยกเป็น 2 ตารางตาม Type: Extends และ New
- แต่ละตารางมี col Required และ col Optional แทนการแยกตาราง
- Required: features ที่จำเป็นสำหรับ MVP ระบุเป็น ✅ หรือ -
- Optional: features ที่เพิ่ม value แต่ไม่จำเป็นสำหรับ MVP ระบุเป็น ✅ หรือ -
- แต่ละตารางมี continuous numbering เริ่มจาก 1 ไม่เกิน 20 row
- Sorting: เรียงตามลำดับเลข (#) ก่อน แล้วตามลำดับ Impact (🔴 สูง → 🟡 ปานกลาง → 🟢 ต่ำ)
- Description เป็นคำอธิบายปกติ ไม่ต้องมี Topics, Scope, Interface ในนั้น
- Scope ระบุ: package-level, app-level, หรือ cross-package

### 2. Column Order

- ลำดับคอลัมน์ (21 คอลัมน์): # | Impact | Feature | Description | Why | Req | Opt | Scope | Interface | Target | Phase | Effort | Difficult | Topics | Deps | API | DB | Risk | Estimate | MVP Score | UX/UI
- Description สั้นกระชับ ไม่เกิน 1 บรรทัด เช่น `เพิ่ม OAuth login`
- Why ระบุเหตุผล/ปัญหาที่แก่ เช่น `ผู้ใช้ login ยาก` หรือ `ลด friction ตอน signup`
- Req ระบุ: ✅ ถ้าเป็น Required (MVP), - ถ้าไม่ใช่
- Opt ระบุ: ✅ ถ้าเป็น Optional, - ถ้าไม่ใช่
- Impact ระบุ: 🔴 สูง, 🟡 ปานกลาง, 🟢 ต่ำ
- Scope ระบุ: package-level, app-level, หรือ cross-package
- Interface ระบุ: api, cli, web, mobile, library, sdk, etc
- Target ระบุ: customer, provider, staff, admin, partner, หรือ multiple
- Phase ระบุ: MVP, v2, v3
- Effort ระบุ: S, M, L, XL
- Difficult ระบุ: 🔴 ยาก, 🟡 ปานกลาง, 🟢 ง่าย
- Topics ระบุหัวข้อ เช่น auth, booking, payment, ui, etc
- Deps ระบุ dependencies สั้นๆ เช่น `supabase`, `stripe`, `-` ถ้าไม่มี
- API ระบุ API endpoints เช่น `POST /api/bookings`, `GET /api/waitlist`, `-` ถ้าไม่มี
- DB ระบุ database tables เช่น `bookings`, `providers`, `waitlist`, `-` ถ้าไม่มี
- Risk ระบุ: 🔴 สูง, 🟡 ปานกลาง, 🟢 ต่ำ
- Estimate ระบุเวลาประเมิน เช่น `1d`, `3d`, `1w`, `2w`
- MVP Score ระบุคะแนน RICE 1-10
- UX/UI ระบุ: 🔴 ต้องปรับ UX/UI เยอะ, 🟡 ปรับบางส่วน, 🟢 ใช้ existing UI
- ข้อมูลที่ย้ายไปใน Description: How To, Parent/Category
- ใช้บรรทัดแยกใน Description ด้วย `<br>` เช่น `เพิ่ม OAuth login<br>**How To:** ใช้ Supabase Auth`

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

### 6. Direct Execution

- ถ้าผู้ใช้บอกว่า "ทำ ... ให้" ให้ทำตาม `/refactor` และ `/realize-implementation` เลย
- ไม่ต้องทำตาม workflow ปกติถ้าผู้ใช้สั่งโดยตรง
- ทำงานอัตโนมัติโดยไม่หยุดถาม

### 7. Output Format

- ใช้ markdown table สำหรับแสดง features
- ตารางเป็นภาษาไทยทั้งหมด
- แสดง architecture และ roadmap ในแชท
- เมื่อ implement เสร็จ 1 feature ให้รายงานในแชท

## Expected Outcome

- 2 ตาราง (Extends และ New) พร้อม col Req และ Opt, continuous numbering ไม่เกิน 20 row ต่อตาราง
- เรียงลำดับตาม Impact (สูง → ปานกลาง → ต่ำ)
- Column order และค่าต่างๆ ตาม Rule 1 และ Rule 2
- Roadmap และ architecture แสดงในแชท
- `existing-features.json` และ `idea-features.json` ใน `.devin/features/<workspace>/`
- `features.html` แสดง existing + idea features ใน browser
