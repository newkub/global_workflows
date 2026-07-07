---
title: Analyze Build
description: วิเคราะห์ build speed, build cache, incremental build, build reproducibility
auto_execution_mode: 3
related_workflows:
  - /analyze-developer-experience
  - /analyze-deployment
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ build pipeline เพื่อระบุ build speed และ reproducibility issues

## Scope

Build speed, build cache, incremental build, build reproducibility, build output optimization

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม build metrics ผ่าน scripts (build timing, cache analysis, output inspection)

### 2. Check Build Speed

1. ระบุ build time ที่ช้าเกินไป (> 60s)
2. ระบุ missing build caching (Turborepo cache)
3. ระบุ missing incremental build
4. ระบุ missing parallel build
5. ระบุ unnecessary rebuilds

### 3. Check Build Reproducibility

1. ระบุ non-deterministic build outputs
2. ระบุ missing lockfile consistency
3. ระบุ missing environment pinning
4. ระบุ missing build isolation
5. ระบุ missing reproducible build verification

### 4. Check Build Output

1. ระบุ build output ที่ใหญ่เกินไป
2. ระบุ missing source maps ใน production
3. ระบุ missing minification
4. ระบุ missing tree shaking
5. ระบุ missing code splitting

### 5. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: build speed → build cache → reproducibility → output optimization

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม severity

### 2. Severity Classification

- **Critical**: broken build, non-deterministic outputs, no lockfile
- **High**: build > 60s, no caching, no source maps, no minification
- **Medium**: missing incremental, missing parallel, large output
- **Low**: missing tree shaking, missing code splitting, missing isolation

### 3. Use Scripts For Build Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ `/use-scripts` สำหรับ build timing analysis

## Expected Outcome

- Build issues ระบุพร้อม severity
- พร้อมสำหรับ `/optimize-build` หรือ `/improve-dx`
