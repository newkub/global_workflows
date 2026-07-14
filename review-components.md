---
title: Review Components
description: Review component quality ครอบคลุม structure, props, reactivity, และ reusability
auto_execution_mode: 3
related:
  - /deep-analyze-with-use-scripts
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review component quality ครอบคลุม component structure, props design, reactivity patterns, composition และ reusability

## Scope

component structure, props/emits design, reactivity usage, component composition, slot patterns, component reusability, และ component testing

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ component structure
2. ระบุ component framework และ composition patterns ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-with-use-scripts` เพื่อสร้าง `analyze-components.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ component structure, prop design, และ event emission patterns
3. Script ตรวจสอบ reactivity usage, memo/computed patterns, และ unnecessary re-renders
4. Script ตรวจสอบ component composition, slot usage, และ component reusability
5. Script ตรวจสอบ component testing coverage และ component isolation
6. Script คำนวณ component health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: broken component, prop mutation, reactivity bug ที่ก่อให้เกิด error
- **High**: unnecessary re-render, missing prop validation, poor composition
- **Medium**: inconsistent prop naming, missing slot documentation, minor reusability gap
- **Low**: cosmetic component improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
