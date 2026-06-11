---
title: Follow JavaScript
description: เขียน JavaScript ตาม modern best practices และ ES6+
auto_execution_mode: 3
---

## Goal

เขียน JavaScript ตาม modern best practices และ ES6+ features

## Scope

ใช้สำหรับเขียน JavaScript ทั้ง vanilla และ frameworks

## Execute

### 1. Use Modern Syntax

ใช้ modern JavaScript syntax

1. ใช้ `const` และ `let` แทน `var`
2. ใช้ arrow functions สำหรับ callbacks
3. ใช้ template literals สำหรับ string interpolation
4. ใช destructuring สำหรับ objects และ arrays
5. ใช spread operator และ rest parameters

### 2. Use Async Patterns

ใช้ async patterns ที่เหมาะสม

1. ใช้ `async/await` แทน callbacks
2. ใช้ Promises สำหรับ async operations
3. ใช้ `try/catch/finally` สำหรับ error handling
4. ใช้ `Promise.all()` และ `Promise.allSettled()` สำหรับ parallel operations

### 3. Write Clean Code

เขียน code ที่ clean และ maintainable

1. ใช้ function declarations หรือ arrow functions อย่างสม่ำเสมอ
2. ใช้ named functions สำหรับ debugging
3. ใช้ early returns แทน nested conditions
4. ใช้ pure functions เมื่อเป็นไปได้
5. ใช้ default parameters สำหรับ functions

### 4. Error Handling

จัดการ errors อย่างเหมาะสม

1. ใช้ `try/catch` สำหรับ error handling
2. ใช้ `throw` สำหรับ custom errors
3. ใช้ `Error` objects พร้อม stack traces
4. Log errors ด้วย context ที่เพียงพอ
5. ใช้ error boundaries ใน frameworks

## Rules

### 1. Modern Syntax

ใช้ modern JavaScript syntax

- ใช้ ES6+ features (const/let, arrow functions, template literals)
- ใช้ destructuring สำหรับ clean code
- ใช spread/rest operators สำหรับ data manipulation
- ใช shorthand properties และ methods
- ใช้ optional chaining (`?.`) และ nullish coalescing (`??`)

### 2. Async Patterns

ใช้ async patterns ที่เหมาะสม

- ใช้ `async/await` แทน callback hell
- ใช้ Promises สำหรับ async operations
- ใช้ `Promise.all()` สำหรับ parallel async
- ใช้ `try/catch` สำหรับ error handling
- หลีกเลี่ยง callback functions ใน modern code

### 3. Code Quality

เขียน code ที่มีคุณภาพ

- ใช้ meaningful variable และ function names
- ใช้ single responsibility principle
- ใช้ DRY (Don't Repeat Yourself)
- ใช้ SOLID principles เมื่อเป็นไปได้
- ใช้ JSDoc สำหรับ documentation

### 4. Performance

ปรับปรุง performance

- ใช้ event delegation สำหรับ dynamic elements
- ใช้ requestAnimationFrame สำหรับ animations
- ใช้ debouncing และ throttling สำหรับ events
- ใช้ lazy loading สำหรับ heavy operations
- หลีกเลี่ยง blocking operations ใน main thread

### 5. Security

ตั้งค่า security

- ใช้ `textContent` แทน `innerHTML` สำหรับ user input
- Sanitize user input ก่อนใช้
- ใช้ CSP (Content Security Policy)
- ใช้ HTTPS สำหรับ production
- ตรวจสอบ dependencies สำหรับ vulnerabilities

## Expected Outcome

- JavaScript ที่เขียนตาม modern best practices
- Code ที่ clean และ maintainable
- Async patterns ที่ถูกต้อง
- Error handling ที่ robust
- Performance ที่ดีขึ้น
- Security ที่ดีขึ้น
