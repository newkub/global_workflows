---
title: Analyze Code Localization
description: วิเคราะห์ i18n, l10n, RTL, locale handling, pluralization, cultural adaptation
auto_execution_mode: 3
related_workflows:
  - /improve-i18n
  - /use-scripts
  - /report-format-table
---

## Goal

วิเคราะห์ internationalization และ localization ของ codebase เพื่อระบุ issues

## Scope

Hardcoded strings, translation coverage, RTL support, locale handling, date/time/number formatting, pluralization, cultural adaptation, content negotiation

## Execute

### 1. Detect Hardcoded Strings

1. ระบุ user-facing strings ที่ hardcoded แทนการใช้ i18n keys
2. ระบุ error messages และ validation messages ที่ไม่ใช้ i18n
3. ระบุ button labels, menu items, และ tooltips ที่ hardcoded
4. ทำ `/use-scripts` เพื่อ scan user-facing strings จำนวนมาก

### 2. Check Translation Coverage

1. เปรียบเทียบ i18n keys ระหว่าง locales
2. ระบุ missing translations ในแต่ละ locale
3. ระบุ unused i18n keys ที่ไม่ถูกอ้างอิงใน code
4. ระบุ duplicate translations ข้าม locale files

### 3. Check RTL Support

1. ระบุ CSS ที่ใช้ `margin-left`/`margin-right` แทน logical properties
2. ระบุ components ที่ไม่รองรับ RTL layout
3. ระบุ icon positioning ที่ไม่ flip ใน RTL
4. ระบุ text alignment ที่ไม่ใช้ logical properties (`text-start`, `text-end`)

### 4. Check Locale Handling

1. ระบุ date/time formatting ที่ไม่ใช้ locale-aware formatting
2. ระบุ number/currency formatting ที่ไม่ใช้ locale-aware formatting
3. ระบุ missing locale detection และ fallback strategy
4. ระบุ timezone handling ที่ไม่ถูกต้อง

### 5. Check Pluralization

1. ระบุ pluralization ที่ไม่ใช้ ICU MessageFormat
2. ระบุ hardcoded plural rules (เช่น `count > 1 ? 's' : ''`)
3. ระบุ missing plural forms สำหรับ locales ที่มีกฎซับซ้อน (Arabic, Russian)

### 6. Check Cultural Adaptation

1. ระบุ date formats ที่ไม่ adapt ตาม locale (US vs EU vs Asian)
2. ระบุ name/address formats ที่ไม่ adapt ตาม locale
3. ระบุ currency symbols และ positions ที่ไม่ถูกต้อง
4. ระบุ color/imagery ที่อาจไม่เหมาะสมทางวัฒนธรรม

### 7. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: hardcoded strings → missing translations → pluralization → RTL → locale → cultural

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม location และ severity

### 2. Frontend Only

- ถ้า project ไม่มี frontend ให้ข้าม workflow นี้
- ใช้กับ web, mobile web, และ hybrid apps

### 3. Use Scripts For Batch Scanning

- ใช้ `/use-scripts` เมื่อต้อง scan user-facing strings มากกว่า 10 ไฟล์

## Expected Outcome

- Localization issues ระบุพร้อม location และ severity
- Translation coverage report ต่อ locale
- พร้อมสำหรับ `/improve-i18n`
