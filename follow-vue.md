---
title: Vue
description: แนวทางการพัฒนา Vue.js applications ตาม best practices
auto_execution_mode: 3
---

## Goal

กำหนดแนวทางการพัฒนา Vue.js applications ด้วย Vue 3, Composition API, TypeScript และ modern best practices

## Scope

ใช้สำหรับ Vue 3 projects ทั้ง Vite และ Nuxt

## Execute

### 1. Setup And Configuration

1. ติดตั้ง Vue 3 ด้วย Vite หรือ Nuxt
2. ใช้ TypeScript strict mode
3. ติดตั้ง Pinia สำหรับ state management
4. ติดตั้ง Vue Router สำหรับ routing
5. ติดตั้ง UnoCSS หรือ TailwindCSS สำหรับ styling

### 2. Component Development

1. ใช้ Single-File Components (SFC) ด้วย `<script setup lang="ts">`
2. ใช้ Composition API แทน Options API
3. ใช้ multi-word component names เสมอ
4. ระบุ prop types ด้วย `defineProps<T>()`
5. ใช้ `defineEmits<T>()` สำหรับ type-safe events
6. ใช้ key กับ v-for เสมอ

### 3. Composables And State

1. แยก logic ออกจาก components ไปที่ composables
2. logic ทั้งหมดต้องอยู่ใน composables
3. ใช้ Pinia สำหรับ global state management
4. จัดระเบียบ stores ตาม features/domains
5. ใช้ computed getters สำหรับ derived state

### 4. Styling

1. ใช้ UnoCSS theme ที่กำหนดไว้
2. ไม่ hard-code colors หรือ spacing
3. ใช้ utility classes แทน custom styles
4. ใช้ `<style scoped>` สำหรับ component-specific styles

### 5. Project Organization

1. components ที่ใช้ซ้ำกันให้ refactor ไปที่ `components/ui/`
2. ใช้ import alias (`~/`, `#server`, `#shared`) ห้ามใช้ relative paths
3. ทุก `index.ts` แค่ re-export เท่านั้น ไม่มี logic
4. ลบ `@deprecated` ทั้งหมดจาก codebase
5. ใช้ `useHead` ในทุก page component สำหรับ meta tags

## Rules

### 1. Component Standards

Component ต้อง follow standards:

- ใช้ Composition API และ `<script setup>`
- ใช้ TypeScript สำหรับ type safety
- Component names เป็น multi-word
- Props ต้องมี detailed definitions
- ใช้ key กับ v-for เสมอ
- หลีกเลี่ยง v-if กับ v-for บน element เดียวกัน

### 2. Code Organization

การจัดระเบียบ code:

- แยก logic ออกจาก components
- logic ทั้งหมดต้องอยู่ใน composables
- components ที่ใช้ซ้ำกันต้องอยู่ใน `components/ui/`
- ใช้ import alias ห้ามใช้ relative paths
- ทุก `index.ts` แค่ re-export เท่านั้น ไม่มี logic
- ลบ `@deprecated` ทั้งหมดจาก codebase

### 3. State Management

การจัดการ state:

- ใช้ Pinia สำหรับ state management
- จัดระเบียบ stores ตาม features/domains
- ใช้ computed getters สำหรับ derived state

### 4. Styling

การจัดการ styles:

- ใช้ UnoCSS theme ที่กำหนดไว้
- ไม่ hard-code colors หรือ spacing
- Styles เป็น scoped

### 5. Performance

การ optimize performance:

- ใช้ computed properties อย่างมีประสิทธิภาพ
- หลีกเลี่ยง unnecessary reactivity
- ใช้ dynamic imports สำหรับ lazy loading
- ใช้ tree-shaking อย่างเต็มที่

## Expected Outcome

- Vue 3 components ที่มีโครงสร้างถูกต้อง
- Logic ที่แยกออกจาก components
- Performance ที่ดีขึ้น
- Type safety เต็มรูปแบบด้วย TypeScript
- Code ที่ maintainable

