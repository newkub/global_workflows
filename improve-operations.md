---
title: Improve Operations
description: ปรับปรุง integrations, realtime, DevOps, monitoring และ cost optimization
auto_execution_mode: 3
related_workflows:
  - /improve-integrations
  - /improve-realtime-services
  - /improve-devops
  - /improve-monitoring
  - /improve-cost-optimization
---

## Goal

ปรับปรุง integrations, realtime services, DevOps, monitoring และ cost optimization ของ codebase

## Scope

ใช้สำหรับการปรับปรุงด้าน operations ของ codebase ทั้ง integrations, CI/CD, deployment และ monitoring

## Execute

### 1. Integrations And Realtime

1. ทำ `/improve-integrations` เพื่อปรับปรุง integrations ครบวงจร
2. ถ้า project มี realtime features ทำ `/improve-realtime-services`

### 2. DevOps And Monitoring

1. ทำ `/improve-devops` เพื่อปรับปรุง CI/CD, deployment, env config
2. ทำ `/improve-monitoring` เพื่อปรับปรุง monitoring ครบวงจร
3. ถ้า project มี cost concerns ทำ `/improve-cost-optimization`

## Rules

### 1. Execution Order

- ทำทีละ section และตรวจสอบ
- ถ้าพบ issues ทำ `/resolve-errors` ก่อนดำเนินต่อ
- ทำ `/update-reference` หลังแต่ละ section
- รัน tests หลังแต่ละ improvement และตรวจสอบ coverage ไม่ลดลง

## Expected Outcome

- Integrations และ realtime services ถูกปรับปรุง
- DevOps, CI/CD, deployment ถูกปรับปรุง
- Monitoring และ cost optimization ถูกปรับปรุง
