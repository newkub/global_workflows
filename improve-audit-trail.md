---
title: Improve Audit Trail
description: ปรับปรุง audit logging, change tracking, compliance trail และ immutable logs
auto_execution_mode: 3
related_workflows:
  - improve-logging
  - improve-security
  - improve-compliance
  - improve-observability
---

## Goal

ปรับปรุง audit trail system ให้ครอบคลุมทั้ง change tracking, compliance trail, และ immutable logs

## Scope

ใช้สำหรับ project ที่ต้องการ audit trail สำหรับ compliance, security, หรือ business requirements

## Execute

### 1. Identify Audit Requirements

ระบุ audit requirements

1. ระบุ compliance requirements (GDPR, HIPAA, SOC2, PCI-DSS)
2. ระบุ business audit requirements
3. ระบุ security audit requirements
4. ระบุ data types ที่ต้อง audit
5. ระบุ user actions ที่ต้อง audit
6. ทำ `/improve-compliance` สำหรับ compliance review

### 2. Audit Event Design

ออกแบบ audit events

1. กำหนด audit event schema (who, what, when, where, why)
2. รวม actor ID, actor type, action, resource, timestamp
3. รวม before/after state สำหรับ data changes
4. รวม IP address และ user agent
5. รวม correlation ID สำหรับ request tracing
6. ใช้ consistent event format ทั่วทั้ง application

### 3. Audit Logging

ตั้งค่า audit logging

1. แยก audit logs จาก application logs
2. ใช้ append-only storage สำหรับ audit trail
3. ตั้งค่า immutable log storage (WORM)
4. ใช้ cryptographic hashing สำหรับ tamper detection
5. ทำ `/improve-logging` สำหรับ logging strategy
6. ตั้งค่า audit log shipping ไปยัง secure storage

### 4. Change Tracking

ตั้งค่า change tracking

1. ติดตาม data changes ทุก critical table
2. บันทึก before/after values สำหรับ updates
3. บันทึก actor และ timestamp ทุก change
4. ใช้ database triggers หรือ application-level tracking
5. ตั้งค่า soft delete พร้อม audit trail

### 5. Audit Query And Reporting

ตั้งค่า audit query และ reporting

1. สร้าง audit query interface สำหรับ administrators
2. สร้าง audit reports สำหรับ compliance
3. สร้าง user activity reports
4. สร้าง data access reports
5. รองรับ date range, actor, action, resource filtering
6. ส่งออก audit data สำหรับ external audit

### 6. Audit Retention

ตั้งค่า audit retention

1. กำหนด retention period ตาม compliance requirements
2. ตั้งค่า long-term archival สำหรับ audit logs
3. ตั้งค่า immutable retention (ไม่ลบก่อน expiry)
4. กำหนด storage strategy สำหรับ high-volume audit data
5. ทำ `/improve-caching` สำหรับ audit query optimization

### 7. Audit Security

ปกป้อง audit trail

1. จำกัด audit log access เฉพาะ authorized users
2. เข้ารหัส audit logs ที่ rest และ in transit
3. ตรวจสอบ audit log tampering attempts
4. สร้าง separate audit admin role
5. ทำ `/improve-security` สำหรับ security audit

## Rules

### 1. Immutable And Tamper-Proof

- Audit logs ต้อง append-only และไม่ modifiable
- ใช้ cryptographic hashing สำหรับ tamper detection
- จำกัด write access เฉพาะ audit system
- ตรวจสอบ integrity อย่างสม่ำเสมอ

### 2. Complete And Accurate

- บันทึกทุก audit-required action
- ไม่มี gaps ใน audit trail
- บันทึก before/after state สำหรับ data changes
- Timestamp ต้อง accurate และ timezone-aware

### 3. Separated From Application Logs

- Audit logs แยกจาก application logs
- Audit logs มี retention ที่ยาวกว่า
- Audit logs มี access control ที่เข้มงวดกว่า
- Audit logs ไม่ถูก rotate หรือ delete โดย log management

## Expected Outcome

- Audit requirements ครบถ้วนตาม compliance
- Audit events ครบถ้วน พร้อม before/after state
- Audit logs immutable และ tamper-proof
- Change tracking ครอบคลุม critical data
- Audit query และ reporting ใช้งานได้
- Audit retention ตรงตาม compliance
- Audit security ปลอดภัย
