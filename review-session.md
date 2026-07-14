---
title: Review Session
description: Review session management ครอบคลุม timeout, refresh, persistence และ concurrent sessions
auto_execution_mode: 3
related:
  - /deep-analyze-with-use-scripts
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review session management quality ครอบคลุม session timeout, refresh strategy, persistence, concurrent session handling และ session security

## Scope

session creation, session timeout, session refresh, session persistence, concurrent session handling, session revocation และ session security

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใช้ session management setup
2. ระบุ session provider, session storage และ session lifecycle

### 2. Deep Analyze

1. ทำ `/deep-analyze-with-use-scripts` เพื่อสร้าง `analyze-session.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ session creation: secure session ID, session payload, session metadata
3. Script ตรวจสอบ session timeout: idle timeout, absolute timeout, sliding expiration
4. Script ตรวจสอบ session refresh: refresh token strategy, token rotation, refresh window
5. Script ตรวจสอบ session persistence: server-side storage, client-side storage, cookie config
6. Script ตรวจสอบ concurrent sessions: max sessions per user, session conflict, device management
7. Script ตรวจสอบ session revocation: logout, force logout, session invalidation
8. Script ตรวจสอบ session security: HTTPS only, HttpOnly cookie, SameSite attribute, CSRF protection
9. Script คำนวณ session health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: no session timeout, session ID in URL, missing HttpOnly cookie
- **High**: no session revocation, missing concurrent session limit, insecure cookie config
- **Medium**: inconsistent timeout, missing refresh strategy, minor security gap
- **Low**: session naming convention, minor lifecycle improvement

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
