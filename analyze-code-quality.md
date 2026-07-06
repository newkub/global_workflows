---
title: Analyze Code Quality
description: วิเคราะห์คุณภาพโค้ดครบทุกมิติ SRP, SoC, type safety, anti-patterns, dead code
auto_execution_mode: 3
related_workflows:
  - /analyze-structure
  - /use-ast-grep
  - /use-scripts
  - /check-long-files
  - /check-duplication
  - /improve-naming-convention
---

## Goal

วิเคราะห์และระบุปัญหาคุณภาพโค้ดครบทุกมิติเพื่อเตรียมพร้อมสำหรับการปรับปรุง

## Scope

วิเคราะห์ SRP, SoC, type safety, hard code, anti-patterns, code smells, dead code, side effects, circular dependencies, naming conventions, และ reusability

## Execute

### 1. Analyze Structure And SRP

วิเคราะห์โครงสร้างและ SRP violations

1. ทำ `/analyze-structure` เพื่อดูโครงสร้างโปรเจกต์
2. ทำ `/check-long-files` เพื่อระบุไฟล์ที่ยาวกว่า 250 บรรทัด
3. รัน `sg outline <file>.ts` เพื่อดูจำนวน functions/classes ในแต่ละไฟล์
4. รัน `sg outline <file>.ts --items imports` เพื่อดูจำนวน imports (tight coupling indicator)

### 2. Detect SRP And SoC Violations

ระบุการละเมิด SRP และ Separation of Concerns

1. ทำ `/use-scripts` เพื่อ scan ทุกไฟล์และคำนวณ metrics ใน script เดียว:
   - จำนวน methods ต่อ class
   - จำนวน functions ต่อไฟล์
   - จำนวน imports ต่อไฟล์
   - จำนวน lines ต่อไฟล์
   - Generic names (Manager, Handler, Processor, Utility, Helper)
2. จัดประเภท violations:
   - **God class**: class ที่มี methods มากกว่า 7
   - **Mixed concerns**: ไฟล์ที่จัดการหลาย domain
   - **Kitchen sink**: ไฟล์ที่รวม utilities หลายประเภท
   - **Fat module**: ไฟล์ที่มี lines มากกว่า 250
   - **Tight coupling**: ไฟล์ที่มี imports มากกว่า 10

### 3. Analyze Type Safety

วิเคราะห์ type safety และ type flow

1. ระบุ `any` types ที่ควรเป็น `unknown` หรือ proper types
2. ระบุ missing type annotations ใน public APIs
3. ระบุ type assertions ที่ไม่จำเป็น (`as any`, `as unknown`)
4. ตรวจสอบ type flow: schema → validation schema → API types → UI types
5. ระบุ `@ts-ignore` และ `@ts-nocheck` ที่ควรแก้ไข

### 4. Detect Hard Code

ระบุ hardcoded values ที่ควรเป็น constants หรือ config

1. ระบุ magic numbers และ magic strings
2. ระบุ hardcoded URLs, ports, และ endpoints
3. ระบุ hardcoded credentials หรือ secrets
4. ระบุ hardcoded file paths
5. ระบุ hardcoded timeouts และ intervals

### 5. Detect Anti-Patterns And Code Smells

ระบุ anti-patterns และ code smells

1. ทำ `/use-ast-grep` เพื่อ scan anti-patterns:
   - Callback hell
   - Deep nesting (มากกว่า 3 levels)
   - Long parameter lists (มากกว่า 4 parameters)
   - Boolean flags ใน parameters
   - Empty catch blocks
   - Console.log ใน production code
2. ระบุ code smells:
   - Duplicate code
   - Long methods
   - Large classes
   - Feature envy
   - Data clumps
   - Primitive obsession

### 6. Detect Dead Code

ระบุ dead code และ unused exports

1. รัน `bun run knip` เพื่อ detect unused files, exports, และ dependencies
2. ระบุ unreachable code
3. ระบุ unused variables และ imports
4. ระบุ commented-out code
5. ระบุ unused private methods

### 7. Analyze Side Effects

ระบุ side effects ที่ไม่จำเป็น

1. ระบุ mutable global state
2. ระบุ impure functions ที่ควรเป็น pure
3. ระบุ hidden side effects ใน functions
4. ระบุ direct DOM manipulation ที่ควรเป็น reactive
5. ระบุ direct API calls ที่ไม่ผ่าน abstraction layer

### 8. Check Circular Dependencies

ระบุ circular dependencies

1. รัน `bun run report:quality` เพื่อ detect circular dependencies
2. ระบุ modules ที่ import กันเป็นวงจร
3. ระบุ barrel file ที่ทำให้เกิด circular dependencies

### 9. Check Duplication

ระบุ code duplication

1. ทำ `/check-duplication` เพื่อ detect duplicate code ด้วย `jscpd`
2. ระบุ duplicate logic ที่ควร extract เป็น shared function
3. ระบุ duplicate types ที่ควร unify
4. ระบุ duplicate components ที่ควร merge
5. ระบุ duplicate validation logic ที่ควรใช้ schema ร่วมกัน
6. ระบุ duplicate error handling patterns ที่ควร abstract

### 10. Check Naming Conventions

วิเคราะห์ naming conventions ทั่ว codebase

1. ระบุชื่อที่ไม่สื่อความหมายหรือใช้ abbreviations ที่สับสน
2. ระบุ inconsistencies ใน naming patterns (files, functions, variables, types, components)
3. ทำ `/use-ast-grep` เพื่อ scan ชื่อที่ขัดกับ conventions:
   - Files ที่ไม่ใช้ `kebab-case.ts` หรือ `PascalCase.tsx`
   - Functions ที่ไม่ใช้ `camelCase` หรือขาด verb prefix
   - Types ที่ไม่ใช้ `PascalCase`
   - Constants ที่ไม่ใช้ `UPPER_SNAKE_CASE` (global)
4. ระบุ generic names ที่ไม่ชัดเจน (Manager, Handler, Processor, Utility, Helper)
5. เปรียบเทียบกับ conventions ใน `/improve-naming-convention` Rules section 3

### 11. Report Findings

รายงานผลการวิเคราะห์ทั้งหมด

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์เป็นตาราง
2. สรุป violations ทั้งหมดพร้อม location และ severity
3. จัดลำดับตาม critical path: type safety → SRP/SoC → naming conventions → dead code → hard code → anti-patterns → side effects → duplication
4. แนะนำการแก้ไขสำหรับแต่ละปัญหา

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม location และ severity
- ไม่แก้ไขโค้ดโดยตรง เว้นแต่ผู้ใช้สั่ง

### 2. SRP And SoC Indicators

- Classes/Functions ที่มี methods มากกว่า 7
- Files ที่มี lines มากกว่า 250
- Files ที่มี imports มากกว่า 10
- Files ที่มี functions มากกว่า 5
- Generic names ที่ไม่ชัดเจน (Manager, Handler, Processor, Utility, Helper)
- Files ที่มี "และ" ในชื่อหรือ description (mixed concerns)

### 3. Type Safety Indicators

- `any` types ที่ควรเป็น `unknown` หรือ proper types
- `@ts-ignore` และ `@ts-nocheck` ใน production code
- Type assertions ที่ไม่จำเป็น
- Missing type annotations ใน public APIs

### 4. Hard Code Indicators

- Magic numbers และ magic strings
- Hardcoded URLs, ports, endpoints
- Hardcoded credentials หรือ secrets
- Hardcoded file paths, timeouts, intervals

### 5. Anti-Pattern Indicators

- Callback hell
- Deep nesting (มากกว่า 3 levels)
- Long parameter lists (มากกว่า 4 parameters)
- Boolean flags ใน parameters
- Empty catch blocks
- Console.log ใน production code

### 6. Naming Convention Indicators

- Files ที่ไม่ใช้ `kebab-case.ts` หรือ `PascalCase.tsx`
- Functions ที่ไม่ใช้ `camelCase` หรือขาด verb prefix (get, set, handle, is, on, use)
- Types ที่ไม่ใช้ `PascalCase`
- Constants ที่ไม่ใช้ `UPPER_SNAKE_CASE` (global scope)
- Components ที่ไม่ใช้ `PascalCase`
- Generic names ที่ไม่ชัดเจน (Manager, Handler, Processor, Utility, Helper)
- Abbreviations ที่สับสนหรือไม่จำเป็น
- Inconsistent naming patterns ในไฟล์เดียวกันหรือ module เดียวกัน

### 7. Use Scripts For Batch Analysis

- ใช้ `/use-scripts` เมื่อต้องวิเคราะห์ไฟล์มากกว่า 10 ไฟล์
- ใช้ ast-grep outline สำหรับ structural analysis
- คำนวณ metrics ทั้งหมดใน script เดียวเพื่อ consistency

## Expected Outcome

- รายงานคุณภาพโค้ดครบทุกมิติ
- SRP และ SoC violations ระบุพร้อม location และ severity
- Type safety gaps ระบุชัดเจน
- Hard code ระบุพร้อม location
- Anti-patterns และ code smells ระบุครบถ้วน
- Dead code และ unused exports ระบุครบ
- Side effects ที่ไม่จำเป็นระบุชัดเจน
- Circular dependencies ระบุครบ
- Code duplication ระบุพร้อม recommendation
- Naming convention violations ระบุพร้อม recommendation
- จัดลำดับการแก้ไขตาม impact
- พร้อมสำหรับ `/improve-code-quality` หรือ `/refactor`
