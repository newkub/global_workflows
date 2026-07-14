---
title: Review Deployment
description: Review deployment และ configuration ครอบคลุม CI/CD, rollback, zero-downtime, env vars, และ post-deploy validation
auto_execution_mode: 3
related:
  - /scan-codebase
  - /deep-analyze-with-use-scripts
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review deployment และ configuration ครอบคลุม CI/CD pipeline, rollback strategy, zero-downtime releases, environment variables, build config และ post-deploy validation

## Scope

CI/CD pipeline, deployment strategy, rollback, zero-downtime, post-deploy validation, environment promotion, environment variables, build configuration, secrets management, backup recovery, cost optimization, feature flags, versioning, และ DevOps practices

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ deployment setup
2. ระบุ deployment platform และ CI/CD tools ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-with-use-scripts` เพื่อสร้าง `analyze-deployment.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ CI/CD pipeline, deployment steps, rollback strategy
3. Script ตรวจสอบ zero-downtime config, post-deploy validation, และ environment promotion
4. Script ตรวจสอบ env var coverage, missing config, hardcoded values, และ secrets management
5. Script ตรวจสอบ build config optimization และ environment consistency
6. Script คำนวณ deployment readiness score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: no rollback strategy, no post-deploy validation, hardcoded secrets, missing required env var
- **High**: missing CI/CD step, no zero-downtime, inconsistent config, missing CI/CD step
- **Medium**: suboptimal deployment config, missing health check, suboptimal build config, missing env var documentation
- **Low**: minor deployment improvement

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
