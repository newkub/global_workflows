---
title: Review CI CD
description: Review CI/CD pipeline ครอบคลุม workflows, jobs, caching, secrets, และ pipeline quality
auto_execution_mode: 3
related:
  - /deep-analyze-codebase
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review CI/CD pipeline quality ครอบคลุม workflow configuration, job dependencies, caching strategy, secrets management และ pipeline efficiency

## Scope

CI/CD workflow files, job dependencies, build caching, test automation, secrets handling, parallel jobs, conditional execution, artifact management, และ pipeline performance

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ CI/CD setup
2. ระบุ CI/CD platform (GitHub Actions, GitLab CI, CircleCI) และ workflow files ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-cicd.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ workflow structure, job dependencies, และ execution order
3. Script ตรวจสอบ caching strategy, artifact management, และ build optimization
4. Script ตรวจสอบ secrets handling, environment variables, และ permissions
5. Script ตรวจสอบ test automation, conditional execution, และ parallel job efficiency
6. Script คำนวณ CI/CD health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: exposed secrets, broken pipeline, no test gate, missing required workflow
- **High**: missing caching, slow pipeline, no artifact retention, broken job dependency
- **Medium**: suboptimal parallelization, missing conditional, inconsistent naming
- **Low**: minor workflow improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
