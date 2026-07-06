---
title: Analyze Missing Implementation
description: วิเคราะห์สิ่งที่ขาดหายไปใน codebase ครบทุกมิติ
auto_execution_mode: 3
related_workflows:
  - /analyze-project
  - /implement-comment-todo
  - /refactor
---

## Goal

วิเคราะห์และระบุสิ่งที่ขาดหายไปใน codebase เพื่อเตรียมพร้อมสำหรับการ implement

## Scope

วิเคราะห์ TODO, MOCK, FAKE, STUB, placeholder, incomplete schema, missing types, missing API endpoints, missing UX/UI states และ infrastructure gaps ครบทุกมิติ

## Execute

### 1. Analyze Project

วิเคราะห์โปรเจกต์เพื่อระบุสิ่งที่ขาดหายไป

1. ทำ `/analyze-project` เพื่อวิเคราะห์โปรเจกต์ครบทุกมิติ
2. ระบุ TODO, MOCK, placeholder, components ที่ใช้ mock data, API endpoints ที่ยังไม่เชื่อม data source, schema ที่ incomplete หรือ migration ที่ขาด, types และ validation schemas ที่ขาด
3. จัดลำดับตาม critical path: schema → data → API → UX/UI

### 2. Analyze Infrastructure Gaps

ตรวจสอบ infrastructure ที่ขาดหายไป

1. ตรวจสอบ Database: missing migrations, missing indexes, missing tables
2. ตรวจสอบ API Server: missing endpoints, missing rate limiting, missing CORS config
3. ตรวจสอบ Environment Variables: missing required variables, missing secrets
4. ตรวจสอบ External Services: missing credentials, missing API keys
5. ตรวจสอบ Monitoring: missing metrics, missing alerting
6. ตรวจสอบ Health Checks: missing health endpoints

### 3. Analyze Schema And Types Gaps

วิเคราะห์ schema และ types ที่ขาดหายไป

1. ระบุ schema ที่ขาดสำหรับ data models
2. ระบุ validation schemas ที่ขาดสำหรับ API input/output
3. ระบุ types ที่ขาดหรือไม่ตรงกัน
4. ตรวจสอบ type flow gaps: schema → validation schema → API types → UI types
5. ระบุ migrations ที่ขาด
6. ทำ `/improve-type-safety`

### 4. Analyze Data Layer Gaps

วิเคราะห์ data layer ที่ขาดหายไป

1. ระบุ mock data ที่ยังไม่ได้แทนที่ด้วย real queries
2. ระบุ repository/queries layer ที่ขาด
3. ระบุ error handling ที่ขาดสำหรับ data operations
4. ระบุ seed scripts ที่ขาด
5. ตรวจสอบ data integrity issues

### 5. Analyze API Layer Gaps

วิเคราะห์ API layer ที่ขาดหายไป

1. ระบุ API handlers ที่ยังไม่เชื่อม data source จริง
2. ระบุ validation ที่ขาดสำหรับ input/output
3. ระบุ auth middleware ที่ขาด
4. ระบุ rate limiting ที่ขาด
5. ระบุ error handling ที่ขาด
6. ตรวจสอบ API types ที่ไม่ตรงกับ schema

### 6. Analyze UX/UI Layer Gaps

วิเคราะห์ UX/UI layer ที่ขาดหายไป

1. ระบุ components ที่ใช้ mock data แทน real API calls
2. ระบุ loading, error, empty states ที่ขาด
3. ระบุ form validation ที่ขาด
4. ตรวจสอบ UI types ที่ไม่ตรงกับ API response types
5. ระบุ optimistic updates ที่ขาด
6. ระบุ auth UI ที่ยังไม่เชื่อม auth service จริง

### 7. Analyze TODO And Missing Features

วิเคราะห์ TODO, FIXME, HACK และ missing features

1. ทำ `/implement-comment-todo` เพื่อระบุ TODO comments
2. ระบุ missing features จาก requirements
3. จัดลำดับ missing features ตาม priority

### 8. Report And Plan

รายงานผลและวางแผนการ implement

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์เป็นตาราง
2. ทำ `/refactor` เพื่อปรับปรุงคุณภาพโค้ด
3. ทำ `/improve-type-safety` เพื่อเพิ่ม type safety

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุสิ่งที่ขาด ไม่ใช่ implement
- รายงาน gaps ทั้งหมดพร้อม location และ severity
- จัดลำดับตาม critical path: schema → data → API → UX/UI
- ไม่แก้ไขโค้ดโดยตรง เว้นแต่ผู้ใช้สั่ง

### 2. Type Flow

- ตรวจสอบ type flow ตลอดทั้ง chain: schema → validation schema → API types → UI types
- ระบุจุดที่ type flow ขาดหายไป
- ระบุ `any` types ที่ควรเป็น `unknown` หรือ proper types
- ระบุ validation schemas ที่ขาด

### 3. Configuration And Environment

- ระบุ environment variables ที่ขาด
- ระบุ secrets ที่ขาด
- ระบุ config validation ที่ขาด
- ระบุ credentials ที่ hardcoded

### 4. Error Handling And Resilience

- ระบุจุดที่ขาด error handling
- ระบุ missing retry logic
- ระบุ missing circuit breaker pattern
- ระบุ missing user-friendly error messages

### 5. Security

- ระบุ missing input validation
- ระบุ missing rate limiting
- ระบุ missing sanitization

### 6. Observability

- ระบุ missing structured logging
- ระบุ missing metrics
- ระบุ missing log correlation IDs
- ระบุ missing alerting

### 7. UX/UI

- ระบุ missing loading, error, empty states
- ระบุ missing form validation
- ระบุ missing optimistic updates

## Expected Outcome

- รายงานสิ่งที่ขาดหายไปครบทุกมิติ
- Schema, validation schemas, TypeScript types gaps ระบุชัดเจน
- API handlers gaps ระบุพร้อม location
- UX/UI components gaps ระบุพร้อม missing states
- Type flow gaps ระบุครบ: schema → validation → API → UI
- TODO, MOCK, placeholder ระบุครบถ้วน
- Infrastructure gaps ระบุชัดเจน
- Security, error handling, observability gaps ระบุครบถ้วน
