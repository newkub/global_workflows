---
title: Review Routing
description: Review routing ครอบคลุม route definitions, navigation guards, lazy loading, และ params validation
auto_execution_mode: 3
related:
  - /deep-analyze-codebase
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review routing quality ครอบคลุม route definitions, navigation guards, lazy loading routes และ route params validation

## Scope

route definitions, navigation guards, lazy loading, route params validation, route middleware, และ route type safety

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ routing structure
2. ระบุ routing patterns และ tools ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-routing.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ route definitions, route structure, และ route naming conventions
3. Script ตรวจสอบ navigation guards, auth checks, และ permission enforcement
4. Script ตรวจสอบ lazy loading, code splitting, และ route-level loading states
5. Script ตรวจสอบ route params validation, type safety, และ route middleware patterns
6. Script คำนวณ routing health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: missing auth guard, broken route, no params validation
- **High**: missing lazy load, inconsistent guard, no loading state
- **Medium**: suboptimal code splitting, missing middleware, minor route issue
- **Low**: minor routing improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
