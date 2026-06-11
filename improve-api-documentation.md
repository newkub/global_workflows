---
title: Improve API Documentation
description: ปรับปรุง API documentation (OpenAPI/Swagger)
auto_execution_mode: 3
related_workflows:
  - /improve-api-contracts
  - /review-api
---

## Goal

ปรับปรุง API documentation ให้ครบถ้วนและอัพเดทอัตโนมัติ

## Scope

ใช้สำหรับปรับปรุง OpenAPI/Swagger documentation สำหรับ REST APIs

## Execute

### 1. Analyze Current Documentation

วิเคราะห์ API documentation ปัจจุบัน

1. ตรวจสอบ OpenAPI/Swagger specs ถ้ามี
2. ระบุ endpoints ที่ไม่มี documentation
3. ตรวจสอบ accuracy ของ documentation
4. ตรวจสอบ completeness ของ examples
5. ตรวจสอบ consistency ของ formats
6. ระบุ outdated documentation

### 2. Setup OpenAPI Specification

ตั้งค่า OpenAPI specification

1. สร้าง OpenAPI 3.x spec file
2. กำหนด API info (title, version, description)
3. กำหนด servers และ environments
4. กำหนด security schemes
5. กำหนด tags สำหรับ grouping
6. กำหนด common components

### 3. Document Endpoints

Document ทุก endpoints

1. Document HTTP methods และ paths
2. Document request parameters (path, query, header)
3. Document request bodies ด้วย schemas
4. Document response schemas
5. Document response codes
6. Document authentication requirements

### 4. Add Examples

เพิ่ม examples

1. Add request examples สำหรับทุก endpoints
2. Add response examples สำหรับทุก responses
3. Add error response examples
4. Add example values ใน schemas
5. Add example scenarios
6. Add example curl commands

### 5. Document Authentication

Document authentication

1. Document authentication methods
2. Document API key usage
3. Document OAuth flows
4. Document JWT usage
5. Document session management
6. Document permission requirements

### 6. Document Errors

Document errors

1. Document error response format
2. Document error codes
3. Document error messages
4. Document error scenarios
5. Document error handling
6. Document common errors

### 7. Setup Auto-Generation

ตั้งค่า auto-generation

1. ใช้ Swagger/OpenAPI tools
2. Generate documentation จาก code
3. Generate client SDKs
4. Generate server stubs
5. Setup interactive documentation (Swagger UI)
6. Setup documentation hosting

### 8. Integrate with CI/CD

เชื่อมต่อกับ CI/CD

1. Validate OpenAPI spec ใน CI
2. Auto-generate documentation ใน build
3. Deploy documentation อัตโนมัติ
4. Check documentation completeness
5. Check documentation accuracy
6. Enforce documentation standards

## Rules

### 1. Documentation Completeness

Document ครบถ้วน

- Document ทุก endpoints
- Document ทุก parameters
- Document ทุก responses
- Document ทุก errors
- Document authentication

### 2. Documentation Accuracy

Documentation ต้องถูกต้อง

- Documentation ต้อง match implementation
- Examples ต้อง work
- Schemas ต้อง accurate
- Descriptions ต้อง clear
- ไม่ outdated

### 3. Documentation Quality

Documentation ต้องมีคุณภาพ

- ใช้ clear descriptions
- ใช้ meaningful examples
- ใช้ consistent formatting
- ใช้ proper grouping
- ใช้ proper tags

### 4. Auto-Generation

ใช้ auto-generation อย่างเหมาะสม

- Generate จาก code เมื่อเป็นไปได้
- Validate generated docs
- Manual override เมื่อจำเป็น
- Keep docs in sync
- Monitor doc quality

### 5. Maintenance

รักษา documentation อย่างสม่ำเสมอ

- Update docs เมื่อ API changes
- Review docs อย่างสม่ำเสมอ
- Remove outdated docs
- Add new docs เมื่อเพิ่ม features
- Monitor doc usage

## Expected Outcome

- OpenAPI spec ที่ครบถ้วน
- Endpoints ที่ documented ทั้งหมด
- Examples ที่ครบถ้วน
- Authentication ที่ documented
- Errors ที่ documented
- Auto-generation ที่ตั้งค่าเสร็จ
- CI/CD integration ที่เสร็จ
- Interactive documentation ที่ available
