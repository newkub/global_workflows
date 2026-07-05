---
title: Improve Asset
description: ปรับปรุง image, font, icon optimization และ asset pipeline
auto_execution_mode: 3
related_workflows:
  - improve-performance-tuning
  - improve-web-performance
  - improve-website
  - improve-web-rendering
---

## Goal

ปรับปรุง asset management ทั้ง image, font, icon optimization และ asset pipeline ให้มีประสิทธิภาพ

## Scope

ใช้สำหรับ project ที่มี static assets (images, fonts, icons, videos) ที่ต้องการ optimization

## Execute

### 1. Image Optimization

ปรับปรุง image handling

1. วิเคราะห์ image formats (WebP, AVIF, JPEG XL)
2. ตั้งค่า responsive images ด้วย `srcset` และ `sizes`
3. ตรวจสอบ lazy loading สำหรับ below-fold images
4. ตั้งค่า image compression และ quality settings
5. ใช้ CDN image transformation ถ้ามี
6. ตรวจสอบ placeholder strategy (blur, LQIP)

### 2. Font Optimization

ปรับปรุง font loading

1. ตั้งค่า `font-display: swap` หรือ `optional`
2. ใช้ `preload` สำหรับ critical fonts
3. ตรวจสอบ font subsetting และ unicode-range
4. ตั้งค่า variable fonts ถ้าเหมาะสม
5. ตรวจสอบ FOUT/FOIT handling
6. ใช้ self-hosted fonts แทน Google Fonts ถ้าเป็นไปได้

### 3. Icon Optimization

ปรับปรุง icon system

1. วิเคราะห์ icon strategy (SVG sprite, icon font, inline SVG)
2. ตรวจสอบ icon bundle size และ tree-shaking
3. ตั้งค่า icon caching strategy
4. ตรวจสอบ icon accessibility (aria-label, role)
5. ใช้ iconify หรือ similar สำหรับ on-demand loading

### 4. Video And Media

ปรับปรุง video และ media handling

1. ตั้งค่า video lazy loading และ poster images
2. ตรวจสอบ video format (MP4, WebM, AV1)
3. ตั้งค่า adaptive streaming (HLS, DASH) ถ้าจำเป็น
4. ตรวจสอบ audio optimization
5. ตั้งค่า media CDN delivery

### 5. Asset Pipeline

ปรับปรุง asset build pipeline

1. วิเคราะห์ asset build process (Vite, Webpack, custom)
2. ตั้งค่า asset hashing และ cache busting
3. ตรวจสอบ asset manifest generation
4. ตั้งค่า asset compression (gzip, brotli)
5. ทำ `/improve-performance-tuning` สำหรับ caching strategy

### 6. CDN Strategy

ปรับปรุง CDN configuration

1. ตั้งค่า CDN cache rules สำหรับ assets
2. ใช้ edge caching สำหรับ static assets
3. ตรวจสอบ CDN purge strategy
4. ตั้งค่า CDN image transformation
5. ทำ `/improve-website` สำหรับ CDN integration

## Rules

### 1. Image First

- ใช้ modern formats (WebP, AVIF) สำหรับทุก images
- Responsive images ด้วย `srcset` เสมอ
- Lazy load below-fold images
- Placeholder สำหรับ better UX
- Compression ไม่เสีย quality มาก

### 2. Font Performance

- `font-display: swap` เป็น default
- `preload` critical fonts
- Subset fonts สำหรับ latin หรือที่จำเป็น
- Self-hosted fonts ดีกว่า third-party
- Variable fonts ลดจำนวน requests

### 3. Icon Efficiency

- SVG icons ดีกว่า icon fonts
- Tree-shake unused icons
- Inline critical icons
- Lazy load non-critical icons
- Accessibility labels ครบถ้วน

### 4. CDN Required

- Static assets ผ่าน CDN เสมอ
- Cache headers ตั้งค่าถูกต้อง
- Hash-based filenames สำหรับ cache busting
- Compression เปิดอยู่ (gzip, brotli)

## Expected Outcome

- Images optimized ใน modern formats พร้อม responsive loading
- Fonts load เร็ว ไม่มี FOUT/FOIT ที่กระทบ UX
- Icon system มีประสิทธิภาพ พร้อม tree-shaking
- Video และ media load อย่างมีประสิทธิภาพ
- Asset pipeline สร้าง hashed และ compressed assets
- CDN delivery ครบถ้วน สำหรับ static assets
