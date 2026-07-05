---
title: Improve Reliability
description: ปรับปรุง error handling, observability และ testing
auto_execution_mode: 3
related_workflows:
  - /improve-error-handling
  - /improve-observability
  - /improve-backup-recovery
  - /improve-testing
  - /improve-test-coverage
  - /improve-features-coverage
---

## Goal

ปรับปรุง error handling, resilience, observability และ testing ของ codebase

## Scope

ใช้สำหรับการปรับปรุงความน่าเชื่อถือของ codebase ทั้ง error handling, monitoring และ test coverage

## Execute

### 1. Error Handling And Resilience

1. ทำ `/improve-error-handling` เพื่อปรับปรุง error handling ครบวงจร
2. ทำ `/improve-observability` เพื่อปรับปรุง logging และ tracing
3. ถ้า project ต้องการ backup ทำ `/improve-backup-recovery`

### 2. Testing And Coverage

1. ทำ `/improve-testing` เพื่อปรับปรุงการทดสอบ ครบวงจร
2. ทำ `/improve-test-coverage` เพื่อปรับปรุง test coverage
3. ทำ `/improve-features-coverage` เพื่อเติมเต็ม features ที่ยังไม่มี coverage

## Rules

### 1. Execution Order

- ทำทีละ section และตรวจสอบ
- ถ้าพบ issues ทำ `/resolve-errors` ก่อนดำเนินต่อ
- ทำ `/update-reference` หลังแต่ละ section
- รัน tests หลังแต่ละ improvement และตรวจสอบ coverage ไม่ลดลง

## Expected Outcome

- Error handling และ resilience ถูกปรับปรุง
- Observability, logging, tracing ถูกปรับปรุง
- Testing ครบถ้วนและ coverage ไม่ลดลง
