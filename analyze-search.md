---
title: Analyze Search
description: วิเคราะห์ search indexing, relevance, filtering, autocomplete, search UX
auto_execution_mode: 3
related_workflows:
  - /analyze-database
  - /analyze-performance
  - /improve-search
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ search functionality และ search UX เพื่อระบุ relevance และ performance issues

## Scope

Search indexing, relevance ranking, filtering, faceted search, autocomplete, search UX, typo tolerance, search performance, full-text search

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม search metrics ผ่าน scripts (query analysis, index detection, search pattern scan)

### 2. Check Search Indexing

1. ระบุ missing database indexes สำหรับ search columns
2. ระบุ missing full-text search index
3. ระบุ missing search engine integration (Elasticsearch, Meilisearch, Vectorize)
4. ระบุ missing index synchronization
5. ระบุ missing index optimization (analyzer, tokenizer)

### 3. Check Relevance Ranking

1. ระบุ missing relevance scoring
2. ระบุ missing ranking factors (popularity, recency, location)
3. ระบุ missing custom ranking rules
4. ระบุ missing business logic ใน ranking
5. ระบุ missing personalization ใน search results

### 4. Check Filtering And Facets

1. ระบุ missing filter options
2. ระบุ missing faceted search (category, price range, date)
3. ระบุ missing filter combinations
4. ระบุ missing filter state ใน URL
5. ระบุ missing active filter display

### 5. Check Autocomplete

1. ระบุ missing autocomplete/suggestions
2. ระบุ missing debounce ใน autocomplete requests
3. ระบุ missing keyboard navigation ใน suggestions
4. ระบุ missing recent searches
5. ระบุ missing popular searches

### 6. Check Typo Tolerance

1. ระบุ missing fuzzy search
2. ระบุ missing typo correction
3. ระบุ missing phonetic matching
4. ระบุ missing synonym expansion

### 7. Check Search Performance

1. ระบุ slow search queries
2. ระบุ missing search result caching
3. ระบุ missing search pagination
4. ระบุ missing search query optimization
5. ระบุ missing search result count limit

### 8. Check Search UX

1. ระบุ missing empty state สำหรับ no results
2. ระบุ missing search result highlighting
3. ระบุ missing search result preview
4. ระบุ missing search history
5. ระบุ missing search analytics

### 9. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: indexing → relevance → performance → filtering → autocomplete → typo → UX

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม location และ severity

### 2. Severity Classification

- **Critical**: no search indexing, no full-text search, slow search queries
- **High**: missing relevance ranking, missing filters, no autocomplete
- **Medium**: missing typo tolerance, missing facets, missing search UX
- **Low**: missing search analytics, missing search history, missing highlighting

### 3. Framework Awareness

- ตรวจสอบ Drizzle full-text search capabilities
- ตรวจสอบ Cloudflare Vectorize สำหรับ AI search
- ระบุ framework-specific search solutions

### 4. Use Scripts For Search Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ search pattern detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- Search gaps ระบุพร้อม location และ severity
- Indexing และ relevance issues จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-search`
