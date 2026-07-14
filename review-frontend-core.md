---
title: Review Frontend Core
description: Review frontend ครอบคลุม components, reactivity, accessibility, design system, และ rendering
auto_execution_mode: 3
related:
  - /scan-codebase
  - /deep-analyze-with-use-scripts
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review frontend quality ครอบคลุม components, reactivity, accessibility, design system, rendering performance และ UX patterns

## Scope

component structure, reactivity patterns, accessibility (WCAG, ARIA, keyboard nav, color contrast), design system (tokens, color palette, typography, spacing, component variants), CSS/styling, rendering performance, browser compatibility, file upload, form UX, i18n, landing pages, platform compatibility, user features, UX writing, web rendering, และ analytics

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ frontend structure
2. ระบุ frontend framework และ UI library ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-with-use-scripts` เพื่อสร้าง `analyze-frontend.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ component patterns, reactivity usage, และ accessibility attributes
3. Script ตรวจสอบ WCAG compliance, ARIA attributes, keyboard navigation, focus management, และ color contrast
4. Script ตรวจสอบ design tokens: colors, typography, spacing, component variants, และ pattern consistency
5. Script ตรวจสอบ CSS/styling consistency, inline styles, responsive design, และ theme support
6. Script คำนวณ frontend health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity: Critical → High → Medium → Low

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: broken UI, accessibility violation ที่กั้นผู้ใช้, keyboard trap, no screen reader support, broken design tokens, inconsistent color system, missing theme support
- **High**: reactivity bug, rendering performance issue, missing ARIA, broken focus management, insufficient color contrast, missing component variant, inconsistent spacing, typography violation
- **Medium**: styling inconsistency, minor accessibility gap, missing alt text, heading hierarchy issue, minor token inconsistency, missing documentation, breakpoint gap
- **Low**: cosmetic, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number
- ไม่เดา ใช้ tools สำหรับ verification

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
