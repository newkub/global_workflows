---
title: Analyze Backend
description: วิเคราะห์ backend: API, rate limiting, network, database, data quality, migration, search, caching, idempotency, pagination
auto_execution_mode: 3
related_workflows:
  - /analyze-api
  - /analyze-rate-limiting
  - /analyze-network
  - /analyze-database
  - /analyze-data-quality
  - /analyze-data-migration
  - /analyze-search
  - /analyze-caching
  - /analyze-idempotency
  - /analyze-pagination
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ backend และ data layer quality ของ codebase

## Scope

API design, rate limiting, network resilience, database, data quality, data migration, search, caching, idempotency, pagination

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม backend metrics ผ่าน scripts (API scan, database analysis, query detection)

### 2. Analyze API Layer

1. ทำ `/analyze-api` วิเคราะห์ API design, conventions, versioning
2. ทำ `/analyze-rate-limiting` วิเคราะห์ rate limiting, throttling, DDoS protection
3. ทำ `/analyze-idempotency` วิเคราะห์ idempotency keys, duplicate prevention, safe retries

### 3. Analyze Network And Data

1. ทำ `/analyze-network` วิเคราะห์ API client resilience, retry, timeout, offline handling
2. ทำ `/analyze-database` วิเคราะห์ schema, migrations, indexes, queries
3. ทำ `/analyze-data-quality` วิเคราะห์ data integrity, validation, consistency, orphaned records
4. ทำ `/analyze-data-migration` วิเคราะห์ migration strategy, zero-downtime, rollback, data seeding

### 4. Analyze Performance Layer

1. ทำ `/analyze-search` วิเคราะห์ search indexing, relevance, filtering, autocomplete
2. ทำ `/analyze-caching` วิเคราะห์ cache layers, invalidation strategy, cache hit ratio, CDN
3. ทำ `/analyze-pagination` วิเคราะห์ cursor/infinite/page-based, page size, total count

### 5. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: database → data quality → data migration → API → rate limiting → idempotency → network → caching → search → pagination

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม endpoint และ severity

### 2. Conditional Execution

- ถ้า project ไม่มี API ให้ข้าม `/analyze-api`, `/analyze-rate-limiting` และ `/analyze-idempotency`
- ถ้า project ไม่มี network communication ให้ข้าม `/analyze-network`
- ถ้า project ไม่มี database ให้ข้าม `/analyze-database`, `/analyze-data-quality` และ `/analyze-data-migration`
- ถ้า project ไม่มี search ให้ข้าม `/analyze-search`
- ถ้า project ไม่มี cache layer ให้ข้าม `/analyze-caching`
- ถ้า project ไม่มี list views ให้ข้าม `/analyze-pagination`

### 3. Severity Classification

- **Critical**: missing indexes, data integrity issues, no rate limiting, no idempotency
- **High**: slow queries, missing migration rollback, missing network retry
- **Medium**: inconsistent API naming, missing cache invalidation, missing cursor pagination
- **Low**: missing autocomplete, missing cache hit ratio, missing page size config

### 4. Use Scripts For Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ API pattern detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

### 5. Non-Redundancy

- แต่ละ sub-workflow มี scope ที่ไม่ทับซ้อนกัน
- ใช้ references แทนการเขียนซ้ำเนื้อหาจาก sub-workflows

## Expected Outcome

- Backend gaps ระบุพร้อม endpoint และ severity
- พร้อมสำหรับ orchestrator consolidation หรือ `/improve-backend`
