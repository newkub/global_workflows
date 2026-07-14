---
title: Review Side Effect
description: Review side effects ครอบคลุม impure functions, global state, mutations, lifecycle effects, cleanup
auto_execution_mode: 3
related:
  - /scan-codebase
  - /deep-analyze-with-use-scripts
  - /update-rules
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
  - /review-bug-prone
  - /review-concurrency
  - /review-hooks
  - /review-state-management
  - /follow-functional-core-imperative-shell
  - /follow-effect-ts
  - /refactor-modules
---

## Goal

Review side effect quality ครอบคลุม impure functions, global state, mutations, lifecycle effects, cleanup, และ testability ของ code

## Scope

side effects ใน functions, components, modules, hooks/composables, state management, top-level code, import side effects, event listeners, timers, network, DOM, I/O, database, mutation, global/shared state, cleanup, dependency injection, และ functional core / imperative shell separation

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจโครงสร้าง code และ patterns
2. ระบุ tech stack, framework, libraries (React, Solid, Vue, Effect, Node, Bun, etc.)
3. ถ้าไม่สามารถ scan ได้ → stop และ report

### 2. Deep Analyze

1. ทำ `/deep-analyze-with-use-scripts` เพื่อสร้าง `analyze-side-effects.ts` ใน `.devin/scripts/analyze/`
2. Script ระบุ functions/files ที่มี side effects จาก patterns:
   - network/API calls, database queries, file I/O, DOM access
   - `console.*`, `alert`, `setTimeout`/`setInterval`, `addEventListener`
   - `localStorage`/`sessionStorage`, `Date.now()`, `Math.random()`, `process.env`
   - `globalThis`/`window`/`document`, global variable assignment, object mutation
   - `eval`, `new Function`, `import` with side effects
   - `onMount`/`onCleanup`/`useEffect`/`createEffect`/`createMemo`
3. Script ตรวจสอบ pure functions ที่มี side effects ผสม
4. Script ตรวจสอบ top-level side effects, singleton mutation, module-level state
5. Script ตรวจสอบ cleanup of subscriptions, timers, event listeners, effects
6. Script ตรวจสอบ global/shared state mutation, race conditions, implicit dependencies
7. Script ตรวจสอบ testability: pure functions vs impure functions, mockability
8. Script คำนวณ side effect health score และ output เป็น structured JSON
9. ทำ `/update-rules` เพื่ออัปเดต `rules/` สำหรับ side effect patterns ที่พบ

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับ validate ตาม severity: Critical → High → Medium → Low
3. ระบุ false positives

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings: Side Effect Type, Severity, Location, Issue, Impact, Recommendation
3. สรุป pure/impure ratio, top issues
4. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: hidden side effect in critical path, uncontrolled global mutation, resource leak, side effect in pure function ที่ก่อให้เกิด data loss
- **High**: side effect mixed with pure logic, missing cleanup, global state mutation, untestable impure function
- **Medium**: inconsistent side effect isolation, implicit side effect, missing dependency injection
- **Low**: minor separation, naming, documentation

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number
- ระบุ type ของ side effect
- ระบุว่า function มี intent เป็น pure หรือ impure

### 3. Scope Boundaries

- ไม่ซ้ำกับ `/review-concurrency` สำหรับ race condition
- ไม่ซ้ำกับ `/review-hooks` สำหรับ composable lifecycle
- ไม่ซ้ำกับ `/review-state-management` สำหรับ state architecture
- ไม่ซ้ำกับ `/review-bug-prone` สำหรับ general bug-prone patterns (focus ที่ side effect isolation)
- ถ้าพบ issues ในหมวดเหล่านั้น ให้ส่งต่อไปยัง review workflow นั้น

### 4. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

### 5. Integration

- ถ้าต้องการแยก pure/impure ให้ใช้ `/follow-functional-core-imperative-shell`
- ถ้าต้องการใช้ Effect-TS ให้ใช้ `/follow-effect-ts`
- ถ้าต้องการ refactor ให้ใช้ `/refactor-modules`

## Expected Outcome

- รายงานตาราง findings พร้อม severity, location, side effect type
- รายงาน pure/impure ratio
- รายงาน recommended actions
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
