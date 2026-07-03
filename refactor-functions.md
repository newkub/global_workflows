---
title: Refactor Functions
description: Refactor functions ให้มี single responsibility และ clean code
auto_execution_mode: 3
related_workflows:
  - /convert-oop-to-functional
  - /refactor-files
  - /follow-functional-programming
  - /follow-functional-core-imperative-shell
---

## Goal

Refactor functions ให้มี single responsibility และ clean code

## Scope

ใช้สำหรับ refactor functions, methods, และ procedures

## Execute

### 1. Analyze Functions

วิเคราะห์ functions ปัจจุบัน

1. ตรวจสอบ functions ที่ยาวกว่า 20-30 บรรทัด
2. ตรวจสอบ functions ที่มีหลาย responsibilities
3. ตรวจสอบ functions ที่มี side effects ผสมกับ logic
4. ระบุ functions ที่ต้อง refactor

### 2. Refactor Long Functions

แยก functions ที่ยาว

1. ทำ `/refactor-files` สำหรับ functions ที่ยาว
2. แยก logic ออกเป็น helper functions
3. ใช้ early returns เพื่อลด nesting

### 3. Separate Concerns

แยก concerns ใน functions

1. ทำ `/follow-functional-core-imperative-shell` สำหรับแยก pure functions จาก side effects
2. แยก I/O operations ออกจาก business logic
3. แยก validation ออกจาก core logic

### 4. Apply Functional Patterns

ใช้ functional programming patterns

1. ทำ `/refactor-to-functional` สำหรับแปลงเป็น functional style
2. ใช้ pure functions เมื่อเป็นไปได้
3. ใช้ composition แทน inheritance

### 5. Verify Quality

ตรวจสอบคุณภาพหลัง refactor

1. ทำ `/run-lint` และ `/run-typecheck`
2. ทำ `/run-test` เพื่อตรวจสอบว่าไม่มี regression

## Rules

- Functions ไม่ควรเกิน 20-30 บรรทัด
- แต่ละ function ควรมี single responsibility
- แยก pure functions จาก side effects
- ใช้ references แทนการเขียนซ้ำเนื้อหาจาก workflows อื่น

## Expected Outcome

- Functions ทั้งหมดไม่เกิน 20-30 บรรทัด
- แต่ละ function มี single responsibility
- Pure functions แยกจาก side effects
- Code ผ่าน lint, typecheck, และ test
