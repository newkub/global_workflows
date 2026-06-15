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

- ทดสอบบน Chrome, Firefox, Safari, Edge
- ทดสอบบน mobile browsers
- ระบุ issues ที่พบ
- ตรวจสอบ CSS compatibility
- ตรวจสอบ JavaScript compatibility

### 2. Improve Browser Support

ปรับปรุย browser support

- ใช้ polyfills สำหรับ features ที่ไม่รองรับ
- ใช้ feature detection
- ใช้ progressive enhancement
- ปรับปรุย CSS compatibility
- ปรับปรุย JavaScript compatibility

### 3. Improve Mobile Support

ปรับปรุย mobile support

- ทดสอบ responsive design
- ทดสอบ touch interactions
- ปรับปรุย viewport handling
- ปรับปรุย performance บน mobile
- ปรับปรุย battery usage

### 4. Improve Accessibility

ปรับปรุย accessibility

- ทำ `/improve-accessibility` สำหรับ WCAG compliance
- ปรับปรุย keyboard navigation
- ปรับปรุย screen reader support
- ปรับปรุย color contrast
- ปรับปรุย ARIA attributes

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
