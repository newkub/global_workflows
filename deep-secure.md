---
title: Deep Secure
description: Security audit อย่างลึกซึ้ง ครอบคลุม OWASP, dependencies, secrets, auth, API
auto_execution_mode: 3
related_workflows:
  - /deep-thinking
  - /deep-research
  - /check-vulnerability
  - /analyze-security
  - /analyze-auth
  - /improve-security
  - /check-configuration
  - /comment-todo
  - /report-format-table
---

## Goal

Security audit อย่างลึกซึ้ง ครอบคลุม OWASP Top 10, dependencies, secrets, authentication, API security และ data protection

## Scope

ใช้สำหรับ security audit ครบวงจร ไม่ใช่การตรวจสอบเฉพาะ dependencies (ใช้ `/check-vulnerability`) ครอบคลุม: OWASP, dependencies, secrets, auth, API, data, config

## Execute

### 1. Deep Thinking Phase

ทำ `/deep-thinking` เพื่อวางแผน security audit

1. กำหนด audit scope และ threat model
2. ระบุ attack surfaces: web, API, auth, database, file upload
3. ระบุ assets ที่ต้องปกป้อง: user data, credentials, payment info
4. จัดลำดับ audit ตาม risk: Critical → High → Medium → Low

### 2. Dependency And Supply Chain

ทำ `/check-vulnerability` สำหรับ dependency vulnerabilities

1. ทำ `/check-vulnerability` ตรวจสอบ known vulnerabilities
2. ตรวจสอบ outdated dependencies ที่มี security patches
3. ตรวจสอบ transitive dependencies สำหรับ hidden vulnerabilities
4. ระบุ dependencies ที่ไม่ maintain แล้ว

### 3. Secrets And Configuration

ตรวจสอบ secrets exposure และ configuration

1. ค้นหา hardcoded secrets ด้วย `Grep` และ `/check-configuration`
2. ตรวจสอบ environment variables ที่ expose ต่อ client
3. ตรวจสอบ `.env` files ที่ commit ใน git
4. ตรวจสอบ API keys และ tokens ใน source code
5. ตรวจสอบ CI/CD secrets management

### 4. Authentication And Authorization

ทำ `/analyze-auth` สำหรับ auth security

1. ทำ `/analyze-auth` วิเคราะห์ auth flows และ session management
2. ตรวจสอบ JWT validation และ token rotation
3. ตรวจสอบ RBAC enforcement ที่ route และ API level
4. ตรวจสอบ password hashing แล<arg_value> MFA implementation
5. ตรวจสอบ OAuth/SSO configuration

### 5. API And Input Security

ตรวจสอบ API security และ input validation

1. ตรวจสอบ input validation และ sanitization ทุก API endpoint
2. ตรวจสอบ SQL injection, XSS, CSRF protection
3. ตรวจสอบ rate limiting และ DDoS protection
4. ตรวจสอบ API authentication และ authorization
5. ตรวจสอบ error messages ที่ leak sensitive info

### 6. Data Protection

ตรวจสอบ data protection และ privacy

1. ตรวจสอบ data encryption at rest และ in transit
2. ตรวจสอบ PII handling และ data minimization
3. ตรวจสอบ data retention และ deletion policies
4. ตรวจสอบ GDPR/privacy compliance
5. ตรวจสอบ database access controls

### 7. Research Current Threats

ทำ `/deep-research` เพื่อค้นหา current security threats

1. ค้นหา latest CVEs สำหรับ tech stack ที่ใช้
2. ค้นหา new attack vectors ที่เกี่ยวข้อง
3. ค้นหา security best practices ล่าสุด
4. เปรียบเทียบ findings กับ OWASP Top 10

### 8. Report And Remediate

1. ทำ `/comment-todo` สำหรับระบุ security issues ใน code
2. ทำ `/report-format-table` สร้างตาราง issues พร้อม severity, location, recommendation
3. จัดลำดับ: Critical → High → Medium → Low
4. แนะนำขั้นตอนถัดไป: `/improve-security` สำหรับแก้ไข issues

## Rules

### 1. Severity Classification

- **Critical**: exploitable vulnerability, data breach risk, hardcoded production secrets
- **High**: missing auth, missing input validation, sensitive data exposure
- **Medium**: missing rate limiting, weak encryption, info leakage in errors
- **Low**: missing security headers, minor config issues, documentation gaps

### 2. Audit Only

- ห้ามแก้ไข code ระหว่าง audit ใช้ `/comment-todo` สำหรับระบุ issues
- รายงาน issues ทั้งหมดพร้อม location และ severity
- ให้ actionable recommendations ที่นำไป implement ได้โดยตรง

### 3. Non-Redundancy

- อ้างถึง `/check-vulnerability` สำหรับ dependency scanning ไม่ duplicate
- อ้างถึง `/analyze-auth` สำหรับ auth analysis
- อ้างถึง `/analyze-security` สำหรับ security analysis
- เพิ่มคุณค่าด้วย OWASP coverage, data protection, current threats

### 4. Conditional Execution

- ถ้าไม่มี auth system ให้ข้าม auth review
- ถ้าไม่มี API ให้ข้าม API security review
- ถ้าไม่มี database ให้ข้าม data protection review
- ถ้าไม่มี payment ให้ข้าม payment security review

## Expected Outcome

- Security issues ระบุพร้อม severity, location, และ recommendation
- OWASP Top 10 ครอบคลุมทุกข้อ
- Dependencies ตรวจสอบ vulnerabilities ครบถ้วน
- Secrets exposure ตรวจสอบทั้ง source code และ config
- Auth และ API security ผ่านการ audit
- พร้อมสำหรับ `/improve-security` เพื่อแก้ไข issues
