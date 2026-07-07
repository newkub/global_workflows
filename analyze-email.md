---
title: Analyze Email
description: วิเคราะห์ email templates, deliverability, SPF/DKIM/DMARC, transactional email
auto_execution_mode: 3
related_workflows:
  - /analyze-notification
  - /improve-email
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ email integration และ deliverability เพื่อระบุ template และ delivery gaps

## Scope

Email templates, deliverability, SPF/DKIM/DMARC, transactional email, email queue, template rendering, unsubscribe handling

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม email metrics ผ่าน scripts (template detection, email config scan)

### 2. Check Email Templates

1. ระบุ missing email templates สำหรับ key flows (welcome, reset, receipt)
2. ระบุ missing responsive design ใน templates
3. ระบุ missing dark mode support
4. ระบุ missing plain text version
5. ระบุ missing localization ใน templates
6. ระบุ inconsistent branding

### 3. Check Deliverability

1. ระบุ missing SPF record configuration
2. ระบุ missing DKIM signing
3. ระบุ missing DMARC policy
4. ระบุ missing bounce handling
5. ระบุ missing complaint handling
6. ระบุ missing sender reputation monitoring

### 4. Check Transactional Email

1. ระบุ missing transactional email สำหรับ critical events
2. ระบุ missing order confirmation emails
3. ระบุ missing password reset emails
4. ระบุ missing booking confirmation emails
5. ระบุ missing payment receipt emails
6. ระบุ missing notification emails

### 5. Check Email Queue

1. ระบุ missing email queue สำหรับ bulk sending
2. ระบุ missing retry mechanism
3. ระบุ missing rate limiting สำหรับ email sending
4. ระบุ missing dead letter handling
5. ระบุ missing email priority

### 6. Check Unsubscribe And Compliance

1. ระบุ missing unsubscribe links
2. ระบุ missing unsubscribe token validation
3. ระบุ missing preference center
4. ระบุ missing CAN-SPAM compliance
5. ระบุ missing GDPR consent ใน email collection

### 7. Check Template Rendering

1. ระบุ missing template engine
2. ระบุ missing template variables validation
3. ระบุ missing template preview
4. ระบุ missing template testing
5. ระบุ missing template versioning

### 8. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: deliverability → transactional → unsubscribe → templates → queue → rendering

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม severity

### 2. Severity Classification

- **Critical**: missing SPF/DKIM/DMARC, missing unsubscribe, missing transactional emails
- **High**: missing bounce handling, missing retry, missing plain text
- **Medium**: missing responsive design, missing localization, missing preference center
- **Low**: missing template testing, missing preview, missing versioning

### 3. Framework Awareness

- ตรวจสอบ Cloudflare Email Service integration
- ตรวจสอบ email template rendering
- ระบุ email service provider patterns

### 4. Use Scripts For Email Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ `/use-scripts` สำหรับ template scanning

## Expected Outcome

- Email gaps ระบุพร้อม severity
- Deliverability และ template issues จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-email`
