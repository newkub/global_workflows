---

title: Review Database

description: Review database schema, queries, migrations และ performance

auto_execution_mode: 3

related_workflows:
  - /review-data
  - /review-performance
  - /check-vulnerability

---

## Goal

Review database layer ทั้งหมดเพื่อระบุและแก้ไข issues ตาม priority

## Scope

ครอบคลุม schema design, query performance, migrations, indexing, data integrity

## Execute

### 1. Analyze Schema Structure

1. ตรวจสอบ database schema files
2. Review table relationships และ foreign keys
3. Check index usage และ coverage
4. Validate data types และ constraints

### 2. Review Query Performance

1. ตรวจสอบ slow queries
2. Review N+1 query problems
3. Check missing indexes
4. Analyze query execution plans

### 3. Check Data Integrity

1. Review foreign key constraints
2. Check unique constraints
3. Validate data consistency
4. Review transaction handling

### 4. Review Migrations

1. Check migration files completeness
2. Review rollback strategies
3. Validate migration order
4. Check data migration safety

### 5. Prioritize And Report

1. Group issues ตาม severity
2. ใช้ `/report` เพื่อสรุปผล
3. รอ user confirmation

### 6. Execute Fixes

1. Fix critical schema issues
2. Add missing indexes
3. Optimize slow queries
4. Fix data integrity issues

## Rules

### 1. Schema Design

ตรวจสอบ schema design:

- ใช้ data types ที่เหมาะสม
- มี foreign key constraints
- มี unique constraints ที่จำเป็น
- มี default values ที่เหมาะสม
- ไม่มี nullable columns โดยไม่จำเป็น

### 2. Indexing

ตรวจสอบ indexing:

- มี indexes บน foreign keys
- มี indexes บน columns ที่ใช้ค้นหาบ่อย
- ไม่มี duplicate indexes
- ไม่มี unused indexes
- ใช้ composite indexes อย่างเหมาะสม

### 3. Query Performance

ตรวจสอบ query performance:

- ไม่มี N+1 queries
- ใช้ indexes อย่างถูกต้อง
- ไม่มี SELECT *
- ใช้ pagination อย่างเหมาะสม
- ใช้ caching ที่จำเป็น

### 4. Data Integrity

ตรวจสอบ data integrity:

- มี foreign key constraints
- มี unique constraints
- มี check constraints
- ใช้ transactions อย่างถูกต้อง
- มี cascade rules ที่ชัดเจน

### 5. Migration Safety

ตรวจสอบ migration safety:

- มี rollback scripts
- ไม่เสียข้อมูล
- ทำใน transaction
- มี backup strategy
- ทดสอบบน staging ก่อน

## Expected Outcome

- Database schema ถูกต้องและ optimized
- Queries มี performance ดี
- Data integrity ถูกรักษา
- Migrations ปลอดภัย
- ไม่มี slow queries

## Common Mistakes

ข้อผิดพลาดที่พบบ่อย:

- ไม่มี indexes บน foreign keys
- ใช้ SELECT * ทุกที่
- ไม่มี foreign key constraints
- Migration ไม่มี rollback
- ไม่ใช้ transactions

## Anti-Patterns

รูปแบบที่ไม่ควรทำ:

- ❌ เก็บ JSON ใน database โดยไม่จำเป็น
- ❌ ไม่มี indexes บน columns ที่ค้นหา
- ❌ N+1 queries ทุกที่
- ❌ Migration ทำเสียข้อมูล
- ❌ ไม่มี backup ก่อน migration

