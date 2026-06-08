---
title: Test Contract
description: ทดสอบ API contracts ระหว่าง microservices ด้วย consumer-driven contracts
auto_execution_mode: 3
related_workflows:
  - /test-api
  - /test-integration
url: https://docs.pact.io/
---

## Goal

ทดสอบ API contracts ระหว่าง microservices ให้เชื่อถือได้ ด้วย consumer-driven contract testing

## Execute

### 1. Setup Contract Testing Framework

1. ติดตั้ง Pact สำหรับ contract testing
2. Configure Pact broker สำหรับ sharing contracts
3. Setup consumer tests สำหรับ API consumers
4. Setup provider tests สำหรับ API providers

### 2. Define Consumer Contracts

1. ระบุ API endpoints ที่ consumer ใช้
2. Define expected request/response formats
3. Specify required fields แล data types
4. Document error responses

### 3. Write Consumer Tests

1. Mock provider responses ด้วย Pact
2. Test consumer ส่ง requests ถูกต้อง
3. Verify consumer handles responses อย่างถูกต้อง
4. Publish contracts ไปยัง Pact broker

### 4. Write Provider Tests

1. Retrieve contracts จาก Pact broker
2. Verify provider responses match contracts
3. Test provider สามารถ handle requests ตาม contract
4. Validate provider ไม่ break existing contracts

### 5. Verify Contract Compatibility

1. Check ว่า provider สอดคล้องกับทุก consumer contracts
2. Verify breaking changes ถูก detect
3. Review contract evolution แล versioning
4. Validate backward compatibility

### 6. Run Contract Tests In CI

1. รัน consumer tests เมื่อ consumer changes
2. รัน provider tests เมื่อ provider changes
3. Setup automated contract verification
4. Configure notifications สำหรับ contract violations

### 7. Manage Contract Evolution

1. Document breaking changes
2. Coordinate contract updates ระหว่าง teams
3. Use semantic versioning สำหรับ contracts
4. Maintain contract history

## Rules

### 1. Contract Testing Principles

- Consumer-driven: consumers define contracts ไม่ใช่ providers
- Contracts ต้อง versioned แล backward compatible
- Breaking changes ต้อง coordinated ระหว่าง teams
- Contracts ต้อง automated ใน CI/CD pipeline

### 2. Contract Structure

แต่ละ contract ต้องมี:

- Request method, path, headers, body
- Response status, headers, body
- Required fields แล data types
- Error responses สำหรับ edge cases

### 3. Consumer Test Guidelines

- Test จาก consumer perspective เท่านั้น
- Mock provider responses อย่าง realistic
- Test ทุก scenarios ที่ consumer ใช้
- Publish contracts อัตโนมัติ

### 4. Provider Test Guidelines

- Verify provider ตอบสนองตาม contracts
- Test ทุก consumer contracts
- Handle contract mismatches อย่างเหมาะสม
- Report violations อย่างชัดเจน

### 5. Contract Versioning

- Use semantic versioning (MAJOR.MINOR.PATCH)
- MAJOR: breaking changes
- MINOR: backward-compatible additions
- PATCH: backward-compatible fixes

## Expected Outcome

- [ ] API contracts ถูก define แล tested
- [ ] Consumer แล provider สอดคล้องกัน
- [ ] Breaking changes ถูก detect ก่อน deploy
- [ ] Contract testing integrated ใน CI
- [ ] Clear contract evolution process
- [ ] Reliable microservice integration

## Common Mistakes

- Provider-driven contracts แทน consumer-driven
- ไม่ version contracts
- Breaking changes โดยไม่ coordinate
- ไม่ test ทุก consumer scenarios
- Manual contract verification
- ไม่ document contract changes

## Anti-Patterns

- ❌ Provider defines contracts โดยไม่คำนึงถึง consumers
- ❌ Breaking changes โดยไม่แจ้ง consumers
- ❌ Manual contract testing
- ❌ ไม่ version contracts
- ❌ Ignore contract violations
