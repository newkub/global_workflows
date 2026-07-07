---
title: Analyze Debugging
description: วิเคราะห์ debuggability, source maps, debug tooling, breakpoint support
auto_execution_mode: 3
related_workflows:
  - /analyze-developer-experience
  - /analyze-error-handling
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ debuggability เพื่อระบุ debugging experience gaps

## Scope

Debuggability, source maps, debug tooling, breakpoint support, logging for debug, debug config

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม debugging metrics ผ่าน scripts (source map scan, debug config detection, logging analysis)

### 2. Check Source Maps

1. ระบุ missing source maps ใน development
2. ระบุ missing source maps ใน production (for error tracking)
3. ระบุ inaccurate source maps
4. ระบุ missing inline source maps option
5. ระบุ missing source map validation

### 3. Check Debug Tooling

1. ระบุ missing debug configuration (launch.json)
2. ระบุ missing debug scripts ใน package.json
3. ระบุ missing debug port configuration
4. ระบุ missing debug logging levels
5. ระบุ missing debug inspector integration

### 4. Check Breakpoint Support

1. ระบุ missing breakpoint support ใน async code
2. ระบุ missing breakpoint support ใน server-side code
3. ระบุ missing conditional breakpoints
4. ระบุ missing logpoints
5. ระบุ missing breakpoint mapping ผ่าน source maps

### 5. Check Logging For Debug

1. ระบุ missing debug log levels
2. ระบุ missing structured logging สำหรับ debugging
3. ระบุ missing request/response logging
4. ระบุ missing query logging
5. ระบุ missing state change logging

### 6. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: source maps → debug tooling → logging → breakpoint support

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม severity

### 2. Severity Classification

- **Critical**: no source maps, no debug config, no error tracking
- **High**: inaccurate source maps, missing debug scripts, missing logging
- **Medium**: missing conditional breakpoints, missing logpoints, missing query logging
- **Low**: missing inline source maps, missing debug port, missing state logging

### 3. Use Scripts For Debugging Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ `/use-scripts` สำหรับ source map validation

## Expected Outcome

- Debugging gaps ระบุพร้อม severity
- พร้อมสำหรับ `/improve-debugging` หรือ `/improve-dx`
