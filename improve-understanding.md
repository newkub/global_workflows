---
title: Improve Understanding
description: ทำให้เข้าใจง่ายขึ้น โดยอธิบาย สร้าง visual และยกตัวอย่าง
auto_execution_mode: 3
related_workflows:
  - /visualize
  - /simplify-content
  - /translate-code
  - /follow-content-quality
---

## Goal

ทำให้สิ่งที่ซับซ้อนเข้าใจง่ายขึ้น โดยอธิบาย สร้าง visual และยกตัวอย่างประกอบ

## Scope

ใช้สำหรับ concept, code, architecture, หรือเนื้อหาที่ยากต่อการเข้าใจ

## Execute

### 1. Identify Target

ระบุสิ่งที่ต้องทำให้เข้าใจง่ายขึ้น:

1. ระบุเป้าหมาย (concept, code, architecture, configuration)
2. ระบุส่วนที่ซับซ้อนหรือสับสน
3. ระบุผู้อ่านเป้าหมาย (beginner, intermediate, expert)
4. ระบุระดับความลึกที่ต้องการ

### 2. Break Down

แบ่งสิ่งที่ซับซ้อนเป็นส่วนเล็กๆ:

1. แบ่งเป็นหัวข้อย่อยที่เข้าใจได้อิสระ
2. จัดลำดับจากง่ายไปยาก
3. ระบุความสัมพันธ์ระหว่างส่วนต่างๆ
4. ระบุ prerequisites ที่ต้องเข้าใจก่อน

### 3. Explain Simply

อธิบายด้วยภาษาที่เข้าใจง่าย:

1. ใช้ภาษาธรรมดา ไม่ใช้ศัพท์เทคนิคโดยไม่จำเป็น
2. ถ้าใช้ศัพท์เทคนิค ให้อธิบายความหมายทันที
3. ใช้ analogy เปรียบเทียบกับสิ่งที่คุ้นเคย
4. ยกตัวอย่างประกอบทุก concept
5. ทำ `/simplify-content` ถ้าเนื้อหายังซับซ้อน

### 4. Visualize

ทำ `/visualize` เพื่อสร้าง visual ให้เข้าใจง่าย:

1. ใช้ ANSI mode สำหรับ concept ง่ายๆ ที่ดูใน terminal ได้
2. ใช้ Web mode สำหรับ concept ซับซ้อนที่ต้องการ interaction
3. สร้าง diagram สำหรับ architecture และ data flow
4. สร้าง comparison table สำหรับเปรียบเทียบ
5. ไฟล์ชั่วคราวใน OS temp directory

### 5. Provide Examples

ยกตัวอย่างประกอบ:

1. ยกตัวอย่างแบบ step-by-step
2. ยกตัวอย่างแบบ before/after
3. ยกตัวอย่างแบบ do/don't
4. ยกตัวอย่างแบบ real-world use case
5. ทำ `/translate-code` ถ้าเป็น code ที่ต้องการอธิบายเป็นประโยค

### 6. Verify Understanding

ตรวจสอบความเข้าใจ:

1. สรุปสิ่งที่อธิบายใน 1-2 ประโยค
2. ระบุ key takeaways
3. ถ้าผู้อ่านยังสงสัย ให้อธิบายส่วนนั้นซ้ำด้วยวิธีอื่น
4. ทำ `/follow-content-quality` เพื่อตรวจสอบคุณภาพเนื้อหา

## Rules

### 1. Explanation Approach

- เริ่มจากภาพรวมก่อนรายละเอียด
- ใช้ภาษาธรรมดา หลีกเลี่ยงศัพท์เทคนิคโดยไม่จำเป็น
- ใช้ analogy เปรียบเทียบกับสิ่งที่คุ้นเคย
- ยกตัวอย่างประกอบทุก concept

### 2. Visualization

- ทำ `/visualize` สำหรับสร้าง visual ให้เข้าใจง่าย
- ใช้ ANSI mode สำหรับ concept ง่ายๆ
- ใช้ Web mode สำหรับ concept ซับซ้อน
- ไฟล์ชั่วคราวใน OS temp directory

### 3. Content Quality

- ทำ `/simplify-content` ถ้าเนื้อหายังซับซ้อน
- ทำ `/follow-content-quality` เพื่อตรวจสอบคุณภาพ
- ทำ `/translate-code` ถ้าเป็น code ที่ต้องการอธิบายเป็นประโยค
- ไม่ซ้ำซ้อนกับ `/simplify-code` (ลดความซับซ้อนของ code)

### 4. Audience Awareness

- ปรับระดับความลึกตามผู้อ่านเป้าหมาย
- ถ้า beginner ให้อธิบายพื้นฐานด้วย
- ถ้า expert ให้เน้น advanced concepts และ edge cases
- ถ้าไม่ระบุ ให้เริ่มจากระดับ intermediate

## Expected Outcome

- สิ่งที่ซับซ้อนกลายเป็นเข้าใจง่าย
- Visual ประกอบที่ช่วยให้เข้าใจได้ดีขึ้น
- ตัวอย่างประกอบที่ทำให้เข้าใจได้จริง
- สรุปและ key takeaways ที่ชัดเจน
- เนื้อหาที่ผ่านการตรวจสอบคุณภาพ
