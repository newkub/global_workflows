---
title: Write Code Smart
description: เขียน code อย่างชาญฉลาด ตัดสินใจดีก่อนเขียน ลด rework
auto_execution_mode: 3
related:
  - /dont-over-engineer
  - /follow-code-quality
  - /simplify
  - /use-lib-effective
  - /follow-best-practice
  - /follow-architecture
  - /pondering
  - /deep-thinking
  - /plan
  - /refactor
---

## Goal

เขียน code อย่างชาญฉลาดตั้งแต่ครั้งแรก ลด rework และ technical debt ด้วยการตัดสินใจที่ดีก่อนเขียน

## Scope

ใช้สำหรับทุกการเขียน code ใหม่หรือแก้ไข code ที่มีอยู่ ครอบคลุมการวางแผน การเลือก approach และการเขียน code ที่มีคุณภาพ

## Execute

### 1. Think Before Code

คิดก่อนเขียนเสมอ ลดการทำลายแล้วทำใหม่

1. ทำ `/pondering` เพื่อทบทวน approach ก่อนเริ่มเขียน
2. ทำ `/deep-thinking` เพื่อวิเคราะห์ปัญหาอย่างเป็นระบบ
3. ระบุ root cause ของปัญหาก่อนเขียน solution
4. พิจารณา alternatives อย่างน้อย 2-3 approaches
5. เลือก approach ที่เรียบง่ายที่สุดที่แก้ปัญหาได้

### 2. Plan And Design

วางแผนก่อนเขียนเพื่อลดการเปลี่ยนแปลงภายหลัง

1. ทำ `/plan` สำหรับ tasks ที่ซับซ้อน
2. ทำ `/follow-architecture` เพื่อเลือก pattern ที่เหมาะสม
3. ระบุ files ที่จะแก้ไขและ impact ของแต่ละไฟล์
4. ตรวจสอบว่า approach สอดคล้องกับ codebase ที่มีอยู่
5. ถ้าแก้ไขมากกว่า 10 ไฟล์: ทำ `/use-scripts` เพื่อวิเคราะห์ impact

### 3. Research Before Write

เรียนรู้ก่อนเขียนเพื่อหลีกเลี่ยงการ reinvent

1. ทำ `/follow-best-practice` สำหรับ topic ที่เกี่ยวข้อง
2. ทำ `/use-lib-effective` เพื่อใช้ libraries ที่มีอยู่ให้ครบ
3. ตรวจสอบว่ามี utility หรือ helper ที่ทำงานนี้แล้วใน codebase
4. ถ้ามี library ที่ดีกว่า: ทำ `/use-lib-better` เพื่อเปรียบเทียบ
5. อ่าน official docs ของ library ที่จะใช้ก่อนเขียน

### 4. Write Smart Code

เขียน code ที่ฉลาด อ่านง่าย และ maintain ได้

1. เขียน code ตาม `/follow-code-quality` ทุกครั้ง
2. ใช้ `/dont-over-engineer` เพื่อหลีกเลี่ยงการสร้าง complexity โดยไม่จำเป็น
3. เขียน functions สั้น (<30 บรรทัด) ทำหน้าที่เดียว
4. ใช้ meaningful names ไม่ใช้ abbreviations
5. เขียน type-safe code ตั้งแต่แรก ไม่ใช้ `any`
6. จัดการ edge cases ตั้งแต่ตอนเขียน ไม่ปล่อยไว้ทีหลัง
7. แยก pure functions จาก side effects

### 5. Verify While Writing

ตรวจสอบทุกขั้นตอนขณะเขียน ไม่รอจนเสร็จ

1. รัน `/run-lint` และ `/run-typecheck` หลังเขียนเสร็จแต่ละส่วน
2. รัน `/run-test` สำหรับ code ที่เขียน
3. ตรวจสอบว่าไม่มี regression ในส่วนที่เกี่ยวข้อง
4. ถ้ามี errors: ทำ `/resolve-errors` ทันที ไม่ปล่อยไว้

### 6. Review And Simplify

ตรวจสอบและทำให้เรียบง่ายหลังเขียนเสร็จ

1. ทำ `/simplify` สำหรับ code ที่ซับซ้อน
2. ตรวจสอบว่าไม่มี dead code หรือ unused imports
3. ตรวจสอบว่า code อ่านง่ายและเข้าใจได้โดยไม่ต้องอ่าน comments
4. ลบ comments ที่ไม่จำเป็นถ้า code อ่านได้เข้าใจอยู่แล้ว
5. ถ้าไฟล์ยาวกว่า 250 บรรทัด: บันทึกไว้เพื่อทำ `/refactor` ภายหลัง

## Rules

### 1. Think First

- คิดก่อนเขียนเสมอ ใช้ `/pondering` และ `/deep-thinking`
- ระบุ root cause ก่อนแก้ ไม่เดา solution
- พิจารณา alternatives อย่างน้อย 2-3 approaches
- เลือก solution ที่เรียบง่ายที่สุดก่อนเสมอ

### 2. Minimal And Focused

- ทำ `/dont-over-engineer` เพื่อเขียนน้อยที่สุดที่จำเป็น
- ใช้ `single-line change` เมื่อเพียงพอ
- ไม่ refactor โค้ดที่ไม่เกี่ยวข้องกับ task
- ไม่สร้าง abstraction ก่อนมี use case จริง (YAGNI)
- เขียนเฉพาะที่จำเป็น ไม่เพิ่ม features ที่ไม่ได้ร้องขอ

### 3. Reuse Over Reinvent

- ใช้ `/use-lib-effective` เพื่อใช้ libraries ที่มีอยู่
- ค้นหา utilities ใน codebase ก่อนเขียนใหม่
- ไม่เขียน custom implementation ที่ library ทำให้แล้ว
- ใช้ standard patterns ของ framework ที่ใช้

### 4. Quality From Start

- เขียน type-safe ตั้งแต่แรก ไม่ใช้ `any`
- จัดการ edge cases ตั้งแต่ตอนเขียน
- เขียน error handling พร้อมกับ logic หลัก
- ใช้ meaningful names ไม่ใช้ abbreviations
- แยก pure functions จาก side effects ตั้งแต่แรก

### 5. Verify Continuously

- รัน lint และ typecheck หลังเขียนแต่ละส่วน
- รัน test หลังเขียนเสร็จแต่ละ feature
- ไม่สะสม errors แก้ทันทีเมื่อเจอ
- ตรวจสอบ regression ในส่วนที่เกี่ยวข้อง

### 6. Readability Over Cleverness

- เขียน code ที่คนอื่นอ่านเข้าใจได้โดยไม่ต้องอ่าน comments
- หลีกเลี่ยง clever tricks ที่ยากต่อการเข้าใจ
- ใช้ early return แทน nested if
- ใช้ consistent patterns กับ codebase ที่มีอยู่
- Code ที่อ่านง่ายดีกว่า code ที่สั้นแต่อ่านยาก

### 7. Smart Abstractions

- สร้าง abstraction เมื่อมี use case จริง 2+ ที่ใช้ซ้ำ
- ไม่สร้าง abstraction เพื่อ "ความยืดหยุ่นในอนาคต"
- Extract function เมื่อซ้ำกัน 3+ ครั้ง (Rule of Three)
- ใช้ composition over inheritance
- Abstraction ต้องลด complexity ไม่ใช่เพิ่ม

## Expected Outcome

- Code ที่เขียนครั้งแรกและไม่ต้อง rework
- ลด technical debt ตั้งแต่ตอนเขียน
- ใช้ libraries และ utilities ที่มีอยู่อย่างครบถ้วน
- Code ที่อ่านง่าย maintain ได้ และ type-safe
- ไม่มี over-engineering หรือ unnecessary abstractions
- ผ่าน lint, typecheck, และ test ตั้งแต่ครั้งแรก
- ลดเวลาในการ debug และ refactor ภายหลัง
