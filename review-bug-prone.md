---
title: Review Bug Prone
description: Review bug-prone code patterns พร้อม health score และ actionable findings
auto_execution_mode: 3
related:
  - /scan-codebase
  - /deep-analyze-codebase
  - /update-rules
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
  - /review-concurrency
  - /review-error-handling
  - /review-types
  - /review-hardcode
---

## Goal

Review รูปแบบโค้ดที่มีแนวโน้มก่อให้เกิด bugs ใน codebase ครอบคลุม null safety, control flow, arithmetic, mutable state, async/promise, parse/regex, และ resource cleanup พร้อมสร้างรายงานตารางและ health score

## Scope

bug-prone patterns ที่ยังไม่ถูกครอบคลุมโดย review workflows เฉพาะทาง:

- การเข้าถึงค่าที่อาจเป็น `null`/`undefined` โดยไม่มี fallback
- type assertions, `as`, `any`, unsafe narrowing
- non-exhaustive `switch`/`if-else` หรือ discriminated unions ที่ขาด case
- off-by-one, indexing, date/time arithmetic, floating-point, และ monetary calculation
- mutable shared state, side effects, global state
- floating promises, `await` ในเงื่อนไขที่ไม่เหมาะสม
- `JSON.parse`/`eval`/regex ที่ไม่ผ่าน validation
- ไม่ cleanup resources: event listeners, subscriptions, timers, intervals
- implicit assumptions, unsafe defaults
- ไม่ซ้ำกับ `/review-concurrency`, `/review-error-handling`, `/review-types`, `/review-hardcode` — ถ้าพบ issues ในหมวดนั้น ให้ส่งต่อไปยัง review workflow นั้น

## Execute

### 1. Prepare

สแกน codebase เพื่อเข้าใจโครงสร้างและระบุ bug-prone hotspots

1. ทำ `/scan-codebase` เพื่อเข้าใจ project structure, tech stack และ source code ที่มีความเสี่ยง
2. ระบุภาษา, framework, และ patterns ที่เป็น bug-prone สำหรับ project นี้
3. ถ้าสแกนไม่ได้ → stop และ report

### 2. Deep Analyze

วิเคราะห์ bug-prone patterns อย่างลึกซึ้งด้วย scripts

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-bug-prone.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ `null`/`undefined` safety: unsafe access, optional chaining ไม่มี fallback, non-null assertions
3. Script ตรวจสอบ type assertions, `as`, `any`, และ unsafe narrowing
4. Script ตรวจสอบ exhaustive handling: `switch`/`if-else` ที่ไม่ครอบคลุมทุก case, missing default branch
5. Script ตรวจสอบ arithmetic bugs: off-by-one, array indexing, date/time calculation, floating-point, monetary calculation
6. Script ตรวจสอบ mutable shared state, global state, และ side effects ใน pure functions
7. Script ตรวจสอบ async/promise bugs: floating promises, missing `await`, `Promise` ใน boolean expression
8. Script ตรวจสอบ unsafe parse/regex: `JSON.parse` ไม่มี `try-catch`, unsafe `eval`, regex ที่ไม่ validated
9. Script ตรวจสอบ resource cleanup: event listeners, subscriptions, timers, intervals ที่ไม่ถูก cleanup
10. Script ตรวจสอบ implicit assumptions และ unsafe defaults
11. Script คำนวณ bug-prone health score และ output เป็น structured JSON
12. ทำ `/update-rules` เพื่ออัปเดต `rules/` สำหรับ bug-prone patterns ที่พบ

### 3. Validate Findings

ตรวจสอบความถูกต้องของ findings ก่อน report

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity: Critical → High → Medium → Low
3. ระบุ false positives ที่พบ
4. ถ้า validation ไม่ผ่าน → กลับไปแก้ที่ Step 2

### 4. Report

สร้างรายงานผลการ review ในแชท

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง **Bug-Prone Metrics Summary**: 8 metrics พร้อม count, threshold, status
3. สร้างตาราง **Findings by Category**: Category, Finding, Severity, Location, Recommendation
4. สร้างตาราง **Recommended Actions**: Priority, Action, Impact, Effort, Workflow
5. แสดง bug-prone health score พร้อม progress bar และ grade
6. ทำ `/suggest-next-action` เพื่อแนะนำ action ถัดไป

## Rules

### 1. Severity Classification

- **Critical**: การเข้าถึง `null`/`undefined` ใน critical path, type assertion ที่ bypass type safety, floating promise ที่ lead to unhandled rejection, `JSON.parse`/`eval` ที่ไม่ผ่าน validation ใน critical path
- **High**: ขาด exhaustive handling, off-by-one ใน loop, unsafe default ใน critical path, missing resource cleanup ที่ก่อน leak
- **Medium**: optional chaining ไม่มี fallback, regex ที่อันตราย, unsafe narrowing, implicit assumption ใน non-critical path
- **Low**: missing fallback, minor assumption, documentation gap

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number
- ไม่เดา ใช้ tools สำหรับ verification (`ast-grep`, `grep`, script analysis)
- ระบุ bug pattern ที่พบ และ recommended fix ที่ชัดเจน
- ระบุ false positives ที่พบ

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review
- แยก review process จาก fix process
- ถ้าต้องแก้ไข ให้ทำ `/fix` หลัง review

### 4. Health Score Formula

- 8 metrics หลัก:
  1. Null/Undefined Safety
  2. Type Assertions & Casting
  3. Exhaustive Control Flow
  4. Numeric/Date/Arithmetic Operations
  5. Mutable State & Side Effects
  6. Async Promise Handling
  7. Parse/Serialize/Regex Safety
  8. Resource Cleanup & Assumptions
- คะแนนต่อ metric: ✅ = 1, ⚠️ = 0.5, ❌ = 0
- Health score = (total score / 8) × 100%
- Grade: A (90+), B (80+), C (70+), D (60+), F (<60)

### 5. Scope Boundaries

- ไม่ซ้ำกับ `/review-concurrency` สำหรับ race condition, deadlock, parallel execution
- ไม่ซ้ำกับ `/review-error-handling` สำหรับ error boundaries, error messages, graceful degradation
- ไม่ซ้ำกับ `/review-types` สำหรับ generic design, type inference, branded types
- ไม่ซ้ำกับ `/review-hardcode` สำหรับ magic numbers, hardcoded strings, URLs, secrets
- ถ้าพบ issues ในหมวดเหล่านั้น ให้ส่งต่อไปยัง review workflow นั้น

## Expected Outcome

- รายงานตาราง **Bug-Prone Metrics Summary** พร้อม status indicators
- รายงาน **Findings by Category** พร้อม severity และ location
- รายงาน **Recommended Actions** พร้อม priority และ workflow
- Bug-prone health score พร้อม grade และ progress bar
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
