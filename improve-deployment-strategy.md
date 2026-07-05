---
title: Improve Deployment Strategy
description: ปรับปรุง deployment strategy, rollback และ zero-downtime releases
auto_execution_mode: 3
related_workflows:
  - improve-devops
  - improve-config
  - improve-feature-flags
  - improve-monitoring
  - improve-reliability
---

## Goal

ปรับปรุง deployment strategy ให้ครอบคลุมทั้ง release patterns, rollback, และ zero-downtime

## Scope

ใช้สำหรับ project ที่ต้องการ deployment strategy ที่ reliable และ safe

## Execute

### 1. Analyze Current Deployment

วิเคราะห์ deployment ปัจจุบัน

1. ตรวจสอบ current deployment process และ tooling
2. ตรวจสอบ deployment frequency และ lead time
3. ตรวจสอบ deployment failure rate และ recovery time
4. ตรวจสอบ rollback process และ time
5. ทำ `/improve-devops` สำหรับ DevOps review

### 2. Choose Deployment Strategy

เลือก deployment strategy ที่เหมาะสม

1. ใช้ blue-green สำหรับ instant switch และ fast rollback
2. ใช้ canary สำหรับ progressive rollout พร้อม monitoring
3. ใช้ rolling สำหรับ resource-efficient updates
4. ใช้ shadow deployment สำหรับ testing โดยไม่กระทบ users
5. เลือก strategy ตาม risk tolerance และ resource availability

### 3. Zero-Downtime Deployment

ตั้งค่า zero-downtime deployment

1. ใช้ health checks สำหรับ readiness verification
2. ใช้ graceful shutdown สำหรับ in-flight requests
3. ใช้ database migration strategy ที่ backward-compatible
4. ตั้งค่า load balancer drain และ warmup
5. ทำ `/improve-database` สำหรับ migration strategy

### 4. Rollback Strategy

ตั้งค่า rollback strategy

1. สร้าง automated rollback triggers (error rate, latency)
2. ตั้งค่า database rollback หรือ forward-fix migration
3. ตั้งค่า configuration rollback
4. ทดสอบ rollback process อย่างสม่ำเสมอ
5. กำหนด rollback decision matrix (when, who, how)
6. ทำ `/improve-feature-flags` สำหรับ feature-level rollback

### 5. Deployment Pipeline

ปรับปรุง deployment pipeline

1. ตั้งค่า CI/CD pipeline ที่ automated
2. ตั้งค่า staging environment ที่ mirror production
3. ตั้งค่า deployment gates (tests, security scans, approvals)
4. ใช้ artifact versioning และ immutable builds
5. ตั้งค่า deployment notifications
6. ทำ `/improve-config` สำหรับ environment configuration

### 6. Database Migration Strategy

ตั้งค่า database migration strategy

1. ใช้ backward-compatible migrations (expand-then-contract)
2. แยก schema changes จาก code changes
3. ตั้งค่า migration rollback strategy
4. ทดสอบ migrations บน staging data
5. ตั้งค่า migration health checks

### 7. Deployment Monitoring

ติดตาม deployment health

1. ติดตาม deployment metrics (duration, success rate)
2. ติดตาม post-deployment metrics (error rate, latency, traffic)
3. ตั้งค่า deployment alerts
4. ตั้งค่า automated canary analysis
5. ทำ `/improve-monitoring` สำหรับ monitoring integration

## Rules

### 1. Safe Defaults

- Deployment failure ต้องไม่กระทบ users
- Rollback ต้องทำได้ภายใน 5 นาที
- ไม่ deploy โดยไม่มี rollback plan
- ไม่ deploy โดยไม่มี monitoring

### 2. Progressive Rollout

- เริ่มจาก small percentage และเพิ่มทีละส่วน
- Monitor metrics ระหว่าง rollout
- หยุด rollout ถ้า metrics ผิดปกติ
- ใช้ feature flags สำหรับ feature-level control

### 3. Database Safety

- Migrations ต้อง backward-compatible
- ไม่ lock tables ใน production migration
- ทดสอบ migration บน staging
- มี rollback migration สำหรับทุก schema change

### 4. Automation Over Manual

- ไม่ deploy ด้วย manual process
- ใช้ CI/CD pipeline สำหรับทุก deployment
- ไม่ deploy โดยไม่ผ่าน automated tests
- ใช้ infrastructure as code

## Expected Outcome

- Deployment strategy เหมาะสมกับ project
- Zero-downtime deployment ทำงานได้
- Rollback strategy รวดเร็วและ reliable
- Deployment pipeline automated พร้อม gates
- Database migration strategy ปลอดภัย
- Deployment monitoring ครบถ้วน
