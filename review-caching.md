---
title: Review Caching
description: Review caching strategy ครอบคลุม invalidation, key design, TTL, storage, และ stale-while-revalidate
auto_execution_mode: 3
related:
  - /deep-analyze-with-use-scripts
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review caching strategy quality ครอบคลุม cache invalidation, cache key design, TTL configuration, storage selection และ stale-while-revalidate patterns

## Scope

cache invalidation, cache key design, TTL configuration, cache storage selection, stale-while-revalidate patterns, และ cache hit ratio optimization

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ caching structure
2. ระบุ caching patterns และ tools ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-with-use-scripts` เพื่อสร้าง `analyze-caching.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ cache invalidation strategy, key design, และ namespace management
3. Script ตรวจสอบ TTL configuration, expiration policy, และ cache eviction
4. Script ตรวจสอบ cache storage selection, memory vs persistent, และ distributed cache
5. Script ตรวจสอบ stale-while-revalidate patterns, cache warming, และ cache hit ratio
6. Script คำนวณ caching health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: cache poisoning, no invalidation on data change, cache stampede
- **High**: missing TTL, inconsistent cache key, no cache warming
- **Medium**: suboptimal TTL, missing stale-while-revalidate, low cache hit ratio
- **Low**: minor cache improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
