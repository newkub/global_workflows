---
title: Follow Code Quality
description: รักษามาตรฐานคุณภาพโค้ดด้วย separation of concerns, type safety, error handling
auto_execution_mode: 3
---

## Goal

รักษามาตรฐานคุณภาพโค้ดใน codebase ด้วยหลักการ separation of concerns, type safety, error handling, และ code organization ที่ดี

## Execute

### 1. Analyze

วิเคราะห์คุณภาพโค้ดปัจจุบัน

1. Check separation of concerns
2. Identify circular dependencies
3. Analyze dependencies flow
4. Check type safety
5. Review error patterns

### 2. Separate Concerns

แยก concerns ใน codebase

1. Separate pure logic from side effects
2. Structure files by purpose
3. Use barrel exports
4. Separate business/presentation logic

### 3. Dependencies

จัดการ dependencies อย่างเหมาะสม

1. Use import alias
2. Remove circular dependencies
3. Maintain one-way flow
4. Use barrel exports

### 4. Functions & Type Safety

ปรับปรุง functions และ type safety

1. Single responsibility
2. Reduce nested logic
3. Clear naming
4. Extract helper functions
5. รัน `/no-hard-code` เพื่อลบ hard code
6. Reusable
7. Testable
8. Good DX
9. Avoid any/unknown
10. Use type inference
11. Create custom types
12. Strict TypeScript config

### 5. Errors

จัดการ errors อย่าง systematic

1. Never swallow errors
2. Use typed errors
3. Separate error types
4. Log with context
5. Propagate errors

### 6. Documentation

เขียน documentation อย่างสมบูรณ์

1. JSDoc comments
2. Explain parameters/return
3. Specify side effects
4. Provide examples

## Rules

### No Hard Code

หลีกเลี่ยง hardcoding ใน code

- รัน `/no-hard-code` เพื่อลบ hard code ทั้งหมด

### Separation of Concerns

แยก concerns อย่างชัดเจน

- Separate pure logic from side effects
- Separate business/presentation logic
- Separate data access from business logic
- Use composables for reusable logic
- Separate types/interfaces

### Dependencies

จัดการ dependencies อย่างเหมาะสม

- Use import alias only
- No circular dependencies
- One-way dependency flow
- Shared code in shared folders
- Every folder has barrel export

### Functions & Type Safety

ปรับปรุง functions และ type safety

- Single responsibility
- Reduce nested logic
- Clear naming
- Max 20-30 lines
- Extract complex logic
- รัน `/no-hard-code` เพื่อลบ hard code
- Reusable
- Testable
- DX first
- No any without reason
- Avoid unknown
- Use type inference
- Domain-specific types
- Strict TypeScript config

### Errors

จัดการ errors อย่าง systematic

- Never swallow errors
- Typed error classes
- Separate error types
- Log with context
- Propagate errors
- Meaningful messages

### Testability & Reusability

ปรับปรุง testability และ reusability

- Dependency injection
- Pure functions
- Side effects isolation
- Predictable outputs
- Small functions
- Composition
- Generic types
- Decoupling
- Single export

### DX & Documentation

ปรับปรุง developer experience และ documentation

- Auto-completion
- Sensible defaults
- Input validation
- Discoverability
- Examples
- JSDoc for public functions
- Purpose/parameters/return
- @throws
- @example
- No comments for self-documenting code

## Expected Outcome

- Clear separation of concerns
- No circular dependencies
- Standardized import paths
- Functions with single responsibility
- High type safety
- Systematic error handling
- Complete documentation
- No hard code
- Reusable functions
- Good DX
- Easy to test