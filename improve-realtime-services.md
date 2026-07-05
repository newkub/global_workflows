---
title: Improve Realtime Services
description: ปรับปรุง realtime communication และ notification system
auto_execution_mode: 3
related_workflows:
  - improve-integrations
  - improve-error-handling
  - improve-observability
  - improve-scalability
---

## Goal

ปรับปรุง realtime features ทั้ง WebSocket/SSE communication และ notification system ให้ reliable และ scalable

## Scope

ใช้สำหรับ project ที่มี realtime features เช่น live updates, chat, notifications, หรือ streaming data

## Execute

### 1. Realtime Communication

ปรับปรุง realtime data transfer

1. วิเคราะห์ realtime protocol (WebSocket, SSE, polling)
2. ตรวจสอบ connection management และ reconnection logic
3. Implement heartbeat และ keepalive
4. ตั้งค่า message queue สำหรับ offline messages
5. ตรวจสอบ connection authentication และ authorization
6. ทำ `/improve-scalability` สำหรับ connection scaling

### 2. Notification System

ปรับปรุง notification delivery

1. วิเคราะห์ notification channels (push, email, in-app, SMS)
2. ตั้งค่า notification preferences และ user controls
3. Implement notification batching และ digest
4. ตรวจสอบ notification delivery tracking
5. จัดการ notification deduplication
6. ทำ `/improve-error-handling` สำหรับ delivery failures

### 3. Realtime Performance

ปรับปรุง realtime performance

1. วิเคราะห์ message latency และ throughput
2. ตรวจสอบ connection pool size และ limits
3. Implement message compression ถ้าจำเป็น
4. ตั้งค่า backpressure handling
5. ทำ `/improve-observability` สำหรับ realtime metrics

## Rules

### 1. Connection Reliability

- Auto-reconnect พร้อม exponential backoff
- Heartbeat สำหรับ detect dead connections
- Queue messages ระหว่าง disconnect
- ตรวจสอบ connection state ใน UI

### 2. Notification Quality

- ไม่ส่ง notification ซ้ำ
- ให้ user ควบคุม notification preferences
- ใช้ batching สำหรับลด notification noise
- Track delivery และ open rates

### 3. Scalability

- ใช้ connection pooling สำหรับ large user base
- Horizontal scaling สำหรับ realtime servers
- ใช้ pub/sub สำหรับ multi-server communication
- Monitor connection counts และ message rates

## Expected Outcome

- Realtime communication reliable พร้อม auto-reconnect
- Notification system ครบถ้วน ทุก channels
- User ควบคุม notification preferences ได้
- Realtime performance รองรับ concurrent connections
- Message delivery guaranteed แม้ชั่วคราว offline
