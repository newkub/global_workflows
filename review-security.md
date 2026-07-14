---
title: Review Security
description: Orchestrator สำหรับ review security ครอบคลุม auth, secrets, vulnerabilities, RBAC, browser security, data leak, privacy, audit log, session, token, rate limiting
auto_execution_mode: 3
related:
  - /scan-codebase
  - /deep-analyze-codebase
  - /review-rbac
  - /review-browser-security
  - /review-data-leak
  - /review-privacy
  - /review-audit-log
  - /review-session
  - /review-token
  - /review-rate-limiting
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Orchestrate security review ครอบคลุมทุก dimension ของ security ผ่าน core analysis และ sub-workflows พร้อม aggregate findings

## Scope

security orchestrator สำหรับ: core security (auth, secrets, input validation, dependency vulnerabilities, API security), RBAC, browser security, data leak, privacy, audit log, session, token, rate limiting

## Execute

### 1. Prepare And Scan

1. ทำ `/scan-codebase` เพื่อเข้าใจ security structure
2. ระบุ auth provider และ security tools ที่ใช้

### 2. Deep Analyze Core

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-security.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ hardcoded secrets, auth patterns, RBAC enforcement
3. Script ตรวจสอบ input validation, sanitization, และ dependency vulnerabilities
4. Script คำนวณ security health score และ output เป็น structured JSON

### 3. Run Sub-Workflows

ทำ review-* sub-workflows ตามลำดับ ถ้าพบ critical issues ให้หยุดและ validate ก่อนดำเนินต่อ

1. ทำ `/review-rbac` เพื่อ review roles, permissions, route guards, enforcement
2. ทำ `/review-browser-security` เพื่อ review CSP, CORS, XSS, CSRF, security headers
3. ทำ `/review-data-leak` เพื่อ review sensitive data exposure, PII leaks, secrets ใน client
4. ทำ `/review-privacy` เพื่อ review GDPR, PII handling, consent, data deletion, retention
5. ทำ `/review-audit-log` เพื่อ review audit trail, user attribution, immutability, compliance
6. ทำ `/review-session` เพื่อ review session timeout, refresh, persistence, concurrent sessions
7. ทำ `/review-token` เพื่อ review JWT expiry, refresh strategy, revocation, rotation
8. ทำ `/review-rate-limiting` เพื่อ review middleware config, threshold tuning, bypass protection

### 4. Validate Findings

1. ทำ `/validate` สำหรับ validate issues จากทุก sub-workflow และ core analysis
2. จัดลำดับการ validate ตาม severity: Critical → High → Medium → Low

### 5. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง aggregate findings จากทุก sub-workflow และ core analysis
3. ทำ `/suggest-next-action`

## Rules

### 1. Skip Conditions

- ถ้า project ไม่มี RBAC ให้ข้าม `/review-rbac`
- ถ้า project ไม่มี web browser ให้ข้าม `/review-browser-security`
- ถ้า project ไม่มี sensitive data หรือ PII ให้ข้าม `/review-data-leak` และ `/review-privacy`
- ถ้า project ไม่มี audit logging ให้ข้าม `/review-audit-log`
- ถ้า project ไม่มี session management ให้ข้าม `/review-session`
- ถ้า project ไม่มี JWT tokens ให้ข้าม `/review-token`
- ถ้า project ไม่มี rate limiting ให้ข้าม `/review-rate-limiting`

### 2. Severity Classification

- **Critical**: hardcoded secrets, unauthenticated endpoint, SQL injection
- **High**: missing RBAC, missing input validation, vulnerable dependency
- **Medium**: weak auth pattern, missing rate limiting
- **Low**: documentation gap, minor improvement

### 3. Delegation

- Orchestrator เรียก sub-workflows เท่านั้น ไม่ทำ review เอง ยกเว้น core analysis ใน Step 2
- ไม่ duplicate เนื้อหา sub-workflows

### 4. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number
- ไม่เดา ใช้ tools สำหรับ verification

### 5. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง aggregate findings จากทุก security sub-workflow และ core analysis
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
