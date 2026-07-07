---
title: Analyze Form
description: วิเคราะห์ form UX, validation, multi-step, CSRF, file upload in forms
auto_execution_mode: 3
related_workflows:
  - /analyze-uxui
  - /analyze-accessibility
  - /improve-form
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ form patterns และ validation strategy เพื่อระบุ UX และ security gaps

## Scope

Form UX, validation, multi-step forms, CSRF protection, file upload in forms, form state, error display, autocomplete

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม form metrics ผ่าน scripts (form detection, validation scan, field analysis)

### 2. Check Form Validation

1. ระบุ missing client-side validation
2. ระบุ missing server-side validation
3. ระบุ missing Zod schema validation
4. ระบุ inconsistent validation messages
5. ระบุ missing real-time validation (onBlur, onChange)
6. ระบุ missing cross-field validation

### 3. Check Form UX

1. ระบุ missing loading states ระหว่าง submit
2. ระบุ missing success/error feedback
3. ระบุ missing field hints และ descriptions
4. ระบุ missing required field indicators
5. ระบุ missing character counters สำหรับ limited inputs
6. ระบุ missing input masking (phone, date, currency)

### 4. Check Multi-Step Forms

1. ระบุ missing progress indicators
2. ระบุ missing draft saving
3. ระบุ missing step validation before navigation
4. ระบุ missing back navigation ที่ preserve data
5. ระบุ missing resume capability
6. ระบุ missing step analytics

### 5. Check Form Security

1. ระบุ missing CSRF tokens
2. ระบุ missing rate limiting บน form submissions
3. ระบุ missing honeypot สำหรับ spam prevention
4. ระบุ missing reCAPTCHA สำหรับ public forms
5. ระบุ missing input sanitization
6. ระบุ sensitive data ใน form fields ที่ไม่ masked

### 6. Check Form State Management

1. ระบุ missing form state persistence
2. ระบุ missing dirty state tracking
3. ระบุ missing unsaved changes warning
4. ระบุ missing form reset mechanism
5. ระบุ missing default values
6. ระบุ form state ที่ไม่ sync กับ URL

### 7. Check File Upload In Forms

1. ระบุ missing file type validation
2. ระบุ missing file size validation
3. ระบุ missing upload progress
4. ระบุ missing drag-and-drop support
5. ระบุ missing file preview
6. ระบุ missing multiple file handling

### 8. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: validation → security → form UX → multi-step → state → file upload

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม form location และ severity

### 2. Severity Classification

- **Critical**: missing server-side validation, missing CSRF, no spam prevention
- **High**: missing client-side validation, missing loading states, missing file validation
- **Medium**: missing real-time validation, missing progress indicators, missing unsaved warning
- **Low**: missing input masking, missing character counters, missing draft saving

### 3. Framework Awareness

- ตรวจสอบ TanStack Solid Form patterns
- ตรวจสอบ Zod schema validation
- ระบุ form library capabilities

### 4. Use Scripts For Form Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ form pattern detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- Form gaps ระบุพร้อม form location และ severity
- Validation และ security issues จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-form`
