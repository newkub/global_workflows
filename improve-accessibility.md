---
title: Improve Accessibility
description: ปรับปรุง accessibility ให้ครอบคลุมตาม WCAG
auto_execution_mode: 3
---

## Goal

ปรับปรุง accessibility ให้ครอบคลุมตาม WCAG guidelines และรองรับผู้ใช้ทุกคน

## Execute

### 1. Analyze Accessibility Issues

วิเคราะห์ accessibility ปัจจุบัน

1. รัน accessibility audit tools
2. ตรวจสอบ semantic HTML
3. ตรวจสอบ keyboard navigation
4. ตรวจสอบ screen reader compatibility
5. ตรวจสอบ color contrast

### 2. Improve Semantic HTML

ปรับปรุง semantic HTML

1. ใช้ semantic elements ที่ถูกต้อง
2. เพิ่ม ARIA labels ที่เหมาะสม
3. ใช้ heading hierarchy ที่ถูกต้อง
4. เพิ่ม alt text สำหรับ images
5. ใช้ landmarks อย่างเหมาะสม

### 3. Improve Keyboard Navigation

ปรับปรุง keyboard navigation

1. ทำให้ interactive elements focusable
2. เพิ่ม visible focus indicators
3. ใช้ tab order ที่ logical
4. เพิ่ม keyboard shortcuts
5. ทดสอบ keyboard-only navigation

### 4. Improve Color and Visual

ปรับปรุง color และ visual accessibility

1. ตรวจสอบ color contrast ratios
2. ไม่ใช้ color เพียงอย่างเดียวสำหรับ meaning
3. รองรับ high contrast mode
4. รองรับ reduced motion
5. ปรับปรุง text sizing

### 5. Improve Screen Reader Support

ปรับปรุง screen reader compatibility

1. เพิ่ม ARIA live regions
2. ใช้ role attributes ที่ถูกต้อง
3. ประกาศ dynamic content changes
4. ปรับปรุง form labels
5. ทดสอบกับ screen readers

## Rules

### WCAG Compliance

ทำตาม WCAG guidelines

- รองรับ WCAG 2.1 Level AA
- ตรวจสอบ perceivable, operable, understandable, robust
- ใช้ automated testing tools
- ทดสอบกับ assistive technologies
- อัปเดท accessibility อย่างสม่ำเสมอ

### Semantic HTML

ใช้ semantic HTML อย่างถูกต้อง

- ใช้ elements ตามความหมาย
- ใช้ headings hierarchy ที่ถูกต้อง
- ใช้ landmarks สำหรับ navigation
- ใช้ lists สำหรับ grouped items
- ใช้ tables สำหรับ tabular data

### Keyboard Navigation

รองรับ keyboard navigation

- ทุก interactive elements focusable
- มี visible focus indicators
- tab order logical
- ไม่ trap keyboard focus
- มี keyboard shortcuts สำคัญ

### Color Contrast

รักษา color contrast ที่เหมาะสม

- ตรงตาม WCAG contrast ratios
- ไม่พึ่ง color เพียงอย่างเดียว
- รองรับ color blindness
- รองรับ high contrast mode
- ทดสอบกับ contrast checkers

### Screen Readers

รองรับ screen readers

- ใช้ ARIA attributes อย่างเหมาะสม
- ประกาศ dynamic content
- ใช้ descriptive labels
- หลีกเลี่ยง hidden text ที่ไม่จำเป็น
- ทดสอบกับ screen readers หลัก

## Expected Outcome

- Accessibility ตรงตาม WCAG 2.1 Level AA
- Semantic HTML ที่ถูกต้อง
- Keyboard navigation ที่ครบถ้วน
- Color contrast ที่ผ่านเกณฑ์
- Screen reader compatibility ดีขึ้น
- Accessibility tools ผ่านทั้งหมด

