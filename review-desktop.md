---
title: Review Desktop
description: Review desktop app ครอบคลุม Tauri/Electron patterns, native APIs, auto-update, และ platform compatibility
auto_execution_mode: 3
related:
  - /scan-codebase
  - /deep-analyze-codebase
  - /update-rules
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review desktop application quality ครอบคลุม native integration, window management, auto-update, IPC security, platform compatibility และ offline support

## Scope

desktop framework (Tauri, Electron), native API usage, window management, system tray, auto-update mechanism, IPC security, file system access, clipboard, notifications, keyboard shortcuts, platform-specific code (Windows, macOS, Linux), offline support, และ desktop UX patterns

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ desktop app structure
2. ระบุ desktop framework, native modules, และ platform targets ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-desktop.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ native API usage, IPC patterns, และ security boundaries ระหว่าง main/renderer processes
3. Script ตรวจสอบ window management, multi-window patterns, และ window state persistence
4. Script ตรวจสอบ auto-update mechanism, update signature verification, และ rollback capability
5. Script ตรวจสอบ file system access, path validation, และ sandbox restrictions
6. Script ตรวจสอบ platform-specific code, conditional compilation, และ platform feature detection
7. Script ตรวจสอบ offline support, local data persistence, และ sync conflict resolution
8. Script ตรวจสอบ desktop UX patterns: system tray, notifications, keyboard shortcuts, และ clipboard integration
9. Script คำนวณ desktop health score และ output เป็น structured JSON
10. ทำ `/update-rules` เพื่ออัปเดต ast-grep rules สำหรับ desktop patterns ที่พบ

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity: Critical → High → Medium → Low

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: IPC without validation, unrestricted file system access, missing sandbox, unverified auto-update
- **High**: missing platform-specific handling, broken native integration, missing auto-update rollback, no offline fallback
- **Medium**: inconsistent window state, missing keyboard shortcuts, suboptimal tray behavior, missing notification permissions
- **Low**: minor desktop UX improvement, naming convention สำหรับ desktop APIs

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number
- ระบุ platform ที่ affected และ mitigation ที่ขาด

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity, location, และ platform ที่ affected
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
