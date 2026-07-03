---
title: Realize Implementation
description: แปลง TODO, MOCK, placeholder เป็น production code จริง
auto_execution_mode: 3
related_workflows:
  - /analyze-project
  - /plan-task
  - /refactor-workspace
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
  - /no-hard-code
  - /follow-code-quality
---

## Goal

แปลง TODO, MOCK, placeholder เป็น production code จริงที่เชื่อมต่อกับ infrastructure จริง

## Scope

ครอบคลุมการแปลง TODO, MOCK, FAKE, STUB implementations และ placeholder code เป็น production code ที่เชื่อมต่อกับ database, API, และ external services จริง รวมถึงการตรวจสอบ infrastructure และการทดสอบ end-to-end

## Execute

### 1. Project Analysis

วิเคราะห์โปรเจกต์ก่อนเริ่ม implement เพื่อเข้าใจโครงสร้างและ dependencies

- ทำ `/analyze-all-files` เพื่ออ่านและวิเคราะห์ไฟล์ทั้งหมด
- ทำ `/analyze-project` เพื่อวิเคราะห์โปรเจกต์อย่างละเอียด
- ทำ `/plan-task` เพื่อวางแผนงานอย่างเป็นระบบ
- ระบุ TODO, MOCK, placeholder ทั้งหมดที่ต้องแปลง
- จัดลำดับความสำคัญของงาน

### 2. Infrastructure Verification

ตรวจสอบว่า `infrastructure` พร้อมสำหรับ `production`

- `Database`: connection pool, indexes, migrations, backup strategy
- `API Server`: endpoints, rate limiting, CORS, authentication
- `Environment Variables`: required variables, secrets, correct values
- `Network`: connectivity, firewall rules, DNS resolution
- `SSL/TLS`: certificates validity, HTTPS enforcement
- `External Services`: credentials, API keys, rate limits
- `Secrets Management`: secrets manager, encryption keys
- `Monitoring`: metrics collection, alerting rules
- `Logging`: log aggregation, log levels
- `CDN`: distribution, cache rules
- `Storage`: buckets/containers, access policies
- `Cache`: cache server, eviction policy
- `Queue`: queue workers, retry policy
- `Load Balancing`: load balancer, health checks
- `Auto-scaling`: scaling policies, triggers
- `Health Checks`: health endpoints, graceful shutdown

### 3. Seed Database

สร้างและรัน `seed script` เพื่อเติมข้อมูลจำลองสำหรับการทดสอบ

- สร้าง `seed script` สำหรับทุก `database tables`
- เพิ่ม `bcrypt` หรือ `password hashing library`
- ติดตั้ง `dependencies` ที่จำเป็น
- รัน `seed script` เพื่อเติมข้อมูลจำลอง
- ตรวจสอบว่าข้อมูลถูกเติมอย่างถูกต้อง

### 4. Implement Todo

แปลง `TODO`, `FIXME`, `HACK` และ `placeholder code` เป็น `production code`

- ทำ `/implement-comment-todo` เพื่อแปลง `TODO comments` และ `placeholder functions`
- ทำ `/loop-until-complete` จนกว่าจะไม่มี `TODO` เหลือ
- ทำ `/run-test` เพื่อทดสอบว่าผ่านทั้งหมด

### 5. Realize Missing Features

แปลง `missing features` ที่ยังไม่ได้ implement เป็น `production code`

- ทำ `/idea-features` เพื่อวิเคราะห์และสร้างไอเดีย features ที่ขาด
- ระบุ features ที่ยังไม่ได้ implement จาก requirements
- จัดลำดับความสำคัญของ missing features
- Implement missing features ตามลำดับความสำคัญ
- ทำ `/loop-until-complete` จนกว่าทุก features ถูก implement
- ทำ `/run-test` เพื่อทดสอบว่าผ่านทั้งหมด

### 6. Implementation

Implement `production code` - เชื่อมต่อกับ `infrastructure` จริง

- `Database`: connection pool, migrations, repositories (แทน InMemory)
- `Server API`: routes, handlers, validation, rate limiting
- `Client`: replace mock with API calls, loading states, retry
- `External services`: production endpoints, authentication, circuit breaker
- `Error handling`: try-catch blocks, error boundaries, user-friendly messages
- `Security`: authentication, authorization, encryption

### 7. Refactor Code

ปรับปรุงคุณภาพโค้ดด้วย `systematic refactoring`

- ทำ `/refactor-workspace` เพื่อปรับปรุงคุณภาพโค้ด
- ทำ `/restructure` เพื่อปรับ `physical file/folder structure`
- ทำ `/separate-of-concern` เพื่อแยก `logical concerns`
- ทำ `/improve-side-effect` เพื่อแยก `pure functions` จาก `side effects`
- ทำ `/refactor-long-files-to-single-responsibility` สำหรับไฟล์ > 250 บรรทัด
- ทำ `/edit-relative` เพื่ออัปเดท references ทั้งหมด

### 8. Final Verification

ตรวจสอบว่าไม่มีสิ่งใดเหลือเป็น `mock`

- ค้นหา `MOCK`, `FAKE`, `STUB implementations` อีกครั้ง
- ทดสอบ `end-to-end flows` ว่าใช้ `production endpoints`
- Verify `monitoring` แล `alerting` ทำงาน
- ทดสอบ `graceful shutdown`
- Verify `security policies` แล `compliance`
- ทำ `/run-lint` เพื่อตรวจสอบว่าทุกไฟล์ถูกใช้
- ทำ `/check-unsued-files` เพื่อตรวจสอบว่าไม่มีไฟล์ที่ไม่ได้ใช้

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

### 7. Report Format

ระบุรูปแบบรายงาน

- ทำ `/report-format-progress` สำหรับรายงานความคืบหน้า
- ทำ `/report-format-summary` สำหรับสรุปผลลัพธ์

## Expected Outcome

- `TODO`, `MOCK`, `placeholder` ถูกแปลงเป็น `production code`
- `Missing features` ถูก implement ครบถ้วน
- เชื่อมต่อกับ `server API`, `database`, และ `external services` จริง
- ไม่มี `mock implementations` ใน `production code`
- ทุกไฟล์ถูกใช้ ไม่มีไฟล์ที่ไม่ได้ใช้
- `Infrastructure` พร้อมสำหรับ `production`

