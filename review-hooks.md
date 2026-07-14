---
title: Review Hooks
description: Review hooks quality ครอบคลุม composable functions, reactivity, และ reusability
auto_execution_mode: 3
related:
  - /deep-analyze-codebase
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review hooks/composables quality ครอบคลุม composable function design, reactivity patterns, cleanup และ reusability

## Scope

composable function design, reactivity usage, lifecycle management, cleanup patterns, return value design, และ composable reusability

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ hooks/composables structure
2. ระบุ reactivity framework และ composable patterns ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-hooks.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ composable function design, parameter validation, และ return value structure
3. Script ตรวจสอบ reactivity usage, signal/memo patterns, และ effect cleanup
4. Script ตรวจสอบ lifecycle management, onMount/onCleanup patterns, และ resource disposal
5. Script ตรวจสอบ composable reusability, composition patterns, และ testing coverage
6. Script คำนวณ hooks health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: memory leak from missing cleanup, reactivity bug, broken composable
- **High**: missing effect disposal, inconsistent return type, untestable composable
- **Medium**: minor reactivity issue, missing parameter validation, inconsistent naming
- **Low**: cosmetic composable improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
