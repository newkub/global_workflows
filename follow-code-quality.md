---
title: Follow Code Quality
description: รักษามาตรฐานคุณภาพโค้ดด้วย separation of concerns, type safety, error handling
auto_execution_mode: 3
related:
  - /follow-content-quality
  - /follow-workflows
  - /refactor
  - /deep-review
  - /review-code-quality
  - /fix-circular-dependencies
  - /no-hard-code
  - /review-code-quality
  - /review-debugging
  - /review-architecture
  - /write-code-smart
---

## Goal

รักษามาตรฐานคุณภาพโค้ดด้วย separation of concerns, type safety, error handling, และ code organization ที่ดี

## Scope

ใช้สำหรับทุก workspace เพื่อรักษามาตรฐานคุณภาพโค้ด

## Execute

### 1. Analyze Code Quality

วิเคราะห์คุณภาพโค้ดปัจจุบัน

1. ทำ `/refactor` เพื่อ check separation of concerns
2. ทำ `/deep-review` เพื่อระบุ SRP, SoC, type safety, hard code, anti-patterns, code smells, dead code, side effects, naming conventions
3. ทำ `/fix-circular-dependencies` เพื่อ identify circular dependencies
4. ทำ `/review-code-quality` เพื่อ check type safety

### 2. Apply Fixes

แก้ไข issues ที่พบตามลำดับความสำคัญ

1. ทำ `/no-hard-code` เพื่อลบ hard code
2. ทำ `/review-code-quality` เพื่อปรับปรุง naming conventions
3. ทำ `/review-architecture` เพื่อปรับปรุงการจัดการ side effects
4. ทำ `/review-debugging` เพื่อปรับปรุง debuggability
5. แก้ไข issues ที่เหลือตามลำดับความสำคัญ

### 3. Verify Quality

ตรวจสอบผลลัพธ์

1. ทำ `/run-lint` และ `/run-typecheck`
2. ทำ `/run-test` เพื่อตรวจสอบคุณภาพ

## Rules

### 1. Use Specific Workflows

ใช้ workflows เฉพาะสำหรับแต่ละด้าน

- ทำ `/refactor` สำหรับ separation of concerns
- ทำ `/fix-circular-dependencies` สำหรับ circular dependencies
- ทำ `/review-code-quality` สำหรับ type safety
- ทำ `/no-hard-code` สำหรับลบ hard code
- ทำ `/write-code-smart` สำหรับเขียน code อย่างชาญฉลาด

### 2. Code Principles

หลักการเขียน code ที่มีคุณภาพ

- ไม่ swallow errors ใช้ typed error classes และ log with context
- เขียน pure functions แยก side effects และทำให้ predictable
- Self-documenting code, DRY, consistent patterns, ไฟล์ไม่เกิน 250 บรรทัด
- Use composition, generic types, และ decouple components
- JSDoc สำหรับ public functions ไม่ comments สำหรับ self-documenting code
- ไม่ sensitive data exposure, parameterized queries, และ input validation
- Hot path optimization, lazy loading, และ memoization
- Stateless design, async operations, และ caching strategies
- Abstraction layers, fallback mechanisms, และ loose coupling

### 3. Execution Order

ลำดับการทำงาน

- วิเคราะห์ก่อนแก้ไขเสมอ
- แก้ไขตามลำดับ: security > type errors > performance > code quality
- ตรวจสอบผลลัพธ์หลังแก้ไขทุกครั้ง

## Expected Outcome

- Code ที่ test ง่าย debug ง่าย
- Reusable และ scalable
- Resilience ทนทานต่อการเปลี่ยนแปลง
- Clear separation of concerns
- No circular dependencies
- Standardized import paths
- Functions with single responsibility
- High type safety
- Systematic error handling
- Complete documentation
- No hard code
- Good DX
- Maintainable codebase
- Optimized performance
- Secure implementation
- Consistent naming conventions
