---
title: Review Filesystem
description: Review filesystem ครอบคลุม file structure, directory organization, module boundaries, และ import paths
auto_execution_mode: 3
related:
  - /deep-analyze-with-use-scripts
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
  - /follow-barrel-export
---

## Goal

Review filesystem organization quality ครอบคลุม file structure, directory organization, module boundaries และ import path patterns

## Scope

file structure, directory organization, module boundaries, import paths, file naming, และ barrel exports

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ filesystem structure
2. ระบุ filesystem patterns และ tools ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-with-use-scripts` เพื่อสร้าง `analyze-filesystem.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ file structure, directory organization, และ module grouping
3. Script ตรวจสอบ module boundaries, circular dependencies, และ import direction
4. Script ตรวจสอบ import paths, path aliases, และ relative vs absolute imports
5. Script ตรวจสอบ barrel exports, index files, และ export organization
6. Script คำนวณ filesystem health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: circular dependency, broken import path, missing module boundary
- **High**: inconsistent file structure, deep relative imports, missing barrel export
- **Medium**: suboptimal grouping, inconsistent import style, minor path issue
- **Low**: minor filesystem improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
