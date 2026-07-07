---
title: Analyze Data Migration
description: วิเคราะห์ migration strategy, zero-downtime, rollback, data seeding
auto_execution_mode: 3
related_workflows:
  - /analyze-database
  - /analyze-deployment
  - /improve-data-migration
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ data migration strategy เพื่อระบุ migration risks และ rollback gaps

## Scope

Migration strategy, zero-downtime migrations, rollback procedures, data seeding, migration testing, migration versioning, schema evolution

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม migration metrics ผ่าน scripts (migration file scan, schema diff analysis)

### 2. Check Migration Strategy

1. ระบุ missing migration versioning
2. ระบุ missing migration ordering
3. ระบุ missing migration dependencies
4. ระบุ missing migration documentation
5. ระบุ missing migration review process
6. ระบุ migrations ที่ไม่ reversible

### 3. Check Zero-Downtime Migrations

1. ระบุ migrations ที่ lock tables นานเกินไป
2. ระบุ missing expand-then-contract pattern
3. ระบุ missing backward compatibility ใน migrations
4. ระบุ missing phased migration approach
5. ระบุ missing deployment order สำหรับ migrations

### 4. Check Rollback Procedures

1. ระบุ missing rollback migrations
2. ระบุ missing rollback testing
3. ระบุ missing rollback documentation
4. ระบุ missing partial rollback capability
5. ระบุ missing rollback safety checks
6. ระบุ rollback migrations ที่ไม่สมบูรณ์

### 5. Check Data Seeding

1. ระบุ missing seed data สำหรับ development
2. ระบุ missing seed data สำหรับ testing
3. ระบุ missing seed data สำหรับ production onboarding
4. ระบุ missing seed data versioning
5. ระบุ missing seed data validation
6. ระบุ sensitive data ใน seed files

### 6. Check Migration Testing

1. ระบุ missing migration tests
2. ระบุ missing migration integration tests
3. ระบุ missing migration performance tests
4. ระบุ missing migration rollback tests
5. ระบุ missing data integrity tests หลัง migration

### 7. Check Schema Evolution

1. ระบุ missing schema versioning
2. ระบุ missing schema change tracking
3. ระบุ missing schema documentation
4. ระบุ missing schema review process
5. ระบุ missing schema deprecation policy

### 8. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: rollback → zero-downtime → migration strategy → testing → seeding → schema evolution

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม migration file และ severity

### 2. Severity Classification

- **Critical**: non-reversible migrations, missing rollback, table-locking migrations
- **High**: missing migration tests, missing zero-downtime, missing backward compatibility
- **Medium**: missing seed data, missing documentation, missing versioning
- **Low**: missing schema documentation, missing deprecation policy

### 3. Framework Awareness

- ตรวจสอบ Drizzle migration patterns
- ตรวจสอบ PostgreSQL migration strategies
- ระบุ migration tool capabilities

### 4. Use Scripts For Migration Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ `/use-scripts` สำหรับ migration file scanning
- ทำ `/validate-migration` สำหรับ migration safety checks

## Expected Outcome

- Migration risks ระบุพร้อม migration file และ severity
- Rollback และ zero-downtime issues จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-data-migration`
