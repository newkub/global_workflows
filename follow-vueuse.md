---
title: Follow VueUse
description: ใช้งาน VueUse composables ตาม best practices
auto_execution_mode: 3
---

## Goal

ใช้งาน VueUse composables สำหรับ Vue 3 applications อย่างมีประสิทธิภาพ

## Scope

ใช้สำหรับ Vue 3 projects ที่ใช้ VueUse composables

## Execute

### 1. Setup VueUse

ตั้งค่า VueUse ใน project

1. ติดตั้ง `@vueuse/core` และ `@vueuse/nuxt`
2. ตั้งค่า Nuxt module ใน `nuxt.config.ts`
3. ใช้ auto-imports สำหรับ VueUse composables
4. กำหนด imports ที่ต้องการใช้

### 2. Use VueUse Composables

ใช้ VueUse composables ตาม use case

1. State: `useLocalStorage`, `useSessionStorage`, `useAsyncState`
2. Elements: `useElementBounding`, `useWindowSize`, `useScroll`
3. Browser: `useMediaQuery`, `useClipboard`, `useDark`
4. Sensors: `useMouse`, `useGeolocation`, `useNetwork`
5. Animation: `useInterval`, `useTimeout`, `useTransition`

### 3. Integrate With Components

ใช้ VueUse ใน components

1. ใช้ VueUse ใน `<script setup>` components
2. แยก logic ที่ซับซ้อนออกเป็น composables
3. ใช้ TypeScript สำหรับ type inference
4. ทดสอบ composables ด้วย Vitest

### 4. Optimize Performance

ปรับปรุง performance

1. ใช้ `useThrottle` สำหรับ scroll/resize events
2. ใช้ `useDebounce` สำหรับ input/search
3. ใช้ `shallowRef` เมื่อไม่ต้องการ deep reactivity
4. ลด watchers ที่ไม่จำเป็น

## Rules

### 1. Import Conventions

กำหนดการ import

- ใช้ auto-imports สำหรับ VueUse composables
- ใช้ named imports สำหรับ composables ที่ไม่ได้ configure
- ไม่ import VueUse ที่ไม่ได้ใช้

### 2. Usage Patterns

รูปแบบการใช้งาน

- ใช้ VueUse ใน `<script setup>` เท่านั้น
- แยก logic ที่ซับซ้อนออกเป็น composables
- ใช้ destructuring สำหรับ return values
- ใช้ TypeScript types จาก VueUse

### 3. Performance

ปรับปรุง performance

- ใช้ `useThrottle` สำหรับ events
- ใช้ `useDebounce` สำหรับ inputs
- หลีกเลี่ยงการเรียก VueUse ใน loops
- ใช้ `computed` จาก VueUse getters

### 4. Testing

ทดสอบ VueUse composables

- Mock VueUse composables ใน unit tests
- ใช้ `flushPromises` สำหรับ async composables
- ทดสอบ composables ที่ extend จาก VueUse

## Expected Outcome

- VueUse composables ที่ใช้อย่างมีประสิทธิภาพ
- Code ที่ clean และ maintainable
- Type safety จาก VueUse TypeScript support
- Performance ที่ดีขึ้น
