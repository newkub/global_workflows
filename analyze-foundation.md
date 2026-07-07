---
title: Analyze Foundation
description: วิเคราะห์ structure, patterns และ foundation quality 19 หมวด
auto_execution_mode: 3
related_workflows:
  - /analyze-structure
  - /use-ast-grep
  - /check-long-files
  - /check-duplication
  - /improve-naming-convention
  - /improve-consistency
  - /improve-config
  - /improve-redundancy
  - /improve-state-management
  - /improve-testing
  - /improve-documentation
  - /improve-api-design
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ structure และ foundation patterns เพื่อระบุปัญหาที่รากฐานของ codebase

## Scope

SRP, SoC, type safety, hard code, anti-patterns, code smells, dead code, side effects, circular dependencies, duplication, naming, consistency, complexity, dependency structure, reusability, configuration quality, state management, test quality, documentation quality, และ API design quality

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม foundation metrics ผ่าน scripts (type safety scan, anti-pattern detection, complexity analysis)

### 2. Analyze Structure And SRP

1. ทำ `/analyze-structure` เพื่อดูโครงสร้างโปรเจกต์
2. ทำ `/check-long-files` เพื่อระบุไฟล์ที่ยาวกว่า 250 บรรทัด
3. รัน `sg outline <file>.ts` เพื่อดูจำนวน functions/classes ในแต่ละไฟล์
4. จัดประเภท violations: God class, Mixed concerns, Kitchen sink, Fat module, Tight coupling

### 3. Analyze Type Safety

1. ระบุ `any` types ที่ควรเป็น `unknown` หรือ proper types
2. ระบุ missing type annotations ใน public APIs
3. ระบุ type assertions ที่ไม่จำเป็น (`as any`, `as unknown`)
4. ตรวจสอบ type flow: schema → validation → API types → UI types
5. ระบุ `@ts-ignore` และ `@ts-nocheck` ที่ควรแก้ไข

### 4. Detect Hard Code

1. ระบุ magic numbers และ magic strings
2. ระบุ hardcoded URLs, ports, และ endpoints
3. ระบุ hardcoded credentials หรือ secrets
4. ระบุ hardcoded file paths, timeouts, และ intervals

### 5. Detect Anti-Patterns And Code Smells

1. ทำ `/use-ast-grep` เพื่อ scan: callback hell, deep nesting, long parameter lists, boolean flags, empty catch blocks, `console.log` ใน production
2. ระบุ code smells: duplicate code, long methods, large classes, feature envy, data clumps, primitive obsession

### 6. Detect Dead Code

1. รัน `bun run knip` เพื่อ detect unused files, exports, และ dependencies
2. ระบุ unreachable code, unused variables, commented-out code, unused private methods

### 7. Analyze Side Effects

1. ระบุ mutable global state
2. ระบุ impure functions ที่ควรเป็น pure
3. ระบุ hidden side effects ใน functions
4. ระบุ direct DOM manipulation ที่ควรเป็น reactive
5. ระบุ direct API calls ที่ไม่ผ่าน abstraction layer

### 8. Check Circular Dependencies

1. รัน `bun run report:quality` เพื่อ detect circular dependencies
2. ระบุ modules ที่ import กันเป็นวงจร
3. ระบุ barrel file ที่ทำให้เกิด circular dependencies

### 9. Check Duplication

1. ทำ `/check-duplication` เพื่อ detect duplicate code ด้วย `jscpd`
2. ระบุ duplicate logic, types, components, validation, error handling ที่ควร extract หรือ unify

### 10. Check Naming Conventions

1. ระบุชื่อที่ไม่สื่อความหมายหรือ abbreviations ที่สับสน
2. ทำ `/use-ast-grep` เพื่อ scan ชื่อที่ขัดกับ conventions (files, functions, types, constants, components)
3. ระบุ generic names (Manager, Handler, Processor, Utility, Helper)

### 11. Check Consistency

1. ระบุ import ordering, file structure patterns, error response format ที่ไม่ consistent
2. ระบุ code style และ patterns ที่ทำต่างกันในที่เดียวกัน

### 12. Analyze Complexity Metrics

1. คำนวณ cyclomatic complexity ต่อ function (threshold > 10)
2. คำนวณ cognitive complexity ต่อ function (threshold > 15)
3. ระบุ nesting depth > 4, fan-out > 7, parameters > 4

### 13. Analyze Dependency Structure

1. คำนวณ fan-in/fan-out ต่อ module
2. ระบุ dependency direction violations และ deep dependency chains (depth > 5)
3. ระบุ modules ที่มี coupling สูง (imports > 10) และ barrel files ที่ไม่จำเป็น

### 14. Analyze Reusability And Abstraction

1. ระบุ over-abstraction (premature generalization, interfaces ที่มี implementor เดียว)
2. ระบุ under-abstraction (copy-paste แทน extract)
3. ระบุ leaky abstractions และ interface design ที่ไม่ชัดเจน
4. ระบุ components ที่ไม่ reusable (hardcoded props, tight coupling)

### 15. Analyze Configuration Quality

1. ระบุ config sprawl และ config duplication ข้าม modules
2. ระบุ missing env validation ที่ startup
3. ระบุ hardcoded config ที่ควรเป็น env var
4. ระบุ missing config type safety และ missing config documentation

### 16. Analyze State Management

1. ระบุ state coupling ระหว่าง components ที่ไม่จำเป็น
2. ระบุ derived state ที่ควรเป็น memo แทน signal
3. ระบุ store organization ที่ไม่ชัดเจน
4. ระบุ state ที่ควรเป็น local แต่เป็น global และในทางกลับกัน
5. ระบุ prop drilling ที่ควรใช้ context/store

### 17. Analyze Test Quality

1. ระบุ test smells (no assertion, multiple concerns, test interdependence)
2. ระบุ test naming ที่ไม่สื่อความหมาย
3. ระบุ assertion quality (assert แค่ truthy แทน specific value)
4. ระบุ test isolation issues (shared state, order dependency)
5. ระบุ missing edge case tests (null, undefined, empty, boundary)

### 18. Analyze Documentation Quality

1. ระบุ public APIs ที่ขาด JSDoc/TSDoc
2. ระบุ comments ที่ outdated หรือ misleading
3. ระบุ missing module-level documentation
4. ระบุ complex functions ที่ขาด explanation
5. ระบุ TODO/FIXME ที่ค้างนาน

### 19. Analyze API Design Quality

1. ระบุ endpoint naming ที่ไม่ consistent (REST conventions)
2. ระบุ response shape ที่ไม่ consistent ข้าม endpoints
3. ระบุ missing API versioning strategy
4. ระบุ input/output types ที่ไม่ match ระหว่าง client และ server
5. ระบุ over-fetching/under-fetching และ missing pagination

### 20. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม critical path: type safety → API design → state management → SRP/SoC → complexity → dependency → test quality → documentation → dead code → hard code → anti-patterns → side effects → duplication → naming → consistency → reusability → config

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม location และ severity
- ไม่แก้ไขโค้ดโดยตรง เว้นแต่ผู้ใช้สั่ง

### 2. SRP And Structure Indicators

- Classes ที่มี methods > 7, Files ที่มี lines > 250 หรือ imports > 10
- Generic names ที่ไม่ชัดเจน (Manager, Handler, Processor, Utility, Helper)
- Files ที่มี "และ" ในชื่อหรือ description (mixed concerns)

### 3. Type Safety Indicators

- `any` types ที่ควรเป็น `unknown` หรือ proper types
- `@ts-ignore` และ `@ts-nocheck` ใน production code
- Type assertions ที่ไม่จำเป็น

### 4. Complexity Indicators

- Cyclomatic complexity > 10, Cognitive complexity > 15
- Nesting depth > 4, Fan-out > 7, Parameters > 4

### 5. Dependency Indicators

- Fan-in/fan-out ที่ไม่สมดุล, Direction violations
- Deep chains (depth > 5), Coupling สูง (imports > 10)

### 6. State Management Indicators

- State coupling ที่ไม่จำเป็น, Derived state ที่ควรเป็น memo
- Prop drilling ที่ควรใช้ context/store
- State ที่ควรเป็น local แต่เป็น global และในทางกลับกัน

### 7. Test Quality Indicators

- Tests ที่ไม่มี assertion หรือ assert แค่ truthy
- Test interdependence และ order dependency
- Missing edge case tests (null, undefined, empty, boundary)

### 8. API Design Indicators

- Endpoint naming ที่ไม่ consistent
- Response shape ที่ไม่ standard, Missing API versioning
- Over-fetching/under-fetching, Missing pagination

### 9. Use Scripts For Batch Analysis

- ใช้ `/use-scripts` เมื่อต้องวิเคราะห์ไฟล์มากกว่า 10 ไฟล์
- ใช้ ast-grep outline สำหรับ structural analysis

## Expected Outcome

- Foundation issues ระบุพร้อม location และ severity
- Structure และ type safety violations จัดลำดับตาม critical path
- พร้อมสำหรับ `/refactor` หรือ `/improve-codebase`
