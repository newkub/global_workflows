---
title: Review State Management
description: Review state management ครอบคลุม store organization, reactivity, และ data flow
auto_execution_mode: 3
related:
  - /deep-analyze-codebase
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review state management quality ครอบคลุม store organization, reactivity patterns, state flow และ unnecessary re-renders

## Scope

store organization, state shape, reactivity patterns, data flow, derived state, side effect management, และ state architecture patterns

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ state management structure
2. ระบุ state management library และ patterns ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-state-management.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ store organization, state shape, และ store boundaries
3. Script ตรวจสอบ reactivity patterns, unnecessary re-renders, และ derived state
4. Script ตรวจสอบ side effect management, state synchronization, และ persistence
5. Script คำนวณ state management health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: state corruption, race condition, data loss from state mutation
- **High**: unnecessary re-render on hot path, missing store boundary, broken reactivity
- **Medium**: inconsistent state pattern, missing derived state, minor side effect issue
- **Low**: cosmetic improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
