---
title: Review Code Quality Core
description: Review คุณภาพโค้ด ครอบคลุม static analysis, refactoring, implementation completeness, และ health score
auto_execution_mode: 3
related:
  - /scan-codebase
  - /deep-analyze-with-use-scripts
  - /validate
  - /fix
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review คุณภาพโค้ดด้วย static analysis tools ครอบคลุม lint, typecheck, code patterns, refactoring opportunities, implementation completeness และสร้างรายงานตารางพร้อม metrics, health score และ action items

## Scope

lint, typecheck, code patterns, duplication, unused code, circular dependencies, file complexity, code smells, SRP violations, refactoring opportunities, TODO/MOCK/stub implementations, unfinished features, comment quality, correctness, naming conventions, redundancy, และ type safety

## Execute

### 1. Prepare

เตรียมความพร้อมก่อน review

1. ทำ `/scan-codebase` เพื่อเข้าใจ project structure และ tech stack
2. อ่าน `AGENTS.md` เพื่อทราบ tools ที่ใช้ใน project
3. ระบุ quality tools ที่มี: `biome`, `tsgo`, `ast-grep`, `knip`, `jscpd`, `madge`

### 2. Deep Analyze

รวบรวม metrics ผ่าน script automation

1. ทำ `/deep-analyze-with-use-scripts` เพื่อสร้าง `analyze-code-quality.ts` ใน `.devin/scripts/analyze/`
2. Script รัน static analysis tools แบบ parallel: lint, typecheck, ast-grep scan, knip, jscpd, madge
3. Script วิเคราะห์ code smells: `any` type, `console.log`, TODO/FIXME/HACK, ignore comments
4. Script ตรวจสอบ SRP violations, code duplication, long files, complex functions, และ coupling issues
5. Script ตรวจสอบ TODO, FIXME, MOCK, STUB, placeholder patterns, และ unimplemented interfaces
6. Script คำนวณ health score และ output เป็น structured JSON

### 3. Validate Findings

ตรวจสอบความถูกต้องของ findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity: Critical → High → Medium → Low
3. ระบุ false positives ที่พบ

### 4. Report

สร้างรายงานตารางตาม `/report-format-table`

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง **Quality Metrics Summary**: 14 metrics พร้อม count, threshold, status
3. สร้างตาราง **Findings by Category**: Category, Finding, Severity, Location, Recommendation
4. สร้างตาราง **Recommended Actions**: Priority, Action, Impact, Effort, Workflow
5. แสดง health score พร้อม progress bar และ grade
6. ทำ `/suggest-next-action` เพื่อแนะนำ action ถัดไป

## Rules

### 1. Severity Classification

- **Critical**: blocking production, security risk, data loss, circular dependency, core feature not implemented, MOCK in production path
- **High**: core functionality at risk, type safety violation, high duplication, long file ที่อ่านยาก, TODO in critical path, stub function in use
- **Medium**: code quality issue, minor gap, not following best practice, code smell, moderate coupling, TODO in non-critical path, partial implementation
- **Low**: cosmetic, naming, minor improvement

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number
- ไม่เดา ใช้ tools สำหรับ verification
- ระบุ false positives ที่พบ

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review
- แยก review process จาก fix process
- ถ้าต้องแก้ไข ให้ทำ `/fix` หลัง review

### 4. Health Score Formula

- 14 metrics หลัก แต่ละ metric มีน้ำหนักเท่ากัน
- คะแนนต่อ metric: ✅ = 1, ⚠️ = 0.5, ❌ = 0
- Health score = (total score / 14) × 100%
- Grade: A (90+), B (80+), C (70+), D (60+), F (<60)

### 5. Report Format

- ใช้ `/report` และ `/report-format-table` สำหรับ structured output
- ตอบในแชทเท่านั้น ไม่สร้างไฟล์แยก
- ใช้ symbols: ✅ ผ่าน, ❌ ไม่ผ่าน, ⚠️ มี warning

## Expected Outcome

- รายงานตาราง Quality Metrics Summary พร้อม status indicators
- รายงาน Findings by Category พร้อม severity และ location
- รายงาน Recommended Actions พร้อม priority และ workflow
- Health score พร้อม grade และ progress bar
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
