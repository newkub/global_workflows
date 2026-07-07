---
title: Analyze Accessibility
description: วิเคราะห์ WCAG compliance, ARIA, screen readers, keyboard nav, color contrast
auto_execution_mode: 3
related_workflows:
  - /analyze-uxui
  - /improve-accessibility
  - /check-accessibility
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ accessibility compliance เพื่อระบุ WCAG violations และ assistive technology gaps

## Scope

WCAG 2.2 compliance, ARIA attributes, screen reader support, keyboard navigation, color contrast, focus management, semantic HTML, accessible forms, ARIA live regions

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม accessibility metrics ผ่าน scripts (ARIA scan, semantic HTML detection, contrast analysis)

### 2. Check WCAG Compliance

1. ระบุ missing semantic HTML (div แทน button, span แทน heading)
2. ระบุ missing ARIA labels และ descriptions
3. ระบุ incorrect ARIA roles และ attributes
4. ระบุ missing ARIA live regions สำหรับ dynamic content
5. ระบุ missing landmark regions (main, nav, aside, footer)

### 3. Check Keyboard Navigation

1. ระบุ missing keyboard focus styles
2. ระบุ missing tab order management
3. ระบุ missing focus trap ใน modals และ dialogs
4. ระบุ missing skip-to-content link
5. ระบุ missing keyboard shortcuts และ hotkeys
6. ระบุ elements ที่ไม่ accessible ผ่าน keyboard

### 4. Check Color And Contrast

1. ระบุ color contrast ที่ไม่ผ่าน WCAG AA (4.5:1 text, 3:1 large text)
2. ระบุ missing color-blind friendly patterns
3. ระบุ color-only information conveyance
4. ระบุ missing dark mode contrast verification
5. ระบุ missing focus indicator contrast

### 5. Check Forms And Inputs

1. ระบุ missing form labels และ associations
2. ระบุ missing fieldset และ legend สำหรับ grouped inputs
3. ระบุ missing error announcements สำหรับ form validation
4. ระบุ missing autocomplete attributes
5. ระบุ missing required field indicators
6. ระบุ missing input validation messages

### 6. Check Images And Media

1. ระบุ missing alt text สำหรับ images
2. ระบุ missing captions สำหรับ video
3. ระบุ missing transcripts สำหรับ audio
4. ระบุ missing audio descriptions
5. ระบุ missing media player accessibility

### 7. Check Screen Reader Support

1. ระบุ missing screen reader-only text (sr-only)
2. ระบุ missing aria-label สำหรับ icon-only buttons
3. ระบุ missing role สำหรับ custom widgets
4. ระบุ missing aria-expanded, aria-selected, aria-hidden
5. ระบุ missing heading hierarchy (h1-h6 order)

### 8. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: semantic HTML → keyboard nav → ARIA → forms → contrast → media

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม WCAG criterion และ severity

### 2. Severity Classification

- **Critical**: no keyboard access, missing form labels, missing alt text
- **High**: missing ARIA, poor contrast, missing focus management
- **Medium**: missing landmarks, missing live regions, missing skip link
- **Low**: missing autocomplete, missing heading hierarchy, missing captions

### 3. Framework Awareness

- ตรวจสอบ SolidJS component accessibility
- ตรวจสอบ UnoCSS sr-only utilities
- ระบุ component library accessibility

### 4. Use Scripts For A11y Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ ARIA pattern detection
- ใช้ `/check-accessibility` สำหรับ automated scanning

## Expected Outcome

- Accessibility violations ระบุพร้อม WCAG criterion และ severity
- Keyboard แล ARIA issues จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-accessibility`
