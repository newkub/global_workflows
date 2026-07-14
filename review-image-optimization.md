---
title: Review Image Optimization
description: Review image optimization ครอบคลุม formats, responsive, lazy load, CDN และ compression
auto_execution_mode: 3
related:
  - /deep-analyze-with-use-scripts
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review image optimization quality ครอบคลุม image formats, responsive images, lazy loading, CDN delivery และ compression strategy

## Scope

image format selection, responsive image sizing, lazy loading, CDN configuration, compression strategy และ image metadata handling

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ image usage และ optimization setup
2. ระบุ image sources, storage provider และ CDN configuration

### 2. Deep Analyze

1. ทำ `/deep-analyze-with-use-scripts` เพื่อสร้าง `analyze-image-optimization.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ image format: WebP/AVIF usage, fallback format, format negotiation
3. Script ตรวจสอบ responsive images: srcset usage, sizes attribute, art direction, breakpoint coverage
4. Script ตรวจสอบ lazy loading: native lazy loading, intersection observer, above-the-fold handling
5. Script ตรวจสอบ CDN configuration: CDN delivery, cache headers, transform at edge, image variants
6. Script ตรวจสอบ compression strategy: lossy vs lossless, compression level, quality settings
7. Script ตรวจสอบ image metadata: EXIF stripping, metadata sanitization, thumbnail generation
8. Script ตรวจสอบ image upload pipeline: resize on upload, format conversion, optimization on fly
9. Script คำนวณ image optimization health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: no image optimization, huge images ใน initial load, no lazy loading
- **High**: missing responsive images, no CDN delivery, no format negotiation
- **Medium**: inconsistent compression, missing metadata stripping, minor lazy load gap
- **Low**: image naming convention, minor optimization

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
