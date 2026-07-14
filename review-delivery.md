---
title: Review Delivery
description: Orchestrator สำหรับ review delivery ครอบคลุม SEO, docs, DX, analytics, testing, PR, logging, debugging
auto_execution_mode: 3
related:
  - /review-delivery-core
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

Orchestrate delivery review ครอบคลุมทุก dimension ของ delivery ผ่าน sub-workflows พร้อม aggregate findings

## Scope

delivery orchestrator สำหรับ: SEO/content/DX/docs/versioning, documentation, SEO, developer experience, analytics, testing, PR, logging, debugging

## Execute

### 1. Run Sub-Workflows

ทำ review-* sub-workflows ตามลำดับ ถ้าพบ critical issues ให้หยุดและ validate ก่อนดำเนินต่อ

1. ทำ `/review-delivery-core` เพื่อ review SEO, content delivery, DX, documentation, versioning
2. ทำ `/review-docs` เพื่อ review README, API docs, examples, content coverage, DX
3. ทำ `/review-seo` เพื่อ review metadata, structured data, sitemap
4. ทำ `/review-dx` เพื่อ review onboarding, development tooling, debug experience, documentation usability
5. ทำ `/review-analytics` เพื่อ review event tracking, conversion funnels, implementation, data accuracy
6. ทำ `/review-testing` เพื่อ review coverage, test quality, isolation, test coverage analysis
7. ทำ `/review-pr` เพื่อ review pull request quality, branch protection, review checklist, merge readiness
8. ทำ `/review-logging` เพื่อ review log levels, structured logging, audit trail, monitoring
9. ทำ `/review-debugging` เพื่อ review error messages, logging context, traceability, debuggability

### 2. Validate Findings

1. ทำ `/validate` สำหรับ validate issues จากทุก sub-workflow
2. จัดลำดับการ validate ตาม severity: Critical → High → Medium → Low

### 3. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง aggregate findings จากทุก sub-workflow
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

### 2. Delegation

- Orchestrator เรียก sub-workflows เท่านั้น ไม่ทำ review เอง
- ไม่ duplicate เนื้อหา sub-workflows

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง aggregate findings จากทุก delivery sub-workflow
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
