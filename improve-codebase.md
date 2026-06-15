---
title: Improve Codebase
description: ปรับปรุงคุณภาพ codebase ครบวงจร foundation ถึง delivery
auto_execution_mode: 3
related_workflows:
  - prioritize
  - what-do-you-do
---

## Goal

ปรับปรุงคุณภาพ codebase ครบวงจรตั้งแต่ foundation ไปจนถึง delivery

## Scope

ใช้สำหรับการปรับปรุงคุณภาพ codebase ครบวงจรทั้ง foundation, code quality, และ delivery

## Execute

### 1. Foundation And Security (P0 Critical)

ทำทันทีเพื่อ foundation และ security

- ทำ `/analyze-all-files` เพื่อวิเคราะห์ไฟล์ทั้งหมด
- ทำ `/plan-task` เพื่อวางแผนการปรับปรุง
- รอยืนยันจาก user ก่อนเริ่มทำ
- ทำ `/use-lib-better` เพื่อวิเคราะห์ dependencies และ alternatives
- ทำ `/update-dependencies-latest` เพื่ออัพเดท dependencies
- ทำ `/use-packages` เพื่อลบ packages ที่ไม่ได้ใช้
- ทำ `/improve-config` เพื่อปรับปรุง configuration files
- ทำ `/review-architecture` และ `/check-architecture` (รวมกัน)
- ทำ `/improve-security` และ `/improve-accessibility` (รวมกัน)
- ทำ `/improve-integrations` (รวม websocket, file-upload, search, notification, i18n)
- ทำ modernize & update latest เพื่อทำให้ codebase ทันสมัยและเป็นเวอร์ชันล่าสุดเสมอ

### 2. Code Quality (Current Sprint)

ปรับปรุงคุณภาพโค้ดใน sprint ปัจจุบัน

- ทำ `/improve-code-quality` เพื่อปรับปรุงคุณภาพโค้ด ครบวงจร

### 3. Testing (Current Sprint)

ปรับปรุงการทดสอบใน sprint ปัจจุบัน

- ทำ `/improve-testing` เพื่อปรับปรุงการทดสอบ ครบวงจร

### 4. Performance (Current Sprint)

ปรับปรุง performance ใน sprint ปัจจุบัน

- ทำ `/improve-web-performance` เพื่อปรับปรุง web performance ครบวงจร

### 5. Integrations (Current Sprint)

ปรับปรุง integrations ใน sprint ปัจจุบัน

- ทำ `/improve-integrations` เพื่อปรับปรุง integrations ครบวงจร

### 6. Security (Current Sprint)

ปรับปรุง security ใน sprint ปัจจุบัน

- ทำ `/improve-security` เพื่อปรับปรุง security ครบวงจร

### 7. Platform (Next Sprint)

ปรับปรุง platform support ใน sprint ถัดไป

- ทำ `/improve-platform` เพื่อปรับปรุง platform support ครบวงจร

### 8. UI (Next Sprint)

ปรับปรุง UI ใน sprint ถัดไป

- ทำ `/improve-uxui` สำหรับ UX/UI improvements ครบวงจร

### 9. Algorithms And Documentation (Optional)

ทำเมื่อมีเวลา

- ทำ `/improve-algorithm` และ `/improve-data-structures`
- SEO ปรับปรุง (optional)
- Missing features และ state management ปรับปรุง (optional)
- ทำ `/write-docs`

## Rules

### 1. Priority-Based Execution

ทำตามลำดับความสำคัญของแต่ละ group

- ทำทีละ group และตรวจสอบ
- ทำ `Foundation And Security` ก่อนเสมอ
- ทำ `Code Quality, Testing, Performance, Integrations, Security` ใน sprint ปัจจุบัน
- ทำ `Platform, UI, Algorithms` ใน sprint ถัดไป
- ทำ `Documentation` สุดท้าย
- ถ้าพบ issues ทำ `/resolve-errors` ก่อนดำเนินต่อ
- ทำ `/update-references` หลังแต่ละ group สำคัญ

### 2. Foundation First

ตั้งค่า foundation ก่อนปรับปรุงส่วนอื่น

- ตรวจสอบ architecture และ dependencies ก่อน
- อัพเดท configuration files ให้ถูกต้อง
- แก้ไข security issues และ accessibility ก่อน
- ตรวจสอบ integrations ทั้งหมด

### 3. Systematic Testing

ทดสอบทุกการเปลี่ยนแปลงอย่างเป็นระบบ

- รัน tests หลังแต่ละ improvement
- ตรวจสอบ coverage ไม่ลดลง
- ทำ regression tests สำหรับ critical paths
- ตรวจสอบ performance metrics

### 4. Use References

ใช้ references แทนการเขียนซ้ำ

- ทำตาม workflows ที่ระบุใน Execute

## Expected Outcome

### Foundation And Security
- Dependencies และ configurations ถูกอัพเดท
- Architecture ถูกตรวจสอบและปรับปรุง
- Security และ accessibility ปรับปรุง
- Integrations (websocket, file-upload, search, notification, i18n) ปรับปรุง
- Codebase ทันสมัยและเป็นเวอร์ชันล่าสุดเสมอ

### Code Quality
- Type safety ปรับปรุงครบถ้วน
- Naming conventions สม่ำเสมอ
- Code readability ดีขึ้น
- Data validation ครอบคลุม
- TypeScript errors ลดลง
- Testability ดีขึ้น
- Dependencies ที่ชัดเจนและ injectable
- Pure functions สำหรับ business logic
- Loose coupling ระหว่าง components

### Testing
- Test coverage สูงขึ้นและตรง target
- Dead code และ unused dependencies ถูกลบ
- Unit tests ครอบคลุม business logic
- Integration tests ครอบคลุม API/database
- E2E tests ครอบคลุม critical flows
- Test quality สูง (ไม่ flaky, เร็ว)
- Coverage enforcement ใน CI/CD

### Performance
- Bundle size ลดลง
- Runtime performance ดีขึ้น
- Rendering performance ดีขึ้น
- Memory usage ลดลง
- Core Web Vitals ดีขึ้น
- Performance budgets ผ่าน

### Integrations
- WebSocket connections stable
- File upload reliable และ secure
- Search fast และ relevant
- Notifications delivered reliably
- i18n support complete
- All integrations have error handling

### Security
- Authentication mechanisms ปลอดภัย
- Authorization rules ถูกต้อง
- Data ถูกเข้ารหัสอย่างเหมาะสม
- Input validation ครบถ้วน
- Security headers ถูกตั้งค่า
- Secrets ถูกจัดการอย่างปลอดภัย
- Security monitoring ตั้งค่าเสร็จ
- API security ปรับปรุงแล้ว

### Platform
- Platform compatibility ดีขึ้น
- Browser support ครอบคลุม browsers หลัก
- OS compatibility ดีขึ้น
- Deployment process อัตโนมัติ
- Platform tests ครอบคลุม
- Performance ดีขึ้นข้าม platforms

### UI
- UI มีความสม่ำเสมอและ professional
- Design system ที่ scalable และ maintainable
- UI performance ดีขึ้น
- Accessibility ตรงตามมาตรฐาน

### Optional
- Algorithms และ data structures ปรับปรุง
- SEO ปรับปรุง (optional)
- Missing features และ state management ปรับปรุง (optional)
- Documentation อัพเดท
