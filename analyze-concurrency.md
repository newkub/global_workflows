---
title: Analyze Concurrency
description: วิเคราะห์ race conditions, async safety, deadlocks, shared state
auto_execution_mode: 3
related_workflows:
  - /analyze-runtime
  - /analyze-state-management
  - /improve-concurrency
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ concurrency patterns และ async safety เพื่อระบุ race conditions และ deadlocks

## Scope

Race conditions, async safety, deadlocks, shared state mutations, promise handling, event loop blocking, worker utilization, atomic operations

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม concurrency metrics ผ่าน scripts (async pattern detection, shared state scan, promise analysis)

### 2. Check Race Conditions

1. ระบุ shared mutable state ที่ accessed concurrently
2. ระบุ missing atomic operations
3. ระบุ TOCTOU (time-of-check-to-time-of-use) bugs
4. ระบุ missing mutex/lock mechanisms
5. ระบุ concurrent array/object mutations

### 3. Check Async Safety

1. ระบุ missing await ใน async functions
2. ระบุ floating promises (unhandled promise returns)
3. ระบุ missing error handling ใน async chains
4. ระบุ async functions ที่ block event loop
5. ระบุ missing Promise.all สำหรับ parallel operations
6. ระบุ sequential awaits ที่ควรเป็น parallel

### 4. Check Deadlocks

1. ระบุ circular dependencies ใน async operations
2. ระบุ missing timeout สำหรับ async operations
3. ระบุ missing cancellation mechanism
4. ระบุ resource holding patterns ที่อาจ deadlock

### 5. Check Promise Handling

1. ระบุ unhandled promise rejections
2. ระบุ missing Promise.allSettled สำหรับ partial failure
3. ระบุ missing Promise.race สำหรับ timeout handling
4. ระบุ promise chains ที่ยาวเกินไป
5. ระบุ missing retry logic สำหรับ failed promises

### 6. Check Worker Utilization

1. ระบุ CPU-intensive tasks บน main thread
2. ระบุ missing Web Workers สำหรับ heavy computation
3. ระบุ missing worker pool management
4. ระบุ missing worker error handling
5. ระบุ missing worker cleanup

### 7. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: race conditions → deadlocks → async safety → promise handling → worker utilization

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม location และ severity

### 2. Severity Classification

- **Critical**: race conditions ใน financial/data operations, deadlocks
- **High**: floating promises, missing await, event loop blocking
- **Medium**: sequential awaits ที่ควร parallel, missing timeout
- **Low**: missing worker utilization, long promise chains

### 3. Framework Awareness

- ตรวจสอบ SolidJS async patterns
- ตรวจสอบ TanStack Query concurrent fetching
- ระบุ server-side concurrency patterns

### 4. Use Scripts For Concurrency Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ async/await pattern detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- Concurrency issues ระบุพร้อม location และ severity
- Race conditions และ async safety issues จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-concurrency`
