---
title: Improve Testability
description: ปรับปรุง testability ด้วย systematic refactoring
auto_execution_mode: 3
---

## Goal

ปรับปรุง testability ของโค้ดด้วย systematic refactoring เพื่อให้โค้ดทดสอบได้ง่าย รักษาได้ และมีคุณภาพสูง

## Execute

### 1. Analyze Current Testability

วิเคราะห์ testability ปัจจุบัน

1. ระบุโค้ดที่ยากต่อการทดสอบ
2. ตรวจสอบ `coupling` ระหว่าง components
3. หา `side effects` ที่ซ่อนอยู่
4. ระบุ `dependencies` ที่ hard-coded
5. ตรวจสอบ `global state` usage

### 2. Apply Dependency Injection

ใช้ dependency injection เพื่อแยก dependencies

1. แยก `dependencies` ออกจาก business logic
2. สร้าง `interfaces` สำหรับ external dependencies
3. ใช้ `constructor injection` หรือ `parameter injection`
4. สร้าง `mock implementations` สำหรับ testing
5. ลบ direct dependencies ไปยัง `concrete classes`

### 3. Reduce Coupling

ลด coupling ระหว่าง components

1. ทำตาม `/refactor-file-to-single-responsibility` เพื่อแยก concerns
2. ทำตาม `/functional-programming` เพื่อสร้าง pure functions
3. ใช้ `dependency inversion` สำหรับ external services
4. ลบ `tight coupling` ระหว่าง layers
5. ใช้ `events` หรือ `observers` สำหรับ loose coupling

### 4. Isolate Side Effects

แยก side effects ออกจาก business logic

1. ทำตาม `/improve-side-effect` เพื่อจัดการ side effects อย่างเป็นระบบ
2. ทำตาม `/functional-programming` เพื่อแยก core จาก shell
3. จัดการ `I/O operations` ใน layer แยก
4. ใช้ `repository pattern` สำหรับ data access
5. สร้าง `adapters` สำหรับ external services
6. ใช้ `dependency injection` สำหรับ side effects

### 5. Improve Code Structure

ปรับปรุงโครงสร้างโค้ด

1. แยก logic ที่ซับซ้อนเป็น functions เล็กๆ
2. ใช้ `composition` แทน `inheritance`
3. สร้าง clear `interfaces` ระหว่าง components
4. ลบ `conditional logic` ที่ซับซ้อน
5. ใช้ `strategy pattern` สำหรับ algorithms ที่เปลี่ยนแปลง

### 6. Verify Improvements

ตรวจสอบผลลัพธ์การปรับปรุง

1. ทำตาม `/write-test` เพื่อเขียน `unit tests` สำหรับ refactored code
2. ตรวจสอบ `test coverage`
3. รัน `integration tests`
4. ตรวจสอบว่า `behavior` เดิมยังคงอยู่
5. วัดผลลัพธ์ testability improvements

## Rules

### 1. Dependency Injection

ใช้ dependency injection เพื่อแยก dependencies ออกจาก business logic

- ใช้ `interfaces` สำหรับ external dependencies
- Inject dependencies ผ่าน `constructor` หรือ `parameters`
- ห้าม hard-coded dependencies ใน business logic
- สร้าง `mock implementations` สำหรับ testing
- ใช้ `dependency injection container` ถ้าจำเป็น

### 2. Separation of Concerns

แยก concerns ตาม Single Responsibility Principle

- แต่ละ `function/class` มี responsibility เดียว
- แยก business logic จาก infrastructure
- แยก data access จาก business logic
- แยก presentation จาก logic
- ใช้ `layers` หรือ `modules` สำหรับ separation

### 3. Loose Coupling

ลด coupling ระหว่าง components เพื่อให้ทดสอบได้ง่าย

- ใช้ `interfaces` แทน `concrete implementations`
- ใช้ `dependency inversion principle`
- ลบ direct dependencies ระหว่าง components
- ใช้ `events` หรือ `message passing`
- หลีกเลี่ยง `global state`

### 4. Testability First

ออกแบบโค้ดให้ทดสอบได้ตั้งแต่แรก

- ออกแบบโค้ดให้ทดสอบได้ตั้งแต่แรก
- เขียน tests ก่อนหรือ parallel กับ implementation
- ใช้ `TDD` ถ้าเหมาะสม
- ตรวจสอบ `test coverage` อย่างสม่ำเสมอ
- Refactor เพื่อเพิ่ม testability

### 5. Code Quality

ทำตาม `/refactor` เพื่อรักษาคุณภาพโค้ด

- ทำตาม `/refactor` เสมอ
- ลบ code duplication
- ใช้ meaningful names
- เขียน code ที่อ่านง่าย
- ทำตาม best practices ของภาษาที่ใช้

## Expected Outcome

- โค้ดที่ทดสอบได้ง่าย
- Test coverage สูงขึ้น
- Dependencies ที่ชัดเจนและ injectable
- Pure functions สำหรับ business logic
- Loose coupling ระหว่าง components
- Tests ที่เขียนง่ายและรักษาได้

