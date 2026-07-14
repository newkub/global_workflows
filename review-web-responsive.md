---
title: Review Web Responsive
description: Review responsive design ครอบคลุม breakpoints, viewport, flexible layouts, touch targets, responsive images และ typography
auto_execution_mode: 3
related:
  - /scan-codebase
  - /deep-analyze-codebase
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review responsive web design ครอบคลุม breakpoints, viewport, flexible layouts, touch targets, responsive images, responsive typography และ device adaptation

## Scope

viewport meta, breakpoint coverage, mobile-first approach, flexible layouts (flexbox, grid, container queries), responsive images (srcset, picture, sizes), touch target sizing, responsive typography (clamp, fluid), overflow handling, safe area insets, orientation, zoom support, และ horizontal scroll prevention

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ responsive patterns ที่ใช้
2. ระบุ CSS framework, breakpoint config, และ viewport setup

### 2. Deep Analyze

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-web-responsive.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ viewport meta tag: `width=device-width`, `initial-scale`, `user-scalable`, และ `viewport-fit=cover`
3. Script ตรวจสอบ breakpoint coverage: มีครอบคลุม mobile, tablet, desktop และใช้ mobile-first approach
4. Script ตรวจสอบ flexible layouts: flexbox, CSS grid, container queries, และ percentage widths — ห้าม fixed pixel widths ที่ไม่ responsive
5. Script ตรวจสอบ responsive images: `srcset`, `<picture>`, `sizes` attribute, และ `object-fit`
6. Script ตรวจสอบ touch targets: ขนาด min 44×44px, spacing ระหว่าง interactive elements
7. Script ตรวจสอบ responsive typography: `clamp()`, fluid type, `rem` units, และ media query font scaling
8. Script ตรวจสอบ overflow: horizontal scroll prevention, `overflow-x: hidden`, และ safe area insets (`env()`)
9. Script คำนวณ responsive health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity: Critical → High → Medium → Low

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: ไม่มี viewport meta tag, horizontal scroll บน mobile, fixed width ที่ทำลาย layout บน mobile, content มองไม่เห็นบน device เล็ก
- **High**: missing breakpoint สำคัญ, touch target เล็กกว่า 44px, ภาพไม่ responsive ที่ทำให้ layout พัง, text อ่านไม่ได้บน mobile
- **Medium**: missing tablet breakpoint, inconsistent spacing ข้าม breakpoints, ไม่ใช้ container queries ที่ควร, missing safe area inset
- **Low**: ไม่ใช้ `clamp()` สำหรับ typography, cosmetic spacing ไม่ consistent

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number
- ไม่เดา ใช้ tools สำหรับ verification

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
