---
title: Improve Data Quality
description: ปรับปรุงคุณภาพข้อมูล และ data management ครบวงจร
auto_execution_mode: 3
related_workflows:
  - improve-codebase
  - improve-database
---

## Goal

ปรับปรุงคุณภาพข้อมูล และ data management ครบวงจรเพื่อให้ข้อมูลถูกต้องและเชื่อถือได้

## Scope

ใช้สำหรับการตั้งค่า data validation, data migration, data consistency, และ data backup

## Execute

### 1. Data Validation

ตั้งค่า data validation ที่เข้มงวด

1. Validate data ที่ boundaries (API, database)
2. ใช้ schema validation (Zod, Yup)
3. Validate input formats
4. Validate data ranges
5. Validate business rules
6. Log validation failures

### 2. Data Migration Scripts

สร้าง data migration scripts ที่ reliable

1. สร้าง migration scripts สำหรับ schema changes
2. สร้าง data migration scripts สำหรับ data transformations
3. ทดสอบ migrations ใน staging ก่อน
4. Backup data ก่อน migrate
5. ใช้ transactions สำหรับ migrations
6. Rollback mechanisms สำหรับ failed migrations

### 3. Data Consistency Checks

ตั้งค่า data consistency checks

1. ตรวจสอบ referential integrity
2. ตรวจสอบ duplicate data
3. ตรวจสอบ orphaned records
4. ตรวจสอบ data anomalies
5. รัน consistency checks ประจำ
6. Alert เมื่อพบ inconsistencies

### 4. Data Backup Strategies

ตั้งค่า data backup strategies

1. สร้าง automated backups
2. Backup ทั้ง database และ files
3. Test restore procedures
4. ตั้งค่า backup retention
5. Store backups ใน multiple locations
6. Monitor backup success/failure

### 5. Data Privacy

ตั้งค่า data privacy measures

1. Identify PII (Personally Identifiable Information)
2. Encrypt sensitive data
3. Implement data anonymization
4. Implement data retention policies
5. Comply with GDPR/CCPA
6. Audit data access

### 6. Data Governance

ตั้งค่า data governance policies

1. Define data ownership
2. Define data access policies
3. Document data lineage
4. Implement data quality metrics
5. Review data quality ประจำ
6. Improve data quality processes

## Rules

### 1. Validate Early

Validate data ตั้งแต่ input

- Validate ที่ API boundaries
- Validate ที่ database boundaries
- ไม่ trust external data
- ใช้ strict validation
- Fail fast สำหรับ invalid data

### 2. Immutable Migrations

ทำ migrations ให้เป็น immutable

- ไม่ modify migrations ที่รันแล้ว
- สร้าง new migrations สำหรับ changes
- Version migrations
- Document migration changes
- Test migrations thoroughly

### 3. Backup Before Changes

Backup ก่อนทำ changes ที่สำคัญ

- Backup ก่อน migrations
- Backup ก่อน data cleanup
- Backup ก่อน schema changes
- Test restore procedures
- Document backup procedures

### 4. Data Quality Metrics

ติดตาม data quality metrics

- Track data completeness
- Track data accuracy
- Track data consistency
- Track data timeliness
- Set data quality targets
- Report data quality ประจำ

## Expected Outcome

- Data validation เข้มงวดและ reliable
- Migrations ทำงานได้อย่างราบรื่น
- Data consistency สูง
- Backups reliable และ testable
- Data privacy ถูกปกป้อง
- Data governance มีโครงสร้าง
- Data quality metrics ชัดเจน
