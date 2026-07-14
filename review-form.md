---
title: Review Form
description: Review form handling ครอบคลุม validation, UX, accessibility, และ state management
auto_execution_mode: 3
related:
  - /deep-analyze-with-use-scripts
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review form handling quality ครอบคลุม form validation, field UX, accessibility, error display และ form state management

## Scope

form validation schemas, field validation, error messages, form state management, submit handling, field accessibility, และ form UX patterns

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ form patterns
2. ระบุ form library, validation library และ form state management ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-with-use-scripts` เพื่อสร้าง `analyze-form.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ form validation schemas, field rules, และ error message quality
3. Script ตรวจสอบ form state management, submit handling, และ loading states
4. Script ตรวจสอบ field accessibility, label association, และ keyboard navigation
5. Script ตรวจสอบ form UX: inline validation, error display, และ success feedback
6. Script คำนวณ form health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: missing validation on critical field, no submit error handling, inaccessible form
- **High**: missing error message, no loading state, broken keyboard navigation
- **Medium**: inconsistent validation, missing inline feedback, minor accessibility gap
- **Low**: cosmetic form improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
