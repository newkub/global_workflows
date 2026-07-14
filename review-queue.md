---
title: Review Queue
description: Review queue ครอบคลุม job processing, retry, dead letter, worker concurrency, และ backpressure
auto_execution_mode: 3
related:
  - /deep-analyze-codebase
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review queue system quality ครอบคลุม job processing, retry strategies, dead letter queue, worker concurrency และ queue backpressure

## Scope

job processing, retry strategies, dead letter queue, worker concurrency, queue backpressure, และ job prioritization

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ queue structure
2. ระบุ queue patterns และ tools ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-queue.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ job processing patterns, job serialization, และ job idempotency
3. Script ตรวจสอบ retry strategies, backoff configuration, และ max retry limits
4. Script ตรวจสอบ dead letter queue, failed job handling, และ job recovery
5. Script ตรวจสอบ worker concurrency, backpressure handling, และ job prioritization
6. Script คำนวณ queue health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: no retry, job loss, no dead letter queue, unbounded concurrency
- **High**: missing idempotency, no backpressure, inconsistent retry
- **Medium**: suboptimal concurrency, missing prioritization, minor queue issue
- **Low**: minor queue improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
