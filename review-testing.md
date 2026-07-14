---
title: Review Testing
description: Review testing ครอบคลุม coverage, test quality, และ test isolation
auto_execution_mode: 3
related:
  - /scan-codebase
  - /deep-analyze-with-use-scripts
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review testing quality ครอบคลุม coverage, test isolation, reliability และ untested critical paths

## Scope

unit tests, integration tests, E2E tests, coverage gaps, test quality, test isolation, และ test coverage analysis

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ testing structure
2. ระบุ test framework และ coverage tools ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-with-use-scripts` เพื่อสร้าง `analyze-testing.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ coverage, test file patterns, test isolation
3. Script ตรวจสอบ untested critical paths, E2E coverage, และ test reliability
4. Script คำนวณ testing health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: untested critical path, no tests at all
- **High**: low coverage on core logic, flaky tests
- **Medium**: missing edge case test, test isolation issue
- **Low**: missing test for minor feature

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
