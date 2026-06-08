---
title: Follow Vue
description: แนวทางการพัฒนา Vue.js applications ตาม best practices
auto_execution_mode: 3
related_workflows:
  - /follow-vueuse
  - /follow-pinia
  - /follow-nuxt
---

## Goal

กำหนดแนวทางการพัฒนา Vue.js applications ด้วย Vue 3, Composition API, TypeScript และ modern best practices

## Execute

### 1. Setup And Configuration

1. ติดตั้ง Vue 3 ด้วย Vite หรือ Nuxt
2. ใช้ TypeScript strict mode
3. ติดตั้ง Pinia สำหรับ state management
4. ติดตั้ง Vue Router สำหรับ routing
5. ตั้งค่า ESLint และ Prettier สำหรับ code quality
6. ติดตั้ง Vitest สำหรับ testing
7. ติดตั้ง UnoCSS หรือ TailwindCSS สำหรับ styling

### 2. Component Structure

1. ใช้ Single-File Components (SFC) สำหรับ Vue components
2. ใช้ `<script setup lang="ts">` เท่านั้น
3. ใช้ Composition API แทน Options API
4. จัดเรียง `script`, `template`, `style` ในลำดับที่ถูกต้อง
5. ใช้ `scoped` สำหรับ styles ที่เฉพาะ component
6. หลีกเลี่ยง element selectors ใน scoped styles ใช้ class selectors แทน

### 3. Component Naming

1. ใช้ multi-word component names เสมอ เช่น `TodoItem.vue`
2. ใช้ PascalCase สำหรับ component files
3. Base components ให้ใช้ prefix เช่น `Base`, `App`, หรือ `V`
4. Child components ที่ tightly coupled ให้ใช้ parent name เป็น prefix
5. Single-instance components ให้ใช้ prefix `The`

### 4. Props And Data

1. ระบุ prop types, required status, default values, และ validators อย่างละเอียด
2. ใช้ `defineProps<T>()` สำหรับ type safety
3. ใช้ `withDefaults` สำหรับ default values
4. Declare props ด้วย camelCase ใน JavaScript และใช้ kebab-case ใน templates
5. หลีกเลี่ยงการ mutate props โดยตรงใน child components

### 5. Component Communication

1. ใช้ props down, events up pattern
2. หลีกเลี่ยง `this.$parent` หรือ direct prop mutation
3. ใช้ provide/inject สำหรับ deeply nested components
4. ใช้ v-model สำหรับ two-way binding
5. ใช้ slots สำหรับ content projection
6. ใช้ defineEmits สำหรับ type-safe events

### 6. Template Directives

1. ใช้ key attribute เสมอเมื่อใช้ v-for
2. หลีกเลี่ยงการใช้ v-if บน element เดียวกับ v-for
3. ใช้ kebab-case สำหรับ custom events
4. Template expressions ควรมีเฉพาะ JavaScript expressions ที่เรียบง่าย
5. หลีกเลี่ยง complex expressions ใน templates

### 7. Styling

1. ใช้ UnoCSS theme ที่กำหนดไว้
2. ไม่ hard-code colors หรือ spacing
3. ใช้ utility classes แทน custom styles เมื่อเป็นไปได้
4. ใช้ `@nuxt/icon` ด้วย preset `mdi` สำหรับ icons
5. ไม่ใช้ SVG โดยตรงใน component
6. ใช้ `<style scoped>` สำหรับ component-specific styles

### 8. Composables

1. แยก logic ออกจาก components ไปที่ composables
2. เก็บ composables ที่ `composables/` โดยตรง
3. ใช้ `ref`, `computed`, `watch` จาก `vue`
4. ใช้ composables สำหรับ logic ที่ใช้ซ้ำ
5. ใช้ TypeScript สำหรับ type safety
6. logic ทั้งหมดต้องอยู่ใน composables ไม่ใช่ใน .vue

### 9. State Management

1. ใช้ Pinia สำหรับ global state management
2. ใช้ `defineStore` สำหรอสร้าง stores
3. จัดระเบียบ stores ตาม features/domains
4. ใช้ TypeScript สำหรับ store types
5. ใช้ composables สำหรับ store access
6. ใช้ computed getters สำหรับ derived state
7. หลีกเลี่ยง prop drilling ด้วย provide/inject

### 10. Performance

1. ใช้ computed properties อย่างมีประสิทธิภาพ
2. หลีกเลี่ยง deep reactivity ถ้าไม่จำเป็น ใช้ shallowRef/shallowReactive
3. ลด watchers ที่ไม่จำเป็น
4. ใช้ v-once สำหรับ static content
5. ใช้ virtual scrolling สำหรับ long lists
6. ใช้ keep-alive สำหรับ expensive components
7. ใช้ tree-shaking อย่างเต็มที่
8. ใช้ dynamic imports สำหรับ routes
9. ใช้ v-memo เมื่อเหมาะสม
10. ทำ code splitting สำหรับ large bundles

### 11. TypeScript Integration

1. ใช้ `<script setup lang="ts">` เท่านั้น
2. ระบุ types อย่างชัดเจนสำหรับ props, emits, refs
3. ใช้ `defineProps<T>()`, `defineEmits<T>()` สำหรับ type safety
4. ใช้ generic types สำหรับ reusable components
5. หลีกเลี่ยง `any` types
6. ใช้ `defineComponent` สำหรับ type inference

### 12. Testing

1. เขียน unit tests สำหรับ composables
2. เขียน component tests สำหรับ UI components
3. เขียน E2E tests สำหรับ critical user flows
4. ใช้ Vitest สำหรับ unit testing
5. ใช้ Playwright สำหรับ E2E testing

### 13. Accessibility

1. ใช้ semantic HTML elements
2. ใช้ ARIA attributes เมื่อจำเป็น
3. รองรับ keyboard navigation
4. ใช้ proper heading hierarchy
5. ทดสอบด้วย screen readers

### 14. Project Organization

1. ไม่ grouping components ตาม features
2. components ที่ใช้ซ้ำกันให้ refactor ไปที่ `components/ui/`
3. composables เก็บที่ `composables/` โดยตรง
4. ไม่ mockup data ต้องใช้จาก `server/api` จริง
5. ใช้ import alias (`~/`, `#server`, `#shared`) ห้ามใช้ relative paths
6. `server/api` ใช้ `#server` และ `#shared` ไม่ import โดยตรงจาก `../`
7. ใช้ shared types สำหรับ consistency
8. barrel exports: ทุก `index.ts` แค่ re-export เท่านั้น ไม่มี logic
9. ลบ `@deprecated` ทั้งหมดจาก codebase
10. SEO: ใช้ `useHead` ในทุก page component สำหรับ meta tags

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
- ใช้ `@nuxt/icon` ด้วย preset `mdi`
- Styles เป็น scoped

### 5. Performance

การ optimize performance:

- ใช้ computed properties อย่างมีประสิทธิภาพ
- หลีกเลี่ยง unnecessary reactivity
- ใช้ dynamic imports สำหรับ lazy loading
- ใช้ tree-shaking อย่างเต็มที่

### 6. SEO And Data Fetching

SEO และ data fetching:

- ใช้ `useHead` ในทุก page component สำหรับ meta tags
- ไม่ใช้ `$fetch` โดยตรงใน components ใช้ `useFetch` หรือ `useAsyncData` เท่านั้น

### 7. TypeScript

TypeScript usage:

- ระบุ types อย่างชัดเจนสำหรับทุกอย่าง
- หลีกเลี่ยง `any` types
- ใช้ `defineComponent` สำหรับ type inference

## Expected Outcome

- Vue 3 components ที่มีโครงสร้างถูกต้อง
- Logic ที่แยกออกจาก components
- Performance ที่ดีขึ้น
- Type safety เต็มรูปแบบด้วย TypeScript
- Code ที่ maintainable
- Naming conventions ที่สม่ำเสมอ
- Props และ data ที่ปลอดภัย
- Styles ที่ไม่ conflict กัน
- Accessibility ที่ดี
- Testing coverage ที่เพียงพอ
