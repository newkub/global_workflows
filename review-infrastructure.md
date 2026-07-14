---
title: Review Infrastructure
description: Orchestrator สำหรับ review infrastructure ครอบคลุม deployment, CI/CD, monitoring, caching, performance, cost, resilience, DR
auto_execution_mode: 3
related:
  - /review-deployment
  - /review-cicd
  - /review-config-files
  - /review-monitoring
  - /review-tracing
  - /review-disaster-recovery
  - /review-backup
  - /review-performance
  - /review-caching
  - /review-bundler
  - /review-cost
  - /review-integrations
  - /review-resilience
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Orchestrate infrastructure review ครอบคลุมทุก dimension ของ infrastructure ผ่าน sub-workflows พร้อม aggregate findings

## Scope

infrastructure orchestrator สำหรับ: deployment, CI/CD, config, monitoring, tracing, disaster recovery, backup, performance, caching, bundler, cost, integrations, resilience

## Execute

### 1. Run Sub-Workflows

ทำ review-* sub-workflows ตามลำดับ ถ้าพบ critical issues ให้หยุดและ validate ก่อนดำเนินต่อ

1. ทำ `/review-deployment` เพื่อ review CI/CD, config, env vars, rollback, feature flags, versioning
2. ทำ `/review-cicd` เพื่อ review CI/CD workflows, job dependencies, caching, secrets, pipeline efficiency
3. ทำ `/review-config-files` เพื่อ review tsconfig, vite, biome, env configs, config consistency
4. ทำ `/review-monitoring` เพื่อ review metrics, alerts, dashboards, incident response readiness
5. ทำ `/review-tracing` เพื่อ review request correlation, span propagation, trace context, trace sampling
6. ทำ `/review-disaster-recovery` เพื่อ review RPO/RTO, failover, data backup, recovery procedures, DR testing
7. ทำ `/review-backup` เพื่อ review backup strategy, restore testing, recovery procedures, RPO/RTO
8. ทำ `/review-performance` เพื่อ review queries, caching, bundle size, rendering, web performance
9. ทำ `/review-caching` เพื่อ review cache invalidation, key design, TTL, storage selection, stale-while-revalidate
10. ทำ `/review-bundler` เพื่อ review bundler config, chunk splitting, tree shaking, minification, source maps
11. ทำ `/review-cost` เพื่อ review resource usage, billing, waste elimination, cost monitoring
12. ทำ `/review-integrations` เพื่อ review API client design, error handling, retry, circuit breaker, vendor lock-in
13. ทำ `/review-resilience` เพื่อ review circuit breakers, fallbacks, graceful degradation, retry strategies, bulkhead

### 2. Validate Findings

1. ทำ `/validate` สำหรับ validate issues จากทุก sub-workflow
2. จัดลำดับการ validate ตาม severity: Critical → High → Medium → Low

### 3. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง aggregate findings จากทุก sub-workflow
3. ทำ `/suggest-next-action`

## Rules

### 1. Skip Conditions

- ถ้า project ไม่มี deployment ให้ข้าม `/review-deployment`
- ถ้า project ไม่มี CI/CD pipeline ให้ข้าม `/review-cicd`
- ถ้า project ไม่มี config files ให้ข้าม `/review-config-files`
- ถ้า project ไม่มี monitoring ให้ข้าม `/review-monitoring`
- ถ้า project ไม่มี distributed system ให้ข้าม `/review-tracing`
- ถ้า project ไม่มี disaster recovery plan ให้ข้าม `/review-disaster-recovery`
- ถ้า project ไม่มี data backup ให้ข้าม `/review-backup`
- ถ้า project ไม่มี performance concerns ให้ข้าม `/review-performance`
- ถ้า project ไม่มี caching ให้ข้าม `/review-caching`
- ถ้า project ไม่มี build step ให้ข้าม `/review-bundler`
- ถ้า project ไม่มี cloud resources ให้ข้าม `/review-cost`
- ถ้า project ไม่มี third-party integrations ให้ข้าม `/review-integrations`
- ถ้า project ไม่มี external service dependencies ให้ข้าม `/review-resilience`

### 2. Delegation

- Orchestrator เรียก sub-workflows เท่านั้น ไม่ทำ review เอง
- ไม่ duplicate เนื้อหา sub-workflows

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง aggregate findings จากทุก infrastructure sub-workflow
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
