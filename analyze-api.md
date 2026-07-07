---
title: Analyze API
description: วิเคราะห์ API design, conventions, versioning, rate limiting, error responses
auto_execution_mode: 3
related_workflows:
  - /improve-api-design
  - /improve-backend
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ API design quality เพื่อระบุ convention violations และ improvement opportunities

## Scope

REST/GraphQL conventions, API versioning, rate limiting, error responses, pagination, input validation, response shape consistency, authentication, documentation

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม API metrics ผ่าน scripts (endpoint inventory, schema validation, response analysis)

### 2. Check API Conventions

1. ระบุ endpoint naming ที่ไม่ consistent (REST conventions: resource nouns, HTTP methods)
2. ระบุ response shape ที่ไม่ consistent ข้าม endpoints
3. ระบุ missing plural nouns ใน resource paths
4. ระบุ non-standard HTTP status codes
5. ระบุ missing idempotency สำหรับ safe operations

### 3. Check API Versioning

1. ระบุ missing API versioning strategy
2. ระบุ breaking changes ที่ไม่มี version bump
3. ระบุ deprecated endpoints ที่ไม่มี sunset timeline
4. ระบุ missing backward compatibility

### 4. Check Input Validation

1. ระบุ missing schema validation ที่ API boundaries
2. ระบุ missing type safety ระหว่าง client และ server
3. ระบุ missing field validation (required, format, range, length)
4. ระบุ missing sanitization สำหรับ user input

### 5. Check Error Responses

1. ระบุ inconsistent error response format
2. ระบุ missing error codes และ error messages
3. ระบุ verbose errors ที่ leak internal info
4. ระบุ missing error documentation

### 6. Check Rate Limiting And Security

1. ระบุ missing rate limiting บน API endpoints
2. ระบุ missing authentication บน protected endpoints
3. ระบุ missing authorization checks (RBAC)
4. ระบุ missing CORS configuration
5. ระบุ missing API key management

### 7. Check Pagination And Filtering

1. ระบุ missing pagination สำหรับ list endpoints
2. ระบุ missing filtering และ sorting capabilities
3. ระบุ over-fetching (returning more data than needed)
4. ระบุ under-fetching (requiring multiple requests)

### 8. Check API Documentation

1. ระบุ missing OpenAPI/Swagger documentation
2. ระบุ missing examples ใน API docs
3. ระบุ outdated documentation ที่ไม่ match implementation
4. ระบุ missing deprecation notices

### 9. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: security → validation → versioning → conventions → error responses → pagination → documentation

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม endpoint และ severity

### 2. REST Conventions

- Resource paths เป็น plural nouns (`/users`, `/orders`)
- HTTP methods ใช้ตาม semantics (GET, POST, PUT, PATCH, DELETE)
- Status codes: 2xx success, 4xx client error, 5xx server error

### 3. GraphQL Conventions

- ใช้ input types สำหรับ mutations
- ใช้ connections สำหรับ paginated lists
- ใช้ error extensions สำหรับ structured errors

## Expected Outcome

- API design issues ระบุพร้อม endpoint และ severity
- พร้อมสำหรับ `/improve-api-design`
