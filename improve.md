---
title: Improve
description: ปรับปรุงให้ coverage ครบ, flow ดีที่สุด, เข้าใจง่าย และอื่นๆ ตามที่ระบุ
auto_execution_mode: 3
related_workflows:
  - /deep-thinking
  - /pondering
  - /plan
  - /refactor
  - /deep-review
  - /validate
  - /ask-me
  - /suggest-next-action
---

## Goal

ปรับปรุงสิ่งที่ระบุให้ดีขึ้นในทุกมิติ — coverage ครบ, flow ดีที่สุด, เข้าใจง่าย และอื่นๆ ตามที่ผู้ใช้ระบุ

## Scope

ใช้สำหรับปรับปรุง code, workflow, documentation, configuration, หรือสิ่งใดก็ตามที่ผู้ใช้ระบุ ไม่ใช่การสร้างใหม่ (ใช้ `/plan` + implement) และไม่ใช่การ review อย่างเดียว (ใช้ `/deep-review`)

## Execute

### 1. Understand What To Improve

เข้าใจสิ่งที่ต้องปรับปรุง:

1. ระบุสิ่งที่ผู้ใช้ต้องการปรับปรุง (file, workflow, code, docs, config)
2. ระบุ criteria ที่ผู้ใช้กำหนด เช่น "ทำให้ coverage", "ทำให้ flow ดีสุด", "ทำให้เข้าใจง่าย"
3. ถ้า criteria ไม่ชัดเจน ให้ใช้ `/ask-me` เพื่อขอรายละเอียด
4. อ่านไฟล์หรือสิ่งที่ต้องปรับปรุงทั้งหมด
5. ทำ `/pondering` เพื่อทบทวนมุมมองก่อนเริ่ม

### 2. Analyze Current State

วิเคราะห์สถานะปัจจุบัน:

1. อ่านและทำความเข้าใจเนื้อหาปัจจุบันทั้งหมด
2. ระบุ strengths — สิ่งที่ดีอยู่แล้ว
3. ระบุ weaknesses — สิ่งที่ขาด ไม่ชัดเจน หรือไม่ครบ
4. ระบุ gaps — สิ่งที่ขาดหายไปเทียบกับ criteria
5. ระบุ inconsistencies — สิ่งที่ไม่สม่ำเสมอ
6. เปรียบเทียบกับ workflows ที่ดีแล้ว เช่น `/deep-thinking`, `/pondering`

### 3. Define Improvement Criteria

กำหนดเกณฑ์การปรับปรุง:

1. **Coverage** — ครอบคลุมทุกด้านที่เกี่ยวข้อง ไม่มีส่วนขาด
2. **Flow** — ลำดับขั้นตอนมีเหตุผล อ่านตามได้ง่าย ไม่กระโดด
3. **Clarity** — เข้าใจง่าย ภาษาชัดเจน ไม่กำกวม
4. **Consistency** — สม่ำเสมอกับ workflows อื่นในระบบ
5. **Completeness** — ครบถ้วน มีรายละเอียดที่จำเป็น
6. **Actionable** — ปฏิบัติได้จริง ไม่เป็นแค่ทฤษฎี
7. เพิ่ม criteria อื่นๆ ตามที่ผู้ใช้ระบุ

### 4. Plan Improvements

วางแผนการปรับปรุง:

1. จัดลำดับ improvements ตาม impact และ effort
2. แบ่งเป็น changes ที่ทำได้ทีละส่วน
3. ระบุ dependencies ระหว่าง changes
4. กำหนด success criteria สำหรับแต่ละ improvement
5. ถ้า changes เยอะ ให้ทำ `/plan` เพื่อวางแผน

### 5. Execute Improvements

ดำเนินการปรับปรุง:

1. ทำตาม plan ทีละส่วน
2. แก้ไขเนื้อหาให้ตรงตาม criteria แต่ละข้อ
3. ตรวจสอบว่า change แต่ละอันไม่ทำลายส่วนอื่น
4. รักษา style และ format ให้สม่ำเสมอกับ workflows อื่น
5. ถ้าเป็น workflow ให้ทำตาม `/write-global-workflows`
6. ถ้าเป็น code ให้ทำตาม `/refactor`

### 6. Validate Improvements

ตรวจสอบผลการปรับปรุง:

1. ตรวจสอบว่า criteria แต่ละข้อได้รับการปรับปรุง
2. อ่านผลลัพธ์ทั้งหมดอีกครั้งเพื่อตรวจสอบ flow
3. ตรวจสอบ consistency กับ workflows อื่น
4. ตรวจสอบว่าไม่มีส่วนที่ขาดหายไป
5. ทำ `/validate` เพื่อตรวจสอบคุณภาพ

### 7. Iterate If Needed

ปรับแก้เพิ่มเติมถ้าจำเป็น:

1. ถ้า validation พบ issues ให้แก้ไข
2. ถ้ามี criteria ใหม่ที่ผู้ใช้เพิ่ม ให้ปรับปรุงต่อ
3. ทำซ้ำจนกว่าทุก criteria จะผ่าน
4. ถ้าไม่แน่ใจ ให้ใช้ `/ask-me` เพื่อยืนยันกับผู้ใช้

## Rules

### 1. When To Use Improve

ใช้ improve เมื่อ:

- ผู้ใช้ระบุชัดเจนว่าต้องการปรับปรุงสิ่งใดสิ่งหนึ่ง
- มี criteria ที่ชัดเจน เช่น "ทำให้ coverage", "ทำให้ flow ดีสุด"
- ต้องการปรับปรุง quality ของสิ่งที่มีอยู่แล้ว
- ต้องการให้สม่ำเสมอกับมาตรฐานอื่น

### 2. When Not To Use Improve

ไม่ใช้ improve เมื่อ:

- ต้องการสร้างใหม่ (ใช้ `/plan` + implement)
- ต้องการ review อย่างเดียว (ใช้ `/deep-review`)
- ต้องการแค่ validate (ใช้ `/validate`)
- ต้องการแค่ refactor code (ใช้ `/refactor`)
- ไม่มี criteria ที่ชัดเจน

### 3. Improvement Principles

หลักการปรับปรุง:

- **Minimal changes** — แก้น้อยที่สุดเท่าที่จำเป็น
- **Preserve strengths** — อย่าทำลายสิ่งที่ดีอยู่แล้ว
- **Consistent style** — รักษา style ให้สม่ำเสมอกับระบบ
- **No over-engineering** — อย่าเพิ่ม complexity โดยไม่จำเป็น
- **User-centric** — ปรับปรุงตาม criteria ที่ผู้ใช้ระบุ

### 4. Quality Checklist

ตรวจสอบคุณภาพก่อนจบ:

- [ ] Coverage — ครอบคลุมทุกด้านที่เกี่ยวข้อง
- [ ] Flow — ลำดับขั้นตอนมีเหตุผล
- [ ] Clarity — เข้าใจง่าย ภาษาชัดเจน
- [ ] Consistency — สม่ำเสมอกับ workflows อื่น
- [ ] Completeness — ครบถ้วน มีรายละเอียดที่จำเป็น
- [ ] Actionable — ปฏิบัติได้จริง
- [ ] No breaking changes — ไม่ทำลายส่วนอื่น

### 5. Time Budget

- ถ้าเป็น improvement เล็ก ใช้เวลาไม่เกิน 5 นาที
- ถ้าเป็น improvement กลาง ใช้เวลาไม่เกิน 15 นาที
- ถ้าเป็น improvement ใหญ่ ใช้เวลาตามความจำเป็น แต่ต้องสรุปได้
- ถ้า improvement นานเกินไป ให้ใช้ `/ask-me` เพื่อขอ scope จากผู้ใช้

### 6. Integration With Other Workflows

เชื่อมโยงกับ workflows อื่น:

- ทำ `/pondering` ก่อน improve เพื่อทบทวนมุมมอง
- ทำ `/deep-thinking` ถ้าต้องวิเคราะห์เชิงระบบ
- ทำ `/plan` ถ้า changes เยอะ
- ทำ `/refactor` ถ้าเป็น code improvement
- ทำ `/deep-review` เพื่อ review ผลลัพธ์
- ทำ `/validate` เพื่อตรวจสอบคุณภาพ
- ทำ `/ask-me` ถ้า criteria ไม่ชัดเจน
- ทำ `/suggest-next-action` หลัง improve เพื่อรู้ว่าควรทำอะไรต่อ

## Expected Outcome

- สิ่งที่ปรับปรุงมี coverage ครบถ้วน
- Flow ที่ดีที่สุด อ่านตามได้ง่าย
- เข้าใจง่าย ภาษาชัดเจน
- สม่ำเสมอกับมาตรฐานอื่นในระบบ
- ครบถ้วนตาม criteria ที่ผู้ใช้ระบุ
