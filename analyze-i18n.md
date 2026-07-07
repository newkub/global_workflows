---
title: Analyze I18n
description: วิเคราะห์ internationalization, localization readiness, RTL support, translation management
auto_execution_mode: 3
related_workflows:
  - /improve-i18n
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ internationalization readiness ของ codebase เพื่อระบุ gaps ใน multi-language support

## Scope

Hardcoded strings, translation framework, RTL support, locale management, pluralization, date/time/number formatting, currency, translation workflow, missing translations

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม i18n metrics ผ่าน scripts (hardcoded string detection, translation coverage, locale analysis)

### 2. Detect Hardcoded Strings

1. ระบุ user-facing strings ที่ hardcoded ใน components (labels, buttons, messages)
2. ระบุ error messages ที่ hardcoded ใน server code
3. ระบุ validation messages ที่ hardcoded
4. ระบุ notification text ที่ hardcoded
5. ระบุ placeholder text และ aria-label ที่ hardcoded

### 3. Check Translation Framework

1. ระบุ missing i18n library (i18next, vue-i18n, @solidjs-primitives/i18n)
2. ระบุ translation function usage ที่ไม่ consistent
3. ระบุ missing translation context/provider
4. ระบุ translation key naming ที่ไม่ consistent
5. ระบุ missing namespace organization

### 4. Check Locale Management

1. ระบุ missing locale detection (browser, URL, cookie, header)
2. ระบุ missing locale switching mechanism
3. ระบุ missing locale persistence
4. ระบุ missing fallback locale strategy
5. ระบุ missing locale validation

### 5. Check Pluralization And Gender

1. ระบุ missing pluralization rules (ordinal, cardinal)
2. ระบุ hardcoded pluralization (`if count === 1`)
3. ระบุ missing gender support สำหรับ languages ที่ต้องการ
4. ระบุ missing ICU MessageFormat usage

### 6. Check Date Time Number And Currency Formatting

1. ระบุ missing locale-aware date formatting
2. ระบุ missing locale-aware time formatting
3. ระบุ missing locale-aware number formatting
4. ระบุ hardcoded currency symbols
5. ระบุ missing timezone handling
6. ระบุ missing Intl API usage

### 7. Check RTL Support

1. ระบุ missing RTL layout support
2. ระบุ hardcoded `dir="ltr"` ที่ควรเป็น dynamic
3. ระบุ CSS ที่ไม่รองรับ RTL (margin-left แทน logical properties)
4. ระบุ missing RTL flip สำหรับ icons และ images
5. ระบุ missing RTL testing

### 8. Check Translation Workflow

1. ระบุ missing translation files structure
2. ระบุ missing translation extraction tool
3. ระบุ missing translation sync mechanism
4. ระบุ missing translation completeness check
5. ระบุ missing translation CI/CD validation
6. ระบุ missing missing-translation detection

### 9. Check Content Localization

1. ระบุ user-generated content ที่ไม่ support multi-language
2. ระบุ database schema ที่ไม่รองรับ translations
3. ระบุ SEO content ที่ไม่ localized (meta tags, sitemap, structured data)
4. ระบุ email templates ที่ไม่ localized
5. ระบุ notification templates ที่ไม่ localized

### 10. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: hardcoded strings → translation framework → locale management → pluralization → formatting → RTL → workflow → content

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม location และ severity

### 2. Severity Classification

- **Critical**: missing i18n framework, all strings hardcoded, no locale support
- **High**: missing pluralization, missing date/number formatting, missing RTL
- **Medium**: partial hardcoded strings, missing translation workflow, missing fallback
- **Low**: missing translation CI, minor formatting inconsistencies

### 3. Frontend Focus

- ถ้า project ไม่มี frontend ให้ข้าม workflow นี้
- เน้น user-facing strings เป็นหลัก
- ตรวจสอบทั้ง web, mobile, และ email templates

### 4. Framework Awareness

- ตรวจสอบ framework-specific i18n solutions
- ระบุ i18n library ที่เหมาะสมกับ framework
- ตรวจสอบ SSR/SSG ที่ส่งผลต่อ locale rendering

### 5. Use Scripts For String Detection

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ hardcoded string detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- I18n gaps ระบุพร้อม location และ severity
- Hardcoded strings และ missing translation framework ระบุชัดเจน
- พร้อมสำหรับ `/improve-i18n`
