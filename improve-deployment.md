---
title: Improve Deployment
description: ปรับปรุง deployment process และ CI/CD
auto_execution_mode: 3
related_workflows:
  - /improve-cicd
  - /improve-platform
  - /follow-deploy
---

## Goal

ปรับปรุง deployment process ให้เร็ว เสถียร และ automated

## Scope

ใช้สำหรับปรับปรุม deployment ทั้ง manual, automated, และ CI/CD pipelines

## Execute

### 1. Analyze Current Deployment

วิเคราะห์ deployment process ปัจจุบัน

1. ตรวจสอบ deployment method ปัจจุบัน
2. วิเคราะห์ deployment time
3. ตรวจสอบ deployment frequency
4. วิเคราะห์ deployment failures
5. ตรวจสอบ rollback procedures
6. ระบุ deployment bottlenecks

### 2. Define Deployment Strategy

กำหนด deployment strategy

1. เลือก deployment strategy (blue-green, canary, rolling)
2. กำหนด deployment windows
3. กำหนด rollback procedures
4. กำหนด deployment checks
5. กำหนด approval process
6. กำหนด monitoring requirements

### 3. Setup CI/CD Pipeline

ตั้งค่า CI/CD pipeline

1. ทำ `/improve-cicd` เพื่อตั้งค่า CI/CD
2. ตั้งค่า automated builds
3. ตั้งค่า automated tests
4. ตั้งค่า automated deployments
5. ตั้งค่า environment promotion
6. ตั้งค่า deployment notifications

### 4. Implement Infrastructure as Code

ตั้งค่า Infrastructure as Code

1. ใช้ Terraform หรือ Pulumi
2. Define infrastructure ใน code
3. Version control infrastructure
4. ใช้ environment-specific configs
5. ใช้ immutable infrastructure
6. ใช้ infrastructure testing

### 5. Improve Build Process

ปรับปรุม build process

1. Optimize build times
2. ใช้ build caching
3. ใช้ parallel builds
4. ใช้ incremental builds
5. ใช้ dependency caching
6. Monitor build performance

### 6. Add Deployment Checks

เพิ่ม deployment checks

1. Add health checks
2. Add smoke tests
3. Add integration tests
4. Add performance checks
5. Add security scans
6. Add rollback triggers

### 7. Implement Rollback Strategy

ตั้งค่า rollback strategy

1. ใช้ automated rollback บน failure
2. ใช้ blue-green สำหรับ instant rollback
3. ใช้ database migrations ที่ reversible
4. ใช้ feature flags สำหรับ gradual rollout
5. ใช้ canary deployments
6. Monitor rollback success

### 8. Monitor Deployments

ตรวจสอบ deployments

1. Monitor deployment duration
2. Monitor deployment success rate
3. Monitor rollback rate
4. Monitor deployment errors
5. Monitor post-deployment metrics
6. Add deployment dashboards

## Rules

### 1. Deployment Strategy

ใช้ deployment strategy อย่างเหมาะสม

- ใช้ automated deployments
- ใช้ blue-green สำหรับ critical systems
- ใช้ canary สำหรับ gradual rollout
- ใช้ rolling updates สำหรับ stateless services
- ใช้ feature flags สำหรับ risk mitigation

### 2. CI/CD

ใช้ CI/CD อย่างเหมาะสม

- ใช้ automated builds
- ใช้ automated tests
- ใช้ automated deployments
- ใช้ environment promotion
- ใช้ deployment gates

### 3. Infrastructure

ใช้ Infrastructure as Code

- Define infrastructure ใน code
- Version control infrastructure
- ใช้ immutable infrastructure
- ใช้ infrastructure testing
- ไม่ manual changes

### 4. Safety

Deployment ต้องปลอดภัย

- ใช้ rollback procedures
- ใช้ deployment checks
- ใช้ feature flags
- ใช้ canary deployments
- Monitor deployments

### 5. Monitoring

ตรวจสอบ deployments อย่างสม่ำเสมอ

- Monitor deployment metrics
- Monitor post-deployment metrics
- Monitor rollback rate
- Monitor deployment errors
- Add alerts

## Expected Outcome

- Deployment strategy ที่ optimized
- CI/CD pipeline ที่ automated
- Infrastructure as Code ที่ implement เสร็จ
- Build process ที่ optimized
- Deployment checks ที่เสร็จ
- Rollback strategy ที่เสร็จ
- Deployment monitoring ที่ active
