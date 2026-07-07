---
title: Analyze Runtime
description: วิเคราะห์ runtime patterns 8 หมวด error, async, concurrency, resource, logging, performance, security
auto_execution_mode: 3
related_workflows:
  - /improve-error-handling
  - /improve-concurrency
  - /improve-logging
  - /improve-performance
  - /improve-reliability
  - /improve-network
  - /improve-security
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ runtime behavior patterns และ failure modes ที่ส่งผลต่อการทำงานจริง

## Scope

Error handling, async patterns, boundary validation, concurrency, resource management, logging quality, performance patterns, และ security patterns

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม runtime metrics ผ่าน scripts (error pattern scan, async analysis, resource leak detection)

### 2. Analyze Error Handling

1. ระบุ empty catch blocks ที่ swallow errors
2. ระบุ error ที่ไม่ propagate อย่างเหมาะสม
3. ระบุ inconsistent error types และ error response formats
4. ระบุ missing error boundaries ใน component tree
5. ระบุ error logging ที่ไม่เพียงพอหรือขาด context
6. ระบุ error recovery patterns ที่ขาด (retry, fallback, circuit breaker)
7. ระบุ error messages ที่ไม่ user-friendly หรือไม่ actionable

### 3. Analyze Async Patterns

1. ระบุ unhandled Promise rejections
2. ระบุ missing `await` ที่ทำให้เกิด floating promises
3. ระบุ race conditions ใน async operations
4. ระบุ sequential awaits ที่ควรเป็น `Promise.all`
5. ระบุ async functions ที่ไม่ handle cancellation
6. ระบุ `async/await` ใน loops ที่ควรเป็น batch operations
7. ระบุ missing timeout ใน async operations

### 4. Analyze Boundary Validation

1. ระบุ public functions ที่ไม่ validate input
2. ระบุ trust boundary violations (internal → external โดยไม่ validate)
3. ระบุ missing schema validation ที่ API, database, และ external service boundaries
4. ระบุ coercion ที่ไม่ปลอดภัย (Number(), parseInt โดยไม่ check NaN)

### 5. Analyze Concurrency And Race Conditions

1. ระบุ shared mutable state ที่ไม่มี synchronization
2. ระบุ race conditions ใน state mutations
3. ระบุ deadlock potential (lock ordering, nested locks)
4. ระบุ missing atomic operations ที่ควรเป็น atomic
5. ระบุ async state mutations ที่ไม่ handle concurrency

### 6. Analyze Resource Management

1. ระบุ file handles/streams ที่ไม่ properly closed
2. ระบุ database connections ที่ไม่ return to pool
3. ระบุ event listeners ที่ไม่ remove หลัง use
4. ระบุ timers/intervals ที่ไม่ clear
5. ระบุ missing cleanup ใน component unmount/destroy
6. ระบุ connection pool ที่ไม่มี max size หรือ timeout
7. ระบุ memory-heavy operations ที่ไม่ stream หรือ chunk

### 7. Analyze Logging Quality

1. ระบุ log levels ที่ไม่เหมาะสม (info สำหรับ errors, error สำหรับ debug)
2. ระบุ missing structured logging (plain string แทน JSON)
3. ระบุ PII/sensitive data ใน logs
4. ระบุ log noise (verbose logging ใน production paths)
5. ระบุ missing correlation IDs สำหรับ request tracing
6. ระบุ missing context ใน error logs (stack trace, user ID, request ID)
7. ระบุ `console.log`/`console.error` ที่ควรเป็น proper logger

### 8. Analyze Performance Patterns

1. ระบุ unnecessary re-renders ใน components
2. ระบุ memory leaks (missing cleanup, event listeners, timers)
3. ระบุ N+1 query patterns
4. ระบุ missing memoization ที่ควรมี
5. ระบุ large bundle contributions (heavy imports, tree-shaking issues)
6. ระบุ synchronous blocking operations ที่ควรเป็น async
7. ระบุ missing pagination/infinite scroll สำหรับ large lists

### 9. Analyze Security Patterns

1. ระบุ XSS vulnerabilities (`dangerouslySetInnerHTML`, unescaped output)
2. ระบุ CSRF vulnerabilities
3. ระบุ injection patterns (SQL, command, template)
4. ระบุ insecure direct object references (IDOR)
5. ระบุ missing authorization checks ใน routes/handlers
6. ระบุ sensitive data exposure (logs, errors, responses)
7. ระบุ insecure crypto/hash usage

### 10. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม critical path: security → boundary validation → concurrency → error handling → async → resource → performance → logging

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม location และ severity

### 2. Error Handling Indicators

- Empty catch blocks, Error ที่ไม่ propagate
- Inconsistent error types, Missing error boundaries
- Missing recovery patterns, Non-user-friendly messages

### 3. Async Pattern Indicators

- Unhandled rejections, Floating promises
- Race conditions, Sequential awaits ที่ควรเป็น `Promise.all`
- `async/await` ใน loops, Missing timeout

### 4. Concurrency Indicators

- Shared mutable state ไม่มี synchronization
- Race conditions, Deadlock potential
- Missing atomic operations

### 5. Resource Management Indicators

- Unclosed handles/streams/connections
- Unremoved listeners, Uncleared timers
- Missing cleanup ใน unmount/destroy

### 6. Security Pattern Indicators

- XSS, CSRF, Injection patterns
- IDOR, Missing authorization checks
- Sensitive data exposure ใน logs, errors, responses

## Expected Outcome

- Runtime issues ระบุพร้อม recovery recommendations
- Race conditions และ deadlock potential ระบุชัดเจน
- พร้อมสำหรับ `/improve-error-handling` หรือ `/improve-performance`
