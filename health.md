---
title: Health
description: วิเคราะห์สุขภาพโปรเจกต์อย่างครบถ้วนและรายงานผลในรูปแบบตารางที่อ่านง่าย
auto_execution_mode: 3
related_workflows:
  - /deep-analyze-with-use-scripts
  - /report-format-table
  - /improve-code-quality
  - /refactor
  - /analyze-code-quality
  - /realize-implementation
---

## Goal

วิเคราะห์สุขภาพโปรเจกต์อย่างครบถ้วนและรายงานผลในรูปแบบตารางที่อ่านง่าย

## Scope

ใช้สำหรับการตรวจสอบสุขภาพโปรเจกต์ทุกประเภท รวมถึง:
- โครงสร้างและ architecture
- Dependencies และ security
- Code quality และ maintainability
- Performance และ optimization
- Testing และ coverage

## Execute

### 1. Analyze Project

1. ทำ `/analyze-project` เพื่อวิเคราะห์โปรเจกต์อย่างครบถ้วน
2. รวบรวมข้อมูลทั้งหมดจากการวิเคราะห์
3. จัดกลุ่มข้อมูลตามหมวดหมู่ที่เกี่ยวข้อง

### 2. Prepare Data

1. แยกข้อมูลเป็น categories หลัก (40+ categories ครอบคลุม structure, dependencies, code quality, testing, performance, documentation, configuration, CI/CD, git, error handling, logging, API, state, security, accessibility, i18n, monitoring, duplication, technical debt, separation of concerns, type safety, circular dependencies, hard code, naming, reusability, side effects, SRP, constants, types, utils, workspace, shared packages, import alias, barrel files, mock detection, production readiness, schema, database, API, UX/UI, type flow, infrastructure)
2. กำหนด metrics และ status indicators สำหรับแต่ละ category
3. วิเคราะห์ข้อมูลลึกซึ้งด้วย tools (knip, taze, biome, oxlint, vitest, madge, ast-grep)
4. ตรวจสอบ code quality: TODO/FIXME/HACK, console logs, test coverage, README, config files, build config
5. ตรวจสอบ code structure: MOCK/FAKE/STUB, hardcoded values, circular dependencies, file sizes, function sizes, `any` types
6. ตรวจสอบ production readiness: type flow (DB→Zod→API→UI), DB schema, API handlers, UX/UI components
7. ทำ `/analyze-code-quality` เพื่อตรวจสอบ SRP, SoC, type safety, hard code, anti-patterns, code smells, dead code, side effects, naming conventions

### 3. Format Table

1. ทำ `/report-format-table` เพื่อจัดรูปแบบตาราง
2. กำหนด columns ดังนี้:
   - **No.** ลำดับ
   - **Metric** ตัวชี้วัด
   - **Value** ค่าที่วัดได้
   - **Status** สถานะ (✅/❌/⚠️)
   - **Severity** ความรุนแรง (High/Medium/Low)
   - **Location** ตำแหน่งที่พบ
   - **Recommendation** ข้อเสนอแนะ
3. จัดเรียง columns ตามความสำคัญ

### 4. Group And Sort

1. จัดกลุ่มข้อมูลตาม category ที่เกี่ยวข้อง
2. ใช้ headers สำหรับ grouping
3. เรียงลำดับภายในกลุ่มตามความรุนแรง (Severity)
4. ใช้ separators สำหรับแยกกลุ่มที่ชัดเจน

## Rules

### Table Structure

ทำตาม `/report-format-table` สำหรับโครงสร้างตาราง

- ใช้ numbered columns สำหรับลำดับที่ชัดเจน
- ใช้ headers ชัดเจนสำหรับแต่ละ column
- จัดเรียง columns ตามความสำคัญ
- ใช้ alignment ที่เหมาะสมกับ data types

### Content Formatting

ทำตาม `/report-format-table` สำหรับการจัดรูปแบบเนื้อหา

- ใช้ markdown table format มาตรฐาน
- ใช้ bold สำหรับ headers และ keywords สำคัญ
- ใช้ code blocks สำหรับ `commands` และ `file paths`
- ใช้ backticks สำหรับ inline code
- ใช้ symbols (✅, ❌, ⚠️) สำหรับ status indicators

### Grouping and Sorting

ทำตาม `/report-format-table` สำหรับการจัดกลุ่มและเรียงลำดับ

- จัดกลุ่มข้อมูลตาม category ที่เกี่ยวข้อง
- ใช้ headers สำหรับ grouping
- เรียงลำดับภายในกลุ่มตามความรุนแรง (Severity)
- ใช้ separators สำหรับแยกกลุ่มที่ชัดเจน

### Readability

ทำตาม `/report-format-table` สำหรับความอ่านง่าย

- ตารางต้องอ่านง่ายบนทุก device
- Columns ไม่กว้างเกินไป
- Rows ไม่ยาวเกินไป
- Formatting สอดคล้องกันทั้งตาราง

## Expected Outcome

- รายงานสุขภาพโปรเจกต์ที่ครบถ้วนครอบคลุม 40+ categories
- ตารางที่มีโครงสร้างสอดคล้องและจัดกลุ่มชัดเจน
- Content ที่จัดรูปแบบอย่างชัดเจนด้วย metrics ที่เฉพาะเจาะจง
- ตารางที่อ่านง่ายบนทุก device โดยไม่มี column Category ซ้ำซ้อน
- Grouping และ sorting ที่เป็นระบบตาม severity
- Recommendations สำหรับ improvements ตาม priority และ impact
- Health score โดยรวมเพื่อวัดสุขภาพโดยรวมของ project
- Action items ที่สามารถดำเนินการได้ทันที
- Metrics ครอบคลุมทั้ง code quality, refactoring, และ production readiness

## Example Table

ตัวอย่างรายงานสุขภาพโปรเจกต์ในรูปแบบตาราง:

| No. | Metric | Value | Status | Severity | Location | Recommendation |
|-----|--------|-------|--------|----------|----------|----------------|
| 1 | File size limit | 3 files > 250 lines | ❌ | High | `src/modules/analytics/` | Split per `/refactor` |
| 2 | `any` types usage | 12 occurrences | ❌ | High | Multiple files | Replace with proper types |
| 3 | MOCK implementations | 3 MOCK classes | ❌ | High | `src/mocks/` | Replace with real DB queries |
| 4 | Type flow completeness | DB → Zod → API → UI | ✅ | - | - | No action needed |
| 5 | SRP violations | 2 files with "และ" | ❌ | High | `src/modules/provider/` | Split via `/refactor` |
