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

- ทำ `/check-performance` เพื่อตรวจสอบ Core Web Vitals
- ตรวจสอบ LCP, INP, CLS
- ตรวจสอบ bundle size
- ตรวจสอบ network และ runtime performance
- รัน Lighthouse audit

### 2. Optimize Assets

ปรับปรุง assets

- Optimize images (WebP, lazy load)
- Minify JavaScript และ CSS
- ใช้ code splitting
- ใช้ tree shaking
- ลด bundle size

### 3. Optimize Loading

ปรับปรุง loading

- ลด render-blocking resources
- ใช้ lazy loading สำหรับ heavy components
- ใช้ prefetch และ preload
- Optimize critical CSS
- ใช้ caching อย่างเหมาะสม

### 4. Optimize Runtime

ปรับปรุง runtime performance

- ลด unnecessary re-renders
- ใช้ memoization
- Optimize algorithms
- ลด memory leaks
- ตรวจสอบ frame rate (60fps)

### 5. Profile And Monitor

Profile และ monitor

- ทำ `/run-profile` เพื่อ profile performance
- ตรวจสอบ bottlenecks
- Monitor performance metrics
- Set up performance budgets
- Integrate ใน CI/CD

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
