---
title: Improve Security
description: ปรับปรุง security ให้ปลอดภัยด้วย best practices และ vulnerability scanning
auto_execution_mode: 3
related_workflows:
  - check-security
  - test-security
  - check-vulnerability
  - run-audit
---

## Goal

ปรับปรุง security ให้ปลอดภัยด้วย best practices และ vulnerability scanning

## Scope

ใช้สำหรับปรับปรุง security ของ applications ทั้ง web, mobile, และ desktop

## Execute

### 1. Check Security

ตรวจสอบ security ปัจจุบัน

- ทำ `/check-security` เพื่อตรวจสอบ security best practices
- ตรวจสอบ authentication และ authorization
- ตรวจสอบ data protection
- ตรวจสอบ input validation
- ตรวจสอบ security headers
- ตรวจสอบ secrets management

### 2. Test Security

ทดสอบ security vulnerabilities

- ทำ `/run-test` เพื่อทดสอบ security ครบถ้วน
- ทดสอบ XSS, SQL Injection, CSRF
- ทดสอบ authentication bypass
- ทดสอบ authorization flaws
- Scan สำหรับ secrets
- รัน DAST scans

### 3. Check Vulnerabilities

ตรวจสอบ vulnerabilities ใน dependencies

- ทำ `/check-vulnerability` เพื่อตรวจสอบ dependencies vulnerabilities
- รัน dependency scans
- ตรวจสอบ outdated packages
- Review transitive dependencies

### 4. Run Security Audit

รัน security audit

- ทำ `/run-audit` เพื่อ audit dependencies และ security
- รัน security scanning tools
- ตรวจสอบ misconfigurations
- แก้ไข security issues ที่พบ

### 5. Fix Issues

แก้ไข security issues

- แก้ไข critical issues ก่อน
- แก้ไข high priority issues
- แก้ไข medium และ low issues
- Update dependencies ที่มี vulnerabilities
- Document security fixes

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
