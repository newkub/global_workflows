---
title: Review Search
description: Review search ครอบคลุม indexing, relevance, filtering, autocomplete, และ search UX
auto_execution_mode: 3
related:
  - /deep-analyze-codebase
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review search quality ครอบคลุม search indexing, relevance, filtering, autocomplete และ search UX patterns

## Scope

search indexing, relevance scoring, filtering, autocomplete, search UX, search performance, และ pagination patterns

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ search structure
2. ระบุ search engine และ indexing tools ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-search.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ search indexing, index coverage, และ index freshness
3. Script ตรวจสอบ relevance scoring, filtering logic, และ sort options
4. Script ตรวจสอบ autocomplete, search UX, และ search result rendering
5. Script คำนวณ search health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: broken search, missing index, incorrect search results
- **High**: poor relevance, missing filter, broken autocomplete
- **Medium**: inconsistent ranking, missing sort option, minor UX issue
- **Low**: cosmetic improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
