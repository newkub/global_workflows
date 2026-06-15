---
title: Improve Code Quality
description: ปรับปรุงคุณภาพโค้ดด้วย type safety, naming, แล principles
auto_execution_mode: 3
related_workflows:
  - /improve-type-safety
  - /follow-code-quality
  - /improve-naming-convention
  - /follow-principles-engineering
---

## Goal

ปรับปรุงคุณภาพโค้ดด้วย type safety, naming conventions, แล engineering principles

## Scope

ใช้สำหรับปรับปรุงคุณภาพโค้ดทั้ง structure, readability, แล maintainability

## Execute

### 1. Improve Type Safety

ปรับปรุง type safety

- ทำ `/improve-type-safety` สำหรับ type safety

### 2. Improve Naming

ปรับปรุย naming conventions

- ทำ `/improve-naming-convention` สำหรับ naming conventions
- ใช้ชื่อที่ชัดเจนและสื่อความ
- รักษาความสม่ำเสมอ
- ใช้ naming conventions ที่เหมาะสม
- แก้ไขชื่อที่ไม่ชัดเจน

### 3. Improve Code Quality

ปรับปรุยคุณภาพโค้ด

- ทำ `/follow-code-quality` สำหรับ code quality
- ปรับปรุย readability
- ปรับปรุย validation
- ปรับปรุย error handling
- ปรับปรุย documentation

### 4. Apply Engineering Principles

ใช้ engineering principles

- ทำ `/follow-principles-engineering` สำหรับ engineering principles
- ใช้ single responsibility principle
- ใช้ separation of concerns
- ใช้ DRY (Don't Repeat Yourself)
- ใช้ SOLID principles

### 5. Refactor Complex Code

Refactor code ที่ซับซ้อน

- แบ่ง functions ที่ยาว
- แบ่ง classes ที่ใหญ่
- ลบ code duplication
- ปรับปรุย cyclomatic complexity
- ปรับปรุย code smell

## Rules

### 1. Naming Conventions

ใช้ naming conventions ที่สม่ำเสมอ

- ใช้ camelCase สำหรับ variables และ functions
- ใช้ PascalCase สำหรับ classes และ interfaces
- ใช้ UPPER_CASE สำหรับ constants
- ใช้ชื่อที่สื่อความ
- หลีกเลี่ยง abbreviations

### 2. Code Readability

รักษา readability

- เขียน code ที่อ่านง่าย
- ใช้ meaningful variable names
- เขียน comments สำหรับ logic ที่ซับซ้อน
- ใช้ consistent formatting
- ลบ dead code

### 3. Single Responsibility

ใช้ single responsibility principle

- แต่ละ function ทำอย่างเดียว
- แต่ละ class มี responsibility เดียว
- แบ่ง modules ตาม responsibility
- ลบ coupling ที่ไม่จำเป็น

## Expected Outcome

- Type safety ปรับปรุงครบถ้วน
- Naming conventions สม่ำเสมอ
- Code readability ดีขึ้น
- Data validation ครอบคลุม
- TypeScript errors ลดลง
- Testability ดีขึ้น
- Dependencies ที่ชัดเจนและ injectable
- Pure functions สำหรับ business logic
- Loose coupling ระหว่าง components
