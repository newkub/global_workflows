---
title: Improve Concurrency
description: ปรับปรุง race conditions, deadlocks, async patterns, shared state
auto_execution_mode: 3
related_workflows:
  - improve-code-quality
  - improve-error-handling
  - improve-testing
  - improve-observability
  - improve-state-management
---

## Goal

ปรับปรุง concurrency safety ทั้ง race condition prevention, deadlock avoidance, async patterns, และ shared state management

## Scope

ใช้สำหรับ project ที่มี concurrent operations (async/await, workers, threads, shared state, real-time)

## Execute

### 1. Race Condition Analysis

วิเคราะห์ race conditions

1. ตรวจสอบ shared mutable state และ concurrent access
2. ตรวจสอบ check-then-act patterns ที่ไม่ atomic
3. ตรวจสอบ lazy initialization thread safety
4. ตรวจสอบ database transaction isolation levels
5. ทำ `/improve-testing` สำหรับ concurrency tests

### 2. Deadlock Prevention

ปรับปรุง deadlock avoidance

1. ตรวจสอบ lock ordering สำหรับ multiple locks
2. ตรวจสอบ lock timeout และ deadlock detection
3. ตรวจสอบ circular wait conditions
4. ตรวจสอบ resource holding patterns
5. ใช้ lock-free data structures ถ้าเหมาะสม

### 3. Async Patterns

ปรับปรุง async/await patterns

1. ตรวจสอบ unhandled promise rejections
2. ตรวจสอบ floating promises (ไม่ await)
3. ตรวจสอบ async error propagation
4. ตรวจสอบ cancellation และ abort signals
5. ทำ `/improve-error-handling` สำหรับ async errors

### 4. Shared State Management

ปรับปรุง shared state handling

1. ทำ `/improve-state-management` สำหรับ state architecture
2. ตรวจสอบ immutable patterns สำหรับ shared data
3. ตรวจสอบ atomic operations สำหรับ counters และ flags
4. ตรวจสอบ message passing vs shared memory
5. ตรวจสอบ worker thread communication

### 5. Concurrency Testing

ปรับปรุง concurrency test coverage

1. เขียน tests สำหรับ race conditions
2. ใช้ property-based testing สำหรับ invariants
3. ตรวจสอบ stress testing สำหรับ concurrent access
4. ตรวจสอบ timeout และ cancellation tests
5. ทำ `/improve-test-coverage` สำหรับ concurrent paths

### 6. Concurrency Observability

ปรับปรุง concurrency monitoring

1. ทำ `/improve-observability` สำหรับ tracing
2. ตรวจสอบ async stack traces มีข้อมูลเพียงพอ
3. ตรวจสอบ deadlock detection logging
4. ตรวจสอบ slow async operations tracking
5. ตรวจสอบ worker thread health monitoring

## Rules

### 1. Race Free

- Shared mutable state ต้องมี synchronization
- Check-then-act ต้องเป็น atomic operation
- Lazy initialization ต้อง thread-safe
- Database transactions ใช้ correct isolation level

### 2. Deadlock Safe

- Lock ordering ชัดเจน และ consistent
- Lock timeout ตั้งค่าไว้
- หลีกเลี่ยง holding locks ข้าม async boundaries
- ใช้ lock-free patterns ถ้าเป็นไปได้

### 3. Async Quality

- ไม่มี floating promises
- Unhandled rejections ต้องได้รับการจัดการ
- Cancellation propagation ครบถ้วน
- Error propagation ถูกต้องข้าม async boundaries

### 4. Test Concurrency

- Race condition tests ครอบคลุม critical paths
- Stress testing สำหรับ high concurrency
- Property-based testing สำหรับ invariants
- Timeout และ cancellation tested

## Expected Outcome

- Race conditions ไม่มีใน critical paths
- Deadlock prevention ครบถ้วน พร้อม timeout
- Async patterns ปลอดภัย ไม่มี floating promises
- Shared state มี synchronization ที่ถูกต้อง
- Concurrency tests ครอบคลุม race และ stress scenarios
- Concurrency observability ครอบคลุม stack traces และ monitoring
