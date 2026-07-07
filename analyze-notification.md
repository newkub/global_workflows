---
title: Analyze Notification
description: วิเคราะห์ push/in-app/SMS notifications, preferences, routing, multi-channel
auto_execution_mode: 3
related_workflows:
  - /analyze-email
  - /analyze-realtime
  - /improve-notifications
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ notification system เพื่อระบุ multi-channel gaps และ preference management issues

## Scope

Push notifications, in-app notifications, SMS notifications, notification preferences, routing, multi-channel delivery, notification queue

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม notification metrics ผ่าน scripts (notification pattern detection, preference scan)

### 2. Check Notification Channels

1. ระบุ missing push notifications สำหรับ critical events
2. ระบุ missing in-app notifications
3. ระบุ missing SMS notifications สำหรับ urgent alerts
4. ระบุ missing email notifications
5. ระบุ inconsistent channel selection strategy
6. ระบุ missing channel fallback

### 3. Check Notification Preferences

1. ระบุ missing notification preference management
2. ระบุ missing per-category preferences
3. ระบุ missing quiet hours configuration
4. ระบุ missing frequency capping
5. ระบุ missing channel-specific preferences
6. ระบุ missing bulk preference update

### 4. Check Notification Routing

1. ระบุ missing notification routing logic
2. ระบุ missing priority-based routing
3. ระบุ missing user availability check (online/offline)
4. ระบุ missing device routing (multi-device)
5. ระบุ missing platform-specific routing (iOS/Android/Web)

### 5. Check Notification Queue

1. ระบุ missing notification queue
2. ระบุ missing batch delivery
3. ระบุ missing retry mechanism
4. ระบุ missing dead letter handling
5. ระบุ missing notification deduplication
6. ระบุ missing rate limiting

### 6. Check In-App Notifications

1. ระบุ missing notification center
2. ระบุ missing unread badge
3. ระบุ missing notification history
4. ระบุ missing mark-as-read functionality
5. ระบุ missing notification grouping
6. ระบุ missing real-time notification delivery

### 7. Check Push Notifications

1. ระบุ missing push token registration
2. ระบุ missing push token refresh
3. ระบุ missing push token cleanup
4. ระบุ missing push payload optimization
5. ระบุ missing push permission request strategy
6. ระบุ missing push analytics

### 8. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: channels → preferences → routing → push → queue → in-app

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม severity

### 2. Severity Classification

- **Critical**: missing critical event notifications, no preference management, no push tokens
- **High**: missing queue, missing retry, missing in-app center, missing routing
- **Medium**: missing quiet hours, missing frequency capping, missing deduplication
- **Low**: missing analytics, missing grouping, missing batch delivery

### 3. Framework Awareness

- ตรวจสอบ Capacitor push notification patterns
- ตรวจสอบ Capacitor local notifications
- ระบุ notification service integration

### 4. Use Scripts For Notification Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ `/use-scripts` สำหรับ notification pattern scanning

## Expected Outcome

- Notification gaps ระบุพร้อม severity
- Channel และ preference issues จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-notifications`
