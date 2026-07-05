---
title: Improve Search
description: ปรับปรุง search indexing, relevance, filtering, autocomplete และ search UX
auto_execution_mode: 3
related_workflows:
  - improve-backend
  - improve-database
  - improve-api-design
  - improve-uxui
  - improve-performance-tuning
---

## Goal

ปรับปรุง search functionality ทั้ง indexing, relevance tuning, filter/facet, autocomplete, และ search UX

## Scope

ใช้สำหรับ project ที่มี search functionality ต้องการปรับปรุง search experience และ performance

## Execute

### 1. Analyze Current Search

วิเคราะห์ search ปัจจุบัน

1. ตรวจสอบ search engine ที่ใช้ (PostgreSQL FTS, Elasticsearch, Meilisearch, etc.)
2. ตรวจสอบ indexing strategy
3. ตรวจสอบ search query construction
4. ตรวจสอบ search result ranking
5. ตรวจสอบ search latency และ throughput

### 2. Search Indexing

ปรับปรุง search indexing

1. สร้าง index สำหรับ searchable fields
2. ใช้ full-text search index ที่เหมาะสม
3. ตั้งค่า index update strategy (real-time, batch)
4. ตั้งค่า index rebuild strategy
5. ใช้ composite index สำหรับ multi-field search
6. ทำ `/improve-database` สำหรับ database-level optimization

### 3. Relevance Tuning

ปรับปรุง search relevance

1. ตั้งค่า ranking factors (relevance, recency, popularity, location)
2. ใช้ weighting สำหรับ field importance
3. ใช้ fuzzy matching สำหรับ typos
4. ใช้ stemming และ stop words
5. ตั้งค่า boost สำหรับ exact matches
6. ตั้งค่า demotion สำหรับ low-quality results

### 4. Filtering And Faceting

ปรับปรุง filtering และ faceting

1. สร้าง filter system สำหรับ search results
2. ใช้ faceted search สำหรับ category navigation
3. ตั้งค่า filter combinations (AND, OR)
4. ตั้งค่า range filters (price, date, distance)
5. แสดง filter counts สำหรับ user guidance
6. ตั้งค่า filter state persistence

### 5. Autocomplete And Suggestions

ปรับปรุง autocomplete

1. ใช้ prefix matching สำหรับ autocomplete
2. ใช้ search history สำหรับ suggestions
3. ใช้ popular searches สำหรับ suggestions
4. ตั้งค่า debounce สำหรับ autocomplete requests
5. แสดง suggestion categories (products, categories, pages)
6. ตั้งค่า minimum query length

### 6. Search UX

ปรับปรุง search user experience

1. สร้าง search interface ที่ใช้งานง่าย
2. แสดง search result count และ timing
3. แสดง highlighted matching terms
4. แสดง empty state สำหรับ no results
5. แสดง related searches หรือ corrections
6. ทำ `/improve-uxui` สำหรับ UX improvements

### 7. Search Performance

ปรับปรุง search performance

1. ใช้ search result caching
2. ใช้ pagination สำหรับ large result sets
3. ตั้งค่า query timeout
4. ใช้ async search สำหรับ heavy queries
5. ทำ `/improve-performance-tuning` สำหรับ caching strategy

## Rules

### 1. Relevance First

- ผลลัพธ์ที่เกี่ยวข้องต้องอยู่บนสุด
- Exact match > Partial match > Fuzzy match
- ไม่แสดง irrelevant results มากเกินไป
- ทดสอบ relevance ด้วย real queries

### 2. Fast Response

- Search latency < 100ms สำหรับ autocomplete
- Search latency < 500ms สำหรับ full search
- ใช้ caching สำหรับ popular queries
- ไม่ block UI ระหว่าง search

### 3. User-Friendly

- แสดง clear empty state
- แสดง search suggestions
- แสดง filter options
- แสดง result count
- อนุญาต sort และ refine

## Expected Outcome

- Search indexing มีประสิทธิภาพ
- Search relevance ดีขึ้น
- Filtering และ faceting ใช้งานได้
- Autocomplete รวดเร็วและ accurate
- Search UX ใช้งานง่าย
- Search performance รวดเร็ว
