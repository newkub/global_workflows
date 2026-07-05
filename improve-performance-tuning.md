---
title: Improve Performance Tuning
description: ปรับปรุง bundle size และ caching strategy ครบวงจร
auto_execution_mode: 3
related_workflows:
  - improve-web-performance
  - improve-web-rendering
  - improve-scalability
  - improve-database
---

## Goal

ปรับปรุง performance ผ่าน bundle size optimization และ caching strategy ที่มีประสิทธิภาพ

## Scope

ใช้สำหรับ project ที่ต้องการลด bundle size และตั้งค่า caching ทั้ง browser, server, และ CDN level

## Execute

### 1. Bundle Size Optimization

ปรับปรุง bundle size

1. วิเคราะห์ bundle composition และ largest modules
2. ตั้งค่า code splitting และ lazy loading
3. ตรวจสอบ tree shaking ทำงานถูกต้อง
4. ใช้ dynamic imports สำหรับ route-based splitting
5. ตรวจสอบ vendor chunk strategy
6. ตั้งค่า compression (gzip, brotli) สำหรับ static assets

### 2. Browser Caching

ปรับปรุง browser caching

1. ตั้งค่า Cache-Control headers ที่เหมาะสม
2. ใช้ immutable cache สำหรับ hashed assets
3. ตั้งค่า ETags สำหรับ dynamic content
4. ตรวจสอบ cache busting strategy
5. ใช้ service worker cache สำหรับ offline

### 3. Server Caching

ปรับปรุง server-side caching

1. วิเคราะห์ cache layers (memory, Redis, CDN)
2. ตั้งค่า cache invalidation strategy
3. Implement cache warming สำหรับ critical data
4. ตรวจสอบ cache hit rate และ optimize
5. ทำ `/improve-database` สำหรับ query caching

### 4. CDN Optimization

ปรับปรุง CDN configuration

1. ตั้งค่า CDN cache rules
2. ใช้ edge caching สำหรับ static assets
3. ตรวจสอบ CDN purge strategy
4. ตั้งค่า image optimization และ transformation
5. ทำ `/improve-web-performance` สำหรับ Core Web Vitals

## Rules

### 1. Measure First

- วัด bundle size ก่อนและหลัง optimize
- ใช้ bundle analyzer สำหรับ identify bloat
- ตั้งค่า performance budget
- Monitor cache hit rates

### 2. Cache Wisely

- ไม่ cache dynamic content ที่ user-specific
- ใช้ stale-while-revalidate สำหรับ semi-static data
- ตั้งค่า cache TTL ตาม data freshness requirements
- Implement cache fallback สำหรับ cache misses

### 3. Progressive Loading

- โหลด critical CSS ก่อน
- Lazy load non-critical JavaScript
- ใช้ prefetch สำหรับ likely-next pages
- Defer non-critical operations

## Expected Outcome

- Bundle size ลดลงอย่างมีนัยสำคัญ
- Browser caching ตั้งค่าถูกต้อง พร้อม cache busting
- Server caching ลด database load
- CDN configuration ครบถ้วน
- Performance budget กำหนดและ enforced
