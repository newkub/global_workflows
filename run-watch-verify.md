---
title: Run Watch Verify
description: watch lint, typecheck, test พร้อมกันและแก้ errors ทันที
auto_execution_mode: 3
related_workflows:
  - /follow-tasks
  - /watch-lint
  - /watch-typecheck
  - /watch-test
  - /run-verify
---

## Goal

watch lint, typecheck, test พร้อมกันและแก้ errors ทันทีที่เกิด

## Scope

ใช้สำหรับ development เพื่อตรวจสอบคุณภาพโค้ดอย่างต่อเนื่อง

## Execute

### 1. Setup Verify Watch

ตั้งค่า watch mode สำหรับ lint, typecheck, test

1. ทำ `/follow-tasks` เพื่อตั้งค่า scripts มาตรฐาน
2. เลือก watch mode scripts จาก `/follow-tasks` Rules section 3:
   - `lint:watch` (ถ้ามี)
   - `typecheck:watch`
   - `test:watch`
3. ทำ `/run-verify` เพื่อตรวจสอบ verify script ทำงานได้
4. ทำ `/follow-config` เพื่อตั้งค่า config files

### 2. Watch All Modes

รัน watch modes พร้อมกัน

1. ทำตาม `/watch-lint` สำหรับ linting watch mode
2. ทำตาม `/watch-typecheck` สำหรับ type checking watch mode
3. ทำตาม `/watch-test` สำหรับ test watch mode

### 3. Monitor And Fix Errors

ติดตามและแก้ errors จากทั้งสาม watch modes

1. ตรวจสอบ errors จาก lint, typecheck, test
2. ทำ `/resolve-errors` เพื่อแก้ errors
3. ทำ `/loop-until-complete` จนกว่าไม่มี errors เหลือ

## Rules

- ไม่ ignore errors จาก lint, typecheck, หรือ test
- แก้ errors ทันทีที่เกิด ก่อนทำงานต่อ
- ไม่ commit code ที่มี errors
- รัน verify ก่อน merge
- ใช้ consistent linting rules และ strict type checking
- Maintain test coverage และ clean codebase
- ใช้ watch mode อย่างมีประสิทธิภาพ (incremental compilation)

## Expected Outcome

- Lint, typecheck, test ผ่านทั้งหมด
- Errors ถูกแก้ทันที
- Code quality สูง
- Consistent codebase
