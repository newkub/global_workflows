---
title: Improve Caching Strategy
description: ปรับปรุง caching strategy และ invalidation
auto_execution_mode: 3
related_workflows:
  - /improve-database
  - /improve-api-contracts
  - /improve-performance
---

## Goal

ปรับปรุม caching strategy ให้มีประสิทธิภาพสูงสุดและ invalidation ที่ถูกต้อง

## Scope

ใช้สำหรับปรับปรุม caching ทั้ง client-side, server-side, และ database caching

## Execute

### 1. Analyze Current Caching

วิเคราะห์ caching ปัจจุบัน

1. ระบุ caching layers ที่มีอยู่
2. วิเคราะห์ cache hit rates
3. วิเคราะห์ cache miss patterns
4. ตรวจสอบ cache invalidation strategy
5. ตรวจสอบ cache expiration policies
6. ระบุ bottlenecks ใน caching

### 2. Define Caching Strategy

กำหนด caching strategy

1. กำหนด data ที่ควร cache
2. กำหนด cache duration สำหรับแต่ละ type
3. กำหนด cache invalidation rules
4. กำหนด cache hierarchy (L1, L2, L3)
5. กำหนด cache eviction policy
6. กำหนด cache warming strategy

### 3. Implement Client-Side Caching

ตั้งค่า client-side caching

1. ใช้ HTTP caching headers (Cache-Control, ETag)
2. ใช้ service workers สำหรับ offline caching
3. ใช้ localStorage/sessionStorage อย่างเหมาะสม
4. ใช้ IndexedDB สำหรับ large data
5. ใช้ cache-first สำหรับ static assets
6. ใช้ network-first สำหรับ dynamic data

### 4. Implement Server-Side Caching

ตั้งค่า server-side caching

1. ใช้ in-memory cache (Redis, Memcached)
2. ใช้ CDN caching สำหรับ static assets
3. ใช้ response caching สำหรับ API responses
4. ใช้ query result caching สำหรับ database
5. ใช computed value caching
6. ใช้ distributed caching สำหรับ scale

### 5. Implement Database Caching

ตั้งค่า database caching

1. ใช้ query result caching
2. ใช้ materialized views
3. ใช้ read replicas
4. ใช้ connection pooling
5. ใช้ prepared statement caching
6. ใช้ buffer pool optimization

### 6. Implement Cache Invalidation

ตั้งค่า cache invalidation

1. ใช้ time-based expiration (TTL)
2. ใช้ event-based invalidation
3. ใช้ manual invalidation
4. ใช้ cache tags สำหรับ group invalidation
5. ใช้ cache versioning
6. ใช้ write-through/write-back strategies

### 7. Monitor Cache Performance

ตรวจสอบ cache performance

1. Monitor cache hit rates
2. Monitor cache miss rates
3. Monitor cache size
4. Monitor cache eviction
5. Monitor cache latency
6. Monitor cache errors

### 8. Optimize Cache Configuration

ปรับปรุม cache configuration

1. ปรับ cache size limits
2. ปรับ cache TTL values
3. ปรับ cache eviction policy
4. ปรับ cache compression
5. ปรับ cache serialization
6. ปรับ cache consistency

## Rules

### 1. Caching Strategy

ใช้ caching อย่างมีประสิทธิภาพ

- Cache data ที่ expensive ในการ compute
- Cache data ที่ read-heavy
- ไม่ cache data ที่ write-heavy
- ไม่ cache data ที่ sensitive
- ใช้ appropriate cache duration

### 2. Cache Invalidation

Invalidation ต้องถูกต้อง

- ใช้ TTL สำหรับ automatic expiration
- ใช้ event-based invalidation สำหรับ real-time
- ใช้ manual invalidation สำหรับ critical updates
- ใช้ cache tags สำหรับ group invalidation
- หลีกเลี่ยย stale data

### 3. Cache Hierarchy

ใช้ cache hierarchy อย่างเหมาะสม

- L1: Browser cache (fastest, smallest)
- L2: CDN cache (fast, medium size)
- L3: Server cache (medium, large)
- L4: Database cache (slowest, largest)
- ใช้ appropriate cache layer

### 4. Cache Consistency

รักษา cache consistency

- ใช้ write-through สำหรับ strong consistency
- ใช้ write-back สำหรับ performance
- ใช้ cache invalidation ที่ถูกต้อง
- ใช้ cache versioning
- Monitor cache consistency

### 5. Cache Security

ปกป้อง cache

- ไม่ cache sensitive data
- ใช้ encryption สำหรับ sensitive caches
- ใช้ authentication สำหรับ cache access
- ใช้ cache isolation ตาม user/tenant
- Sanitize cached data

## Expected Outcome

- Caching strategy ที่ optimized
- Cache hit rates ที่สูง
- Cache invalidation ที่ถูกต้อง
- Cache hierarchy ที่เหมาะสม
- Cache consistency ที่เสถียร
- Cache monitoring ที่ active
- Cache configuration ที่ optimized
