---
title: Validate Review
description: ตรวจสอบคุณภาพ review ก่อน merge หรือ release ครบทุกมิติ
auto_execution_mode: 3
related_workflows:
  - /deep-review
  - /review-pr
  - /review-test-case
  - /review-test-result
  - /check-correctness
  - /validate
  - /report-health
---

## Goal

ตรวจสอบคุณภาพ review ก่อน merge หรือ release ครบทุกมิติ เพื่อป้องกัน issues หลุดไป production

## Scope

ใช้สำหรับ validate review ของ PR, release, หรือ major changes ก่อน approve หรือ merge

## Execute

### 1. Check Review Completeness

ตรวจสอบว่า review ครอบคลุมทุก dimension ที่จำเป็น

1. ตรวจสอบว่า review ครอบคลุม: code quality, architecture, security, performance, testing, documentation
2. ตรวจสอบว่า review ระบุ severity สำหรับทุก issue (Critical, High, Medium, Low)
3. ตรวจสอบว่า review มี actionable recommendations สำหรับทุก issue
4. ถ้า review ขาด dimension ให้ทำ `/deep-review` เพื่อเติมส่วนที่ขาด

### 2. Check Test Coverage

ตรวจสอบว่า review ครอบคลุม testing dimension

1. ทำ `/review-test-case` เพื่อตรวจสอบคุณภาพ test cases
2. ทำ `/review-test-result` เพื่อตรวจสอบผล test execution
3. ตรวจสอบว่า tests ครอบคลุม code ที่เปลี่ยนแปลง
4. ถ้า test coverage ไม่เพียงพอ ให้เพิ่ม tests ก่อน merge

### 3. Check Correctness

ตรวจสอบความถูกต้องของ code และ review findings

1. ทำ `/check-correctness` เพื่อตรวจสอบความถูกต้องของ code
2. ตรวจสอบว่า review findings ถูกต้อง ไม่ใช่ false positives
3. ตรวจสอบว่า recommended fixes แก้ไข root cause ไม่ใช่ symptoms
4. ตรวจสอบว่าไม่มี regression จากการแก้ไข

### 4. Check PR Quality

ตรวจสอบคุณภาพ PR ก่อน merge

1. ทำ `/review-pr` เพื่อตรวจสอบ PR structure, description, และ changes
2. ตรวจสอบว่า PR description อธิบาย changes ครบถ้วน
3. ตรวจสอบว่า PR ไม่มี unrelated changes ผสมอยู่
4. ตรวจสอบว่า CI/CD checks ผ่านทั้งหมด

### 5. Check Health Impact

ตรวจสอบผลกระทบต่อ health score

1. ทำ `/report-health` เพื่อวัด health score หลัง changes
2. เปรียบเทียบกับ baseline score ก่อน changes
3. ถ้า health score ลดลง ให้ระบุสาเหตุและแก้ไขก่อน merge
4. ถ้า health score เท่าเดิมหรือเพิ่มขึ้น ให้ดำเนินการต่อ

### 6. Final Decision

สรุปผลการ validate review

1. รวบรวม findings ทั้งหมดจากขั้นตอนที่ 1-5
2. จัดลำดับ issues ที่เหลือตาม severity
3. กำหนด decision: Approve, Request Changes, หรือ Reject
4. ถ้ามี Critical หรือ High issues ที่ยังไม่แก้ ให้ Request Changes
5. ถ้ามีเฉพาะ Medium หรือ Low issues ให้ Approve พร้อม action items

## Rules

### Review Scope

- Review ต้องครอบคลุมทุก dimension: code quality, architecture, security, performance, testing, documentation
- ถ้า project ไม่มี database ให้ข้าม database review
- ถ้า project ไม่มี frontend ให้ข้าม frontend review
- ปรับ scope ตาม project characteristics

### Decision Criteria

- Critical issues: ต้องแก้ก่อน merge เสมอ
- High issues: ต้องแก้ก่อน merge ยกเว้นมี explicit justification
- Medium issues: สามารถ merge ได้พร้อม action items
- Low issues: สามารถ merge ได้พร้อมบันทึกเป็น tech debt

### Test Requirements

- Code ที่เปลี่ยนแปลงต้องมี test coverage
- Tests ต้องผ่านทั้งหมดก่อน merge
- ไม่ลด test coverage จาก before

### Non-Duplication

- ใช้ `/deep-review` สำหรับ comprehensive review
- ใช้ `/review-pr` สำหรับ PR structure review
- ใช้ `/validate` สำหรับ general validation
- Workflow นี้เน้นเฉพาะการ validate คุณภาพ review ก่อน merge

## Expected Outcome

- Review ครอบคลุมทุก dimension ที่จำเป็น
- Test coverage และ test results ผ่าน
- Review findings ถูกต้อง ไม่ใช่ false positives
- PR quality ผ่านมาตรฐาน
- Health score ไม่ลดลง
- Decision ชัดเจน: Approve, Request Changes, หรือ Reject
