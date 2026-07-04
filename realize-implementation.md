---
title: Realize Implementation
description: แปลง TODO, MOCK, placeholder เป็น production code จริง
auto_execution_mode: 3
related_workflows:
  - /analyze-project
  - /implement-comment-todo
  - /loop-until-complete
  - /refactor
  - /edit-relative
  - /run-verify
---

## Goal

แปลง TODO, MOCK, placeholder เป็น production code จริงที่เชื่อมต่อกับ infrastructure จริง

## Scope

ครอบคลุมการแปลง TODO, MOCK, FAKE, STUB implementations และ placeholder code เป็น production code ที่เชื่อมต่อกับ database, API, และ external services จริง รวมถึงการตรวจสอบ infrastructure และการทดสอบ end-to-end

## Execute

### 1. Project Analysis

วิเคราะห์โปรเจกต์ก่อนเริ่ม implement เพื่อเข้าใจโครงสร้างและ dependencies

1. ทำ `/analyze-project` เพื่อวิเคราะห์โปรเจกต์อย่างละเอียด
2. ระบุ TODO, MOCK, placeholder ทั้งหมดที่ต้องแปลง
3. จัดลำดับความสำคัญของงานตาม critical path
4. ตรวจสอบ dependencies ที่จำเป็นสำหรับ production

### 2. Infrastructure Verification

ตรวจสอบว่า `infrastructure` พร้อมสำหรับ `production` ถ้า project มี database, API server, หรือ external services

1. ตรวจสอบ `Database` ถ้า project มี: connection pool, indexes, migrations, backup strategy
2. ตรวจสอบ `API Server` ถ้า project มี: endpoints, rate limiting, CORS, authentication
3. ตรวจสอบ `Environment Variables`: required variables, secrets, correct values
4. ตรวจสอบ `External Services` ถ้า project มี: credentials, API keys, rate limits
5. ตรวจสอบ `Monitoring`: metrics collection, alerting rules
6. ตรวจสอบ `Health Checks`: health endpoints, graceful shutdown
7. ตรวจสอบ `Network`: connectivity, firewall rules, DNS resolution
8. ตรวจสอบ `SSL/TLS`: certificates validity, HTTPS enforcement

### 3. Seed Database

สร้างและรัน `seed script` เพื่อเติมข้อมูลจำลองสำหรับการทดสอบ ถ้า project มี database

1. สร้าง `seed script` สำหรับทุก `database tables`
2. เพิ่ม `bcrypt` หรือ `password hashing library` ถ้ามี user data
3. ติดตั้ง `dependencies` ที่จำเป็น
4. รัน `seed script` เพื่อเติมข้อมูลจำลอง
5. ตรวจสอบว่าข้อมูลถูกเติมอย่างถูกต้อง
6. สร้าง backup ก่อน seed ถ้า database มีข้อมูลจริง

### 4. Implement Todo

แปลง `TODO`, `FIXME`, `HACK` และ `placeholder code` เป็น `production code`

1. ทำ `/implement-comment-todo` เพื่อแปลง `TODO comments` และ `placeholder functions`
2. ทำ `/loop-until-complete` จนกว่าจะไม่มี `TODO` เหลือ
3. ทำ `/run-test` เพื่อทดสอบว่าผ่านทั้งหมด
4. ทำ `/run-typecheck` เพื่อตรวจสอบ type safety

### 5. Realize Missing Features

แปลง `missing features` ที่ยังไม่ได้ implement เป็น `production code`

1. ระบุ features ที่ยังไม่ได้ implement จาก requirements
2. จัดลำดับความสำคัญของ missing features
3. Implement missing features ตามลำดับความสำคัญ
4. ทำ `/loop-until-complete` จนกว่าทุก features ถูก implement
5. ทำ `/run-test` เพื่อทดสอบว่าผ่านทั้งหมด

### 6. Implementation

Implement `production code` - เชื่อมต่อกับ `infrastructure` จริง

1. แทนที่ `Database` mock ด้วย connection pool, migrations, repositories ถ้า project มี
2. แทนที่ `Server API` mock ด้วย routes, handlers, validation, rate limiting ถ้า project มี
3. แทนที่ `Client` mock ด้วย API calls, loading states, retry ถ้า project มี
4. แทนที่ `External services` mock ด้วย production endpoints, authentication, circuit breaker ถ้า project มี
5. เพิ่ม `Error handling`: try-catch blocks, error boundaries, user-friendly messages
6. เพิ่ม `Security`: authentication, authorization, encryption ถ้าจำเป็น
7. เพิ่ม `Configuration`: environment variables, config validation, secrets management
8. เพิ่ม `Logging`: structured logging, log levels, log aggregation

### 7. Refactor Code

ปรับปรุงคุณภาพโค้ดด้วย `systematic refactoring`

1. ทำ `/refactor` เพื่อปรับปรุงคุณภาพโค้ดครบวงจร
2. ทำ `/restructure` เพื่อปรับ `physical file/folder structure`
3. ทำ `/separate-of-concern` เพื่อแยก `logical concerns`
4. ทำ `/edit-relative` เพื่ออัปเดท references ทั้งหมด
5. ทำ `/improve-type-safety` เพื่อเพิ่ม type safety

### 8. Final Verification

ตรวจสอบว่าไม่มีสิ่งใดเหลือเป็น `mock`

1. ค้นหา `MOCK`, `FAKE`, `STUB implementations` อีกครั้ง
2. ทดสอบ `end-to-end flows` ว่าใช้ `production endpoints`
3. Verify `monitoring` แล `alerting` ทำงาน
4. ทดสอบ `graceful shutdown`
5. Verify `security policies` แล `compliance`
6. ทำ `/run-lint` เพื่อตรวจสอบว่าทุกไฟล์ถูกใช้
7. ทำ `/check-unsued-files` เพื่อตรวจสอบว่าไม่มีไฟล์ที่ไม่ได้ใช้
8. ทำ `/run-verify` เพื่อตรวจสอบความถูกต้องครบถ้วน

## Rules

### 1. No Mocks in Production

แทนที่ทุก `mock implementations` ด้วย `real database queries` และ `actual API calls`

- ไม่มี `mock implementations` ใน `production code`
- แทนที่ทุก `mock data` ด้วย `real database queries`
- แทนที่ทุก `simulated delay` ด้วย `actual API calls`
- แทนที่ทุก `in-memory stores` ด้วย `real databases` หรือ `caches`

### 2. Fail Fast on Missing Config

Throw error ถ้า `required environment variables` ไม่มี และห้าม `silently fall back`

- Throw error ถ้า `required environment variables` ไม่มี
- ไม่ `silently fall back` ไปใช้ `mock data`
- Clear error messages บอกว่าต้องตั้งค่าอะไร
- Validate config ที่ startup time
- ใช้ `zod` หรือ schema validation สำหรับ config

### 3. Graceful Degradation

ไม่ crash ทั้ง `application` เมื่อ `service` ล่ม และ `return cached data` ถ้าเป็นไปได้

- ไม่ crash ทั้ง `application` เมื่อ `service` ล่ม
- Return `cached data` ถ้าเป็นไปได้
- แสดง `user-friendly error messages`
- Implement retry logic ด้วย exponential backoff
- Use circuit breaker pattern สำหรับ external services

### 4. Security by Default

ใช้ `HTTPS/TLS` เท่านั้นสำหรับ `production` และ `API keys` ต้อง `encrypted`

- `HTTPS/TLS` เท่านั้นสำหรับ `production`
- `API keys` ต้อง `encrypted` หรือใช้ `secrets manager`
- No credentials ใน `codebase`
- Use environment variables สำหรับ secrets
- Implement rate limiting สำหรับ API endpoints
- Validate และ sanitize ทุก user inputs

### 5. Observability

ใช้ `structured logging` และ `metrics` สำหรับทุก `external call`

- `Structured logging` สำหรับทุก `external call`
- `Metrics` สำหรับ `response times`, `error rates`
- Log correlation IDs สำหรับ distributed tracing
- Monitor health endpoints อย่างต่อเนื่อง
- Alert on critical errors และ performance degradation

### 6. Production Best Practices

จัดการ errors, retry logic, และ data validation

- `Try-catch blocks` สำหรับทุก `async operations`
- `Error boundaries` สำหรับ `UI components`
- `User-friendly error messages`
- `Exponential backoff` สำหรับ `transient errors`
- `Max retries limit`
- `Circuit breaker pattern`
- `Input validation` ที่ `client` แล `server`
- `Schema validation` สำหรับ `API requests`
- `SQL injection prevention`
- `XSS prevention`
- `CSRF protection` สำหรับ state-changing operations
- `Content Security Policy` สำหรับ web applications

### 7. Type Safety

ใช้ TypeScript strict mode และ proper typing

- Enable `strict mode` ใน `tsconfig.json`
- หลีกเลี่ยง `any` type ใช้ `unknown` แทน
- Use type guards สำหรับ runtime type checking
- Define proper types สำหรับ API responses
- Use `zod` สำหรับ runtime validation และ type inference

### 8. Report Format

ระบุรูปแบบรายงาน

- ทำ `/report-format-terminal` สำหรับรายงานความคืบหน้า
- ทำ `/report-format-table` สำหรับสรุปผลลัพธ์

## Expected Outcome

- `TODO`, `MOCK`, `placeholder` ถูกแปลงเป็น `production code`
- `Missing features` ถูก implement ครบถ้วน
- เชื่อมต่อกับ `server API`, `database`, และ `external services` จริง
- ไม่มี `mock implementations` ใน `production code`
- ทุกไฟล์ถูกใช้ ไม่มีไฟล์ที่ไม่ได้ใช้
- `Infrastructure` พร้อมสำหรับ `production`
- Type safety และ error handling ครบถ้วน
- Security best practices ถูกนำไปใช้
