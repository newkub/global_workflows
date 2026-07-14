---
title: Review DX
description: Review developer experience ครอบคลุม onboarding, tooling, documentation, และ workflow
auto_execution_mode: 3
related:
  - /deep-analyze-with-use-scripts
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review developer experience quality ครอบคลุม onboarding flow, development tooling, documentation usability และ development workflow efficiency

## Scope

onboarding experience, development setup, build tooling, debug tooling, documentation usability, CLI experience, error messages for developers, และ development workflow

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ developer experience setup
2. ระบุ development tools, build scripts, และ onboarding materials ที่มี

### 2. Deep Analyze

1. ทำ `/deep-analyze-with-use-scripts` เพื่อสร้าง `analyze-dx.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ onboarding flow: setup scripts, prerequisites, และ first-run experience
3. Script ตรวจสอบ development tooling: hot reload, debug tools, และ development scripts
4. Script ตรวจสอบ error message quality for developers, stack traces, และ debuggability
5. Script ตรวจสอบ documentation usability: README, contributing guide, และ inline documentation
6. Script คำนวณ DX score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: broken setup, no onboarding guide, unrecoverable development error
- **High**: missing debug tooling, unclear error messages, missing contributing guide
- **Medium**: suboptimal hot reload, missing development script, minor documentation gap
- **Low**: cosmetic DX improvement, minor script optimization

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
