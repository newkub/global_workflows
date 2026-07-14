---
title: Review Refactor
description: Review refactor opportunities รวม SRP violations, duplication, complexity, coupling, และ code smells
auto_execution_mode: 3
related:
  - /deep-analyze-with-use-scripts
  - /scan-codebase
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
  - /comment-todo
---

## Goal

Review refactor opportunities รวม SRP violations, code duplication, file complexity, function complexity, coupling, dead code, naming conventions และ code smells

## Scope

รวม: SRP violations, mixed concerns, code duplication, long files, complex functions, tight coupling, dead code, naming conventions, code smells, anti-patterns, missing abstractions, และ refactoring recommendations

## Execute

### 1. Prepare

สแกน codebase เพื่อเข้าใจโครงสร้างและระบุ refactor candidates

1. ทำ `/scan-codebase` เพื่อเข้าใจ project structure และ codebase
2. ระบุ refactoring tools ที่มี: `biome`, `ast-grep`, `knip`, `jscpd`, `madge`
3. ถ้าสแกนไม่ได้ → stop และ report

### 2. Deep Analyze

วิเคราะห์ refactor opportunities อย่างลึกซึ้งด้วย scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อสร้าง `analyze-refactor.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ SRP violations: mixed concerns, God modules, multiple reasons to change
3. Script ตรวจสอบ code duplication ด้วย `jscpd` และระบุ duplicate blocks
4. Script ตรวจสอบ file complexity: files เกิน 250 บรรทัด, functions ที่ซับซ้อนเกินไป
5. Script ตรวจสอบ coupling: tight coupling, circular dependencies ด้วย `madge`
6. Script ตรวจสอบ dead code และ unused exports ด้วย `knip`
7. Script ตรวจสอบ code smells: `any` type, `console.log`, ignore comments, magic numbers
8. Script ตรวจสอบ naming conventions และ anti-patterns ด้วย `ast-grep`
9. Script ตรวจสอบ missing abstractions และ inline logic ที่ควร extract
10. Script คำนวณ refactor health score และ output เป็น structured JSON
11. ถ้า script ไม่ผ่าน → แก้ไข script แล้ว re-run ถ้าไม่ผ่านหลังจาก 3 ครั้ง → stop และ report

### 3. Validate Findings

ตรวจสอบความถูกต้องของ findings ก่อน report

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity: Critical → High → Medium → Low
3. ระบุ false positives ที่พบ
4. ถ้า validation ไม่ผ่าน → กลับไปแก้ที่ Step 2

### 4. Report

รายงานผลการ review ในแชท

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง **Refactor Metrics Summary**: SRP violations, duplication %, long files, complex functions, coupling issues, dead code, code smells
3. สร้างตาราง **Findings by Category**: Category, Finding, Severity, Location, Recommendation
4. สร้างตาราง **Recommended Refactors**: Priority, Refactor Action, Impact, Effort, Workflow
5. แสดง refactor health score พร้อม progress bar และ grade
6. ทำ `/suggest-next-action` เพื่อแนะนำ action ถัดไป

## Rules

### 1. Severity Classification

- **Critical**: circular dependency, God module เกิน 500 บรรทัด, core feature ในไฟล์ผิด layer
- **High**: SRP violation ใน critical path, duplication เกิน 50 lines, tight coupling ระหว่าง modules
- **Medium**: code smell, long file 250+ บรรทัด, missing abstraction, moderate coupling
- **Low**: naming convention, minor code smell, cosmetic improvement

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number
- ไม่เดา ใช้ tools สำหรับ verification (`jscpd`, `madge`, `knip`, `ast-grep`)
- ระบุ false positives ที่พบ

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review
- ใช้ `/comment-todo` สำหรับระบุ issues ใน code
- แยก review process จาก refactor process
- ถ้าต้อง refactor ให้ทำ `/refactor` หลัง review

### 4. Health Score Formula

- 7 metrics หลัก: SRP violations, duplication, long files, complex functions, coupling, dead code, code smells
- คะแนนต่อ metric: ✅ = 1, ⚠️ = 0.5, ❌ = 0
- Health score = (total score / 7) × 100%
- Grade: A (90+), B (80+), C (70+), D (60+), F (<60)

## Expected Outcome

- รายงานตาราง Refactor Metrics Summary พร้อม status indicators
- รายงาน Findings by Category พร้อม severity และ location
- รายงาน Recommended Refactors พร้อม priority และ workflow
- Refactor health score พร้อม grade และ progress bar
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
