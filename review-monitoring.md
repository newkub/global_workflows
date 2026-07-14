---
title: Review Monitoring
description: Review monitoring และ observability ครอบคลุม metrics, alerts, dashboards, และ incident response
auto_execution_mode: 3
related:
  - /deep-analyze-with-use-scripts
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review monitoring และ observability quality ครอบคลุม metrics collection, alert configuration, dashboard design และ incident response readiness

## Scope

metrics collection, alert configuration, dashboard design, uptime tracking, incident response readiness, และ observability instrumentation

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ monitoring structure
2. ระบุ monitoring patterns และ tools ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-with-use-scripts` เพื่อสร้าง `analyze-monitoring.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ metrics collection, custom metrics, และ metric labeling
3. Script ตรวจสอบ alert configuration, threshold tuning, และ alert routing
4. Script ตรวจสอบ dashboard design, metric visualization, และ data freshness
5. Script ตรวจสอบ incident response readiness, runbook availability, และ escalation paths
6. Script คำนวณ monitoring health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: no monitoring on critical path, missing alert for critical metric, broken dashboard
- **High**: missing key metric, alert fatigue, no runbook
- **Medium**: suboptimal alert threshold, missing dashboard panel, incomplete observability
- **Low**: minor metric improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
