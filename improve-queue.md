---
title: Improve Queue
description: ปรับปรุง background jobs, task queues, worker management และ dead letter handling
auto_execution_mode: 3
related_workflows:
  - improve-backend-services
  - improve-reliability
  - improve-observability
  - improve-scalability
---

## Goal

ปรับปรุง queue system ทั้ง job scheduling, worker management, retry strategy, และ dead letter handling

## Scope

ใช้สำหรับ project ที่มี background jobs หรือ task queues ต้องการปรับปรุง reliability และ throughput

## Execute

### 1. Analyze Current Queue System

วิเคราะห์ queue system ปัจจุบัน

1. ตรวจสอบ queue provider (BullMQ, Redis Queue, SQS, Cloudflare Queues)
2. ตรวจสอบ job types และ priorities
3. ตรวจสอบ worker configuration
4. ตรวจสอบ retry และ error handling
5. ตรวจสอบ queue monitoring

### 2. Job Design

ปรับปรุง job design

1. ใช้ idempotent jobs สำหรับ safe retries
2. ใช้ job priority สำหรับ important jobs
3. ตั้งค่า job timeout ที่เหมาะสม
4. ใช้ job batching สำหรับ small tasks
5. แยก CPU-intensive จาก I/O jobs
6. ตั้งค่า job deduplication

### 3. Worker Management

ปรับปรุง worker management

1. ตั้งค่า worker concurrency ที่เหมาะสม
2. ใช้ auto-scaling สำหรับ variable load
3. ตั้งค่า graceful shutdown
4. ตั้งค่า worker health checks
5. จัดการ stalled jobs
6. ใช้ worker specialization สำหรับ different job types

### 4. Retry Strategy

ปรับปรุง retry strategy

1. ใช้ exponential backoff สำหรับ retries
2. ตั้งค่า max retry attempts
3. ใช้ jitter สำหรับ avoid thundering herd
4. Retry เฉพาะ transient errors
5. ไม่ retry สำหรับ permanent failures
6. ทำ `/improve-reliability` สำหรับ resilience patterns

### 5. Dead Letter Queue

ตั้งค่า dead letter queue

1. สร้าง dead letter queue สำหรับ failed jobs
2. ตั้งค่า max retries ก่อน move to DLQ
3. สร้าง DLQ inspection และ replay
4. ตั้งค่า DLQ alerts
5. สร้าง DLQ cleanup policy
6. ตั้งค่า manual retry จาก DLQ

### 6. Queue Monitoring

ติดตาม queue health

1. ติดตาม queue size และ throughput
2. ติดตาม job processing time
3. ติดตาม failure rate และ retry rate
4. ติดตาม worker utilization
5. ตั้งค่า alerts สำหรับ queue backlog
6. ทำ `/improve-observability` สำหรับ metrics integration

## Rules

### 1. Idempotent Jobs

- ทุก job ต้อง idempotent เพื่อ safe retry
- ใช้ idempotency keys สำหรับ deduplication
- ไม่มี side effects ที่ irreversible ใน jobs
- ตรวจสอบ state ก่อน process

### 2. Graceful Degradation

- Queue failure ไม่ crash application
- ใช้ fallback สำหรับ critical jobs
- ตั้งค่า circuit breaker สำหรับ external service jobs
- Monitor และ alert สำหรับ queue issues

### 3. Right-Sized Workers

- ไม่ over-provision workers
- ใช้ auto-scaling ตาม queue depth
- แยก worker pools ตาม job type
- ตั้งค่า resource limits ต่อ worker

## Expected Outcome

- Queue system reliable พร้อม idempotent jobs
- Worker management มีประสิทธิภาพ
- Retry strategy ปลอดภัย ไม่ thundering herd
- Dead letter queue จัดการ failed jobs
- Queue monitoring ครบถ้วน
- Queue throughput สูง และ latency ต่ำ
