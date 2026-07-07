---
title: Analyze Browser Compatibility
description: วิเคราะห์ browser compatibility, polyfills, caniuse, feature detection
auto_execution_mode: 3
related_workflows:
  - /analyze-frontend
  - /analyze-bundle
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ browser compatibility เพื่อระบุ unsupported features และ missing polyfills

## Scope

Browser compatibility, polyfills, caniuse coverage, feature detection, browser targets, transpilation

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม compatibility metrics ผ่าน scripts (feature scan, target config, polyfill detection)

### 2. Check Browser Targets

1. ระบุ missing `browserslist` configuration
2. ระบุ inconsistent browser targets ข้าม workspaces
3. ระบุ missing browser target documentation
4. ระบุ outdated browser targets
5. ระบุ missing IE/legacy support decision

### 3. Check Feature Compatibility

1. ระบุ modern APIs ที่ไม่มี fallback (IntersectionObserver, ResizeObserver)
2. ระบุ CSS features ที่ไม่มี fallback (gap, aspect-ratio, :has())
3. ระบุ JavaScript features ที่ไม่มี polyfill (optional chaining, nullish coalescing)
4. ระบุ missing feature detection (`in` operator, `typeof` checks)
5. ระบุ missing progressive enhancement

### 4. Check Polyfills

1. ระบุ missing polyfills สำหรับ target browsers
2. ระบุ unnecessary polyfills สำหรับ modern-only targets
3. ระบุ missing polyfill configuration (core-js, polyfill.io)
4. ระบุ inconsistent polyfill strategy
5. ระบุ missing dynamic polyfill loading

### 5. Check Transpilation

1. ระบุ missing transpilation targets ใน build config
2. ระบุ inconsistent transpilation settings ข้าม workspaces
3. ระบุ missing CSS vendor prefixes
4. ระบุ missing PostCSS autoprefixer
5. ระบุ missing CSS fallback properties

### 6. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: feature compatibility → polyfills → browser targets → transpilation

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม feature และ severity

### 2. Severity Classification

- **Critical**: no browserslist, missing critical polyfills, broken ใน target browsers
- **High**: missing feature detection, missing fallbacks for modern APIs, missing autoprefixer
- **Medium**: inconsistent targets, unnecessary polyfills, missing progressive enhancement
- **Low**: missing CSS fallbacks, outdated targets, missing documentation

### 3. Use Scripts For Compatibility Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ `caniuse` สำหรับ feature compatibility checking
- ใช้ `/use-scripts` สำหรับ browserslist validation

## Expected Outcome

- Browser compatibility gaps ระบุพร้อม feature และ severity
- พร้อมสำหรับ `/improve-compatibility` หรือ `/improve-frontend`
