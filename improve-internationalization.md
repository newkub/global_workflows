---
title: Improve Internationalization
description: ปรับปรุม i18n/l10n implementation
auto_execution_mode: 3
related_workflows:
  - /improve-api-contracts
  - /improve-data-validation
  - /improve-ui
---

## Goal

ปรับปรุม internationalization ให้รองรับหลายภาษาและ locales

## Scope

ใช้สำหรับปรับปรุม i18n (internationalization) และ l10n (localization)

## Execute

### 1. Analyze Current i18n

วิเคราะห์ i18n ปัจจุบัน

1. ระบุ i18n library ที่ใช้
2. ระบุ languages ที่รองรับ
3. ตรวจสอบ translation coverage
4. ตรวจสอบ locale-specific formats
5. ระบุ hardcoded strings
6. ระบุ i18n gaps

### 2. Define i18n Strategy

กำหนด i18n strategy

1. กำหนด target languages
2. กำหนด translation workflow
3. กำหนด locale formats (date, time, number, currency)
4. กำหนด RTL support
5. กำหนด fallback strategy
6. กำหนด translation management

### 3. Setup i18n Framework

ตั้งค่า i18n framework

1. เลือก i18n library (vue-i18n, next-i18next, i18next)
2. Setup locale detection
3. Setup locale switching
4. Setup translation loading
5. Setup translation interpolation
6. Setup translation pluralization

### 4. Extract Strings

Extract strings สำหรับ translation

1. Extract hardcoded strings
2. Extract UI strings
3. Extract error messages
4. Extract validation messages
5. Extract email templates
6. Extract notification templates

### 5. Implement Translations

Implement translations

1. Create translation files สำหรับแต่ละ language
2. Translate UI strings
3. Translate error messages
4. Translate validation messages
5. Translate email templates
6. Translate notification templates

### 6. Add Locale Formatting

เพิ่ม locale formatting

1. Format dates ตาม locale
2. Format times ตาม locale
3. Format numbers ตาม locale
4. Format currencies ตาม locale
5. Format addresses ตาม locale
6. Format phone numbers ตาม locale

### 7. Add RTL Support

เพิ่ม RTL support

1. Detect RTL languages
2. Flip layouts สำหรับ RTL
3. Adjust text alignment
4. Adjust icons/directions
5. Test RTL layouts
6. Document RTL guidelines

### 8. Add Translation Management

เพิ่ม translation management

1. Setup translation management platform
2. Implement translation updates
3. Implement translation validation
4. Implement translation review
5. Implement translation versioning
6. Monitor translation coverage

## Rules

### 1. String Extraction

Extract strings อย่างครบถ้วน

- Extract ทุก user-facing strings
- Extract error messages
- Extract validation messages
- Extract templates
- ไม't leave hardcoded strings

### 2. Translation Quality

ใช้ translations ที่มีคุณภาพ

- ใช้ native translators
- ใช้ consistent terminology
- ใช้ context สำหรับ translations
- Review translations
- Update translations regularly

### 3. Locale Formatting

ใช้ locale formatting อย่างถูกต้อง

- Format ทุก dates/times ตาม locale
- Format ทุก numbers ตาม locale
- Format ทุก currencies ตาม locale
- ใช้ locale-aware sorting
- ใช้ locale-aware comparison

### 4. RTL Support

Support RTL อย่างเหมาะสม

- Detect RTL languages
- Flip layouts อย่างถูกต้อง
- Adjust text alignment
- Test RTL layouts
- Document RTL patterns

### 5. Performance

i18n ต้องมีประสิทธิภาพ

- Load translations lazily
- Cache translations
- ไม't over-translate
- Use translation keys efficiently
- Monitor i18n performance

## Expected Outcome

- i18n framework ที่ setup
- Strings ที่ extracted
- Translations ที่ implemented
- Locale formatting ที่ added
- RTL support ที่ implemented
- Translation management ที่ setup
- Translation coverage ที่ complete
