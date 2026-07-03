---
title: Update Devin Rules
description: อัพเดท .devin/rules ตาม project analysis และ dependencies
auto_execution_mode: 3
related_workflows:
  - /update-dot-devin
  - /update-agents
  - /analyze-project
---

## Goal

อัพเดท `.devin/rules/` ทั้ง `always-on/`, `model_decision/`, และ `glob/` ตาม project analysis และ dependencies จริง โดยพยายามเขียน rules ให้ครอบคลุมมากที่สุด

## Scope

ใช้สำหรับอัพเดท rules ใน `.devin/rules/` directory ของ project workspace ใดๆ ที่มี `.devin` structure อยู่แล้ว ถ้ายังไม่มี `.devin` ให้ทำ `/update-dot-devin` ก่อน

## Execute

### 1. Verify Devin Structure

ตรวจสอบว่า `.devin` structure มีอยู่แล้ว

1. ตรวจสอบว่า `.devin/rules/` directory มีอยู่พร้อม subdirectories: `always-on/`, `model_decision/`, `glob/`
2. ถ้าไม่มี ให้ทำ `/update-dot-devin` ก่อนเพื่อสร้าง structure ครบถ้วน
3. อ่าน rules ที่มีอยู่ทั้งหมดในแต่ละ subdirectory เพื่อเข้าใจสถานะปัจจุบัน

### 2. Analyze Project

วิเคราะห์ project เพื่อระบุ rules ที่ต้องอัพเดท

1. ทำ `/analyze-project` เพื่อวิเคราะห์ codebase, tech stack, และ patterns
2. อ่าน `package.json` ทั้ง root และ workspace เพื่อดู dependencies ทั้งหมด
3. ระบุ tools และ frameworks ที่ใช้ (เช่น `biome`, `turborepo`, `drizzle`, `solidjs`)
4. ระบุ domain patterns (เช่น `api`, `auth`, `payment`, `database`, `deployment`)
5. ระบุ file patterns ที่ต้องการ glob rules (เช่น `**/schema/**/*.ts`, `**/server/**/*.ts`)

### 3. Update Always-On Rules

อัพเดท rules ใน `.devin/rules/always-on/` สำหรับ tools ที่ใช้ใน project โดยเขียนให้ครอบคลุมมากที่สุด

1. ระบุ tools ที่ต้องมี always-on rules จาก dependencies ทั้งหมด (เช่น `biome`, `bun`, `typescript`, `turborepo`, `lefthook`, `ast-grep`, `monorepo`, `knip`, `vite`, `solidjs`, `unocss`, `vitest`, `drizzle`, `orpc`, `zod`, `supabase`, `stripe`, `playwright`, `capacitor`, `vitepress`, `mcp-sdk`)
2. ตรวจสอบ config files (เช่น `biome.jsonc`, `turbo.json`, `lefthook.yml`, `knip.json`, `sgconfig.yml`, `uno.config.ts`, `vitest.config.ts`, `playwright.config.ts`) เพื่อเขียน rules ให้ครอบคลุม settings จริง
3. สำหรับแต่ละ tool ให้ตรวจสอบ rule file ที่มีอยู่ว่ายังถูกต้องหรือไม่
4. ถ้า tool ใหม่ที่ไม่มี rule ให้สร้างไฟล์ใหม่ตาม Rules section
5. ถ้า tool เก่าที่ไม่ใช้แล้วให้ลบไฟล์ทิ้ง
6. อัพเดทเนื้อหา rules ให้สอดคล้องกับ version และ config ปัจจุบัน
7. พยายามเขียน rules ให้ครอบคลุมทุกแง่มุมของ tool ที่ใช้ (เช่น commands, config locations, naming conventions, anti-patterns, integration points)

### 4. Update Model Decision Rules

อัพเดท rules ใน `.devin/rules/model_decision/` สำหรับ domain patterns โดยเขียนให้ครอบคลุมมากที่สุด

1. ระบุ domain patterns ที่ต้องมี model decision rules จาก project structure และ codebase analysis
2. สแกน codebase เพื่อหา domain patterns เพิ่มเติมที่อาจมองข้าม (เช่น `api`, `auth`, `database`, `payment`, `deployment`, `mobile`, `testing`, `solidjs`, `mcp`, `ai`, `i18n`, `realtime`, `seo`, `security`, `performance`)
3. สำหรับแต่ละ domain ให้ตรวจสอบ rule file ที่มีอยู่ว่ายังถูกต้องหรือไม่
4. ถ้า domain ใหม่ที่ไม่มี rule ให้สร้างไฟล์ใหม่ตาม Rules section
5. ถ้า domain เก่าที่ไม่ใช้แล้วให้ลบไฟล์ทิ้ง
6. อัพเดทเนื้อหา rules ให้สอดคล้องกับ patterns และ conventions ปัจจุบัน
7. พยายามเขียน rules ให้ครอบคลุมทุกแง่มุมของ domain (เช่น architecture, data flow, error handling, security, testing, integration points, anti-patterns)

### 5. Update Glob Rules

อัพเดท rules ใน `.devin/rules/glob/` สำหรับ file patterns โดยเขียนให้ครอบคลุมมากที่สุด

1. ระบุ file patterns ที่ต้องมี glob rules จาก project structure และ directory analysis
2. สแกน directory structure เพื่อหา file patterns เพิ่มเติม (เช่น `**/routes/**/*.tsx`, `**/server/**/*.ts`, `**/schema/**/*.ts`, `**/*.test.ts`, `**/config/**/*.ts`, `**/components/**/*.tsx`, `**/modules/**/*.ts`, `**/integrations/**/*.ts`, `**/stores/**/*.ts`, `**/lib/**/*.ts`)
3. สำหรับแต่ละ pattern ให้ตรวจสอบ rule file ที่มีอยู่ว่ายังถูกต้องหรือไม่
4. ถ้า pattern ใหม่ที่ไม่มี rule ให้สร้างไฟล์ใหม่ตาม Rules section
5. ถ้า pattern เก่าที่ไม่ใช้แล้วให้ลบไฟล์ทิ้ง
6. อัพเดท `globs:` list ให้สอดคล้องกับ directory structure ปัจจุบัน
7. พยายามเขียน rules ให้ครอบคลุมทุกแง่มุมของ file pattern (เช่น naming conventions, import rules, export rules, structure patterns, anti-patterns, testing requirements)

### 6. Validate And Finalize

ตรวจสอบและ finalize rules ทั้งหมด

1. ทำ `/improve-correctness` เพื่อตรวจสอบความถูกต้องของเนื้อหา
2. ตรวจสอบ frontmatter ทุกไฟล์ถูกต้องตาม Rules section
3. ตรวจสอบว่า rules สอดคล้องกับ dependencies ใน `package.json`
4. ตรวจสอบว่าไม่มี rules ที่ซ้ำซ้อนกัน
5. ตรวจสอบว่าทุกไฟล์ใช้ `kebab-case.md` naming

## Rules

### 1. Frontmatter Format

- `always-on` rules ต้องมี `trigger: always_on`
- `model_decision` rules ต้องมี `trigger: model_decision`
- `glob` rules ต้องมี `trigger: glob` พร้อม `globs:` list

### 2. Content Language

- เนื้อหาทั้งหมดใน `.devin/rules/` ต้องเป็นภาษาอังกฤษ
- ใช้ backticks สำหรับ `concepts`, `tools`, `terms`, และ `commands`

### 3. Content Format

- ใช้ numbered list สำหรับ rules ในแต่ละไฟล์
- หัวข้อเป็น Title Case พร้อม `#` heading
- ตั้งชื่อไฟล์ด้วย `kebab-case.md`

### 4. Always-On Rules Coverage

- ต้องครอบคลุม tools ทั้งหมดที่ใช้ใน project จาก `package.json` ทั้ง root และ workspace
- พยายามเขียนให้ครอบคลุมมากที่สุด: commands, config locations, naming conventions, anti-patterns, integration points
- ตัวอย่าง tools: `biome`, `bun`, `typescript`, `turborepo`, `lefthook`, `ast-grep`, `monorepo`, `knip`, `vite`, `solidjs`, `unocss`, `vitest`, `drizzle`, `orpc`, `zod`, `supabase`, `stripe`, `playwright`, `capacitor`, `vitepress`, `mcp-sdk`
- ถ้า project ไม่ได้ใช้ tool ใด ให้ลบ rule file ทิ้ง

### 5. Model Decision Rules Coverage

- ต้องครอบคลุม domain patterns ที่มีใน project และพยายามหา domain เพิ่มเติมจาก codebase analysis
- พยายามเขียนให้ครอบคลุมมากที่สุด: architecture, data flow, error handling, security, testing, integration points, anti-patterns
- ตัวอย่าง domains: `api`, `auth`, `database`, `payment`, `deployment`, `mobile`, `testing`, `solidjs`, `mcp`, `ai`, `i18n`, `realtime`, `seo`, `security`, `performance`
- ถ้า project ไม่มี domain ใด ให้ลบ rule file ทิ้ง

### 6. Glob Rules Coverage

- ต้องครอบคลุม file patterns ที่สำคัญใน project และพยายามหา patterns เพิ่มเติมจาก directory analysis
- พยายามเขียนให้ครอบคลุมมากที่สุด: naming conventions, import rules, export rules, structure patterns, anti-patterns, testing requirements
- ตัวอย่าง patterns: `**/routes/**/*.tsx`, `**/server/**/*.ts`, `**/schema/**/*.ts`, `**/*.test.ts`, `**/config/**/*.ts`, `**/components/**/*.tsx`, `**/modules/**/*.ts`, `**/integrations/**/*.ts`, `**/stores/**/*.ts`, `**/lib/**/*.ts`
- `globs:` list ต้องตรงกับ directory structure จริง

### 7. Dependency Validation

- Library rules ต้องสอดคล้องกับ dependencies ใน `package.json` ทั้ง root และ workspace
- ถ้า dependency เปลี่ยน version ให้อัพเดท rule content ให้สอดคล้อง

## Expected Outcome

- `.devin/rules/always-on/` ครอบคลุม tools ทั้งหมดจาก `package.json` และเขียน rules ให้ครอบคลุมมากที่สุด
- `.devin/rules/model_decision/` ครอบคลุม domain patterns ที่มีใน project และเขียน rules ให้ครอบคลุมมากที่สุด
- `.devin/rules/glob/` ครอบคลุม file patterns ที่สำคัญ และเขียน rules ให้ครอบคลุมมากที่สุด
- ไม่มี rules ที่ซ้ำซ้อนหรือล้าสมัย
- ทุกไฟล์มี frontmatter ถูกต้องและเนื้อหาเป็นภาษาอังกฤษ
