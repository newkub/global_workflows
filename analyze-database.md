---
title: Analyze Database
description: วิเคราะห์ schema, migrations, indexes, query patterns, data integrity, connection pooling
auto_execution_mode: 3
related_workflows:
  - /deep-analyze-with-use-scripts
  - /improve-database
  - /improve-data-quality
  - /improve-data-migration
  - /improve-caching
  - /use-scripts
  - /report-format-table
---

## Goal

วิเคราะห์ database design, schema quality, query patterns และ data integrity เพื่อระบุปัญหาที่ส่งผลต่อ performance และ reliability

## Scope

Schema design, migrations, indexes, query patterns, data integrity, connection pooling, transaction management, backup strategy

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม database metrics ผ่าน scripts (schema analysis, query patterns, index usage, migration validation)

### 2. Analyze Schema Design

1. ระบุ tables ที่ไม่มี primary key
2. ระบุ missing foreign key constraints
3. ระบุ missing NOT NULL constraints ที่ควรมี
4. ระบุ denormalization ที่ไม่จำเป็น หรือ over-normalization
5. ระบุ tables ที่มี columns มากเกินไป (> 20 columns)
6. ระบุ missing indexes จาก query patterns
7. ระบุ unused indexes ที่เปลือง storage

### 3. Analyze Migrations

1. ระบุ migrations ที่ไม่ reversible (missing down migration)
2. ระบุ migrations ที่มี data loss risk
3. ระบุ missing transaction wrapping ใน migrations
4. ระบุ migrations ที่ไม่มี test coverage
5. ระบุ migration ordering issues

### 4. Analyze Query Patterns

1. ระบุ N+1 query patterns
2. ระบุ missing pagination สำหรับ large result sets
3. ระบุ over-fetching (selecting more columns than needed)
4. ระบุ missing query caching
5. ระบุ slow queries ที่ต้อง optimization
6. ระบุ missing SELECT กำหนด columns แทน SELECT *

### 5. Analyze Data Integrity

1. ระบุ missing unique constraints
2. ระบุ missing check constraints
3. ระบุ orphaned records จาก missing foreign key
4. ระบุ soft delete ที่ไม่ consistent
5. ระบุ missing audit columns (createdAt, updatedAt)

### 6. Analyze Connection Management

1. ระบุ missing connection pooling
2. ระบุ connection pool size ที่ไม่เหมาะสม
3. ระบุ missing connection timeout
4. ระบุ connection leaks (missing cleanup)
5. ระบุ missing retry logic สำหรับ connection failures

### 7. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: data integrity → schema design → query patterns → migrations → connection management

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม location และ severity

### 2. Severity Classification

- **Critical**: missing primary key, data loss risk, missing foreign key constraints
- **High**: N+1 queries, missing indexes, connection leaks, missing constraints
- **Medium**: over-fetching, missing pagination, missing audit columns
- **Low**: unused indexes, missing retry logic

### 3. Use Scripts For Batch Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอสำหรับ database analysis
- ใช้ `/use-scripts` เมื่อต้องวิเคราะห์ไฟล์มากกว่า 10 ไฟล์

### 4. ORM Awareness

- ตรวจสอบ ORM-specific patterns (Drizzle, Prisma, etc.)
- ระบุ ORM anti-patterns (raw SQL injection, missing type safety)
- ตรวจสอบ schema-to-type consistency

## Expected Outcome

- Database issues ระบุพร้อม location และ severity
- Schema design และ query optimization recommendations
- พร้อมสำหรับ `/improve-database` หรือ `/improve-data-quality`
