---
title: Review SSR
description: Review SSR ครอบคลุม server-side rendering, hydration, SSR-compatible code, และ streaming
auto_execution_mode: 3
related:
  - /deep-analyze-codebase
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review server-side rendering quality ครอบคลุม SSR implementation, hydration correctness, SSR-compatible code และ streaming SSR

## Scope

SSR implementation, hydration correctness, SSR-compatible code, streaming SSR, SSR error handling, และ SSR performance

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ SSR structure
2. ระบุ SSR patterns และ tools ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-ssr.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ SSR implementation, server entry, และ render-to-string patterns
3. Script ตรวจสอบ hydration correctness, hydration mismatch, และ client takeover
4. Script ตรวจสอบ SSR-compatible code, browser API guards, และ server-only imports
5. Script ตรวจสอบ streaming SSR, suspense boundaries, และ SSR error handling
6. Script คำนวณ SSR health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: hydration mismatch, broken SSR, server-only code in client bundle
- **High**: missing hydration, no SSR error handling, browser API without guard
- **Medium**: suboptimal streaming, missing suspense, minor SSR issue
- **Low**: minor SSR improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
