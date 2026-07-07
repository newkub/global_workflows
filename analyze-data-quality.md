---
title: Analyze Data Quality
description: วิเคราะห์ data integrity, validation, consistency, orphaned records
auto_execution_mode: 3
related_workflows:
  - /analyze-database
  - /improve-data-quality
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ data quality และ integrity เพื่อระบุ data issues ที่ส่งผลต่อ application

## Scope

Data validation, integrity constraints, orphaned records, data consistency, null handling, data types, duplicate data, data migration quality, seed data quality

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม data quality metrics ผ่าน scripts (schema analysis, constraint detection, null scan)

### 2. Check Data Validation

1. ระบุ missing database constraints (NOT NULL, UNIQUE, CHECK)
2. ระบุ missing application-level validation
3. ระบุ missing Zod schema validation สำหรับ database inputs
4. ระบุ missing foreign key constraints
5. ระบุ missing enum validation

### 3. Check Data Integrity

1. ระบุ orphaned records (foreign key ที่ชี้ไปยัง deleted records)
2. ระบุ missing cascade delete rules
3. ระบุ missing transaction boundaries
4. ระบุ missing atomic operations
5. ระบุ missing referential integrity checks

### 4. Check Data Consistency

1. ระบุ inconsistent data formats (date, phone, currency)
2. ระบุ inconsistent naming conventions ใน database
3. ระบุ missing default values
4. ระบุ inconsistent boolean representation
5. ระบุ missing soft delete consistency

### 5. Check Null Handling

1. ระบุ columns ที่ allow NULL โดยไม่จำเป็น
2. ระบุ missing null checks ใน application code
3. ระบุ nullable columns ที่ไม่มี default value
4. ระบุ missing COALESCE/IFNULL ใน queries
5. ระบุ null ที่ส่งผลต่อ UI rendering

### 6. Check Duplicate Data

1. ระบุ missing unique constraints
2. ระบุ duplicate records ที่อาจเกิดจาก race conditions
3. ระบุ missing deduplication logic
4. ระบุ missing idempotency keys

### 7. Check Seed And Migration Quality

1. ระบุ seed data ที่ไม่สมจริง
2. ระบุ missing seed data สำหรับ testing
3. ระบุ migrations ที่ไม่ reversible
4. ระบุ missing data migration สำหรับ schema changes

### 8. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: integrity → validation → consistency → null handling → duplicates → seed

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม location และ severity

### 2. Severity Classification

- **Critical**: orphaned records, missing foreign keys, no transaction boundaries
- **High**: missing constraints, missing validation, inconsistent data
- **Medium**: null handling issues, missing defaults, missing deduplication
- **Low**: seed data quality, minor consistency issues

### 3. Database Awareness

- ตรวจสอบ Drizzle ORM schema definitions
- ตรวจสอบ migration files
- ระบุ database-specific constraints

### 4. Use Scripts For Data Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ schema pattern detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- Data quality issues ระบุพร้อม location และ severity
- Integrity และ validation gaps จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-data-quality`
