---
title: Review Code Quality
description: Orchestrator สำหรับ review code quality ครอบคลุม static analysis, architecture, types, naming, refactor, techstack, dependencies
auto_execution_mode: 3
related:
  - /review-code-quality-core
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
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Orchestrate code quality review ครอบคลุมทุก dimension ของ code quality ผ่าน sub-workflows พร้อม aggregate findings

## Scope

code quality orchestrator สำหรับ: static analysis, architecture, types, naming, filesystem, refactor, bug-prone, hardcode, deprecation, realize implementation, techstack, dependencies

## Execute

### 1. Run Sub-Workflows

ทำ review-* sub-workflows ตามลำดับ ถ้าพบ critical issues ให้หยุดและ validate ก่อนดำเนินต่อ

1. ทำ `/review-code-quality-core` เพื่อ review lint, typecheck, code smells, duplication, refactoring, implementation completeness
2. ทำ `/review-architecture` เพื่อ review patterns, boundaries, coupling, concurrency, scalability
3. ทำ `/review-types` เพื่อ review generics, type inference, discriminated unions, branded types, type narrowing
4. ทำ `/review-naming` เพื่อ review naming conventions, code/API/database/file naming consistency
5. ทำ `/review-filesystem` เพื่อ review file structure, directory organization, module boundaries, import paths
6. ทำ `/review-refactor` เพื่อ review SRP violations, duplication, complexity, coupling, dead code, code smells
7. ทำ `/review-bug-prone` เพื่อ review null safety, type assertions, exhaustive control flow, async/promise bugs
8. ทำ `/review-hardcode` เพื่อ review magic numbers, hardcoded strings, URLs, paths, secrets, business rules
9. ทำ `/review-deprecation` เพื่อ review deprecation policy, backward compatibility, migration guides, breaking changes
10. ทำ `/review-realize-implementation` เพื่อ review TODO, MOCK, STUB, placeholder, unfinished features
11. ทำ `/review-techstack` เพื่อ review framework, library, runtime compatibility, technology alignment
12. ทำ `/review-dependencies` เพื่อ review versions, vulnerabilities, unused packages

### 2. Validate Findings

1. ทำ `/validate` สำหรับ validate issues จากทุก sub-workflow
2. จัดลำดับการ validate ตาม severity: Critical → High → Medium → Low

### 3. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง aggregate findings จากทุก sub-workflow
3. ทำ `/suggest-next-action`

## Rules

### 1. Skip Conditions

- ถ้า project ไม่มี TypeScript ให้ข้าม `/review-types`
- ถ้า project ไม่มี file structure ให้ข้าม `/review-filesystem`
- ถ้า project ไม่มี code ที่ต้อง refactor ให้ข้าม `/review-refactor`
- ถ้า project ไม่มี bug-prone code risks ให้ข้าม `/review-bug-prone`
- ถ้า project ไม่มี hardcoded values ให้ข้าม `/review-hardcode`
- ถ้า project ไม่มี deprecation ให้ข้าม `/review-deprecation`
- ถ้า project ไม่มี TODO/MOCK/STUB/placeholder ให้ข้าม `/review-realize-implementation`
- ถ้า project ไม่มี tech stack ให้ข้าม `/review-techstack`
- ถ้า project ไม่มี dependencies ให้ข้าม `/review-dependencies`

### 2. Delegation

- Orchestrator เรียก sub-workflows เท่านั้น ไม่ทำ review เอง
- ไม่ duplicate เนื้อหา sub-workflows

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง aggregate findings จากทุก code quality sub-workflow
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
