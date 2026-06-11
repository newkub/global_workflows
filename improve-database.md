---
title: Improve Database
description: ปรับปรุง database schema, queries, indexing และ relationships
auto_execution_mode: 3
related_workflows:
  - /check-configuration
  - /improve-caching-strategy
---

## Goal

ปรับปรุง database schema, queries, indexing, และ relationships ให้มีประสิทธิภาพสูงสุด

## Scope

ใช้สำหรับปรับปรุงทุกประเภท database (SQL, NoSQL, in-memory)

## Execute

### 1. Analyze Database Performance

วิเคราะห์ปัญหา performance ของ database

1. ทำ `/check-configuration` เพื่อตรวจสอบ database config
2. วิเคราะห์ slow queries ด้วย database monitoring tools
3. ระบุ queries ที่ใช้เวลานาน
4. ตรวจสอบ indexing strategy ปัจจุบัน
5. วิเคราะห์ table sizes และ growth patterns
6. ตรวจสอบ connection pool usage

### 2. Optimize Schema Design

ปรับปรุม database schema

1. ปรับปรุม data types ให้เหมาะสมกับข้อมูลจริง
2. ปรับปรุม table relationships และ foreign keys
3. ปรับปรุม normalization หรือ denormalization
4. เพิ่ม constraints ที่เหมาะสม (NOT NULL, CHECK, UNIQUE)
5. ลบ unused columns และ tables
6. ปรับปรุม enum types หรือ lookup tables

### 3. Optimize Indexing

ปรับปรุม indexing strategy

1. เพิ่ม indexes สำหรับ queries ที่ใช้บ่อย
2. สร้าง composite indexes สำหรับ multi-column filters
3. ใช้ partial indexes สำหรับ conditional queries
4. ลบ indexes ที่ไม่ได้ใช้
5. ใช้ covering indexes เพื่อ reduce table scans
6. วิเคราะห์ index fragmentation และ rebuild

### 4. Optimize Queries

ปรับปรุม SQL queries

1. Rewrite slow queries ให้มีประสิทธิภาพมากขึ้น
2. ใช้ JOIN อย่างเหมาะสม (INNER vs LEFT vs RIGHT)
3. ใช้ subqueries หรือ CTEs อย่างถูกต้อง
4. ปรับปรุม WHERE clauses ให้ใช้ indexes
5. ใช้ LIMIT และ pagination อย่างเหมาะสม
6. ใช้ prepared statements สำหรับ security

### 5. Optimize Transactions

ปรับปรุม transaction management

1. ลด transaction scope ให้เล็กที่สุด
2. หลีกเลี่ยง nested transactions
3. ใช้ optimistic locking แทน pessimistic locking ถ้าเป็นไปได้
4. ตั้ง transaction isolation level อย่างเหมาะสม
5. ใช้ batch operations สำหรับ bulk inserts/updates
6. จัดการ deadlocks และ timeouts

### 6. Optimize Data Types

ปรับปรุม data types

1. ใช้ data types ที่เล็กที่สุด (TINYINT vs INT vs BIGINT)
2. ใช้ VARCHAR ด้วยความยาวที่เหมาะสม
3. ใช้ TEXT/BLOB อย่างระมัดระมัส
4. ใช้ JSON สำหรับ semi-structured data
5. ใช้ DATE/DATETIME หรือ TIMESTAMP อย่างถูกต้อง
6. ใช้ ENUM หรือ lookup tables สำหรับ fixed values

### 7. Implement Caching

ใช้ caching สำหรับ database

1. ทำ `/improve-caching-strategy` เพื่อตั้งค่า caching
2. Implement query result caching
3. ใช้ materialized views สำหรับ aggregate queries
4. ใช้ read replicas สำหรับ read-heavy workloads
5. Implement cache invalidation ที่ถูกต้อง
6. Monitor cache hit rates

### 8. Optimize Connection Pooling

ปรับปรุม connection pooling

1. ตั้งค่า connection pool size อย่างเหมาะสม
2. ตรวจสอบ connection leaks
3. ใช้ connection timeouts อย่างเหมาะสม
4. Monitor connection pool metrics
5. ใช้ connection reuse อย่างเหมาะสม
6. จัดการ idle connections

## Rules

### 1. Schema Design

ออกแบบ schema ให้มีประสิทธิภาพ

- ใช้ data types ที่เหมาะสม
- ปรับปรุง normalization อย่างเกินไป
- ใช้ constraints อย่างเหมาะสม
- หลีกเลี่ยย columns ที่ไม่จำเป็น
- ใช้ relationships ที่ถูกต้อง

### 2. Indexing Strategy

ใช้ indexes อย่างมีประสิทธิภาพ

- Index columns ที่ใช้ใน WHERE, JOIN, ORDER BY
- ใช้ composite indexes อย่างเหมาะสม
- ลบ indexes ที่ไม่ได้ใช้
- Monitor index usage
- หลีกเลี่ยย over-indexing

### 3. Query Optimization

เขียน queries ที่มีประสิทธิภาพ

- ใช้ EXPLAIN วิเคราะห์ query plans
- หลีกเลี่ยย SELECT *
- ใช้ JOIN อย่างเหมาะสม
- ใช้ LIMIT และ pagination
- ใช้ prepared statements

### 4. Transaction Management

จัดการ transactions อย่างถูกต้อง

- ลด transaction scope
- หลีกเลี่ยย long-running transactions
- จัดการ deadlocks
- ใช้ isolation level ที่เหมาะสม
- Monitor transaction performance

### 5. Monitoring

ตรวจสอบ database performance อย่างสม่ำเสมอ

- Monitor slow queries
- Monitor connection pool
- Monitor table sizes
- Monitor index usage
- Monitor replication lag

## Expected Outcome

- Database schema ที่ optimized
- Indexes ที่มีประสิทธิภาพ
- Queries ที่เร็วขึ้น
- Transactions ที่เสถียร
- Connection pooling ที่ optimized
- Monitoring ที่ครบถ้วน
