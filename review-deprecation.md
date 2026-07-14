---
title: Review Deprecation
description: Review deprecation ครอบคลุม policy, backward compatibility, migration guides, และ breaking changes
auto_execution_mode: 3
related:
  - /deep-analyze-with-use-scripts
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review deprecation strategy quality ครอบคลุม deprecation policy, backward compatibility, migration guides และ breaking change management

## Scope

deprecation policy, backward compatibility, migration guides, breaking change management, deprecation notices, และ version sunset

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ deprecation structure
2. ระบุ deprecation patterns และ tools ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-with-use-scripts` เพื่อสร้าง `analyze-deprecation.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ deprecation policy, deprecation notices, และ deprecation timeline
3. Script ตรวจสอบ backward compatibility, compatibility layers, และ breaking change detection
4. Script ตรวจสอบ migration guides, migration tooling, และ migration path clarity
5. Script ตรวจสอบ version sunset, EOL communication, และ upgrade path
6. Script คำนวณ deprecation health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: breaking change without notice, no migration path, silent API removal
- **High**: missing deprecation notice, no migration guide, broken backward compat
- **Medium**: incomplete migration guide, missing sunset timeline, minor compat issue
- **Low**: minor deprecation improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
