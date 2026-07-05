---
title: Improve File Upload
description: ปรับปรุง file upload handling, validation, storage, processing และ progress
auto_execution_mode: 3
related_workflows:
  - improve-backend-services
  - improve-security
  - improve-database
  - improve-asset
  - improve-network
---

## Goal

ปรับปรุง file upload system ทั้ง validation, storage, processing, progress tracking, และ chunked upload

## Scope

ใช้สำหรับ project ที่มี file upload functionality ต้องการปรับปรุง reliability และ UX

## Execute

### 1. Analyze Current Upload System

วิเคราะห์ upload system ปัจจุบัน

1. ตรวจสอบ upload endpoint และ handling
2. ตรวจสอบ file validation (type, size, dimensions)
3. ตรวจสอบ storage strategy (local, S3, CDN)
4. ตรวจสอบ upload progress tracking
5. ตรวจสอบ error handling สำหรับ upload failures

### 2. File Validation

ปรับปรุง file validation

1. ตรวจสอบ file type ด้วย magic bytes ไม่ใช่ extension เท่านั้น
2. ตั้งค่า max file size limits
3. ตั้งค่า allowed MIME types
4. ตรวจสอบ file content สำหรับ malware (ถ้าจำเป็น)
5. ตั้งค่า image dimension limits
6. ทำ `/improve-security` สำหรับ upload security

### 3. Upload Strategy

เลือก upload strategy ที่เหมาะสม

1. ใช้ direct upload สำหรับ small files (< 10MB)
2. ใช้ chunked upload สำหรับ large files (> 10MB)
3. ใช้ presigned URLs สำหรับ direct-to-storage upload
4. ใช้ resumable upload สำหรับ unreliable connections
5. ตั้งค่า upload timeout และ retry

### 4. Storage And Processing

ปรับปรุง storage และ processing

1. ใช้ object storage (S3, R2) สำหรับ file storage
2. ตั้งค่า file naming strategy (UUID, hash)
3. ตั้งค่า image processing (resize, optimize, format conversion)
4. ตั้งค่า video processing (transcode, thumbnail)
5. ตั้งค่า file cleanup สำหรับ orphaned files
6. ทำ `/improve-asset` สำหรับ asset optimization

### 5. Upload Progress And UX

ปรับปรุง upload UX

1. แสดง upload progress bar
2. แสดง upload speed และ ETA
3. อนุญาต cancel upload ระหว่างดำเนินการ
4. อนุญาต drag-and-drop upload
5. อนุญาต multiple file upload
6. แสดง upload status และ error messages
7. ทำ `/improve-uxui` สำหรับ upload UI

### 6. Upload Security

ปกป้อง upload system

1. ตรวจสอบ authentication ก่อน upload
2. ตรวจสอบ authorization สำหรับ upload destination
3. ใช้ rate limiting สำหรับ upload endpoints
4. สแกนไฟล์สำหรับ malware (ถ้าจำเป็น)
5. ไม่ execute uploaded files
6. ใช้ sandbox สำหรับ file processing

### 7. Upload Monitoring

ติดตาม upload system

1. ติดตาม upload success rate
2. ติดตาม upload latency และ throughput
3. ติดตาม storage usage
4. ติดตาม upload errors และ failures
5. ตั้งค่า alerts สำหรับ upload issues

## Rules

### 1. Validate Everything

- ตรวจสอบ file type, size, content
- ไม่ trust client-side validation เท่านั้น
- ตรวจสอบ server-side เสมอ
- ปฏิเสธไฟล์ที่ไม่ผ่าน validation

### 2. Reliable Upload

- ใช้ chunked upload สำหรับ large files
- อนุญาต resume สำหรับ interrupted uploads
- Retry สำหรับ transient failures
- ไม่ lose data ระหว่าง upload

### 3. Storage Efficiency

- ใช้ object storage ไม่ใช่ local filesystem
- ใช้ CDN สำหรับ file delivery
- ลบ orphaned files อัตโนมัติ
- ตั้งค่า storage lifecycle policies

## Expected Outcome

- File validation ครบถ้วน ปลอดภัย
- Upload strategy เหมาะสมกับ file size
- Storage และ processing มีประสิทธิภาพ
- Upload UX ใช้งานง่าย พร้อม progress
- Upload security ปลอดภัย
- Upload monitoring ครบถ้วน
