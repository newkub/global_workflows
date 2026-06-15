---
title: Follow SolidJS
description: พัฒนา Solid.js applications ด้วย fine-grained reactivity และ performance optimization
auto_execution_mode: 3
---

## Goal

พัฒนา Solid.js applications ด้วย fine-grained reactivity, render-once mental model, และ performance optimization

## Scope

ใช้สำหรับ Solid.js projects ที่ไม่ใช่ SolidStart (client-side only หรือ integration กับ frameworks อื่น)

## Execute

### 1. Component Development

พัฒนา components ตาม Solid.js patterns

1. ใช้ functional components ที่รันครั้งเดียว (render-once)
2. ใช้ `mergeProps` สำหรับ combine default props กับ incoming props
3. ใช้ `splitProps` สำหรับ passing specific props ไปยัง child components
4. กำหนด types ด้วย `Component<P>`, `VoidComponent<P>`, `ParentComponent<P>`, `FlowComponent<P, C>`
5. ใช้ `.tsx` สำหรับทุก components

### 2. Use Control Flow Components

ใช้ control flow components ที่ optimized สำหรับ Solid.js

1. ใช้ `<For>` สำหรับ lists ที่ tracked by reference (keyed list)
2. ใช้ `<Index>` สำหรับ lists ที่มี stable indices แต่ values เปลี่ยนได้
3. ใช้ `<Show>` สำหรับ conditional rendering
4. หลีกเลี่ยง `map` และ `filter` โดยตรงบน reactive arrays

### 3. Implement Reactivity

ใช้ reactive primitives อย่างถูกต้อง

1. ใช้ `createSignal` สำหรับ state management (getter/setter)
2. ใช้ setter ด้วย function: `setCount(c => c + 1)`
3. ใช้ `createMemo` สำหรับ derived values ที่ cache ได้
4. ใช้ `createEffect` สำหรับ side effects หลัง render phase
5. ใช้ `createComputed` สำหรับ computations ใน render phase
6. ใช้ `createStore` สำหรับ nested reactive state ด้วย Proxies
7. ใช้ `batch` สำหรับ group multiple state updates
8. ใช้ `untrack` สำหรับ prevent dependencies

### 4. State Management

จัดการ state ด้วย patterns ที่เหมาะสม

1. ใช้ Context API สำหรับ global state
2. ใช้ `$RAW` สำหรับ access underlying non-proxied object
3. ใช้ `unwrap` สำหรับ get data โดยไม่มี proxy
4. ใช้ `createStore` สำหรับ complex nested state
5. ใช้ `produce` จาก `immer` สำหรับ immutable updates ถ้าจำเป็น

### 5. Optimize Performance

ปรับปรุง performance ด้วย Solid.js patterns

1. ใช้ fine-grained updates (no Virtual DOM)
2. หลีกเลี่ยง reactive expressions ที่ component top-level ถ้าไม่จำเป็น
3. ใช้ `createMemo` สำหรับ cache expensive computations
4. ใช้ `<For>` และ `<Index>` สำหรับ efficient list rendering
5. ใช้ `Suspense` สำหรับ async data loading
6. ใช้ lazy loading สำหรับ code splitting
7. ใช้ SSR และ hydration สำหรับ initial load performance

### 6. Testing

ทดสอบ Solid.js applications

1. ใช้ `@solidjs/testing-library` สำหรับ component testing
2. ใช้ Vitest สำหรับ unit testing
3. ทดสอบ reactive behavior ด้วย `createRoot` และ `dispose`
4. ทดสอบ control flow components อย่างถูกต้อง

## Rules

### 1. Component Structure

พัฒนา components ตาม Solid.js mental model:

- Components เป็น functions ที่รันครั้งเดียวเพื่อ setup view
- ใช้ `mergeProps` สำหรับ combine props reactively
- ใช้ `splitProps` สำหรับ passing props ไปยัง children
- กำหนด types ด้วย Solid.js component types
- หลีกเลี่ยงการ re-run component เมื่อ state เปลี่ยน

### 2. Reactivity Patterns

ใช้ reactive primitives อย่างถูกต้อง:

- ใช้ `createSignal` สำหรับ state ที่ต้องการ reactivity
- ใช้ setter ด้วย function สำหรับ updates based on previous value
- ใช้ `createMemo` สำหรับ derived values ที่ไม่ควร re-compute
- ใช้ `createEffect` สำหรับ side effects เท่านั้น
- ใช้ `createStore` สำหรับ nested state ที่ซับซ้อน
- ใช้ `batch` สำหรับ group updates เพื่อ single re-render

### 3. Control Flow

ใช้ control flow components ที่ optimized:

- ใช้ `<For>` สำหรับ lists ที่ tracked by reference
- ใช้ `<Index>` สำหรับ primitive arrays ที่ values เปลี่ยนได้
- ใช้ `<Show>` สำหรับ conditional rendering
- หลีกเลี่ยง `map` และ `filter` โดยตรงบน reactive arrays
- ใช้ `<Switch>` และ `<Match>` สำหรับ complex conditions

### 4. Performance Optimization

ปรับปรุง performance ด้วย Solid.js principles:

- ใช้ fine-grained updates แทน Virtual DOM
- หลีกเลี่ยง reactive expressions ที่ไม่จำเป็น
- ใช้ `createMemo` สำหรับ cache computations
- ใช้ `untrack` เมื่อไม่ต้องการ dependencies
- ใช้ `Suspense` สำหรับ async operations
- ใช้ lazy loading สำหรับ large components

### 5. State Management

จัดการ state ด้วย patterns ที่เหมาะสม:

- ใช้ Context API สำหรับ global state
- ใช้ `createStore` สำหรับ nested state
- ใช้ `$RAW` และ `unwrap` เมื่อ interact กับ external libraries
- ใช้ `batch` สำหรับ multiple updates
- หลีกเลี่ยง deep nesting ถ้าไม่จำเป็น

### 6. Related Workflows

เชื่อมโยงกับ workflows ที่เกี่ยวข้อง:

- ทำ `/follow-solid-start` สำหรับ SolidStart applications
- ทำ `/follow-typescript` สำหรับ TypeScript best practices

## Expected Outcome

- Solid.js components พัฒนาตาม render-once mental model
- Reactivity system ใช้งานอย่างถูกต้อง
- Performance optimization ด้วย fine-grained updates
- Control flow components ใช้งานอย่างเหมาะสม
- State management มีประสิทธิภาพ
- Testing setup ครบถ้วน
