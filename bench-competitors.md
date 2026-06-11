---
title: Benchmark Competitors
description: ศึกษาคู่แข่งและปรับปรุงจนดีกว่าในทุกมิติ
auto_execution_mode: 3
related_workflows:
  - /deep-research
  - /plan
  - /ship-code
---

## Goal

ศึกษาคู่แข่งและปรับปรุง project จนดีกว่าในทุกมิติ

## Scope

ครอบคลุมทุกมิติของ product: features, performance, UX/UI, architecture, DX, security, scalability, business

## Execute

### 1. Research Competitors

วิจัยคู่แข่งที่ relevant กับ project

1. ทำ `/deep-research` เพื่อรวบรวมข้อมูลคู่แข่ง
2. ระบุ `competitors` ที่เป็น `direct` และ `indirect`
3. วิเคราะห์ `strengths`, `weaknesses`, และ `unique selling points`
4. ระบุ `tech stack`, `UX patterns`, และ `best practices`

### 2. Create Comparison Report

สร้างรายงานเปรียบเทียบทุกมิติ

1. สร้างไฟล์ `bench-competitors.md`

2. **Section 1: Multi-Dimension Comparison Table**
   - ตารางเปรียบเทียบทุกมิติระหว่างคู่แข่ง
   - โครงสร้าง: `# | Dimension | Metric | Competitor A | Competitor B | Status`
   - แบ่งเป็นกลุ่ม:
     - **Features**: `Core`, `Advanced`, `Integration`
     - **Performance**: `Speed`, `Efficiency`, `Resource Usage`
     - **UX/UI**: `Design`, `Usability`, `Accessibility`
     - **Architecture**: `Code Quality`, `Scalability`, `Maintainability`
     - **Developer Experience**: `DX`, `Documentation`, `Tooling`
     - **Security**: `Authentication`, `Data Protection`, `Compliance`
     - **Business**: `Pricing`, `Value Proposition`, `Market Fit`
   - ใช้ status emoji: ✅ Better, 🚧 Equal, ❌ Worse, ⭐ Surpass
   - Metrics ต้องกระชับและ measurable

3. **Section 2: Improvement Roadmap**
   - แผนการปรับปรุงในทุกมิติที่ด้อยกว่า
   - แบ่งเป็น phase ตาม priority (🔴 Critical / 🟡 High / 🟢 Medium / 🔵 Nice-to-have)
   - มี checkbox สำหรับติดตามความคืบหน้า
   - ระบุ metrics สำหรับวัดความสำเร็จ

4. **Section 3: Competitor Analysis**
   - วิเคราะห์คู่แข่งแต่ละเจ้าแบบกระชับ
   - ระบุ `strengths` ที่ควรเรียนรู้
   - ระบุ `weaknesses` ที่ควรหลีกเลี่ยง

### 3. Implement Improvements

ปรับปรุง project จนดีกว่าคู่แข่ง

1. ทำ `/plan` เพื่อวางแผนการปรับปรุง
2. ทำ `/ship-code` เพื่อ implement จนดีกว่าคู่แข่ง
3. ทำ `/improve-perf` สำหรับ `performance improvements`
4. ทำ `/improve-uxui` สำหรับ `UX/UI improvements`
5. หยุดเมื่อ project ดีกว่าคู่แข่งทั้งหมมในทุกมิติ

### 4. Update Progress

อัพเดทความคืบหน้าอย่างสม่ำเสมอ

- Update ไฟล์ `bench-competitors.md` เมื่อ implement เสร็จ
- Tick checkbox ใน `Section 2: Improvement Roadmap`
- Update status ใน `Section 1: Multi-Dimension Comparison Table`
- เพิ่ม column `Implementation Notes` และ `Completed Date`
- Re-benchmark หลังการปรับปรุงแต่ละครั้ง

## Rules

### 1. Focus on Actionable Insights

เน้น metrics ที่ measurable และ actionable

- ไม่ต้อง research ลึกเกินความจำเป็น
- เน้น `metrics` ที่ measurable และ actionable
- รายงานกระชับ ไม่เกิน 1 หน้า A4

### 2. Document Structure

รักษาโครงสร้างให้สม่ำเสมอ

- แค่ 1 ไฟล์ `bench-competitors.md`
- 2-3 sections หลักพอ
- ไม่ต้องมี `timeline` ละเอียด

### 3. Multi-Dimension Focus

ครอบคลุมทุกมิติของ product

- ไม่ใช่แค่ features แต่ครอบคลุมทุกมิติ
- วัดด้วย `metrics` ที่ objective
- เปรียบเทียบกับ `competitors` ที่ relevant

### 4. Implementation Discipline

ทำตาม plan จนกว่าจะดีกว่าคู่แข่ง

- ทำตาม plan จนกว่าจะดีกว่าคู่แข่ง
- หยุดเมื่อสำเร็จเป้าหมายในทุกมิติ
- ติดตามความคืบหน้าอย่างสม่ำเสมอ
- Re-benchmark หลังการปรับปรุงแต่ละครั้ง

### 5. Stop When Better

หยุดการทำงานเมื่อดีกว่าคู่แข่งแล้ว

- หยุดทันทีเมื่อ project ดีกว่าคู่แข่งในทุกมิติ
- ไม่ต้องทำ `over-engineering` หรือเพิ่ม features ที่ไม่จำเป็น
- ย้ายไปทำงานอื่นเมื่อสำเร็จเป้าหมายแล้ว

## Expected Outcome

- ไฟล์ `bench-competitors.md` ที่มี:
  - ตารางเปรียบเทียบทุกมิติ
  - `Improvement roadmap` พร้อม priority
  - `Competitor analysis` กระชับ
- Project ดีกว่าคู่แข่งในทุกมิติ
- ใช้เวลาไม่เกิน 30 นาทีในการ benchmark
