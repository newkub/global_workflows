---
title: Analyze Queue
description: วิเคราะห์ background jobs, task queues, worker management, dead letter
auto_execution_mode: 3
related_workflows:
  - /analyze-reliability
  - /improve-queue
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ background job และ task queue patterns เพื่อระบุ reliability issues

## Scope

Background jobs, task queues, worker management, job scheduling, retry strategy, dead letter handling, job priorities, job timeouts, queue monitoring

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม queue metrics ผ่าน scripts (job pattern detection, worker scan, scheduling analysis)

### 2. Check Queue Infrastructure

1. ระบุ missing queue system (Redis Queue, Cloudflare Queues, BullMQ)
2. ระบุ missing job persistence
3. ระบุ missing queue namespacing
4. ระบุ missing queue priority levels
5. ระบุ missing queue concurrency control

### 3. Check Job Design

1. ระบุ missing job idempotency
2. ระบุ missing job input validation
3. ระบุ jobs ที่ long-running โดยไม่มี progress tracking
4. ระบุ missing job cancellation mechanism
5. ระบุ missing job result callback

### 4. Check Retry Strategy

1. ระบุ missing retry logic สำหรับ failed jobs
2. ระบุ missing exponential backoff
3. ระบุ missing max retry limit
4. ระบุ missing retry-on conditions
5. ระบุ missing dead letter queue

### 5. Check Worker Management

1. ระบุ missing worker scaling
2. ระบุ missing worker health checks
3. ระบุ missing graceful shutdown
4. ระบุ missing worker crash recovery
5. ระบุ missing worker concurrency tuning

### 6. Check Job Scheduling

1. ระบุ missing cron job scheduling
2. ระบุ missing delayed jobs
3. ระบุ missing recurring job management
4. ระบุ missing job scheduling conflicts
5. ระบุ missing timezone handling ใน scheduling

### 7. Check Queue Monitoring

1. ระบุ missing queue depth monitoring
2. ระบุ missing job failure alerting
3. ระบุ missing job processing time metrics
4. ระบุ missing queue backlog alerts
5. ระบุ missing dead letter queue monitoring

### 8. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: retry → dead letter → worker → infrastructure → scheduling → monitoring

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม location และ severity

### 2. Severity Classification

- **Critical**: no queue system, no retry logic, no dead letter handling
- **High**: missing worker health checks, missing graceful shutdown, no idempotency
- **Medium**: missing job priorities, missing scheduling, missing monitoring
- **Low**: missing job callbacks, missing timezone handling

### 3. Framework Awareness

- ตรวจสอบ Cloudflare Queues integration
- ตรวจสอบ Workflows สำหรับ durable execution
- ระบุ framework-specific queue solutions

### 4. Use Scripts For Queue Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ job pattern detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- Queue reliability gaps ระบุพร้อม location และ severity
- Retry และ worker management issues จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-queue`
