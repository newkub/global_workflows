---
title: Deep Analyze With Use Scripts
description: วิเคราะห์โปรเจกต์ด้วย tools/health CLI, @ast-grep/napi และ ast-grep outline
auto_execution_mode: 3
related:
  - /analyze-project
  - /deep-report
  - /update-health-cli
url:
  - https://astgrep.com/guide/api-usage/js-api
  - https://astgrep.com/blog/ast-grep-outline
---

## Goal

วิเคราะห์โปรเจกต์อย่างลึกซึ้งครบทุกมิติด้วย `tools/health` CLI, `@ast-grep/napi` และ `ast-grep outline`

## Scope

ใช้สำหรับ deep analysis ที่ต้องการ data processing ซับซ้อน หรือ metrics calculation ที่ต้อง aggregation ครอบคลุม structural analysis ด้วย AST — ไม่ใช้สำหรับสร้างหรืออัปเดท analyzers (ใช้ `/update-health-cli`)

## Execute

### 1. Analyze Project

วิเคราะห์โปรเจกต์พื้นฐานและสร้าง structural overview ด้วย `ast-grep outline`

> Goal: มี foundation สำหรับ deep analysis

1. ทำ `/analyze-project` เพื่อวิเคราะห์โปรเจกต์พื้นฐานด้วย tools ที่เหมาะสม
2. รัน `bunx ast-grep outline <path>` เพื่อสร้าง structural overview ของ source files
   - `bunx ast-grep outline apps/website/src` — สรุป exports, imports, classes, functions
   - `bunx ast-grep outline <path> --match <symbol> --view expanded` — focus ที่ symbol เฉพาะ
3. ใช้ผลลัพธ์จาก step 1-2 เป็น foundation สำหรับ deep analysis

### 2. Run Health CLI And NAPI Analysis

รัน health CLI และใช้ `@ast-grep/napi` สำหรับ AST-based deep analysis

> Goal: มี metrics และ AST analysis ครบสำหรับ deep report

1. รัน `bun --filter @booking/tools-health health:json` เพื่อดึง health report เป็น JSON
2. ถ้าไม่มี health CLI → ทำ `/update-health-cli` ก่อน แล้วกลับมาทำ step นี้ใหม่
3. ใช้ `@ast-grep/napi` สำหรับ programmatic AST analysis ใน scripts — **ไม่ต้องติดตั้ง**: Bun auto-install บน `import`
   - `import { Lang, parse, kind } from '@ast-grep/napi'` — Bun ติดตั้งอัตโนมัติเมื่อ import
   - สำหรับ non-Bun environment ใช้ `@ast-grep/wasm` ผ่าน CDN: `import { parse } from 'https://esm.sh/@ast-grep/wasm'`
   - ดู https://astgrep.com/guide/api-usage/js-api สำหรับ API reference
4. สร้าง analyzer ใหม่ใน `tools/health/src/domain/analyzers/` ถ้าต้องการเพิ่ม category
5. รวบรวม metrics จาก knip, biome, vitest, madge, `ast-grep scan`, `@ast-grep/napi`
6. รัน `bun --filter @booking/tools-health health:json` อีกครั้งหลังเพิ่ม analyzer และ process results

### 3. Deep Report Findings

จัดรูปแบบผลลัพธ์เป็น deep report ตาราง 7 columns พร้อม deep summary 5 ส่วน

> Goal: Deep report ที่ actionable และตรวจสอบได้

1. ทำ `/deep-report` เพื่อจัดรูปแบบผลลัพธ์เป็นตาราง 7 columns: Scope, File, Cause, Solutions, Severity, Review Workflow, Evidence
2. จัดกลุ่มตาม `reviewWorkflow` และเรียงลำดับตาม severity: Critical > High > Medium > Low
3. สร้าง deep summary 5 ส่วน: Domain Breakdown, Severity Distribution, Analyzer Changes, False Positive Analysis, Recommended Actions
4. ระบุ action items จัดลำดับตาม priority: quick wins ก่อน, major improvements รองลงมา

## Rules

### Ast-Grep NAPI Usage

- `@ast-grep/napi` เป็น native addon (napi.rs) — Bun auto-install บน `import` โดยไม่ต้อง `bun add`
- `@ast-grep/wasm` เป็น WASM version — ใช้ผ่าน CDN ได้: `import { parse } from 'https://esm.sh/@ast-grep/wasm'`
- `parse(Lang.TypeScript, source)` สร้าง `SgRoot`
- `root.find('console.log($A)')` ค้นหา pattern แรกที่ match
- `root.findAll('function $A($$$) { $$$ }')` ค้นหาทุก pattern ที่ match
- `node.getMatch('A')` ดึง single meta variable — `node.getMultipleMatches('ARGS')` ดึง multi meta variable
- `node.range()` ดึง start/end position (line, column, offset — 0-indexed)
- `node.replace(text)` สร้าง `Edit` object — `node.commitEdits(edits)` apply edits และ return new source string

### Ast-Grep Outline Usage

- `bunx ast-grep outline <file>` — สรุป functions, classes, imports, exports, members
- `bunx ast-grep outline <directory>` — สรุป exported surface ของ directory
- `bunx ast-grep outline <file> --match <symbol> --view expanded` — focus ที่ symbol เฉพาะ
- Outline entries: name, symbolType, source range, first-line signature, AST kind, import/export flags
- ไม่มี index building, ไม่มี cross-file analysis — parse ใหม่ทุกครั้ง (alpha preview, ast-grep 0.44.0+)

### Health CLI Structure

- Health CLI อยู่ใน `tools/health/` workspace — entry point: `tools/health/src/presentation/cli.ts`
- Analyzers อยู่ใน `tools/health/src/domain/analyzers/` — ใช้ Bun native APIs: `Bun.glob`, `Bun.file`, `Bun.$`, `Bun.spawn`
- ใช้ `Promise.allSettled` สำหรับ parallel analyzer execution

### Output Format

- Health CLI output เป็น JSON หรือ table format
- Deep report ใช้ตาราง 7 columns: Scope, File, Cause, Solutions, Severity, Review Workflow, Evidence
- ทุก finding ต้องมี evidence ที่ตรวจสอบได้ — ถ้าเป็น false positive ให้ระบุใน column Cause

## Expected Outcome

- Health CLI JSON report พร้อม metrics ครบถ้วน
- Structural overview ด้วย `ast-grep outline`
- Deep report ตาราง 7 columns พร้อม evidence ที่ตรวจสอบได้
- Deep summary 5 ส่วน: Domain Breakdown, Severity Distribution, Analyzer Changes, False Positive Analysis, Recommended Actions
- Action items จัดลำดับตาม priority: quick wins ก่อน, major improvements รองลงมา
