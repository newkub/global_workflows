---
title: Improve DevOps
description: ปรับปรุง CI/CD, deployment strategy, และ environment configuration
auto_execution_mode: 3
related_workflows:
  - improve-config
  - improve-monitoring
  - improve-cost-optimization
  - improve-security
---

## Goal

ปรับปรุง DevOps pipeline ทั้ง CI/CD, deployment strategy, และ environment configuration ให้ efficient และ secure

## Scope

ใช้สำหรับ project ที่มี CI/CD pipeline, deployment process, และ environment variables management

## Execute

### 1. CI/CD Pipeline

ปรับปรุง CI/CD pipeline ให้ efficient

1. วิเคราะห์ pipeline stages และ parallelization
2. ตรวจสอบ cache strategy สำหรับ build artifacts
3. Implement matrix testing สำหรับ multiple environments
4. ตั้งค่า conditional deployment ตาม branch หรือ tag
5. ตรวจสอบ secret management ใน CI/CD
6. ทำ `/improve-security` สำหรับ pipeline security

### 2. Deployment Strategy

ปรับปรุง deployment process

1. วิเคราะห์ deployment strategy (blue-green, canary, rolling)
2. Implement rollback mechanism
3. ตั้งค่า deployment previews สำหรับ PRs
4. ตรวจสอบ database migration strategy ใน deployment
5. Document deployment runbook
6. ทำ `/improve-monitoring` สำหรับ deployment metrics

### 3. Environment Configuration

ปรับปรุง environment variables และ config management

1. ตรวจสอบทุก environment variables มี `.env.example`
2. ไม่มี hardcoded secrets ใน codebase
3. ใช้ secret manager สำหรับ production secrets
4. ตรวจสอบ environment-specific configs (dev, staging, prod)
5. ทำ `/improve-config` สำหรับ configuration files
6. Document environment setup guide

## Rules

### 1. Pipeline Efficiency

- Cache dependencies และ build artifacts
- Parallelize independent jobs
- Fail fast สำหรับ critical checks
- ใช้ conditional execution สำหรับ path-based triggers

### 2. Deployment Safety

- ทุก deployment ต้องมี rollback plan
- Database migrations ต้อง backward compatible
- Test บน staging environment ก่อน production
- ใช้ health checks หลัง deployment

### 3. Secret Management

- ไม่ commit secrets ใน repository
- ใช้ CI/CD secret management (GitHub Secrets, etc.)
- Rotate secrets เป็นประจำ
- Audit secret access

## Expected Outcome

- CI/CD pipeline efficient พร้อม caching และ parallelization
- Deployment strategy มี rollback และ preview
- Environment configuration ปลอดภัย ไม่มี hardcoded secrets
- Pipeline security enforced
- Deployment runbook documented
