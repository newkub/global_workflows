---
title: Review Frontend
description: Orchestrator สำหรับ review frontend ครอบคลุม components, accessibility, design system, UX/UI, forms, i18n, images
auto_execution_mode: 3
related:
  - /review-frontend-core
  - /review-components
  - /review-hooks
  - /review-composables
  - /review-uxui
  - /review-form
  - /review-accessibility
  - /review-i18n
  - /review-design-system
  - /review-image-optimization
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Orchestrate frontend review ครอบคลุมทุก dimension ของ frontend ผ่าน sub-workflows พร้อม aggregate findings

## Scope

frontend orchestrator สำหรับ: components/reactivity, hooks/composables, UX/UI, forms, accessibility, i18n, design system, image optimization

## Execute

### 1. Run Sub-Workflows

ทำ review-* sub-workflows ตามลำดับ ถ้าพบ critical issues ให้หยุดและ validate ก่อนดำเนินต่อ

1. ทำ `/review-frontend-core` เพื่อ review components, reactivity, accessibility, design system, rendering
2. ทำ `/review-components` เพื่อ review component structure, props, reactivity, composition, reusability
3. ทำ `/review-hooks` เพื่อ review composable functions, reactivity, cleanup, reusability
4. ทำ `/review-composables` เพื่อ review Vue/Nuxt composables, ref/reactive, provide/inject, SSR compatibility
5. ทำ `/review-uxui` เพื่อ review user flows, interaction design, visual hierarchy, UX writing
6. ทำ `/review-form` เพื่อ review form validation, field UX, accessibility, form state management
7. ทำ `/review-accessibility` เพื่อ review WCAG, ARIA, keyboard nav, screen reader, color contrast
8. ทำ `/review-i18n` เพื่อ review translation completeness, locale formatting, RTL support, missing keys
9. ทำ `/review-design-system` เพื่อ review component usage, theme tokens, spacing, color system, typography
10. ทำ `/review-image-optimization` เพื่อ review image formats, responsive sizing, lazy loading, CDN, compression

### 2. Validate Findings

1. ทำ `/validate` สำหรับ validate issues จากทุก sub-workflow
2. จัดลำดับการ validate ตาม severity: Critical → High → Medium → Low

### 3. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง aggregate findings จากทุก sub-workflow
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

### 2. Delegation

- Orchestrator เรียก sub-workflows เท่านั้น ไม่ทำ review เอง
- ไม่ duplicate เนื้อหา sub-workflows

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง aggregate findings จากทุก frontend sub-workflow
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
