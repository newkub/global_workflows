---
title: Deep Implement
description: Implement ให้สมบูรณ์ ไม่มี TODO/MOCK, ทุก edge case, ทุก error path, ทุก type
auto_execution_mode: 3
related:
  - /realize-implementation
  - /deep-analyze-with-use-scripts
  - /deep-review
  - /implement-comment-todo
  - /implement-features-to-mvp
  - /use-lib-effective
  - /refactor
  - /run-check
  - /loop-until-complete
  - /report-format-table
---

## Goal

Implement ให้สมบูรณ์ทุกมิติ: ไม่มี TODO/MOCK/placeholder, ทุก edge case, ทุก error path, ทุก type flow, ใช้งานได้จริง end-to-end

## Scope

ใช้สำหรับ implementation ที่ต้องการความสมบูรณ์สูง แปลงทุกอย่างเป็น production code จริง

สำหรับ implement แบบปกติ ใช้ `/realize-implementation`, สำหรับแปลง TODO comments ใช้ `/implement-comment-todo`

## Execute

Step dependencies: แต่ละ step ขึ้นกับ step ก่อนหน้าตามลำดับ (Step N ขึ้นกับ Step N-1)

### 1. Deep Analyze Missing Implementation

วิเคราะห์สิ่งที่ขาดหายไปก่อนเริ่ม implement

- ทำ `/deep-analyze-with-use-scripts` เพื่อวิเคราะห์โปรเจกต์ครบทุกมิติ
- ทำ `/deep-review` เพื่อระบุสิ่งที่ขาดหายไป: TODO, MOCK, FAKE, STUB, placeholder
- จัดลำดับตาม critical path: schema → data → API → UX/UI
- ระบุ missing features ที่เหลือจาก requirements
- บันทึก findings เป็น implementation checklist

### 2. Verify Infrastructure

ตรวจสอบว่า infrastructure พร้อมสำหรับ production

- ตรวจสอบ Database: connection pool, indexes, migrations, backup strategy
- ตรวจสอบ API Server: endpoints, rate limiting, CORS, authentication
- ตรวจสอบ Environment Variables: required variables, secrets, correct values
- ถ้ามี External Services: ตรวจสอบ credentials, API keys, rate limits
- ถ้ามี Monitoring: ตรวจสอบ metrics collection, alerting rules
- ถ้า infrastructure ไม่พร้อม ให้ stop และ report

### 3. Implement Schema And Types

Implement schema, validation schemas, และ types ให้สมบูรณ์

- เพิ่ม schema สำหรับ data models ที่ขาด
- สร้าง validation schemas สำหรับ API input/output
- สร้าง types จาก schema และ validation schemas
- ตรวจสอบ type flow: schema → validation schema → API types → UI types
- สร้างและรัน migrations สำหรับ schema changes
- ถ้า schema เปลี่ยน types ทุก layer ต้องอัปเดท

### 4. Implement Data Layer

Goal reminder: แทนที่ทุก mock data ด้วย real data queries

- แทนที่ mock data ด้วย real data queries
- Implement repository/queries layer สำหรับทุก data models
- เพิ่ม error handling สำหรับ data operations
- รัน migrations ให้ล่าสุด
- สร้างและรัน seed script สำหรับ testing
- ตรวจสอบ data integrity หลัง seed

### 5. Implement API Layer

Implement API handlers ที่เชื่อม data source จริง

- Implement API handlers ที่ query data source จริง
- เพิ่ม validation สำหรับ input/output ทุก endpoint
- Implement auth middleware สำหรับ protected endpoints
- ถ้ามี public endpoints: implement rate limiting
- เพิ่ม error handling ที่ return structured error responses
- ตรวจสอบว่า API types ตรงกับ schema และ validation schemas

### 6. Implement UX/UI Layer

เชื่อม UX/UI components กับ real API และ data source

- แทนที่ mock data ใน components ด้วย real API calls
- Implement loading, error, empty states สำหรับทุก data-driven components
- Implement form validation ด้วย validation schemas ที่ตรงกับ API validation
- ตรวจสอบว่า UI types ตรงกับ API response types
- ถ้าเหมาะสม: implement optimistic updates สำหรับ mutations
- ถ้ามี auth: เชื่อม auth UI กับ auth service จริง

### 7. Convert TODO And Missing Features

แปลง TODO, FIXME, HACK และ missing features เป็น production code

- ทำ `/implement-comment-todo` เพื่อแปลง TODO comments
- ทำ `/implement-features-to-mvp` สำหรับ features ที่จำเป็นสำหรับ MVP ก่อน
- ระบุและ implement missing features ที่เหลือจาก requirements
- ทำ `/use-lib-effective` เพื่อใช้ libraries ให้ครอบคลุม ไม่ reinvent
- ทำ `/refactor` เพื่อปรับปรุงคุณภาพโค้ด
- ทำ `/edit-relative` เพื่ออัปเดท references ทั้งหมด

### 8. Verify And Report

ทำ `/loop-until-complete` เพื่อ verify จนกว่าจะผ่านทุกเงื่อนไข

- ทำ `/run-check` เพื่อตรวจสอบ lint และ typecheck ผ่าน
- รัน test suite ทั้งหมดเพื่อยืนยันไม่มี regression
- รัน build เพื่อยืนยันว่าไม่มี build errors
- ตรวจสอบไม่มี TODO, MOCK, FAKE, STUB, placeholder เหลืออยู่
- ตรวจสอบ type flow ครบ: schema → validation → API → UI
- ถ้า fail ให้ทำ `/resolve-errors` แล้ว retry
- ถ้าเกิน 3 รอบแล้วยังไม่ผ่าน ให้ stop และ report
- ทำ `/report-format-table` สร้างตาราง: Layer, Status, TODO Remaining, Mock Remaining
- ทำ `/suggest-next-action` เพื่อแนะนำขั้นต่อไป

## Rules

### 1. No Mock Implementations

- ไม่มี mock implementations ใน production code
- แทนที่ทุก mock data ด้วย real data queries
- แทนที่ทุก simulated delay ด้วย actual API calls
- แทนที่ทุก in-memory stores ด้วย real databases หรือ caches
- UX/UI components ต้องใช้ real API calls ไม่ใช่ hardcoded data
- ไม่ silently fall back ไปใช้ mock data

### 2. Type Flow

- Types ต้อง flow ตลอดทั้ง chain: schema → validation schema → API types → UI types
- ใช้ type inference จาก schema ไม่ประกาศ type ซ้ำ
- API response types ต้องตรงกับ UI component props
- หลีกเลี่ยง `any` ใช้ `unknown` แทน
- ถ้า schema เปลี่ยน types ทุก layer ต้องอัปเดท

### 3. Error Handling And Resilience

- ไม่ crash ทั้ง application เมื่อ service ล่ม
- Return cached data ถ้าเป็นไปได้
- แสดง user-friendly error messages ใน UI
- Implement retry logic ด้วย exponential backoff สำหรับ external calls
- ถ้ามี external services: use circuit breaker pattern

### 4. Security

- Validate และ sanitize ทุก user inputs
- Implement rate limiting สำหรับ public API endpoints
- ไม่ expose secrets หรือ API keys ใน client-side code
- ใช้ parameterized queries ป้องกัน SQL injection

### 5. Verification

- ต้อง verify หลัง implement: lint, typecheck, test, build
- ตรวจสอบไม่มี TODO, MOCK, placeholder เหลืออยู่
- ถ้าเกิน 3 รอบแล้วยังไม่ผ่าน ให้ stop และ report
- ใช้ `/loop-until-complete` เพื่อให้แน่ใจว่าผ่านทุกเงื่อนไข

## Expected Outcome

- ทุกอย่างเป็น production code จริง ใช้งานได้จริง
- ไม่มี TODO, MOCK, FAKE, STUB, placeholder เหลืออยู่
- Schema, validation schemas, TypeScript types สมบูรณ์และเชื่อมต่อกัน
- API handlers เชื่อม data source จริง
- UX/UI components เชื่อม API จริง ไม่มี mock data
- Type flow ครบ: schema → validation → API → UI
- Infrastructure พร้อมสำหรับ production
- Security, error handling, observability ครบถ้วน
- ตารางสรุปผล: layer, status, TODO remaining, mock remaining
