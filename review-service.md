---
title: Review Service
description: Review service layer ครอบคลุม business logic, data flow, และ service patterns
auto_execution_mode: 3
related:
  - /deep-analyze-codebase
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review service layer quality ครอบคลุม business logic organization, data flow patterns, service boundaries และ error handling

## Scope

service organization, business logic patterns, data transformation, service-to-service communication, transaction boundaries, และ service error handling

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ service layer structure
2. ระบุ service patterns และ business logic organization ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-service.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ service organization, single responsibility, และ boundary clarity
3. Script ตรวจสอบ business logic patterns, data transformation, และ validation at service layer
4. Script ตรวจสอบ service communication, transaction boundaries, และ error propagation
5. Script ตรวจสอบ service testability, dependency injection, และ mocking patterns
6. Script คำนวณ service layer health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: business logic in wrong layer, missing transaction boundary, data corruption risk
- **High**: service boundary violation, missing error handling, untestable service
- **Medium**: inconsistent service pattern, missing validation, minor coupling issue
- **Low**: cosmetic service improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
