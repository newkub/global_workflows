---
title: Review Frontend
description: Orchestrator สำหรับ review frontend ครอบคลุม components, reactivity, accessibility, design system, responsive, UX/UI, forms, i18n, images
auto_execution_mode: 3
related:
  - /scan-codebase
  - /deep-analyze-codebase
  - /review-components
  - /review-hooks
  - /review-composables
  - /review-uxui
  - /review-form
  - /review-accessibility
  - /review-i18n
  - /review-design-system
  - /review-image-optimization
  - /review-web-responsive
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Orchestrate frontend review ครอบคลุมทุก dimension ของ frontend ผ่าน core analysis และ sub-workflows พร้อม aggregate findings

## Scope

frontend orchestrator สำหรับ: core frontend quality (components, reactivity, accessibility, design system, rendering, CSS/styling, browser compatibility), hooks/composables, UX/UI, forms, accessibility, i18n, design system, image optimization, responsive design

## Execute

### 1. Prepare And Scan

1. ทำ `/scan-codebase` เพื่อเข้าใจ frontend structure
2. ระบุ frontend framework, UI library, CSS framework และ breakpoint config ที่ใช้

### 2. Deep Analyze Core

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-frontend.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ component patterns, reactivity usage, และ accessibility attributes
3. Script ตรวจสอบ WCAG compliance, ARIA attributes, keyboard navigation, focus management, และ color contrast
4. Script ตรวจสอบ design tokens: colors, typography, spacing, component variants, และ pattern consistency
5. Script ตรวจสอบ CSS/styling consistency, inline styles, responsive design, และ theme support
6. Script ตรวจสอบ rendering performance, browser compatibility, และ UX patterns
7. Script คำนวณ frontend health score และ output เป็น structured JSON

### 3. Run Sub-Workflows

ทำ review-* sub-workflows ตามลำดับ ถ้าพบ critical issues ให้หยุดและ validate ก่อนดำเนินต่อ

1. ทำ `/review-components` เพื่อ review component structure, props, reactivity, composition, reusability
2. ทำ `/review-hooks` เพื่อ review composable functions, reactivity, cleanup, reusability
3. ทำ `/review-composables` เพื่อ review Vue/Nuxt composables, ref/reactive, provide/inject, SSR compatibility
4. ทำ `/review-uxui` เพื่อ review user flows, interaction design, visual hierarchy, UX writing
5. ทำ `/review-form` เพื่อ review form validation, field UX, accessibility, form state management
6. ทำ `/review-accessibility` เพื่อ review WCAG, ARIA, keyboard nav, screen reader, color contrast
7. ทำ `/review-i18n` เพื่อ review translation completeness, locale formatting, RTL support, missing keys
8. ทำ `/review-design-system` เพื่อ review component usage, theme tokens, spacing, color system, typography
9. ทำ `/review-image-optimization` เพื่อ review image formats, responsive sizing, lazy loading, CDN, compression
10. ทำ `/review-web-responsive` เพื่อ review viewport, breakpoints, flexible layouts, touch targets, responsive typography

### 4. Validate Findings

1. ทำ `/validate` สำหรับ validate issues จากทุก sub-workflow และ core analysis
2. จัดลำดับการ validate ตาม severity: Critical → High → Medium → Low

### 5. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง aggregate findings จากทุก sub-workflow และ core analysis
3. ทำ `/suggest-next-action`

## Rules

### 1. Skip Conditions

- ถ้า project ไม่มี components ให้ข้าม `/review-components`
- ถ้า project ไม่มี hooks/composables ให้ข้าม `/review-hooks` และ `/review-composables`
- ถ้า project ไม่มี Vue/Nuxt ให้ข้าม `/review-composables`
- ถ้า project ไม่มี UI ให้ข้าม `/review-uxui` และ `/review-accessibility`
- ถ้า project ไม่มี forms ให้ข้าม `/review-form`
- ถ้า project ไม่มี i18n ให้ข้าม `/review-i18n`
- ถ้า project ไม่มี design system ให้ข้าม `/review-design-system`
- ถ้า project ไม่มี images ให้ข้าม `/review-image-optimization`
- ถ้า project ไม่ใช่ web app ให้ข้าม `/review-web-responsive`

### 2. Severity Classification

- **Critical**: broken UI, accessibility violation ที่กั้นผู้ใช้, keyboard trap, no screen reader support, broken design tokens, inconsistent color system, missing theme support, ไม่มี viewport meta tag, horizontal scroll บน mobile
- **High**: reactivity bug, rendering performance issue, missing ARIA, broken focus management, insufficient color contrast, missing component variant, inconsistent spacing, typography violation, missing breakpoint สำคัญ, touch target เล็กกว่า 44px
- **Medium**: styling inconsistency, minor accessibility gap, missing alt text, heading hierarchy issue, minor token inconsistency, missing documentation, breakpoint gap, missing tablet breakpoint
- **Low**: cosmetic, naming convention, ไม่ใช้ `clamp()` สำหรับ typography

### 3. Delegation

- Orchestrator เรียก sub-workflows เท่านั้น ไม่ทำ review เอง ยกเว้น core analysis ใน Step 2
- ไม่ duplicate เนื้อหา sub-workflows

### 4. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number
- ไม่เดา ใช้ tools สำหรับ verification

### 5. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง aggregate findings จากทุก frontend sub-workflow และ core analysis
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
