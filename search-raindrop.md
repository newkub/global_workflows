---
title: Search Raindrop
description: ค้นหา bookmarks ด้วย Raindrop API
auto_execution_mode: 3
---


## Goal

ค้นหา bookmarks จาก Raindrop.io ด้วย API

## Scope

ใช้สำหรับค้นหาและจัดการ bookmarks ผ่าน Raindrop API

## Execute

### 1. Setup API Client

ตั้งค่า Raindrop API client

1. รับ API token จาก Raindrop settings
2. ตั้งค่า base URL `https://api.raindrop.io/rest/v1`
3. ตั้งค่า authentication headers

### 2. Search Bookmarks

ค้นหา bookmarks ด้วย search parameters

1. ใช้ `GET /raindrop/{collectionId}` สำหรับ list bookmarks
2. ใช้ query parameters: `search`, `word`, `tag`, `collection`
3. จัดการ pagination ด้วย `page` และ `perpage`
4. จัดการ filters: `important`, `type`, `breakpoint`

### 3. Filter Results

กรองผลลัพธ์ตามเงื่อนไข

1. กรองตาม collections
2. กรองตาม tags
3. กรองตาม type (link, article, image, video, etc.)
4. กรองตาม important status

### 4. Parse Response

แปลง response จาก API

1. แปลง JSON response เป็น structs
2. ดึง metadata: title, description, tags, created
3. ดึง content: link, excerpt, domain
4. จัดการ nested structures

### 5. Cache Results

เก็บผลลัพธ์ไว้ใน cache

1. ใช้ cache key ตาม search parameters
2. ตั้งค่า TTL สำหรับ cache expiration
3. จัดการ cache invalidation
4. ใช้ cache สำหรับ frequent searches

## Rules

### 1. API Authentication

จัดการ authentication อย่างปลอดภัย

- เก็บ API token ใน environment variables
- ใช้ `Authorization: Bearer {token}` header
- ไม่เก็บ token ใน code หรือ version control
- จัดการ token expiration และ refresh

### 2. Rate Limiting

จัดการ rate limits จาก API

- Raindrop API มี rate limits (200 requests/minute)
- ใช้ exponential backoff สำหรับ retries
- จัดการ 429 Too Many Requests responses
- ใช้ request queuing สำหรับ bulk operations

### 3. Search Optimization

เพิ่มประสิทธิภาพการค้นหา

- ใช้ specific search terms แทน broad searches
- ใช้ filters ลดขนาด result set
- ใช้ pagination สำหรับ large result sets
- Cache frequent search queries

### 4. Error Handling

จัดการ API errors อย่างเหมาะสม

- จัดการ 401 Unauthorized (invalid token)
- จัดการ 403 Forbidden (insufficient permissions)
- จัดการ 404 Not Found (invalid collection)
- จัดการ network errors ด้วย retries

### 5. Data Validation

ตรวจสอบข้อมูลจาก API

- ตรวจสอบ required fields มีค่า
- ตรวจสอบ data types ถูกต้อง
- จัดการ null หรือ missing values
- Sanitize user input ก่อนส่งไป API

## Expected Outcome

- API client ที่ทำงานได้จริง
- Search functionality ที่มีประสิทธิภาพ
- Cache layer สำหรับ performance
- Error handling ที่ครอบคลุม
