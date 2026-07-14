---
title: Review UX UI
description: Review UX/UI ครอบคลุม usability, user flows, interaction design, และ visual consistency
auto_execution_mode: 3
related:
  - /deep-analyze-with-use-scripts
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review UX/UI quality ครอบคลุม usability patterns, user flow design, interaction design, visual consistency และ user experience optimization

## Scope

user flow design, interaction patterns, visual hierarchy, UX writing, loading/empty/error states, navigation UX, และ visual consistency

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ UX/UI patterns
2. ระบุ UI framework, navigation patterns และ interaction design ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-with-use-scripts` เพื่อสร้าง `analyze-uxui.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ user flow design, navigation patterns, และ user journey completeness
3. Script ตรวจสอบ interaction design: loading states, empty states, error states, และ success feedback
4. Script ตรวจสอบ visual hierarchy, spacing consistency, และ visual design patterns
5. Script ตรวจสอบ UX writing quality, microcopy clarity, และ user guidance
6. Script คำนวณ UX/UI health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: broken user flow, dead-end state, no error recovery path
- **High**: missing loading state, confusing navigation, inconsistent interaction pattern
- **Medium**: minor visual inconsistency, unclear microcopy, missing empty state
- **Low**: cosmetic UX improvement, minor spacing adjustment

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
