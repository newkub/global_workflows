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
  - /improve-notifications
  - /improve-webhooks
  - /improve-deployment-strategy
  - /improve-feature-flags
  - /improve-analytics
---

## Goal

ปรับปรุง integrations, realtime services, DevOps, monitoring และ cost optimization ของ codebase

## Scope

ใช้สำหรับการปรับปรุงด้าน operations ของ codebase ทั้ง integrations, CI/CD, deployment และ monitoring

## Execute

### 1. Integrations And Realtime

1. ทำ `/improve-integrations` เพื่อปรับปรุง integrations ครบวงจร
2. ถ้า project มี realtime features ทำ `/improve-realtime-services`
3. ถ้า project มี notifications ทำ `/improve-notifications` เพื่อปรับปรุง multi-channel notifications
4. ถ้า project มี webhooks ทำ `/improve-webhooks` เพื่อปรับปรุง webhook delivery และ verification

### 2. DevOps And Monitoring

1. ทำ `/improve-devops` เพื่อปรับปรุง CI/CD, deployment, env config
2. ทำ `/improve-deployment-strategy` เพื่อปรับปรุง deployment และ rollback strategy
3. ทำ `/improve-feature-flags` สำหรับ gradual rollout และ kill switches
4. ทำ `/improve-monitoring` เพื่อปรับปรุง monitoring ครบวงจร
5. ถ้า project มี analytics ทำ `/improve-analytics` เพื่อปรับปรุง product analytics
6. ถ้า project มี cost concerns ทำ `/improve-cost-optimization`

## Rules

### 1. Execution Order

- ทำทีละ section และตรวจสอบ
- ถ้าพบ issues ทำ `/resolve-errors` ก่อนดำเนินต่อ
- ทำ `/update-reference` หลังแต่ละ section
- รัน tests หลังแต่ละ improvement และตรวจสอบ coverage ไม่ลดลง

## Expected Outcome

- Integrations, realtime, notifications, webhooks ถูกปรับปรุง
- DevOps, CI/CD, deployment strategy, feature flags ถูกปรับปรุง
- Monitoring, analytics, cost optimization ถูกปรับปรุง
