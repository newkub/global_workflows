---
title: Review Analytics
description: Review analytics ครอบคลุม event tracking, conversion funnels, implementation, และ data accuracy
auto_execution_mode: 3
related:
  - /deep-analyze-with-use-scripts
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review analytics implementation quality ครอบคลุม event tracking, conversion funnels, analytics implementation และ data accuracy

## Scope

event tracking, conversion funnels, analytics implementation, data accuracy, event schema, และ analytics tool configuration

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ analytics structure
2. ระบุ analytics patterns และ tools ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-with-use-scripts` เพื่อสร้าง `analyze-analytics.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ event tracking, event naming, และ event schema consistency
3. Script ตรวจสอบ conversion funnels, funnel steps, และ funnel tracking completeness
4. Script ตรวจสอบ analytics implementation, tracking code placement, และ data accuracy
5. Script ตรวจสอบ analytics tool configuration, consent mode, และ data retention
6. Script คำนวณ analytics health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: broken tracking, no conversion funnel, data accuracy issue
- **High**: missing event tracking, inconsistent event naming, no consent mode
- **Medium**: suboptimal funnel, missing event, minor tracking gap
- **Low**: minor analytics improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
