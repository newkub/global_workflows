---
title: Improve Form
description: ปรับปรุง form UX, validation, multi-step, CSRF ครบวงจร
auto_execution_mode: 3
related_workflows:
  - improve-uxui
  - improve-accessibility
  - improve-error-handling
  - improve-security
  - improve-type-safety
---

## Goal

ปรับปรุง form system ทั้ง UX, validation, multi-step flows, CSRF protection, และ form accessibility

## Scope

ใช้สำหรับ project ที่มี forms (login, register, checkout, survey, settings, admin)

## Execute

### 1. Form UX

ปรับปรุง form user experience

1. ทำ `/improve-uxui` สำหรับ form design
2. ตรวจสอบ input types ที่เหมาะสม (email, tel, date, etc.)
3. ตั้งค่า autocomplete attributes สำหรับ browser autofill
4. ตรวจสอบ input masking สำหรับ phone, card, date
5. ตั้งค่า smart defaults และ pre-fill ถ้าเป็นไปได้
6. แสดง field hints และ help text ที่ชัดเจน

### 2. Validation

ปรับปรุง form validation

1. ทำ `/improve-type-safety` สำหรับ validation schemas
2. ตั้งค่า client-side validation พร้อม real-time feedback
3. ตรวจสอบ server-side validation สำหรับทุก form
4. ตั้งค่า async validation (unique email, username check)
5. ตรวจสอบ error messages ที่ actionable และ localized
6. ใช้ `Zod` หรือ equivalent สำหรับ schema validation

### 3. Multi-Step Forms

ปรับปรุง multi-step form flows

1. วิเคราะห์ multi-step flow และ step count
2. ตั้งค่า progress indicator ที่ชัดเจน
3. ตรวจสอบ draft/save สำหรับ long forms
4. ตั้งค่า back navigation โดยไม่เสียข้อมูล
5. ตรวจสอบ step validation ก่อน next
6. ตั้งค่า resume flow สำหรับ abandoned forms

### 4. Form Security

ปรับปรุง form security

1. ทำ `/improve-security` สำหรับ form security audit
2. ตั้งค่า CSRF tokens สำหรับทุก form submission
3. ตรวจสอบ rate limiting สำหรับ form submissions
4. ตั้งค่า honeypot หรือ reCAPTCHA สำหรับ spam prevention
5. ตรวจสอบ file upload validation ถ้ามี
6. ทำ `/improve-error-handling` สำหรับ form errors

### 5. Form Accessibility

ปรับปรุง form accessibility

1. ทำ `/improve-accessibility` สำหรับ WCAG compliance
2. ตรวจสอบ label associations สำหรับทุก input
3. ตั้งค่า aria attributes (aria-required, aria-invalid, aria-describedby)
4. ตรวจสอบ keyboard navigation และ focus management
5. ตั้งค่า error announcement สำหรับ screen readers
6. ตรวจสอบ color contrast สำหรับ error states

### 6. File Upload Forms

ปรับปรุง file upload forms

1. ตรวจสอบ file type และ size validation
2. ตั้งค่า drag-and-drop upload UX
3. ตรวจสอบ upload progress indicator
4. ตั้งค่า multiple file upload ถ้าจำเป็น
5. ตรวจสอบ upload error handling และ retry

## Rules

### 1. UX Quality

- Input types ที่เหมาะสม สำหรับ browser autofill
- Smart defaults และ pre-fill ถ้าเป็นไปได้
- Help text ชัดเจน และ concise
- Error messages actionable ไม่ใช่ generic

### 2. Validation Complete

- Client-side และ server-side validation ทั้งคู่
- Real-time feedback สำหรับ better UX
- Async validation สำหรับ uniqueness checks
- Error messages localized และ actionable

### 3. Security Required

- CSRF tokens สำหรับทุก form
- Rate limiting สำหรับ submissions
- Spam prevention (honeypot, reCAPTCHA)
- File upload validation ถ้ามี

### 4. Accessibility

- Label สำหรับทุก input
- Aria attributes ครบถ้วน
- Keyboard navigation ทำงานได้
- Error announcement สำหรับ screen readers

## Expected Outcome

- Form UX ลื่นไหล พร้อม smart defaults และ autofill
- Validation ครบถ้วน ทั้ง client และ server-side
- Multi-step forms มี progress indicator และ draft save
- Form security ผ่าน CSRF และ spam prevention
- Form accessibility ผ่าน WCAG compliance
- File upload forms มี validation และ progress indicator
