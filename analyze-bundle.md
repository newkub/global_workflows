---
title: Analyze Bundle
description: วิเคราะห์ bundle size, tree shaking, code splitting, lazy loading, vendor chunks
auto_execution_mode: 3
related_workflows:
  - /analyze-performance
  - /improve-web-performance
  - /improve-performance-tuning
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ bundle output และ code splitting strategy เพื่อระบุ size optimization opportunities

## Scope

Bundle size analysis, tree shaking, code splitting, lazy loading, vendor chunks, dynamic imports, source maps, asset optimization, entry point analysis

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม bundle metrics ผ่าน scripts (import analysis, chunk detection, size calculation)

### 2. Check Bundle Size

1. ระบุ total bundle size และ per-chunk sizes
2. ระบุ chunks ที่ใหญ่เกินไป (> 250KB gzipped)
3. ระบุ missing gzip/brotli compression
4. ระบุ missing source map optimization
5. ระบุ duplicate dependencies ใน multiple chunks

### 3. Check Tree Shaking

1. ระบุ missing ESM imports (CommonJS prevents tree shaking)
2. ระบุ side effects ใน modules ที่ prevent tree shaking
3. ระบุ missing `sideEffects: false` ใน package.json
4. ระบุ barrel files ที่ bundle มากเกินไป
5. ระบุ unused exports ที่ยังอยู่ใน bundle

### 4. Check Code Splitting

1. ระบุ missing route-level code splitting
2. ระบุ missing component-level lazy loading
3. ระบุ missing dynamic imports สำหรับ heavy features
4. ระบุ missing vendor chunk splitting
5. ระบุ missing shared chunk extraction
6. ระบุ over-splitting (too many small chunks)

### 5. Check Asset Optimization

1. ระบุ unoptimized images (missing WebP/AVIF)
2. ระบุ missing image lazy loading
3. ระบุ missing font optimization (font-display, preload)
4. ระบุ missing icon optimization (sprite, inline)
5. ระบุ missing CSS optimization (purge, minify)

### 6. Check Entry Points

1. ระบุ entry points ที่โหลดเกินไป
2. ระบุ missing preload/prefetch directives
3. ระบุ blocking resources ใน initial load
4. ระบุ missing module preload
5. ระบุ critical path ที่ยาวเกินไป

### 7. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: bundle size → code splitting → tree shaking → asset optimization → entry points

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม chunk name และ size

### 2. Severity Classification

- **Critical**: bundle > 500KB gzipped, no code splitting at all
- **High**: no tree shaking, no lazy loading, large vendor chunks
- **Medium**: suboptimal chunk strategy, missing preload, unoptimized images
- **Low**: missing font optimization, missing source maps, over-splitting

### 3. Framework Awareness

- ตรวจสอบ Vite manualChunks configuration
- ตรวจสอบ TanStack Router lazy loading
- ตรวจสอบ SolidJS component lazy loading

### 4. Use Scripts For Bundle Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ import pattern detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- Bundle size issues ระบุพร้อม chunk name และ severity
- Code splitting และ tree shaking opportunities จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-web-performance` หรือ `/improve-performance-tuning`
