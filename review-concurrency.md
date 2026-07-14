---
title: Review Concurrency
description: Review concurrency ครอบคลุม async/await, race conditions, deadlocks, และ parallel execution
auto_execution_mode: 3
related:
  - /deep-analyze-codebase
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review concurrency quality ครอบคลุม async/await patterns, race condition prevention, deadlock avoidance และ parallel execution safety

## Scope

async/await patterns, race conditions, deadlocks, parallel execution, mutex/lock patterns, และ shared state management

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ concurrency structure
2. ระบุ concurrency patterns และ tools ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-concurrency.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ async/await patterns, promise handling, และ unhandled rejections
3. Script ตรวจสอบ race conditions, shared state access, และ atomic operations
4. Script ตรวจสอบ deadlock prevention, lock ordering, และ timeout strategies
5. Script ตรวจสอบ parallel execution safety, worker patterns, และ concurrent resource access
6. Script คำนวณ concurrency health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: race condition in critical path, deadlock risk, unhandled promise rejection
- **High**: missing await, shared state mutation, no timeout on lock
- **Medium**: suboptimal parallelism, inconsistent async pattern, minor race risk
- **Low**: minor concurrency improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
