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

- ทำ `/check-integration` เพื่อตรวจสอบ integration points
- ตรวจสอบ connection management
- ตรวจสอบ error handling
- ตรวจสอบ security
- ตรวจสอบ performance

### 2. Improve WebSocket

ปรับปรุง WebSocket connections

- ตรวจสอบ connection stability
- ปรับปรุง reconnection logic
- ปรับปรุง error handling
- ปรับปรุง message ordering
- ปรับปรุง performance

### 3. Improve File Upload

ปรับปรุง file upload

- ตรวจสอบ upload reliability
- ปรับปรุง validation
- ปรับปรุง security
- ปรับปรุง progress tracking
- ปรับปรุง error handling

### 4. Improve Search

ปรับปรุง search functionality

- ตรวจสอบ search relevance
- ปรับปรุง performance
- ปรับปรุง indexing
- ปรับปรุง error handling
- ปรับปรุง caching

### 5. Improve Notification

ปรับปรุง notification system

- ตรวจสอบ delivery reliability
- ปรับปรุง retry logic
- ปรับปรุง error handling
- ปรับปรุง performance
- ปรับปรุย priority handling

### 6. Improve I18n

ปรับปรุง internationalization

- ตรวจสอบ translation completeness
- ปรับปรุย locale detection
- ปรับปรุย date/time formatting
- ปรับปรุย number formatting
- ปรับปรุย RTL support

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
