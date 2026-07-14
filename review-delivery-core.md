---
title: Review Delivery Core
description: Review delivery ครอบคลุม SEO, content, DX, documentation, และ versioning
auto_execution_mode: 3
related:
  - /deep-analyze-with-use-scripts
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review delivery quality ครอบคลุม SEO, content delivery, developer experience, documentation และ versioning สำหรับการส่งมอบผลิตภัณฑ์

## Scope

SEO optimization, content delivery, developer experience (DX), documentation quality, versioning strategy, release notes, และ deprecation policy

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ delivery setup
2. ระบุ delivery channels, documentation tools, และ versioning strategy ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-with-use-scripts` เพื่อสร้าง `analyze-delivery.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ SEO readiness, content delivery patterns, และ delivery channel coverage
3. Script ตรวจสอบ developer experience: onboarding flow, API documentation, และ SDK usability
4. Script ตรวจสอบ documentation quality, README completeness, และ example coverage
5. Script ตรวจสอบ versioning strategy, changelog quality, release notes, และ deprecation policy
6. Script คำนวณ delivery readiness score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: no documentation, broken delivery channel, no versioning strategy
- **High**: missing README, incomplete API docs, no changelog, poor DX
- **Medium**: suboptimal content delivery, missing examples, incomplete release notes
- **Low**: minor documentation improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
