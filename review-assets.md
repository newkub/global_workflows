---
title: Review Assets
description: Review assets ครอบคลุม image optimization, font loading, icons, CDN, และ lazy loading
auto_execution_mode: 3
related:
  - /deep-analyze-codebase
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review asset management quality ครอบคลุม image optimization, font loading, icon management, CDN strategy และ lazy loading

## Scope

image optimization, font loading strategy, icon management, CDN configuration, lazy loading, และ asset bundling

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ assets structure
2. ระบุ assets patterns และ tools ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-assets.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ image optimization, format selection, responsive images, และ compression
3. Script ตรวจสอบ font loading strategy, font display, preload, และ font subsetting
4. Script ตรวจสอบ icon management, icon system, และ icon bundling
5. Script ตรวจสอบ CDN configuration, cache headers, และ asset delivery optimization
6. Script คำนวณ assets health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: unoptimized large images, render-blocking fonts, no CDN
- **High**: missing responsive images, no font preload, inconsistent icon system
- **Medium**: suboptimal compression, missing lazy load, minor CDN gap
- **Low**: minor asset improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
