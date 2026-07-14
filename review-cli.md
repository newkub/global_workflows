---
title: Review CLI
description: Review CLI และ TUI tools ครอบคลุม commands, options, help text, terminal UI, และ user experience
auto_execution_mode: 3
related:
  - /deep-analyze-with-use-scripts
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review CLI และ TUI tools quality ครอบคลุม commands, options, help documentation, error messages, terminal UI layout, rendering และ user experience

## Scope

command structure, options/flags, help text, error messages, exit codes, interactive mode, argument parsing, TUI layout, input handling, rendering performance, terminal compatibility, color support, และ TUI accessibility

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ CLI structure
2. ระบุ CLI framework และ argument parser ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-with-use-scripts` เพื่อสร้าง `analyze-cli.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ command structure, options, flags, และ argument parsing
3. Script ตรวจสอบ help text completeness, error messages, และ exit codes
4. Script ตรวจสอบ interactive mode, autocomplete, และ configuration file support
5. Script ตรวจสอบ TUI layout, component composition, resize handling, และ focus management
6. Script ตรวจสอบ TUI color support, terminal compatibility, และ rendering performance
7. Script คำนวณ CLI/TUI health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: broken command, missing required command, incorrect exit code, broken TUI layout, unhandled input, terminal crash
- **High**: missing help text, confusing error message, missing required option, rendering glitch, missing resize handling, broken focus
- **Medium**: inconsistent flag naming, missing autocomplete, missing config file, inconsistent color, missing key binding, minor layout issue
- **Low**: minor help text improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
