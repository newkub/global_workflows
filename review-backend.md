---
title: Review Backend
description: Orchestrator สำหรับ review backend ครอบคลุม API, service, webhooks, queue, workers, database, search, content, file upload
auto_execution_mode: 3
related:
  - /review-api
  - /review-service
  - /review-webhooks
  - /review-queue
  - /review-workers
  - /review-content
  - /review-file-upload
  - /review-database
  - /review-migrations
  - /review-data-integrity
  - /review-search
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Orchestrate backend review ครอบคลุมทุก dimension ของ backend ผ่าน sub-workflows พร้อม aggregate findings

## Scope

backend orchestrator สำหรับ: API handlers, service layer, webhooks, queue, workers, content, file upload, database, migrations, data integrity, search

## Execute

### 1. Run Sub-Workflows

ทำ review-* sub-workflows ตามลำดับ ถ้าพบ critical issues ให้หยุดและ validate ก่อนดำเนินต่อ

1. ทำ `/review-api` เพื่อ review handlers, validation, middleware, API design, webhooks, SDK
2. ทำ `/review-service` เพื่อ review business logic, data flow, service boundaries, transaction handling
3. ทำ `/review-webhooks` เพื่อ review signature verification, idempotency, retry logic, payload validation
4. ทำ `/review-queue` เพื่อ review job processing, retry, dead letter queue, worker concurrency, backpressure
5. ทำ `/review-workers` เพื่อ review background jobs, cron, scheduled tasks, worker health monitoring
6. ทำ `/review-content` เพื่อ review markdown, rich text, sanitization, XSS prevention, content rendering
7. ทำ `/review-file-upload` เพื่อ review file validation, size limits, type checking, storage, virus scan
8. ทำ `/review-database` เพื่อ review schema, migrations, data integrity, data quality, query patterns
9. ทำ `/review-migrations` เพื่อ review migration safety, rollback capability, data preservation, ordering
10. ทำ `/review-data-integrity` เพื่อ review DB constraints, referential integrity, orphaned records, cascade rules
11. ทำ `/review-search` เพื่อ review indexing, relevance, filtering, autocomplete, pagination

### 2. Validate Findings

1. ทำ `/validate` สำหรับ validate issues จากทุก sub-workflow
2. จัดลำดับการ validate ตาม severity: Critical → High → Medium → Low

### 3. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง aggregate findings จากทุก sub-workflow
3. ทำ `/suggest-next-action`

## Rules

### 1. Skip Conditions

- ถ้า project ไม่มี API layer ให้ข้าม `/review-api`
- ถ้า project ไม่มี service layer ให้ข้าม `/review-service`
- ถ้า project ไม่มี webhooks ให้ข้าม `/review-webhooks`
- ถ้า project ไม่มี queue system ให้ข้าม `/review-queue`
- ถ้า project ไม่มี background workers ให้ข้าม `/review-workers`
- ถ้า project ไม่มี user-generated content ให้ข้าม `/review-content`
- ถ้า project ไม่มี file upload ให้ข้าม `/review-file-upload`
- ถ้า project ไม่มี database ให้ข้าม `/review-database`, `/review-migrations` และ `/review-data-integrity`
- ถ้า project ไม่มี search functionality ให้ข้าม `/review-search`

### 2. Delegation

- Orchestrator เรียก sub-workflows เท่านั้น ไม่ทำ review เอง
- ไม่ duplicate เนื้อหา sub-workflows

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง aggregate findings จากทุก backend sub-workflow
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
