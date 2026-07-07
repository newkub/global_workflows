---
title: Analyze Security
description: วิเคราะห์ security vulnerabilities, OWASP, auth flaws, injection, secrets exposure
auto_execution_mode: 3
related_workflows:
  - /improve-security
  - /check-vulnerability
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ security vulnerabilities ของ codebase เพื่อระบุ OWASP Top 10 และ security issues

## Scope

OWASP Top 10, authentication flaws, authorization gaps, injection patterns, secrets exposure, XSS, CSRF, IDOR, insecure crypto, security headers, dependency vulnerabilities

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม security metrics ผ่าน scripts (dependency scan, secret detection, header analysis)

### 2. Check OWASP Top 10

1. ระบุ injection vulnerabilities (SQL, command, template, LDAP)
2. ระบุ broken authentication (weak session, missing MFA, predictable tokens)
3. ระบุ sensitive data exposure (plaintext storage, weak encryption, missing TLS)
4. ระบุ XXE vulnerabilities (XML external entity)
5. ระบุ broken access control (IDOR, missing authorization, privilege escalation)
6. ระบุ security misconfiguration (default credentials, verbose errors, missing headers)
7. ระบุ XSS vulnerabilities (reflected, stored, DOM-based)
8. ระบุ insecure deserialization
9. ระบุ components with known vulnerabilities (outdated deps)
10. ระบุ insufficient logging and monitoring

### 3. Check Authentication And Authorization

1. ระบุ missing authorization checks ใน routes/handlers
2. ระบุ privilege escalation paths
3. ระบุ weak password policies
4. ระบุ missing rate limiting บน auth endpoints
5. ระบุ session management issues (fixation, no expiry, no rotation)
6. ระบุ missing RBAC enforcement

### 4. Check Secrets Exposure

1. ระบุ hardcoded credentials, API keys, และ secrets
2. ระบุ secrets ใน logs, error messages, และ responses
3. ระบุ missing environment variable validation
4. ระบุ secrets ใน version control (`.env` committed)
5. ทำ `/check-vulnerability` เพื่อ scan dependencies

### 5. Check Input Validation

1. ระบุ missing input validation ที่ trust boundaries
2. ระบุ missing schema validation ที่ API endpoints
3. ระบุ coercion ที่ไม่ปลอดภัย (Number(), parseInt โดยไม่ check NaN)
4. ระบุ missing output encoding สำหรับ XSS prevention

### 6. Check Security Headers

1. ระบุ missing security headers (CSP, HSTS, X-Frame-Options, X-Content-Type-Options)
2. ระบุ insecure CORS configuration
3. ระบุ missing CSRF protection
4. ระบุ insecure cookie settings (missing HttpOnly, Secure, SameSite)

### 7. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม severity: Critical (injection, auth bypass) → High (XSS, CSRF, secrets) → Medium (misconfiguration) → Low (logging)

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม location และ severity

### 2. Severity Classification

- **Critical**: injection, auth bypass, RCE, privilege escalation
- **High**: XSS, CSRF, secrets exposure, broken access control
- **Medium**: security misconfiguration, missing headers, weak crypto
- **Low**: insufficient logging, missing monitoring

### 3. Use Scripts For Batch Scanning

- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์
- ใช้ `/check-vulnerability` สำหรับ dependency vulnerabilities

## Expected Outcome

- Security vulnerabilities ระบุพร้อม OWASP category และ severity
- พร้อมสำหรับ `/improve-security`
