---
title: Improve Authentication
description: ปรับปรุง auth flows, session, OAuth, MFA ครบวงจร
auto_execution_mode: 3
related_workflows:
  - improve-security
  - improve-rbac
  - improve-error-handling
  - improve-observability
  - improve-uxui
  - improve-session-management
---

## Goal

ปรับปรุง authentication system ทั้ง auth flows, session management, OAuth integration, และ MFA

## Scope

ใช้สำหรับ project ที่มี authentication (Supabase, Auth0, custom, OAuth providers)

## Execute

### 1. Auth Flow Analysis

วิเคราะห์ auth flows ปัจจุบัน

1. ตรวจสอบ login/register/logout flows
2. ตรวจสอบ password reset และ email verification
3. ตรวจสอบ OAuth provider integration (Google, GitHub, Apple, etc.)
4. ตรวจสอบ session lifecycle และ token refresh
5. ทำ `/improve-security` สำหรับ auth security audit

### 2. Session Management

ปรับปรุง session handling

1. ตรวจสอบ session storage strategy (cookie, localStorage, memory)
2. ตั้งค่า session expiry และ refresh token rotation
3. ตรวจสอบ concurrent session handling
4. ตั้งค่า session invalidation สำหรับ logout/password change
5. ตรวจสอบ CSRF protection สำหรับ auth endpoints

### 3. MFA And 2FA

ปรับปรุง multi-factor authentication

1. ตรวจสอบ MFA enrollment flow
2. ตั้งค่า TOTP และ backup codes
3. ตรวจสอบ MFA challenge และ verification
4. ตั้งค่า MFA bypass policies ถ้าจำเป็น
5. ทดสอบ MFA recovery flow

### 4. OAuth Integration

ปรับปรุง OAuth provider integration

1. ตรวจสอบ OAuth callback handling
2. ตั้งค่า PKCE flow สำหรับ SPA
3. ตรวจสอบ account linking และ unlinking
4. ตรวจสอบ provider token refresh
5. จัดการ provider-specific quirks (Apple, Microsoft)

### 5. Auth UX

ปรับปรุง authentication UX

1. ทำ `/improve-uxui` สำหรับ auth UI
2. ตั้งค่า loading states ระหว่าง auth
3. แสดง clear error messages สำหรับ auth failures
4. ตั้งค่า redirect หลัง login ไปยัง intended page
5. ตรวจสอบ protected route guards

### 6. Auth Observability

ปรับปรุง auth monitoring

1. ทำ `/improve-observability` สำหรับ auth logging
2. Log auth events (login, logout, failed attempts, MFA)
3. ตั้งค่า brute force detection และ alerting
4. ตรวจสอบ suspicious login patterns
5. Track auth success/failure rates

## Rules

### 1. Security First

- ไม่ store passwords ใน plain text
- ใช้ bcrypt หรือ argon2 สำหรับ password hashing
- Session tokens ต้อง random และ unpredictable
- ไม่ expose auth tokens ใน URL หรือ logs

### 2. Session Safety

- Session expiry ไม่เกิน 24 ชั่วโมงสำหรับ non-persistent
- Refresh token rotation ทุกครั้ง
- Concurrent session limit ถ้าจำเป็น
- Logout ต้อง invalidate session ทุกที่

### 3. MFA Quality

- MFA เป็น optional แต่แนะนำ
- Backup codes ต้อง secure และ one-time use
- MFA bypass ต้องมี audit trail
- Recovery flow ต้อง verify identity

### 4. UX Quality

- Error messages ไม่ reveal ว่า email มีอยู่หรือไม่
- Loading states ระหว่าง auth
- Redirect หลัง login ไปยัง intended page
- Protected routes มี clear login prompt

## Expected Outcome

- Auth flows ครบถ้วน login, register, logout, reset, verify
- Session management ปลอดภัย พร้อม token rotation
- MFA รองรับ TOTP และ backup codes
- OAuth integration ครบถ้วน พร้อม PKCE
- Auth UX ชัดเจน พร้อม error messages
- Auth monitoring ครอบคลุมทุก events
