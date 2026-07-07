---
title: Analyze Auth
description: วิเคราะห์ auth flows, session management, OAuth, MFA, token rotation
auto_execution_mode: 3
related_workflows:
  - /analyze-security
  - /improve-authentication
  - /improve-session-management
  - /improve-rbac
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ authentication และ authorization patterns เพื่อระบุ security gaps และ UX issues

## Scope

Auth flows, session management, OAuth/OIDC, MFA, token rotation, RBAC, permission checks, password policies, account recovery

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม auth metrics ผ่าน scripts (auth pattern detection, session usage scan, token handling analysis)

### 2. Analyze Auth Flows

1. ระบุ auth flow patterns (login, register, logout, password reset, email verification)
2. ระบุ missing multi-factor authentication (MFA)
3. ระบุ missing social login / OAuth integration
4. ระบุ insecure auth flows (unprotected routes, missing redirects)
5. ระบุ missing account lockout หลัง failed attempts

### 3. Check Session Management

1. ระบุ session storage strategy (cookie, localStorage, memory)
2. ระบุ missing session expiration
3. ระบุ missing session invalidation on logout
4. ระบุ missing concurrent session limits
5. ระบุ missing session revocation mechanism
6. ระบุ insecure cookie settings (httpOnly, secure, sameSite)

### 4. Check Token Handling

1. ระบุ missing token refresh mechanism
2. ระบุ missing token rotation strategy
3. ระบุ token storage ที่ไม่ปลอดภัย (localStorage สำหรับ access token)
4. ระบุ missing token expiration validation
5. ระบุ missing token revocation on password change

### 5. Check RBAC And Permissions

1. ระบุ missing role-based access control
2. ระบุ permission checks ที่ขาดใน routes และ API handlers
3. ระบุ permission checks ที่ขาดใน UI components
4. ระบุ role hierarchy ที่ไม่สอดคล้อง
5. ระบุ missing permission granularity

### 6. Check Password Security

1. ระบุ missing password strength validation
2. ระบุ missing password hashing (bcrypt, argon2)
3. ระบุ missing password history check
4. ระบุ missing breach detection (HaveIBeenPwned)
5. ระบุ insecure password reset flow

### 7. Check Account Recovery

1. ระบุ missing account recovery flow
2. ระบุ insecure recovery tokens (predictable, non-expiring)
3. ระบุ missing recovery notification
4. ระบุ missing recovery audit trail

### 8. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: token handling → session management → RBAC → auth flows → password → recovery

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม location และ severity

### 2. Severity Classification

- **Critical**: insecure token storage, missing auth checks, no session expiration
- **High**: missing MFA, missing RBAC, insecure cookies, no token rotation
- **Medium**: missing password policies, missing recovery flow, partial permission checks
- **Low**: missing account lockout, missing breach detection

### 3. Framework Awareness

- ตรวจสอบ Supabase Auth patterns
- ตรวจสอบ JWT verification บน server
- ระบุ framework-specific auth solutions

### 4. Use Scripts For Auth Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ auth pattern detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- Auth security gaps ระบุพร้อม location และ severity
- Session และ token issues จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-authentication`, `/improve-session-management` หรือ `/improve-rbac`
