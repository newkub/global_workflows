---
title: Analyze Caching
description: วิเคราะห์ cache layers, invalidation strategy, cache hit ratio, CDN
auto_execution_mode: 3
related_workflows:
  - /analyze-performance
  - /improve-caching
  - /improve-performance-tuning
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ caching strategy และ cache layers เพื่อระบุ performance opportunities

## Scope

Cache layers (browser, CDN, server, database), invalidation strategy, cache hit ratio, TTL configuration, cache key design, CDN configuration, query cache, response cache

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม caching metrics ผ่าน scripts (cache pattern detection, TTL analysis, CDN config scan)

### 2. Check Cache Layers

1. ระบุ missing browser cache headers (Cache-Control, ETag, Last-Modified)
2. ระบุ missing CDN cache configuration
3. ระบุ missing server-side cache (Redis, in-memory)
4. ระบุ missing database query cache
5. ระบุ missing response cache สำหรับ expensive API calls
6. ระบุ missing TanStack Query cache configuration

### 3. Check Invalidation Strategy

1. ระบุ missing cache invalidation mechanism
2. ระบุ cache invalidation ที่ไม่ครอบคลุม (stale data)
3. ระบุ over-invalidation (cache thrashing)
4. ระบุ missing tag-based invalidation
5. ระบุ missing manual cache purge mechanism
6. ระบุ missing cache invalidation on data mutation

### 4. Check TTL Configuration

1. ระบุ missing TTL สำหรับ cache entries
2. ระบุ TTL ที่ไม่เหมาะสม (too short, too long)
3. ระบุ missing stale-while-revalidate configuration
4. ระบุ missing stale-if-error configuration
5. ระบุ missing dynamic TTL ตาม data type

### 5. Check Cache Key Design

1. ระบุ cache key ที่ไม่ unique (collisions)
2. ระบุ cache key ที่ยาวเกินไป (memory waste)
3. ระบุ missing cache key versioning
4. ระบุ missing cache key namespacing
5. ระบุ missing user-specific cache keys

### 6. Check CDN Configuration

1. ระบุ missing CDN setup
2. ระบุ missing CDN cache rules
3. ระบุ missing CDN image optimization
4. ระบุ missing CDN gzip/brotli compression
5. ระบุ missing CDN edge functions

### 7. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: cache layers → invalidation → TTL → cache key → CDN

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม location และ severity

### 2. Severity Classification

- **Critical**: no caching at all, missing invalidation causing stale data
- **High**: missing CDN, missing server cache, no cache headers
- **Medium**: suboptimal TTL, missing stale-while-revalidate, poor cache key design
- **Low**: missing cache key versioning, missing CDN edge functions

### 3. Framework Awareness

- ตรวจสอบ TanStack Query cache configuration
- ตรวจสอบ Cloudflare CDN cache rules
- ระบุ framework-specific caching solutions

### 4. Use Scripts For Cache Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ cache pattern detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- Caching gaps ระบุพร้อม location และ severity
- Cache layer coverage และ invalidation issues จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-caching` หรือ `/improve-performance-tuning`
