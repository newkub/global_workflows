---
title: Review Rbac
description: Review RBAC implementation ครอบคลุม roles, permissions, role-permission mapping, route guards, server enforcement, client-side guards, และ tests
auto_execution_mode: 3
related:
  - /scan-codebase
  - /deep-analyze-codebase
  - /update-rules
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
  - /review-security
  - /review-routing
  - /review-api
  - /review-testing
---

## Goal

Review RBAC (Role-Based Access Control) implementation ครอบคลุม role definitions, permission definitions, role-permission mapping, client-side guards, server-side enforcement, route-level access control, role simulation, และ tests

## Scope

role definitions, permission lists, role-permission matrix, route permissions, route guards, server auth helpers, UI permission guards, role simulation/debug tools, RBAC tests

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ RBAC structure
2. ระบุ roles, permissions, guards, และ enforcement points ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-rbac.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ role definitions, permission lists, role-permission matrix consistency
3. Script ตรวจสอบ route guards, permission guards, server-side enforcement, และ missing guards
4. Script ตรวจสอบ role simulation/debug tooling, test coverage, และ RBAC audit logging
5. Script คำนวณ RBAC health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity: Critical → High → Medium → Low

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: unprotected admin route, missing server-side permission check, role bypass vulnerability, permission escalation
- **High**: inconsistent role-permission mapping, missing route guard, missing UI permission guard, stale role cache
- **Medium**: missing test coverage for role matrix, role simulation available in production, incomplete audit logging
- **Low**: naming convention, documentation gap, unused permission

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number
- ระบุ role, permission, หรือ route ที่เกี่ยวข้อง

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
