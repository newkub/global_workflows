---
title: Improve All Skills
description: ปรับปรุง skills ทั้ง global และ project ให้สมบูรณ์และสม่ำเสมอ
auto_execution_mode: 3
related:
  - /write-skills
  - /write-content-coverage
  - /follow-content-quality
  - /follow-consistency
  - /check-reference
  - /review-code-quality
  - /review-code-quality
---

## Goal

ปรับปรุง skills ทั้งหมดให้สมบูรณ์ สม่ำเสมอ และตรงตามมาตรฐาน ครอบคลุมทุก `.md` ไฟล์ในแต่ละ skill

## Scope

ปรับปรุงทุก `.md` ไฟล์ในแต่ละ skill directory (`SKILL.md`, `guide/`, `key-concepts/`, `principles/`, `references/`, `workflows/`, `templates/`) ทั้งใน `skills/` และ workspace

## Execute

### 1. Analyze Current State

วิเคราะห์สถานะปัจจุบันของทุก `.md` ไฟล์ใน skills

1. ทำ `/check-reference` เพื่อตรวจสอบ references ที่เสียหาย
2. ถ้าอยู่ใน workspace ตรวจสอบว่ามี skills directory หรือไม่
3. สแกนทุก `.md` ไฟล์ในแต่ละ skill directory (`SKILL.md`, `guide/`, `key-concepts/`, `principles/`, `references/`, `workflows/`, `templates/`)
4. ระบุไฟล์ที่ต้องปรับปรุง (structure, content, references, description > 100 ตัวอักษร, title prefix)
5. จัดลำดับความสำคัญตาม impact (skills ที่ใช้บ่อยก่อน)
6. ตรวจสอบไฟล์ที่เกิน 250 บรรทัด

### 2. Apply Structure Improvements

ปรับปรุง structure ของทุก `.md` ไฟล์ตาม `/write-skills`

1. ตรวจสอบ `SKILL.md` frontmatter ถูกต้อง (title, description, auto_execution_mode)
2. ตรวจสอบทุก `.md` ไฟล์มี heading ที่ชัดเจนและเป็น English Title Case
3. ตรวจสอบ `SKILL.md` มี sections ครบ (Goal, Scope, Execute, Rules, Expected Outcome)
4. ปรับ heading ใน Execute เป็น English Title Case สำหรับทุกไฟล์
5. ลดจำนวนบรรทัดไม่เกิน 250 สำหรับทุกไฟล์
6. ถ้าอยู่ใน workspace ตรวจสอบว่า skill สอดคล้องกับ project context

### 3. Apply Content Quality And Simplify

ปรับปรุงคุณภาพเนื้อหาทุกไฟล์ตาม `/follow-content-quality` และ `/simplify`

1. ทำให้เนื้อหา explicit แทน implicit
2. ลดความซ้ำซ้อนระหว่าง Execute และ Rules
3. ใช้ references แทนการ duplicate เนื้อหา
4. ปรับปรุง content dimensions (clarity, completeness, consistency)
5. ใช้ backticks สำหรับ `tools`, `commands`, `file paths`, `/skill-name`
6. ทำ `/simplify` เพื่อลดความซับซ้อนของเนื้อหาในทุกไฟล์

### 4. Fix References

แก้ไข references ที่เสียหาย

1. ตรวจสอบ skills ที่อ้างถึงมีอยู่จริง
2. ตรวจสอบ workflows ที่อ้างถึงมีอยู่จริง
3. ลบ references ที่ไม่มีอยู่จริง
4. เพิ่ม references ที่ขาดหาย
5. ทำ `/check-reference` หลังแก้ไข

### 5. Align With Best Practices

ปรับให้สอดคล้องกับ best practices

1. ทำ `/follow-best-practice` สำหรับ topics ที่เกี่ยวข้อง
2. ตรวจสอบ skill structure สอดคล้องกับ markdown best practices
3. อ้างอิง official documentation สำหรับ tools/libraries เฉพาะเจาะจง
4. ปรับให้สอดคล้องกับ execution guidelines

### 6. Write Content Coverage

เขียน content ครอบคลุมทุก features และ APIs ของแต่ละ skill ในทุก `.md` ไฟล์

1. ทำ `/write-content-coverage` สำหรับแต่ละ skill ครอบคลุมทุกไฟล์ใน `guide/`, `key-concepts/`, `principles/`, `references/`, `workflows/`
2. ตรวจสอบว่าทุกไฟล์มี content ครบถ้วน (guides, examples, references, key-concepts, principles)
3. เขียน key-concepts และ principles สำหรับ concepts ที่สำคัญ
4. ตรวจสอบว่า content ครอบคลุมทุก use cases
5. ใช้ `/use-scripts` เมื่อไฟล์มากกว่า 10 ไฟล์ในการ batch process

### 7. Batch Update Skills

อัพเดท skills เป็น batch เพื่อประสิทธิภาพ

1. จัดกลุ่ม skills ตาม category (improve, follow, use, run, test)
2. อัพเดทตามลำดับความสำคัญ ใช้ `/use-scripts` สำหรับ batch operations
3. ตรวจสอบว่า changes รักษาความหมายเดิม
4. ทำ `/check-reference` หลังแต่ละ batch
5. ถ้าอยู่ใน workspace ตรวจสอบว่าไม่มี conflicts กับ project-specific skills

## Rules

### 1. Structure Standards

- `SKILL.md` frontmatter ต้องมี title, description, auto_execution_mode: 3
- Title Case ตรงกับ skill name ไม่มี prefix (Guide/Tool/Lang)
- Description ไม่เกิน 100 ตัวอักษร
- `SKILL.md` มี sections ครบ (Goal, Scope, Execute, Rules, Expected Outcome)
- ทุก `.md` ไฟล์ไม่เกิน 250 บรรทัด

### 2. Language Consistency

- Execute headings: English Title Case
- Rules section: ภาษาไทย
- Bullet points: ภาษาไทย
- File names: kebab-case

### 3. Content Quality

- ใช้ references แทนการ duplicate เนื้อหา
- ไม่ซ้ำซ้อนระหว่าง Execute และ Rules
- เนื้อหา explicit แทน implicit
- ใช้ backticks สำหรับ `tools`, `commands`, `file paths`, `/skill-name`
- ทำ `/simplify` เพื่อลดความซับซ้อน
- Maintain single source of truth

### 4. Reference Integrity

- ตรวจสอบ references มีอยู่จริงก่อนอ้างอิง
- ลบ references ที่ไม่มีอยู่จริง
- เพิ่ม references ที่ขาดหาย
- ทำ `/check-reference` หลังแก้ไข

### 5. Batch Processing

- อัพเดทตามลำดับความสำคัญ
- ใช้ `/use-scripts` สำหรับ batch operations เมื่อไฟล์มากกว่า 10 ไฟล์
- ตรวจสอบไม่มี broken references หลัง updates
- รักษา skill intent เดิม

### 6. Best Practices Alignment

- ตรวจสอบ structure สอดคล้องกับ markdown best practices
- อ้างอิง official documentation สำหรับ tools/libraries
- ปรับให้สอดคล้องกับ execution guidelines
- ทำตาม `/follow-best-practice` สำหรับ topics ที่เกี่ยวข้อง

## Expected Outcome

- ทุก `.md` ไฟล์ใน skills มี structure สม่ำเสมอ
- `SKILL.md` มี frontmatter และ sections ครบถ้วน
- Content ครอบคลุมทุก features, APIs, และ use cases
- Content quality สูงและชัดเจน ไม่ซับซ้อนเกินจำเป็น
- ไม่มี broken references
- ทุกไฟล์ไม่เกิน 250 บรรทัด
- สอดคล้องกับ best practices และ `/write-global-workflows`
