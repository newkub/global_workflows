---
title: Improve Database
description: ปรับปรุย database performance, schema, และ operations ครบวงจร
auto_execution_mode: 3
related_workflows:
  - improve-codebase
  - improve-scalability
  - improve-data-quality
---

## Goal

ปรับปรุย database performance, schema, และ operations ครบวงจรเพื่อให้ database efficient และ scalable

## Scope

ใช้สำหรับการ optimize queries, indexes, schema design, connection pooling, และ database operations

## Execute

### 1. Query Optimization

ปรับปรุย database queries

1. Analyze slow queries
2. Add appropriate indexes
3. Optimize JOIN operations
4. Use query caching
5. Avoid N+1 queries
6. Use prepared statements
7. Optimize subqueries

### 2. Index Strategy

วางแผนและ implement indexes

1. Identify columns ที่ต้อง indexing
2. Create indexes สำหรับ frequent queries
3. Use composite indexes สำหรับ multi-column queries
4. Monitor index usage
5. Remove unused indexes
6. Rebuild indexes ประจำ
7. Consider partial indexes

### 3. Schema Design

ปรับปรุย database schema

1. Normalize data appropriately
2. Use appropriate data types
3. Use constraints (NOT NULL, UNIQUE, FOREIGN KEY)
4. Design สำหรับ scalability
5. Document schema
6. Review schema ประจำ
7. Use migrations สำหรับ schema changes

### 4. Connection Pooling

ตั้งค่า connection pooling

1. Configure connection pool size
2. Configure connection timeout
3. Configure idle timeout
4. Monitor connection usage
5. Handle connection exhaustion
6. Use connection pooling libraries

### 5. Database Caching

ตั้งค่า database caching

1. Use query result caching
2. Use application-level caching
3. Use Redis สำหรับ caching
4. Cache frequently accessed data
5. Implement cache invalidation
6. Monitor cache hit rates

### 6. Database Monitoring

ตั้งค่า database monitoring

1. Monitor query performance
2. Monitor connection counts
3. Monitor database size
4. Monitor replication lag
5. Monitor slow queries
6. Set up alerts สำหรับ database issues

### 7. Data Archiving

Implement data archiving

1. Archive old data
2. Move cold data ไปยัง cheaper storage
3. Implement data retention policies
4. Archive logs
5. Document archiving procedures
6. Test restore จาก archives

### 8. Migration Management

จัดการ database migrations อย่างปลอดภัย

1. ตรวจสอบ migrations มี rollback strategy
2. ทำ migration testing บน staging ก่อน production
3. ตรวจสอบ backward compatibility ของ schema changes
4. ใช้ zero-downtime migrations สำหรับ large tables
5. Document migration runbook
6. ตั้งค่า migration version tracking

### 9. Database Security

รักษาความปลอดภัยของ database

1. Use least privilege access
2. Encrypt data at rest
3. Encrypt data in transit
4. Audit database access
5. Rotate credentials
6. Use parameterized queries

## Rules

### 1. Measure Before Optimize

วัด performance ก่อน optimize

- Profile queries ก่อน optimize
- Measure impact หลัง optimize
- ไม่ optimize โดยไม่มี metrics
- Focus on bottlenecks
- Use EXPLAIN สำหรับ analyze queries

### 2. Index Wisely

ใช้ indexes อย่างชาญฉลาด

- ไม่ over-index
- Index columns ที่ใช้ใน WHERE/JOIN/ORDER BY
- Monitor index usage
- Remove unused indexes
- Consider write performance

### 3. Connection Management

จัดการ connections อย่างเหมาะสม

- ไม่ leak connections
- Close connections หลังใช้
- Use connection pooling
- Monitor connection counts
- Handle connection errors

### 4. Data Integrity

รักษา data integrity

- Use constraints
- Use transactions
- Validate data ก่อน insert
- Handle errors gracefully
- Test data integrity

## Expected Outcome

- Query performance ดีขึ้นอย่างมีนัยสำคัญ
- Index strategy มีประสิทธิภาพ
- Schema design scalable และ maintainable
- Connection pooling configured
- Database caching ลด load
- Database monitoring comprehensive
- Data archiving implemented
- Database security enforced
