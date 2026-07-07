---
title: Analyze Patterns
description: วิเคราะห์ design pattern usage, anti-patterns, code smells, refactoring opportunities
auto_execution_mode: 3
related_workflows:
  - /analyze-code-patterns
  - /analyze-architecture
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ design patterns และ anti-patterns เพื่อระบุ code smells และ refactoring opportunities

## Scope

Design pattern usage, anti-patterns, code smells, refactoring opportunities, pattern consistency

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม pattern metrics ผ่าน scripts (pattern detection, anti-pattern scan, code smell analysis)

### 2. Check Design Pattern Usage

1. ระบุ missing design patterns ที่ควรใช้ (Factory, Strategy, Observer, Adapter)
2. ระบุ incorrect pattern implementation
3. ระบุ over-engineering ด้วย patterns ที่ไม่จำเป็น
4. ระบุ inconsistent pattern usage ข้าม codebase
5. ระบุ missing pattern documentation

### 3. Check Anti-Patterns

1. ระบุ God class/object anti-pattern
2. ระบุ Singleton abuse
3. ระบุ Cargo cult programming
4. ระบุ Golden hammer anti-pattern
5. ระบุ Not Invented Here syndrome
6. ระบุ Premature optimization

### 4. Check Code Smells

1. ระบุ Long Method smell
2. ระบุ Long Parameter List smell
3. ระบุ Feature Envy smell
4. ระบุ Data Clumps smell
5. ระบุ Primitive Obsession smell
6. ระบุ Switch Statement smell
7. ระบุ Speculative Generality smell

### 5. Check Refactoring Opportunities

1. ระบุ Extract Method opportunities
2. ระบุ Extract Class opportunities
3. ระบุ Replace Conditional with Polymorphism opportunities
4. ระบุ Replace Inheritance with Delegation opportunities
5. ระบุ Introduce Parameter Object opportunities
6. ระบุ Replace Magic Number with Symbolic Constant opportunities

### 6. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: anti-patterns → code smells → refactoring opportunities → design pattern usage

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม file:line และ severity

### 2. Severity Classification

- **Critical**: God class, anti-patterns ใน core logic, premature optimization ใน hot path
- **High**: Long Method, Feature Envy, missing patterns ที่จำเป็น
- **Medium**: Data Clumps, Primitive Obsession, inconsistent pattern usage
- **Low**: Speculative Generality, over-engineering, missing pattern docs

### 3. Use Scripts For Pattern Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ pattern detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- Pattern issues ระบุพร้อม file:line และ severity
- พร้อมสำหรับ `/refactor` หรือ `/simplify-code`
