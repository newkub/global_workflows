---
title: Improve Email
description: ปรับปรุง templates, deliverability, transactional emails ครบวงจร
auto_execution_mode: 3
related_workflows:
  - improve-uxui
  - improve-content
  - improve-observability
  - improve-backend-services
  - improve-privacy
---

## Goal

ปรับปรุง email system ทั้ง templates, deliverability, transactional emails, และ email infrastructure

## Scope

ใช้สำหรับ project ที่ส่ง emails (transactional, marketing, notifications) ผ่าน providers (Resend, SendGrid, SES, Postmark)

## Execute

### 1. Email Templates

ปรับปรุง email templates

1. ทำ `/improve-uxui` สำหรับ email design
2. ตรวจสอบ responsive email templates (mobile, desktop)
3. ตั้งค่า dark mode support สำหรับ email clients
4. ตรวจสอบ plain text fallback สำหรับทุก template
5. ทำ `/improve-content` สำหรับ email copy quality
6. ตรวจสอบ email client compatibility (Outlook, Gmail, Apple Mail)

### 2. Transactional Emails

ปรับปรุง transactional email flows

1. ตรวจสอบ welcome email และ onboarding sequence
2. ตั้งค่า password reset และ email verification
3. ตรวจสอบ order confirmation และ receipt emails
4. ตั้งค่า notification emails (booking, reminder, alert)
5. ทำ `/improve-backend-services` สำหรับ email queue

### 3. Deliverability

ปรับปรุง email deliverability

1. ตรวจสอบ SPF, DKIM, และ DMARC records
2. ตั้งค่า dedicated IP ถ้า volume สูง
3. ตรวจสอบ sender reputation และ bounce rate
4. ตั้งค่า feedback loop (FBL) สำหรับ complaint tracking
5. ตรวจสอบ spam trap hits และ list hygiene

### 4. Email Infrastructure

ปรับปรุง email infrastructure

1. ตั้งค่า email queue และ retry logic
2. ตรวจสอบ rate limiting สำหรับ email sending
3. ตั้งค่า bounce แล complaint handling
4. ตรวจสอบ email provider failover strategy
5. ทำ `/improve-observability` สำหรับ email logging

### 5. Unsubscribe And Preferences

ปรับปรุง unsubscribe และ email preferences

1. ตรวจสอบ unsubscribe link ในทุก marketing email
2. ตั้งค่า email preference center
3. ตรวจสอบ list-unsubscribe header
4. ตั้งค่า suppression list management
5. ทำ `/improve-privacy` สำหรับ consent compliance

### 6. Email Analytics

ปรับปรุง email tracking

1. ตรวจสอบ open rate และ click rate tracking
2. ตั้งค่า conversion tracking สำหรับ email campaigns
3. ตรวจสอบ bounce และ complaint rate monitoring
4. ตั้งค่า A/B testing สำหรับ subject lines และ content
5. วิเคราะห์ email engagement metrics

## Rules

### 1. Template Quality

- Responsive ทุก email clients ที่รองรับ
- Plain text fallback สำหรับทุก template
- Dark mode support ถ้าเป็นไปได้
- Email copy กระชับ และ actionable

### 2. Deliverability First

- SPF, DKIM, DMARC ตั้งค่าถูกต้อง
- Bounce rate < 2%
- Complaint rate < 0.1%
- Sender reputation monitored

### 3. Compliance

- Unsubscribe link ในทุก marketing email
- List-unsubscribe header ตั้งค่าไว้
- Suppression list อัพเดททันที
- Consent ก่อนส่ง marketing emails

### 4. Infrastructure

- Email queue พร้อม retry และ backoff
- Rate limiting ป้องกัน provider throttle
- Bounce handling automatic
- Failover strategy สำหรับ provider outage

## Expected Outcome

- Email templates responsive พร้อม plain text fallback
- Transactional emails ครบถ้วน พร้อม queue และ retry
- Deliverability สูง SPF, DKIM, DMARC ผ่าน
- Email infrastructure reliable พร้อม failover
- Unsubscribe และ preferences ครบถ้วน
- Email analytics ให้ actionable insights
