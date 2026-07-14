---
title: Review Config Files
description: Review config files ครอบคลุม tsconfig, vite, biome, env-specific configs, และ consistency
auto_execution_mode: 3
related:
  - /deep-analyze-with-use-scripts
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review configuration file quality ครอบคลุม tsconfig, vite config, biome config, environment-specific configs และ config consistency

## Scope

tsconfig, vite config, biome config, environment configs, config consistency, และ config documentation

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ config-files structure
2. ระบุ config-files patterns และ tools ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-with-use-scripts` เพื่อสร้าง `analyze-config-files.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ tsconfig, compiler options, path aliases, และ project references
3. Script ตรวจสอบ vite config, build options, plugin configuration, และ dev server settings
4. Script ตรวจสอบ biome config, lint rules, format rules, และ ignore patterns
5. Script ตรวจสอบ config consistency across workspaces, config documentation, และ config duplication
6. Script คำนวณ config-files health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: broken config, conflicting settings, missing required config
- **High**: inconsistent config across workspaces, missing path alias, suboptimal compiler option
- **Medium**: minor config inconsistency, missing documentation, suboptimal setting
- **Low**: minor config improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
