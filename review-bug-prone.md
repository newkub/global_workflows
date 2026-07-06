---
title: Review Bug Prone
description: Review code ที่มีแนวโน้มก่อให้เกิด bug ก่อนเกิดปัญหา
auto_execution_mode: 3
related_workflows:
  - /deep-review
  - /debug-issue
  - /scan-codebase
  - /analyze-project
  - /code-search
  - /use-ast-grep
  - /use-scripts
  - /improve-concurrency
  - /improve-error-handling
  - /comment-todo
  - /review-issue-and-fix
  - /report-format-table
  - /suggest-next-action
  - /follow-code-quality
---

## Goal

Review code เพื่อหาจุดที่มีแนวโน้มก่อให้เกิด bug ก่อนที่ปัญหาจะเกิดขึ้น

## Scope

ใช้สำหรับ review code ที่ดูเหมือนทำงานได้แต่อาจมี subtle bugs ซ่อนอยู่ ครอบคลุม: logic errors, null/undefined access, async pitfalls, state mutation, numeric/date pitfalls, edge cases, resource leaks, และ type-runtime mismatches

## Execute

### 1. Identify Bug Categories

ระบุ bug categories ที่เกี่ยวข้องกับ project

1. ทำ `/analyze-project` เพื่อเข้าใจ tech stack และ architecture
2. ทำ `/scan-codebase` เพื่อ scan structure และ patterns ของ codebase
3. ถ้าเป็น monorepo ให้ทำ `/follow-monorepo` เพื่อตรวจสอบ workspace structure
4. ระบุ bug categories ตามภาษาและ framework:
   - ถ้ามี async/await: race conditions, floating promises, unhandled rejections
   - ถ้ามี database: transaction isolation, N+1 queries, connection leaks
   - ถ้ามี frontend: state mutation, stale closures, effect cleanup
   - ถ้ามี API: input validation, error propagation, timeout handling
   - ถ้ามี concurrency: shared state, deadlocks, atomic operations
   - ถ้ามี payment/booking: numeric precision, decimal rounding, date/time arithmetic
5. สร้าง checklist สำหรับแต่ละ category
6. ถ้า scan patterns มากกว่า 10 ไฟล์ ให้ทำ `/use-scripts` สำหรับ batch scanning

### 2. Scan For Logic Errors

1. ทำ `/code-search` และ `ast-grep` หา patterns:
   - Off-by-one: การใช้ `<` แทน `<=` หรือ `>` แทน `>=` ใน loops และ comparisons
   - Inverted conditions: `if (!x)` ที่ควรเป็น `if (x)` หรือกลับกัน
   - Short-circuit bugs: `a && b || c` ที่ไม่ตรงตาม intent
   - Falsy value traps: `if (!value)` เมื่อ `value` เป็น `0`, `""`, หรือ `false` ที่ valid
2. ตรวจสอบ conditional logic ใน business rules
3. ตรวจสอบ switch/case ที่ missing default หรือ missing break

### 3. Scan For Null And Undefined Access

1. ทำ `/code-search` หา:
   - Property access บน optional values โดยไม่มี null check
   - Array access โดยไม่ตรวจสอบ length
   - Object destructuring ที่อาจได้ undefined
   - Function parameters ที่ไม่มี default และอาจเป็น undefined
2. ตรวจสอบ optional chaining (`?.`) และ nullish coalescing (`??`) ว่าใช้ครบ
3. ตรวจสอบ type assertions (`as`) ที่อาจซ่อน null/undefined
4. ตรวจสอบ API responses ที่อาจเป็น null/undefined

### 4. Scan For Async Pitfalls

1. ทำ `/code-search` หา:
   - Floating promises: `promise.then()` โดยไม่ await หรือไม่ handle
   - Missing await: เรียก async function โดยไม่ await
   - Unhandled rejections: `try/catch` ที่ไม่ catch rejection
   - Race conditions: หลาย async operations แก้ไข state เดียวกัน
2. ตรวจสอบ `Promise.all` vs `Promise.allSettled` ว่าใช้ถูก context
3. ตรวจสอบ cancellation และ abort signals
4. ตรวจสอบ async operations ใน loops (`for...of` with await vs `Promise.all`)

### 5. Scan For State Mutation Issues

1. ทำ `/code-search` หา:
   - Direct mutation ของ shared state โดยไม่ผ่าน interface
   - Mutation ของ function parameters
   - Mutation ของ objects/arrays ที่ pass by reference
   - Missing immutable patterns ใน reactive state
2. ตรวจสอบ side effects ใน functions ที่ควรเป็น pure
3. ตรวจสอบ event handler cleanup ใน components
4. ตรวจสอบ stale closures ใน callbacks และ effects

### 6. Scan For Numeric And Date Pitfalls

1. ทำ `/code-search` หา numeric pitfalls:
   - Floating point comparison: `===` กับ `0.1 + 0.2`
   - Decimal rounding: `Math.round()` กับ financial calculations
   - Integer overflow: คูณเลขใหญ่ที่เกิน `Number.MAX_SAFE_INTEGER`
   - NaN propagation: `parseInt()` ที่อาจคืน `NaN`
2. ทำ `/code-search` หา date/time pitfalls:
   - Timezone conversion ที่ไม่ consistent
   - Date arithmetic ที่ไม่ account for DST
   - Leap year และ month boundary (Feb 29, 31 vs 30 days)
   - `new Date()` กับ string parsing ที่ browser-dependent
3. ตรวจสอบว่า financial calculations ใช้ integer cents ไม่ใช่ floating point
4. ตรวจสอบ date comparisons ว่าใช้ UTC หรือ local time consistent

### 7. Scan For Edge Cases

1. ตรวจสอบ boundary conditions:
   - Empty arrays, strings, และ collections
   - Zero, negative, และ extreme numeric values
   - Unicode และ special characters ใน strings
2. ตรวจสอบ input validation gaps:
   - Missing validation สำหรับ external input
   - Type coercion pitfalls (`"0" == false`, `[] == false`)
   - Prototype pollution vulnerabilities
3. ตรวจสอบ error paths ว่ามี fallback ครบ
4. ตรวจสอบ concurrent access scenarios

### 8. Scan For Resource Leaks

1. ทำ `/code-search` หา:
   - Unclosed connections (database, HTTP, WebSocket)
   - Unclosed files และ streams
   - Missing cleanup ใน `finally` blocks
   - Missing `dispose()` หรือ `close()` calls
2. ตรวจสอบ event listener removal
3. ตรวจสอบ timer/interval cleanup
4. ตรวจสอบ memory leaks จาก circular references

### 9. Scan For Type-Runtime Mismatches

1. ทำ `/code-search` หา:
   - `as` type assertions ที่ไม่มี runtime validation
   - `any` types ที่ซ่อน type information
   - `@ts-ignore` หรือ `@ts-expect-error` ที่ซ่อน potential bugs
   - Type narrowing ที่ไม่ครบ (missing `else` branch)
2. ตรวจสอบ API boundary types ว่ามี runtime validation (Zod schemas)
3. ตรวจสอบ `enum` values ที่อาจไม่ตรงกับ runtime values
4. ตรวจสอบ `Record<K, V>` access ที่อาจได้ undefined

### 10. Report Findings

1. ทำ `/report-format-table` สร้างตาราง findings
2. กำหนด columns: Category, Location, Pattern, Risk Level, Recommendation
3. จัดลำดับ risk: Critical → High → Medium → Low
4. ระบุ evidence: file path, line number, code snippet
5. แนะนำแนวทางแก้ไขที่ minimal และ targeted
6. ทำ `/suggest-next-action` เสนอ action ถัดไป

## Rules

### 1. Risk Classification

- **Critical**: จะเกิด bug เมื่อใช้งานจริง (null access, race condition, data loss)
- **High**: มีโอกาสเกิด bug สูงใน edge cases (off-by-one, missing validation)
- **Medium**: อาจเกิด bug ใน specific scenarios (async pitfalls, state mutation)
- **Low**: มีโอกาสเกิด bug ต่ำแต่ควรรู้ (type mismatch, resource leak ช้า)

### 2. Evidence-Based

- ทุก finding ต้องมี file path, line number, และ code snippet
- อธิบายทำไม pattern นั้นอาจก่อให้เกิด bug
- ระบุ scenario ที่ bug จะ manifest
- ไม่เดา ใช้ tools สำหรับ verification

### 3. Review Only

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review
- ใช้ `/comment-todo` สำหรับระบุ issues ใน code
- ถ้าต้องแก้ไข ให้ทำ `/review-issue-and-fix` หลัง review

### 4. Execution Strategy

- รัน independent scans แบบ parallel ด้วย `/code-search` และ `ast-grep`
- ใช้ `/use-scripts` เมื่อ scan patterns มากกว่า 10 ไฟล์ ด้วย `Bun.Glob` และ `ast-grep`
- รัน script ใน dry run mode ก่อน และลบ script หลังใช้งาน

## Expected Outcome

- ระบุ bug-prone patterns ทั้งหมดใน codebase
- แต่ละ finding มี risk level, evidence, และ recommendation
- จัดลำดับตาม risk เพื่อ action ที่สำคัญก่อน
- ไม่มี code changes ระหว่าง review
- สามารถนำ findings ไปทำ `/review-issue-and-fix` ได้โดยตรง
