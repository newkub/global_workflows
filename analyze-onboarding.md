---
title: Analyze Onboarding
description: วิเคราะห์ onboarding experience, setup docs, env setup, first-run experience
auto_execution_mode: 3
related_workflows:
  - /analyze-developer-experience
  - /analyze-documentation
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ onboarding experience เพื่อระบุ barriers สำหรับ new developers

## Scope

Onboarding experience, setup docs, env setup, first-run experience, prerequisite documentation

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม onboarding metrics ผ่าน scripts (README scan, env detection, setup script analysis)

### 2. Check Setup Documentation

1. ระบุ missing getting started guide
2. ระบุ missing prerequisite documentation (runtime, package manager, OS)
3. ระบุ missing installation steps
4. ระบุ missing environment setup guide
5. ระบุ missing troubleshooting guide

### 3. Check Environment Setup

1. ระบุ missing `.env.example`
2. ระบุ missing environment variable documentation
3. ระบุ missing setup script (`bun run setup`)
4. ระบุ missing database seed script
5. ระบุ missing Infisical/secret management setup

### 4. Check First-Run Experience

1. ระบุ missing first-run validation
2. ระบุ missing helpful error messages สำหรับ missing prerequisites
3. ระบุ missing auto-fix suggestions
4. ระบุ missing progress feedback ระหว่าง setup
5. ระบุ missing verification steps

### 5. Check Development Workflow

1. ระบุ missing development workflow documentation
2. ระบุ missing common commands reference
3. ระบุ missing project structure overview
4. ระบุ missing contribution guidelines
5. ระบุ missing code review process documentation

### 6. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: setup docs → env setup → first-run → development workflow

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม severity

### 2. Severity Classification

- **Critical**: no getting started guide, no `.env.example`, no setup script
- **High**: missing prerequisites, missing env docs, missing installation steps
- **Medium**: missing troubleshooting, missing workflow docs, missing structure overview
- **Low**: missing contribution guidelines, missing code review docs, missing verification

### 3. Use Scripts For Onboarding Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ `/use-scripts` สำหรับ README scanning

## Expected Outcome

- Onboarding gaps ระบุพร้อม severity
- พร้อมสำหรับ `/improve-dx` หรือ `/update-readme`
