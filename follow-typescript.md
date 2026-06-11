---
title: Follow TypeScript
description: Develop TypeScript projects with type safety and code quality best practices
auto_execution_mode: 3
---

## Goal

พัฒนาโปรเจกต์ TypeScript ด้วย type safety สูงสุดและ code quality best practices

## Scope

ใช้สำหรับพัฒนาโปรเจกต์ TypeScript ทั้ง type system, code quality, testing, และ documentation

## Execute

### 1. Setup Type System

ตั้งค่า TypeScript type system ให้เข้มงวด

1. เปิดใช้งาน strict: true ทั้งหมด
2. ใช้ type narrowing แทน type assertion
3. ใช้ discriminated unions สำหรับ complex state
4. ไม่ใช้ any โดยเด็ดขาด
5. ใช้ unknown แทน any เมื่อจำเป็น
6. ใช้ readonly สำหรับ properties ที่ไม่ควรเปลี่ยนแปลง

### 2. Setup Code Quality

ตั้งค่า code quality tools และ conventions

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

ตั้งค่า scripts สำหรับ type checking

1. เพิ่ม typecheck: tsc --noEmit
2. เพิ่ม typecheck:watch: tsc --noEmit --watch
3. เพิ่ม typecheck:build: tsc --build

### 4. Install Dependencies

ติดตั้ง dependencies ที่จำเป็น

1. bun add -d bun-types typescript
2. ติดตั้ง bun-types ใน root devDependencies

### 5. Setup Testing

ตั้งค่า testing ด้วย type safety

1. ใช้ vitest สำหรับ unit testing
2. สร้าง type-safe mocks
3. ใช้ expect-type สำหรับ runtime type assertions
4. ตรวจสอบ type coverage ด้วย type-coverage

### 6. Setup Documentation

ตั้งค่า documentation standards

1. ใช้ JSDoc สำหรับ function documentation
2. ใช้ TSDoc standard สำหรับ consistency
3. เพิ่ม @param, @returns, @example สำหรับ public functions
4. ใช้ @remarks สำหรับ additional notes
5. ใช้ @deprecated สำหรับ deprecated APIs
6. ติดตั้ง eslint-plugin-jsdoc สำหรับ linting

## Rules

### 1. Type System Best Practices

ใช้ TypeScript type system อย่างเต็มประสิทธิภาพ

- เปิดใช้งาน `strict: true` ทั้งหมดใน `tsconfig.json`
- เปิดใช้งาน enhanced type-checking options: `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `noUnusedLocals`, `noUnusedParameters`, `noImplicitReturns`, `noImplicitOverride`, `noFallthroughCasesInSwitch`
- ใช้ module system options: `verbatimModuleSyntax`, `isolatedModules`, `noUncheckedSideEffectImports`
- ใช้ `type narrowing` แทน `type assertion`
- ใช้ `discriminated unions` สำหรับ complex state
- ไม่ใช้ `any` โดยเด็ดขาด
- ใช้ `unknown` แทน `any` เมื่อจำเป็น
- ใช้ `readonly` สำหรับ properties ที่ไม่ควรเปลี่ยนแปลง
- ใช้ utility types (`Partial`, `Readonly`, `Pick`, `Omit`)
- ใช้ `satisfies` operator เพื่อ validate types
- ใช้ `type guards` สำหรับ runtime type checking

### 2. Code Quality Best Practices

เขียนโค้ดที่มีคุณภาพและ maintainable

- ใช้ `type hints` ทุก function
- ใช้ `const` แทน `let` เมื่อเป็นไปได้
- ใช้ `named exports` สำหรับ tree-shaking
- ใช้ `import type` สำหรับ type-only imports
- ใช้ `===` แทน `==` เสมอ
- ใช้ `template literals` แทน string concatenation
- ใช้ `destructuring` สำหรับ objects และ arrays
- ใช้ `spread operator` สำหรับ cloning

### 3. Documentation Best Practices

ใช้ `JSDoc`/`TSDoc` สำหรับ documentation

- ใช้ `/** */` สำหรับ documentation comments
- ใช้ `//` สำหรับ single-line comments
- ใช้ `/* */` สำหรับ multi-line comments
- เพิ่ม `@param`, `@returns` สำหรับ public functions
- เพิ่ม `@example` สำหรับ usage examples
- ใช้ `@remarks` สำหรับ additional notes
- ใช้ `@deprecated` สำหรับ deprecated APIs
- ติดตั้ง `eslint-plugin-jsdoc` สำหรับ linting

```ts [JSDoc Example]
/**
 * Calculates the sum of two numbers
 * @param a - First number
 * @param b - Second number
 * @returns The sum of a and b
 * @example
 * ```ts
 * add(1, 2) // returns 3
 * ```
 */
function add(a: number, b: number): number {
  return a + b;
}
```

## Expected Outcome

- Type safety สูงสุดด้วย strict mode
- Code quality ตาม best practices
- ESLint และ TypeScript ESLint ตั้งค่าเรียบร้อย
- Type-safe testing ด้วย vitest

