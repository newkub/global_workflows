---
title: Make Real
description: แปลง TODO, MOCK, placeholder เป็น production code จริง
auto_execution_mode: 3
---

## Goal

แปลง TODO, MOCK, placeholder เป็น production code จริงที่เชื่อมต่อกับ infrastructure จริง

## Execute

### 1. Infrastructure Verification

ตรวจสอบว่า infrastructure พร้อมสำหรับ production

1. Database server พร้อมใช้งานและ connection string ถูกต้อง
2. API server รันอยู่และรองรับ endpoints ที่จำเป็น
3. Environment variables ตั้งค่าถูกต้อง
4. Network connectivity และ firewall rules อนุญาติ
5. SSL/TLS certificates valid
6. Database migrations รันแล้วและ schema ถูกต้อง
7. External service credentials และ API keys พร้อมใช้งาน

### 2. Seed Database

สร้างและรัน seed script เพื่อเติมข้อมูลจำลองสำหรับการทดสอบ

1. สร้าง seed script สำหรับทุก database tables
2. เพิ่ม bcrypt หรือ password hashing library
3. ติดตั้ง dependencies ที่จำเป็น
4. รัน seed script เพื่อเติมข้อมูลจำลอง
5. ตรวจสอบว่าข้อมูลถูกเติมอย่างถูกต้อง

### 3. Implement Todo

แปลง TODO, FIXME, HACK และ placeholder code เป็น production code

1. ทำ `/implement-comment-todo` เพื่อแปลง TODO comments และ placeholder functions
2. ทำ `/loop-until-complete` จนกว่าจะไม่มี TODO เหลือ
3. ทำ `/run-test` เพื่อทดสอบว่าผ่านทั้งหมด

### 4. Implementation

Implement production code - เชื่อมต่อกับ infrastructure จริง

1. Database: connection pool, migrations, repositories (แทน InMemory), indexes, prepared statements, retry logic
2. Server API: routes, handlers, validation, rate limiting, documentation
3. Client: replace mock with API calls, loading states, retry, caching
4. Real-time: connection management, event handling, subscriptions
5. External services: production endpoints, authentication, rate limiting, circuit breaker

### 5. Final Verification

ตรวจสอบว่าไม่มีสิ่งใดเหลือเป็น mock

1. ค้นหา MOCK, FAKE, STUB implementations อีกครั้ง
2. ทดสอบ end-to-end flows ว่าใช้ production endpoints
3. Verify monitoring และ alerting ทำงาน

## Rules

### No Mocks in Production

แทนที่ทุก mock implementations ด้วย real database queries และ actual API calls

- ไม่มี mock implementations ใน production code
- แทนที่ทุก mock data ด้วย real database queries
- แทนที่ทุก simulated delay ด้วย actual API calls

### Fail Fast on Missing Config

Throw error ถ้า required environment variables ไม่มี และห้าม silently fall back

- Throw error ถ้า required environment variables ไม่มี
- ไม่ silently fall back ไปใช้ mock data
- Clear error messages บอกว่าต้องตั้งค่าอะไร

### Graceful Degradation

ไม่ crash ทั้ง application เมื่อ service ล่ม และ return cached data ถ้าเป็นไปได้

- ไม่ crash ทั้ง application เมื่อ service ล่ม
- Return cached data ถ้าเป็นไปได้
- แสดง user-friendly error messages

### Security by Default

ใช้ HTTPS/TLS เท่านั้นสำหรับ production และ API keys ต้อง encrypted

- HTTPS/TLS เท่านั้นสำหรับ production
- API keys ต้อง encrypted หรือใช้ secrets manager
- No credentials ใน codebase

### Observability

ใช้ structured logging และ metrics สำหรับทุก external call

- Structured logging สำหรับทุก external call
- Metrics สำหรับ response times, error rates
- Distributed tracing ถ้าเป็นไปได้


## Expected Outcome

- TODO, MOCK, placeholder ถูกแปลงเป็น production code
- เชื่อมต่อกับ server API, database, และ external services จริง
- ไม่มี mock implementations ใน production code
- Infrastructure พร้อมสำหรับ production
- Error handling และ monitoring ครบถ้วน
- Tests ผ่านด้วย real dependencies
