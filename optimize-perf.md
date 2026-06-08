---
title: Optimize Performance
description: ปรับปรุง performance ของ application ด้วย systematic approach
auto_execution_mode: 3
---

## Goal

ปรับปรุง performance ของ application ด้วย systematic approach ตาม best practices

## Execute

### 1. Analyze Performance

วิเคราะห์ performance ปัจจุบันของ application

1. รัน performance profiling tools ด้วย `/follow-unlighthouse`
2. วัด Core Web Vitals (LCP, FID, CLS)
3. ระบุ bottlenecks ใน application
4. ตรวจสอบ bundle size และ load times
5. วิเคราะห์ database query performance

### 2. Optimize Bundle

ปรับปรุง bundle size และ loading

1. ลด bundle size ด้วย tree shaking และ code splitting
2. เพิ่ม lazy loading สำหรับ routes และ components
3. ใช้ dynamic imports สำหรับ heavy dependencies
4. ตรวจสอบและลบ unused dependencies
5. ใช้ compression (gzip, brotli) สำหรับ assets

### 3. Optimize Database

ปรับปรุง database query performance

1. แก้ไข N+1 query problems
2. เพิ่ม indexes สำหรับ queries ที่ช้า
3. ใช้ query batching และ caching
4. ปรับปรุง query efficiency ด้วย proper joins
5. ใช้ connection pooling

### 4. Implement Caching

ใช้ caching strategies เพื่อลด load

1. ใช้ HTTP caching headers
2. Implement CDN สำหรับ static assets
3. ใช้ in-memory caching (Redis, Memcached)
4. Implement cache invalidation strategies
5. Cache computed results และ expensive operations

### 5. Fix Memory Issues

แก้ไข memory leaks และ resource cleanup

1. ตรวจสอบ memory leaks ด้วย profiling tools
2. Cleanup event listeners และ subscriptions
3. ใช้ weak references สำหรับ large objects
4. Implement proper resource disposal
5. Monitor memory usage ใน production

### 6. Optimize Rendering

ปรับปรุง rendering performance

1. ใช้ virtual scrolling สำหรับ long lists
2. Implement debouncing และ throttling
3. ใช้ memoization สำหรับ expensive computations
4. ลด unnecessary re-renders
5. ใช้ CSS animations แทน JavaScript animations

### 7. Monitor Performance

ตรวจสอบและวัด performance อย่างต่อเนื่อง

1. ตั้งค่า performance monitoring (APM)
2. ตรวจสอบ Core Web Vitals อย่างต่อเนื่อง
3. ตั้งค่า alerts สำหรับ performance degradation
4. วิเคราะห์ user behavior และ load patterns
5. ปรับปรุงตามข้อมูลจาก monitoring

## Rules

### Performance Analysis

วิเคราะห์ performance ก่อนเริ่ม optimize

- รัน profiling tools ก่อนเสมอ
- วัด baseline metrics ก่อนเริ่ม
- ระบุ bottlenecks ที่สำคัญก่อน
- เน้นที่ impact สูงก่อน

### Bundle Optimization

ปรับปรุง bundle size อย่างมีประสิทธิภาพ

- ใช้ code splitting และ lazy loading
- ลด dependencies ที่ไม่จำเป็น
- ใช้ tree shaking อย่างเต็มที่
- Compress assets ด้วย gzip และ brotli

### Database Optimization

ปรับปรุง database performance

- แก้ไข N+1 queries เป็น priority
- เพิ่ม indexes สำหรับ queries ที่ช้า
- ใช้ connection pooling
- Monitor query performance อย่างต่อเนื่อง

### Caching Strategy

ใช้ caching อย่างเหมาะสม

- ใช้ multi-level caching (browser, CDN, server)
- Implement cache invalidation ที่ชัดเจน
- Cache สิ่งที่ expensive และซ้ำๆ
- ตั้งค่า cache TTL ที่เหมาะสม

### Memory Management

จัดการ memory อย่างเหมาะสม

- Cleanup resources เสมอเมื่อไม่ใช้
- ตรวจสอบ memory leaks อย่างสม่ำเสมอ
- ใช้ weak references สำหรับ large objects
- Monitor memory usage ใน production

### Monitoring

ตรวจสอบ performance อย่างต่อเนื่อง

- ตั้งค่า AM tools
- ตรวจสอบ Core Web Vitals
- ตั้งค่า alerts สำหรับ issues
- ปรับปรุงตามข้อมูลจาก monitoring

## Expected Outcome

- Bundle size ลดลงอย่างมีนัยสำคัญ
- Database queries มีประสิทธิภาพมากขึ้น
- Application load times ลดลง
- Core Web Vitals ดีขึ้น
- Memory usage มีประสิทธิภาพมากขึ้น
- Performance monitoring ตั้งค่าเสร็จสมบูรณ์
