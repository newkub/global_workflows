---
title: Improve Web Rendering
description: ปรับปรุง rendering performance ด้วย systematic approach
auto_execution_mode: 3
related_workflows:
  - /improve-perf
  - /check-performance
---

## Goal

ปรับปรุง rendering performance ของ web application ด้วย systematic approach

## Scope

ใช้สำหรับปรับปรุง rendering performance ของ web applications (React, Vue, Next.js, Nuxt, etc.)

## Execute

### 1. Analyze Rendering Issues

วิเคราะห์ปัญหา rendering ปัจจุบัน

1. ทำ `/check-performance` เพื่อตรวจสอบ Core Web Vitals
2. ใช้ Chrome DevTools Performance tab เพื่อ profile rendering
3. ตรวจสอบ frame rate และ jank
4. ระบุ components ที่ re-render บ่อย
5. วิเคราะห์ hydration issues สำหรับ SSR apps

### 2. Optimize Component Rendering

ปรับปรุง component rendering performance

1. ใช้ `memo`, `useMemo`, `useCallback` สำหรับ React
2. ใช้ `computed`, `watch` สำหรับ Vue
3. ลบ unnecessary re-renders ด้วย proper dependency arrays
4. ใช้ `v-once` หรือ `v-memo` สำหรับ static content
5. แยก components ที่ใหญ่เป็น components เล็กๆ

### 3. Optimize Lists And Virtualization

ปรับปรุง rendering ของ lists ยาวๆ

1. ใช้ virtual scrolling สำหรับ long lists
2. ใช้ `key` attributes อย่างถูกต้อง
3. ลด number of DOM nodes
4. ใช้ pagination หรือ infinite scroll
5. Implement skeleton loading สำหรับ lists

### 4. Optimize Images And Media

ปรับปรุง loading ของ images และ media

1. ใช้ lazy loading สำหรับ images
2. ใช้ responsive images ด้วย `srcset`
3. ใช้ modern formats (WebP, AVIF)
4. Implement image optimization
5. ใช้ placeholder หรือ blur-up effects

### 5. Optimize CSS And Animations

ปรับปรุง CSS และ animations

1. ใช้ CSS animations แทน JavaScript animations
2. ใช้ `transform` และ `opacity` สำหรับ animations
3. ลบ unused CSS ด้วย purging
4. ใช้ `will-change` อย่างระมัดระมัง
5. Implement hardware acceleration

### 6. Optimize Server-Side Rendering

ปรับปรุง SSR performance

1. ใช้ streaming SSR สำหรับ large pages
2. Implement incremental static regeneration
3. Optimize data fetching สำหรับ SSR
4. ใช้ cache สำหรับ SSR responses
5. ลบ hydration mismatches

### 7. Implement Code Splitting

แยก code เพื่อลด initial bundle

1. ใช้ dynamic imports สำหรับ heavy components
2. Implement route-based code splitting
3. ใช้ lazy loading สำหรับ third-party libraries
4. Split vendor code และ application code
5. Implement prefetching สำหรับ critical routes

## Rules

### 1. Rendering Optimization

ปรับปรุง rendering อย่างมีประสิทธิภาพ

- ใช้ memoization สำหรับ expensive computations
- ลบ unnecessary re-renders
- ใช้ virtual scrolling สำหรับ long lists
- Optimize critical rendering path

### 2. Component Design

ออกแบบ components ให้มีประสิทธิภาพ

- เก็บ components เล็กและ focused
- ใช้ composition แทน inheritance
- ลบ props drilling ด้วย context
- ใช้ render props หรือ slots สำหรับ flexibility

### 3. Image Optimization

ปรับปรุง image loading

- ใช้ lazy loading สำหรับ off-screen images
- ใช้ responsive images
- Compress images อย่างเหมาะสม
- ใช้ modern formats

### 4. CSS Optimization

ปรับปรุง CSS performance

- ลบ unused CSS
- ใช้ CSS containment
- ลบ layout thrashing
- ใช้ CSS animations แทน JavaScript

### 5. SSR Optimization

ปรับปรุง SSR performance

- ใช้ streaming SSR
- Cache SSR responses
- Optimize data fetching
- ลบ hydration mismatches

## Expected Outcome

- Frame rate อยู่ที่ 60fps
- Core Web Vitals ผ่านทั้งหมด
- Components re-render น้อยลง
- Lists ยาวๆ render ได้ลื่นไหล
- Images load รวดเร็ว
- CSS และ animations ลื่นไหล
- SSR performance ดีขึ้น
- Initial bundle size ลดลง
