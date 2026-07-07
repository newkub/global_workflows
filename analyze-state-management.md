---
title: Analyze State Management
description: วิเคราะห์ state stores, data flow, reactivity patterns, store organization
auto_execution_mode: 3
related_workflows:
  - /analyze-foundation
  - /analyze-architecture
  - /improve-state-management
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ state management patterns และ data flow เพื่อระบุ reactivity issues และ store organization problems

## Scope

State stores, data flow, reactivity patterns, store organization, state persistence, derived state, side-effect management, global vs local state

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม state management metrics ผ่าน scripts (store detection, signal usage, context patterns)

### 2. Check Store Organization

1. ระบุ store structure (global, feature, local)
2. ระบุ stores ที่ใหญ่เกินไป (god stores)
3. ระบุ stores ที่มี responsibilities ซ้ำซ้อน
4. ระบุ missing store separation ตาม domain
5. ระบุ missing store type definitions

### 3. Check Data Flow

1. ระบุ data flow direction (unidirectional vs bidirectional)
2. ระบุ prop drilling ที่ลึกเกินไป
3. ระบุ missing context providers สำหรับ shared state
4. ระบุ unnecessary global state ที่ควรเป็น local
5. ระบุ missing state synchronization ระหว่าง stores

### 4. Check Reactivity Patterns

1. ระบุ missing fine-grained reactivity (over-subscription)
2. ระบุ unnecessary re-renders จาก state changes
3. ระบุ missing memoization สำหรับ derived state
4. ระบุ missing computed values
5. ระบุ signal usage ที่ไม่เหมาะสม (createSignal vs createStore)

### 5. Check State Persistence

1. ระบุ missing state persistence (localStorage, sessionStorage)
2. ระบุ missing state hydration สำหรับ SSR
3. ระบุ missing state serialization
4. ระบุ missing state versioning สำหรับ migration
5. ระบุ sensitive data ใน persisted state

### 6. Check Side-Effect Management

1. ระบุ missing cleanup ใน effects
2. ระบุ missing dependency tracking ใน effects
3. ระบุ side effects ใน computed values
4. ระบุ missing error handling ใน async state updates
5. ระบุ race conditions ใน async state updates

### 7. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: reactivity → store organization → data flow → side effects → persistence

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม location และ severity

### 2. Severity Classification

- **Critical**: race conditions ใน state, missing cleanup ที่ทำ memory leak
- **High**: god stores, over-subscription, missing SSR hydration
- **Medium**: prop drilling, missing memoization, unnecessary global state
- **Low**: missing state versioning, inconsistent store patterns

### 3. Framework Awareness

- ตรวจสอบ SolidJS signals และ stores
- ตรวจสอบ TanStack Solid Store patterns
- ตรวจสอบ TanStack Solid Query cache as state

### 4. Use Scripts For State Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ signal/store pattern detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- State management gaps ระบุพร้อม location และ severity
- Reactivity และ store organization issues จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-state-management`
