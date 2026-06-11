---
title: Improve Async Operations
description: ปรับปรุง async operations และ concurrency
auto_execution_mode: 3
related_workflows:
  - /improve-error-handling
  - /improve-performance
  - /improve-side-effect
---

## Goal

ปรับปรุง async operations ให้มีประสิทธิภาพและจัดการ errors ได้ดี

## Scope

ใช้สำหรับปรับปรุง async/await, promises, concurrency, และ parallelism

## Execute

### 1. Analyze Async Patterns

วิเคราะห์ async patterns ปัจจุบัน

1. ระบุ async functions ทั้งหมด
2. วิเคราะห์ promise chains
3. ตรวจสอบ error handling ใน async operations
4. วิเคราะห์ concurrency patterns
5. ตรวจสอบ race conditions
6. ระบุ blocking operations

### 2. Improve Error Handling

ปรับปรุม error handling ใน async operations

1. ใช้ try/catch สำหรับ async/await
2. ใช้ .catch() สำหรับ promises
3. ใช้ Promise.allSettled() สำหรับ multiple promises
4. ใช้ error boundaries สำหรับ async errors
5. ใช้ timeout สำหรับ async operations
6. ใช้ retry logic สำหรับ transient errors

### 3. Optimize Concurrency

ปรับปรุม concurrency

1. ใช้ Promise.all() สำหรับ parallel operations
2. ใช้ Promise.allSettled() สำหรับ parallel ที่ต้อง handle errors
3. ใช้ Promise.race() สำหรับ timeout/competition
4. ใช้ Promise.any() สำหรับ first success
5. ใช้ concurrency limits สำหรับ rate limiting
6. ใช้ worker pools สำหรับ CPU-intensive tasks

### 4. Improve Async Control Flow

ปรับปรุม async control flow

1. ใช้ async/await แทน promise chains
2. ใช้ sequential async operations อย่างเหมาะสม
3. ใช้ parallel async operations อย่างเหมาะสม
4. ใช้ async iterators สำหรับ streaming
5. ใช้ async generators สำหรับ lazy evaluation
6. ใช้ async patterns ที่เหมาะสม

### 5. Add Timeouts

เพิ่ม timeouts สำหรับ async operations

1. ใช้ Promise.race() สำหรับ timeouts
2. ใช้ AbortController สำหรับ cancellable operations
3. ตั้งค่า timeouts สำหรับ API calls
4. ตั้งค่า timeouts สำหรับ database operations
5. ตั้งค่า timeouts สำหรับ external services
6. ตั้งค่า default timeouts

### 6. Implement Retry Logic

ตั้งค่า retry logic

1. ใช้ exponential backoff
2. ใช้ retry สำหรับ transient errors
3. ใช้ circuit breaker pattern
4. ใช้ retry limits
5. ใช้ retry with jitter
6. Monitor retry attempts

### 7. Optimize Resource Usage

ปรับปรุม resource usage

1. ใช้ connection pooling
2. ใช้ request batching
3. ใช้ request deduplication
4. ใช้ request cancellation
5. ใช้ resource cleanup
6. ใช้ proper disposal

### 8. Add Monitoring

เพิ่ม monitoring สำหรับ async operations

1. Monitor async operation duration
2. Monitor async operation errors
3. Monitor async operation retries
4. Monitor async operation concurrency
5. Monitor async operation queue depth
6. Add async operation metrics

## Rules

### 1. Error Handling

จัดการ errors ใน async operations อย่างถูกต้อง

- ใช้ try/catch สำหรับ async/await
- ใช้ .catch() สำหรับ promises
- ไม่ ignore promise rejections
- ใช้ error boundaries สำหรับ async errors
- Log async errors

### 2. Concurrency

ใช้ concurrency อย่างเหมาะสม

- ใช้ parallel operations เมื่อเป็นไปได้
- ใช้ concurrency limits
- ไม่ over-concurrent
- ใช้ worker pools สำหรับ CPU-intensive
- Monitor concurrency

### 3. Timeouts

ใช้ timeouts อย่างเหมาะสม

- ใช้ timeouts สำหรับ external calls
- ใช้ AbortController สำหรับ cancellation
- ตั้งค่า timeouts อย่างเหมาะสม
- ไม่ block indefinitely
- Handle timeout errors

### 4. Retry Logic

ใช้ retry logic อย่างเหมาะสม

- ใช้ retry สำหรับ transient errors เท่านั้น
- ใช้ exponential backoff
- ใช้ retry limits
- ใช้ circuit breaker
- Monitor retries

### 5. Resource Management

จัดการ resources อย่างถูกต้อง

- Cleanup resources เสมอ
- ใช้ connection pooling
- ใช้ proper disposal
- ไม่ leak resources
- Monitor resource usage

## Expected Outcome

- Async operations ที่ optimized
- Error handling ที่เสร็จ
- Concurrency ที่ optimized
- Timeouts ที่ตั้งค่าเสร็จ
- Retry logic ที่ตั้งค่าเสร็จ
- Resource usage ที่ optimized
- Monitoring ที่เสร็จ
