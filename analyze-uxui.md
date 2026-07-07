---
title: Analyze UXUI
description: วิเคราะห์ UX/UI quality: accessibility, usability, interaction patterns, design system
auto_execution_mode: 3
related_workflows:
  - /check-accessibility
  - /improve-accessibility
  - /improve-uxui
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ user experience และ UI quality ของ codebase เพื่อระบุ accessibility และ usability issues

## Scope

WCAG compliance, ARIA usage, keyboard navigation, color contrast, screen reader support, focus management, interaction patterns, design system consistency, responsive behavior

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม UX/UI metrics ผ่าน scripts (accessibility scan, contrast analysis, ARIA validation)

### 2. Check WCAG Compliance

1. ระบุ semantic HTML issues (missing `lang`, `alt`, `role`)
2. ระบุ heading hierarchy violations (skipped levels)
3. ระบุ missing `label` สำหรับ form inputs
4. ระบุ missing `title` และ `aria-label` สำหรับ icon-only buttons

### 3. Check ARIA Usage

1. ระบุ missing ARIA attributes บน interactive elements
2. ระบุ invalid ARIA roles และ attributes
3. ระบุ redundant ARIA (semantic HTML ที่มี ARIA ซ้ำ)
4. ระบุ ARIA ที่ไม่มี corresponding text label

### 4. Check Keyboard Navigation

1. ระบุ interactive elements ที่ไม่ accessible ด้วย keyboard
2. ระบุ missing focus styles และ focus traps
3. ระบุ tab order ที่ไม่ logical
4. ระบุ missing skip-to-content link

### 5. Check Color Contrast

1. ระบุ text/background combinations ที่ contrast < 4.5:1
2. ระบุ UI components ที่ contrast < 3:1
3. ระบุ color-only information ที่ไม่มี text alternative

### 6. Check Screen Reader Support

1. ระบุ dynamic content ที่ไม่ announce ผ่าน `aria-live`
2. ระบุ form errors ที่ไม่ announce
3. ระบุ loading states ที่ไม่ announce
4. ระบุ modal/dialog ที่ไม่มี `aria-modal` และ focus trap

### 7. Check Interaction Patterns

1. ระบุ missing loading states และ skeleton screens
2. ระบุ missing error states และ empty states
3. ระบุ missing optimistic updates สำหรับ mutations
4. ระบุ missing confirmation dialogs สำหรับ destructive actions
5. ระบุ inconsistent interaction patterns ข้าม components
6. ระบุ missing undo/redo สำหรับ reversible actions
7. ระบุ missing feedback สำหรับ long-running operations (progress bars, spinners)

### 8. Check Design System Consistency

1. ระบุ components ที่ไม่ใช้ design tokens (hardcoded colors, spacing)
2. ระบุ inconsistent component variants ข้าม features
3. ระบุ missing component documentation และ examples
4. ระบุ spacing และ layout inconsistencies

### 9. Check Responsive Behavior

1. ระบุ breakpoints ที่ไม่ consistent
2. ระบุ layouts ที่ break บน mobile/tablet
3. ระบุ touch targets ที่เล็กเกินไป (< 44px)
4. ระบุ horizontal scroll ที่ไม่จำเป็น
5. ระบุ missing responsive images (srcset, picture element)

### 10. Check Form UX

1. ระบุ missing inline validation และ real-time feedback
2. ระบุ missing accessible error messages สำหรับ form fields
3. ระบุ missing autocomplete attributes สำหรับ common fields
4. ระบุ missing input types ที่ไม่เหมาะสม (text แทน email, tel, date)
5. ระบุ missing required field indicators ที่ accessible
6. ระบุ missing multi-step form progress indicators

### 11. Check Animation And Motion

1. ระบุ missing `prefers-reduced-motion` support
2. ระบุ animations ที่ trigger layout thrashing
3. ระบุ missing transition states สำหรับ state changes
4. ระบุ animations ที่ไม่ smooth (< 60fps)
5. ระบุ missing micro-interactions สำหรับ user feedback

### 12. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม severity: WCAG A → WCAG AA → interaction → forms → design system → responsive → animation

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม location และ severity

### 2. WCAG Levels

- Level A: ขั้นต่ำ ต้องแก้ทั้งหมด
- Level AA: มาตรฐาน ต้องแก้ส่วนใหญ่
- Level AAA: ระดับสูง แก้ตามความเหมาะสม

### 3. Severity Classification

- **Critical**: WCAG A violations, missing keyboard navigation, no focus management
- **High**: WCAG AA violations, missing ARIA, poor contrast, missing form labels
- **Medium**: inconsistent interactions, missing loading/error states, design system gaps
- **Low**: missing animations, minor responsive issues, missing micro-interactions

### 4. Frontend Only

- ถ้า project ไม่มี frontend ให้ข้าม workflow นี้
- ใช้กับ web, mobile web, และ hybrid apps

### 5. Framework Awareness

- ตรวจสอบ framework-specific UX patterns (SolidJS, React, Vue, Svelte)
- ระบุ component library usage ที่ไม่ accessible
- ตรวจสอบ SSR/SSG ที่ส่งผลต่อ hydration และ interaction timing
- ถ้า project ใช้ UnoCSS ตรวจสอบ design token usage

### 6. Monorepo Considerations

- ถ้าเป็น monorepo ให้วิเคราะห์แต่ละ workspace ที่มี frontend แยก
- ระบุ shared components ที่ไม่ accessible ซึ่งส่งผลต่อทุก workspace
- ตรวจสอบ design system consistency ข้าม workspaces

### 7. Use Scripts For Batch Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอสำหรับ UX/UI analysis
- ใช้ `/use-scripts` เมื่อต้องวิเคราะห์ components มากกว่า 10 components

## Expected Outcome

- UX/UI issues ระบุพร้อม WCAG level, severity และ location
- Interaction, form UX, และ design system gaps ระบุชัดเจน
- Responsive และ animation issues ระบุครบถ้วน
- พร้อมสำหรับ `/improve-accessibility` หรือ `/improve-uxui`
