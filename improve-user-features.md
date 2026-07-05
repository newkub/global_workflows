---
title: Improve User Features
description: ปรับปรุง i18n, search, และ pagination สำหรับ user experience
auto_execution_mode: 3
related_workflows:
  - improve-uxui
  - improve-accessibility
  - improve-content
  - improve-web-performance
---

## Goal

ปรับปรุง user-facing features ทั้ง internationalization, search functionality, และ pagination strategy

## Scope

ใช้สำหรับ project ที่มี multi-language support, search functionality, หรือ data pagination

## Execute

### 1. Internationalization

ปรับปรุง i18n และ localization

1. วิเคราะห์ i18n setup และ translation files
2. ตรวจสอบทุก user-facing strings ใช้ translation keys
3. ตั้งค่า locale detection และ switching
4. รองรับ RTL languages ถ้าจำเป็น
5. ตรวจสอบ date, time, และ number formatting ตาม locale
6. ทำ `/improve-content` สำหรับ translation quality

### 2. Search

ปรับปรุง search functionality

1. วิเคราะห์ search architecture (client-side, server-side, full-text)
2. ตั้งค่า search indexing strategy
3. Implement search ranking และ relevance
4. เพิ่ม search suggestions และ autocomplete
5. ตรวจสอบ search performance สำหรับ large datasets
6. ทำ `/improve-web-performance` สำหรับ search response time

### 3. Pagination

ปรับปรุง pagination และ data loading

1. วิเคราะห์ pagination strategy (offset, cursor, infinite scroll)
2. ตั้งค่า page size ที่เหมาะสม
3. Implement loading states และ skeleton UI
4. ตรวจสอบ SEO-friendly pagination (canonical, meta)
5. จัดการ empty states และ error states
6. ทำ `/improve-uxui` สำหรับ pagination UX

## Rules

### 1. I18n Completeness

- ทุก user-facing strings ต้องใช้ translation keys
- ไม่มี hardcoded strings ใน components
- Translation files ต้อง complete สำหรับทุก supported locales
- Fallback locale ต้องกำหนดชัดเจน

### 2. Search Quality

- Search results ต้อง relevant และ fast (< 200ms)
- รองรับ typo tolerance และ fuzzy matching
- Highlight search terms ในผลลัพธ์
- แสดง result count และ facets ถ้ามี

### 3. Pagination UX

- แสดง loading state ระหว่างโหลดข้อมูล
- แสดง total count และ current page
- รองรับ keyboard navigation
- ไม่โหลดข้อมูลมากเกินไปในครั้งเดียว

## Expected Outcome

- I18n ครบถ้วน ทุก strings ใช้ translation keys
- Search เร็ว แม่นยำ พร้อม autocomplete
- Pagination ลื่นไหล พร้อม loading states
- Multi-language รองรับ locale switching ทันที
- User experience ดีขึ้นทั้ง search และ browsing
