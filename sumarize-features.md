---
title: Summarize Features
description: สรุปและจัดระบบ features ในรูปแบบตารางที่มีหลายคอลัมน์ พร้อมรายละเอียดครบถ้วน
auto_execution_mode: 3
---

## Prompt

ใช้ workflow นี้เมื่อต้องการสรุป features หรือ functionalities ของระบบ/โปรเจกต์ในรูปแบบตารางที่มีหลายคอลัมน์ ช่วยให้เห็นภาพรวม feature, รายละเอียด, ปัญหาที่แก้, และ solutions ได้ชัดเจน

## Execute

1. Gather Feature Information

- อ่านไฟล์ที่เกี่ยวข้องกับ features ที่ต้องการสรุป (components, composables, API routes, docs)
- ระบุ features ทั้งหมดที่มีอยู่ในระบบ
- จัดกลุ่ม features ตาม domain หรือ module ที่เหมาะสม

2. Analyze Each Feature

- แยกแต่ละ feature ออกเป็นหมวดหมู่ตาม business domain
- วิเคราะห์ว่า feature นี้แก้ปัญหาอะไร (problem statement)
- ระบุ solution/approach ที่ใช้ implement feature นี้
- หา dependencies หรือ relationships กับ features อื่นๆ

3. Create Summary Table

- สร้างตาราง Markdown ด้วยคอลัมน์: Feature, Description, Problem Solved, Solution, Status, Priority
- ใช้ emoji หรือ badge แสดงสถานะ (✅ Complete, 🚧 In Progress, ⏳ Pending)
- ระบุ priority เป็น High/Medium/Low พร้อมเหตุผลสั้นๆ

4. Add Technical Details (optional)

- เพิ่มคอลัมน์หรือ section สำหรับ technical implementation details
- ระบุ files/components ที่เกี่ยวข้องกับแต่ละ feature
- บุ่นความซับซ้อนทางเทคนิค (Complexity: Simple/Moderate/Complex)

5. Validate Completeness

- ตรวจสอบว่าทุก feature ถูก cover ครบถ้วน
- ยืนยันว่า descriptions เข้าใจง่ายและสื่อความหมายชัดเจน
- ตรวจสอบ consistency ของ formatting และ terminology

6. Present Summary

- แสดงตารางสรุปทั้งหมดให้ผู้ใช้ดู
- แยก section ตาม module หรือ domain ถ้ามีจำนวนมาก
- เสนอแนะ features ที่ควรพัฒนาต่อหรือปรับปรุง

## Rules

1. Table Structure

- ต้องมีคอลัมน์หลัก 6 คอลัมน์: Feature, Description, Problem Solved, Solution, Status, Priority
- ใช้ Markdown table format มาตรฐาน (`| column | column |`)
- จัด column alignment ให้เหมาะสม (left สำหรับ text, center สำหรับ status/priority)
- แบ่งตารางเป็นหมวดหมู่ถ้ามีมากกว่า 15 features

2. Status Badges

- ✅ Complete - feature พร้อมใช้งานเต็มรูปแบบ
- 🚧 In Progress - กำลังพัฒนาอยู่
- ⏳ Pending - อยู่ใน roadmap แต่ยังไม่เริ่ม
- 🧪 Experimental - ทดสอบหรือ prototype
- ❌ Deprecated - เลิกใช้งานแล้ว

3. Priority Levels

- 🔴 High - critical สำหรับ business operation
- 🟡 Medium - important แต่ไม่บล็อกการทำงาน
- 🟢 Low - nice to have หรือ enhancement

4. Content Quality

- Feature name ต้องกระชัด สื่อความหมาย (ใช้ verb + noun เช่น "User Authentication")
- Description ไม่เกิน 2 ประโยค เน้นความสามารถหลัก
- Problem Solved อธิบาย pain point ที่ user พบเจอ
- Solution สรุป approach หลักที่ใช้แก้ปัญหา

5. Organization

- จัดเรียง features ตาม priority (High → Low) ภายในแต่ละ group
- แบ่งเป็น section ตาม module (เช่น Auth, Booking, Payment, Admin)
- เพิ่ม table of contents ถ้ามีหลาย section

6. Additional Columns (when needed)

- Tech Stack: technologies ที่ใช้
- Complexity: Simple / Moderate / Complex
- Owner: team หรือ person รับผิดชอบ
- Est. Effort: man-days หรือ story points
- Related Files: paths ของ key files

## Expected Outcome

- ตารางสรุป features ที่ครอบคลุมทุก functionality ของระบบ
- มุมมองชัดเจนว่าแต่ละ feature แก้ปัญหาอะไรและทำงานอย่างไร
- สถานะและ priority ที่ช่วยในการวางแผนพัฒนาต่อ
- เอกสารที่สามารถใช้อ้างอิงสำหรับ stakeholder หรือ onboarding

## Example Output

```markdown
### Core Features

| Feature | Description | Problem Solved | Solution | Status | Priority |
|---------|-------------|----------------|----------|--------|----------|
| User Auth | ระบบ login/logout ด้วย email/password | ผู้ใช้ต้องการ secure access | JWT + bcrypt, refresh token | ✅ Complete | 🔴 High |
| Booking Flow | กระบวนการจองแบบ step-by-step | ลด confusion ในการจอง | Wizard pattern, validation ทุก step | 🚧 In Progress | 🔴 High |

### Admin Features

| Feature | Description | Problem Solved | Solution | Status | Priority |
|---------|-------------|----------------|----------|--------|----------|
| Dashboard | ภาพรวม metrics และการจอง | Admin ต้องการ visibility | Real-time charts, summary cards | ✅ Complete | 🟡 Medium |
```
