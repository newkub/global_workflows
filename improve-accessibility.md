---
title: Improve Accessibility
description: ปรับปรุง accessibility ให้ตรงตามมาตรฐาน WCAG สำหรับทุกคน
auto_execution_mode: 3
related_workflows:
  - check-accessibility
  - test-accessibility
---

## Goal

ปรับปรุง accessibility ให้ตรงตามมาตรฐาน WCAG สำหรับทุกคนใช้งานได้

## Scope

ใช้สำหรับปรับปรุง accessibility ของ web applications, mobile apps, และ desktop applications

## Execute

### 1. Check Accessibility

ตรวจสอบ accessibility ปัจจุบัน

- ทำ `/check-accessibility` เพื่อตรวจสอบ WCAG compliance
- ตรวจสอบ keyboard navigation
- ตรวจสอบ screen reader support
- ตรวจสอบ color contrast
- ตรวจสอบ semantic HTML
- ตรวจสอบ forms accessibility

### 2. Test Accessibility

ทดสอบ accessibility อย่างครบถ้วน

- ทำ `/test-accessibility` เพื่อทดสอบ accessibility ครบถ้วน
- ทดสอบด้วย screen readers (NVDA, JAWS, VoiceOver)
- ทดสอบ keyboard navigation
- ทดสอบ color contrast
- ทดสอบ ARIA attributes
- ทดสอบ images และ media

### 3. Fix Issues

แก้ไข issues ที่พบ

- แก้ไข critical issues ก่อน
- แก้ไข high priority issues
- แก้ไข medium และ low issues
- ทำ manual testing สำหรับสิ่งที่ automated ไม่ตรวจได้
- Document workarounds สำหรับ non-critical

## Rules

### 1. WCAG Compliance

ทำตามมาตรฐาน WCAG

- ตรวจสอบตาม WCAG 2.1 AA ขั้นต่ำ
- พิจารณา AAA สำหรับ critical applications
- ตรวจสอบทั้ง Perceivable, Operable, Understandable, Robust

### 2. Priority-Based Fixes

แก้ไขตามลำดับความสำคัญ

- Critical: ขัดขวางการใช้งานอย่างสิ้นเชิง
- High: ทำให้ใช้งานยากอย่างมาก
- Medium: ทำให้ใช้งานยากเล็กน้อย
- Low: เป็น best practices

### 3. Testing Scope

ทดสอบอย่างครบถ้วน

- ทดสอบด้วย keyboard เสมอ
- ทดสอบด้วย screen reader
- ทดสอบด้วย zoom tools
- ทดสอบด้วย color blindness simulators

## Expected Outcome

- Accessibility ผ่าน WCAG AA ขั้นต่ำ
- Keyboard navigation ทำงานได้
- Screen reader สามารถใช้งานได้
- Color contrast ผ่านมาตรฐาน
- Forms สามารถใช้งานได้โดยทุกคน
- Issues ทั้งหมดถูกแก้ไขตาม priority
