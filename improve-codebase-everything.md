---
title: Improve Codebase Everything
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

### 1. P0 Critical - Foundation And Security
ทำทันที เพื่อ foundation และ security

1. ทำ `/analyze-all-files` เพื่อวิเคราะห์ไฟล์ทั้งหมด
2. ทำ `/plan` เพื่อวางแผนการปรับปรุง
3. รอยืนยันจาก user ก่อนเริ่มทำ
4. ทำ `/update-dependencies-latest` เพื่ออัพเดท dependencies
5. ทำ `/use-packages` เพื่อลบ packages ที่ไม่ได้ใช้
6. ทำ `/improve-config` เพื่อปรับปรุง configuration files
7. ทำ `/review-architecture`
8. ทำ `/check-architecture`
9. ทำ `/improve-security`
10. ทำ `/improve-accessibility`
11. ทำ `/improve-websocket`
12. ทำ `/improve-file-upload`
13. ทำ `/improve-search`
14. ทำ `/improve-notification`
15. ทำ `/improve-internationalization`

### 2. P1 High - Code Quality, Testing, Performance
ทำใน sprint ปัจจุบัน

1. ทำ `/improve-programming-paradigms`
2. ทำ `/refactor` เพื่อปรับปรุง code structure และ organization
3. ทำ `/improve-design-pattern`
4. ทำ `/review-api`
5. ทำ `/improve-api-usage`
6. ทำ `/improve-api-contracts`
7. ทำ `/improve-api-documentation`
8. ทำ `/follow-dead-code-removal`
9. ทำ `/follow-remove-unused`
10. ทำ `/improve-database`
11. ทำ `/improve-caching-strategy`
12. ทำ `/follow-code-quality`
13. ทำ `/improve-type-safety`
14. ทำ `/improve-naming`
15. ทำ `/improve-readability`
16. ทำ `/improve-error-handling`
17. ทำ `/improve-side-effect`
18. ทำ `/no-use-ignore`
19. ทำ `/improve-data-validation`
20. ทำ `/improve-file-organization`
21. ทำ `/improve-environment-config`
22. ทำ `/improve-testability`
23. ทำ `/improve-test-case`
24. ทำ `/improve-testing-coverage`
25. ทำ `/improve-bundle`
26. ทำ `/improve-perf`
27. ทำ `/improve-web-rendering`
28. ทำ `/improve-ram-usage`
29. ทำ `/improve-logging`
30. ทำ `/improve-error-tracking`
31. ทำ `/improve-async-operations`
32. ทำ `/improve-monitoring`

### 3. P2 Medium - Algorithms, Platform, UX UI
ทำใน sprint ถัดไป

1. ทำ `/improve-algorithm`
2. วิเคราะห์ `time/space complexity`
3. ปรับปรุง `data structures`
4. ใช้ `common algorithm patterns`
5. Benchmark และ validate
6. ทำ `/improve-data-structures`
7. ทำ `/improve-platform`
8. ทำ `/improve-cicd`
9. ทำ `/improve-deployment`
10. ทำ `/improve-backup-strategy`
11. ทำ `/improve-missing-feature`
12. ทำ `/improve-uxui`
13. ทำ `/improve-routing-ux`
14. ทำ `/improve-seo`
15. ทำ `/improve-ui`
16. ทำ `/improve-dx`
17. ทำ `/improve-state-management`

### 4. P3 Low - Documentation
ทำเมื่อมีเวลา

1. ทำ `/write-docs`

## Rules

### 1. Priority-Based Execution

ทำตามลำดับความสำคัญของแต่ละ priority group

- ทำทีละ priority group และตรวจสอบ
- ทำ `P0` ก่อนเสมอ (Foundation, Security)
- ทำ `P1` ถัดมา (Code Quality, Testing, Performance)
- ทำ `P2` เมื่อ `P0-P1` เสร็จ (Algorithms, Platform, UX UI)
- ทำ `P3` สุดท้าย (Documentation)
- ถ้าพบ issues ทำ `/resolve-errors` ก่อนดำเนินต่อ
- ทำ `/update-reference` หลังแต่ละ group สำคัญ

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

## Expected Outcome

- `Dependencies` และ `configurations` ถูกอัพเดท
- `Architecture` ถูกตรวจสอบและปรับปรุง
- `API contracts` ชัดเจนและมี versioning
- `Dead code` และ `unused code` ถูกลบ
- `Data layer` optimize (`database`, `queries`, `caching`)
- `Code quality` ปรับปรุงครบถ้วน
- `Algorithms` และ `data structures` ปรับปรุง
- `Testing` ปรับปรุงครบถ้วน
- `Performance` ปรับปรุง (`bundle`, `perf`, `rendering`, `RAM`)
- `Observability` ครบถ้วน (`logging`, `error tracking`, `monitoring`)
- `Platform compatibility` ปรับปรุง
- `CI/CD` และ `deployment` ปรับปรุง
- `Security` ปรับปรุง
- `Accessibility` ปรับปรุง
- `UX`, `UI`, `DX` ปรับปรุง
- `Documentation` อัพเดท
