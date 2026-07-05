---
title: Improve Security
description: ปรับปรุง security, compliance และ privacy
auto_execution_mode: 3
related_workflows:
  - /check-vulnerability
  - /run-audit
  - /improve-authentication
  - /improve-rbac
  - /improve-compliance
  - /improve-privacy
  - /improve-rate-limiting
  - /improve-audit-trail
  - /improve-multi-tenancy
---

## Goal

ปรับปรุง security, compliance และ privacy ของ codebase

## Scope

ใช้สำหรับการปรับปรุงด้าน security และ compliance ของ codebase

## Execute

### 1. Check Security

1. ตรวจสอบ authentication และ authorization
2. ตรวจสอบ data protection และ input validation
3. ตรวจสอบ security headers และ secrets management

### 2. Test Security

1. ทำ `/run-test` เพื่อทดสอบ security ครบถ้วน
2. ทดสอบ XSS, SQL Injection, CSRF
3. ทดสอบ authentication bypass และ authorization flaws
4. Scan สำหรับ secrets และรัน DAST scans

### 3. Check Vulnerabilities

1. ทำ `/check-vulnerability` เพื่อตรวจสอบ dependencies vulnerabilities
2. รัน dependency scans และตรวจสอบ outdated packages
3. Review transitive dependencies

### 4. Run Security Audit

1. ทำ `/run-audit` เพื่อ audit dependencies และ security
2. รัน security scanning tools และตรวจสอบ misconfigurations
3. แก้ไข security issues ที่พบ

### 5. Rate Limiting

1. ทำ `/improve-rate-limiting` เพื่อปรับปรุง rate limiting, throttling และ DDoS protection ครบวงจร

### 6. Fix Issues

1. แก้ไข critical issues ก่อน จากนั้น high, medium, low
2. Update dependencies ที่มี vulnerabilities
3. Document security fixes

### 7. Compliance And Privacy

1. ถ้า project มี authentication ทำ `/improve-authentication`
2. ทำ `/improve-rbac` เพื่อปรับปรุง Role-Based Access Control
3. ถ้า project มี compliance requirements ทำ `/improve-compliance`
4. ถ้า project มี privacy requirements ทำ `/improve-privacy`
5. ถ้า project ต้องการ audit trail ทำ `/improve-audit-trail`
6. ถ้า project เป็น multi-tenant ทำ `/improve-multi-tenancy`

## Rules

### 1. Security Best Practices

ทำตาม security best practices

- ใช้ strong password hashing (bcrypt, Argon2)
- ใช้ secure session management
- ใช้ HTTPS สำหรับทุก connections
- ใช้ rate limiting สำหรับ APIs
- Validate และ sanitize ทุก user inputs

### 2. Priority-Based Fixes

แก้ไขตามลำดับความสำคัญ

- Critical: แก้ทันที (remote code execution, data exposure)
- High: แก้ภายใน 1 สัปดาห์ (injection attacks, auth bypass)
- Medium: แก้ภายใน 1 เดือน (XSS, CSRF)
- Low: แก้ตาม schedule (information disclosure)

### 3. Secrets Management

จัดการ secrets อย่างปลอดภัย

- ไม่เก็บ secrets ใน code หรือ config files
- ใช้ environment variables สำหรับ sensitive data
- Implement secret rotation
- Monitor secret access logs

### 4. Continuous Monitoring

ตรวจสอบ security อย่างต่อเนื่อง

- รัน dependency scans ทุกครั้งที่มีการ update packages
- Monitor security advisories สำหรับ dependencies
- Integrate security testing ใน CI/CD
- Document security issues และ fixes

## Expected Outcome

- Authentication mechanisms ปลอดภัย
- Authorization rules ถูกต้อง
- Data ถูกเข้ารหัสอย่างเหมาะสม
- Input validation ครบถ้วน
- Security headers ถูกตั้งค่า
- Secrets ถูกจัดการอย่างปลอดภัย
- Dependencies ปลอดภัยจาก known vulnerabilities
- Security testing integrated ใน CI/CD
