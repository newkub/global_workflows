---
title: Analyze Asset
description: วิเคราะห์ image/font/icon optimization, asset pipeline, CDN usage
auto_execution_mode: 3
related_workflows:
  - /analyze-performance
  - /analyze-bundle
  - /improve-asset
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ asset optimization และ asset pipeline เพื่อระบุ load time improvements

## Scope

Image optimization, font optimization, icon optimization, asset pipeline, CDN usage, asset caching, responsive images, lazy loading

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม asset metrics ผ่าน scripts (image scan, font detection, icon analysis)

### 2. Check Image Optimization

1. ระบุ unoptimized image formats (PNG ที่ควรเป็น WebP/AVIF)
2. ระบุ missing responsive images (srcset, sizes)
3. ระบุ missing image lazy loading
4. ระบุ images ที่ใหญ่เกินไป (missing compression)
5. ระบุ missing image dimensions (width, height)
6. ระบุ missing placeholder images (blur, LQIP)

### 3. Check Font Optimization

1. ระบุ missing font-display: swap
2. ระบุ missing font preloading
3. ระบุ missing font subsetting
4. ระบุ too many font weights หรือ styles
5. ระบุ missing variable fonts
6. ระบุ missing fallback fonts

### 4. Check Icon Optimization

1. ระบุ missing icon optimization (sprite sheets, inline SVG)
2. ระบุ too many individual icon imports
3. ระบุ missing icon tree shaking
4. ระบุ missing icon size standardization
5. ระบุ missing icon accessibility (aria-hidden, title)

### 5. Check Asset Pipeline

1. ระบุ missing asset hashing สำหรับ cache busting
2. ระบุ missing asset compression (gzip, brotli)
3. ระบุ missing asset manifest
4. ระบุ missing asset versioning
5. ระบุ missing build-time asset optimization

### 6. Check CDN Usage

1. ระบุ missing CDN สำหรับ static assets
2. ระบุ missing CDN cache headers
3. ระบุ missing CDN image transformation
4. ระบุ missing CDN edge caching
5. ระบุ assets ที่ served จาก origin แทน CDN

### 7. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: image optimization → CDN → font → asset pipeline → icon

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม asset path และ severity

### 2. Severity Classification

- **Critical**: images > 1MB, no CDN, no image optimization
- **High**: missing responsive images, missing lazy loading, missing font-display
- **Medium**: missing compression, missing preloading, too many fonts
- **Low**: missing icon optimization, missing asset manifest, missing dimensions

### 3. Framework Awareness

- ตรวจสอบ Vite asset handling
- ตรวจสอบ UnoCSS icon presets
- ตรวจสอบ Cloudflare CDN configuration

### 4. Use Scripts For Asset Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ asset import detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- Asset optimization gaps ระบุพร้อม asset path และ severity
- Image และ font issues จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-asset`
