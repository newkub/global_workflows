---
title: Improve Website
description: ปรับปรุง website ครบวงจร SSR, routing, rendering, SEO, และ content
auto_execution_mode: 3
related_workflows:
  - improve-web-performance
  - improve-web-rendering
  - improve-seo
  - improve-uxui
  - improve-accessibility
  - improve-routing
  - improve-content
---

## Goal

ปรับปรุง website ครบวงจรทั้ง rendering strategy, routing, SEO, accessibility, และ content delivery

## Scope

ใช้สำหรับ website ทุกประเภท (SSR, SSG, SPA, hybrid) ที่ต้องการปรับปรุงทั้ง technical และ content aspects

## Execute

### 1. Rendering Strategy

ปรับปรุง rendering approach

1. วิเคราะห์ rendering mode ปัจจุบัน (SSR, SSG, SPA, hybrid)
2. ตรวจสอบ hydration strategy และ hydration errors
3. ตั้งค่า streaming SSR ถ้าเหมาะสม
4. ตรวจสอบ island architecture สำหรับ partial hydration
5. ทำ `/improve-web-rendering` สำหรับ rendering pipeline

### 2. Routing Architecture

ปรับปรุง routing

1. ทำ `/improve-routing` สำหรับ routing architecture
2. ตรวจสอบ file-based routing structure
3. ตั้งค่า nested routes และ layouts
4. ตรวจสอบ route guards และ middleware
5. ตั้งค่า 404 และ error pages
6. ตรวจสอบ redirect และ rewrite rules

### 3. SEO Optimization

ปรับปรุง SEO

1. ทำ `/improve-seo` สำหรับ SEO ครบวงจร
2. ตรวจสอบ meta tags และ Open Graph
3. ตั้งค่า structured data (JSON-LD)
4. ตรวจสอบ sitemap และ robots.txt
5. ตั้งค่า canonical URLs และ hreflang
6. ตรวจสอบ Core Web Vitals

### 4. Content Delivery

ปรับปรุง content strategy

1. ทำ `/improve-content` สำหรับคุณภาพเนื้อหา
2. ตรวจสอบ content structure และ hierarchy
3. ตั้งค่า image optimization และ lazy loading
4. ตรวจสอบ font loading strategy
5. ใช้ CDN สำหรับ static assets
6. ทำ `/improve-performance-tuning` สำหรับ caching

### 5. Accessibility And UX

ปรับปรุง accessibility และ UX

1. ทำ `/improve-accessibility` สำหรับ WCAG compliance
2. ทำ `/improve-uxui` สำหรับ UX improvements
3. ตรวจสอบ semantic HTML
4. ตั้งค่า keyboard navigation
5. ตรวจสอบ color contrast และ focus states
6. ทดสอบ screen reader compatibility

### 6. Performance

ปรับปรุง website performance

1. ทำ `/improve-web-performance` สำหรับ Core Web Vitals
2. วิเคราะห์ LCP, FID, CLS metrics
3. ตั้งค่า resource hints (preload, prefetch)
4. ตรวจสอบ bundle size และ code splitting
5. ใช้ service worker สำหรับ caching ถ้าเหมาะสม

## Rules

### 1. Rendering First

- เลือก rendering strategy ที่เหมาะกับ content type
- SSR สำหรับ dynamic content, SSG สำหรับ static
- Hydration errors ต้องได้รับการแก้ไข
- ไม่ mix rendering modes โดยไม่จำเป็น

### 2. SEO Complete

- ทุก page มี meta tags ครบถ้วน
- Structured data สำหรับ rich snippets
- Sitemap อัพเดทอัตโนมัติ
- Canonical URLs ถูกต้อง

### 3. Accessibility Required

- WCAG 2.1 AA compliance
- Semantic HTML เป็น default
- Keyboard navigation ทำงานได้ครบ
- Color contrast ผ่านมาตรฐาน

### 4. Performance Budget

- LCP < 2.5 seconds
- CLS < 0.1
- INP < 200 milliseconds
- Bundle size < 200KB สำหรับ initial load

## Expected Outcome

- Rendering strategy เหมาะสมกับ content type
- Routing architecture ชัดเจน พร้อม error pages
- SEO ครบถ้วน พร้อม structured data
- Content delivery ผ่าน CDN พร้อม optimization
- Accessibility ผ่าน WCAG 2.1 AA
- Core Web Vitals ผ่านเกณฑ์
