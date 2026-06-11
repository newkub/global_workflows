---
title: Follow React
description: พัฒนา React applications ตาม best practices
auto_execution_mode: 3
---

## Goal

พัฒนา React applications ตาม best practices ด้วย project structure และ patterns ที่ถูกต้อง

## Scope

ใช้สำหรับพัฒนา React applications ด้วย Vite, TypeScript, และ folder structure มาตรฐาน

## Execute

### 1. Setup Project Structure

สร้างโครงสร้างโปรเจกต์ตามมาตรฐาน

1. สร้าง `src/components/ui`, `src/components/features`, `src/hooks`, `src/lib`, `src/types`
2. ตั้งค่า `package.json` ด้วย scripts มาตรฐาน
3. ตั้งค่า `vite.config.ts` และ `tsconfig.json`
4. ติดตั้ง dependencies ที่จำเป็น

### 2. Configure Core Principles

ตั้งค่าหลักการพื้นฐานของ React

1. ใช้ `React.StrictMode` ห่อ `App` component
2. ใช้ Error Boundaries สำหรับส่วนเสี่ยง
3. ตั้งค่า UnoCSS ตาม `/follow-unocss`
4. ใช้ React Server Components ให้เหมาะสม

### 3. Implement Folder Rules

ใช้ rules สำหรับแต่ละ folder

1. `components/ui`: Dumb components, props in, events out
2. `components/features`: Feature-specific components
3. `hooks`: Orchestration and facade patterns
4. `lib`: Pure utilities, clients, adapters

### 4. Setup Import Rules

ตั้งค่า import dependencies ตามลำดับ

1. pages → components/features, hooks
2. components/features → components/ui, hooks
3. components/ui → no internal dependencies
4. hooks → lib, types
5. lib → types
6. types → no internal dependencies

### 5. Optimize Performance

ตั้งค่า performance optimization

1. ใช้ `React.memo`, `useMemo`, `useCallback` เมื่อจำเป็น
2. ใช้ code splitting ด้วย `React.lazy`
3. ใช้ `useTransition` สำหรับ priority updates

## Rules

### 1. Component Structure

จัดโครงสร้าง components ตาม responsibilities

- `components/ui`: Small, focused, single responsibility
- `components/features`: Feature-specific, no global state binding
- `hooks`: Orchestration, facade patterns, no UI markup
- `lib`: Pure utilities, clients, adapters, no React imports

### 2. Performance Best Practices

ใช้ performance optimization อย่างเหมาะสม

- ใช้ memoization เมื่อจำเป็นเท่านั้น
- หลีกเลี่ยง over-memoization
- ใช้ code splitting ตาม route หรือ component
- ใช้ `useTransition` สำหรับ non-critical updates

### 3. Code Quality

รักษาคุณภาพโค้ด

- ใช้ TypeScript สำหรับ type safety
- ใช้ Biome สำหรับ linting
- ใช้ strict mode สำหรับ development
- ใช้ Error Boundaries สำหรับ error handling

### 4. Configuration Standards

ตั้งค่า configuration ตามมาตรฐาน

- `package.json`: dev, build, preview, typecheck, lint scripts
- `vite.config.ts`: Vite configuration
- `tsconfig.json`: TypeScript configuration
- UnoCSS configuration ตาม `/follow-unocss`

## Expected Outcome

- React application ด้วย structure ที่ถูกต้อง
- Components แยกตาม responsibilities
- Performance optimization ที่เหมาะสม
- Type safety ด้วย TypeScript
- Code quality ด้วย linting

