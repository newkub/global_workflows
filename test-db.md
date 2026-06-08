---
title: Test DB
description: ทดสอบ database queries, migrations และ data integrity ให้ครบถ้วน
auto_execution_mode: 3
---

## Goal

ทดสอบ database layer ให้ครบถ้วน รวม SQL queries, migrations, data integrity, constraints และ transaction handling

## Execute

### 1. Setup Test Database

1. สร้าง test database
2. รัน migrations
3. Setup seed data
4. กำหนด complex queries และ critical tables

### 2. Create Test Utilities

1. Build DB wrapper
2. Create transaction helper
3. Add factory functions
4. Setup cleanup

### 3. Write CRUD Tests

1. Test Create operations
2. Test Read operations
3. Test Update operations
4. Test Delete operations

### 4. Write Query Tests

1. Test simple queries
2. Test joins
3. Test aggregations
4. Test subqueries

### 5. Write Migration Tests

1. Test up migrations
2. Test down migrations
3. Test data migration
4. Check constraints

### 6. Write Transaction Tests

1. Test commit
2. Test rollback
3. Test isolation
4. Test error handling

### 7. Run and Verify Tests

1. Execute all DB tests
2. Verify constraints และ foreign keys
3. Validate types และ indexes
4. Measure query performance

## Rules

1. Tests ใช้ transactions แล้ว rollback เพื่อ isolation
2. ใช้ test data ที่ realistic ไม่ใช่ dummy data
3. Cleanup test data หลังแต่ละ test
4. Queries ต้อง efficient และ cover edge cases
5. หลีกเลี่ยง race conditions ใน concurrent operations

## Expected Outcome

1. ครอบคลุมทุก queries และ tables
2. Migration tests ครบถ้วน
3. Transaction isolation ทดสอบแล้ว
4. Factory functions พร้อมใช้
5. CI integration ready
