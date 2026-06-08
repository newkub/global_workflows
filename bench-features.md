---
title: Benchmark Until Better
description: ศึกษาคู่แข่งและปรับปรุงจนดีกว่าในทุกมิติ
auto_execution_mode: 3
related_workflows:
  - /compare-and-idea-features
  - /deep-research
---

## Goal

ศึกษาคู่แข่งและปรับปรุง project จนดีกว่าในทุกมิติ (features, performance, UX, architecture, DX, security, scalability)

## Execute

### 1. Quick Research

1. ทำ `/learn-from-web` เพื่อศึกษาคู่แข่ง
2. วิเคราะห์จุดแข็ง จุดอ่อน และ gap ที่สำคัญ
3. ระบุ UX patterns, tech stack, และ best practices

### 2. Create Benchmark Report

1. สร้างไฟล์ `bench-features.md`

2. **Section 1: Multi-Dimension Comparison Table**
   - ตารางเปรียบเทียบทุกมิติระหว่างคู่แข่ง
   - โครงสร้าง: `# | Dimension | Metric | Competitor A | Competitor B | Competitor C | Status`
   - แบ่งเป็นกลุ่ม:
     - **Features**: Core, Advanced, Integration
     - **Performance**: Speed, Efficiency, Resource Usage
     - **UX/UI**: Design, Usability, Accessibility
     - **Architecture**: Code Quality, Scalability, Maintainability
     - **Developer Experience**: DX, Documentation, Tooling
     - **Security**: Authentication, Data Protection, Compliance
     - **Business**: Pricing, Value Proposition, Market Fit
   - ใช้ status emoji: ✅ Better, 🚧 Equal, ❌ Worse, ⭐ Surpass
   - Metrics ต้องกระชับและ measurable

3. **Section 2: Improvement Roadmap**
   - แผนการปรับปรุงในทุกมิติที่ด้อยกว่า
   - แบ่งเป็น phase ตาม priority (🔴 Critical / 🟡 High / 🟢 Medium / 🔵 Nice-to-have)
   - มี checkbox สำหรับติดตามความคืบหน้า
   - ระบุ metrics สำหรับวัดความสำเร็จ

4. **Competitor Analysis Section**
   - วิเคราะห์คู่แข่งแต่ละเจ้าแบบกระชับ
   - ระบุ strengths ที่ควรเรียนรู้
   - ระบุ weaknesses ที่ควรหลีกเลี่ยง

### 3. Implementation

1. ทำ `/plan` เพื่อวางแผนการปรับปรุง
2. ทำ `/ship-code` เพื่อ implement จนดีกว่าคู่แข่ง
3. ทำ `/optimize-perf` สำหรับ performance improvements
4. ทำ `/improve-uxui` สำหรับ UX/UI improvements
5. หยุดเมื่อ project ดีกว่าคู่แข่งทั้งหมดในทุกมิติ

### 4. Update Implementation Status

- เมื่อ implement improvement เสร็จแล้ว ให้ update ไฟล์ `bench-features.md`
- ใน Section 2: Improvement Roadmap ให้ tick checkbox สำหรับ items ที่เสร็จแล้ว
- เพิ่ม column "Status" ใน Section 1: Multi-Dimension Comparison Table พร้อม values:
  - ⏳ Pending - ยังไม่เริ่มทำ
  - 🔄 In Progress - กำลังทำ
  - ✅ Done - เสร็จสมบูรณ์
  - ❌ Blocked - ถูก block
  - 🚫 Cancelled - ยกเลิก
- เพิ่ม column "Implementation Notes" สำหรับบันทึกสิ่งที่ทำไป
- เพิ่ม column "Completed Date" สำหรับบันทึกวันที่เสร็จ
- Update improvement roadmap section ด้วย progress จริง

## Rules

### 1. Focus on Actionable Insights

- ไม่ต้อง research ลึกเกินความจำเป็น
- เน้น metrics ที่ measurable และ actionable
- รายงานกระชับ ไม่เกิน 1 หน้า A4

### 2. Document Structure

- แค่ 1 ไฟล์ `bench-features.md`
- 2-3 sections หลักพอ
- ไม่ต้องมี timeline ละเอียด

### 3. Multi-Dimension Focus

- ไม่ใช่แค่ features แต่ครอบคลุมทุกมิติ
- วัดด้วย metrics ที่ objective
- เปรียบเทียบกับ competitors ที่ relevant

### 4. Implementation Rules

- ทำตาม plan จนกว่าจะดีกว่าคู่แข่ง
- หยุดเมื่อสำเร็จเป้าหมายในทุกมิติ
- ติดตามความคืบหน้าอย่างสม่ำเสมอ
- Re-benchmark หลังการปรับปรุงแต่ละครั้ง

## Expected Outcome

- ไฟล์ `bench-features.md` ที่มี:
  - ตารางเปรียบเทียบทุกมิติ
  - Improvement roadmap พร้อม priority
  - Competitor analysis กระชับ
- Project ดีกว่าคู่แข่งในทุกมิติ
- ใช้เวลาไม่เกิน 30 นาทีในการ benchmark
