---
title: Review Workers
description: Review background workers ครอบคลุม job patterns, cron, scheduled tasks, และ worker health
auto_execution_mode: 3
related:
  - /deep-analyze-with-use-scripts
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review background worker quality ครอบคลุม job patterns, cron jobs, scheduled tasks และ worker health monitoring

## Scope

background job patterns, cron jobs, scheduled tasks, worker health monitoring, worker restart, และ worker scaling

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ workers structure
2. ระบุ workers patterns และ tools ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-with-use-scripts` เพื่อสร้าง `analyze-workers.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ background job patterns, job lifecycle, และ job error handling
3. Script ตรวจสอบ cron jobs, schedule configuration, และ timezone handling
4. Script ตรวจสอบ scheduled tasks, task dependencies, และ task retry
5. Script ตรวจสอบ worker health monitoring, restart strategy, และ worker scaling
6. Script คำนวณ workers health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: worker crash without restart, missing health check, job data loss
- **High**: no cron validation, missing job error handling, no worker monitoring
- **Medium**: suboptimal schedule, missing retry, minor worker issue
- **Low**: minor worker improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
