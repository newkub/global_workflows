---
title: Improve I18n
description: ปรับปรุง internationalization, localization, translation management และ RTL
auto_execution_mode: 3
related_workflows:
  - improve-user-features
  - improve-uxui
  - improve-content
  - improve-seo
---

## Goal

ปรับปรุง internationalization (i18n) ให้ครอบคลุมทั้ง translation management, locale detection, RTL support, และ content localization

## Scope

ใช้สำหรับ project ที่รองรับหลายภาษาหรือวางแผนรองรับหลายภาษา

## Execute

### 1. Analyze Current I18n Setup

วิเคราะห์ i18n setup ปัจจุบัน

1. ตรวจสอบ i18n library ที่ใช้
2. ตรวจสอบ locale detection strategy
3. ตรวจสอบ translation file structure
4. ตรวจสอบ supported locales
5. ตรวจสอบ fallback locale strategy

### 2. Translation Management

ปรับปรุง translation management

1. ใช้ structured translation files (JSON, YAML)
2. ใช้ namespaced translations ตาม feature
3. ตั้งค่า translation key naming conventions
4. ใช้ interpolation สำหรับ dynamic values
5. ใช้ pluralization rules ตาม locale
6. ตั้งค่า missing translation detection

### 3. Locale Detection And Routing

ปรับปรุง locale detection

1. ใช้ URL-based locale routing (/en/, /th/)
2. ใช้ Accept-Language header สำหรับ initial detection
3. ใช้ cookie หรือ localStorage สำหรับ user preference
4. ตั้งค่า locale persistence
5. ตั้งค่า locale redirect strategy
6. ทำ `/improve-routing` สำหรับ locale-aware routing

### 4. RTL Support

รองรับ right-to-left languages

1. ตั้งค่า RTL locale detection (ar, he, fa, ur)
2. ใช้ CSS logical properties (margin-inline, padding-inline)
3. ใช้ `dir` attribute บน HTML element
4. ตรวจสอบ component layout สำหรับ RTL
5. ทดสอบ RTL layout อย่างสม่ำเสมอ

### 5. Content Localization

ปรับปรุง content localization

1. แปล UI strings ทุกภาษา
2. แปล error messages และ validation messages
3. แปล email templates
4. แปล notification messages
5. จัดการ locale-specific formats (date, time, currency, number)
6. ทำ `/improve-content` สำหรับ content quality

### 6. SEO For Multiple Locales

ปรับปรุง SEO สำหรับหลายภาษา

1. ใช้ hreflang tags สำหรับทุก locale
2. ใช้ locale-specific meta tags
3. ใช้ locale-specific sitemap entries
4. ใช้ locale-specific structured data
5. ทำ `/improve-seo` สำหรับ SEO ครบวงจร

## Rules

### 1. Complete Translations

- ทุก user-facing string ต้องมี translation
- ไม่ hardcode strings ใน components
- ใช้ translation keys แทน inline strings
- Missing translations ต้อง detect และ alert

### 2. Fallback Strategy

- Fallback locale ต้องชัดเจน
- Missing key ต้อง fallback ไม่แสดง raw key
- Log missing translations สำหรับ cleanup
- ไม่ crash เมื่อ translation missing

### 3. Performance

- Lazy load translation files ตาม locale
- ไม่ load ทุก locale ใน initial bundle
- Cache translation files ใน browser
- ใช้ translation prefetch สำหรับ likely locales

## Expected Outcome

- Translation management เป็นระบบ
- Locale detection และ routing ชัดเจน
- RTL support ทำงานถูกต้อง
- Content localization ครบถ้วน
- SEO สำหรับหลายภาษา ครบถ้วน
- Performance ไม่กระทบจาก i18n
