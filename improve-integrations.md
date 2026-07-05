---
title: Improve Integrations
description: ปรับปรุง integrations (websocket, file-upload, search, notification, i18n) ครบวงจร
auto_execution_mode: 3
related_workflows:
  - /check-integration
---

## Goal

ปรับปรุง integrations ให้ stable, reliable, และ secure

## Scope

ใช้สำหรับปรับปรุง integrations ทั้ง websocket, file-upload, search, notification, และ i18n

## Execute

### 1. Check Integrations

ตรวจสอบ integrations ปัจจุบัน

1. ทำ `/check-integration` เพื่อตรวจสอบ integration points
2. ตรวจสอบ connection management
3. ตรวจสอบ error handling
4. ตรวจสอบ security
5. ตรวจสอบ performance

### 2. Improve WebSocket

ปรับปรุง WebSocket connections

1. ตรวจสอบ connection stability
2. ปรับปรุง reconnection logic
3. ปรับปรุง error handling
4. ปรับปรุง message ordering
5. ปรับปรุง performance

### 3. Improve File Upload

ปรับปรุง file upload

1. ตรวจสอบ upload reliability
2. ปรับปรุง validation
3. ปรับปรุง security
4. ปรับปรุง progress tracking
5. ปรับปรุง error handling

### 4. Improve Search

ปรับปรุง search functionality

1. ตรวจสอบ search relevance
2. ปรับปรุง performance
3. ปรับปรุง indexing
4. ปรับปรุง error handling
5. ปรับปรุง caching

### 5. Improve Notification

ปรับปรุง notification system

1. ตรวจสอบ delivery reliability
2. ปรับปรุง retry logic
3. ปรับปรุง error handling
4. ปรับปรุง performance
5. ปรับปรุย priority handling

### 6. Improve I18n

ปรับปรุง internationalization

1. ตรวจสอบ translation completeness
2. ปรับปรุย locale detection
3. ปรับปรุย date/time formatting
4. ปรับปรุย number formatting
5. ปรับปรุย RTL support

## Rules

### 1. Connection Management

จัดการ connections อย่างเหมาะสม

- Implement reconnection logic
- Handle connection failures gracefully
- Monitor connection health
- Implement connection pooling

### 2. Error Handling

จัดการ errors อย่างเหมาะสม

- Implement retry logic with exponential backoff
- Log errors อย่างเหมาะสม
- Provide user-friendly error messages
- Implement circuit breakers

### 3. Security

รักษา security

- Validate inputs
- Sanitize outputs
- Use authentication
- Implement rate limiting
- Encrypt sensitive data

### 4. Performance

ปรับปรุง performance

- Monitor performance metrics
- Implement caching
- Optimize queries
- Use async operations
- Implement pagination

## Expected Outcome

- WebSocket connections stable
- File upload reliable และ secure
- Search fast และ relevant
- Notifications delivered reliably
- i18n support complete
- All integrations have error handling
