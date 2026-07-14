---
title: Review Docs
description: Review documentation ครอบคลุม README, API docs, examples, และ content quality
auto_execution_mode: 3
related:
  - /deep-analyze-with-use-scripts
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review documentation quality ครอบคลุม README, API docs, examples, guides และ content accuracy

## Scope

README, API documentation, code examples, setup guides, inline documentation, content accuracy, content coverage, documentation completeness, และ developer experience

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ documentation structure
2. ระบุ documentation framework และ content tools ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-with-use-scripts` เพื่อสร้าง `analyze-docs.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ README completeness, setup guide accuracy, และ API documentation coverage
3. Script ตรวจสอบ code examples: runnable, up-to-date, และ consistent with API
4. Script ตรวจสอบ content accuracy, broken links, และ missing documentation
5. Script คำนวณ documentation health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: missing README, broken setup guide, incorrect API docs
- **High**: missing API documentation, outdated example, broken link
- **Medium**: incomplete guide, missing example, minor content gap
- **Low**: cosmetic improvement, formatting issue

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข docs ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
