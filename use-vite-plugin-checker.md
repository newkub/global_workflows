---
title: Use Vite Plugin Checker
description: ตั้งค่าและใช้งาน vite-plugin-checker สำหรับ type checking และ linting ใน Vite
auto_execution_mode: 3
---

ใช้ vite-plugin-checker เพื่อรวม type checking และ linting เข้ากับ Vite dev server โดยอัตโนมัติ

## Goal

ตั้งค่า checkers หลายตัว (typescript, eslint, biome, vueTsc) ให้ทำงานร่วมกับ Vite แสดงผล errors และ warnings ผ่าน browser overlay และ terminal ใน real-time

## Execute

### 1. Prepare

เตรียมความพร้อมก่อนเริ่มใช้งาน

1. รัน `/check-reference` เพื่อเก็บ reference จากทุก sources
2. ใช้ `/learn-from-web` ศึกษา vite-plugin-checker configuration options
3. อ่าน workflows ที่คล้ายกันเพื่อดู patterns และ conventions

### 2. Install Dependencies

ติดตั้ง vite-plugin-checker และ checkers ที่ต้องการ

1. รัน `bun add -D vite-plugin-checker`
2. ติดตั้ง checkers ตามความต้องการ:
   - `bun add -D typescript` สำหรับ typescript checker
   - `bun add -D eslint` สำหรับ eslint checker
   - `bun add -D vue-tsc` สำหรับ Vue projects
   - `bun add -D @biomejs/biome` สำหรับ biome checker
   - `bun add -D stylelint` สำหรับ stylelint checker

### 3. Configure Checkers

ตั้งค่า checkers ใน `vite.config.ts`

1. Import plugin: `import checker from 'vite-plugin-checker'`
2. เพิ่ม checker ใน plugins array
3. กำหนด overlay options: `initialIsOpen`, `position`, `badgeStyle`
4. ตั้งค่า terminal output: `terminal: true`
5. กำหนด enableBuild: `enableBuild: true` สำหรับ build mode

### 4. Setup TypeScript Checker

ตั้งค่า TypeScript type checking

1. เปิดใช้งาน: `typescript: true`
2. หรือกำหนด options: `typescript: { tsconfigPath: './tsconfig.json' }`
3. ใช้ buildMode ถ้าต้องการ: `typescript: { buildMode: true }`
4. ตรวจสอบว่า tsconfig.json มีการตั้งค่าถูกต้อง

### 5. Setup ESLint Checker

ตั้งค่า ESLint linting

1. เปิดใช้งานพร้อม lintCommand
   ```typescript
   eslint: {
     lintCommand: 'eslint "./src/**/*.{ts,tsx}"'
   }
   ```
2. ใช้ flat config: `useFlatConfig: true`
3. กำหนด dev mode options: `dev.logLevel`, `dev.overrideConfig`
4. ตรวจสอบ eslint config file มีอยู่

### 6. Setup Biome Checker

ตั้งค่า Biome linter

1. เปิดใช้งานพร้อม command
   ```typescript
   biome: {
     command: 'lint',
     flags: '--write'
   }
   ```
2. แยก config สำหรับ dev และ build mode
3. ใช้ `biome.json` สำหรับ configuration

### 7. Setup Vue TSC Checker

ตั้งค่า Vue TypeScript checking

1. เปิดใช้งาน: `vueTsc: true`
2. หรือกำหนด options: `vueTsc: { tsconfigPath: './tsconfig.json' }`
3. ตรวจสอบว่า `vue-tsc` และ `typescript` ถูกติดตั้ง
4. ใช้สำหรับ Vue 3 projects เท่านั้น

### 8. Configure Overlay Display

ตั้งค่าการแสดงผล browser overlay

1. เปิด overlay: `overlay: true`
2. หรือกำหนดละเอียด:
   ```typescript
   overlay: {
     initialIsOpen: false,
     position: 'tr',
     badgeStyle: 'z-index: 9999;',
     panelStyle: 'z-index: 9999;'
   }
   ```
3. ตั้งค่า `initialIsOpen: 'error'` เพื่อเปิดเมื่อมี error เท่านั้น
4. เลือกตำแหน่ง: `'tl'`, `'tr'`, `'bl'`, `'br'`

### 9. Integrate with Nuxt

ตั้งค่าสำหรับ Nuxt framework

1. เพิ่มใน `nuxt.config.ts`:
   ```typescript
   vite: {
     plugins: [
       checker({
         vueTsc: true,
         overlay: { initialIsOpen: false }
       }) as any
     ]
   }
   ```
2. สร้าง component สำหรับ runtime injection
3. Import component ใน root component ด้วย `DevOnly` และ `ClientOnly`
4. ใช้ `as any` เพื่อ avoid type errors

### 10. Verify and Test

ตรวจสอบการทำงานของ checkers

1. รัน `bun run dev` เพื่อ start Vite dev server
2. ตรวจสอบ terminal แสดงผล diagnostics
3. ดู browser overlay แสดง errors/warnings
4. แก้ไข code ให้มี type error แล้วตรวจสอบว่า checker จับได้
5. ทดสอบ build mode: `bun run build`

## Rules

หลักการใช้งาน vite-plugin-checker อย่างมีประสิทธิภาพ

- **Worker Threads**: Checkers ทำงานใน worker threads ไม่ block dev server
- **Dev Mode Only**: เปิด overlay เฉพาะ development mode
- **Build Mode**: ใช้ `enableBuild: true` เพื่อ check ตอน build
- **Overlay Control**: ตั้งค่า `initialIsOpen: false` เพื่อไม่รบกวนการพัฒนา
- **Checker Selection**: เลือกเฉพาะ checkers ที่จำเป็น เพื่อลด resource usage
- **Terminal Output**: เปิด `terminal: true` เพื่อดู errors ใน terminal
- **Config Separation**: แยก config สำหรับ dev และ build mode ถ้าจำเป็น
- **Nuxt Type Cast**: ใช้ `as any` เมื่อใช้กับ Nuxt เพื่อ avoid type errors
- **Runtime Injection**: สร้าง Vue component สำหรับ Nuxt เพื่อให้ overlay ทำงาน
- **Resource Management**: ปิด checkers ที่ไม่ใช้งานเพื่อประหยัด memory

## Expected Outcome

1. TypeScript type errors ถูก detect และแสดงใน real-time
2. ESLint/Biome linting errors ปรากฏทั้งใน terminal และ browser overlay
3. Vue TypeScript checking ทำงานได้ถูกต้องสำหรับ Vue projects
4. Browser overlay แสดงผลตามตำแหน่งและ style ที่กำหนด
5. Build process ตรวจสอบ errors ก่อน deploy
6. Development workflow มีประสิทธิภาพยิ่งขึ้นด้วย immediate feedback
