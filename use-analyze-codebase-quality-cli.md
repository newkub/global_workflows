---
title: Use Analyze Codebase Quality CLI
description: ใช้ CLI วิเคราะห์ codebase quality ครบทุกด้าน ผ่าน command line
auto_execution_mode: 3
related_workflows:
  - /analyze-codebase-quality
  - /follow-create-bun-cli
  - /follow-bunup
  - /report-format-table
  - /improve-codebase
  - /refactor
---

## Goal

วิเคราะห์ codebase quality ครบทุกด้านด้วย `analyze-codebase-quality` CLI ที่สร้างด้วย Bun

## Scope

วิเคราะห์ structure, foundation, runtime, UX, localization, features, errors, และ missing implementation ผ่าน CLI ที่รันด้วย Bun runtime

## Execute

### 1. Build CLI

1. รัน `bun --filter @analyze-codebase-quality/shared build` เพื่อ build shared package
2. รัน `bun --filter analyze-codebase-quality build` เพื่อ build CLI
3. ตรวจสอบ output ใน `apps/cli/dist/` ว่ามี `cli.js` และ `index.js`

### 2. Run Analysis

1. รัน `bun run apps/cli/dist/cli.js <project-path>` สำหรับ analyze แบบเต็ม
2. ใช้ `--category=<name>` สำหรับ analyze เฉพาะหมวด เช่น `--category=structure`
3. ใช้ `--json` สำหรับ output เป็น JSON format
4. ใช้ `--output=<path>` สำหรับ save report ลงไฟล์

### 3. Interpret Results

1. ตรวจสอบ summary: total issues, critical, high, medium, low
2. จัดลำดับตาม severity: critical → high → medium → low
3. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
4. ใช้ผลลัพธ์เป็น input สำหรับ `/improve-codebase` หรือ `/refactor`

### 4. Act On Findings

1. ถ้าพบ critical issues: ทำ `/resolve-errors` ทันที
2. ถ้าพบ structure issues: ทำ `/refactor` หรือ `/restructure`
3. ถ้าพบ missing implementation: ทำ `/realize-implementation`
4. ถ้าพบ foundation issues: ทำ `/improve-codebase`

## Rules

### 1. CLI Usage

- รันจาก project root เสมอ
- Build shared package ก่อน build CLI
- ใช้ `bun run dist/cli.js` ไม่ใช่ `node dist/cli.js`
- รองรับ output formats: text (default), JSON (`--json`)
- รองรับ single category: `--category=structure|foundation|runtime|ux|localization|features|errors|missing-implementation`

### 2. Analysis Categories

- **structure**: file length, import count, SRP violations, naming conventions, barrel exports
- **foundation**: type safety, hard code, anti-patterns, dead code, side effects, complexity, naming
- **runtime**: error handling, async patterns, boundary validation, concurrency, resource management, logging, performance, security
- **ux**: WCAG compliance, ARIA usage, keyboard navigation, interaction patterns, responsive behavior (frontend only)
- **localization**: hardcoded strings, RTL support, locale handling, pluralization (frontend only)
- **features**: feature completeness, documentation, tests, dependencies, isolation (complex projects only)
- **errors**: build artifacts, test failures, lint errors, type errors, error patterns (if error indicators exist)
- **missing-implementation**: TODO/MOCK/placeholder, missing types, missing validation, infrastructure gaps

### 3. Thresholds

- `maxFileLines`: 250 (default)
- `maxImports`: 10 (default)
- `maxMethods`: 7 (default)
- `maxComplexity`: 10 (default)
- ปรับ thresholds ได้ผ่าน CLI flags: `--max-file-lines`, `--max-imports`, `--max-methods`, `--max-complexity`

### 4. Output Handling

- ใช้ `--output=report.md` สำหรับ save ลงไฟล์
- ใช้ `--json` สำหรับ pipe ไปยัง tools อื่น
- ใช้ผลลัพธ์เป็น input สำหรับ `/improve-codebase` หรือ `/refactor`

### 5. Development

- ทำ `/follow-create-bun-cli` สำหรับ structure มาตรฐาน
- ทำ `/follow-bunup` สำหรับ build configuration
- ใช้ `bunx bunup --watch` สำหรับ development
- ใช้ `bun test` สำหรับ testing

## Expected Outcome

- รายงาน codebase quality ครบทุกด้าน
- Issues จัดลำดับตาม severity และ category
- พร้อมสำหรับ `/improve-codebase` หรือ `/refactor`
- รองรับ CI/CD ผ่าน JSON output
