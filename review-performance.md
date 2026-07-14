---
title: Review Performance
description: Review performance ครอบคลุม queries, caching, bundle size, rendering, และ bottlenecks
auto_execution_mode: 3
related:
  - /scan-codebase
  - /deep-analyze-codebase
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
  - /follow-time-complexity
---

## Goal

Review performance ครอบคลุม database queries, caching strategies, bundle size, rendering performance และ bottlenecks

## Scope

N+1 queries, caching, bundle size, chunk splitting, tree shaking, asset optimization, lazy loading, rendering optimization, resource usage, performance tuning, และ web performance (Core Web Vitals)

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ performance patterns
2. ระบุ performance tools ที่มี

### 2. Deep Analyze

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-performance.ts` ใน `.devin/scripts/analyze/`
2. ทำ `/follow-time-complexity` วิเคราะห์ time complexity ของ critical paths
3. Script ตรวจสอบ N+1 queries, missing indexes, caching gaps
4. Script ตรวจสอบ bundle size, chunk splitting, tree shaking, และ asset optimization
5. Script ตรวจสอบ rendering performance, unnecessary re-renders, และ lazy loading
6. Script คำนวณ performance health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: blocking performance bottleneck, bundle size ที่ส่งผลกระทบรุนแรง
- **High**: N+1 query, missing cache on hot path, missing code splitting, large vendor chunk
- **Medium**: suboptimal query, missing lazy load, suboptimal chunk
- **Low**: minor optimization opportunity

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
