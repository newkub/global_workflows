---
title: Improve API Contracts
description: ปรับปรุง API contracts และ documentation
auto_execution_mode: 3
related_workflows:
  - /review-api
  - /improve-api-documentation
  - /improve-api-versioning
---

## Goal

ปรับปรุง API contracts ให้ชัดเจน มี versioning และ documentation ครบถ้วน

## Scope

ใช้สำหรับปรับปรุง REST APIs, GraphQL APIs, และ WebSocket APIs

## Execute

### 1. Analyze Current API Contracts

วิเคราะห์ API contracts ปัจจุบัน

1. ทำ `/review-api` เพื่อตรวจสอบ API endpoints
2. ตรวจสอบ OpenAPI/Swagger specs ถ้ามี
3. ระบุ endpoints ที่ไม่มี documentation
4. ตรวจสอบ consistency ของ response formats
5. วิเคราะห์ error response patterns
6. ตรวจสอบ authentication/authorization patterns

### 2. Define API Standards

กำหนดมาตรฐาน API

1. กำหนด RESTful conventions (URL structure, HTTP methods)
2. กำหนด response format standards (JSON, pagination, filtering)
3. กำหนด error response format
4. กำหนด authentication/authorization patterns
5. กำหนด rate limiting standards
6. กำหนด versioning strategy

### 3. Improve Request/Response Schemas

ปรับปรุม request/response schemas

1. ใช้ Zod หรือ validation libraries สำหรับ schemas
2. กำหนด request body schemas ที่ชัดเจน
3. กำหนด response schemas ที่ชัดเจน
4. ใช้ consistent field naming (camelCase, snake_case)
5. กำหนด required vs optional fields
6. ใช้ enums สำหรับ fixed values

### 4. Implement API Versioning

ตั้งค่า API versioning

1. ทำ `/improve-api-versioning` เพื่อตั้งค่า versioning
2. ใช้ URL versioning (/v1/, /v2/) หรือ header versioning
3. กำหนด deprecation policy
4. กำหนด breaking change guidelines
5. จัดการ backward compatibility
6. Document version changes

### 5. Improve Error Handling

ปรับปรุม error handling

1. กำหนด error response format มาตรฐาน
2. ใช้ HTTP status codes อย่างถูกต้อง
3. ให้ error messages ที่ชัดเจนและ actionable
4. ให้ error codes สำหรับ programmatic handling
5. ให้ stack traces สำหรับ development
6. Log errors อย่างเหมาะสม

### 6. Add Pagination, Filtering, Sorting

เพิ่ม pagination, filtering, sorting

1. ใช้ consistent pagination format (page/limit, cursor-based)
2. ให้ total count ใน response
3. ให้ filtering ด้วย query parameters
4. ให้ sorting ด้วย query parameters
5. ให้ field selection (partial response)
6. Document pagination/filtering/sorting behavior

### 7. Improve Authentication/Authorization

ปรับปรุม authentication/authorization

1. ใช้ consistent authentication patterns
2. ใช้ OAuth2/JWT อย่างถูกต้อง
3. กำหนด role-based access control
4. ให้ permission errors ที่ชัดเจน
5. ใช้ API keys สำหรับ service-to-service
6. Document authentication requirements

### 8. Generate OpenAPI Documentation

สร้าง OpenAPI documentation

1. ทำ `/improve-api-documentation` เพื่อสร้าง docs
2. ใช้ OpenAPI 3.x specification
3. Document ทุก endpoints
4. Document request/response schemas
5. Document authentication requirements
6. Document error responses
7. Provide examples สำหรับ requests/responses

## Rules

### 1. API Design

ออกแบบ API ให้มีประสิทธิภาพ

- ใช้ RESTful conventions
- ใช้ HTTP methods อย่างถูกต้อง
- ใช้ meaningful resource names
- ใช้ plural nouns สำหรับ collections
- ใช้ nested resources อย่างเหมาะสม

### 2. Response Format

ใช้ response format ที่ consistent

- ใช้ JSON สำหรับ responses
- ใช้ consistent field naming
- ให้ timestamps ใน ISO 8601
- ให้ null แทน missing fields
- ใช้ consistent pagination format

### 3. Error Handling

จัดการ errors อย่างถูกต้อง

- ใช้ HTTP status codes อย่างถูกต้อง
- ให้ error messages ที่ชัดเจน
- ให้ error codes สำหรับ handling
- Log errors อย่างเหมาะสม
- ไม่ expose sensitive data

### 4. Versioning

ใช้ versioning อย่างถูกต้อง

- ใช้ semantic versioning
- กำหนด deprecation policy
- จัดการ breaking changes
- Maintain backward compatibility
- Document version changes

### 5. Documentation

Document APIs ครบถ้วน

- Document ทุก endpoints
- Document request/response schemas
- Document authentication
- Document errors
- ให้ examples

## Expected Outcome

- API contracts ที่ชัดเจนและ consistent
- OpenAPI documentation ครบถ้วน
- API versioning ที่เสถียร
- Error handling ที่ consistent
- Authentication/authorization ที่ standardized
- Pagination/filtering/sorting ที่ consistent
