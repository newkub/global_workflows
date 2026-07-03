---
title: Improve SDK
description: ปรับปรุง SDK libraries ครบวงจรเพื่อความสมบูรณ์และ DX
auto_execution_mode: 3
related_workflows:
  - improve-api-design
  - improve-type-safety
  - improve-correctness
  - improve-dx
  - follow-content-quality
---

## Goal

ปรับปรุง SDK libraries ครบวงจรเพื่อให้มีประสิทธิภาพ ใช้งานง่าย และ developer experience ที่ดี

## Scope

ใช้สำหรับ SDK libraries ทุกประเภท (TypeScript, JavaScript, Rust, Go, Python)

## Execute

### 1. Analyze SDK Structure

วิเคราะห์โครงสร้าง SDK ปัจจุบัน

1. ทำ `/analyze-project` เพื่อดูโครงสร้าง
2. ตรวจสอบ API design
3. ตรวจสอบ type definitions
4. ตรวจสอบ error handling
5. ตรวจสอบ documentation

### 2. Improve API Design

ปรับปรุง API design ให้ใช้งานง่าย

1. ทำตาม `/improve-api-design` สำหรับ API improvements
2. ใช้ consistent naming conventions
3. ออกแบบ intuitive interfaces
4. ใช้ sensible defaults
5. รองรับ common use cases

### 3. Improve Type Safety

ปรับปรุง type safety ให้เข้มงวด

1. ทำตาม `/improve-type-safety` สำหรับ type improvements
2. เปิด strict mode ใน TypeScript
3. เขียน type definitions ที่ครบถ้วน
4. ใช้ generic types อย่างเหมาะสม
5. หลีกเลี่ยง `any` และ `unknown`

### 4. Improve Error Handling

ปรับปรุง error handling ให้ robust

1. ใช้ custom error types
2. ใช้ error messages ที่ actionable
3. Handle edge cases gracefully
4. ใช้ error codes สำหรับ easy reference
5. Document error scenarios

### 5. Improve Documentation

ปรับปรุง documentation ให้ครบถ้วน

1. เขียน README ที่ครบถ้วน
2. เขียน API documentation
3. ให้ examples สำหรับทุก API
4. Document edge cases
5. ทำ `/follow-content-quality` สำหรับคุณภาพ

### 6. Improve Performance

ปรับปรุง performance ของ SDK

1. Optimize critical paths
2. ใช้ lazy loading ที่เหมาะสม
3. Reduce bundle size
4. Cache results ที่เหมาะสม
5. Monitor performance metrics

### 7. Improve Testing

ปรับปรุง test coverage

1. เขียน unit tests ครอบคลุม
2. เขียน integration tests
3. Test edge cases
4. Test error scenarios
5. ทำ `/run-test-coverage` เพื่อตรวจสอบ coverage

### 8. Improve Developer Experience

ปรับปรุง developer experience

1. ทำตาม `/improve-dx` สำหรับ DX improvements
2. ตั้งค่า build tools ที่เหมาะสม
3. ตั้งค่า development scripts
4. ใช้ watch mode สำหรับ development
5. ตั้งค่า linting และ formatting

## Rules

### 1. API Design

API design ต้อง intuitive และ consistent

- ใช้ consistent naming conventions
- ออกแบบ intuitive interfaces
- ใช้ sensible defaults
- รองรับ common use cases
- ทำตาม `/improve-api-design` เสมอ

### 2. Type Safety

Type safety ต้องเข้มงวด

- เปิด strict mode ใน TypeScript
- เขียน type definitions ที่ครบถ้วน
- ใช้ generic types อย่างเหมาะสม
- หลีกเลี่ยง `any` และ `unknown`
- ทำตาม `/improve-type-safety` เสมอ

### 3. Error Handling

Error handling ต้อง robust

- ใช้ custom error types
- ใช้ error messages ที่ actionable
- Handle edge cases gracefully
- ใช้ error codes สำหรับ easy reference
- Document error scenarios

### 4. Documentation

Documentation ต้องครบถ้วน

- เขียน README ที่ครบถ้วน
- เขียน API documentation
- ให้ examples สำหรับทุก API
- Document edge cases
- ทำ `/follow-content-quality` เสมอ

### 5. Performance

Performance ต้องดี

- Optimize critical paths
- ใช้ lazy loading ที่เหมาะสม
- Reduce bundle size
- Cache results ที่เหมาะสม
- Monitor performance metrics

### 6. Testing

Test coverage ต้องสูง

- เขียน unit tests ครอบคลุม
- เขียน integration tests
- Test edge cases
- Test error scenarios
- ทำ `/run-test-coverage` เสมอ

### 7. Developer Experience

Developer experience ต้องดี

- ทำตาม `/improve-dx` เสมอ
- ตั้งค่า build tools ที่เหมาะสม
- ตั้งค่า development scripts
- ใช้ watch mode สำหรับ development
- ตั้งค่า linting และ formatting

## Expected Outcome

- API design intuitive และ consistent
- Type safety เข้มงวด
- Error handling robust และ actionable
- Documentation ครบถ้วนและชัดเจน
- Performance ดีและเร็ว
- Test coverage สูง
- Developer experience ดี
- SDK พร้อมสำหรับ production
