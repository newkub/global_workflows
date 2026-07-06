---
title: Improve State Management
description: ปรับปรุง state patterns, store organization, และ data flow
auto_execution_mode: 3
related_workflows:
  - follow-code-quality
  - improve-type-safety
  - improve-redundancy
  - improve-debugging
---

## Goal

ปรับปรุง state management architecture ทั้ง state patterns, store organization, และ data flow ให้ predictable และ maintainable

## Scope

ใช้สำหรับ project ที่มี state management (TanStack Store, Pinia, Zustand, Redux, etc.) และต้องการปรับปรุง data flow

## Execute

### 1. State Patterns

ปรับปรุง state patterns และ conventions

1. วิเคราะห์ state categories (server state, client state, URL state, form state)
2. ตรวจสอบ separation ระหว่าง server cache และ UI state
3. ใช้ server state management (TanStack Query) สำหรับ async data
4. ใช้ client state management สำหรับ UI-only state
5. ตรวจสอบ state normalization และ avoid nesting
6. ทำ `/improve-type-safety` สำหรับ state types

### 2. Store Organization

ปรับปรุง store structure

1. วิเคราะห์ store organization ตาม domain หรือ feature
2. ตรวจสอบ single source of truth สำหรับแต่ละ data type
3. ตั้งค่า store selectors สำหรับ derived state
4. ตรวจสอบ store actions มี single responsibility
5. ทำ `/improve-redundancy` สำหรับ eliminate duplicate state
6. Document store architecture

### 3. Data Flow

ปรับปรุง data flow และ reactivity

1. วิเคราะห์ data flow direction (unidirectional vs bidirectional)
2. ตรวจสอบ reactivity performance และ unnecessary re-renders
3. ตั้งค่า memoization สำหรับ expensive computations
4. ตรวจสอบ side effects isolation
5. ทำ `/improve-debugging` สำหรับ state debugging tools
6. ทำ `/follow-code-quality` สำหรับ code organization

## Rules

### 1. State Separation

- แยก server state จาก client state ชัดเจน
- ไม่ duplicate server data ใน client store
- ใช้ URL state สำหรับ shareable และ bookmarkable state
- Form state แยกจาก global state

### 2. Predictability

- State changes ผ่าน actions เท่านั้น
- ไม่ mutate state โดยตรง
- ทุก state changes สามารถ trace ได้
- ใช้ immutability หรือ fine-grained reactivity

### 3. Performance

- หลีกเลี่ยง unnecessary re-renders
- ใช้ selectors สำหรับ derived state
- Memoize expensive computations
- ตรวจสอบ reactivity dependencies

## Expected Outcome

- State management architecture ชัดเจน แยก server/client state
- Store organization ตาม domain พร้อม single source of truth
- Data flow predictable และ traceable
- Reactivity performance ดี ไม่มี unnecessary re-renders
- State types ครบถ้วน พร้อม type safety
