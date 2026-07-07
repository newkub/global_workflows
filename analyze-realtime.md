---
title: Analyze Realtime
description: วิเคราะห์ WebSocket, SSE, real-time sync, connection management
auto_execution_mode: 3
related_workflows:
  - /analyze-network
  - /improve-realtime-services
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ real-time communication patterns เพื่อระบุ reliability และ performance issues

## Scope

WebSocket, Server-Sent Events (SSE), real-time sync, connection management, reconnection, message ordering, presence, broadcast, real-time UX

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม realtime metrics ผ่าน scripts (WebSocket pattern detection, SSE scan, connection analysis)

### 2. Check Realtime Transport

1. ระบุ missing WebSocket สำหรับ bidirectional communication
2. ระบุ missing SSE สำหรับ server-to-client updates
3. ระบุ missing polling fallback
4. ระบุ missing transport negotiation
5. ระบุ insecure WebSocket (ws:// แทน wss://)

### 3. Check Connection Management

1. ระบุ missing connection pooling
2. ระบุ missing connection cleanup บน unmount
3. ระบุ missing heartbeat/ping-pong
4. ระบุ missing connection state tracking
5. ระบุ missing max connection limits

### 4. Check Reconnection Strategy

1. ระบุ missing auto-reconnect
2. ระบุ missing exponential backoff ใน reconnect
3. ระบุ missing reconnect on visibility change
4. ระบุ missing reconnect on network change
5. ระบุ missing connection state UI feedback

### 5. Check Message Handling

1. ระบุ missing message ordering guarantees
2. ระบุ missing message deduplication
3. ระบุ missing message compression
4. ระบุ missing message batching
5. ระบุ missing message schema validation

### 6. Check Presence And Broadcast

1. ระบุ missing presence detection (online/offline)
2. ระบุ missing broadcast to multiple clients
3. ระบุ missing room/channel management
4. ระบุ missing subscriber cleanup
5. ระบุ missing presence sync on reconnect

### 7. Check Realtime UX

1. ระบุ missing optimistic updates
2. ระบุ missing conflict resolution
3. ระบุ missing real-time indicator (live badge)
4. ระบุ missing connection status display
5. ระบุ missing offline queue สำหรับ messages

### 8. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: connection management → reconnection → message handling → transport → presence → UX

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม location และ severity

### 2. Severity Classification

- **Critical**: no connection cleanup, insecure transport, no reconnection
- **High**: missing heartbeat, missing message ordering, no presence detection
- **Medium**: missing message batching, missing conflict resolution, missing UX feedback
- **Low**: missing compression, missing offline queue

### 3. Framework Awareness

- ตรวจสอบ Cloudflare Durable Objects สำหรับ WebSocket
- ตรวจสอบ TanStack Query real-time sync
- ระบุ framework-specific realtime solutions

### 4. Use Scripts For Realtime Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ WebSocket/SSE pattern detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- Realtime gaps ระบุพร้อม location และ severity
- Connection แล message handling issues จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-realtime-services`
