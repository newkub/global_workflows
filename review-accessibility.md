---
title: Review Accessibility
description: Review accessibility ครอบคลุม WCAG, ARIA, keyboard nav, screen reader, และ color contrast
auto_execution_mode: 3
related:
  - /deep-analyze-with-use-scripts
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review accessibility quality ครอบคลุม WCAG compliance, ARIA attributes, keyboard navigation, screen reader support และ color contrast

## Scope

WCAG compliance, ARIA attributes, keyboard navigation, screen reader support, color contrast, focus management, และ semantic HTML

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ accessibility structure
2. ระบุ accessibility patterns และ tools ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-with-use-scripts` เพื่อสร้าง `analyze-accessibility.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ ARIA attributes, semantic HTML, และ heading hierarchy
3. Script ตรวจสอบ keyboard navigation, focus management, tab order, และ keyboard traps
4. Script ตรวจสอบ color contrast, image alt texts, และ screen reader compatibility
5. Script ตรวจสอบ WCAG compliance level, accessibility violations, และ automated scan results
6. Script คำนวณ accessibility health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: keyboard trap, no screen reader support, blocking accessibility violation
- **High**: missing ARIA, broken focus management, insufficient color contrast
- **Medium**: missing alt text, heading hierarchy issue, minor ARIA gap
- **Low**: cosmetic accessibility improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
