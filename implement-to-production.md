---
title: Implement To Production
description: แปลง TODO, MOCK, placeholder เป็น production code จริง
auto_execution_mode: 3
related_workflows:
  - /deep-analyze
  - /plan
  - /refactor
  - /implement-comment-todo
  - /loop-until-complete
  - /run-test
  - /restructure
  - /separate-of-concern
  - /improve-side-effect
  - /refactor-long-files-to-single-responsibility
  - /refactor-file-to-single-responsibility
  - /relocation
  - /improve-naming
  - /edit-relative
  - /use-scripts
---

## Goal

แปลง TODO, MOCK, placeholder เป็น production code จริงที่เชื่อมต่อกับ infrastructure จริง

## Scope

ครอบคลุมการแปลง TODO, MOCK, FAKE, STUB implementations และ placeholder code เป็น production code ที่เชื่อมต่อกับ database, API, และ external services จริง รวมถึงการตรวจสอบ infrastructure และการทดสอบ end-to-end

## Execute

### 1. Project Analysis

วิเคราะห์โปรเจกต์ก่อนเริ่ม implement เพื่อเข้าใจโครงสร้างและ dependencies

1. ทำ `/analyze-all-files` เพื่ออ่านและวิเคราะห์ไฟล์ทั้งหมด
2. ทำ `/deep-analyze` เพื่อวิเคราะห์โปรเจกต์อย่างละเอียด
3. ทำ `/plan` เพื่อวางแผนงานอย่างเป็นระบบ
4. ระบุ TODO, MOCK, placeholder ทั้งหมดที่ต้องแปลง
5. จัดลำดับความสำคัญของงาน

### 2. Infrastructure Verification

ตรวจสอบว่า `infrastructure` พร้อมสำหรับ `production`

1. `Database`: connection pool, indexes, migrations, backup strategy
2. `API Server`: endpoints, rate limiting, CORS, authentication
3. `Environment Variables`: required variables, secrets, correct values
4. `Network`: connectivity, firewall rules, DNS resolution
5. `SSL/TLS`: certificates validity, HTTPS enforcement
6. `External Services`: credentials, API keys, rate limits
7. `Secrets Management`: secrets manager, encryption keys
8. `Monitoring`: metrics collection, alerting rules
9. `Logging`: log aggregation, log levels
10. `CDN`: distribution, cache rules
11. `Storage`: buckets/containers, access policies
12. `Cache`: cache server, eviction policy
13. `Queue`: queue workers, retry policy
14. `Load Balancing`: load balancer, health checks
15. `Auto-scaling`: scaling policies, triggers
16. `Health Checks`: health endpoints, graceful shutdown

### 3. Seed Database

สร้างและรัน `seed script` เพื่อเติมข้อมูลจำลองสำหรับการทดสอบ

1. สร้าง `seed script` สำหรับทุก `database tables`
2. เพิ่ม `bcrypt` หรือ `password hashing library`
3. ติดตั้ง `dependencies` ที่จำเป็น
4. รัน `seed script` เพื่อเติมข้อมูลจำลอง
5. ตรวจสอบว่าข้อมูลถูกเติมอย่างถูกต้อง

### 4. Implement Todo

แปลง `TODO`, `FIXME`, `HACK` และ `placeholder code` เป็น `production code`

1. ทำ `/implement-comment-todo` เพื่อแปลง `TODO comments` และ `placeholder functions`
2. ทำ `/loop-until-complete` จนกว่าจะไม่มี `TODO` เหลือ
3. ทำ `/run-test` เพื่อทดสอบว่าผ่านทั้งหมด

### 5. Implementation

Implement `production code` - เชื่อมต่อกับ `infrastructure` จริง

1. `Database`: connection pool, migrations, repositories (แทน InMemory)
2. `Server API`: routes, handlers, validation, rate limiting
3. `Client`: replace mock with API calls, loading states, retry
4. `External services`: production endpoints, authentication, circuit breaker
5. `Error handling`: try-catch blocks, error boundaries, user-friendly messages
6. `Security`: authentication, authorization, encryption

### 6. Refactor Code

ปรับปรุงคุณภาพโค้ดด้วย `systematic refactoring`

1. ทำ `/refactor` เพื่อปรับปรุงคุณภาพโค้ด
2. ทำ `/restructure` เพื่อปรับ `physical file/folder structure`
3. ทำ `/separate-of-concern` เพื่อแยก `logical concerns`
4. ทำ `/improve-side-effect` เพื่อแยก `pure functions` จาก `side effects`
5. ทำ `/refactor-long-files-to-single-responsibility` สำหรับไฟล์ > 250 บรรทัด
6. ทำ `/edit-relative` เพื่ออัปเดท references ทั้งหมด

### 7. Final Verification

ตรวจสอบว่าไม่มีสิ่งใดเหลือเป็น `mock`

1. ค้นหา `MOCK`, `FAKE`, `STUB implementations` อีกครั้ง
2. ทดสอบ `end-to-end flows` ว่าใช้ `production endpoints`
3. Verify `monitoring` แล `alerting` ทำงาน
4. ทดสอบ `graceful shutdown`
5. Verify `security policies` แล `compliance`

## Rules

### 1. No Mocks in Production

แทนที่ทุก `mock implementations` ด้วย `real database queries` และ `actual API calls`

- ไม่มี `mock implementations` ใน `production code`
- แทนที่ทุก `mock data` ด้วย `real database queries`
- แทนที่ทุก `simulated delay` ด้วย `actual API calls`

### 2. Fail Fast on Missing Config

Throw error ถ้า `required environment variables` ไม่มี และห้าม `silently fall back`

- Throw error ถ้า `required environment variables` ไม่มี
- ไม่ `silently fall back` ไปใช้ `mock data`
- Clear error messages บอกว่าต้องตั้งค่าอะไร

### 3. Graceful Degradation

ไม่ crash ทั้ง `application` เมื่อ `service` ล่ม และ `return cached data` ถ้าเป็นไปได้

- ไม่ crash ทั้ง `application` เมื่อ `service` ล่ม
- Return `cached data` ถ้าเป็นไปได้
- แสดง `user-friendly error messages`

### 4. Security by Default

ใช้ `HTTPS/TLS` เท่านั้นสำหรับ `production` และ `API keys` ต้อง `encrypted`

- `HTTPS/TLS` เท่านั้นสำหรับ `production`
- `API keys` ต้อง `encrypted` หรือใช้ `secrets manager`
- No credentials ใน `codebase`

### 5. Observability

ใช้ `structured logging` และ `metrics` สำหรับทุก `external call`

- `Structured logging` สำหรับทุก `external call`
- `Metrics` สำหรับ `response times`, `error rates`

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


## Expected Outcome

- `TODO`, `MOCK`, `placeholder` ถูกแปลงเป็น `production code`
- เชื่อมต่อกับ `server API`, `database`, และ `external services` จริง
- ไม่มี `mock implementations` ใน `production code`
- `Infrastructure` พร้อมสำหรับ `production`

