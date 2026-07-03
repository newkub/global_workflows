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

- Analyze slow queries
- Add appropriate indexes
- Optimize JOIN operations
- Use query caching
- Avoid N+1 queries
- Use prepared statements
- Optimize subqueries

### 2. Index Strategy

วางแผนและ implement indexes

- Identify columns ที่ต้อง indexing
- Create indexes สำหรับ frequent queries
- Use composite indexes สำหรับ multi-column queries
- Monitor index usage
- Remove unused indexes
- Rebuild indexes ประจำ
- Consider partial indexes

### 3. Schema Design

ปรับปรุย database schema

- Normalize data appropriately
- Use appropriate data types
- Use constraints (NOT NULL, UNIQUE, FOREIGN KEY)
- Design สำหรับ scalability
- Document schema
- Review schema ประจำ
- Use migrations สำหรับ schema changes

### 4. Connection Pooling

ตั้งค่า connection pooling

- Configure connection pool size
- Configure connection timeout
- Configure idle timeout
- Monitor connection usage
- Handle connection exhaustion
- Use connection pooling libraries

### 5. Database Caching

ตั้งค่า database caching

- Use query result caching
- Use application-level caching
- Use Redis สำหรับ caching
- Cache frequently accessed data
- Implement cache invalidation
- Monitor cache hit rates

### 6. Database Monitoring

ตั้งค่า database monitoring

- Monitor query performance
- Monitor connection counts
- Monitor database size
- Monitor replication lag
- Monitor slow queries
- Set up alerts สำหรับ database issues

### 7. Data Archiving

Implement data archiving

- Archive old data
- Move cold data ไปยัง cheaper storage
- Implement data retention policies
- Archive logs
- Document archiving procedures
- Test restore จาก archives

### 8. Database Security

รักษาความปลอดภัยของ database

- Use least privilege access
- Encrypt data at rest
- Encrypt data in transit
- Audit database access
- Rotate credentials
- Use parameterized queries

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
