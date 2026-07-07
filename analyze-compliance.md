---
title: Analyze Compliance
description: วิเคราะห์ GDPR, privacy, data retention, regulatory compliance
auto_execution_mode: 3
related_workflows:
  - /analyze-security
  - /analyze-privacy
  - /improve-compliance
  - /improve-privacy
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ regulatory compliance และ privacy practices เพื่อระบุ compliance gaps

## Scope

GDPR, CCPA, data retention, consent management, PII handling, data subject rights, privacy policies, audit trail, regulatory requirements

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม compliance metrics ผ่าน scripts (PII detection, consent flow scan, data retention analysis)

### 2. Check GDPR Compliance

1. ระบุ missing consent management mechanism
2. ระบุ missing data subject rights (access, deletion, portability, rectification)
3. ระบุ missing privacy policy integration
4. ระบุ missing cookie consent banner
5. ระบุ missing data processing agreements

### 3. Check PII Handling

1. ระบุ PII ที่เก็บใน database โดยไม่มี encryption
2. ระบุ PII ที่ logged ใน application logs
3. ระบุ PII ที่ส่งไปยัง third-party services โดยไม่ anonymize
4. ระบุ missing data minimization (เก็บข้อมูลเกินจำเป็น)
5. ระบุ missing PII access controls

### 4. Check Data Retention

1. ระบุ missing data retention policies
2. ระบุ data ที่เก็บเกิน retention period
3. ระบุ missing automated data deletion
4. ระบุ missing retention policy documentation
5. ระบุ backup data ที่ไม่มี retention compliance

### 5. Check Audit Trail

1. ระบุ missing audit logging สำหรับ data access
2. ระบุ missing audit logging สำหรับ data modifications
3. ระบุ missing audit logging สำหรับ auth events
4. ระบุ missing immutable audit trail
5. ระบุ missing audit trail retention

### 6. Check Cross-Border Data Transfer

1. ระบุ data transfer ข้ามประเทศที่ไม่ compliant
2. ระบุ missing data localization
3. ระบุ missing transfer impact assessment
4. ระบุ third-party processors ที่ไม่ compliant

### 7. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: PII handling → GDPR → consent → data retention → audit trail → cross-border

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม location และ severity

### 2. Severity Classification

- **Critical**: unencrypted PII, missing consent, no data subject rights
- **High**: missing audit trail, PII in logs, no retention policy
- **Medium**: missing cookie consent, partial audit logging, missing documentation
- **Low**: missing transfer assessment, minor documentation gaps

### 3. Regulatory Awareness

- ตรวจสอบ GDPR สำหรับ EU users
- ตรวจสอบ CCPA สำหรับ California users
- ระบุ industry-specific regulations (HIPAA, SOC2, PCI-DSS)

### 4. Use Scripts For Compliance Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ PII pattern detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- Compliance gaps ระบุพร้อม location และ severity
- PII handling และ GDPR issues จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-compliance` หรือ `/improve-privacy`
