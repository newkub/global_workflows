---
title: Review Mobile
description: Review mobile app ครอบคลุม Capacitor plugins, platform-specific code, และ offline support
auto_execution_mode: 3
related:
  - /deep-analyze-codebase
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review mobile app quality ครอบคลุม Capacitor plugins, platform-specific code, offline support และ native bridge patterns

## Scope

Capacitor plugins, platform detection, native bridge, offline support, push notifications, mobile UX, และ mobile experience optimization

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ mobile app structure
2. ระบุ Capacitor plugins และ mobile framework ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-mobile.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ Capacitor plugin usage, platform detection, และ native bridge patterns
3. Script ตรวจสอบ offline support, push notification handling, และ biometric auth
4. Script ตรวจสอบ mobile UX: touch targets, safe area, และ responsive layout
5. Script คำนวณ mobile health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: broken native bridge, missing required plugin, app crash on platform
- **High**: missing offline support, broken push notification, missing platform detection
- **Medium**: inconsistent UX pattern, missing safe area, minor plugin issue
- **Low**: cosmetic improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
