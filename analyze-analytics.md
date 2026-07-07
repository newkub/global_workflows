---
title: Analyze Analytics
description: วิเคราะห์ event tracking, funnel analysis, privacy-friendly analytics, metrics
auto_execution_mode: 3
related_workflows:
  - /analyze-monitoring
  - /analyze-privacy
  - /improve-analytics
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ analytics implementation เพื่อระบุ tracking gaps และ privacy issues

## Scope

Event tracking, funnel analysis, privacy-friendly analytics, conversion metrics, user behavior tracking, A/B testing, analytics SDK

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม analytics metrics ผ่าน scripts (event detection, tracking scan, privacy analysis)

### 2. Check Event Tracking

1. ระบุ missing event tracking สำหรับ key user actions
2. ระบุ missing page view tracking
3. ระบุ missing conversion tracking
4. ระบุ inconsistent event naming conventions
5. ระบุ missing event properties
6. ระบุ missing event schema validation

### 3. Check Funnel Analysis

1. ระบุ missing funnel definition
2. ระบุ missing funnel step tracking
3. ระบุ missing drop-off analysis
4. ระบุ missing conversion rate calculation
5. ระบุ missing funnel visualization

### 4. Check Privacy-Friendly Analytics

1. ระบุ missing consent management สำหรับ analytics
2. ระบุ missing cookieless tracking
3. ระบุ missing data anonymization
4. ระบุ missing IP masking
5. ระบุ missing opt-out mechanism
6. ระบุ sensitive data ใน analytics events

### 5. Check Analytics SDK

1. ระบุ missing analytics SDK initialization
2. ระบุ missing SDK error handling
3. ระบุ missing offline event buffering
4. ระบุ missing event batching
5. ระบุ missing SDK version management
6. ระบุ missing analytics abstraction layer

### 6. Check A/B Testing

1. ระบุ missing A/B testing infrastructure
2. ระบุ missing experiment definition
3. ระบุ missing variant assignment
4. ระบุ missing experiment tracking
5. ระบุ missing statistical significance calculation
6. ระบุ missing experiment cleanup

### 7. Check Custom Metrics

1. ระบุ missing business metrics tracking
2. ระบุ missing custom dimension tracking
3. ระบุ missing user property tracking
4. ระบุ missing cohort analysis support
5. ระบุ missing retention metrics

### 8. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: event tracking → privacy → funnel → SDK → A/B testing → custom metrics

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม severity

### 2. Severity Classification

- **Critical**: missing consent, sensitive data in events, no conversion tracking
- **High**: missing key events, missing SDK error handling, missing opt-out
- **Medium**: missing funnels, missing A/B testing, missing batching
- **Low**: missing custom dimensions, missing cohorts, missing retention

### 3. Framework Awareness

- ตรวจสอบ analytics SDK integration
- ตรวจสอบ server-side analytics
- ระบุ privacy compliance patterns

### 4. Use Scripts For Analytics Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ event tracking detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- Analytics gaps ระบุพร้อม severity
- Event tracking และ privacy issues จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-analytics`
