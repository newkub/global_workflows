---
title: Report Api
description: สรุป API endpoints: paths, methods, validation, auth, rate limiting status
auto_execution_mode: 3
related:
  - /report-format-table
  - /scan-codebase
  - /review-api
---

## Goal

รายงาน API endpoints ของโปรเจกต์: paths, methods, input validation, auth requirements, rate limiting และ status

## Scope

ใช้สำหรับการรายงาน API layer จาก codebase — ไม่รวมการ review API quality (ใช้ `/review-api` สำหรับ review)

## Execute

### 1. Discover API Endpoints

ค้นหา API endpoints ทั้งหมดใน codebase

> Goal: มี endpoints ครบสำหรับการรายงาน

1. ทำ `/scan-codebase` เพื่อค้นหา API route definitions (oRPC procedures, server functions, route handlers)
2. ค้นหา patterns: `osapi.`, `createServerFn`, `router.`, `app.get`, `app.post`, `defineHandler`
3. ระบุไฟล์ที่มี API definitions และจำนวน endpoints
4. แยกตามประเภท: public API, internal API, webhook endpoints

### 2. Collect Endpoint Metadata

รวบรวมข้อมูลของแต่ละ endpoint

> Goal: มี metadata ครบสำหรับการรายงาน

1. ระบุ path และ HTTP method ของแต่ละ endpoint
2. ระบุ input schema (Zod) และ output schema ถ้ามี
3. ระบุ auth requirement: public, authenticated, role-specific
4. ระบุ rate limiting configuration ถ้ามี
5. ระบุ middleware: validation, auth, logging, error handling

### 3. Analyze API Coverage

วิเคราะห์ความครอบคลุมของ API

> Goal: เข้าใจว่า API ครอบคลุม features ใดบ้าง

1. จัดกลุ่ม endpoints ตาม module/domain: auth, booking, payment, user, admin
2. ระบุ CRUD completeness: มี create, read, update, delete ครบไหม
3. ระบุ endpoints ที่ขาด input validation
4. ระบุ endpoints ที่ขาด auth ที่ควรมี
5. ระบุ endpoints ที่ขาด rate limiting ที่ควรมี

### 4. Check API Health

ตรวจสอบสุขภาพของ API layer

> Goal: รู้ปัญหาและช่องโหว่ของ API

1. ระบุ endpoints ที่ไม่มี error handling
2. ระบุ endpoints ที่เปิดเผย sensitive data ใน response
3. ระบุ endpoints ที่ไม่มี input sanitization
4. ระบุ endpoints ที่มี N+1 query risk
5. ระบุ endpoints ที่ไม่มี OpenAPI documentation

### 5. Format Report

จัดรูปแบบรายงานให้อ่านง่าย

> Goal: รายงานครบ อ่านง่าย มี insights

1. ทำ `/report-format-table` เพื่อจัดรูปแบบเป็นตาราง
2. แสดงผลตามลำดับ: Summary → Endpoints → Coverage Gaps → Health Issues
3. กำหนด columns สำหรับตาราง endpoints:
   - **No.** ลำดับ
   - **Method** GET / POST / PUT / PATCH / DELETE
   - **Path** API path
   - **Module** auth / booking / payment / user / admin
   - **Auth** public / authenticated / role
   - **Validation** ✅ / ❌
   - **Rate Limit** ✅ / ❌ / N/A
   - **Docs** ✅ / ❌
4. จัดกลุ่มตาม module

### 6. Provide Insights

ให้ insights และ recommendations

> Goal: ผู้อ่านรู้ว่าต้องปรับปรุงอะไร

1. สรุปจำนวน endpoints แยกตาม module และ method
2. ระบุ endpoints ที่ขาด validation, auth หรือ rate limiting
3. ระบุ CRUD gaps ในแต่ละ module
4. แนะนำ next steps: `/review-api` สำหรับ review, `/fix` สำหรับแก้ issues

## Rules

### Read-Only

- ไม่แก้ไข API code — รายงานเท่านั้น
- ใช้ `/review-api` สำหรับ review API quality
- ใช้ `/fix` สำหรับการแก้ไข

### Output Format

- ทำ `/report-format-table` สำหรับจัดรูปแบบผลลัพธ์
- จัดกลุ่มตาม module
- ใช้ symbols: ✅ has, ❌ missing, ⚠️ partial

### High Impact Content

- ชี้เน้น endpoints ที่ขาด auth ที่ควรมี
- ชี้เน้น endpoints ที่ขาด validation
- ถ้ามีมากกว่า 50 endpoints → แสดงเฉพาะที่มี issues
- ชี้เน้น endpoints ที่เปิดเผย sensitive data

### Non-Redundancy

- การ review API quality อยู่ใน `/review-api` แล้ว
- การค้นหา code อยู่ใน `/scan-codebase` แล้ว
- การรายงาน OpenAPI docs อยู่ใน `/review-api` แล้ว

## Expected Outcome

- รายการ API endpoints ทั้งหมดในตารางที่อ่านง่าย
- ข้อมูลครบ: method, path, module, auth, validation, rate limit, docs
- ระบุ coverage gaps และ health issues
- มี recommendations ชัดเจน
- ไม่มีการแก้ไข API code — read-only report
