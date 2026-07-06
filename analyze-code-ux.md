---
title: Analyze Code UX
description: วิเคราะห์ UX quality: accessibility, usability, interaction patterns, design system
auto_execution_mode: 3
related_workflows:
  - /check-accessibility
  - /improve-accessibility
  - /improve-uxui
  - /use-scripts
  - /report-format-table
---

## Goal

วิเคราะห์ user experience quality ของ codebase เพื่อระบุ accessibility และ usability issues

## Scope

WCAG compliance, ARIA usage, keyboard navigation, color contrast, screen reader support, focus management, interaction patterns, design system consistency, responsive behavior

## Execute

### 1. Check WCAG Compliance

1. ระบุ semantic HTML issues (missing `lang`, `alt`, `role`)
2. ระบุ heading hierarchy violations (skipped levels)
3. ระบุ missing `label` สำหรับ form inputs
4. ระบุ missing `title` และ `aria-label` สำหรับ icon-only buttons

### 2. Check ARIA Usage

1. ระบุ missing ARIA attributes บน interactive elements
2. ระบุ invalid ARIA roles และ attributes
3. ระบุ redundant ARIA (semantic HTML ที่มี ARIA ซ้ำ)
4. ระบุ ARIA ที่ไม่มี corresponding text label

### 3. Check Keyboard Navigation

1. ระบุ interactive elements ที่ไม่ accessible ด้วย keyboard
2. ระบุ missing focus styles และ focus traps
3. ระบุ tab order ที่ไม่ logical
4. ระบุ missing skip-to-content link

### 4. Check Color Contrast

1. ระบุ text/background combinations ที่ contrast < 4.5:1
2. ระบุ UI components ที่ contrast < 3:1
3. ระบุ color-only information ที่ไม่มี text alternative

### 5. Check Screen Reader Support

1. ระบุ dynamic content ที่ไม่ announce ผ่าน `aria-live`
2. ระบุ form errors ที่ไม่ announce
3. ระบุ loading states ที่ไม่ announce
4. ระบุ modal/dialog ที่ไม่มี `aria-modal` และ focus trap

### 6. Check Interaction Patterns

1. ระบุ missing loading states และ skeleton screens
2. ระบุ missing error states และ empty states
3. ระบุ missing optimistic updates สำหรับ mutations
4. ระบุ missing confirmation dialogs สำหรับ destructive actions
5. ระบุ inconsistent interaction patterns ข้าม components

### 7. Check Design System Consistency

1. ระบุ components ที่ไม่ใช้ design tokens (hardcoded colors, spacing)
2. ระบุ inconsistent component variants ข้าม features
3. ระบุ missing component documentation และ examples
4. ระบุ spacing และ layout inconsistencies

### 8. Check Responsive Behavior

1. ระบุ breakpoints ที่ไม่ consistent
2. ระบุ layouts ที่ break บน mobile/tablet
3. ระบุ touch targets ที่เล็กเกินไป (< 44px)
4. ระบุ horizontal scroll ที่ไม่จำเป็น

### 9. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม severity: WCAG A → WCAG AA → interaction → design system → responsive

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม location และ severity

### 2. WCAG Levels

- Level A: ขั้นต่ำ ต้องแก้ทั้งหมด
- Level AA: มาตรฐาน ต้องแก้ส่วนใหญ่
- Level AAA: ระดับสูง แก้ตามความเหมาะสม

### 3. Frontend Only

- ถ้า project ไม่มี frontend ให้ข้าม workflow นี้
- ใช้กับ web, mobile web, และ hybrid apps

## Expected Outcome

- UX issues ระบุพร้อม WCAG level และ location
- Interaction และ design system gaps ระบุชัดเจน
- พร้อมสำหรับ `/improve-accessibility` หรือ `/improve-uxui`
