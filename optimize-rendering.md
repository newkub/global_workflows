---
title: Optimize Rendering
description: ปรับปรุง rendering performance ด้วย systematic approach
auto_execution_mode: 3
---

## Goal

ปรับปรุง rendering performance เพื่อลด latency และเพิ่ม responsiveness ทุกภาษาทุก platform

## Execute

### 1. Analyze Performance Issues

ตรวจสอบปัญหา performance ทั่วไป

1. ใช้ `profiling tools` เฉพาะภาษาและ platform
2. ระบุ `bottlenecks` ด้วย flame graphs และ call stacks
3. ตรวจสอบ `unnecessary computations` และ `redundant operations`
4. วัด `response time`, `throughput`, และ `resource usage`

### 2. Apply Caching And Memoization

ใช้ caching และ memoization เพื่อลดการคำนวณซ้ำ

1. Implement `memoization` สำหรับ expensive functions
2. ใช้ `caching layers` (memory, disk, distributed)
3. ใช้ `cache invalidation` strategies (TTL, LRU, manual)
4. ใช้ `lazy evaluation` สำหรับ computations ที่ไม่จำเป็นทันที

### 3. Optimize Data Processing

ปรับปรุงการประมวลผลข้อมูล

1. ใช้ `pagination` สำหรับ data ขนาดใหญ่
2. Implement `streaming` สำหรับ real-time data
3. ใช้ `batching` สำหรับ operations หลายตัว
4. ใช้ `indexing` สำหรับ database queries

### 4. Implement Lazy Loading

โหลด resources เมื่อจำเป็น

1. ใช้ `lazy loading` สำหรับ modules และ components
2. ใช้ `on-demand loading` สำหรับ images และ media
3. Implement `prefetching` สำหรับ critical resources
4. ใช้ `loading states` และ `error boundaries`

### 5. Optimize Resource Usage

ปรับปรุงการใช้ resources

1. ใช้ `tree shaking` สำหรับ remove unused code
2. ใช้ `code splitting` ตาม features และ routes
3. ใช้ `minification` และ `compression`
4. ใช้ `CDN` สำหรับ static assets

### 6. Monitor And Validate

ตรวจสอบและ validate ผลลัพธ์

1. รัน `performance benchmarks` และ `load tests`
2. ตรวจสอบ `performance metrics` (response time, throughput, error rate)
3. Monitor `resource usage` ใน production (CPU, memory, network)
4. ตรวจสอบ `user experience metrics`

## Rules

### 1. Profiling Tools

ใช้ tools เฉพาะภาษาและ platform สำหรับวิเคราะห์ performance

- Web: `Chrome DevTools`, `Lighthouse`, `WebPageTest`, `React Profiler`, `Vue DevTools`
- Mobile: `Xcode Instruments`, `Android Profiler`, `Flipper`
- Server: `pprof`, `perf`, `APM tools` (Datadog, New Relic)
- Desktop: `Profiler` เฉพาะ platform (Visual Studio Profiler, IntelliJ Profiler)
- Languages: `profiling tools` เฉพาะภาษา (Python cProfile, Go pprof, Java JProfiler)

### 2. Caching Strategies

ใช้ caching อย่างเหมาะสมตาม use case

- `In-memory cache` สำหรับ data ที่เข้าถึงบ่อย (Redis, Memcached)
- `Memoization` สำหรับ pure functions (functools.lru_cache, useMemo, @cached)
- `CDN caching` สำหรับ static assets
- `Database query cache` สำหรับ queries ที่ซ้ำกัน
- `HTTP cache headers` สำหรับ API responses

### 3. Data Processing Optimization

ปรับปรุงการประมวลผลข้อมูลอย่าง systematic

- ใช้ `pagination` และ `cursor-based pagination` สำหรับ large datasets
- ใช้ `streaming` สำหรับ real-time data processing
- ใช้ `batching` สำหรับ bulk operations
- ใช้ `indexing` และ `query optimization` สำหรับ databases
- ใช้ `compression` สำหรับ data transfer

### 4. Lazy Loading Patterns

ใช้ lazy loading สำหรับ optimize initial load

- JavaScript/TypeScript: `dynamic imports`, `code splitting`, `React.lazy`, `defineAsyncComponent`
- Python: `lazy imports`, `on-demand module loading`
- Go: `lazy initialization`, `sync.Once`
- Java: `lazy loading` ด้วย `Supplier` หรือ `Optional`
- Mobile: `lazy loading` สำหรับ views และ images
- Implement `prefetching` สำหรับ critical paths

### 5. Resource Optimization

ปรับปรุง resource usage อย่าง systematic

- ใช้ `tree shaking` สำหรับ remove unused code (Webpack, Rollup, ESBuild)
- ใช้ `code splitting` ตาม routes และ features
- ใช้ `minification` (Terser, UglifyJS, ProGuard)
- ใช้ `compression` (Gzip, Brotli, Zstd)
- ใช้ `bundle analyzer` สำหรับ identify large dependencies
- ใช้ `CDN` สำหรับ static assets delivery

## Expected Outcome

- Performance ดีขึ้นอย่างเห็นได้ชัดทุก platform
- Response time ลดลง
- Resource usage มีประสิทธิภาพมากขึ้น
- User experience ดีขึ้น
- System scalability ดีขึ้น
- Performance metrics ผ่านเกณฑ์
