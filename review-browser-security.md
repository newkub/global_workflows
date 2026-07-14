---
title: Review Browser Security
description: Review browser security ครอบคลุม CSP, CORS, XSS, CSRF, secure headers, และ cookie security
auto_execution_mode: 3
related:
  - /scan-codebase
  - /deep-analyze-with-use-scripts
  - /update-rules
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review browser security ครอบคลุม Content Security Policy, CORS, XSS prevention, CSRF protection, security headers และ cookie security

## Scope

CSP configuration, CORS policy, XSS prevention (DOM manipulation, innerHTML, dangerouslySetInnerHTML), CSRF protection, security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy), cookie security (HttpOnly, Secure, SameSite), subresource integrity, mixed content prevention, และ clickjacking prevention

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าunderstand browser security configuration
2. ระบุ web server framework, middleware, และ security headers configuration ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-with-use-scripts` เพื่อสร้าง `analyze-browser-security.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ CSP configuration, missing directives, unsafe-inline, และ unsafe-eval
3. Script ตรวจสอบ CORS policy, origin validation, credentials configuration, และ wildcard origins
4. Script ตรวจสอบ XSS prevention: DOM manipulation patterns, innerHTML usage, dangerouslySetInnerHTML, และ missing sanitization
5. Script ตรวจสอบ CSRF protection: token validation, SameSite cookies, และ origin checking
6. Script ตรวจสอบ security headers: X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, และ Strict-Transport-Security
7. Script ตรวจสอบ cookie security: HttpOnly, Secure, SameSite attributes และ cookie expiration
8. Script ตรวจสอบ subresource integrity, mixed content (HTTP resources on HTTPS pages), และ clickjacking prevention
9. Script คำนวณ browser security health score และ output เป็น structured JSON
10. ทำ `/update-rules` เพื่ออัปเดต ast-grep rules สำหรับ browser security patterns ที่พบ

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity: Critical → High → Medium → Low

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: XSS vulnerability, missing CSP, wildcard CORS with credentials, no CSRF protection, secrets in client-accessible cookies
- **High**: missing security headers, unsafe-inline CSP, missing SameSite cookies, innerHTML without sanitization, mixed content
- **Medium**: incomplete CSP directives, missing Permissions-Policy, missing subresource integrity, weak cookie attributes
- **Low**: minor header improvement, naming convention สำหรับ security configuration

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number
- ระบุ attack vector และ mitigation ที่ขาด

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity, location, และ attack vector
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
