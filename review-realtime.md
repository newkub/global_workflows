---
title: Review Realtime
description: Review realtime และ notification ครอบคลุม SSE, WebSocket, reconnection, notification channels, และ availability updates
auto_execution_mode: 3
related:
  - /deep-analyze-codebase
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review realtime communication และ notification system quality ครอบคลุม SSE/WebSocket patterns, connection management, reconnection, multi-channel notifications, batching, preferences และ availability updates

## Scope

SSE/WebSocket patterns, connection management, reconnection logic, message ordering, realtime data sync, notification channels (push, in-app, email, SMS), batching, user preferences, delivery reliability, notification templates, email delivery, และ realtime services

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ realtime structure
2. ระบุ realtime protocol และ communication library ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-realtime.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ SSE/WebSocket patterns, connection lifecycle, และ error handling
3. Script ตรวจสอบ reconnection logic, backoff strategy, และ connection state recovery
4. Script ตรวจสอบ message ordering, data sync, และ availability update patterns
5. Script ตรวจสอบ notification channels, delivery patterns, template management, และ batching logic
6. Script ตรวจสอบ user preferences, notification routing, delivery reliability, และ retry logic
7. Script คำนวณ realtime และ notification health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: broken connection, data loss during reconnect, no error handling, broken delivery channel, no user preferences, notification spam
- **High**: missing reconnection, no backoff strategy, broken message ordering, missing retry logic, no deduplication, broken template
- **Medium**: inconsistent connection pattern, missing state recovery, minor sync issue, inconsistent batching, missing preference option, minor template issue
- **Low**: cosmetic improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
