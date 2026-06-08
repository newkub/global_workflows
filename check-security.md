---
title: Check Security
description: ตรวจสอบ security best practices และ mechanisms
auto_execution_mode: 3
related_workflows:
  - /check-vulnerability
  - /run-audit
---

## Goal

ตรวจสอบ security best practices และ mechanisms ใน codebase

## Execute

### 1. Check Authentication

1. ตรวจสอบ authentication mechanisms ถูกต้อง
2. ตรวจสอบ password policies
3. ตรวจสอบ session management
4. ตรวจสอบ multi-factor authentication (ถ้าจำเป็น)

### 2. Check Authorization

1. ตรวจสอบ authorization rules ถูกต้อง
2. ตรวจสอบ role-based access control
3. ตรวจสอบ permission checks
4. ตรวจสอบ privilege escalation prevention

### 3. Check Data Protection

1. ตรวจสอบ encryption ใน transit (TLS/SSL)
2. ตรวจสอบ encryption ใน rest
3. ตรวจสอบ sensitive data handling
4. ตรวจสอบ data masking

### 4. Check Input Validation

1. ตรวจสอบ input validation ทุก entry points
2. ตรวจสอบ output encoding
3. ตรวจสอบ SQL injection prevention
4. ตรวจสอบ XSS prevention

### 5. Check Security Headers

1. ตรวจสอบ security headers (CSP, HSTS, X-Frame-Options)
2. ตรวจสอบ CORS configuration
3. ตรวจสอบ cookie security flags
4. ตรวจสอบ content type headers

### 6. Check Secrets Management

1. ตรวจสอบ secrets ไม่ถูก hardcode
2. ตรวจสอบ environment variables สำหรับ secrets
3. ตรวจสอบ secret rotation
4. ตรวจสอบ secret access logs

### 7. Run Security Audit

1. รัน security scanning tools
2. ตรวจสอบ security vulnerabilities
3. ตรวจสอบ misconfigurations
4. แก้ไข security issues ที่พบ

## Rules

### 1. Authentication Best Practices

- ใช้ strong password hashing (bcrypt, Argon2)
- ใช้ secure session management
- ใช้ HTTPS สำหรับ authentication
- ใช้ rate limiting สำหรับ login attempts

### 2. Authorization Best Practices

- ใช้ principle of least privilege
- ตรวจสอบ permissions ทุก request
- ใช้ role-based access control
- ลบ unused permissions

### 3. Data Protection

- เข้ารหัส sensitive data ใน rest
- ใช้ TLS 1.2+ สำหรับ transit
- ใช้ key management ที่เหมาะสม
- ลบ sensitive data เมื่อไม่จำเป็น

### 4. Priority Levels

- Critical: security vulnerabilities รุนแรง
- High: security misconfigurations
- Medium: security best practices ที่ขาด
- Low: เป็น security optimizations

## Expected Outcome

- Authentication mechanisms ปลอดภัย
- Authorization rules ถูกต้อง
- Data ถูกเข้ารหัสอย่างเหมาะสม
- Input validation ครบถ้วน
- Security headers ถูกตั้งค่า
- Secrets ถูกจัดการอย่างปลอดภัย
