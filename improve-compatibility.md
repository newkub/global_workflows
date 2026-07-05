---
title: Improve Compatibility
description: ปรับปรุย browser และ platform compatibility
auto_execution_mode: 3
related_workflows:
  - /improve-platform
  - /improve-accessibility
---

## Goal

ปรับปรุย browser และ platform compatibility ให้ครอบคลุม

## Scope

ใช้สำหรับปรับปรุย compatibility ของ web applications

## Execute

### 1. Check Browser Compatibility

ตรวจสอบ browser compatibility

1. ทดสอบบน Chrome, Firefox, Safari, Edge
2. ทดสอบบน mobile browsers
3. ระบุ issues ที่พบ
4. ตรวจสอบ CSS compatibility
5. ตรวจสอบ JavaScript compatibility

### 2. Improve Browser Support

ปรับปรุย browser support

1. ใช้ polyfills สำหรับ features ที่ไม่รองรับ
2. ใช้ feature detection
3. ใช้ progressive enhancement
4. ปรับปรุย CSS compatibility
5. ปรับปรุย JavaScript compatibility

### 3. Improve Mobile Support

ปรับปรุย mobile support

1. ทดสอบ responsive design
2. ทดสอบ touch interactions
3. ปรับปรุย viewport handling
4. ปรับปรุย performance บน mobile
5. ปรับปรุย battery usage

### 4. Improve Accessibility

ปรับปรุย accessibility

1. ทำ `/improve-accessibility` สำหรับ WCAG compliance
2. ปรับปรุย keyboard navigation
3. ปรับปรุย screen reader support
4. ปรับปรุย color contrast
5. ปรับปรุย ARIA attributes

## Rules

### 1. Progressive Enhancement

ใช้ progressive enhancement

- ให้ core functionality ทำงานบนทุก browsers
- เพิ่ม features สำหรับ browsers ที่รองรับ
- ไม่ break บน browsers เก่า
- ใช้ feature detection แทน browser detection

### 2. Responsive Design

ใช้ responsive design

- ใช้ mobile-first approach
- ทดสอบบนทุก screen sizes
- ใช้ flexible layouts
- ใช้ responsive images
- ใช้ responsive typography

### 3. Performance

รักษา performance

- Optimize สำหรับ mobile devices
- ลด bundle size
- ใช้ lazy loading
- Optimize images
- ใช้ caching อย่างเหมาะสม

## Expected Outcome

- Browser support ครอบคลุม browsers หลัก
- Mobile support ครอบคลุม
- Accessibility ตรงตามมาตรฐาน
- Performance ดีขึ้นข้าม platforms
