---
title: Review Code Quality
description: Review code quality ครอบคลุม static analysis, architecture, types, naming, refactor, techstack, dependencies พร้อม health score
auto_execution_mode: 3
related:
  - /scan-codebase
  - /deep-analyze-codebase
  - /review-architecture
  - /review-types
  - /review-naming
  - /review-filesystem
  - /review-refactor
  - /review-bug-prone
  - /review-hardcode
  - /review-deprecation
  - /review-realize-implementation
  - /review-techstack
  - /review-dependencies
  - /validate
  - /fix
  - /simplify
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review code quality ครอบคลุมทุก dimension ผ่าน static analysis และ sub-workflows พร้อม aggregate findings, health score และ action items

## Scope

code quality review สำหรับ: static analysis (lint, typecheck, code smells, duplication, unused code, circular dependencies, file complexity, SRP violations, refactoring, implementation completeness), architecture, types, naming, filesystem, refactor, bug-prone, hardcode, deprecation, realize implementation, techstack, dependencies

## Execute

### 1. Prepare

เตรียมความพร้อมก่อน review

> Goal: เข้าใจ project structure, tools และ scope

1. ทำ `/scan-codebase` เพื่อเข้าใจ project structure และ tech stack
2. อ่าน `AGENTS.md` เพื่อทราบ tools ที่ใช้ใน project
3. ระบุ quality tools ที่มี: `biome`, `tsgo`, `ast-grep`, `knip`, `jscpd`, `madge`

### 2. Deep Analyze

รวบรวม metrics ผ่าน script automation และ sub-workflows

> Goal: รวบรวม findings จากทุก dimension พร้อม health score

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง analysis script
2. Script รัน static analysis tools แบบ parallel: lint, typecheck, ast-grep scan, knip, jscpd, madge
3. Script วิเคราะห์ code smells: `any` type, `console.log`, TODO/FIXME/HACK, ignore comments
4. Script ตรวจสอบ SRP violations, code duplication, long files, complex functions, และ coupling issues
5. Script ตรวจสอบ TODO, FIXME, MOCK, STUB, placeholder patterns, และ unimplemented interfaces
6. Script คำนวณ health score และ output เป็น structured JSON
7. ทำ `/review-architecture` เพื่อ review patterns, boundaries, coupling, concurrency, scalability
8. ทำ `/review-types` เพื่อ review generics, type inference, discriminated unions, branded types, type narrowing
9. ทำ `/review-naming` เพื่อ review naming conventions, code/API/database/file naming consistency
10. ทำ `/review-filesystem` เพื่อ review file structure, directory organization, module boundaries, import paths
11. ทำ `/review-refactor` เพื่อ review SRP violations, duplication, complexity, coupling, dead code, code smells
12. ทำ `/review-bug-prone` เพื่อ review null safety, type assertions, exhaustive control flow, async/promise bugs
13. ทำ `/review-hardcode` เพื่อ review magic numbers, hardcoded strings, URLs, paths, secrets, business rules
14. ทำ `/review-deprecation` เพื่อ review deprecation policy, backward compatibility, migration guides, breaking changes
15. ทำ `/review-realize-implementation` เพื่อ review TODO, MOCK, STUB, placeholder, unfinished features
16. ทำ `/review-techstack` เพื่อ review framework, library, runtime compatibility, technology alignment
17. ทำ `/review-dependencies` เพื่อ review versions, vulnerabilities, unused packages

### 3. Validate Findings

ตรวจสอบความถูกต้องของ findings จากทุก source

> Goal: Findings ถูกต้อง จัดลำดับชัดเจน ไม่มี false positives

1. ทำ `/validate` สำหรับ validate issues จาก script และ sub-workflows
2. จัดลำดับการ validate ตาม severity: Critical → High → Medium → Low
3. ระบุ false positives ที่พบ

### 4. Simplify Findings

ทำให้ findings อ่านง่าย ไม่ซ้ำซ้อน กรอง noise

> Goal: Findings กระชับ อ่านง่าย ไม่มี noise

1. ทำ `/simplify` กับ findings ก่อน report — ลดความซับซ้อนโดยไม่เสีย context สำคัญ
2. กรอง findings ที่เป็น noise หรือ low-value ออกจาก report หลัก
3. รวม findings ที่ซ้ำกันจากหลาย sub-workflows เป็น single finding
4. จัดกลุ่ม findings ที่เกี่ยวข้องเข้าด้วยกันเพื่ออ่านง่าย

### 5. Report

สร้างรายงานตารางตาม `/report-format-table`

> Goal: รายงานชัดเจน ครบทุก dimension พร้อม health score

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

### 5. Aggregation

- รวม findings จาก script และ sub-workflows เป็น single report
- ไม่ duplicate findings — ถ้าหลาย source เจอ issue เดียวกัน ให้รวมเป็นหนึ่ง
- จัดลำดับ findings ตาม severity และ impact

### 6. Skip Conditions

- ข้าม sub-workflow ที่ไม่เกี่ยวข้องกับ project เช่น ไม่มี TypeScript → ข้าม `/review-types`
- ถ้าพบ critical issues ระหว่าง sub-workflow → หยุดและ validate ก่อนดำเนินต่อ

### 7. Report Format

- ใช้ `/report` และ `/report-format-table` สำหรับ structured output
- ตอบในแชทเท่านั้น ไม่สร้างไฟล์แยก
- ใช้ symbols: ✅ ผ่าน, ❌ ไม่ผ่าน, ⚠️ มี warning

## Expected Outcome

- รายงานตาราง Quality Metrics Summary พร้อม status indicators
- รายงาน Findings by Category พร้อม severity และ location
- รายงาน Recommended Actions พร้อม priority และ workflow
- Health score พร้อม grade และ progress bar
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
