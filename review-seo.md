---
title: Review SEO
description: Review SEO ครอบคลุม metadata, structured data, sitemap, และ search engine optimization
auto_execution_mode: 3
related:
  - /deep-analyze-codebase
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review SEO quality ครอบคลุม metadata, structured data, sitemap, robots.txt และ search engine optimization patterns

## Scope

meta tags, Open Graph, Twitter Cards, structured data (JSON-LD), sitemap, robots.txt, canonical URLs, และ semantic HTML

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ SEO structure
2. ระบุ SEO tools และ metadata patterns ที่ใช้

### 2. Deep Analyze

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-seo.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ meta tags coverage, Open Graph, Twitter Cards, และ canonical URLs
3. Script ตรวจสอบ structured data (JSON-LD), sitemap completeness, และ robots.txt
4. Script ตรวจสอบ semantic HTML, heading hierarchy, และ image alt texts
5. Script คำนวณ SEO health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: missing meta tags on key pages, no sitemap, blocked indexing
- **High**: missing structured data, broken canonical, missing Open Graph
- **Medium**: incomplete meta description, missing alt text, heading hierarchy issue
- **Low**: minor metadata improvement, naming convention

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
