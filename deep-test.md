---
title: Deep Test
description: Test ครบทุกประเภท unit, integration, e2e, mutation, property-based, coverage analysis
auto_execution_mode: 3
related:
  - /run-test
  - /write-test
  - /run-test-coverage
  - /validate-test
  - /deep-review
  - /resolve-errors
  - /loop-until-complete
  - /report-format-table
  - /suggest-next-action
---

## Goal

Test ครบทุกประเภท: unit, integration, e2e, mutation, property-based, coverage analysis พร้อม verify จนกว่าจะผ่าน 100%

## Scope

ใช้สำหรับ testing ที่ต้องการความสมบูรณ์สูง ครอบคลุมทุกประเภท test และ coverage 100%

สำหรับรัน test แบบปกติ ใช้ `/run-test`, สำหรับเขียน test ใช้ `/write-test`

## Execute

Step dependencies: แต่ละ step ขึ้นกับ step ก่อนหน้าตามลำดับ (Step N ขึ้นกับ Step N-1)

### 1. Analyze Test Requirements

วิเคราะห์ test requirements ตาม project characteristics

- ทำ `/analyze-project` เพื่อระบุ project type และ components
- ระบุ test types ที่จำเป็น: unit, integration, e2e, component, API, performance, security, accessibility, i18n
- ระบุ critical paths ที่ต้องมี test ก่อน
- กำหนด coverage target: 100% ทุก category (lines, branches, functions, statements)
- ระบุ test frameworks ที่ใช้: Vitest, Playwright, fast-check

### 2. Setup Test Structure

ตรวจสอบและสร้าง test structure ที่ครบถ้วน

- ตรวจสอบ test structure: `test/unit/`, `test/integration/`, `test/e2e/`, `test/fixtures/`, `test/mocks/`, `test/utils/`
- สร้าง directories ถ้ายังไม่มี
- ตรวจสอบ test frameworks ถูกติดตั้ง
- ตรวจสอบ test configuration files
- ทำ `/run-lint` และ `/run-typecheck` ก่อนเริ่ม test

### 3. Write Tests

ทำ `/write-test` เพื่อเขียน tests ที่ขาดหายไป

- เขียน unit tests สำหรับ pure functions, edge cases, parameterized tests
- เขียน integration tests สำหรับ module interactions, data flow, dependencies
- เขียน component tests สำหรับ rendering, props, events, slots
- เขียน E2E tests สำหรับ user flows บน real browser ด้วย Playwright
- เขียน API tests สำหรับ endpoints, status codes, response format, error handling
- ครอบคลุม happy path, edge cases, error cases
- ถ้ามี critical components: เขียน property-based tests ด้วย `fast-check`

### 4. Run Core Tests

รัน core tests และบันทึกผลลัพธ์

- รัน `bun run test` หรือ `bun test`
- บันทึกผลลัพธ์และระบุ tests ที่ fail
- บันทึก duration ของแต่ละ test
- ระบุ tests ที่ช้าและต้อง optimize

### 5. Run Specialized Tests

รัน specialized tests ตาม project characteristics

Goal reminder: รันเฉพาะ specialized tests ที่เกี่ยวข้องกับ project

- ถ้ามี database: database tests (queries, migrations, transactions, data integrity)
- ถ้ามี caching: cache tests (strategies, invalidation, TTL)
- ถ้ามี i18n: i18n tests (translation completeness, RTL, formatting, pluralization)
- ถ้ามี file operations: file tests (upload, download, validation, large files)
- ถ้ามี WebSocket: WebSocket tests (connections, real-time messaging, reconnection)
- ถ้าต้องการ performance: performance tests, load tests
- ถ้ามี critical components: mutation tests (mutation score > 80%), security tests
- ถ้ามี accessibility: accessibility tests (WCAG, ARIA, keyboard navigation)

### 6. Check Coverage

ทำ `/run-test-coverage` เพื่อวิเคราะห์ coverage

- ตรวจสอบ coverage 100% ทุก category (lines, branches, functions, statements)
- ระบุส่วนที่ไม่มี coverage และ criticality
- ถ้าไม่ถึง 100% ให้ทำ `/write-test` เพิ่ม
- ทำซ้ำ Step 4-6 จนกว่า coverage จะถึง 100%

### 7. Fix Failures And Loop

ทำ `/loop-until-complete` เพื่อ fix failures จนกว่าจะผ่าน 100%

- ทำ `/deep-review` เพื่อจัดลำดับ failures
- ถ้า cascade issues: ทำ `/deep-debug` → `/resolve-errors`
- ถ้า isolated errors: ทำ `/resolve-errors`
- แก้ไข code, test assertions, หรือ mock data ตามความจำเป็น
- รัน tests อีกครั้งจนกว่าจะผ่าน 100%
- ถ้าเกิน 3 รอบแล้วยังไม่ผ่าน ให้ stop และ report

### 8. Validate And Report

ทำ `/validate-test` และ `/report-format-table` เพื่อสรุปผล

- ทำ `/validate-test` เพื่อตรวจสอบ test quality ครบวงจร
- ทำ `/report-format-table` สร้างตาราง: Test Type, Count, Pass, Fail, Duration, Coverage
- สร้างตาราง coverage metrics: lines, branches, functions, statements
- สรุปผลลัพธ์: pass rate, coverage, performance
- ทำ `/suggest-next-action` เพื่อแนะนำขั้นต่อไป

## Rules

### 1. Test Execution

- Test fail: วิเคราะห์ cause และแก้ไข
- Test error: ตรวจสอบ error message และ fix
- Test pass: continue ไป test ถัดไป
- Test timeout: ตรวจสอบ performance และ adjust
- ห้ามข้าม errors ต้องแก้ให้หมด

### 2. Specialized Test Selection

- รันเฉพาะ specialized tests ที่เกี่ยวข้องกับ project
- ใช้ "ถ้า project มี..." เพื่อกำหนด test types
- ไม่ต้องรันทุก test type ถ้า project ไม่มี component นั้น
- ถ้าไม่แน่ใจ ให้ถามผู้ใช้

### 3. Coverage

- ตรวจสอบ coverage ทุก category (line, branch, function, statement)
- เป้าหมาย 100% โดยไม่มีข้อยกเว้น
- พิจารณา criticality ของส่วนที่ไม่มี coverage
- ถ้าไม่ถึง 100% ให้เขียน test เพิ่ม

### 4. Error Resolution

- อ่าน error message และระบุ root cause
- แก้ไข code หรือ test ตามความจำเป็น
- ทำซ้ำจนผ่าน ห้ามข้าม errors
- ถ้าเกิน 3 รอบแล้วยังไม่ผ่าน ให้ stop และ report

### 5. Performance

- ตรวจสอบ performance ของ tests
- ระบุ tests ที่ช้าและแนะนำการปรับปรุง
- พิจารณา impact ต่อ CI/CD pipeline
- Unit tests < 10ms, integration tests < 100ms

### 6. Reporting

- สร้างรายงานชัดเจนและ action-oriented
- ระบุ priority สำหรับการดำเนินการ
- ใช้ `/report-format-table` สำหรับ structured output

## Expected Outcome

- ทุก tests ผ่าน 100%
- Test coverage ถึง 100% ทุก category
- Specialized tests ผ่านตาม project needs
- Mutation tests ผ่านสำหรับ critical components (ถ้ามี)
- Property-based tests ผ่านสำหรับ critical components (ถ้ามี)
- ตารางสรุปผล: test type, count, pass, fail, duration, coverage
- ตาราง coverage metrics: lines, branches, functions, statements
