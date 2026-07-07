---
title: Analyze Developer Experience
description: วิเคราะห์ DX: build, dev server, error messages, debugging, config, onboarding
auto_execution_mode: 3
related_workflows:
  - /analyze-build
  - /analyze-dev-server
  - /analyze-error-messages
  - /analyze-debugging
  - /analyze-dx-config
  - /analyze-onboarding
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ developer experience เพื่อระบุ pain points ใน development workflow

## Scope

Build speed, dev server, error messages, debugging, dev tooling config, onboarding experience

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม DX metrics ผ่าน scripts (build timing, config scan, error message analysis)

### 2. Analyze Build

1. ทำ `/analyze-build` วิเคราะห์ build speed, build cache, incremental build, build reproducibility

### 3. Analyze Dev Server

1. ทำ `/analyze-dev-server` วิเคราะห์ dev server speed, hot reload, HMR reliability, startup time

### 4. Analyze Error Messages

1. ทำ `/analyze-error-messages` วิเคราะห์ error message quality, actionable errors, error localization

### 5. Analyze Debugging

1. ทำ `/analyze-debugging` วิเคราะห์ debuggability, source maps, debug tooling, breakpoint support

### 6. Analyze DX Config

1. ทำ `/analyze-dx-config` วิเคราะห์ dev tooling config, editor setup, extensions, snippets

### 7. Analyze Onboarding

1. ทำ `/analyze-onboarding` วิเคราะห์ onboarding experience, setup docs, env setup, first-run experience

### 8. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: error messages → dev server → build → onboarding → debugging → DX config

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม severity

### 2. Severity Classification

- **Critical**: broken build, no error messages, no source maps
- **High**: slow build (> 60s), slow dev server (> 10s), missing onboarding docs
- **Medium**: missing HMR, missing debug config, missing editor setup
- **Low**: missing snippets, missing format-on-save, missing first-run guide

### 3. Use Scripts For Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ `/use-scripts` สำหรับ build timing และ config scanning

### 4. Non-Redundancy

- แต่ละ sub-workflow มี scope ที่ไม่ทับซ้อนกัน
- ใช้ references แทนการเขียนซ้ำเนื้อหาจาก sub-workflows

## Expected Outcome

- DX gaps ระบุพร้อม severity
- พร้อมสำหรับ orchestrator consolidation หรือ `/improve-dx`
