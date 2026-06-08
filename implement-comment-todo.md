---
title: Implement Todo
description: แปลง TODO, FIXME, HACK เป็น production code
auto_execution_mode: 3
---

## Goal

แปลง TODO, FIXME, HACK comments และ placeholder functions ให้กลายเป็น production code ที่ใช้งานได้จริง

## Execute

### 1. Discovery And Inventory

ค้นหาและรวบรวมทุกสิ่งที่ต้อง implement จริง

1. ค้นหา TODO, FIXME, XXX, HACK comments ด้วย `/search-code`
2. ค้นหา placeholder functions ที่ยังไม่ implement
3. ค้นหา simulated delays และ hard-coded data
4. จัดกลุ่มตาม priority และ dependencies

### 2. Implementation

Implement production code ตาม priority และ dependencies

1. ทำ `/resolve-errors` เพื่อวิเคราะห์ root cause ก่อน implement
2. Implement functions ตาม business logic ที่ถูกต้อง
3. เชื่อมต่อกับ dependencies ที่จำเป็น (database, API, services)
4. เขียน tests ตาม `/write-test`
5. ทำ `/loop-until-complete` จนกว่าจะผ่าน tests

### 3. Verification

ตรวจสอบว่าไม่มี TODO เหลือและ code ใช้งานได้จริง

1. ค้นหา TODO, FIXME, XXX, HACK อีกครั้ง

## Rules

### No Placeholder Code

แทนที่ทุก placeholder functions ด้วย implementation จริง

- ไม่มี placeholder functions ใน production code
- ไม่มี TODO, FIXME, XXX, HACK comments
- ไม่มี simulated delays หรือ hard-coded data
- Functions ต้องมี logic ที่ถูกต้อง

### Test Coverage

ทุก implementation ต้องมี tests

- เขียน unit tests สำหรับ functions
- เขียน integration tests สำหรับ dependencies
- Tests ต้องครอบคลุม edge cases
- Tests ต้องผ่านทั้งหมด

### Code Quality

ทุก code ต้องผ่าน linting และ type checking

- ผ่าน linting rules ทั้งหมด
- ผ่าน type checking ไม่มี errors
- ใช้ import alias ตาม `/use-import-alias`
- ทำตาม `/follow-code-quality`

### Documentation

ทุก functions ต้องมี documentation

- เขียน docs สำหรับ public functions
- เขียน examples สำหรับ complex logic
- Update README ตาม `/update-readme`

## Expected Outcome

- TODO, FIXME, HACK ถูกแปลงเป็น production code
- Placeholder functions ถูก implement จริง
- Tests ครอบคลุมและผ่านทั้งหมด
- Code ผ่าน linting และ type checking
- Documentation ครบถ้วน
