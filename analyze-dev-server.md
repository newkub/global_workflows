---
title: Analyze Dev Server
description: วิเคราะห์ dev server speed, hot reload, HMR reliability, startup time
auto_execution_mode: 3
related_workflows:
  - /analyze-developer-experience
  - /analyze-build
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ dev server quality เพื่อระบุ HMR และ startup issues

## Scope

Dev server speed, hot reload, HMR reliability, startup time, dev server config

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม dev server metrics ผ่าน scripts (startup timing, config scan, HMR detection)

### 2. Check Startup Time

1. ระบุ dev server startup time ที่ช้าเกินไป (> 10s)
2. ระบุ missing dev server optimization
3. ระบุ missing dependency pre-bundling
4. ระบุ missing dev server caching
5. ระบุ unnecessary initialization steps

### 3. Check Hot Reload

1. ระบุ missing HMR support
2. ระบุ HMR ที่ไม่น่าเชื่อถือ (full reload แทน partial)
3. ระบุ missing HMR for specific file types
4. ระบุ HMR latency ที่สูงเกินไป (> 1s)
5. ระบุ missing HMR error overlay

### 4. Check Dev Server Config

1. ระบุ missing dev server port configuration
2. ระบุ missing dev server proxy configuration
3. ระบุ missing dev server HTTPS support
4. ระบุ missing dev server host configuration
5. ระบุ missing dev server open browser option

### 5. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: startup time → HMR reliability → HMR latency → dev server config

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม severity

### 2. Severity Classification

- **Critical**: no HMR, startup > 30s, broken dev server
- **High**: startup > 10s, unreliable HMR, no error overlay
- **Medium**: HMR latency > 1s, missing HTTPS, missing proxy
- **Low**: missing open browser, missing host config, missing port config

### 3. Use Scripts For Dev Server Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ `/use-scripts` สำหรับ startup timing

## Expected Outcome

- Dev server issues ระบุพร้อม severity
- พร้อมสำหรับ `/improve-dx` หรือ `/run-dev`
