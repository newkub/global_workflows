---
title: Review Design System
description: Review design system compliance ครอบคลุม component usage, theme tokens, spacing และ consistency
auto_execution_mode: 3
related:
  - /deep-analyze-codebase
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review design system compliance quality ครอบคลุม component usage, theme token adherence, spacing consistency และ design pattern alignment

## Scope

theme token usage, component pattern compliance, spacing system, color system, typography system และ design system documentation

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ design system setup
2. ระบุ design system provider, theme tokens และ component library

### 2. Deep Analyze

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-design-system.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ theme token usage: hardcoded colors, hardcoded spacing, hardcoded font sizes
3. Script ตรวจสอบ component pattern compliance: component variants, component composition, component props
4. Script ตรวจสอบ spacing system: spacing scale usage, margin/padding consistency, gap consistency
5. Script ตรวจสอบ color system: color token usage, dark mode support, contrast ratio compliance
6. Script ตรวจสอบ typography system: font family tokens, font size scale, line height consistency
7. Script ตรวจสอบ design system documentation: component docs, usage guidelines, design tokens reference
8. Script ตรวจสอบ design system drift: custom styles, override patterns, non-standard components
9. Script คำนวณ design system health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: hardcoded colors ที่ break dark mode, missing theme tokens, broken component variants
- **High**: inconsistent spacing, non-standard components, missing dark mode support
- **Medium**: minor token drift, missing documentation, inconsistent typography
- **Low**: naming convention, minor style improvement

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
