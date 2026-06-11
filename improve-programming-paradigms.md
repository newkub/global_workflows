---
title: Improve Programming Paradigms
description: เลือกและปรับปรุง programming paradigms ที่เหมาะสมกับงาน
auto_execution_mode: 3
related_workflows:
  - follow-functional-programming
  - follow-declarative-programming
  - follow-imperative-programming
  - follow-object-oriented-programming
  - follow-concurrent-programming
---

## Goal

เลือกและปรับปรุง programming paradigms ที่เหมาะสมกับงาน เพื่อเพิ่มคุณภาพโค้ดและ maintainability

## Scope

ใช้สำหรับการประเมินและปรับปรุง programming paradigms ใน codebase ทั้งหมด

## Execute

### 1. Analyze Current Paradigms

วิเคราะห์ paradigms ที่ใช้อยู่ใน codebase

1. ทำ `/analyze-project` เพื่อดู paradigms ที่ใช้
2. ตรวจสอบ consistency ของ paradigm usage
3. ระบุ mixed paradigms ที่อาจทำให้สับสน
4. ประเมินว่า paradigms ที่ใช้เหมาะสมกับปัญหา
5. ตรวจสอบ anti-patterns ที่เกิดจาก paradigm misuse

### 2. Choose Appropriate Paradigm

เลือก paradigm ที่เหมาะสมกับงาน

1. ทำ `/functional-programming` สำหรับ business logic ที่ pure
2. ทำ `/declarative-programming` สำหรับ UI และ configuration
3. ทำ `/imperative-programming` สำหรับ I/O และ side effects
4. ทำ `/object-oriented-programming` สำหรับ domain modeling
5. ทำ `/concurrent-programming` สำหรับ async operations

### 3. Apply Paradigm Principles

ใช้หลักการของ paradigm ที่เลือก

1. ใช้ pure functions สำหรับ business logic
2. ใช้ immutability สำหรับ state management
3. ใช้ composition สำหรับ building blocks
4. ใช้ encapsulation สำหรับ hiding details
5. ใช้ async/await สำหรับ asynchronous operations

### 4. Handle Paradigm Mixing

จัดการการผสม paradigms อย่างเหมาะสม

1. แยก layers ตาม paradigm ที่เหมาะสม
2. ใช้ functional core กับ imperative shell
3. ใช้ declarative UI กับ imperative logic
4. ใช้ OOP สำหรับ domain กับ functional สำหรับ logic
5. Document paradigm boundaries อย่างชัดเจน

### 5. Refactor To Better Paradigm

Refactor code ไปสู่ paradigm ที่ดีกว่า

1. ทำ `/refactor-to-functional` สำหรับ logic ที่ซับซ้อน
2. ทำ `/refactor-to-modules` สำหรับ separation of concerns
3. แปลง loops เป็น collection operations
4. แปลง mutable state เป็น immutable
5. แปลง callback chains เป็น async/await

### 6. Validate Paradigm Usage

ตรวจสอบว่าใช้ paradigms อย่างถูกต้อง

1. ทำ `/review-codebase` เพื่อตรวจสอบ paradigm usage
2. ตรวจสอบ consistency ทั่ว codebase
3. ตรวจสอบว่า paradigm ที่เลือกเหมาะสม
4. ตรวจสอบว่าไม่มี paradigm conflicts
5. ทำ `/run-test` เพื่อตรวจสอบว่าไม่มี regression

## Rules

### Paradigm Selection

เลือก paradigm ที่เหมาะสมกับปัญหา

- ใช้ `functional programming` สำหรับ business logic
- ใช้ `declarative programming` สำหรับ UI และ configuration
- ใช้ `imperative programming` สำหรับ I/O และ side effects
- ใช้ `OOP` สำหรับ domain modeling
- ใช้ `concurrent programming` สำหรับ async operations
- หลีกเลี่ยงการใช้ paradigm เดียวทุกที่
- เลือก paradigm ตาม context ของงาน

### Paradigm Principles

ใช้หลักการของ paradigm อย่างถูกต้อง

- ใช้ `pure functions` เมื่อเป็นไปได้
- ใช้ `immutability` สำหรับ state
- ใช้ `composition` สำหรับ building blocks
- ใช้ `encapsulation` สำหรับ hiding details
- ใช้ `async/await` สำหรับ async operations
- ทำตาม best practices ของแต่ละ paradigm
- หลีกเลี่ยง anti-patterns

### Paradigm Mixing

จัดการการผสม paradigms อย่างเหมาะสม

- แยก layers ตาม paradigm ที่เหมาะสม
- ใช้ `functional core` กับ `imperative shell`
- ใช้ `declarative UI` กับ `imperative logic`
- ใช้ `OOP` สำหรับ domain กับ `functional` สำหรับ logic
- Document paradigm boundaries ชัดเจน
- หลีกเลี่ยง paradigm conflicts
- เลือก paradigm ที่เสริมกัน

### Consistency

รักษา consistency ของ paradigm usage

- ใช้ paradigm แบบเดียวใน layer เดียวกัน
- Document paradigm choices อย่างชัดเจน
- ทำตาม conventions ของ paradigm
- หลีกเลี่ยง paradigm switching โดยไม่จำเป็น
- Review paradigm usage อย่างสม่ำเสมอ
- Refactor inconsistent code
- เลือก paradigm ที่เหมาะสมกับ team

### Refactoring

Refactor code ไปสู่ paradigm ที่ดีกว่า

- ทำ `/refactor-to-functional` สำหรับ logic ที่ซับซ้อน
- ทำ `/refactor-to-modules` สำหรับ separation
- แปลง loops เป็น collection operations
- แปลง mutable state เป็น immutable
- แปลง callback chains เป็น async/await
- Test refactored code อย่างครบถ้วน
- Document refactoring decisions

## Expected Outcome

- Paradigm ที่เหมาะสมกับงาน
- Consistent paradigm usage
- Clear paradigm boundaries
- Well-mixed paradigms ที่เสริมกัน
- Code ที่ maintain ได้ง่าย
- Code ที่ test ได้ง่าย
- Documentation ที่ชัดเจน
