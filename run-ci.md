---
title: Run CI
description: รัน CI pipeline เต็มรูปแบบเพื่อตรวจสอบคุณภาพโค้ดก่อน merge
auto_execution_mode: 3
related_workflows:
  - /run-verify
  - /run-build
  - /run-test
---

## Goal

รัน CI pipeline เต็มรูปแบบเพื่อตรวจสอบคุณภาพโค้ดก่อน merge

## Execute

### 1. Setup Environment

1. ติดตั้ง dependencies ด้วย `bun install`
2. ตั้งค่า environment variables ที่จำเป็น
3. ตรวจสอบ build cache และ artifacts

### 2. Run Verification

1. ทำ `/run-verify` เพื่อตรวจสอบคุณภาพโค้ด
2. ตรวจสอบ correctness, duplication, unused files/deps
3. แก้ไข issues ที่พบด้วย `/resolve-errors`

### 3. Typecheck

1. ทำ `/run-typecheck` เพื่อตรวจสอบ TypeScript types
2. แก้ไข type errors ถ้ามี
3. ยืนยันว่า typecheck ผ่าน

### 4. Lint

1. ทำ `/run-lint` เพื่อตรวจสอบ code style
2. แก้ไข lint errors ถ้ามี
3. ยืนยันว่า lint ผ่าน

### 5. Build

1. ทำ `/run-build` เพื่อสร้าง production artifacts
2. ตรวจสอบ build output
3. ยืนยันว่า build สำเร็จ

### 6. Test

1. ทำ `/run-test` เพื่อรัน test suite
2. ตรวจสอบ test coverage
3. ยืนยันว่า tests ผ่านทั้งหมด

### 7. Security Check

1. ทำ `/check-vulnerability` เพื่อตรวจสอบ security
2. แก้ไข vulnerabilities ถ้ามี
3. ยืนยันว่าไม่มี security issues

## Rules

### 1. Execution Order

- Setup: ติดตั้ง environment ก่อน
- Verify: ตรวจสอบคุณภาพโค้ด
- Typecheck: ตรวจสอบ types
- Lint: ตรวจสอบ code style
- Build: สร้าง artifacts
- Test: รัน tests
- Security: ตรวจสอบ security

### 2. Failure Handling

- Verify ล้มเหลว: แก้ไข issues ก่อนดำเนินการต่อ
- Typecheck ล้มเหลว: แก้ไข type errors
- Lint ล้มเหลว: แก้ไข lint errors
- Build ล้มเหลว: วิเคราะห์และแก้ไข
- Test ล้มเหลว: แก้ไข test failures
- Security ล้มเหลว: แก้ไข vulnerabilities

### 3. CI Environment

- ใช้ cache dependencies เพื่อเพิ่มความเร็ว
- ใช้ parallel execution เมื่อเป็นไปได้
- บันทึก artifacts สำหรับ debugging

## Expected Outcome

- CI pipeline ทำงานสำเร็จ
- Code ผ่านการตรวจสอบทุกด้าน
- Build artifacts ถูกสร้างอย่างถูกต้อง
- Tests ผ่านทั้งหมด
- ไม่มี security vulnerabilities

