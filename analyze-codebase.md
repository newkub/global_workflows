---
title: Analyze Codebase
description: วิเคราะห์ code-level patterns, smells, และ metrics ใน codebase
auto_execution_mode: 3
related_workflows:
  - /search-code
---

## Goal

วิเคราะห์ code-level patterns, anti-patterns, code smells, และ metrics เพื่อปรับปรุงคุณภาพโค้ด

## Scope

ครอบคลุมการวิเคราะห์ code patterns, code smells, design patterns, naming conventions, และ code metrics

## Execute

### 1. Code Pattern Analysis

วิเคราะห์ patterns ที่ใช้ใน codebase

1. ทำ `/search-code` หา common patterns (เช่น `useState`, `useEffect`, `async/await`)
2. หา anti-patterns (เช่น `any` types, `console.log`, nested ternary)
3. บันทึก pattern usage และ frequency
4. ระบุ patterns ที่ไม่ consistent

### 2. Code Smell Detection

ตรวจหา code smells ที่พบบ่อย

1. หา long functions (> 50 lines) ด้วย `/search-code`
2. หา deep nesting (> 3 levels) ด้วย multiline regex
3. หา god objects (large classes/files) ด้วย file size analysis
4. หา duplicate code patterns ด้วย `/check-duplication`

### 3. Design Pattern Usage

วิเคราะห์การใช้ design patterns

1. ทำ `/search-code` หา design patterns (singleton, factory, observer)
2. ตรวจสอบ pattern implementation ถูกต้องหรือไม่
3. บันทึก pattern usage และ context
4. ระบุ patterns ที่ควรใช้แต่ยังไม่ได้ใช้

### 4. Code Metrics Calculation

คำนวณ code metrics ด้วย scripts

1. ทำ `/use-scripts` พร้อม parser คำนวณ cyclomatic complexity
2. คำนวณ coupling และ cohesion metrics
3. หา files ที่มี complexity สูง (> 10)
4. ระบุ files ที่ต้อง refactor

### 5. Naming Convention Check

ตรวจสอบ naming conventions

1. ทำ `/search-code` หา naming patterns (camelCase, PascalCase, snake_case)
2. ตรวจสอบ consistency ของ naming
3. หา names ที่ไม่ follow conventions
4. บันทึก naming violations

### 6. Code Quality Assessment

ประเมินคุณภาพโค้ด

1. ตรวจสอบ type safety coverage (any types, missing types)
2. หา error handling patterns (try-catch, error boundaries)
3. ตรวจสอบ code comments และ documentation
4. ระบุ areas ที่ต้อง improve

## Rules

### 1. Tool Selection

เลือกใช้ tools ที่เหมาะสมกับ code analysis

- ใช้ `/search-code` สำหรับ pattern matching และ symbol search
- ใช้ `Grep` multiline mode สำหรับ structural patterns
- ทำ `/use-scripts` สำหรับ custom metrics calculation
- ใช้ `/check-duplication` สำหรับ duplicate code detection

### 2. Pattern Detection

ใช้ regex patterns ที่เหมาะสม

- ใช้ multiline regex สำหรับ structural patterns
- ใช้ case-insensitive search สำหรับ flexibility
- ใช้ context (-A, -B, -C) สำหรับ verify patterns
- ใช้ glob patterns สำหรับ filter file types

### 3. Metric Thresholds

กำหนด thresholds สำหรับ code quality

- Long functions: > 50 lines
- Deep nesting: > 3 levels
- High complexity: cyclomatic complexity > 10
- Large files: > 300 lines
- High coupling: > 5 dependencies

### 4. Scope Limitation

จำกัด scope ของการวิเคราะห์

- เน้น code-level analysis ไม่ใช่ project-level
- ไม่วิเคราะห์ dependencies หรือ tech stack
- ไม่วิเคราะหา architecture ระดับสูง
- เน้น patterns, smells, metrics ใน code

### 5. Actionable Output

สร้างผลลัพธ์ที่นำไปปฏิบัติได้

- ระบุ files ที่ต้อง refactor พร้อม priority
- ให้ recommendations สำหรับ improve code quality
- แยก quick wins จาก long-term improvements
- ทำ `/report` เพื่อสรุปผล

## Expected Outcome

- รายการ code patterns และ anti-patterns ที่พบ
- รายการ code smells พร้อม locations
- รายการ design patterns ที่ใช้
- Code metrics (complexity, coupling, cohesion)
- รายการ naming violations
- Recommendations สำหรับ refactor ตาม priority
