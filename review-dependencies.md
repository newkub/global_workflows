---
title: Review Dependencies
description: Review dependencies ครอบคลุม versions, security, unused, และ compatibility
auto_execution_mode: 3
related:
  - /scan-codebase
  - /deep-analyze-codebase
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review dependencies ครอบคลุม versions, security vulnerabilities, unused packages และ compatibility

## Scope

dependency versions, security vulnerabilities, unused dependencies, transitive dependencies, และ compatibility

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ dependency landscape
2. ระบุ package manager และ dependency tools ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-dependencies.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ outdated dependencies, vulnerabilities, unused packages
3. Script ตรวจสอบ transitive dependencies, compatibility, และ duplicate packages
4. Script คำนวณ dependency health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: critical vulnerability, incompatible dependency
- **High**: high vulnerability, outdated major version
- **Medium**: unused dependency, outdated minor version
- **Low**: outdated patch version, duplicate package

### 2. Evidence-Based Findings

- ทุก finding ต้องมี package name และ version

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ package name
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
