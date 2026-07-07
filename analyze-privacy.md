---
title: Analyze Privacy
description: วิเคราะห์ privacy patterns, consent management, data minimization, anonymization
auto_execution_mode: 3
related_workflows:
  - /analyze-compliance
  - /analyze-security
  - /improve-privacy
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ privacy patterns เพื่อระบุ consent และ data minimization gaps

## Scope

Privacy patterns, consent management, data minimization, anonymization, data retention, right to be forgotten, data portability, privacy by design

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม privacy metrics ผ่าน scripts (PII detection, consent scan, data flow analysis)

### 2. Check Consent Management

1. ระบุ missing consent banner
2. ระบุ missing consent tracking
3. ระบุ missing consent withdrawal
4. ระบุ missing granular consent (per-purpose)
5. ระบุ missing consent versioning
6. ระบุ missing consent audit trail

### 3. Check Data Minimization

1. ระบุ over-collection of personal data
2. ระบุ missing data purpose limitation
3. ระบุ unnecessary data fields ใน forms
4. ระบุ missing data aggregation แทน raw data
5. ระบุ missing data anonymization สำหรับ analytics
6. ระบุ missing data pseudonymization

### 4. Check Data Retention

1. ระบุ missing data retention policy
2. ระบุ missing automated data deletion
3. ระบุ missing data archival policy
4. ระบุ inconsistent retention periods
5. ระบุ missing retention documentation
6. ระบุ missing retention compliance checks

### 5. Check Right To Be Forgotten

1. ระบุ missing account deletion flow
2. ระบุ missing data deletion verification
3. ระบุ incomplete data deletion (orphaned references)
4. ระบุ missing deletion across backups
5. ระบุ missing deletion across third-party services
6. ระบุ missing deletion confirmation

### 6. Check Data Portability

1. ระบุ missing data export functionality
2. ระบุ missing data export format (JSON, CSV)
3. ระบุ missing data export completeness
4. ระบุ missing data export authentication
5. ระบุ missing data export rate limiting

### 7. Check Privacy By Design

1. ระบุ missing privacy impact assessments
2. ระบุ missing PII detection ใน logs
3. ระบุ missing PII detection ใน error messages
4. ระบุ missing privacy-friendly defaults
5. ระบุ missing data encryption at rest
6. ระบุ missing data encryption in transit

### 8. Check Third-Party Privacy

1. ระบุ missing data processing agreements
2. ระบุ missing third-party data sharing audit
3. ระบุ missing sub-processor disclosure
4. ระบุ missing cross-border transfer safeguards
5. ระบุ missing third-party deletion requests

### 9. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: consent → right to be forgotten → data minimization → privacy by design → data retention → data portability → third-party

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม severity

### 2. Severity Classification

- **Critical**: missing consent, missing account deletion, PII in logs, no encryption
- **High**: missing data retention, incomplete deletion, missing data export
- **Medium**: over-collection, missing anonymization, missing granular consent
- **Low**: missing portability format, missing third-party audit, missing impact assessments

### 3. Framework Awareness

- ตรวจสอบ Supabase data deletion patterns
- ตรวจสอบ cookie consent integration
- ระบุ privacy compliance frameworks

### 4. Use Scripts For Privacy Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ PII pattern detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- Privacy gaps ระบุพร้อม severity
- Consent และ data minimization issues จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-privacy`
