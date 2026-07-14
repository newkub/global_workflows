---
title: Review Delivery
description: Orchestrator สำหรับ review delivery ครอบคลุม SEO, content, DX, docs, versioning, analytics, testing, PR, logging, debugging
auto_execution_mode: 3
related:
  - /scan-codebase
  - /deep-analyze-codebase
  - /review-docs
  - /review-seo
  - /review-dx
  - /review-analytics
  - /review-testing
  - /review-pr
  - /review-logging
  - /review-debugging
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Orchestrate delivery review ครอบคลุมทุก dimension ของ delivery ผ่าน core analysis และ sub-workflows พร้อม aggregate findings

## Scope

delivery orchestrator สำหรับ: core delivery quality (SEO, content delivery, DX, documentation, versioning, release notes, deprecation), documentation, SEO, developer experience, analytics, testing, PR, logging, debugging

## Execute

### 1. Prepare And Scan

1. ทำ `/scan-codebase` เพื่อเข้าใจ delivery setup
2. ระบุ delivery channels, documentation tools, และ versioning strategy ที่ใช้

### 2. Deep Analyze Core

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-delivery.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ SEO readiness, content delivery patterns, และ delivery channel coverage
3. Script ตรวจสอบ developer experience: onboarding flow, API documentation, และ SDK usability
4. Script ตรวจสอบ documentation quality, README completeness, และ example coverage
5. Script ตรวจสอบ versioning strategy, changelog quality, release notes, และ deprecation policy
6. Script คำนวณ delivery readiness score และ output เป็น structured JSON

### 3. Run Sub-Workflows

ทำ review-* sub-workflows ตามลำดับ ถ้าพบ critical issues ให้หยุดและ validate ก่อนดำเนินต่อ

1. ทำ `/review-docs` เพื่อ review README, API docs, examples, content coverage, DX
2. ทำ `/review-seo` เพื่อ review metadata, structured data, sitemap
3. ทำ `/review-dx` เพื่อ review onboarding, development tooling, debug experience, documentation usability
4. ทำ `/review-analytics` เพื่อ review event tracking, conversion funnels, implementation, data accuracy
5. ทำ `/review-testing` เพื่อ review coverage, test quality, isolation, test coverage analysis
6. ทำ `/review-pr` เพื่อ review pull request quality, branch protection, review checklist, merge readiness
7. ทำ `/review-logging` เพื่อ review log levels, structured logging, audit trail, monitoring
8. ทำ `/review-debugging` เพื่อ review error messages, logging context, traceability, debuggability

### 4. Validate Findings

1. ทำ `/validate` สำหรับ validate issues จากทุก sub-workflow และ core analysis
2. จัดลำดับการ validate ตาม severity: Critical → High → Medium → Low

### 5. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง aggregate findings จากทุก sub-workflow และ core analysis
3. ทำ `/suggest-next-action`

## Rules

### 1. Skip Conditions

- ถ้า project ไม่มี documentation site ให้ข้าม `/review-docs`
- ถ้า project ไม่มี web pages ให้ข้าม `/review-seo`
- ถ้า project ไม่มี developer tooling ให้ข้าม `/review-dx`
- ถ้า project ไม่มี analytics ให้ข้าม `/review-analytics`
- ถ้า project ไม่มี tests ให้ข้าม `/review-testing`
- ถ้า project ไม่มี pull request workflow ให้ข้าม `/review-pr`
- ถ้า project ไม่มี logging ให้ข้าม `/review-logging`
- ถ้า project ไม่มี debugging setup ให้ข้าม `/review-debugging`

### 2. Severity Classification

- **Critical**: no documentation, broken delivery channel, no versioning strategy
- **High**: missing README, incomplete API docs, no changelog, poor DX
- **Medium**: suboptimal content delivery, missing examples, incomplete release notes
- **Low**: minor documentation improvement, naming convention

### 3. Delegation

- Orchestrator เรียก sub-workflows เท่านั้น ไม่ทำ review เอง ยกเว้น core analysis ใน Step 2
- ไม่ duplicate เนื้อหา sub-workflows

### 4. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number
- ไม่เดา ใช้ tools สำหรับ verification

### 5. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง aggregate findings จากทุก delivery sub-workflow และ core analysis
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
