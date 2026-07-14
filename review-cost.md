---
title: Review Cost
description: Review cloud cost optimization ครอบคลุม resource usage, billing, และ waste elimination
auto_execution_mode: 3
related:
  - /deep-analyze-codebase
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review cloud cost optimization quality ครอบคลุม resource usage, billing configuration, waste elimination และ cost monitoring

## Scope

compute resource usage, storage cost, bandwidth cost, third-party API cost, database cost และ cost monitoring

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ cloud resource usage
2. ระบุ cloud providers, billing model และ cost centers

### 2. Deep Analyze

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-cost.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ compute cost: server sizing, auto-scaling config, idle resource detection
3. Script ตรวจสอบ storage cost: storage volume, retention policy, duplicate data, orphaned storage
4. Script ตรวจสอบ bandwidth cost: CDN usage, image optimization, response compression, caching headers
5. Script ตรวจสอบ third-party API cost: API call volume, caching strategy, batch API usage, free tier utilization
6. Script ตรวจสอบ database cost: query efficiency, index bloat, connection pool sizing, read replica necessity
7. Script ตรวจสอบ cost monitoring: cost alerts, budget limits, cost attribution, cost dashboard
8. Script ตรวจสอบ waste elimination: unused resources, over-provisioned resources, zombie processes
9. Script คำนวณ cost optimization health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: significant waste, no cost monitoring, unbounded resource scaling
- **High**: missing caching strategy, over-provisioned resources, no cost alerts
- **Medium**: inconsistent retention, missing batch API, minor waste
- **Low**: cost naming convention, minor optimization

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
