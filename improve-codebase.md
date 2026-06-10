---
title: Improve Codebase
description: ปรับปรุงคุณภาพ codebase ครบวงจรตั้งแต่ foundation ไปจนถึง delivery
auto_execution_mode: 3
---

## Goal

ปรับปรุงคุณภาพ codebase ครบวงจรตั้งแต่ foundation ไปจนถึง delivery โดยครอบคลุมทุกมิติ

## Execute

### 1. Planning And Preparation

วางแผนและเตรียมการก่อนเริ่มปรับปรุง

1. ทำ `/analyze-all-files` เพื่ออ่านและวิเคราะห์ไฟล์ทั้งหมด
2. ทำ `/plan` เพื่อวางแผนการปรับปรุงครบถ้วน
3. รอยืนยันจาก user ก่อนเริ่มทำ
4. ทำ `/update-dependencies` เพื่ออัพเดท dependencies
5. ทำ `/use-packages` เพื่อวิเคราะห์และลบ packages/crates ที่ไม่ได้ใช้
6. ทำ `/optimize-config` เพื่อปรับปรุง configuration files

### 2. Architecture Review

ตรวจสอบ architecture ก่อนปรับปรุง

1. ทำ `/loop-until-complete` เพื่อรันจนกว่าจะผ่าน:
   - ทำ `/review-architecture`
   - ทำ `/check-architecture`

### 3. API Design And Contracts

ตรวจสอบและปรับปรุง API design

1. ทำ `/loop-until-complete` เพื่อรันจนกว่าจะผ่าน:
   - ทำ `/review-api-design` เพื่อตรวจสอบ OpenAPI specs
   - ทำ `/improve-api-versioning` เพื่อปรับปรุง API versioning

### 4. Cleanup And Data Layer

ลบโค้ดที่ไม่ได้ใช้และปรับปรุง data layer

1. ทำ `/loop-until-complete` เพื่อรันจนกว่าจะผ่าน:
   - ทำ `/dead-code-removal`
   - ทำ `/remove-unused`
   - ทำ `/optimize-queries` เพื่อปรับปรุง database queries
   - ทำ `/improve-caching` เพื่อปรับปรุง caching strategy

### 5. Code Quality And Maintainability

ปรับปรุงคุณภาพโค้ดและ maintainability

1. ทำ `/loop-until-complete` เพื่อรันจนกว่าจะผ่าน:
   - ทำ `/code-quality`
   - ทำ `/improve-type-safety` เพื่อปรับปรุง type safety
   - ทำ `/improve-naming` เพื่อปรับปรุงการตั้งชื่อ
   - ทำ `/improve-error-handling` เพื่อปรับปรุง error handling
   - ทำ `/improve-side-effect` เพื่อปรับปรุงการจัดการ side effects
   - ทำ `/no-use-ignore` เพื่อลบ ignore comments/attributes

### 6. Algorithm Optimization

ปรับปรุง algorithms และ data structures

1. ทำ `/loop-until-complete` เพื่อรันจนกว่าจะผ่าน:
   - ทำ `/improve-algorithm` เพื่อปรับปรุง algorithms และ data structures
   - วิเคราะห์ time complexity และ space complexity
   - ปรับปรุง data structures ที่ใช้
   - ใช้ common algorithm patterns
   - Benchmark และ validate improvements

### 7. Testing

ปรับปรุง test cases

1. ทำ `/loop-until-complete` เพื่อรันจนกว่าจะผ่าน:
   - ทำ `/improve-testability` เพื่อเพิ่มความสามารถในการทดสอบ
   - ทำ `/improve-test-case` เพื่อปรับปรุง test cases
   - ทำ `/improve-code-coverage` เพื่อเพิ่ม code coverage

### 8. Performance And Observability

ปรับปรุง performance และเพิ่ม observability

1. ทำ `/loop-until-complete` เพื่อรันจนกว่าจะผ่าน:
   - ทำ `/optimize-bundle`
   - ทำ `/optimize-perf`
   - ทำ `/optimize-rendering`
   - ทำ `/optimize-ram-usage`
   - ทำ `/improve-logging` เพื่อปรับปรุง logging structure
   - ทำ `/add-telemetry` เพื่อเพิ่ม metrics/tracing
   - ทำ `/improve-error-tracking` เพื่อเพิ่ม Sentry/error boundaries

### 9. Platform And Deployment

ปรับปรุง platform compatibility และ deployment

1. ทำ `/loop-until-complete` เพื่อรันจนกว่าจะผ่าน:
   - ทำ `/improve-platform`
   - ทำ `/improve-cicd`
   - ทำ `/add-pr-templates` เพื่อเพิ่ม PR/issue templates

### 10. Security And Accessibility

ปรับปรุง security และ accessibility

1. ทำ `/loop-until-complete` เพื่อรันจนกว่าจะผ่าน:
   - ทำ `/check-vulnerability`
   - ทำ `/improve-accessibility`

### 11. Feature Flags

ปรับปรุง feature flag system

1. ทำ `/loop-until-complete` เพื่อรันจนกว่าจะผ่าน:
   - ทำ `/improve-feature-flags` เพื่อปรับปรุง feature flag system
   - ทำ `/audit-experiments` เพื่อตรวจสอบ experiment cleanup

### 12. UX UI DX Improvement

ปรับปรุง UX, UI, และ DX

1. ทำ `/loop-until-complete` เพื่อรันจนกว่าจะผ่าน:
   - ทำ `/improve-uxui` เพื่อปรับปรุง user experience
   - ทำ `/improve-ui` เพื่อปรับปรุง user interface
   - ทำ `/improve-dx` เพื่อปรับปรุง developer experience

### 13. Documentation

อัพเดท documentation

1. ทำ `/loop-until-complete` เพื่อรันจนกว่าจะผ่าน:
   - ทำ `/write-docs`

## Rules

### 1. Execution Order

ทำตามลำดับขั้นตอนอย่างเคร่งครัดตามความสำคัญ

- Planning ต้องทำก่อนเสมอ
- Foundation ก่อน (architecture, cleanup, data layer)
- High impact ถัดมา (code quality, algorithm optimization, testing)
- Performance และ Observability ต้องทำก่อน Platform
- Performance optimization ก่อน deployment
- Security ต้องทำก่อนส่ง
- Hard to change ก่อน (เช่น architecture, API contracts)
- Platform → Security → Feature Flags → Documentation

### 2. Iterative Improvement

ปรับปรุงแบบ iterative

- ทำทีละ section และตรวจสอบ
- ถ้าพบ issues ทำ `/resolve-errors` ก่อนดำเนินต่อ
- ทำ `/update-reference` หลังแต่ละ section สำคัญ

## Expected Outcome

- Dependencies และ configurations ถูกอัพเดทและ optimize
- Architecture ถูกตรวจสอบและปรับปรุง
- API contracts ชัดเจนและมี versioning
- Dead code, unused code และ deprecated APIs ถูกลบ/แก้ไข
- Data layer optimize แล้ว (queries, caching)
- Code quality ปรับปรุงครบถ้วน (type safety, naming, error handling)
- Algorithms และ data structures ปรับปรุงแล้ว
- Testing ปรับปรุงครบถ้วน (testability, test cases, coverage)
- Performance ปรับปรุงแล้ว (bundle, perf, rendering, RAM)
- Observability ครบถ้วน (logging, telemetry, error tracking)
- Platform compatibility ปรับปรุงแล้ว
- CI/CD และ Git workflow ปรับปรุงแล้ว
- Security vulnerabilities ถูกตรวจสอบและแก้ไข
- Accessibility ปรับปรุงแล้ว
- Feature flags ปรับปรุงแล้ว
- UX ปรับปรุงแล้ว (user experience, flows, accessibility)
- UI ปรับปรุงแล้ว (design system, visual hierarchy, performance)
- DX ปรับปรุงแล้ว (tooling, documentation, onboarding)
- Documentation อัพเดทแล้ว
- Examples อัพเดทแล้ว

