---
title: Improve Security
description: ปรับปรุง security ด้วย systematic approach
auto_execution_mode: 3
related_workflows:
  - /check-security
  - /check-vulnerability
  - /run-audit
---

## Goal

ปรับปรุง security ของ application ด้วย systematic approach ตาม best practices

## Scope

ใช้สำหรับปรับปรุง security ของ web applications และ APIs

## Execute

### 1. Analyze Security Posture

วิเคราะห์ security ปัจจุบันของ application

1. ทำ `/check-security` เพื่อตรวจสอบ security mechanisms
2. ทำ `/check-vulnerability` เพื่อตรวจสอบ dependencies vulnerabilities
3. ทำ `/run-audit` เพื่อ audit dependencies และ security
4. ระบุ security gaps และ risks
5. วิเคราะห์ attack surface

### 2. Improve Authentication

ปรับปรุง authentication mechanisms

1. ใช้ strong password hashing (bcrypt, Argon2)
2. Implement multi-factor authentication
3. ใช้ secure session management
4. เพิ่ม rate limiting สำหรับ login attempts
5. Implement account lockout policies

### 3. Improve Authorization

ปรับปรุง authorization mechanisms

1. Implement role-based access control (RBAC)
2. ใช้ principle of least privilege
3. เพิ่ม permission checks ทุก endpoints
4. Implement attribute-based access control (ABAC)
5. Audit access logs อย่างสม่ำเสมอ

### 4. Improve Data Protection

ปรับปรุง data protection

1. เข้ารหัส sensitive data ใน rest
2. ใช้ TLS 1.2+ สำหรับ transit
3. Implement data masking สำหรับ logs
4. ใช้ secure key management
5. Implement data retention policies

### 5. Improve Input Validation

ปรับปรุง input validation

1. Validate inputs ทุก entry points
2. Sanitize outputs ทุก exit points
3. Implement SQL injection prevention
4. Implement XSS prevention
5. ใช้ parameterized queries

### 6. Improve Security Headers

ปรับปรุง security headers

1. Implement Content Security Policy (CSP)
2. เพิ่ม HSTS header
3. Configure X-Frame-Options
4. Configure X-Content-Type-Options
5. Implement CORS properly

### 7. Improve Secrets Management

ปรับปรุง secrets management

1. ใช้ environment variables สำหรับ secrets
2. Implement secret rotation
3. ใช้ secret management service (Phase.dev, Vault)
4. Audit secret access logs
5. ลบ hardcoded secrets

### 8. Implement Security Monitoring

ตั้งค่า security monitoring

1. Implement security logging
2. ตั้งค่า alerts สำหรับ security events
3. Monitor failed login attempts
4. Monitor suspicious activities
5. Implement intrusion detection

### 9. Improve API Security

ปรับปรุง API security

1. Implement API rate limiting
2. ใช้ API keys หรือ OAuth อย่างเหมาะสม
3. Implement API versioning
4. Validate API requests
5. Implement API authentication

## Rules

### 1. Authentication Security

ใช้ authentication ที่ปลอดภัย

- ใช้ strong password hashing
- Implement MFA สำหรับ sensitive operations
- ใช้ secure session management
- Rate limit login attempts
- Monitor authentication failures

### 2. Authorization Security

ใช้ authorization ที่ปลอดภัย

- ใช้ principle of least privilege
- ตรวจสอบ permissions ทุก request
- Audit access อย่างสม่ำเสมอ
- ลบ unused permissions
- Implement role-based access

### 3. Data Protection

ปกป้อง data อย่างเหมาะสม

- เข้ารหัส sensitive data
- ใช้ TLS สำหรับ transit
- ใช้ secure key management
- Mask sensitive data ใน logs
- Implement data retention

### 4. Input Validation

Validate inputs อย่างเคร่งครัด

- Validate ทุก inputs
- Sanitize ทุก outputs
- ใช้ parameterized queries
- Implement XSS prevention
- ใช้ allowlist validation

### 5. Security Headers

ใช้ security headers ครบถ้วน

- Implement CSP
- ใช้ HSTS
- Configure frame options
- Configure CORS properly
- ใช้ secure cookie flags

## Expected Outcome

- Authentication mechanisms ปลอดภัย
- Authorization rules ถูกต้อง
- Data ถูกเข้ารหัสอย่างเหมาะสม
- Input validation ครบถ้วน
- Security headers ถูกตั้งค่า
- Secrets ถูกจัดการอย่างปลอดภัย
- Security monitoring ตั้งค่าเสร็จ
- API security ปรับปรุงแล้ว
