---
title: Enhance Codebase
description: ปรับปรุงคุณภาพ codebase ครบวงจรตั้งแต่ foundation ไปจนถึง delivery
auto_execution_mode: 3
---

## Goal

ปรับปรุงคุณภาพ codebase ครบวงจรตั้งแต่ foundation ไปจนถึง delivery โดยครอบคลุมทุกมิติ

## Execute

### 1. Planning And Preparation

วางแผนและเตรียมการก่อนเริ่มปรับปรุง

1. ทำ `/plan` เพื่อวางแผนการปรับปรุงครบถ้วน
2. รอยืนยันจาก user ก่อนเริ่มทำ
3. ทำ `/update-dependencies` เพื่ออัพเดท dependencies
4. ทำ `/use-packages` เพื่อวิเคราะห์และลบ packages/crates ที่ไม่ได้ใช้
5. ทำ `/optimize-config` เพื่อปรับปรุง configuration files
6. ทำ `/verify-lockfiles` เพื่อตรวจสอบ lock file consistency
7. ทำ `/audit-deprecated` เพื่อหา deprecated APIs

### 2. Architecture Review

ตรวจสอบ architecture ก่อนปรับปรุง

1. ทำ `/review-architecture`
2. ทำ `/check-file-structure`

### 3. API Design And Contracts

ตรวจสอบและปรับปรุง API design

1. ทำ `/review-api-design` เพื่อตรวจสอบ OpenAPI specs
2. ทำ `/improve-api-versioning` เพื่อปรับปรุง API versioning

### 4. Cleanup And Data Layer

ลบโค้ดที่ไม่ได้ใช้และปรับปรุง data layer

1. ทำ `/dead-code-removal`
2. ทำ `/remove-unused`
3. ทำ `/optimize-queries` เพื่อปรับปรุง database queries
4. ทำ `/improve-caching` เพื่อปรับปรุง caching strategy

### 5. Code Quality And Maintainability

ปรับปรุงคุณภาพโค้ดและ maintainability

1. ทำ `/follow-code-quality`
2. ทำ `/improve-type-safety` เพื่อปรับปรุง type safety
3. ทำ `/improve-naming` เพื่อปรับปรุงการตั้งชื่อ
4. ทำ `/improve-error-handling` เพื่อปรับปรุง error handling
5. ทำ `/no-use-ignore` เพื่อลบ ignore comments/attributes

### 6. Testing

ปรับปรุง test cases

1. ทำ `/improve-testability` เพื่อเพิ่มความสามารถในการทดสอบ
2. ทำ `/improve-test-case` เพื่อปรับปรุง test cases
3. ทำ `/improve-code-coverage` เพื่อเพิ่ม code coverage

### 7. Performance And Observability

ปรับปรุง performance และเพิ่ม observability

1. ทำ `/optimize-bundle`
2. ทำ `/optimize-perf`
3. ทำ `/optimize-rendering`
4. ทำ `/optimize-ram-usage`
5. ทำ `/improve-logging` เพื่อปรับปรุง logging structure
6. ทำ `/add-telemetry` เพื่อเพิ่ม metrics/tracing
7. ทำ `/improve-error-tracking` เพื่อเพิ่ม Sentry/error boundaries

### 8. Platform And Deployment

ปรับปรุง platform compatibility และ deployment

1. ทำ `/improve-platform`
2. ทำ `/improve-cicd`
3. ทำ `/add-pr-templates` เพื่อเพิ่ม PR/issue templates

### 9. Security And Accessibility

ปรับปรุง security และ accessibility

1. ทำ `/check-vulnerability`
2. ทำ `/improve-accessibility`

### 10. Feature Flags

ปรับปรุง feature flag system

1. ทำ `/improve-feature-flags` เพื่อปรับปรุง feature flag system
2. ทำ `/audit-experiments` เพื่อตรวจสอบ experiment cleanup

### 11. Documentation

อัพเดท documentation

1. ทำ `/write-docs`

## Rules

### 1. Execution Order

ทำตามลำดับขั้นตอนอย่างเคร่งครัด

- Planning ต้องทำก่อนเสมอ
- Foundation ก่อน: Architecture → API → Cleanup → Data Layer
- High impact ถัดมา: Code Quality → Testing
- Performance และ Observability ต้องทำก่อน Platform
- Platform → Security → Feature Flags → Documentation

### 2. Impact Order

จัดลำดับตามความสำคัญ

- Foundation ก่อน (architecture, cleanup, data layer)
- High impact items ก่อน (code quality, testing)
- Performance optimization ก่อน deployment
- Security ต้องทำก่อนส่ง
- Hard to change ก่อน (เช่น architecture, API contracts)

### 3. Comprehensive Coverage

ครอบคลุมทุกมิติของ codebase

| Category | Coverage |
|----------|----------|
| Foundation | Dependencies, Architecture, API Design |
| Quality | Cleanup, Code Quality, Data Layer |
| Validation | Testing |
| Optimization | Performance, Observability |
| Delivery | Platform, CI/CD, Git Workflow |
| Protection | Security, Accessibility, Feature Flags |
| Communication | Documentation |

### 4. Observability Integration

เพิ่ม observability ในขั้นตอน Performance

- Logging ควรมี structured format และ appropriate levels
- Telemetry ควร cover critical paths และ user-facing operations
- Error tracking ควรมี context ที่เพียงพอสำหรับ debugging

### 5. Iterative Improvement

ปรับปรุงแบบ iterative

- ทำทีละ section และตรวจสอบ
- ถ้าพบ issues ทำ `/resolve-errors` ก่อนดำเนินต่อ
- ทำ `/update-reference` หลังแต่ละ section สำคัญ

## Expected Outcome

### Foundation And Quality

- Dependencies และ configurations ถูกอัพเดทและ optimize
- Architecture ถูกตรวจสอบและปรับปรุง
- API contracts ชัดเจนและมี versioning
- Dead code, unused code และ deprecated APIs ถูกลบ/แก้ไข
- Data layer optimize แล้ว (queries, caching)
- Code quality ปรับปรุงครบถ้วน (type safety, naming, error handling)

### Validation And Optimization

- Testing ปรับปรุงครบถ้วน (testability, test cases, coverage)
- Performance ปรับปรุงแล้ว (bundle, perf, rendering, RAM)
- Observability ครบถ้วน (logging, telemetry, error tracking)

### Delivery And Protection

- Platform compatibility ปรับปรุงแล้ว
- CI/CD และ Git workflow ปรับปรุงแล้ว
- Security vulnerabilities ถูกตรวจสอบและแก้ไข
- Accessibility ปรับปรุงแล้ว
- Feature flags ปรับปรุงแล้ว

### Communication

- Documentation อัพเดทแล้ว
- Examples อัพเดทแล้ว
