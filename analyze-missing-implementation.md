---
title: Analyze Missing Implementation
description: วิเคราะห์สิ่งที่ขาดหายไปใน codebase ครบทุกมิติ
auto_execution_mode: 3
related_workflows:
  - /analyze-project
  - /use-scripts
  - /use-ast-grep
  - /implement-comment-todo
---

## Goal

วิเคราะห์และระบุสิ่งที่ขาดหายไปใน codebase เพื่อเตรียมพร้อมสำหรับการ implement

## Scope

วิเคราะห์ TODO, MOCK, FAKE, STUB, placeholder, incomplete schema, missing types, missing API endpoints, missing UX/UI states และ infrastructure gaps ครบทุกมิติ

## Execute

### 1. Analyze Project With Scripts

วิเคราะห์โปรเจกต์ด้วย scripts เพื่อระบุสิ่งที่ขาดหายไป

1. ทำ `/analyze-project` เพื่อวิเคราะห์โปรเจกต์ครบทุกมิติ
2. ทำ `/use-scripts` เพื่อ scan ทุกไฟล์และระบุใน script เดียว:
   - TODO, FIXME, HACK comments พร้อม location
   - MOCK, FAKE, STUB, placeholder พร้อม location
   - Components ที่ใช้ mock data แทน real API calls
   - API endpoints ที่ยังไม่เชื่อม data source จริง
   - Schema ที่ incomplete หรือ migration ที่ขาด
   - Types และ validation schemas ที่ขาด
3. จัดลำดับตาม critical path: schema → data → API → UX/UI

### 2. Analyze Infrastructure Gaps

ตรวจสอบ infrastructure ที่ขาดหายไป

1. ตรวจสอบ Database: missing migrations, missing indexes, missing tables
2. ตรวจสอบ API Server: missing endpoints, missing rate limiting, missing CORS config
3. ตรวจสอบ Environment Variables: missing required variables, missing secrets
4. ถ้ามี External Services: ตรวจสอบ missing credentials, missing API keys
5. ถ้ามี Monitoring: ตรวจสอบ missing metrics, missing alerting
6. ถ้ามี Health Checks: ตรวจสอบ missing health endpoints

### 3. Analyze Schema And Types Gaps

วิเคราะห์ schema และ types ที่ขาดหายไป

1. ระบุ schema ที่ขาดสำหรับ data models
2. ระบุ validation schemas ที่ขาดสำหรับ API input/output
3. ระบุ types ที่ขาดหรือไม่ตรงกัน
4. ตรวจสอบ type flow gaps: schema → validation schema → API types → UI types
5. ระบุ migrations ที่ขาด

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
3. ถ้ามี auth: ระบุ auth middleware ที่ขาด
4. ถ้ามี public endpoints: ระบุ rate limiting ที่ขาด
5. ระบุ error handling ที่ขาด
6. ตรวจสอบ API types ที่ไม่ตรงกับ schema

### 6. Analyze UX/UI Layer Gaps

วิเคราะห์ UX/UI layer ที่ขาดหายไป

1. ระบุ components ที่ใช้ mock data แทน real API calls
2. ระบุ loading, error, empty states ที่ขาด
3. ระบุ form validation ที่ขาด
4. ตรวจสอบ UI types ที่ไม่ตรงกับ API response types
5. ถ้าเหมาะสม: ระบุ optimistic updates ที่ขาด
6. ถ้ามี auth: ระบุ auth UI ที่ยังไม่เชื่อม auth service จริง

### 7. Analyze TODO And Missing Features

วิเคราะห์ TODO, FIXME, HACK และ missing features

1. ทำ `/use-ast-grep` เพื่อ scan TODO, FIXME, HACK comments แบบ structural
2. ระบุ missing features จาก requirements
3. จัดลำดับ missing features ตาม priority

### 8. Report Findings

รายงานผลการวิเคราะห์ทั้งหมด

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์เป็นตาราง
2. สรุป gaps ทั้งหมดพร้อม location และ severity
3. จัดลำดับตาม critical path: schema → data → API → UX/UI
4. แนะนำการ implement สำหรับแต่ละ gap
5. ระบุ dependencies ระหว่าง gaps
6. สร้าง implementation plan ตาม critical path

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
- ระบุ missing retry logic สำหรับ external calls
- ถ้ามี external services: ระบุ missing circuit breaker pattern
- ระบุ missing user-friendly error messages

### 5. Security

- ระบุ missing input validation
- ระบุ missing rate limiting สำหรับ public endpoints
- ระบุ missing sanitization
- ระบุ credentials ที่ hardcoded

### 6. Observability

- ระบุ missing structured logging
- ระบุ missing metrics
- ระบุ missing log correlation IDs
- ระบุ missing alerting

### 7. UX/UI

- ระบุ missing loading, error, empty states
- ระบุ missing form validation
- ระบุ missing optimistic updates

### 8. Use Scripts For Batch Analysis

- ใช้ `/use-scripts` เมื่อต้องวิเคราะห์ไฟล์มากกว่า 10 ไฟล์
- ใช้ ast-grep สำหรับ structural scan ของ TODO, MOCK, placeholder
- คำนวณ metrics ทั้งหมดใน script เดียวเพื่อ consistency
- รวบรวมผลลัพธ์เป็น structured data สำหรับ report

## Expected Outcome

- รายงานสิ่งที่ขาดหายไปครบทุกมิติพร้อม location และ severity
- Schema, validation schemas, TypeScript types gaps ระบุชัดเจน
- API handlers gaps ระบุพร้อม location
- UX/UI components gaps ระบุพร้อม missing states
- Type flow gaps ระบุครบ: schema → validation → API → UI
- TODO, MOCK, placeholder ระบุครบถ้วนพร้อม location
- Infrastructure gaps ระบุชัดเจน
- Security, error handling, observability gaps ระบุครบถ้วน
- Implementation plan จัดลำดับตาม critical path
- พร้อมสำหรับ `/realize-implementation`
