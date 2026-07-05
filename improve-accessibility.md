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

1. ทำ `/check-accessibility` เพื่อตรวจสอบ WCAG compliance
2. ตรวจสอบ keyboard navigation
3. ตรวจสอบ screen reader support
4. ตรวจสอบ color contrast
5. ตรวจสอบ semantic HTML
6. ตรวจสอบ forms accessibility

### 2. Test Accessibility

ทดสอบ accessibility อย่างครบถ้วน

1. ทำ `/run-test` เพื่อทดสอบ accessibility ครบถ้วน
2. ทดสอบด้วย screen readers (NVDA, JAWS, VoiceOver)
3. ทดสอบ keyboard navigation
4. ทดสอบ color contrast
5. ทดสอบ ARIA attributes
6. ทดสอบ images และ media

### 3. Fix Issues

แก้ไข issues ที่พบ

1. แก้ไข critical issues ก่อน
2. แก้ไข high priority issues
3. แก้ไข medium และ low issues
4. ทำ manual testing สำหรับสิ่งที่ automated ไม่ตรวจได้
5. Document workarounds สำหรับ non-critical

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
