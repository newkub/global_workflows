---
title: Deep Optimize
description: Performance optimization อย่างลึกซึ้ง ครอบคลุม bundle, queries, rendering, caching
auto_execution_mode: 3
related:
  - /deep-thinking
  - /deep-analyze
  - /deep-research
  - /deep-review
  - /deep-review
  - /deep-review
  - /deep-review
  - /review-performance
  - /report-format-table
---

## Goal

Performance optimization อย่างลึกซึ้ง ครอบคลุม bundle size, database queries, rendering, caching, runtime พร้อม before-after metrics

## Scope

ใช้สำหรับ optimization ครบวงจร ไม่ใช่การวิเคราะห์เฉพาะ frontend (ใช้ `/deep-review`) ครอบคลุม: frontend, backend, database, caching, runtime

## Execute

### 1. Deep Thinking Phase

ทำ `/deep-thinking` เพื่อวางแผน optimization

1. กำหนด performance goals และ success criteria
2. ระบุ bottlenecks ที่สงสัยจาก user reports หรือ monitoring
3. สร้าง hypothesis list ของ optimization areas
4. จัดลำดับตาม expected impact และ effort

### 2. Baseline Metrics

วัด baseline performance ก่อนเริ่ม optimization

1. วัด Core Web Vitals สำหรับ frontend: LCP, INP, CLS, FCP, TBT
2. วัด API response times สำหรับ backend
3. วัด database query times สำหรับ data layer
4. วัด bundle size และ asset sizes
5. บันทึก baseline เป็น metric สำหรับเปรียบเทียบ

### 3. Frontend Optimization

ทำ `/deep-review` และ `/deep-review` สำหรับ frontend

1. ทำ `/deep-review` วิเคราะห์ Core Web Vitals
2. ทำ `/deep-review` วิเคราะห์ bundle size และ tree shaking
3. ระบุ render-blocking resources และ lazy loading opportunities
4. ระบุ code splitting และ vendor chunk optimization
5. ระบุ image/font/icon optimization opportunities

### 4. Backend And Database

ทำ `/deep-review` สำหรับ backend และ data layer

1. ทำ `/deep-review` วิเคราะห์ query patterns และ indexes
2. ระบุ N+1 queries และ unnecessary queries
3. ระบุ missing indexes และ slow queries
4. ระบุ connection pooling issues
5. ระบุ API response optimization: pagination, field selection, compression

### 5. Caching Strategy

ทำ `/deep-review` สำหรับ caching optimization

1. ทำ `/deep-review` วิเคราะห์ cache layers และ invalidation
2. ระบุ missing cache layers: CDN, application, database
3. ระบุ cache invalidation issues
4. ระบุ cache hit ratio และ optimization opportunities
5. วางแผน cache strategy: stale-while-revalidate, tag-based invalidation

### 6. Runtime Optimization

วิเคราะห์ runtime performance

1. ระบุ memory leaks และ excessive allocations
2. ระบุ CPU-intensive operations ที่ควรเป็น async หรือ worker
3. ระบุ unnecessary re-renders หรือ reactivity issues
4. ระบุ event listener leaks และ cleanup issues
5. ระบุ startup time optimization

### 7. Research Best Practices

ทำ `/deep-research` เพื่อค้นหา optimization techniques

1. ค้นหา performance best practices สำหรับ tech stack ที่ใช้
2. ค้นหา latest optimization techniques และ tools
3. เปรียบเทียบ findings กับ current implementation
4. ระบุ industry benchmarks สำหรับเปรียบเทียบ

### 8. Report And Optimize

1. ทำ `/report-format-table` สร้างตาราง optimization opportunities พร้อม impact และ effort
2. จัดลำดับ: high impact + low effort ก่อน
3. แนะนำขั้นตอนถัดไป: `/review-performance` สำหรับ implement optimizations
4. วัด metrics หลัง optimization เพื่อเปรียบเทียบ before-after

## Rules

### 1. Severity Classification

- **Critical**: LCP > 4s, API response > 5s, query > 10s, bundle > 2MB
- **High**: LCP > 2.5s, API response > 2s, query > 3s, bundle > 500KB
- **Medium**: LCP > 1.5s, API response > 1s, missing cache, no lazy loading
- **Low**: minor optimizations, missing compression, minor re-renders

### 2. Measure Before Optimize

- ต้องมี baseline metrics ก่อน optimization เสมอ
- วัด metrics หลัง optimization เพื่อยืนยันการปรับปรุง
- ใช้ real metrics ไม่ใช่การเดา

### 3. Non-Redundancy

- อ้างถึง `/deep-review` สำหรับ frontend analysis ไม่ duplicate
- อ้างถึง `/deep-review` สำหรับ bundle analysis
- อ้างถึง `/deep-review` สำหรับ database analysis
- อ้างถึง `/deep-review` สำหรับ caching analysis
- เพิ่มคุณค่าด้วย holistic view, runtime, before-after comparison

### 4. Conditional Execution

- ถ้าไม่มี frontend ให้ข้าม frontend optimization
- ถ้าไม่มี database ให้ข้าม database optimization
- ถ้าไม่มี API ให้ข้าม API optimization
- ถ้าไม่มี caching layer ให้ข้าม caching analysis

## Expected Outcome

- Performance bottlenecks ระบุพร้อม severity และ location
- Before-after metrics แสดงการปรับปรุง
- Optimization opportunities จัดลำดับตาม impact และ effort
- Holistic view ครอบคลุม frontend, backend, database, caching, runtime
- พร้อมสำหรับ `/review-performance` เพื่อ implement optimizations
