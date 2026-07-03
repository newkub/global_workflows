---
title: Improve Routing
description: ปรับปรุง routing architecture ให้ scalable, maintainable, และ user-friendly
auto_execution_mode: 3
related_workflows:
  - follow-clean-architecture
  - follow-nuxt-architecture
  - follow-solid-start-architecture
  - follow-nextjs-architecture
---

## Goal

ปรับปรุง routing architecture ให้ scalable, maintainable, และ user-friendly

## Scope

ใช้สำหรับปรับปรุง routing ใน web applications ทั้ง client-side และ server-side

## Execute

### 1. Analyze Current Routing

วิเคราะห์ routing ปัจจุบัน

- ตรวจสอบ route structure
- วิเคราะห์ route organization
- ตรวจสอบ route parameters
- ตรวจสอบ route guards
- ตรวจสอบ lazy loading
- ตรวจสอบ route metadata

### 2. Design Route Structure

ออกแบบ route structure

- ใช้ file-system based routing เมื่อเป็นไปได้
- สร้าง route hierarchy ที่เป็นระเบียบ
- กำหนด route naming conventions
- สร้าง route groups สำหรับ features
- กำหนด dynamic routes ที่ชัดเจน
- สร้าง route aliases สำหรับ SEO

### 3. Implement Route Guards

สร้าง route guards

- สร้าง authentication guards
- สร้าง authorization guards
- สร้าง permission-based guards
- สร้าง role-based guards
- สร้าง data loading guards
- สร้าง navigation guards

### 4. Optimize Route Performance

ปรับปรุง performance ของ routing

- ใช้ lazy loading สำหรับ routes
- ใช้ code splitting สำหรับ route chunks
- ใช้ prefetching สำหรับ likely routes
- Optimize route transition animations
- ใช้ caching สำหรับ route data
- Minimize route change overhead

### 5. Improve Route Metadata

ปรับปรุง route metadata

- เพิ่ม SEO metadata ทุก route
- เพิ่ม page titles และ descriptions
- เพิ่� Open Graph tags
- เพิ่ม structured data
- เพิ่ม canonical URLs
- เพิ่ม breadcrumb metadata

### 6. Handle Route Errors

จัดการ route errors

- สร้าง 404 page ที่ดี
- สร้าง error pages ที่ user-friendly
- สร้าง error boundaries
- สร้าง fallback routes
- สร้าง error logging
- สร้าง error recovery flows

### 7. Add Route Tests

เพิ่ม tests สำหรับ routing

- Test route navigation
- Test route guards
- Test route parameters
- Test lazy loading
- Test error handling
- Test SEO metadata

## Rules

### 1. File-System Based Routing

ใช้ file-system based routing เมื่อเป็นไปได้

- ใช้ folder structure สำหรับ routes
- ใช้ file names สำหรับ route paths
- ใช้ index files สำหรับ root routes
- ใช้ [...] สำหรับ catch-all routes
- ใช้ [...] สำหรับ optional segments

### 2. Route Organization

จัดระเบียบ routes อย่างเป็นระบบ

- Group routes ตาม features
- ใช้ nested routes สำหรับ layouts
- ใช้ route prefixes สำหรับ modules
- ใช้ consistent naming conventions
- ใช้ meaningful route names

### 3. Lazy Loading

ใช้ lazy loading สำหรับ performance

- Lazy load route components
- Lazy load route data
- Use code splitting
- Use prefetching strategically
- Monitor bundle sizes

### 4. SEO Friendly

ทำให้ routes เป็นมิตรกับ SEO

- ใช้ meaningful URLs
- ใช้ hyphens แทน underscores
- ใช้ lowercase URLs
- เพิ่ม metadata ทุก route
- ใช้ canonical URLs
- Support server-side rendering

### 5. Error Handling

จัดการ errors อย่างเป็นระบบ

- สร้าง custom 404 pages
- สร้าง custom error pages
- ใช้ error boundaries
- Log route errors
- ให้ recovery options

## Expected Outcome

- Routing ที่ scalable และ maintainable
- Route structure ที่เป็นระเบียบ
- Performance ที่ดีขึ้นด้วย lazy loading
- SEO ที่ดีขึ้นด้วย metadata
- Error handling ที่ user-friendly
- Tests ที่ครอบคลุม

## Common Mistakes

- ไม่ใช้ lazy loading
- ไม่มี route guards
- ไม่มี error handling
- ไม่เพิ่ม SEO metadata
- ใช้ route names ที่ไม่ meaningful

## Anti-Patterns

- Hardcoded route paths
- ไม่แยก route logic
- ไม่มี route organization
- ไม่ test routing
- ใช้ magic strings สำหรับ routes
