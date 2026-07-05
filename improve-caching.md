---
title: Improve Caching
description: ปรับปรุง caching strategy ครบวงจรทั้ง cache layers, invalidation, และ patterns
auto_execution_mode: 3
related_workflows:
  - improve-performance-tuning
  - improve-web-performance
  - improve-database
  - improve-network
---

## Goal

ปรับปรุง caching strategy ให้ครอบคลุมทุก layer ตั้งแต่ browser, CDN, server, ถึง database

## Scope

ใช้สำหรับ project ที่ต้องการ caching strategy เฉพาะตัว ไม่ใช่ส่วนหนึ่งของ performance tuning

## Execute

### 1. Analyze Cache Layers

วิเคราะห์ cache layers ปัจจุบัน

1. ตรวจสอบ browser cache (Cache-Control, ETag, Last-Modified)
2. ตรวจสอบ CDN cache rules และ edge caching
3. ตรวจสอบ server-side cache (memory, Redis, in-process)
4. ตรวจสอบ database query cache และ result cache
5. ตรวจสอบ application-level cache (function results, computed values)
6. ทำ `/improve-performance-tuning` สำหรับ bundle และ HTTP caching

### 2. Cache Patterns

เลือก cache patterns ที่เหมาะสม

1. ใช้ cache-aside สำหรับ read-heavy, slow queries
2. ใช้ write-through สำหรับ data ที่ต้อง consistent เสมอ
3. ใช้ write-behind สำหรับ high-write, tolerate eventual consistency
4. ใช้ read-through สำหรับ transparent cache access
5. ใช้ refresh-ahead สำหรับ hot data ที่ expire บ่อย

### 3. Cache Invalidation

ตั้งค่า cache invalidation strategy

1. ใช้ TTL-based expiration สำหรับ data ที่ tolerate stale
2. ใช้ event-based invalidation สำหรับ data ที่ต้อง fresh
3. ใช้ tag-based invalidation สำหรับ grouped cache entries
4. ตั้งค่า cache busting สำหรับ static assets (hashed filenames)
5. ใช้ stale-while-revalidate สำหรับ semi-static data
6. หลีกเลี่ยง cache stampede ด้วย single-flight หรือ locks

### 4. Cache Key Design

ออกแบบ cache key ที่มีประสิทธิภาพ

1. ใช้ deterministic keys จาก input parameters
2. รวม version หรือ tenant ID ใน key เมื่อจำเป็น
3. หลีกเลี่ยง keys ที่ยาวเกินไป (hash ถ้าจำเป็น)
4. ใช้ namespace prefixes สำหรับ grouped invalidation
5. ตรวจสอบ key collisions ข้าม features

### 5. Cache Monitoring

ติดตาม cache effectiveness

1. ตรวจสอบ cache hit rate และ miss rate
2. ตรวจสอบ cache eviction และ memory usage
3. ตรวจสอบ cache latency และ overhead
4. ตั้งค่า alerts สำหรับ low hit rate
5. ทำ `/improve-observability` สำหรับ cache metrics

## Rules

### 1. Right Layer Right Data

- ไม่ cache ทุกอย่าง — cache เฉพาะ expensive หรือ frequently accessed data
- Browser cache สำหรับ static assets เท่านั้น
- CDN cache สำหรับ public, cacheable content
- Server cache สำหรับ computed หรือ database-heavy results
- ไม่ cache user-specific data ใน shared cache layers

### 2. Invalidation Is Hard

- เลือก invalidation strategy ตาม data freshness requirements
- TTL เป็น default ที่ปลอดภัยที่สุด
- Event-based invalidation สำหรับ critical data
- ไม่ใช้ cache โดยไม่มี invalidation plan

### 3. Measure First

- วัด cache hit rate ก่อนและหลัง optimize
- วัด cache memory usage และ eviction rate
- วัด latency รวม cache lookup overhead
- ตั้งค่า performance budget สำหรับ cache layer

## Expected Outcome

- Cache layers ครอบคลุมทุกระดับ
- Cache patterns เหมาะสมกับ data type
- Invalidation strategy ชัดเจน ไม่มี stale data
- Cache hit rate สูง ลด database load
- Cache monitoring ครบถ้วน
