---
title: Follow TypeScript
description: Develop TypeScript projects with type safety and code quality best practices
auto_execution_mode: 3
---

## Goal

พัฒนาโปรเจกต์ TypeScript ด้วย type safety สูงสุดและ code quality best practices

## Execute

### 1. Setup Type System

1. เปิดใช้งาน strict: true ทั้งหมด
2. ใช้ type narrowing แทน type assertion
3. ใช้ discriminated unions สำหรับ complex state
4. ไม่ใช้ any โดยเด็ดขาด
5. ใช้ unknown แทน any เมื่อจำเป็น
6. ใช้ readonly สำหรับ properties ที่ไม่ควรเปลี่ยนแปลง

### 2. Setup Code Quality

1. ตรวจสอบ dependencies ที่มีอยู่ก่อนติดตั้ง
2. ติดตั้ง ESLint และ typescript-eslint
3. สร้าง eslint.config.js สำหรับ flat config
4. ตั้งค่า lint rules เพิ่มเติม
5. ใช้ type hints ทุก function
6. ใช้ const แทน let เมื่อเป็นไปได้
7. ใช้ named exports สำหรับ tree-shaking
8. ใช้ import type สำหรับ type-only imports
9. ใช้ satisfies operator เพื่อ validate types

### 3. Setup Scripts

1. เพิ่ม typecheck: tsc --noEmit
2. เพิ่ม typecheck:watch: tsc --noEmit --watch
3. เพิ่ม typecheck:build: tsc --build

### 4. Install Dependencies

1. bun add -d bun-types typescript
2. ติดตั้ง bun-types ใน root devDependencies

### 5. Setup Testing

1. ใช้ vitest สำหรับ unit testing
2. สร้าง type-safe mocks
3. ใช้ expect-type สำหรับ runtime type assertions
4. ตรวจสอบ type coverage ด้วย type-coverage

## Rules

- ใช้ strict mode ทั้งหมด
- ไม่ใช้ any โดยเด็ดขาด
- ใช้ type hints ทุก function
- ใช้ eslint และ typescript-eslint สำหรับ linting
- ใช้ vitest สำหรับ testing

### 1. Type System Best Practices

- ใช้ type narrowing แทน type assertion
- ใช้ discriminated unions สำหรับ complex state
- ใช้ unknown แทน any เมื่อจำเป็น
- ใช้ readonly สำหรับ properties ที่ไม่ควรเปลี่ยนแปลง
- ใช้ utility types (Partial, Readonly, Pick, Omit)
- ใช้ satisfies operator เพื่อ validate types
- ใช้ type guards สำหรับ runtime type checking

### 2. Code Quality Best Practices

- ใช้ type hints ทุก function
- ใช้ const แทน let เมื่อเป็นไปได้
- ใช้ named exports สำหรับ tree-shaking
- ใช้ import type สำหรับ type-only imports
- ใช้ === แทน == เสมอ
- ใช้ template literals แทน string concatenation
- ใช้ destructuring สำหรับ objects และ arrays
- ใช้ spread operator สำหรับ cloning

### 3. ESLint Config

```js [eslint.config.js]
import tseslint from 'typescript-eslint';

export default tseslint.config({
  extends: [
    ...tseslint.configs.strictTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

### 4. Lint Rules

```js [rules]
rules: {
  '@typescript-eslint/no-unused-vars': ['error', { 
    argsIgnorePattern: '^_',
    varsIgnorePattern: '^_'
  }],
  '@typescript-eslint/no-explicit-any': 'warn',
  '@typescript-eslint/no-floating-promises': 'error',
}
```

## Expected Outcome

- Type safety สูงสุดด้วย strict mode
- Code quality ตาม best practices
- ESLint และ TypeScript ESLint ตั้งค่าเรียบร้อย
- Type-safe testing ด้วย vitest
