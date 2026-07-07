---
title: Analyze File Upload
description: วิเคราะห์ upload handling, validation, storage, processing, progress
auto_execution_mode: 3
related_workflows:
  - /analyze-form
  - /analyze-security
  - /improve-file-upload
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ file upload pipeline เพื่อระบุ validation และ storage gaps

## Scope

Upload handling, file validation, storage strategy, file processing, upload progress, chunked uploads, virus scanning

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม file upload metrics ผ่าน scripts (upload endpoint detection, validation scan, storage analysis)

### 2. Check Upload Validation

1. ระบุ missing file type validation (MIME type, extension)
2. ระบุ missing file size limits
3. ระบุ missing file name sanitization
4. ระบุ missing image dimension validation
5. ระบุ missing file content validation (magic bytes)
6. ระบุ missing filename collision handling

### 3. Check Storage Strategy

1. ระบุ missing storage abstraction (S3, R2, local)
2. ระบุ missing storage path strategy
3. ระบุ missing storage access controls
4. ระบุ missing storage lifecycle policies
5. ระบุ missing CDN integration สำหรับ uploaded files
6. ระบุ missing storage quota management

### 4. Check File Processing

1. ระบุ missing image optimization (resize, compress, convert)
2. ระบุ missing thumbnail generation
3. ระบุ missing video transcoding
4. ระบุ missing PDF processing
5. ระบุ missing background processing queue
6. ระบุ missing processing error handling

### 5. Check Upload Progress

1. ระบุ missing upload progress tracking
2. ระบุ missing upload cancellation
3. ระบุ missing upload resume สำหรับ large files
4. ระบุ missing chunked upload support
5. ระบุ missing upload speed estimation
6. ระบุ missing concurrent upload limits

### 6. Check Security

1. ระบุ missing virus scanning
2. ระบุ missing malware detection
3. ระบุ missing file content inspection
4. ระบุ missing upload rate limiting
5. ระบุ missing upload authentication
6. ระบุ missing upload audit trail

### 7. Check Error Handling

1. ระบุ missing upload failure handling
2. ระบุ missing partial upload cleanup
3. ระบุ missing storage failure retry
4. ระบุ missing processing failure handling
5. ระบุ missing user-friendly error messages

### 8. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: validation → security → storage → processing → progress → error handling

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม endpoint และ severity

### 2. Severity Classification

- **Critical**: missing file validation, missing virus scanning, no access controls
- **High**: missing size limits, missing storage abstraction, missing processing errors
- **Medium**: missing progress, missing chunked uploads, missing thumbnails
- **Low**: missing speed estimation, missing concurrent limits, missing audit trail

### 3. Framework Awareness

- ตรวจสอบ Cloudflare R2 storage patterns
- ตรวจสอบ Capacitor camera upload
- ระบุ file processing libraries

### 4. Use Scripts For Upload Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ upload endpoint detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- File upload gaps ระบุพร้อม endpoint และ severity
- Validation และ security issues จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-file-upload`
