---
title: Analyze Pagination
description: วิเคราะห์ cursor/infinite/page-based, page size, total count strategy
auto_execution_mode: 3
related_workflows:
  - /analyze-api
  - /analyze-database
  - /improve-pagination
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ pagination strategy และ implementation เพื่อระบุ performance และ UX gaps

## Scope

Cursor-based, infinite scroll, page-based, page size, total count strategy, pagination metadata, edge case handling

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม pagination metrics ผ่าน scripts (pagination pattern detection, query analysis)

### 2. Check Pagination Strategy

1. ระบุ pagination strategy (cursor, offset, keyset, infinite)
2. ระบุ inconsistent strategies ระหว่าง endpoints
3. ระบุ offset pagination ที่ควรเป็น cursor (large datasets)
4. ระบุ missing cursor stability
5. ระบุ missing backward pagination

### 3. Check Page Size

1. ระบุ missing page size limits
2. ระบุ page size ที่ใหญ่เกินไป (memory pressure)
3. ระบุ page size ที่เล็กเกินไป (too many requests)
4. ระบุ missing configurable page size
5. ระบุ missing default page size validation

### 4. Check Total Count Strategy

1. ระบุ missing total count สำหรับ UI pagination
2. ระบุ expensive COUNT queries ที่ scan ทั้ง table
3. ระบุ missing approximate count สำหรับ large datasets
4. ระบุ missing hasNext/hasPrevious flags
5. ระบุ missing pagination metadata

### 5. Check Edge Cases

1. ระบุ missing empty result handling
2. ระบุ missing last page handling
3. ระบุ missing concurrent modification handling
4. ระบุ missing deleted records between pages
5. ระบุ missing duplicate records between pages

### 6. Check Infinite Scroll

1. ระบุ missing Intersection Observer
2. ระบุ missing loading indicators
3. ระบุ missing end-of-list detection
4. ระบุ missing scroll position restoration
5. ระบุ missing virtualization สำหรับ long lists
6. ระบุ memory leaks จาก accumulated items

### 7. Check Database Performance

1. ระบุ missing indexes สำหรับ pagination columns
2. ระบุ missing covering indexes
3. ระบุ slow pagination queries
4. ระบุ missing query optimization
5. ระบุ N+1 patterns ใน paginated results

### 8. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: pagination strategy → database performance → edge cases → page size → total count → infinite scroll

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม endpoint และ severity

### 2. Severity Classification

- **Critical**: offset pagination บน large datasets, missing indexes, memory leaks
- **High**: missing page size limits, expensive COUNT queries, missing edge case handling
- **Medium**: inconsistent strategies, missing scroll restoration, missing virtualization
- **Low**: missing approximate count, missing configurable page size, missing metadata

### 3. Framework Awareness

- ตรวจสอบ TanStack Query pagination patterns
- ตรวจสอบ Drizzle pagination queries
- ตรวจสอบ TanStack Virtual integration

### 4. Use Scripts For Pagination Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ pagination pattern detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- Pagination gaps ระบุพร้อม endpoint และ severity
- Strategy และ performance issues จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-pagination`
