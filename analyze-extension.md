---
title: Analyze Extension
description: วิเคราะห์ browser/IDE extension quality, permissions, lifecycle, performance
auto_execution_mode: 3
related_workflows:
  - /analyze-performance
  - /analyze-security
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ extension quality เพื่อระบุ permission และ lifecycle gaps

## Scope

Extension permissions, lifecycle management, performance impact, content scripts, background scripts, messaging, storage

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม extension metrics ผ่าน scripts (manifest scan, permission analysis, script detection)

### 2. Check Permissions

1. ระบุ over-privileged permissions ใน manifest
2. ระบุ missing optional permissions
3. ระบุ missing permission justification
4. ระบุ missing host permissions validation
5. ระบุ missing content security policy

### 3. Check Lifecycle Management

1. ระบุ missing background script lifecycle (service worker vs persistent)
2. ระบุ missing extension install/update events
3. ระบุ missing cleanup on uninstall
4. ระบุ missing state migration on update
5. ระบุ missing alarm management

### 4. Check Content Scripts

1. ระบุ missing content script URL matching
2. ระบุ missing content script CSS isolation
3. ระบุ missing content script error handling
4. ระบุ missing dynamic content script injection
5. ระบุ missing content script cleanup

### 5. Check Messaging

1. ระบุ missing message type validation
2. ระบุ missing message error handling
3. ระบุ missing message response timeout
4. ระบุ missing cross-origin messaging security
5. ระบุ missing message channel cleanup

### 6. Check Performance

1. ระบุ missing background script idle optimization
2. ระบุ missing content script debounce/throttle
3. ระบุ missing memory leak prevention
4. ระบุ missing DOM observation cleanup
5. ระบุ missing batching สำหรับ storage operations

### 7. Check Storage

1. ระบุ missing storage quota management
2. ระบุ missing storage schema versioning
3. ระบุ missing storage migration
4. ระบุ missing sensitive data encryption
5. ระบุ missing storage cleanup

### 8. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: permissions → lifecycle → messaging → performance → content scripts → storage

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม severity

### 2. Severity Classification

- **Critical**: over-privileged permissions, missing CSP, missing message validation
- **High**: missing lifecycle cleanup, missing storage encryption, memory leaks
- **Medium**: missing debounce, missing storage migration, missing alarms
- **Low**: missing optional permissions, missing dynamic injection, missing batching

### 3. Framework Awareness

- ตรวจสอบ Manifest V3 patterns
- ตรวจสอบ WXT framework integration
- ระบุ browser-specific APIs

### 4. Use Scripts For Extension Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ `/use-scripts` สำหรับ manifest scanning

## Expected Outcome

- Extension gaps ระบุพร้อม severity
- Permission และ lifecycle issues จัดลำดับตาม impact
- พร้อมสำหรับ further improvement
