---
title: Improve Foundation
description: ปรับปรุง type safety, code quality, state management และ concurrency
auto_execution_mode: 3
related_workflows:
  - /improve-architecture
  - /improve-type-safety
  - /improve-code-quality
  - /improve-comment
  - /improve-correctness
  - /improve-completeness
  - /improve-debugging
  - /improve-state-management
  - /improve-concurrency
---

## Goal

ปรับปรุง type safety, code quality, state management และ concurrency ของ codebase

## Scope

ใช้สำหรับการปรับปรุงคุณภาพโค้ดของ codebase ทั้ง type safety, code quality, debugging และ state management

## Execute

### 1. Type Safety And Code Quality

1. ทำ `/improve-type-safety` เพื่อปรับปรุง type safety
2. ทำ `/improve-code-quality` เพื่อปรับปรุงคุณภาพโค้ด
3. ทำ `/improve-comment` เพื่อปรับปรุงคุณภาพ comments
4. ทำ `/improve-correctness` เพื่อปรับปรุงความถูกต้อง
5. ทำ `/improve-completeness` เพื่อปรับปรุงความครบถ้วน

### 2. Debugging

1. ทำ `/improve-debugging` เพื่อปรับปรุง debugging experience

### 3. State And Concurrency

1. ทำ `/improve-state-management` เพื่อปรับปรุง state management
2. ถ้า project มี concurrent operations ทำ `/improve-concurrency`

## Rules

### 1. Execution Order

- ทำทีละ section และตรวจสอบ
- ถ้าพบ issues ทำ `/resolve-errors` ก่อนดำเนินต่อ
- ทำ `/update-reference` หลังแต่ละ section
- รัน tests หลังแต่ละ improvement และตรวจสอบ coverage ไม่ลดลง

## Expected Outcome

- Type safety และ code quality ดีขึ้น
- Comments และ correctness ถูกปรับปรุง
- Debugging experience ดีขึ้น
- State management และ concurrency ถูกปรับปรุง
