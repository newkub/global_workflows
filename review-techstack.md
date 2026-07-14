---
title: Review Tech Stack
description: Review tech stack ครอบคลุม framework, library, runtime, และ compatibility
auto_execution_mode: 3
related:
  - /deep-analyze-codebase
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review tech stack quality ครอบคลุม framework choices, library versions, runtime compatibility, และ technology alignment กับ project requirements

## Scope

framework selection, library versions, runtime compatibility, build tools, package manager, และ technology alignment

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ tech stack structure
2. ระบุ frameworks, runtimes, build tools และ package manager ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-techstack.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ framework versions, compatibility matrix, และ EOL status
3. Script ตรวจสอบ library alignment กับ project requirements และ redundancy
4. Script ตรวจสอบ build tool configuration, package manager consistency, และ runtime requirements
5. Script คำนวณ tech stack health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: EOL framework, incompatible runtime, security-impacted version
- **High**: outdated major version, redundant library, missing compatibility
- **Medium**: minor version lag, suboptimal build tool, inconsistent package manager
- **Low**: cosmetic config improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
