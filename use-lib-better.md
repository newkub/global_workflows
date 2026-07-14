---
title: Use Lib Better
description: เปรียบเทียบ dependencies ปัจจุบัน และสรุปว่าควรใช้ dependency อะไร
auto_execution_mode: 3

related:
  - /follow-my-tech-stack
  - /deep-research
  - /search-github-star
  - /review-dependencies
  - /analyze-project
---

## Goal

วิเคราะห์ dependencies ปัจจุบัน, เปรียบเทียบ alternatives, และสรุปว่าควรใช้ dependency อะไร

## Execute

### 1. Snapshot Current Dependencies

1. ทำ `/follow-my-tech-stack` เพื่อดู tech stack ทั้งหมด
2. อ่าน `package.json` หรือ manifest ที่เกี่ยวข้อง
3. ระบุ version ปัจจุบัน, duplicate, deprecated, หรือ packages ที่ไม่ค่อย maintain

### 2. Analyze Usage

1. ค้นหา imports ของแต่ละ package ใน codebase
2. ตรวจสอบว่า package ถูกใช้จริงหรือเป็น dead dependency
3. ระบุ packages ที่เป็น candidate สำหรับการ replace หรือ upgrade

### 3. Research Alternatives

1. ใช้ `/deep-research` เพื่อหา dependencies ทางเลือกที่ดีกว่า
2. ดู npm trends, Bundlephobia, GitHub stars/forks, release frequency
3. เปรียบเทียบ apples-to-apples กับ version ล่าสุด

### 4. Evaluate Candidates

1. ให้คะแนนแต่ละ candidate ตามเกณฑ์ (1-5 points):
   - **Modern**: ใช้ latest standards, APIs, patterns
   - **Type Safety**: มี TypeScript definitions หรือ built-in types ที่ดี
   - **Performance**: Benchmarks ดีกว่าหรือเทียบเท่า
   - **DX**: API ใช้งานง่าย, documentation ดี, error messages ชัดเจน
   - **Maintenance**: Active development, responsive maintainers, security updates
   - **Bundle Size**: เล็กกว่าหรือเท่ากับปัจจุบัน
   - **Dependencies**: น้อยกว่าหรือเท่ากับปัจจุบัน
2. คำนวณ Total Score (สูงสุด 35 points)
3. ประเมิน Migration Effort และ Risk Level (Low/Medium/High)

### 5. Recommend Dependencies

1. ตอบแบบ list "ควรใช้อะไร" แยกตาม category (framework, ui, database, testing, tooling)
2. ระบุ priority สำหรับแต่ละ dep:
   - **High**: Score >= 25, Effort: Low, Risk: Low
   - **Medium**: Score 20-24, Effort: Medium, Risk: Medium
   - **Low**: Score < 20, Effort: High, Risk: High
3. ให้เหตุผลสั้น ๆ ว่าทำไมถึงเลือกตัวนั้น
4. ถ้าต้องการ execute การเปลี่ยนแปลงจริง ให้ส่งต่อไปยัง `/review-dependencies`

## Rules

- `/use-lib-better` ตอบแค่ **deps ที่ควรใช้** ไม่ต้องลบ/อัพเกรด/ติดตั้งเอง
- ไม่ execute การเปลี่ยนแปลง package ใด ๆ ในขั้นตอนนี้
- ถ้าพบ unused, duplicate, security issues ให้ reference ไป `/review-dependencies`
- ใช้ scoring system ชัดเจน (1-35 points)
- เปรียบเทียบ apples-to-apples กับ version ล่าสุด
- ไม่ต้องเขียน migration plan ละเอียด (ให้ `/review-dependencies` ทำ)

## Expected Outcome

- รายการ deps ที่ควรใช้ พร้อมคะแนนและ priority
- ไม่มีการ execute changes
- ชัดเจนว่าอะไรควร replace, add, remove, upgrade

## Anti-Patterns

- ❌ ลบ/อัพเกรด packages ในขั้นตอนนี้
- ❌ ตอบแบบกว้าง ๆ ไม่ระบุ deps ที่แนะนำ
- ❌ ไม่เปรียบเทียบกับ version ล่าสุด
- ❌ ไม่ส่งต่อ execution ไปยัง `/review-dependencies`

