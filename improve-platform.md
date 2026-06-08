---
title: Improve Platform
description: ปรับปรุง platform compatibility และ deployment
auto_execution_mode: 3
---

## Goal

ปรับปรุง platform compatibility และ deployment ให้รองรับหลาย platforms

## Execute

### 1. Analyze Platform Support

วิเคราะห์ platform support ปัจจุบัน

1. ตรวจสอบ supported platforms
2. วิเคราะห์ platform-specific issues
3. ตรวจสอบ browser compatibility
4. วิเคราะห์ OS compatibility
5. ตรวจสอบ device compatibility

### 2. Improve Browser Support

ปรับปรุง browser compatibility

1. ใช้ polyfills สำหรับ features ที่รองรับ
2. ตรวจสอบ browser support matrix
3. ทดสอบบน browsers หลัก
4. ใช้ feature detection แทน browser detection
5. ปรับปรุง progressive enhancement

### 3. Improve OS Support

ปรับปรุง OS compatibility

1. ทดสอบบน Windows, macOS, Linux
2. ตรวจสอบ OS-specific features
3. ใช้ cross-platform libraries
4. ปรับปรุง file path handling
5. ปรับปรุง environment variables

### 4. Improve Deployment

ปรับปรุง deployment process

1. ใช้ CI/CD automation
2. ใช้ containerization (Docker)
3. ปรับปรุง build process
4. ใช้ environment-specific configurations
5. ปรับปรุง rollback strategy

### 5. Add Platform Tests

เพิ่ม platform-specific tests

1. ทดสอบบน platforms หลัก
2. ทดสอบ browser compatibility
3. ทดสอบ OS compatibility
4. ทดสอบ device compatibility
5. รัน tests ใน CI สำหรับแต่ละ platform

## Rules

### Browser Support

รองรับ browsers หลัก

- รองรับ Chrome, Firefox, Safari, Edge
- รองรับ mobile browsers
- ใช้ progressive enhancement
- ใช้ feature detection ไม่ใช่ browser detection
- ตรวจสอบ browser support อย่างสม่ำเสมอ

### Cross-Platform Libraries

ใช้ libraries ที่รองรับหลาย platforms

- เลือก libraries ที่รองรับ cross-platform
- หลีกเลี่ยง platform-specific APIs
- ใช้ abstractions สำหรับ platform differences
- ทดสอบบน platforms หลายแบบ
- อัปเดท dependencies อย่างสม่ำเสมอ

### Deployment Automation

ใช้ automation สำหรับ deployment

- ใช้ CI/CD pipelines
- ใช้ containerization
- ใช้ environment-specific configs
- ใช้ automated testing ก่อน deployment
- มี rollback strategy ชัดเจน

### Performance Across Platforms

รักษา performance ข้าม platforms

- ตรวจสอบ performance บนแต่ละ platform
- ปรับปรุง slow platforms
- ใช้ platform-specific optimizations
- ตรวจสอบ resource usage
- ปรับปรุง loading times

### Accessibility

รองรับ accessibility ข้าม platforms

- ตรงตาม WCAG guidelines
- รองรับ screen readers
- รองรับ keyboard navigation
- รองรับ high contrast mode
- ทดสอบ accessibility อย่างสม่ำเสมอ

## Expected Outcome

- Platform compatibility ดีขึ้น
- Browser support ครอบคลุม browsers หลัก
- OS compatibility ดีขึ้น
- Deployment process อัตโนมัติ
- Platform tests ครอบคลุม
- Performance ดีขึ้นข้าม platforms
