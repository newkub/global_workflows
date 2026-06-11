---
title: Improve Bundle
description: ปรับปรุง bundle size และ loading performance ของ application
auto_execution_mode: 3
---

## Goal

ปรับปรุง bundle size และ loading performance ของ application

## Execute

### 1. Analyze Bundle

วิเคราะห์ bundle size และ composition

1. รัน bundle analyzer tool (เช่น webpack-bundle-analyzer)
2. ตรวจสอบ bundle size ปัจจุบัน
3. ระบุ dependencies ที่มีขนาดใหญ่
4. ตรวจสอบ unused code และ dead code
5. วิเคราะห์ initial load time

### 2. Remove Unused Dependencies

ลบ dependencies ที่ไม่ได้ใช้

1. รัน `depcheck` เพื่อตรวจสอบ unused dependencies
2. ลบ dependencies ที่ไม่ได้ใช้จาก package.json
3. รัน `bun install` เพื่ออัปเดท lock file
4. ตรวจสอบว่า application ยังทำงานได้

### 3. Enable Tree Shaking

เปิดใช้ tree shaking เพื่อลด bundle size

1. ตรวจสอบว่า bundler รองรับ tree shaking
2. ใช้ ES modules แทน CommonJS
3. ตั้งค่า `sideEffects: false` ใน package.json สำหรับ pure libraries
4. ตรวจสอบว่า tree shaking ทำงานได้
5. วิเคราะห์ bundle หลังเปิดใช้ tree shaking

### 4. Implement Code Splitting

แยก code เพื่อลด initial bundle size

1. ใช้ dynamic imports สำหรับ routes
2. แยก vendor code จาก application code
3. ใช้ lazy loading สำหรับ heavy components
4. แยก code ตาม routes หรือ features
5. ตรวจสอบว่า code splitting ทำงานได้

### 5. Optimize Assets

ปรับปรุง assets สำหรับ production

1. ใช้ compression (gzip, brotli) สำหรับ assets
2. Optimize images (compress, resize, convert to WebP)
3. Minify CSS และ JavaScript
4. ใช้ CDN สำหรับ static assets
5. ตั้งค่า cache headers สำหรับ assets

### 6. Reduce Dependencies Size

ลดขนาดของ dependencies

1. ใช้ lighter alternatives สำหรับ heavy libraries
2. ใช้ subpath imports สำหรับ large libraries
3. ใช้ ESM-only packages แทน CommonJS
4. ลบ duplicate dependencies ใน monorepo
5. ใช้ workspace protocol สำหรับ internal packages

### 7. Monitor Bundle Size

ตรวจสอบ bundle size อย่างต่อเนื่อง

1. ตั้งค่า bundle size limits
2. ตรวจสอบ bundle size ใน CI/CD
3. ตรวจสอบ bundle size ก่อนและหลังเปลี่ยนแปลง
4. ตั้งค่า alerts สำหรับ bundle size เกิน limit
5. ปรับปรุงตามข้อมูลจาก monitoring

## Rules

### Bundle Size Limits

ตั้งค่า limit สำหรับ `bundle size` เพื่อควบคุมขนาด

- `Initial bundle` ไม่เกิน `200KB` (gzipped)
- `Vendor bundle` ไม่เกิน `300KB` (gzipped)
- แต่ละ `route chunk` ไม่เกิน `100KB` (gzipped)
- `Total bundle` ไม่เกิน `1MB` (gzipped)

### Tree Shaking

ใช้ `tree shaking` อย่างเต็มที่เพื่อลด code ที่ไม่ได้ใช้

- ใช้ `ES modules` สำหรับ code ใหม่
- ตั้งค่า `sideEffects` ใน `package.json`
- หลีกเลี่ยง `side effects` ใน modules
- ตรวจสอบว่า `tree shaking` ทำงานได้

### Code Splitting

แยก `code` อย่างมีประสิทธิภาพเพื่อลด initial load

- แยก `vendor code` จาก `application code`
- ใช้ `lazy loading` สำหรับ routes
- ใช้ `dynamic imports` สำหรับ heavy components
- แยก `code` ตาม features หรือ routes

### Compression

ใช้ `compression` สำหรับ `assets` เพื่อลดขนาด

- ใช้ `gzip` สำหรับทุก assets
- ใช้ `brotli` สำหรับ assets ที่ใหญ่
- ตั้งค่า `compression level` ที่เหมาะสม
- ตรวจสอบว่า `compression` ทำงานได้

### Monitoring

ตรวจสอบ `bundle size` อย่างต่อเนื่องใน CI/CD

- ตรวจสอบ `bundle size` ในทุก PR
- ตั้งค่า `alerts` สำหรับ bundle size เกิน limit
- วิเคราะห์ `bundle size` เพิ่มขึ้น
- ปรับปรุงตามข้อมูลจาก `monitoring`

## Expected Outcome

- Bundle size ลดลงอย่างมีนัยสำคัญ
- Initial load time ลดลง
- Tree shaking ทำงานได้อย่างเต็มที่
- Code splitting ทำงานได้อย่างเหมาะสม
- Assets ถูก optimize และ compress
- Bundle size monitoring ตั้งค่าเสร็จสมบูรณ์

