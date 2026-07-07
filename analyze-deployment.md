---
title: Analyze Deployment
description: วิเคราะห์ CI/CD pipeline, Dockerfile, deployment strategy, rollback, zero-downtime
auto_execution_mode: 3
related_workflows:
  - /deep-analyze-with-use-scripts
  - /improve-deployment-strategy
  - /improve-devops
  - /follow-deploy
  - /follow-github-actions
  - /use-scripts
  - /report-format-table
---

## Goal

วิเคราะห์ deployment configuration, CI/CD pipeline และ deployment strategy เพื่อระบุ risks และ improvement opportunities

## Scope

CI/CD pipeline, Dockerfile, deployment strategy, rollback, zero-downtime, environment configuration, health checks, deployment scripts

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม deployment metrics ผ่าน scripts (pipeline analysis, Dockerfile analysis, env config validation)

### 2. Analyze CI/CD Pipeline

1. ระบุ missing CI checks (lint, typecheck, test, build)
2. ระบุ missing caching strategy ใน CI
3. ระบุ slow CI steps ที่ควร parallel
4. ระบุ missing secret scanning ใน CI
5. ระบุ missing deployment approval gates
6. ระบุ missing rollback mechanism ใน pipeline

### 3. Analyze Dockerfile And Container

1. ระบุ missing multi-stage build
2. ระบุ base image ที่ไม่เหมาะสม (too large, not pinned)
3. ระบุ missing .dockerignore
4. ระบุ running as root user
5. ระบุ missing health check ใน container
6. ระบุ missing layer caching opportunities

### 4. Analyze Deployment Strategy

1. ระบุ missing zero-downtime deployment strategy
2. ระบุ missing blue-green หรือ canary deployment
3. ระบุ missing health check endpoints
4. ระบุ missing readiness/liveness probes
5. ระบุ missing graceful shutdown
6. ระบุ deployment scripts ที่ไม่ idempotent

### 5. Analyze Environment Configuration

1. ระบุ missing environment separation (dev, staging, prod)
2. ระบุ hardcoded environment values ใน deployment configs
3. ระบุ missing secret management (secrets ใน plain text)
4. ระบุ missing env validation ที่ startup
5. ระบุ missing environment documentation

### 6. Analyze Rollback Strategy

1. ระบุ missing rollback procedure
2. ระบุ rollback ที่ไม่ automated
3. ระบุ missing database rollback strategy
4. ระบุ missing deployment versioning
5. ระบุ rollback testing gaps

### 7. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: environment config → CI/CD → Dockerfile → deployment strategy → rollback

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม location และ severity

### 2. Severity Classification

- **Critical**: secrets ใน plain text, missing rollback, running as root
- **High**: missing CI checks, missing health checks, missing zero-downtime
- **Medium**: missing caching, slow CI, missing env validation
- **Low**: missing .dockerignore, missing env documentation

### 3. Use Scripts For Pipeline Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอสำหรับ deployment analysis
- ใช้ `/use-scripts` เมื่อต้องวิเคราะห์ไฟล์มากกว่า 10 ไฟล์

### 4. Platform Awareness

- ตรวจสอบ platform-specific configs (Vercel, Cloudflare, Netlify, Docker)
- ระบุ platform-specific anti-patterns
- ตรวจสอบ deployment target compatibility

## Expected Outcome

- Deployment risks ระบุพร้อม location และ severity
- CI/CD และ deployment strategy recommendations
- พร้อมสำหรับ `/improve-deployment-strategy` หรือ `/improve-devops`
