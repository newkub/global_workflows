---
title: Write Code Explicit
description: เขียน code ให้ชัดเจน explicit มากกว่า implicit เพื่อให้เข้าใจง่าย
auto_execution_mode: 3
---

## Goal

เขียน code ให้ชัดเจน explicit มากกว่า implicit เพื่อให้เข้าใจง่าย ลดความสับสน และบำรุงรักษาได้

## Scope

ใช้สำหรับการเขียน code ทุกภาษา: naming, types, control flow, functions, classes, configuration

## Execute

### 1. Check Naming

ตรวจสอบ naming ทุกอย่างให้บอก purpose ชัดเจน

1. ตั้งชื่อ variables, functions, classes บอก purpose ชัดเจน
2. หลีกเลี่ยง abbreviations ยกเว้นที่รู้จักกันดี
3. ใช้ domain language ที่ถูกต้อง
4. รักษา consistency ทั้ง project

### 2. Replace Magic Values

แทนที่ literal values ด้วย named constants

1. แทนที่ magic numbers ด้วย named constants
2. แทนที่ magic strings ด้วย enums หรือ constants
3. ตั้งชื่อ constants ให้บอกความหมายชัดเจน
4. จัดกลุ่ม constants ที่เกี่ยวข้องกัน

### 3. Add Type Information

เขียน type annotations ชัดเจนทุกที่

1. เขียน type annotations ชัดเจน (ตามภาษาที่ใช้)
2. หลีกเลี่ยง dynamic types โดยไม่จำเป็น
3. ใช้ type guards หรือ validation แทน casting
4. เขียน return types ชัดเจน

### 4. Clarify Control Flow

เขียน control flow ที่อ่านง่ายและเข้าใจได้ง่าย

1. ใช้ explicit return statements
2. หลีกเลี่ยง implicit returns ที่ซับซ้อน
3. เขียน conditions ให้ชัดเจน
4. หลีกเลี่ยง nested conditions ลึกเกินไป

### 5. Document Side Effects

ระบุ side effects ชัดเจน

1. แยก pure functions จาก side effects
2. ระบุ side effects ชัดเจนในชื่อฟังก์ชัน
3. หลีกเลี่ยง hidden mutations
4. ใช้ immutable patterns ที่เหมาะสม

### 6. Handle Errors Explicitly

ใช้ explicit error handling

1. ใช้ explicit error types
2. ระบุ error scenarios ทั้งหมด
3. ใช้ try-catch อย่างชัดเจน
4. ให้ error messages ชัดเจนแกะได้

### 7. Clarify Configuration

ตั้งค่า configuration ให้ชัดเจน

1. ตั้งชื่อ config keys ชัดเจน
2. ใช้ environment variables สำหรับ sensitive data
3. ให้ default values ชัดเจน
4. อธิบาย config options ใน docs

## Rules

### 1. Naming Clarity
ตั้งชื่อให้บอก purpose และ intent ชัดเจน (ทุกอย่าง)

- ใช้ชื่อเต็มแทน abbreviations (เช่น `userAuthentication` ไม่ใช่ `userAuth`)
- ตั้งชื่อ files บอก content ชัดเจน (เช่น `user-authentication.ts` ไม่ใช่ `auth.ts`)
- ตั้งชื่อ config keys บอก purpose ชัดเจน (เช่น `DATABASE_CONNECTION_TIMEOUT` ไม่ใช่ `TIMEOUT`)
- ใช้ verbs สำหรับ functions (เช่น `calculateTotal`, `validateEmail`)
- ใช้ nouns สำหรับ variables/classes (เช่น `userProfile`, `orderHistory`)
- ใช้ booleans ที่เป็นคำถาม (เช่น `isValid`, `hasPermission`)
- หลีกเลี่ยง generic names (เช่น `data`, `info`, `temp`)

### 2. Avoid Magic Values
แทนที่ literal values ด้วย named constants

- สร้าง constants สำหรับ magic numbers (เช่น `MAX_RETRY_COUNT = 3`)
- สร้าง enums สำหรับ magic strings (เช่น `UserRole.ADMIN`)
- จัดกลุ่ม constants ที่เกี่ยวข้องกันใน object
- ตั้งชื่อ constants ให้บอกความหมายชัดเจน
- ใช้ environment variables สำหรับ config values

### 3. Explicit Type Information
เขียน type annotations ชัดเจนทุกที่ (ตามภาษาที่ใช้)

- ใช้ type system ของภาษาอย่างเต็มที่
- หลีกเลี่ยง dynamic types ยกเว้นจำเป็นจริงๆ
- เขียน return types สำหรับ functions ทั้งหมด
- ใช้ type guards/validation แทน casting
- ใช้ sum types หรือ unions สำหรับ complex types

### 4. Clear Control Flow
เขียน control flow ที่อ่านง่ายและเข้าใจได้ง่าย

- ใช้ early returns แทน nested conditions
- ใช้ guard clauses สำหรับ validation
- หลีกเลี่ยง ternary operators ที่ซับซ้อน
- ใช้ switch/case สำหรับ multiple conditions
- แยก complex logic ออกเป็น functions

### 5. Configuration Clarity
ตั้งค่า configuration ให้ชัดเจนและเข้าใจได้ง่าย

- ตั้งชื่อ config keys บอก purpose ชัดเจน
- ใช้ environment variables สำหรับ sensitive data
- ให้ default values ชัดเจน
- อธิบาย config options ใน docs
- จัดกลุ่ม config ที่เกี่ยวข้องกัน

## Expected Outcome

- Codebase ที่อ่านง่ายและเข้าใจได้ง่าย
- ลด bugs จาก implicit behaviors
- บำรุงรักษาได้ง่ายขึ้น
- Onboarding ใหม่เร็วขึ้น
- Code review มีประสิทธิภาพมากขึ้น
