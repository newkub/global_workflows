---
title: Improve Privacy
description: ปรับปรุง GDPR, consent, data retention ครบวงจร
auto_execution_mode: 3
related_workflows:
  - improve-compliance
  - improve-security
  - improve-database
  - improve-observability
---

## Goal

ปรับปรุง privacy ทั้ง GDPR compliance, consent management, data retention, และ user data rights

## Scope

ใช้สำหรับ project ที่มี user data และต้องปฏิบัติตาม privacy regulations (GDPR, CCPA, PDPA)

## Execute

### 1. Consent Management

ปรับปรุง consent system

1. ตรวจสอบ cookie consent banner และ preferences
2. ตั้งค่า granular consent (analytics, marketing, functional)
3. ตรวจสอบ consent withdrawal flow
4. ตั้งค่า consent versioning สำหรับ policy changes
5. บันทึก consent history สำหรับ audit

### 2. Data Subject Rights

ปรับปรุง user data rights

1. ตั้งค่า data export flow (right to access)
2. ตั้งค่า data deletion flow (right to erasure)
3. ตรวจสอบ data correction flow (right to rectification)
4. ตั้งค่า data portability export
5. ทดสอบ response timeline (30 days สำหรับ GDPR)

### 3. Data Retention

ปรับปรุง data retention policy

1. ทำ `/improve-database` สำหรับ retention implementation
2. ตั้งค่า retention period ตาม data type
3. ตรวจสอบ automated data deletion
4. ตั้งค่า archive policy สำหรับ inactive data
5. Document retention schedule

### 4. Privacy Policy And Notices

ปรับปรุง privacy documentation

1. ตรวจสอบ privacy policy ครบถ้วน และ up-to-date
2. ตั้งค่า in-app privacy notices
3. ตรวจสอบ cookie policy และ third-party disclosures
4. ตั้งค่า data processing agreements (DPA)
5. ทำ `/improve-content` สำหรับ policy quality

### 5. Data Transfer And Breach

ปรับปรุง data transfer และ breach response

1. ตรวจสอบ cross-border data transfer compliance
2. ตั้งค่า data breach response plan
3. ตรวจสอบ breach notification timeline (72 hours สำหรับ GDPR)
4. ตั้งค่า incident logging และ documentation
5. ทำ `/improve-observability` สำหรับ audit trail

### 6. Third-Party Compliance

ปรับปรุง third-party privacy

1. ตรวจสอบ third-party processors (analytics, CRM, email)
2. ตั้งค่า data processing agreements กับทุก vendor
3. ตรวจสอบ sub-processor disclosure
4. ตรวจสอบ third-party cookie compliance
5. ทำ `/improve-compliance` สำหรับ regulatory compliance

## Rules

### 1. Consent Required

- Cookie consent ก่อนโหลด non-essential cookies
- Granular consent สำหรับแต่ละ category
- Consent withdrawal ง่ายเท่ากับให้ consent
- Consent history บันทึกไว้สำหรับ audit

### 2. Data Rights

- Data export ภายใน 30 วัน
- Data deletion ภายใน 30 วัน
- Data correction ภายใน 30 วัน
- Response ต้อง free of charge

### 3. Retention

- Retention period กำหนดชัดเจนตาม data type
- Automated deletion ทำงานตาม schedule
- Archive ก่อน delete ถ้าจำเป็น
- Retention schedule documented

### 4. Breach Response

- Breach detection อัตโนมัติถ้าเป็นไปได้
- Notification ภายใน 72 ชั่วโมง
- Breach log ครบถ้วน
- Affected users ได้รับแจ้ง

## Expected Outcome

- Consent management ครบถ้วน พร้อม granular control
- Data subject rights รองรับ export, deletion, correction
- Data retention policy ชัดเจน และ automated
- Privacy policy และ notices up-to-date
- Breach response plan พร้อม execute
- Third-party compliance ครบถ้วน
