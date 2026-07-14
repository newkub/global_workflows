---
title: Review Composables
description: Review composables ครอบคลุม Vue/Nuxt composables, reactivity, และ reusability
auto_execution_mode: 3
related:
  - /deep-analyze-codebase
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review Vue/Nuxt composables quality ครอบคลุม composable design, reactivity patterns, lifecycle integration และ reusability เฉพาะ Vue ecosystem

## Scope

Vue composables (use* functions), ref/reactive usage, computed/watch patterns, provide/inject, composable composition, และ Vue-specific lifecycle hooks

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ composables structure
2. ระบุ Vue version, composition API patterns และ composable conventions ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-composables.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ composable design, ref/reactive usage, และ computed/watch patterns
3. Script ตรวจสอบ provide/inject patterns, composable composition, และ Vue lifecycle integration
4. Script ตรวจสอบ reactivity correctness, effect scope management, และ cleanup patterns
5. Script ตรวจสอบ composable reusability, SSR compatibility, และ testing coverage
6. Script คำนวณ composables health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: reactivity leak, missing scope cleanup, SSR incompatibility, broken composable
- **High**: incorrect watch usage, missing ref unwrap, untestable composable
- **Medium**: inconsistent return type, missing SSR guard, minor reactivity issue
- **Low**: cosmetic composable improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
