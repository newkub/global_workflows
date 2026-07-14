---
title: Review Tracing
description: Review distributed tracing ครอบคลุม request correlation, span propagation และ trace context
auto_execution_mode: 3
related:
  - /deep-analyze-codebase
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review distributed tracing quality ครอบคลุม request correlation, span propagation, trace context และ trace sampling

## Scope

trace context propagation, span creation, span attributes, trace sampling strategy, trace correlation across services และ trace visualization

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ tracing setup
2. ระบุ tracing provider, trace context format และ sampling strategy

### 2. Deep Analyze

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-tracing.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ trace context propagation: W3C Trace Context, B3 propagation, header forwarding
3. Script ตรวจสอบ span creation: span naming, span attributes, span events, span links
4. Script ตรวจสอบ span coverage: database queries, external API calls, background jobs, error paths
5. Script ตรวจสอบ trace sampling: sampling rate, sampling strategy, tail-based sampling
6. Script ตรวจสอบ trace correlation: cross-service correlation, log correlation, metric correlation
7. Script ตรวจสอบ trace visualization: trace dashboard, service map, latency breakdown
8. Script ตรวจสอบ trace retention: trace storage, retention period, sampling for long-term storage
9. Script คำนวณ tracing health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: no trace context propagation, missing span บน critical path, no error tracing
- **High**: missing trace sampling, no cross-service correlation, missing trace dashboard
- **Medium**: inconsistent span naming, missing attributes, minor coverage gap
- **Low**: trace naming convention, minor span improvement

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
