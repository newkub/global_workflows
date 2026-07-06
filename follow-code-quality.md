---
title: Follow Code Quality
description: รักษามาตรฐานคุณภาพโค้ดด้วย separation of concerns, type safety, error handling
auto_execution_mode: 3
related_workflows:
  - /follow-content-quality
  - /follow-workflows
  - /refactor
  - /analyze-codebase-quality
  - /improve-type-safety
  - /fix-circular-dependencies
  - /no-hard-code
  - /improve-naming-convention
  - /improve-reuseables
  - /improve-debugging
  - /improve-side-effect
---

## Goal

รักษามาตรฐานคุณภาพโค้ดด้วย separation of concerns, type safety, error handling, และ code organization ที่ดี

## Scope

ใช้สำหรับทุก workspace เพื่อรักษามาตรฐานคุณภาพโค้ด

## Execute

### 1. Analyze Code Quality

วิเคราะห์คุณภาพโค้ดปัจจุบัน

1. ทำ `/refactor` เพื่อ check separation of concerns
2. ทำ `/analyze-codebase-quality` เพื่อระบุ SRP, SoC, type safety, hard code, anti-patterns, code smells, dead code, side effects, naming conventions
3. ทำ `/fix-circular-dependencies` เพื่อ identify circular dependencies
4. ทำ `/improve-type-safety` เพื่อ check type safety

### 2. Apply Rules

ทำตาม Rules ทั้งหมดเพื่อรักษามาตรฐานคุณภาพโค้ด

1. ทำตาม Rules ทั้งหมดใน section ## Rules
2. แก้ไข issues ที่พบตามลำดับความสำคัญ
3. ทำ `/no-hard-code` เพื่อลบ hard code
4. ทำ `/improve-naming-convention` เพื่อปรับปรุง naming conventions
5. ทำ `/improve-reuseables` เพื่อปรับปรุง reusability
6. ทำ `/improve-side-effect` เพื่อปรับปรุงการจัดการ side effects

### 3. Verify Quality

ตรวจสอบผลลัพธ์

1. ทำ `/run-lint` และ `/run-typecheck`
2. ทำ `/run-test` เพื่อตรวจสอบคุณภาพ

## Rules

### 1. Follow Specific Workflows

ทำตาม workflows เฉพาะสำหรับแต่ละด้าน

- ทำ `/refactor` สำหรับ separation of concerns
- ทำ `/fix-circular-dependencies` สำหรับ circular dependencies
- ทำ `/improve-type-safety` สำหรับ type safety
- ทำ `/no-hard-code` สำหรับลบ hard code

### 2. Error Handling

จัดการ errors อย่าง systematic

- Never swallow errors
- Use typed error classes
- Log with context
- Propagate errors
- Meaningful error messages

### 3. Testability

ปรับปรุง testability

- Use dependency injection
- Write pure functions
- Isolate side effects
- Predictable outputs
- Small functions

### 4. Maintainability

ทำให้โค้ด maintain ง่าย

- Self-documenting code
- DRY principle
- Consistent patterns
- Meaningful comments
- Small files (max 250 lines)

### 5. Reusability

ปรับปรุง reusability

- ทำ `/improve-reuseables` เพื่อปรับปรุง reusability
- Use composition
- Use generic types
- Decouple components

### 6. DX & Documentation

ปรับปรุง developer experience และ documentation

- Auto-completion
- Sensible defaults
- Input validation
- Discoverability
- JSDoc for public functions
- No comments for self-documenting code

### 7. Security

ทำให้โค้ดปลอดภัย

- Input validation
- Data sanitization
- Parameterized queries
- Authentication and authorization
- No sensitive data exposure

### 8. Performance

ทำให้โค้ดมีประสิทธิภาพ

- Hot path optimization
- Lazy loading
- Avoid unnecessary computations
- Memoization

### 9. Scalability

ทำให้โค้ด scale ได้

- Stateless design
- Async operations
- Caching strategies
- Horizontal scaling

### 10. Resilience

ทำให้โค้ดทนทานต่อการเปลี่ยนแปลง

- Abstraction layers
- Fallback mechanisms
- Loose coupling
- Interface contracts

### 11. Report Format

ระบุรูปแบบรายงาน

- ทำ `/report-format-table` สำหรับสรุปผลลัพธ์

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
