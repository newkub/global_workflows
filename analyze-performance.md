---
title: Analyze Performance
description: วิเคราะห์ performance: bundle size, render, N+1 queries, memory leaks, lazy loading
auto_execution_mode: 3
related_workflows:
  - /improve-performance
  - /improve-web-performance
  - /improve-caching
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ performance issues ของ codebase เพื่อระบุ bottlenecks และ optimization opportunities

## Scope

Bundle size, render performance, database queries, memory leaks, lazy loading, caching, code splitting, synchronous blocking, pagination, image optimization

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม performance metrics ผ่าน scripts (bundle analysis, query counting, render profiling)

### 2. Analyze Bundle Size

1. ระบุ heavy dependencies ที่ inflate bundle
2. ระบุ missing tree-shaking opportunities
3. ระบุ missing code splitting และ dynamic imports
4. ระบุ duplicate dependencies ข้าม chunks
5. ระบุ missing vendor chunk splitting
6. ระบุ missing route-level code splitting
7. ระบุ large polyfills ที่ไม่จำเป็น

### 3. Analyze Render Performance

1. ระบุ unnecessary re-renders ใน components
2. ระบุ missing memoization ที่ควรมี
3. ระบุ expensive computations ใน render path
4. ระบุ missing virtual scrolling สำหรับ large lists
5. ระบุ layout thrashing และ forced reflows
6. ระบุ missing `requestAnimationFrame` สำหรับ visual updates
7. ระบุ heavy synchronous operations ใน render path

### 4. Analyze Database Queries

1. ระบุ N+1 query patterns
2. ระบุ missing indexes จาก query patterns
3. ระบุ missing pagination สำหรับ large result sets
4. ระบุ over-fetching (selecting more columns than needed)
5. ระบุ missing query caching
6. ระบุ missing connection pooling
7. ระบุ transactions ที่ hold locks นานเกินไป

### 5. Analyze Memory Management

1. ระบุ memory leaks (missing cleanup, event listeners, timers)
2. ระบุ large object allocations ใน hot paths
3. ระบุ missing object pooling สำหรับ frequent allocations
4. ระบุ retained references (closures, caches ที่ไม่ expire)
5. ระบุ missing `WeakMap`/`WeakRef` สำหรับ disposable references
6. ระบุ growing caches ที่ไม่มี eviction policy

### 6. Analyze Network Performance

1. ระบุ missing lazy loading สำหรับ routes และ components
2. ระบุ missing image optimization (WebP, AVIF, lazy load, responsive)
3. ระบุ missing prefetch/preload สำหรับ critical resources
4. ระบุ waterfall request patterns
5. ระบุ missing CDN usage สำหรับ static assets
6. ระบุ missing compression (gzip, brotli)
7. ระบุ oversized API responses ที่ควรเป็น partial หรือ paginated

### 7. Analyze Caching Strategy

1. ระบุ missing cache layers (HTTP cache, app cache, query cache)
2. ระบุ missing cache invalidation strategy
3. ระบุ cache key collisions
4. ระบุ missing stale-while-revalidate patterns
5. ระบุ missing `ETag`/`Last-Modified` headers
6. ระบุ missing `Cache-Control` directives ที่เหมาะสม

### 8. Analyze Synchronous Blocking

1. ระบุ synchronous operations ที่ควรเป็น async (JSON parse ขนาดใหญ่, file I/O)
2. ระบุ long-running tasks ที่ block main thread
3. ระบุ missing Web Workers สำหรับ CPU-intensive tasks
4. ระบุ missing streaming สำหรับ large data processing
5. ระบุ blocking animations ที่ไม่ใช้ `requestAnimationFrame`

### 9. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: database → synchronous blocking → bundle → render → memory → network → caching

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม location และ estimated impact

### 2. Performance Budgets

- LCP < 2.5s, INP < 200ms, CLS < 0.1
- Bundle size < 200KB initial
- Time to Interactive < 3.8s
- FCP < 1.8s, TTFB < 800ms

### 3. Severity Classification

- **Critical**: N+1 queries, memory leaks, blocking main thread > 100ms
- **High**: missing pagination, bundle > 500KB, LCP > 4s, missing lazy loading
- **Medium**: missing memoization, missing cache layers, missing code splitting
- **Low**: missing prefetch, missing brotli compression, minor tree-shaking gaps

### 4. Framework Awareness

- ตรวจสอบ framework-specific performance patterns (SolidJS fine-grained reactivity vs React reconciliation)
- ระบุ framework-specific anti-patterns (React `useEffect` ใน SolidJS, missing `createMemo`)
- ตรวจสอบ SSR/SSG ที่ส่งผลต่อ hydration performance
- ถ้า project ใช้ Vite ตรวจสอบ `manualChunks` และ vendor splitting

### 5. Monorepo Considerations

- ถ้าเป็น monorepo ให้วิเคราะห์แต่ละ workspace ที่มี frontend แยก
- ระบุ shared dependencies ที่ inflate bundle ข้าม workspaces
- ตรวจสอบ build output ของแต่ละ workspace ว่าไม่เกิน budget
- ระบุ missing shared chunk strategy ข้าม workspaces

### 6. Use Scripts For Metrics

- ใช้ `/deep-analyze-with-use-scripts` เสมอสำหรับ performance analysis
- ใช้ `/use-scripts` สำหรับ bundle analysis และ query counting
- ใช้ `/improve-web-performance` สำหรับ Core Web Vitals optimization

## Expected Outcome

- Performance bottlenecks ระบุพร้อม location, severity และ estimated impact
- Synchronous blocking และ pagination issues ระบุชัดเจน
- พร้อมสำหรับ `/improve-performance` หรือ `/improve-web-performance`
