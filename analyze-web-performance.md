---
title: Analyze Web Performance
description: วิเคราะห์ Core Web Vitals, LCP, INP, CLS, FCP, TBT, Speed Index
auto_execution_mode: 3
related_workflows:
  - /analyze-frontend
  - /analyze-performance
  - /analyze-bundle
  - /analyze-asset
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ web performance เพื่อระบุ Core Web Vitals ที่ไม่ผ่านเกณฑ์

## Scope

Core Web Vitals (LCP, INP, CLS), FCP, TBT, Speed Index, render-blocking, resource optimization

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม performance metrics ผ่าน scripts (bundle analysis, resource scan, render detection)

### 2. Check Core Web Vitals

1. ระบุ LCP (Largest Contentful Paint) > 2.5s
2. ระบุ INP (Interaction to Next Paint) > 200ms
3. ระบุ CLS (Cumulative Layout Shift) > 0.1
4. ระบุ missing LCP optimization (image preload, font preload)
5. ระบุ missing CLS prevention (width/height attributes, aspect-ratio)

### 3. Check Loading Performance

1. ระบุ FCP (First Contentful Paint) > 1.8s
2. ระบุ TBT (Total Blocking Time) > 200ms
3. ระบุ Speed Index > 3.4s
4. ระบุ missing resource hints (preload, prefetch, preconnect)
5. ระบุ missing critical CSS inlining

### 4. Check Render-Blocking Resources

1. ระบุ render-blocking CSS
2. ระบุ render-blocking JavaScript
3. ระบุ missing async/defer สำหรับ non-critical scripts
4. ระบุ missing font-display: swap
5. ระบุ missing lazy loading สำหรับ below-the-fold content

### 5. Check Resource Optimization

1. ระบุ unoptimized images (missing WebP/AVIF, missing responsive srcset)
2. ระบุ missing image compression
3. ระบุ missing HTTP/2 or HTTP/3
4. ระบุ missing Brotli/Gzip compression
5. ระบุ missing CDN configuration

### 6. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: LCP → INP → CLS → render-blocking → resource optimization

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม metric value และ severity

### 2. Severity Classification

- **Critical**: LCP > 4s, INP > 500ms, CLS > 0.25, no lazy loading
- **High**: LCP > 2.5s, INP > 200ms, CLS > 0.1, render-blocking resources
- **Medium**: FCP > 1.8s, TBT > 200ms, missing resource hints, missing font-display
- **Low**: missing responsive images, missing compression, missing CDN

### 3. Use Scripts For Performance Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ Lighthouse สำหรับ Core Web Vitals measurement
- ใช้ `/use-scripts` สำหรับ bundle analysis

## Expected Outcome

- Web performance issues ระบุพร้อม metric value และ severity
- พร้อมสำหรับ `/improve-web-performance` หรือ `/improve-performance`
