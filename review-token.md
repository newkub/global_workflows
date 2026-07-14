---
title: Review Token
description: Review token management ครอบคลุม JWT expiry, refresh strategy, revocation และ rotation
auto_execution_mode: 3
related:
  - /deep-analyze-with-use-scripts
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review token management quality ครอบคลุม JWT expiry, refresh strategy, token revocation, token rotation และ token security

## Scope

token issuance, token expiry, token refresh, token revocation, token rotation, token storage และ token security

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ token management setup
2. ระบุ token provider, token type และ token lifecycle

### 2. Deep Analyze

1. ทำ `/deep-analyze-with-use-scripts` เพื่อสร้าง `analyze-token.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ token issuance: signing algorithm, claims, issuer, audience
3. Script ตรวจสอบ token expiry: access token TTL, refresh token TTL, expiry validation
4. Script ตรวจสอบ token refresh: refresh flow, refresh token rotation, reuse detection
5. Script ตรวจสอบ token revocation: revocation list, blacklist, immediate invalidation
6. Script ตรวจสอบ token rotation: key rotation, algorithm migration, backward compatibility
7. Script ตรวจสอบ token storage: client-side storage, server-side storage, token in cookie vs localStorage
8. Script ตรวจสอบ token security: signing key management, key exposure, token leak prevention
9. Script คำนวณ token health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: no token expiry, signing key exposed, no token revocation
- **High**: no refresh rotation, token in localStorage, missing key rotation
- **Medium**: inconsistent TTL, missing reuse detection, minor security gap
- **Low**: token naming convention, minor lifecycle improvement

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
