---
title: Improve Session Management
description: ปรับปรุง session storage, refresh token rotation, concurrent sessions และ revocation
auto_execution_mode: 3
related_workflows:
  - improve-authentication
  - improve-security
  - improve-reliability
  - improve-observability
---

## Goal

ปรับปรุง session management ทั้ง session storage, token rotation, concurrent device sessions, และ session revocation

## Scope

ใช้สำหรับ project ที่มี authentication ต้องการ session management ที่ secure และ reliable

## Execute

### 1. Analyze Current Session Management

วิเคราะห์ session management ปัจจุบัน

1. ตรวจสอบ session storage strategy (JWT, database, Redis)
2. ตรวจสอบ session lifetime แล expiry
3. ตรวจสอบ refresh token strategy
4. ตรวจสอบ concurrent session handling
5. ตรวจสอบ session revocation process
6. ทำ `/improve-authentication` สำหรับ auth review

### 2. Session Storage

ปรับปรุง session storage

1. ใช้ secure session storage (httpOnly cookies, not localStorage)
2. ตั้งค่า sameSite cookie attribute
3. ตั้งค่า secure cookie attribute ใน production
4. ใช้ short-lived access tokens (15-30 minutes)
5. ใช้ long-lived refresh tokens (7-30 days)
6. ไม่ store sensitive data ใน JWT payload

### 3. Refresh Token Rotation

ปรับปรุง refresh token rotation

1. ใช้ refresh token rotation สำหรับทุก refresh
2. ใช้ refresh token reuse detection
3. Invalidate refresh token family เมื่อ reuse detected
4. ตั้งค่า refresh token expiry
5. ใช้ secure refresh token storage (httpOnly cookie)
6. ส่ง new refresh token ในทุก refresh response

### 4. Concurrent Sessions

จัดการ concurrent device sessions

1. อนุญาต concurrent sessions สำหรับ multiple devices
2. ตั้งค่า max concurrent sessions per user
3. ติดตาม active sessions ต่อ user
4. อนุญาต user ดู active sessions
5. อนุญาต user revoke sessions ราย device
6. แจ้งเตือน user เมื่อมี new device login

### 5. Session Revocation

ตั้งค่า session revocation

1. สร้าง session revocation endpoint
2. ใช้ token blacklist สำหรับ revoked tokens
3. ใช้ token version สำหรับ bulk revocation
4. อนุญาต revoke all sessions (password change, security incident)
5. อนุญาต revoke specific device session
6. ทำ `/improve-security` สำหรับ security audit

### 6. Session Security

ปกป้อง session security

1. ใช้ CSRF protection สำหรับ cookie-based sessions
2. ตรวจสอบ session IP และ user agent changes
3. ตรวจสอบ impossible travel patterns
4. ตั้งค่า session timeout สำหรับ inactivity
5. ตั้งค่า absolute session timeout
6. ใช้ rate limiting สำหรับ session endpoints

### 7. Session Monitoring

ติดตาม session health

1. ติดตาม active session count
2. ติดตาม session creation และ revocation rate
3. ติดตาม refresh token rotation rate
4. ติดตาม concurrent session limit hits
5. ตั้งค่า alerts สำหรับ suspicious session activity
6. ทำ `/improve-observability` สำหรับ monitoring integration

## Rules

### 1. Secure Storage

- ใช้ httpOnly cookies สำหรับ session tokens
- ไม่ store tokens ใน localStorage
- ใช้ secure และ sameSite attributes
- ไม่ expose tokens ใน JavaScript

### 2. Short-Lived Access

- Access tokens สั้น (15-30 minutes)
- Refresh tokens ยาวกว่า แต่มี rotation
- ไม่ใช้ long-lived access tokens
- Rotate refresh tokens ทุกครั้ง

### 3. Revocable Sessions

- ทุก session ต้อง revocable ได้
- ใช้ token blacklist หรือ version
- อนุญาต user revoke sessions
- ระงับ sessions ทันที เมื่อ security incident

## Expected Outcome

- Session storage secure และ reliable
- Refresh token rotation ทำงานอัตโนมัติ
- Concurrent sessions จัดการได้
- Session revocation รวดเร็ว
- Session security ปลอดภัย
- Session monitoring ครบถ้วน
