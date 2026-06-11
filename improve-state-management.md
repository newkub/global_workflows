---
title: Improve State Management
description: ปรับปรุม state management patterns
auto_execution_mode: 3
related_workflows:
  - /improve-data-structures
  - /improve-performance
  - /improve-side-effect
---

## Goal

ปรับปรุม state management ให้มีประสิทธิภาพและ maintainability สูง

## Scope

ใช้สำหรับปรับปรุม state management ทั้ง global, local, และ server state

## Execute

### 1. Analyze Current State Management

วิเคราะห์ state management ปัจจุบัน

1. ระบุ state management libraries ที่ใช้
2. วิเคราะห์ global state patterns
3. วิเคราะห์ local state patterns
4. วิเคราะห์ server state patterns
5. ระบุ state synchronization issues
6. ระบุ state mutation problems

### 2. Define State Architecture

กำหนด state architecture

1. กำหนด state domains (user, app, ui, server)
2. กำหนด state ownership rules
3. กำหนด state update patterns
4. กำหนด state persistence strategy
5. กำหนด state synchronization strategy
6. กำหนด state validation rules

### 3. Improve Global State

ปรับปรุม global state

1. ใช้ state management library (Pinia, Redux, Zustand)
2. กำหนด state structure อย่างเหมาะสม
3. ใช้ actions สำหรับ state mutations
4. ใช้ getters สำหรับ computed state
5. ใช้ modules สำหรับ state organization
6. ใช้ devtools สำหรับ debugging

### 4. Improve Local State

ปรับปรุม local state

1. ใช้ component state อย่างเหมาะสม
2. ใช้ composables/hooks สำหรับ reusable state
3. ใช้ reactive state อย่างเหมาะสม
4. ใช้ derived state อย่างเหมาะสม
5. ใช้ state lifting อย่างเหมาะสม
6. ใช้ state composition อย่างเหมาะสม

### 5. Improve Server State

ปรับปรุม server state

1. ใช้ React Query/SWR สำหรับ server state
2. ใช้ caching สำหรับ server responses
3. ใช้ optimistic updates
4. ใช้ automatic refetching
5. ใช้ loading/error states
6. ใช้ pagination สำหรับ large datasets

### 6. Implement State Persistence

ตั้งค่า state persistence

1. ใช้ localStorage สำหรับ user preferences
2. ใช้ sessionStorage สำหรับ temporary state
3. ใช้ IndexedDB สำหรับ large state
4. ใช้ URL state สำหรับ shareable state
5. ใช้ server-side persistence สำหรับ critical state
6. ใช้ state hydration สำหรับ SSR

### 7. Add State Validation

เพิ่ม state validation

1. Validate state mutations
2. Validate state shape
3. Validate state values
4. Add state invariants
5. Add state type checking
6. Add state runtime validation

### 8. Optimize State Performance

ปรับปรุม state performance

1. ใช้ memoization สำหรับ computed state
2. ใช้ selective reactivity
3. ใช้ debouncing/throttling สำหรับ updates
4. ใช้ batch updates
5. ใช้ lazy loading สำหรับ large state
6. Monitor state performance

## Rules

### 1. State Architecture

ออกแบบ state architecture อย่างเหมาะสม

- แยก state ตาม domain
- กำหนด state ownership ชัดเจน
- ใช้ single source of truth
- ใช้ immutable updates
- ใช้ predictable mutations

### 2. Global State

ใช้ global state อย่างเหมาะสม

- ใช้ global state สำหรับ shared data เท่านั้น
- ใช้ local state สำหรับ component-specific data
- ใช้ server state สำหรับ remote data
- ไม่ overuse global state
- ใช้ state normalization

### 3. State Updates

อัพเดท state อย่างถูกต้อง

- ใช้ immutable updates
- ใช้ actions สำหรับ mutations
- ใช้ predictable updates
- ไม่ mutate state directly
- ใช้ batch updates

### 4. State Performance

State ต้องมีประสิทธิภาพ

- ใช้ memoization
- ใช้ selective reactivity
- ไม่ re-render ไม่จำเป็น
- ใช้ lazy loading
- Monitor state performance

### 5. State Testing

Test state อย่างเหมาะสม

- Test state mutations
- Test state persistence
- Test state synchronization
- Test state validation
- Test state performance

## Expected Outcome

- State architecture ที่ clear
- Global state ที่ organized
- Local state ที่ optimized
- Server state ที่ managed
- State persistence ที่ implemented
- State validation ที่ added
- State performance ที่ optimized
