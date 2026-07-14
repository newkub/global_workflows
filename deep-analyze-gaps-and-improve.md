---
title: Deep Analyze Gaps And Improve
description: วิเคราะห์ gaps อย่างลึกซึ้ง จัดลำดับ และปรับปรุงจนครบถ้วน
auto_execution_mode: 3
related:
  - /deep-thinking
  - /deep-analyze
  - /deep-research
  - /deep-review
  - /prioritize
  - /pondering
  - /validate
  - /report-format-table
  - /suggest-next-action
  - /ask-me
---

## Goal

วิเคราะห์ gaps ของระบบอย่างลึกซึ้งด้วยหลายมิติ จัดลำดับตาม impact แล้วปรับปรุงจนครบถ้วน

## Scope

ใช้สำหรับค้นหาและแก้ gaps ของ code, workflows, documentation, configuration, หรือระบบใดๆ ที่ต้องการ both analysis และ improvement ในขั้นตอนเดียว ไม่ใช่แค่ review (ใช้ `/deep-review`) หรือแค่ analyze (ใช้ `/deep-analyze`) แต่เป็น analyze → prioritize → improve ครบวงจร

## Execute

### 1. Define Scope And Objectives

กำหนดขอบเขตและเป้าหมายของการวิเคราะห์ gaps

1. ระบุสิ่งที่ต้องวิเคราะห์ (project, module, workflow, docs, config)
2. ระบุ criteria ที่ใช้วัด completeness (เช่น best practices, standards, user requirements)
3. ทำ `/deep-thinking` เพื่อวางแผน analysis approach
4. ถ้า criteria ไม่ชัดเจน ให้ใช้ `/ask-me` เพื่อขอรายละเอียดจากผู้ใช้

### 2. Deep Analyze Current State

ทำ `/deep-analyze` เพื่อวิเคราะห์สถานะปัจจุบันอย่างลึกซึ้ง

1. ทำ `/deep-analyze` ครบทุกมิติ (architecture, code quality, features, dependencies, performance, security)
2. บันทึก findings ทั้งหมดในรูปแบบ structured data
3. ระบุ strengths — สิ่งที่ดีอยู่แล้ว
4. ระบุ weaknesses — สิ่งที่ขาด ไม่ชัดเจน หรือไม่ครบ

### 3. External Research For Best Practices

ทำ `/deep-research` เพื่อค้นหา best practices และ standards

1. ค้นหา best practices สำหรับ tech stack และ domain ที่ใช้
2. ค้นหา standards และ conventions ที่เกี่ยวข้อง
3. เปรียบเทียบกับ competitors หรือ reference implementations
4. ระบุ industry trends และ emerging patterns
5. บันทึก findings พร้อม source และปี

### 4. Gap Identification

ระบุ gaps ระหว่าง current state และ desired state

1. เปรียบเทียบ findings จาก Step 2 กับ best practices จาก Step 3
2. ระบุ missing features, missing tests, missing docs, missing configs
3. ระบุ inconsistencies — สิ่งที่ไม่สม่ำเสมอกับมาตรฐาน
4. ระบุ outdated patterns หรือ deprecated approaches
5. ระบุ security gaps และ compliance gaps
6. ระบุ performance gaps และ scalability gaps
7. จัดกลุ่ม gaps ตามหมวดหมู่

### 5. Prioritize Gaps

ทำ `/prioritize` เพื่อจัดลำดับ gaps ตาม impact และ effort

1. ประเมิน impact ของแต่ละ gap (business, technical, user, urgency)
2. ประเมิน effort ของแต่ละ gap (complexity, time, resources, risk)
3. ทำ `/pondering` เพื่อทบทวนมุมมองก่อนตัดสินใจ
4. จัดลำดับเป็น P0 (quick wins) → P4 (defer)
5. ระบุ dependencies ระหว่าง gaps

### 6. Plan Improvements

วางแผนการปรับปรุงตาม priority

1. จัดกลุ่ม improvements ตาม priority และ dependencies
2. แบ่งเป็น batches ที่ทำได้ทีละส่วน
3. ระบุ success criteria สำหรับแต่ละ improvement
4. ระบุ risks และ mitigation plans
5. ถ้า improvements เยอะ ให้แบ่งเป็น phases

### 7. Execute Improvements

ดำเนินการปรับปรุงตาม plan

1. ทำตาม plan ทีละ batch เริ่มจาก P0
2. แก้ไขตาม criteria แต่ละข้อ
3. ตรวจสอบว่า change แต่ละอันไม่ทำลายส่วนอื่น
4. รักษา style และ format ให้สม่ำเสมอกับระบบ
5. ถ้าเป็น code ให้ทำตาม `/refactor`
6. ถ้าเป็น workflow ให้ทำตาม `/write-global-workflows`

### 8. Validate Improvements

ทำ `/deep-review` และ `/validate` เพื่อตรวจสอบผล

1. ทำ `/deep-review` เพื่อ review ผลลัพธ์ครบทุกมิติ
2. ทำ `/validate` เพื่อตรวจสอบคุณภาพ
3. ตรวจสอบว่า gaps ที่ระบุไว้ได้รับการแก้ไขครบ
4. ตรวจสอบว่าไม่มี gaps ใหม่เกิดขึ้นจากการแก้ไข
5. ตรวจสอบ consistency กับระบบโดยรวม

### 9. Report And Next Actions

สร้างรายงานและแนะนำขั้นตอนถัดไป

1. ทำ `/report-format-table` สร้างตาราง: #, Gap, Category, Priority, Status, Improvement
2. สรุป before-after comparison
3. ระบุ remaining gaps ที่ยังไม่ได้แก้ (ถ้ามี)
4. ทำ `/suggest-next-action` เพื่อแนะนำขั้นตอนถัดไป

## Rules

### 1. When To Use

ใช้ workflow นี้เมื่อ:

- ต้องการ both analyze และ improve ในขั้นตอนเดียว
- ต้องการค้นหา gaps และแก้ไขจนครบ
- มี criteria ที่ชัดเจนสำหรับวัด completeness
- ต้องการ external research เป็นส่วนหนึ่งของการปรับปรุง

### 2. When Not To Use

ไม่ใช้ workflow นี้เมื่อ:

- ต้องการแค่ review (ใช้ `/deep-review`)
- ต้องการแค่ analyze (ใช้ `/deep-analyze`)
- ต้องการแค่ research (ใช้ `/deep-research`)
- ต้องการสร้างใหม่ (ใช้ `/plan` + implement)
- ไม่มี criteria ที่ชัดเจน

### 3. Gap Categories

ระบุ gaps ครบทุกหมวดหมู่:

- **Missing**: สิ่งที่ขาดหายไปทั้งหมด
- **Incomplete**: สิ่งที่มีแต่ไม่ครบ
- **Outdated**: สิ่งที่ล้าสมัย
- **Inconsistent**: สิ่งที่ไม่สม่ำเสมอ
- **Suboptimal**: สิ่งที่ทำได้ดีกว่า
- **Non-compliant**: สิ่งที่ไม่ผ่านมาตรฐาน

### 4. Improvement Principles

หลักการปรับปรุง:

- **Minimal changes** — แก้น้อยที่สุดเท่าที่จำเป็น
- **Preserve strengths** — อย่าทำลายสิ่งที่ดีอยู่แล้ว
- **Consistent style** — รักษา style ให้สม่ำเสมอกับระบบ
- **No over-engineering** — อย่าเพิ่ม complexity โดยไม่จำเป็น
- **Evidence-based** — ทุก improvement ต้องมี evidence จาก analysis หรือ research

### 5. Priority First

ทำตาม priority เสมอ:

- เริ่มจาก P0 (quick wins) ก่อนเสมอ
- ทำ P1 หลังจาก P0 ครบ
- ถ้า time budget จำกัด ให้ทำเฉพาะ P0-P1
- ถ้า gap มี dependency ต้องทำ prerequisite ก่อน

### 6. Verification

ตรวจสอบผลลัพธ์ก่อนจบ:

- ทุก gap ที่ระบุไว้ต้องมี status (fixed, deferred, skipped)
- ทำ `/deep-review` เพื่อตรวจสอบว่าไม่มี regression
- ทำ `/validate` เพื่อตรวจสอบคุณภาพ
- ถ้า validation พบ issues ให้แก้ไขและ re-validate

### 7. Time Budget

- ถ้าเป็น gaps เล็ก (1-5 gaps) ใช้เวลาไม่เกิน 15 นาที
- ถ้าเป็น gaps กลาง (6-15 gaps) ใช้เวลาไม่เกิน 45 นาที
- ถ้าเป็น gaps ใหญ่ (16+ gaps) ใช้เวลาตามความจำเป็น แต่ต้องแบ่งเป็น phases
- ถ้าใช้เวลานานเกินไป ให้ใช้ `/ask-me` เพื่อขอ scope จากผู้ใช้

### 8. Integration With Other Workflows

เชื่อมโยงกับ workflows อื่น:

- ทำ `/deep-thinking` ก่อนเริ่มเพื่อวางแผน
- ทำ `/deep-analyze` สำหรับ analyze ระดับลึก
- ทำ `/deep-research` สำหรับ external best practices
- ทำ `/deep-review` หลัง improve เพื่อ review ผล
- ทำ `/prioritize` สำหรับจัดลำดับ gaps
- ทำ `/validate` เพื่อตรวจสอบคุณภาพ
- ทำ `/ask-me` ถ้า criteria ไม่ชัดเจน
- ทำ `/suggest-next-action` หลังเสร็จเพื่อรู้ว่าควรทำอะไรต่อ

## Expected Outcome

- Gaps ทั้งหมดถูกระบุและจัดลำดับตาม priority
- Improvements ที่ทำไปมี evidence จาก analysis และ research
- ทุก gap มี status ชัดเจน (fixed, deferred, skipped)
- ผลลัพธ์ผ่าน `/deep-review` และ `/validate`
- รายงาน before-after comparison พร้อม remaining gaps
- ระบบมีความครบถ้วน สม่ำเสมอ และ up-to-date
