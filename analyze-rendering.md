---
title: Analyze Rendering
description: วิเคราะห์ SSR/SSG/CSR/ISR strategy, hydration, streaming, edge rendering
auto_execution_mode: 3
related_workflows:
  - /analyze-performance
  - /analyze-bundle
  - /improve-web-rendering
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ rendering strategy และ hydration patterns เพื่อระบุ rendering performance issues

## Scope

SSR/SSG/CSR/ISR strategy, hydration, streaming, edge rendering, render performance, paint timing, layout shifts

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม rendering metrics ผ่าน scripts (render strategy detection, hydration scan, streaming analysis)

### 2. Check Rendering Strategy

1. ระบุ rendering mode สำหรับแต่ละ route (SSR, SSG, CSR, ISR)
2. ระบุ inconsistent rendering strategy ระหว่าง routes
3. ระบุ missing SSR สำหรับ SEO-critical pages
4. ระบุ missing SSG สำหรับ static pages
5. ระบุ missing ISR สำหรับ semi-dynamic pages
6. ระบุ over-rendering (SSR ที่ควรเป็น CSR)

### 3. Check Hydration

1. ระบุ missing hydration สำหรับ SSR pages
2. ระบุ hydration mismatch errors
3. ระบุ missing progressive hydration
4. ระบุ missing selective hydration
5. ระบุ hydration performance bottlenecks
6. ระบุ missing island architecture

### 4. Check Streaming

1. ระบุ missing streaming SSR
2. ระบุ missing Suspense boundaries สำหรับ streaming
3. ระบุ missing streaming fallbacks
4. ระบุ missing edge streaming
5. ระบุ blocking render ที่ควร stream

### 5. Check Render Performance

1. ระบุ render bottlenecks (large component trees)
2. ระบุ missing virtualization สำหรับ long lists
3. ระบุ unnecessary re-renders
4. ระบุ missing memoization สำหรับ expensive renders
5. ระบุ layout thrashing
6. ระบุ missing requestIdleCallback สำหรับ non-critical renders

### 6. Check Paint And Layout

1. ระบุ missing Critical Rendering Path optimization
2. ระบุ layout shifts (CLS)
3. ระบุ missing content visibility CSS
4. ระบุ missing contain CSS
5. ระบุ missing will-change hints
6. ระบุ render-blocking resources

### 7. Check Edge Rendering

1. ระบุ missing edge rendering สำหรับ global audiences
2. ระบุ missing edge caching สำหรับ rendered pages
3. ระบุ missing edge functions สำหรับ personalization
4. ระบุ missing edge middleware
5. ระบุ origin fallback ที่ควรอยู่ที่ edge

### 8. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: hydration → rendering strategy → streaming → render performance → paint → edge

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม route และ severity

### 2. Severity Classification

- **Critical**: hydration mismatches, no SSR สำหรับ SEO pages, render-blocking
- **High**: missing streaming, missing virtualization, layout shifts
- **Medium**: inconsistent strategy, missing memoization, missing edge rendering
- **Low**: missing will-change, missing content visibility, missing progressive hydration

### 3. Framework Awareness

- ตรวจสอบ TanStack Start SSR patterns
- ตรวจสอบ SolidJS hydration
- ตรวจสอบ Cloudflare edge rendering

### 4. Use Scripts For Rendering Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ render pattern detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- Rendering strategy gaps ระบุพร้อม route และ severity
- Hydration และ streaming issues จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-web-rendering`
