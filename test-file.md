---
title: Test File
description: ทดสอบ file upload, download แล validation
auto_execution_mode: 3
related_workflows:
  - /test-api
  - /test-component
---

## Goal

ทดสอบ file operations ให้ครอบคลุม รวม upload, download, validation, แล large file handling

## Execute

### 1. Setup File Testing

1. ติดตั้ง file testing utilities
2. Configure test file server
3. Setup file upload testing
4. Configure file download testing

### 2. Test File Upload

1. Test single file upload
2. Test multiple file upload
3. Test file upload with progress
4. Test upload cancellation

### 3. Test File Validation

1. Test file type validation
2. Test file size validation
3. Test file extension validation
4. Test file content validation

### 4. Test File Download

1. Test file download
2. Test download with authentication
3. Test download progress
4. Test download cancellation

### 5. Test Large Files

1. Test large file upload (>100MB)
2. Test large file download
3. Test chunked upload
4. Test resume upload

### 6. Test File Security

1. Test file access permissions
2. Test file path traversal
3. Test malicious file upload
4. Test file virus scanning

### 7. Test File Storage

1. Test file storage to disk
2. Test file storage to cloud (S3, R2)
3. Test file deletion
4. Test file cleanup

### 8. Test File Formats

1. Test image upload (JPG, PNG, GIF)
2. Test document upload (PDF, DOCX)
3. Test video upload (MP4, WEBM)
4. Test archive upload (ZIP, RAR)

### 9. Run File Tests

1. Execute upload tests
2. Execute download tests
3. Execute validation tests
4. Document file issues

## Rules

### 1. File Validation

| Validation | Method | Example |
|------------|--------|---------|
| Type | MIME type | image/jpeg |
| Size | File size | max 10MB |
| Extension | File extension | .jpg, .png |
| Content | Magic bytes | JPEG signature |

### 2. Upload Testing

```javascript
// Test file upload
const formData = new FormData();
formData.append('file', file);
await fetch('/upload', {
  method: 'POST',
  body: formData
});
```

### 3. Security Measures

- Validate file types ทั้ง extension แล MIME type
- Scan files สำหรับ viruses
- Sanitize filenames
- Use secure file storage paths
- Implement file access controls

### 4. Large File Handling

- Use chunked upload สำหรับ large files
- Implement resume capability
- Show upload progress
- Handle network interruptions
- Validate file integrity after upload

### 5. Error Handling

- Show clear error messages สำหรับ invalid files
- Handle upload failures gracefully
- Implement retry logic สำหรับ failed uploads
- Log errors สำหรับ debugging

## Expected Outcome

- [ ] File upload tested
- [ ] File download tested
- [ ] File validation implemented
- [ ] Large file handling tested
- [ ] File security verified
- [ ] Error handling tested

## Common Mistakes

- ไม่ validate file types
- ไม่ limit file sizes
- ไม่ sanitize filenames
- ไม่ handle large files
- ไม่ implement security checks
- ไม่ test file deletion

## Anti-Patterns

- ❌ ไม่ validate file types
- ❌ ไม่ limit file sizes
- ❌ ไม่ sanitize filenames
- ❌ ไม่ handle large files
- ❌ ไม่ implement security
