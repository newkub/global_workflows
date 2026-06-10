---

title: Review Data

description: Review data models, DTOs, validation และ serialization

auto_execution_mode: 3

related_workflows:
  - /review-database
  - /review-api
  - /check-correctness

---

## Goal

Review data layer ทั้งหมดเพื่อระบุและแก้ไข issues ตาม priority

## Scope

ครอบคลุม data models, DTOs, validation, serialization, transformation

## Execute

### 1. Analyze Data Models

1. ตรวจสอบ data model files
2. Review type definitions
3. Check validation rules
4. Validate relationships

### 2. Review DTOs

1. Check DTO completeness
2. Review validation schemas
3. Check transformation logic
4. Validate serialization

### 3. Check Validation

1. Review validation rules
2. Check error messages
3. Validate custom validators
4. Review validation coverage

### 4. Review Data Flow

1. Trace data transformations
2. Check data consistency
3. Review caching strategy
4. Validate data integrity

### 5. Prioritize And Report

1. Group issues ตาม severity
2. ใช้ `/report` เพื่อสรุปผล
3. รอ user confirmation

### 6. Execute Fixes

1. Fix type errors
2. Add missing validation
3. Fix transformation bugs
4. Improve data consistency

## Rules

### 1. Data Models

ตรวจสอบ data models:

- มี type definitions ครบถ้วน
- ใช้ types ถูกต้อง
- มี relationships ชัดเจน
- มี default values
- ไม่มี any types

### 2. DTOs

ตรวจสอบ DTOs:

- มี DTOs สำหรับทุก operations
- มี validation schemas
- มี transformation logic
- ไม่ expose sensitive data
- มี documentation

### 3. Validation

ตรวจสอบ validation:

- มี validation rules
- มี error messages ชัดเจน
- ใช้ validators ถูกต้อง
- มี custom validators ที่จำเป็น
- validation coverage สูง

### 4. Serialization

ตรวจสอบ serialization:

- ใช้ serializers ถูกต้อง
- ไม่ expose sensitive data
- มี date formatting
- มี null handling
- มี nested object handling

### 5. Data Consistency

ตรวจสอบ data consistency:

- ข้อมูล consistent ทั้ง system
- มี data transformation rules
- มี caching strategy
- มี data validation
- มี error handling

## Expected Outcome

- Data models ถูกต้องและ type-safe
- DTOs ครบถ้วนและ validated
- Validation ครอบคลุม
- Serialization ปลอดภัย
- Data consistency ถูกรักษา

## Common Mistakes

ข้อผิดพลาดที่พบบ่อย:

- ใช้ any types
- ไม่มี validation
- Expose sensitive data
- ไม่มี DTOs
- Data inconsistency

## Anti-Patterns

รูปแบบที่ไม่ควรทำ:

- ❌ ใช้ any types
- ❌ ไม่ validate input
- ❌ Expose passwords
- ❌ ไม่มี DTOs
- ❌ ไม่ handle null

