---
title: Improve To Ready Code
description: ปรับปรุมโค้ดให้พร้อมใช้งานจริง
auto_execution_mode: 3
---

## Goal

ปรับปรุมโค้ดให้พร้อมใช้งานจริง (production ready)

## Execute

### 1. Planning And Preparation

วางแผนการปรับปรุงก่อนเริ่มทำจริง

1. ใช้ `/plan` เพื่อวางแผนการปรับปรุมครบถ้วน
2. รอยืนยันจาก user ก่อนเริ่มทำ

### 2. Refactor First

ทำ refactor ก่อนเสมอเพื่อเตรียม foundation

1. รัน `/refactor`
2. ตรวจสอบว่าผ่านทุกขั้นตอน

### 3. Make Real

ทำให้ code ใช้งานได้จริง

1. รัน `/make-real`
2. ตรวจสอบว่า code ใช้งานได้จริง

### 4. Improve Code Quality

ปรับปรุมคุณภาพโค้ดตาม best practices

1. รัน `/follow-code-quality`
2. รัน `/follow-design-pattern` ถ้าจำเป็น

### 5. Improve Testing

ปรับปรุม test cases

1. รัน `/improve-test-case`
2. รัน `/improve-code-coverage`

### 6. Improve Performance

ปรับปรุม performance และ optimization

1. รัน `/optimize-bundle`
2. รัน `/optimize-perf`

### 7. Improve Security

ปรับปรุม security และ accessibility

1. รัน `/check-vulnerability`
2. รัน `/improve-accessibility`

### 8. Improve Error Handling

ปรับปรุม error handling ให้ consistent

1. รัน `/improve-error-handling`

## Rules

### 1. Execution Order

ทำตามลำดับขั้นตอนอย่างเคร่งครัด

- ต้องทำ `/refactor` ก่อนเสมอ
- ต้องทำ `/make-real` ก่อนเสมอ
- อ่านไฟล์ก่อนแก้ไขเสมอ
- ใช้ minimal changes เท่าที่จำเป็น
- รักษา backward compatibility ถ้าเป็นไปได้

### 2. Production Ready

เน้นการทำให้โค้ดพร้อมใช้งานจริง

- ต้องไม่มี mock หรือ placeholder
- ต้องเชื่อมต่อกับ server API, database, และ external services จริง
- ต้องผ่าน testing ทั้ง unit, integration, และ e2e
- ต้องไม่มี security vulnerabilities
- ต้องไม่มี critical errors

### 3. Testing

เขียน tests ก่อนแก้ไขโค้ด

- เขียน unit tests สำหรับ pure functions
- เขียน integration tests สำหรับ side effects
- เขียน E2E tests สำหรับ critical flows

## Expected Outcome

- Code ใช้งานได้จริง ไม่มี mock หรือ placeholder
- Architecture ชัดเจนและ maintainable
- Code quality สูงด้วย formatting และ linting
- Full type safety
- Dependencies ทันสมัยและ secure
- Comprehensive testing
- Performance ที่ optimized
- Secure codebase
- Accessibility ตรงตาม WCAG
- Error handling ที่ consistent
- พร้อมใช้งานจริงใน production
