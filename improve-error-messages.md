---
title: Improve Error Messages
description: ปรับปรุง user-friendly error messages, error code system และ localization-ready errors
auto_execution_mode: 3
related_workflows:
  - improve-error-handling
  - improve-frontend
  - improve-i18n
  - improve-uxui
---

## Goal

ปรับปรุง error message quality ให้เป็นระบบ ทั้ง error code system, user-friendly messages, actionable guidance, และ localization-ready

## Scope

ใช้สำหรับ project ที่ต้องการ error messages ที่ชัดเจน actionable และ consistent ทั้ง server และ client

## Execute

### 1. Analyze Current Error Messages

วิเคราะห์ error messages ปัจจุบัน

1. ตรวจสอบ error message sources (server, client, validation)
2. ตรวจสอบ error message format และ consistency
3. ตรวจสอบ user-facing error display
4. ตรวจสอบ error code system (ถ้ามี)
5. ตรวจสอบ error message localization

### 2. Error Code System

สร้าง error code system

1. สร้าง structured error codes (DOMAIN_ERROR_TYPE เช่น AUTH_INVALID_CREDENTIALS)
2. ใช้ consistent naming convention ทั่วทั้ง application
3. แยก error codes จาก error messages
4. สร้าง error code registry สำหรับ documentation
5. ใช้ error codes สำหรับ programmatic handling
6. รวม error code ใน API error response

### 3. User-Friendly Messages

ปรับปรุง user-facing messages

1. เขียน messages ที่ clear และ non-technical
2. อธิบาย what went wrong อย่างเข้าใจง่าย
3. ระบุ what user can do เพื่อ resolve
4. ไม่ใช้ technical jargon ใน user messages
5. ไม่ blame user ใน error messages
6. ใช้ friendly และ helpful tone

### 4. Actionable Guidance

เพิ่ม actionable guidance

1. ระบุ next action ที่ user ควรทำ
2. ระบุ help link หรือ documentation (ถ้ามี)
3. ระบุ contact support option สำหรับ critical errors
4. ระบุ retry option สำหรับ transient errors
5. ระบุ alternative approach (ถ้ามี)
6. ไม่แสดง generic "Something went wrong" โดยไม่มี guidance

### 5. Error Response Format

มาตรฐาน error response format

1. ใช้ consistent JSON error response structure
2. รวม code, message, details, field (สำหรับ validation)
3. รวม traceId สำหรับ debugging
4. รวม timestamp สำหรับ audit
5. ไม่ expose stack traces ใน production
6. ใช้ appropriate HTTP status codes

### 6. Validation Errors

ปรับปรุง validation error messages

1. ระบุ field name ที่มีปัญหา
2. ระบุ validation rule ที่ fail
3. ระบุ expected format หรือ value
4. แสดง multiple validation errors พร้อมกัน
5. ใช้ field-specific messages ไม่ใช่ generic
6. ทำ `/improve-form` สำหรับ form validation UX

### 7. Localization-Ready Errors

เตรียม error messages สำหรับ localization

1. แยก error messages จาก code เป็น translation keys
2. ใช้ error code เป็น translation key
3. รองรับ interpolation สำหรับ dynamic values
4. ไม่ hardcode messages ใน components
5. ทำ `/improve-i18n` สำหรับ i18n setup

### 8. Error Message Testing

ทดสอบ error messages

1. ทดสอบ error display ใน UI
2. ทดสอบ error response format ใน API
3. ทดสอบ error code consistency
4. ทดสอบ validation error messages
5. ทดสอบ error message localization

## Rules

### 1. Clear And Actionable

- ทุก error message ต้องชัดเจน และบอก what to do
- ไม่ใช้ generic messages โดยไม่มี context
- ไม่ expose technical details ต่อ user
- ใช้ friendly tone ไม่ blame user

### 2. Code And Message Separated

- Error code สำหรับ programmatic handling
- Error message สำหรับ user display
- ไม่ parse message เพื่อ determine error type
- ใช้ code เสมอ สำหรับ conditional logic

### 3. Consistent Format

- ใช้ same response structure ทั่วทั้ง API
- ใช้ same error display pattern ทั่วทั้ง UI
- ใช้ consistent naming convention
- Document error codes ใน registry

## Expected Outcome

- Error code system เป็นระบบ มี registry
- User-friendly messages ชัดเจน actionable
- Error response format มาตรฐาน
- Validation errors ละเอียด ระบุ field
- Localization-ready error messages
- Error message testing ครบถ้วน
