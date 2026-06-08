---
title: Test API
description: ทดสอบ API endpoints ให้ทำงานได้ถูกต้อง
auto_execution_mode: 3
---

## Goal

ทดสอบ API endpoints ให้ทำงานได้ถูกต้องด้วย comprehensive testing

## Execute

### 1. Prepare Test Environment

1. ตั้งค่า test environment
2. รัน database migrations ถ้าจำเป็น
3. Seed test data
4. ตรวจสอบ server ทำงานได้

### 2. Execute API Tests

1. ทดสอบ happy path
2. ทดสอบ error cases
3. ตรวจสอบ response format
4. Verify status codes

### 3. Validate Responses

1. ตรวจสอบ response schema
2. Verify data integrity
3. Check error messages
4. Validate headers

### 4. Report Results

1. สรุป test results
2. ระบุ failing tests
3. Document issues
4. เสนอ fixes

## CLI Tools for API Testing (via bunx)

**Recommended Tools:**

| Tool | Command | Use Case |
|------|---------|----------|
| **@scalar/cli** | `bunx @scalar/cli` | OpenAPI/Swagger validation, API docs |
| **httpie** | `bunx httpie` | HTTP requests with nice output |
| **xh** | `bunx xh` | Fast HTTP client (Rust-based) |
| **newman** | `bunx newman` | Run Postman collections |
| **k6** | `bunx k6` | Load and performance testing |
| **oha** | `bunx oha` | HTTP load generator |

**Example Usage:**

```bash
# Validate OpenAPI spec
bunx @scalar/cli validate openapi.json

# Make HTTP request with nice formatting
bunx httpie GET http://localhost:3000/api/users

# Run Postman collection
bunx newman run collection.json

# Load test
bunx k6 run load-test.js
```

## Rules

1. Test ทุก endpoints รวม edge cases และ error scenarios
2. ใช้ test data แยก ไม่ยุ่งกับ production และ reset state หลัง test
3. Mock external services ที่ไม่สามารถควบคุมได้
4. บันทึก test cases, document expected results, และสร้าง test reports
5. Update API docs เมื่อมีการเปลี่ยนแปลง

## Expected Outcome

1. API tests ผ่านทั้งหมด
2. Issues ถูก document
3. Fixes ถูก implement
4. API พร้อมใช้งาน
