---
title: Improve Pagination
description: ปรับปรุง cursor-based pagination, infinite scroll, page size และ total count strategy
auto_execution_mode: 3
related_workflows:
  - improve-backend
  - improve-api-design
  - improve-frontend
  - improve-performance-tuning
  - improve-database
---

## Goal

ปรับปรุง pagination system ทั้ง cursor-based, offset-based, infinite scroll, และ performance optimization

## Scope

ใช้สำหรับ project ที่มี list endpoints หรือ data-heavy views ต้องการ pagination ที่มีประสิทธิภาพ

## Execute

### 1. Analyze Current Pagination

วิเคราะห์ pagination ปัจจุบัน

1. ตรวจสอบ pagination strategy (offset, cursor, keyset)
2. ตรวจสอบ page size และ limits
3. ตรวจสอบ total count strategy
4. ตรวจสอบ sort และ filter interaction with pagination
5. ตรวจสอบ frontend pagination UX

### 2. Cursor-Based Pagination

ปรับปรุง cursor-based pagination

1. ใช้ cursor-based pagination สำหรับ large datasets
2. ใช้ stable sort field ใน cursor (created_at + id)
3. เข้ารหัส cursor เป็น base64 หรือ opaque token
4. รองรับ forward และ backward pagination
5. ไม่ expose internal IDs ใน cursor
6. ทำ `/improve-api-design` สำหรับ API consistency

### 3. Offset-Based Pagination

ปรับปรุง offset-based pagination

1. ใช้ offset-based pagination เฉพาะ small datasets
2. ตั้งค่า max page size (ไม่เกิน 100)
3. จำกัด max offset เพื่อ prevent deep pagination
4. ใช้ keyset pagination สำหรับ deep pagination
5. ไม่ใช้ OFFSET สำหรับ large tables (ใช้ WHERE clause แทน)

### 4. Infinite Scroll

ปรับปรุง infinite scroll

1. ใช้ intersection observer สำหรับ scroll detection
2. ใช้ cursor-based pagination สำหรับ infinite scroll
3. ตั้งค่า prefetch threshold (load ก่อนถึง bottom)
4. จัดการ loading และ error states
5. จัดการ back navigation และ scroll restoration
6. ตั้งค่า max items limit เพื่อ prevent memory issues

### 5. Total Count Strategy

ปรับปรุง total count handling

1. ไม่ count total สำหรับ large datasets (ใช้ hasMore flag)
2. ใช้ approximate count สำหรับ performance
3. แคช total count สำหรับ filtered results
4. ใช้ separate count endpoint ถ้าจำเป็น
5. แสดง "showing X of many" แทน exact total

### 6. Sort And Filter

ปรับปรุง sort และ filter interaction

1. ตรวจสอบ sort ใช้ indexed columns
2. ตรวจสอบ filter ใช้ indexed columns
3. รักษา cursor validity เมื่อ sort เปลี่ยน
4. รีเซ็ต pagination เมื่อ filter เปลี่ยน
5. ใช้ composite index สำหรับ sort + filter
6. ทำ `/improve-database` สำหรับ index optimization

### 7. Pagination Performance

ปรับปรุง pagination performance

1. ใช้ covering index สำหรับ pagination queries
2. ใช้ LIMIT + WHERE แทน OFFSET
3. หลีกเลี่ยง COUNT(*) สำหรับ large tables
4. ใช้ keyset pagination สำหรับ stable performance
5. ทำ `/improve-performance-tuning` สำหรับ query optimization

## Rules

### 1. Cursor Over Offset

- ใช้ cursor-based pagination สำหรับ large datasets
- ใช้ offset-based pagination เฉพาะ small datasets (< 10,000 rows)
- ไม่ใช้ OFFSET > 10,000 (ใช้ keyset แทน)
- Cursor ต้อง stable และ opaque

### 2. Bounded Page Size

- ตั้งค่า max page size (100 สำหรับ API, 50 สำหรับ UI)
- ตั้งค่า default page size ที่เหมาะสม (20-50)
- ไม่อนุญาต page size > max
- ใช้ consistent page size ทั่วทั้ง API

### 3. HasMore Over Total

- ใช้ hasMore flag แทน total count สำหรับ large datasets
- ไม่ count total ถ้าไม่จำเป็น
- ใช้ approximate count ถ้าจำเป็น
- แคช count result ถ้าใช้ซ้ำ

## Expected Outcome

- Pagination strategy เหมาะสมกับ dataset size
- Cursor-based pagination ทำงานได้
- Infinite scroll ลื่นไหล
- Total count strategy มีประสิทธิภาพ
- Sort และ filter ทำงานกับ pagination ได้
- Pagination performance รวดเร็ว
