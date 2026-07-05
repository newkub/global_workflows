---
title: Improve Data Migration
description: ปรับปรุง data migration strategy, seeding, zero-downtime และ rollback
auto_execution_mode: 3
related_workflows:
  - improve-database
  - improve-deployment-strategy
  - improve-backend
  - improve-reliability
  - improve-testing
---

## Goal

ปรับปรุง data migration strategy ให้ครอบคลุมทั้ง schema migration, data seeding, zero-downtime migration, และ rollback

## Scope

ใช้สำหรับ project ที่มี database และต้องการ migration strategy ที่ reliable และ safe

## Execute

### 1. Analyze Current Migration Setup

วิเคราะห์ migration setup ปัจจุบัน

1. ตรวจสอบ migration tool (Drizzle Kit, Prisma Migrate, Flyway, etc.)
2. ตรวจสอบ migration file structure
3. ตรวจสอบ migration execution process
4. ตรวจสอบ rollback strategy
5. ตรวจสอบ seed data strategy
6. ทำ `/improve-database` สำหรับ database review

### 2. Schema Migration Strategy

ปรับปรุง schema migration

1. ใช้ expand-then-contract pattern สำหรับ zero-downtime
2. แยก schema changes จาก data changes
3. ตั้งค่า migration versioning
4. ตั้งค่า migration dependencies
5. ใช้ backward-compatible migrations
6. หลีกเลี่ยง destructive operations ใน single migration

### 3. Data Seeding

ปรับปรุง data seeding

1. สร้าง seed scripts สำหรับ development
2. สร้าง seed scripts สำหรับ staging
3. สร้าง minimal seed สำหรับ production
4. ใช้ deterministic seed data
5. ตั้งค่า seed data versioning
6. แยก seed data จาก migration scripts

### 4. Zero-Downtime Migration

ปรับปรุง zero-downtime migration

1. ใช้ expand phase: เพิ่ม schema โดยไม่ลบ
2. ใช้ migrate phase: ย้าย data ทีละส่วน
3. ใช้ contract phase: ลบ schema เก่า หลัง migrate เสร็จ
4. หลีกเลี่ยง table locks ใน production
5. ใช้ background migration สำหรับ large tables
6. ทำ `/improve-deployment-strategy` สำหรับ deployment integration

### 5. Rollback Strategy

ปรับปรุง rollback strategy

1. สร้าง rollback migration สำหรับทุก schema change
2. ทดสอบ rollback บน staging
3. ตั้งค่า forward-fix strategy สำหรับ complex migrations
4. ตั้งค่า data backup ก่อน migration
5. กำหนด rollback decision matrix
6. ทำ `/improve-reliability` สำหรับ resilience

### 6. Migration Testing

ปรับปรุง migration testing

1. ทดสอบ migration บน copy ของ production data
2. ทดสอบ rollback migration
3. ทดสอบ migration performance บน large datasets
4. ทดสอบ migration ใน CI/CD pipeline
5. ทำ `/improve-testing` สำหรับ test coverage

### 7. Migration Monitoring

ติดตาม migration execution

1. ติดตาม migration duration
2. ติดตาม migration success rate
3. ติดตาม database performance ระหว่าง migration
4. ตั้งค่า alerts สำหรับ migration failures
5. บันทึก migration history

## Rules

### 1. Safe Migrations

- ไม่ lock tables ใน production migration
- ใช้ expand-then-contract เสมอ
- ทดสอบ migration ก่อน production
- มี rollback plan สำหรับทุก migration

### 2. Backward Compatible

- Migration ต้องไม่ break running application
- ไม่ลบ columns ใน migration เดียวกับที่เพิ่ม
- ใช้ default values สำหรับ new columns
- ไม่เปลี่ยน column type โดยตรง

### 3. Test On Real Data

- ทดสอบบน staging ที่ mirror production
- ทดสอบ rollback เสมอ
- ทดสอบ performance บน large datasets
- ไม่ deploy migration โดยไม่ทดสอบ

## Expected Outcome

- Migration strategy เป็นระบบ
- Zero-downtime migration ทำงานได้
- Rollback strategy reliable
- Data seeding เป็นระบบ
- Migration testing ครบถ้วน
- Migration monitoring ครบถ้วน
