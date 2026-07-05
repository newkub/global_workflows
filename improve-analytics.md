---
title: Improve Analytics
description: ปรับปรุง event tracking, funnel, privacy-friendly analytics
auto_execution_mode: 3
related_workflows:
  - improve-privacy
  - improve-observability
  - improve-uxui
  - improve-performance-tuning
---

## Goal

ปรับปรุง analytics ทั้ง event tracking, conversion funnel, privacy-friendly analytics, และ data-driven insights

## Scope

ใช้สำหรับ project ที่ต้องการ analytics (Google Analytics, Plausible, PostHog, Mixpanel, custom)

## Execute

### 1. Event Tracking

ปรับปรุง event tracking architecture

1. วิเคราะห์ event taxonomy และ naming conventions
2. ตรวจสอบ page view tracking และ SPA route changes
3. ตั้งค่า custom events สำหรับ key user actions
4. ตรวจสอบ e-commerce tracking ถ้ามี
5. ตั้งค่า user identification และ session tracking

### 2. Conversion Funnel

ปรับปรุง conversion funnel analysis

1. วิเคราะห์ conversion funnel steps
2. ตั้งค่า funnel tracking สำหรับ critical paths
3. ตรวจสอบ drop-off points และ friction
4. ตั้งค่า A/B testing tracking
5. วิเคราะห์ conversion rate ตาม traffic source

### 3. Privacy-Friendly Analytics

ปรับปรุง privacy compliance สำหรับ analytics

1. ทำ `/improve-privacy` สำหรับ consent management
2. ตั้งค่า cookieless analytics ถ้าเป็นไปได้ (Plausible, Umami)
3. ตรวจสอบ IP anonymization
4. ตั้งค่า data retention สำหรับ analytics data
5. ตรวจสอบ third-party analytics compliance

### 4. Performance Impact

ปรับปรุง analytics performance

1. ทำ `/improve-performance-tuning` สำหรับ script loading
2. ตั้งค่า analytics script loading strategy (defer, async)
3. ตรวจสอบ analytics script ไม่ block rendering
4. ใช้ server-side tracking ถ้าเหมาะสม
5. ตรวจสอบ analytics payload size

### 5. Dashboard And Reporting

ปรับปรุง analytics reporting

1. ตั้งค่า real-time dashboard สำหรับ key metrics
2. ตรวจสอบ automated reports (daily, weekly, monthly)
3. ตั้งค่า alerting สำหรับ anomaly detection
4. ตรวจสอบ custom dashboard สำหรับ stakeholders
5. ทำ `/improve-observability` สำหรับ metrics pipeline

### 6. Data Quality

ปรับปรุง analytics data quality

1. ตรวจสอบ event deduplication
2. ตั้งค่า bot filtering
3. ตรวจสอบ cross-domain tracking
4. ตั้งค่า data validation สำหรับ custom events
5. ตรวจสอบ sampling และ data accuracy

## Rules

### 1. Event Quality

- Event naming ใช้ snake_case หรือ camelCase สม่ำเสมอ
- Event properties มี consistent schema
- ไม่ track PII ใน analytics events
- Event deduplication ป้องกัน double counting

### 2. Privacy First

- Consent required ก่อน track
- Cookieless analytics ถ้าเป็นไปได้
- IP anonymization เปิดอยู่
- Data retention กำหนดชัดเจน

### 3. Performance

- Analytics script ไม่ block rendering
- ใช้ defer หรือ async
- Server-side tracking สำหรับ critical events
- Payload size น้อยที่สุด

### 4. Actionable Insights

- Dashboard แสดง actionable metrics
- Alerting สำหรับ anomaly detection
- Funnel analysis ระบุ drop-off points
- A/B testing tracking ครบถ้วน

## Expected Outcome

- Event tracking ครบถ้วน พร้อม consistent schema
- Conversion funnel analysis ระบุ friction points
- Privacy-friendly analytics ผ่าน consent management
- Analytics script ไม่กระทบ performance
- Dashboard และ reporting ให้ actionable insights
- Data quality สูง ไม่มี duplication หรือ bot traffic
