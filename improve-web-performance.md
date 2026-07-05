---
title: Improve Web Performance
description: ปรับปรุง web performance ด้วย Core Web Vitals และ optimization
auto_execution_mode: 3
related_workflows:
  - check-performance
  - run-profile
---

## Goal

ปรับปรุง web performance ให้ดีขึ้นตาม Core Web Vitals และ best practices

## Scope

ใช้สำหรับปรับปรุง performance ของ web applications

## Execute

### 1. Check Performance

ตรวจสอบ performance ปัจจุบัน

1. ทำ `/check-performance` เพื่อตรวจสอบ Core Web Vitals
2. ตรวจสอบ LCP, INP, CLS
3. ตรวจสอบ bundle size
4. ตรวจสอบ network และ runtime performance
5. รัน Lighthouse audit

### 2. Optimize Assets

ปรับปรุง assets

1. Optimize images (WebP, lazy load)
2. Minify JavaScript และ CSS
3. ใช้ code splitting
4. ใช้ tree shaking
5. ลด bundle size

### 3. Optimize Loading

ปรับปรุง loading

1. ลด render-blocking resources
2. ใช้ lazy loading สำหรับ heavy components
3. ใช้ prefetch และ preload
4. Optimize critical CSS
5. ใช้ caching อย่างเหมาะสม

### 4. Optimize Runtime

ปรับปรุง runtime performance

1. ลด unnecessary re-renders
2. ใช้ memoization
3. Optimize algorithms
4. ลด memory leaks
5. ตรวจสอบ frame rate (60fps)

### 5. Profile And Monitor

Profile และ monitor

1. ทำ `/run-profile` เพื่อ profile performance
2. ตรวจสอบ bottlenecks
3. Monitor performance metrics
4. Set up performance budgets
5. Integrate ใน CI/CD

## Rules

### 1. Performance Targets

ทำตามเป้าหมาย performance

- LCP: < 2.5s (good), < 4s (needs improvement)
- INP: < 200ms (good), < 500ms (needs improvement)
- CLS: < 0.1 (good), < 0.25 (needs improvement)
- Performance Score: > 90 (good), > 50 (needs improvement)

### 2. Bundle Size Guidelines

ทำตามเกณฑ์ bundle size

- JavaScript: < 200KB compressed
- CSS: < 50KB compressed
- Images: WebP format, lazy load
- Total: < 1MB initial load

### 3. Priority-Based Optimization

ปรับปรุงตามลำดับความสำคัญ

- Critical: ทำให้ page โหลดไม่ได้
- High: ทำให้ performance แย่มาก
- Medium: ทำให้ performance แย่เล็กน้อย
- Low: เป็น best practices

## Expected Outcome

- Core Web Vitals ผ่านทั้งหมด
- Performance score > 90
- Bundle size อยู่ในเกณฑ์ที่เหมาะสม
- Loading time รวดเร็ว
- Runtime performance ลื่นไหล
- Performance budgets ผ่าน
