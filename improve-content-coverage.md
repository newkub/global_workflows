---
title: Improve Content Coverage
description: เขียนเนื้อหาให้ครอบคลุมทุกด้านของ project
auto_execution_mode: 3
---

## Goal

เขียนเนื้อหาให้ครอบคลุมทุกด้านของ project เพื่อให้ผู้ใช้เข้าใจและใช้งานได้อย่างมีประสิทธิภาพ

## Scope

ใช้สำหรับทุก workspace ที่ต้องการปรับปรุงความครบถ้วนของ documentation และ content

## Execute

### 1. Analyze Content Gaps

ตรวจสอบ content ที่ขาดหายจาก project

1. อ่าน `README.md` และ documentation ทั้งหมด
2. ตรวจสอบ features ที่ยังไม่มี documentation
3. ตรวจสอบ API endpoints ที่ยังไม่มีคำอธิบาย
4. ตรวจสอบ components ที่ยังไม่มี usage examples
5. ตรวจสอบ workflows ที่ยังไม่มี guides
6. สร้างรายการ content gaps
7. ใช้ `/deep-research` สำหรับค้นหา best practices จาก external sources

### 2. Prioritize Content Needs

จัดลำดับความสำคัญของ content ที่ต้องเขียน

1. จัดลำดับตาม user impact
2. จัดลำดับตามความซับซ้อนของ features
3. จัดลำดับตามความถี่ในการใช้งาน
4. แบ่งเป็น high, medium, low priority
5. สร้าง content roadmap

### 3. Write Missing Documentation

เขียน documentation สำหรับ content gaps

1. เขียน `README.md` ให้ครบถ้วน
2. เขียน `SPEC.md` สำหรับแต่ละ module
3. เขียน API documentation พร้อม examples
4. เขียน component documentation พร้อม props
5. เขียน workflow guides พร้อม steps
6. เขียน troubleshooting guides

### 4. Add Usage Examples

เพิ่ม examples สำหรับทุก features

1. เขียน code examples ที่ใช้งานได้จริง
2. เขียน use case examples
3. เขียน integration examples
4. เขียน configuration examples
5. เขียน error handling examples
6. เขียน best practices examples

### 5. Improve Content Quality

ปรับปรุงคุณภาพของ content ที่มีอยู่

1. ตรวจสอบความถูกต้องของข้อมูล
2. ปรับปรุงความชัดเจนของคำอธิบาย
3. เพิ่ม diagrams และ illustrations
4. เพิ่ม screenshots สำหรับ UI
5. ปรับปรุง structure และ organization
6. เพิ่ม cross-references

### 6. Verify Content Completeness

ตรวจสอบว่า content ครบถ้วน

1. ตรวจสอบทุก features มี documentation
2. ตรวจสอบทุก APIs มี examples
3. ตรวจสอบทุก components มี usage guides
4. ตรวจสอบทุก workflows มี steps
5. ตรวจสอบทุก errors มี solutions
6. ตรวจสอบ content สอดคล้องกับ code

## Rules

### 1. Documentation Standards

ทำตามมาตรฐาน documentation

- ใช้ `Markdown` format สำหรับทุก documentation
- ใช้ `frontmatter` สำหรับ metadata
- ใช้ `code blocks` พร้อม syntax highlighting
- ใช้ `headings` ที่ชัดเจนและ consistent
- ใช้ `lists` สำหรับ steps และ bullet points
- ใช้ `links` สำหรับ cross-references
- ใช้ `/deep-research` สำหรับค้นหาข้อมูลจาก external sources

### 2. Content Structure

จัดโครงสร้าง content อย่างเป็นระบบ

- เริ่มด้วย overview และ introduction
- แบ่งเป็น sections ที่ชัดเจน
- ใช้ progressive disclosure
- เรียงลำดับตาม logical flow
- เพิ่ม table of contents สำหรับ long documents
- เพิ่ม summary และ next steps

### 3. Writing Style

เขียนด้วย style ที่ชัดเจนและอ่านง่าย

- ใช้ภาษาที่เข้าใจง่าย
- หลีกเลี่ยง jargon ที่ไม่จำเป็น
- อธิบาย concepts อย่างง่าย
- ใช้ examples จริง
- เขียนใน active voice
- ใช้ consistent terminology

### 4. Code Examples

เขียน code examples ที่มีคุณภาพ

- ใช้ code ที่ใช้งานได้จริง
- เพิ่ม comments สำหรับส่วนที่ซับซ้อน
- แสดง input และ output
- แสดง error handling
- แสดง edge cases
- อัพเดท examples ตาม code changes

### 5. Visual Content

เพิ่ม visual content สำหรับความเข้าใจ

- ใช้ `diagrams` สำหรับ architecture
- ใช้ `screenshots` สำหรับ UI
- ใช้ `tables` สำหรับ comparisons
- ใช้ `charts` สำหรับ data
- ใช้ `icons` สำหรับ visual cues
- ใช้ `code highlighting` สำหรับ readability

### 6. Maintenance

รักษา content ให้ทันสมัย

- อัพเดท content เมื่อมีการเปลี่ยนแปลง
- ตรวจสอบ links ว่ายังใช้งานได้
- ลบ content ที่ไม่เกี่ยวข้อง
- เพิ่ม content สำหรับ features ใหม่
- รวบรวม feedback จาก users
- ปรับปรุง content ตาม feedback
- ใช้ `/deep-research` สำหรับค้นหาข้อมูลใหม่เป็นปัจจุบัน

## Expected Outcome

- `Documentation` ครบถ้วนสำหรับทุก features
- `Examples` ที่ใช้งานได้จริง
- `Guides` ที่ชัดเจนและอ่านง่าย
- `Content` ที่ทันสมัยและถูกต้อง
- `Users` สามารถใช้งานได้โดยไม่ต้องถาม
- `Onboarding` ที่รวดเร็วและมีประสิทธิภาพ
