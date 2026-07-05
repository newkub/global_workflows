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

1. ทำ `/improve-compatibility` สำหรับ browser และ platform compatibility
2. ทดสอบบน Chrome, Firefox, Safari, Edge
3. ทดสอบบน mobile browsers
4. ตรวจสอบ OS compatibility
5. ระบุ issues ที่พบ

### 2. Improve Browser Support

ปรับปรุง browser support

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

### 5. Improve CI/CD

ปรับปรุย CI/CD

1. ใช้ CI/CD automation
2. ใช้ containerization
3. ใช้ automated testing
4. มี rollback strategy ชัดเจน
5. ปรับปรุย deployment process

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
