---
title: Improve Platform
description: ปรับปรุง platform support สำหรับ browser และ platform compatibility
auto_execution_mode: 3
related_workflows:
  - /improve-compatibility
  - /improve-accessibility
---

## Goal

ปรับปรุง platform support ให้ครอบคลุม browsers และ platforms ต่างๆ

## Scope

ใช้สำหรับปรับปรุง platform support ของ web applications

## Execute

### 1. Check Compatibility

ตรวจสอบ compatibility ปัจจุบัน

- ทำ `/improve-compatibility` สำหรับ browser และ platform compatibility
- ทดสอบบน Chrome, Firefox, Safari, Edge
- ทดสอบบน mobile browsers
- ตรวจสอบ OS compatibility
- ระบุ issues ที่พบ

### 2. Improve Browser Support

ปรับปรุง browser support

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

### 5. Improve CI/CD

ปรับปรุย CI/CD

- ใช้ CI/CD automation
- ใช้ containerization
- ใช้ automated testing
- มี rollback strategy ชัดเจน
- ปรับปรุย deployment process

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

### 4. Testing

ทดสอบอย่างครบถ้วน

- ทดสอบบน browsers หลัก
- ทดสอบบน mobile devices
- ทดสอบบน tablets
- ทดสอบบน desktops
- ใช้ automated testing

## Expected Outcome

- Platform compatibility ดีขึ้น
- Browser support ครอบคลุม browsers หลัก
- OS compatibility ดีขึ้น
- Deployment process อัตโนมัติ
- Platform tests ครอบคลุม
- Performance ดีขึ้นข้าม platforms
- Accessibility ตรงตามมาตรฐาน
