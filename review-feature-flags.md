---
title: Review Feature Flags
description: Review feature flag management ครอบคลุม rollout strategy, flag cleanup, default values และ flag governance
auto_execution_mode: 3
related:
  - /deep-analyze-with-use-scripts
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review feature flag management quality ครอบคลุม flag definition, rollout strategy, flag cleanup, default values และ flag governance

## Scope

feature flag definition, flag evaluation, rollout strategy, flag lifecycle management, flag cleanup, default values และ flag documentation

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใช้ feature flag setup
2. ระบุ flag provider, flag definitions และ flag evaluation method

### 2. Deep Analyze

1. ทำ `/deep-analyze-with-use-scripts` เพื่อสร้าง `analyze-feature-flags.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ flag definition: naming convention, description, default value, flag type
3. Script ตรวจสอบ flag evaluation: server-side vs client-side, evaluation context, fallback behavior
4. Script ตรวจสอบ rollout strategy: percentage rollout, user targeting, segment-based rollout
5. Script ตรวจสอบ flag lifecycle: stale flags, orphaned flags, flags without cleanup plan
6. Script ตรวจสอบ flag governance: flag ownership, flag documentation, flag audit trail
7. Script ตรวจสอบ flag coupling: flags depending on other flags, flag conflict detection
8. Script คำนวณ feature flag health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: flag ที่ควนเป็น production-safe ไม่ได้, flag ที่ทำให้ app crash เมื่อ off
- **High**: stale flags ที่ควรลบ, missing default value, flag ที่ไม่มี cleanup plan
- **Medium**: inconsistent naming, missing documentation, minor rollout gap
- **Low**: flag naming convention, cosmetic improvement

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
