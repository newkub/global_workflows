---
title: Test App
description: ทดสอบ application ทั้งหมดด้วย integration tests และ scenario-based testing
auto_execution_mode: 3
---

## Goal

ทดสอบ application functionality แบบครบวงจร รวม user flows, scenarios, integration ระหว่าง components, business logic และ state management

## Execute

### 1. Setup Test Environment

1. อ่าน app structure
2. วิเคราะห์ features และ flows
3. กำหนด critical user flows และ integration points
4. Configure test DB และ mock services

### 2. Create Test Utilities

1. Build app wrapper
2. Create render helpers
3. Add user event helpers
4. Setup state management

### 3. Write Feature Tests

1. Test feature initialization
2. Test user interactions
3. Test state changes
4. Test side effects

### 4. Write Scenario Tests

1. Test complete user flows
2. Test multi-step processes
3. Test error recovery
4. Test data persistence

### 5. Write Integration Tests

1. Test component interactions
2. Test service integration
3. Test API integration
4. Test state integration

### 6. Add Test Data

1. Create test fixtures
2. Setup factory functions
3. Add mock data
4. Create seed data

### 7. Run and Verify Tests

1. Execute all app tests
2. Verify feature coverage
3. Check scenario coverage
4. Verify integration points

## Rules

1. จัดกลุ่ม tests ตาม feature และใช้ before/after hooks
2. Tests ต้อง isolated และ deterministic
3. ใช้จริงถ้าเป็นไปได้, mock เฉพาะ external services
4. ใช้ test DB หรือ transactions และ clean state ต่อ test
5. รีวิว tests ควบคู่กับ code review

## Expected Outcome

1. ครอบคลุม major user flows
2. Integration points ทดสอบครบถ้วน
3. Business logic ได้รับการ verify
4. State management ทดสอบแล้ว
5. Test suite run ได้ใน CI
6. Documentation ครบถ้วน
