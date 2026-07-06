---
title: Realize Implementation
description: แปลงทุกอย่างเป็น production code จริง ครบทุกมิติ
auto_execution_mode: 3
related_workflows:
  - /deep-analyze-with-use-scripts
  - /analyze-missing-implementation
  - /implement-comment-todo
  - /implement-features-to-mvp
  - /use-lib-effective
  - /improve-type-safety
  - /refactor
  - /edit-relative
  - /follow-code-quality
---

## Goal

แปลงทุกอย่างเป็น production code จริงที่ใช้งานได้จริง ครบทุกมิติ

## Scope

แปลง TODO, MOCK, FAKE, STUB, placeholder เป็น production code ครบทุกมิติ: database, API, UX/UI, schema, types, external services พร้อมเชื่อมต่อ infrastructure จริง end-to-end

## Execute

### 1. Deep Analyze Missing Implementation

วิเคราะห์สิ่งที่ขาดหายไปก่อนเริ่ม implement ด้วย scripts automation

1. ทำ `/deep-analyze-with-use-scripts` เพื่อวิเคราะห์โปรเจกต์ครบทุกมิติด้วย scripts automation
2. ทำ `/analyze-missing-implementation` เพื่อระบุสิ่งที่ขาดหายไปครบทุกมิติ
3. จัดลำดับตาม critical path: schema → data → API → UX/UI

### 2. Verify Infrastructure

ตรวจสอบว่า infrastructure พร้อมสำหรับ production

1. ตรวจสอบ Database: connection pool, indexes, migrations, backup strategy
2. ตรวจสอบ API Server: endpoints, rate limiting, CORS, authentication
3. ตรวจสอบ Environment Variables: required variables, secrets, correct values
4. ถ้ามี External Services: ตรวจสอบ credentials, API keys, rate limits
5. ถ้ามี Monitoring: ตรวจสอบ metrics collection, alerting rules
6. ถ้ามี Health Checks: ตรวจสอบ health endpoints, graceful shutdown

### 3. Implement Schema And Types

Implement schema, validation schemas, และ types ให้สมบูรณ์

1. เพิ่ม schema สำหรับ data models ที่ขาด
2. สร้าง validation schemas สำหรับ API input/output
3. สร้าง types จาก schema และ validation schemas
4. ตรวจสอบ type flow: schema → validation schema → API types → UI types
5. สร้างและรัน migrations สำหรับ schema changes

### 4. Implement Data Layer

แทนที่ mock queries ด้วย real data queries และ repositories

1. แทนที่ mock data ด้วย real data queries
2. Implement repository/queries layer สำหรับทุก data models
3. เพิ่ม error handling สำหรับ data operations
4. รัน migrations ให้ล่าสุด
5. สร้างและรัน seed script สำหรับ testing
6. ตรวจสอบ data integrity หลัง seed

### 5. Implement API Layer

Implement API handlers ที่เชื่อม data source จริง ด้วย validation

1. Implement API handlers ที่ query data source จริง
2. เพิ่ม validation สำหรับ input/output ทุก endpoint
3. Implement auth middleware สำหรับ protected endpoints
4. ถ้ามี public endpoints: implement rate limiting
5. เพิ่ม error handling ที่ return structured error responses
6. ตรวจสอบว่า API types ตรงกับ schema และ validation schemas

### 6. Implement UX/UI Layer

เชื่อม UX/UI components กับ real API และ data source

1. แทนที่ mock data ใน components ด้วย real API calls
2. Implement loading, error, empty states สำหรับทุก data-driven components
3. Implement form validation ด้วย validation schemas ที่ตรงกับ API validation
4. ตรวจสอบว่า UI types ตรงกับ API response types
5. ถ้าเหมาะสม: implement optimistic updates สำหรับ mutations
6. ถ้ามี auth: เชื่อม auth UI กับ auth service จริง

### 7. Convert TODO And Missing Features

แปลง TODO, FIXME, HACK และ missing features เป็น production code

1. ทำ `/implement-comment-todo` เพื่อแปลง TODO comments
2. ทำ `/implement-features-to-mvp` สำหรับ features ที่จำเป็นสำหรับ MVP ก่อน
3. ระบุและ implement missing features ที่เหลือจาก requirements

### 8. Use Libraries Effectively

นำ libraries ที่มีอยู่ไปใช้ให้ครบและครอบคลุม ไม่ reinvent

1. ทำ `/use-lib-effective` เพื่อวิเคราะห์และใช้งาน libraries ให้เต็มประสิทธิภาพ
2. ตรวจสอบว่าใช้ library features ครบ ไม่เขียน custom implementation ที่ library ทำให้แล้ว
3. ถ้ามี library ที่ดีกว่า: ทำ `/use-lib-better` เพื่อเปรียบเทียบและเลือก

### 9. Refactor And Verify

ปรับปรุงคุณภาพโค้ดและตรวจสอบ

1. ทำ `/refactor` เพื่อปรับปรุงคุณภาพโค้ดครบวงจร
2. ทำ `/edit-relative` เพื่ออัปเดท references ทั้งหมด
3. ทำ `/improve-type-safety` เพื่อเพิ่ม type safety

## Rules

### 1. No Mock Implementations

- ไม่มี mock implementations ใน production code
- แทนที่ทุก mock data ด้วย real data queries
- แทนที่ทุก simulated delay ด้วย actual API calls
- แทนที่ทุก in-memory stores ด้วย real databases หรือ caches
- UX/UI components ต้องใช้ real API calls ไม่ใช่ hardcoded data
- ไม่มี hardcoded data ใน components ที่ควรดึงจาก API
- ไม่ silently fall back ไปใช้ mock data

### 2. Type Flow

- Types ต้อง flow ตลอดทั้ง chain: schema → validation schema → API types → UI types
- ใช้ type inference จาก schema และ validation schemas ไม่ประกาศ type ซ้ำ
- API response types ต้องตรงกับ UI component props
- หลีกเลี่ยง `any` ใช้ `unknown` แทน
- ใช้ validation schemas สำหรับ runtime validation ที่ทุก boundary
- เริ่มจาก schema ก่อน เพราะเป็น source of truth
- สร้าง validation schemas จาก schema types
- สร้าง API types จาก validation schemas
- สร้าง UI types จาก API types
- ถ้า schema เปลี่ยน types ทุก layer ต้องอัปเดท

### 3. Configuration And Environment

- Throw error ถ้า required environment variables ไม่มี
- Clear error messages บอกว่าต้องตั้งค่าอะไร
- Validate config ที่ startup time ด้วย validation schemas
- HTTPS/TLS เท่านั้นสำหรับ production
- API keys ต้อง encrypted หรือใช้ secrets manager
- No credentials ใน codebase

### 4. Error Handling And Resilience

- ไม่ crash ทั้ง application เมื่อ service ล่ม
- Return cached data ถ้าเป็นไปได้
- แสดง user-friendly error messages ใน UI
- Implement retry logic ด้วย exponential backoff สำหรับ external calls
- ถ้ามี external services: use circuit breaker pattern

### 5. Security

- Validate และ sanitize ทุก user inputs
- Implement rate limiting สำหรับ public API endpoints
- ไม่ expose secrets หรือ API keys ใน client-side code
- ใช้ parameterized queries ป้องกัน SQL injection

### 6. Observability

- Structured logging สำหรับทุก external call
- Metrics สำหรับ response times, error rates
- Log correlation IDs สำหรับ distributed tracing
- Alert on critical errors และ performance degradation

### 7. UX/UI

- ทุก data-driven component ต้องมี loading, error, empty states
- Form validation ด้วย validation schemas ที่ตรงกับ API validation
- แสดง error messages ที่ user-friendly ไม่ใช่ technical errors
- Implement optimistic updates สำหรับ mutations ที่เหมาะสม

## Expected Outcome

- ทุกอย่างเป็น production code จริง ใช้งานได้จริง
- Schema, validation schemas, TypeScript types สมบูรณ์และเชื่อมต่อกัน
- API handlers เชื่อม data source จริง
- UX/UI components เชื่อม API จริง ไม่มี mock data
- Type flow ครบ: schema → validation → API → UI
- TODO, MOCK, placeholder ถูกแปลงเป็น production code ครบถ้วน
- Infrastructure พร้อมสำหรับ production
- Security, error handling, observability ครบถ้วน
