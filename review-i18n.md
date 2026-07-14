---
title: Review I18n
description: Review internationalization ครอบคลุม translation completeness, locale formatting, RTL, และ missing keys
auto_execution_mode: 3
related:
  - /deep-analyze-with-use-scripts
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review internationalization quality ครอบคลุม translation completeness, locale formatting, RTL support และ missing translation keys

## Scope

translation files, locale coverage, missing translation keys, locale formatting (date, number, currency), RTL support, และ i18n library configuration

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ i18n setup
2. ระบุ i18n library, locale files และ supported languages ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-with-use-scripts` เพื่อสร้าง `analyze-i18n.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ translation completeness, missing keys, และ locale coverage
3. Script ตรวจสอบ locale formatting: date, number, currency, และ pluralization rules
4. Script ตรวจสอบ RTL support, text direction handling, และ layout adaptation
5. Script ตรวจสอบ i18n library configuration, fallback strategy, และ lazy loading
6. Script คำนวณ i18n health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: missing locale entirely, broken translation key in critical path, no fallback
- **High**: missing translation keys, broken pluralization, incorrect locale formatting
- **Medium**: missing RTL support, inconsistent fallback, minor formatting issue
- **Low**: cosmetic translation improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
