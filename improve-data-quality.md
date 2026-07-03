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

- Validate data ที่ boundaries (API, database)
- ใช้ schema validation (Zod, Yup)
- Validate input formats
- Validate data ranges
- Validate business rules
- Log validation failures

### 2. Data Migration Scripts

สร้าง data migration scripts ที่ reliable

- สร้าง migration scripts สำหรับ schema changes
- สร้าง data migration scripts สำหรับ data transformations
- ทดสอบ migrations ใน staging ก่อน
- Backup data ก่อน migrate
- ใช้ transactions สำหรับ migrations
- Rollback mechanisms สำหรับ failed migrations

### 3. Data Consistency Checks

ตั้งค่า data consistency checks

- ตรวจสอบ referential integrity
- ตรวจสอบ duplicate data
- ตรวจสอบ orphaned records
- ตรวจสอบ data anomalies
- รัน consistency checks ประจำ
- Alert เมื่อพบ inconsistencies

### 4. Data Backup Strategies

ตั้งค่า data backup strategies

- สร้าง automated backups
- Backup ทั้ง database และ files
- Test restore procedures
- ตั้งค่า backup retention
- Store backups ใน multiple locations
- Monitor backup success/failure

### 5. Data Privacy

ตั้งค่า data privacy measures

- Identify PII (Personally Identifiable Information)
- Encrypt sensitive data
- Implement data anonymization
- Implement data retention policies
- Comply with GDPR/CCPA
- Audit data access

### 6. Data Governance

ตั้งค่า data governance policies

- Define data ownership
- Define data access policies
- Document data lineage
- Implement data quality metrics
- Review data quality ประจำ
- Improve data quality processes

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
