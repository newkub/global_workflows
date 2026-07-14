---
title: Review Security
description: Orchestrator สำหรับ review security ครอบคลุม auth, RBAC, browser security, data leak, privacy, audit log, session, token, rate limiting
auto_execution_mode: 3
related:
  - /review-security-core
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

Orchestrate security review ครอบคลุมทุก dimension ของ security ผ่าน sub-workflows พร้อม aggregate findings

## Scope

security orchestrator สำหรับ: auth/secrets/vulnerabilities, RBAC, browser security, data leak, privacy, audit log, session, token, rate limiting

## Execute

### 1. Run Sub-Workflows

ทำ review-* sub-workflows ตามลำดับ ถ้าพบ critical issues ให้หยุดและ validate ก่อนดำเนินต่อ

1. ทำ `/review-security-core` เพื่อ review auth, secrets, input validation, vulnerabilities
2. ทำ `/review-rbac` เพื่อ review roles, permissions, route guards, enforcement
3. ทำ `/review-browser-security` เพื่อ review CSP, CORS, XSS, CSRF, security headers
4. ทำ `/review-data-leak` เพื่อ review sensitive data exposure, PII leaks, secrets ใน client
5. ทำ `/review-privacy` เพื่อ review GDPR, PII handling, consent, data deletion, retention
6. ทำ `/review-audit-log` เพื่อ review audit trail, user attribution, immutability, compliance
7. ทำ `/review-session` เพื่อ review session timeout, refresh, persistence, concurrent sessions
8. ทำ `/review-token` เพื่อ review JWT expiry, refresh strategy, revocation, rotation
9. ทำ `/review-rate-limiting` เพื่อ review middleware config, threshold tuning, bypass protection

### 2. Validate Findings

1. ทำ `/validate` สำหรับ validate issues จากทุก sub-workflow
2. จัดลำดับการ validate ตาม severity: Critical → High → Medium → Low

### 3. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง aggregate findings จากทุก sub-workflow
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

### 2. Delegation

- Orchestrator เรียก sub-workflows เท่านั้น ไม่ทำ review เอง
- ไม่ duplicate เนื้อหา sub-workflows

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง aggregate findings จากทุก security sub-workflow
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
