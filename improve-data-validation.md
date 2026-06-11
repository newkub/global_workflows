---
title: Improve Data Validation
description: ปรับปรุง data validation ทั้ง client/server ด้วย Zod
auto_execution_mode: 3
related_workflows:
  - /improve-api-contracts
  - /improve-error-handling
  - /improve-type-safety
---

## Goal

ปรับปรุง data validation ให้ครอบคลุมทั้ง client-side และ server-side

## Scope

ใช้สำหรับปรับปรุง validation ด้วย Zod, Yup, Joi หรือ libraries ที่คล้ายกัน

## Execute

### 1. Analyze Current Validation

วิเคราะห์ validation ปัจจุบัน

1. ระบุ validation libraries ที่ใช้
2. ตรวจสอบ validation ใน API endpoints
3. ตรวจสอบ validation ใน forms
4. ตรวจสอบ validation ใน database schemas
5. ระบุ validation gaps
6. ระบุ inconsistent validation

### 2. Define Validation Schemas

กำหนด validation schemas

1. สร้าง shared validation schemas
2. กำหนด schemas สำหรับ common types (email, phone, URL)
3. กำหนด schemas สำหรับ business entities
4. กำหนด schemas สำหรับ API requests/responses
5. กำหนด schemas สำหรับ form inputs
6. กำหนด custom validators

### 3. Implement Server-Side Validation

ตั้งค่า server-side validation

1. Validate API request bodies
2. Validate query parameters
3. Validate path parameters
4. Validate headers
5. Validate database inputs
6. Validate external service responses

### 4. Implement Client-Side Validation

ตั้งค่า client-side validation

1. Validate form inputs
2. Validate user actions
3. Validate API responses
4. Show validation errors อย่างชัดเจน
5. Provide real-time feedback
6. Disable submit buttons ถ้า invalid

### 5. Add Custom Validators

เพิ่ม custom validators

1. สร้าง validators สำหรับ business rules
2. สร้าง validators สำหรับ data formats
3. สร้าง validators สำหรับ data relationships
4. สร้าง validators สำหรับ data constraints
5. สร้าง async validators
6. สร้าง conditional validators

### 6. Improve Error Messages

ปรับปรุม error messages

1. ให้ error messages ที่ชัดเจน
2. ให้ error messages ที่ actionable
3. ให้ error messages ที่ localized
4. ให้ field-specific errors
5. ให้ validation hints
6. ให้ examples สำหรับ valid inputs

### 7. Integrate with Type System

เชื่อมต่อกับ type system

1. Infer types จาก validation schemas
2. ใช้ types ใน TypeScript
3. ใช้ types ให้ autocomplete
4. ใช้ types สำหรับ type checking
5. ใช้ types สำหรับ documentation
6. ใช้ types สำหรับ code generation

### 8. Test Validation

ทดสอบ validation

1. Test valid inputs
2. Test invalid inputs
3. Test edge cases
4. Test custom validators
5. Test error messages
6. Test validation performance

## Rules

### 1. Validation Strategy

ใช้ validation อย่างเหมาะสม

- Validate ทุก inputs จาก external sources
- Validate ทั้ง client-side และ server-side
- Validate ก่อน processing
- Validate ก่อน database operations
- ไม่ trust client-side validation เท่านั้น

### 2. Schema Design

ออกแบบ schemas อย่างเหมาะสม

- ใช้ reusable schemas
- ใช้ composition สำหรับ complex schemas
- ใช้ transformations สำหรับ data normalization
- ใช้ defaults สำหรับ optional fields
- ใช้ strict mode สำหรับ security

### 3. Error Messages

ให้ error messages ที่ดี

- ให้ messages ที่ชัดเจน
- ให้ messages ที่ actionable
- ให้ messages ที่ localized
- ให้ field-specific messages
- ให้ examples สำหรับ valid inputs

### 4. Performance

Validation ต้องเร็ว

- ใช้ efficient validators
- ใช้ early termination
- ไม่ validate ซ้ำ
- ไม่ validate ใน tight loops
- Monitor validation performance

### 5. Security

Validation ต้องปลอดภัย

- Validate ทุก inputs
- Sanitize ทุก outputs
- ไม่ expose internal details
- ไม่ expose validation logic
- ใช้ allowlist validation

## Expected Outcome

- Validation schemas ที่ครบถ้วน
- Server-side validation ที่เสร็จ
- Client-side validation ที่เสร็จ
- Custom validators ที่เสร็จ
- Error messages ที่ดี
- Type system integration ที่เสร็จ
- Validation tests ที่ครบถ้วน
