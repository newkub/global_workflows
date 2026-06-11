---
title: Improve Routing UX
description: ปรับปรุง user experience ของ routing และ navigation
auto_execution_mode: 3
related_workflows:
  - /improve-uxui
  - /check-seo
---

## Goal

ปรับปรุง user experience ของ routing และ navigation ให้ลื่นไหลและเป็นธรรมชาติ

## Scope

ใช้สำหรับปรับปรุง routing UX ของ web applications (React Router, Vue Router, Next.js, Nuxt, etc.)

## Execute

### 1. Analyze Current Routing

วิเคราะห์ routing ปัจจุบัน

1. ตรวจสอบ route structure และ organization
2. วิเคราะห์ navigation patterns ปัจจุบัน
3. ตรวจสอบ loading states ระหว่าง route transitions
4. ระบุ routes ที่มี UX issues
5. ตรวจสอบ URL structure และ readability

### 2. Optimize Route Structure

ปรับปรุงโครงสร้าง routes

1. จัดระเบียบ routes ตาม hierarchy ที่ชัดเจน
2. ใช้ nested routes สำหรับ related pages
3. ลบ routes ที่ซ้ำซ้อนหรือไม่จำเป็น
4. ใช้ dynamic routes อย่างเหมาะสม
5. ตั้งชื่อ routes ให้สื่อความหมายและ SEO-friendly

### 3. Improve Navigation UX

ปรับปรุง navigation experience

1. เพิ่ม breadcrumbs สำหรับ deep navigation
2. ใช้ active states สำหรับ current route
3. เพิ่ม navigation hints และ previews
4. ใช้ smooth transitions ระหว่าง routes
5. Implement back button support ที่ถูกต้อง

### 4. Optimize Loading States

ปรับปรุง loading states ระหว่าง route transitions

1. ใช้ skeleton screens สำหรับ route transitions
2. เพิ่ม loading indicators ที่ชัดเจน
3. ใช้ progressive loading สำหรับ large pages
4. Implement route-level error boundaries
5. เพิ่ม retry mechanisms สำหรับ failed loads

### 5. Implement Route Guards

ใช้ route guards สำหรับ access control

1. ใช้ authentication guards สำหรับ protected routes
2. ใช้ permission guards สำหรับ role-based access
3. Implement data requirements guards
4. เพิ่ม redirect logic ที่ชัดเจน
5. ใช้ middleware สำหรับ cross-cutting concerns

### 6. Optimize SEO For Routing

ปรับปรุง SEO สำหรับ routing

1. ใช้ semantic URLs ที่ readable
2. เพิ่ม meta tags สำหรับแต่ละ route
3. ใช้ canonical URLs สำหรับ duplicate content
4. Implement sitemap generation
5. ใช้ structured data สำหรับ rich snippets

### 7. Implement Prefetching

ใช้ prefetching สำหรับ faster navigation

1. Prefetch routes ที่ likely จะถูกเข้า
2. ใช้ link prefetching สำหรับ critical routes
3. Implement intelligent prefetching ตาม user behavior
4. Balance prefetching กับ bandwidth usage
5. ใช้ service workers สำหรับ offline support

### 8. Handle Edge Cases

จัดการ edge cases ของ routing

1. จัดการ 404 pages อย่างเหมาะสม
2. ใช้ custom error pages สำหรับ route errors
3. Implement redirects สำหรับ moved/deleted routes
4. จัดการ query parameters อย่างถูกต้อง
5. ใช้ hash routing หรือ history routing อย่างเหมาะสม

## Rules

### 1. Route Organization

จัดระเบียบ routes อย่างมีประสิทธิภาพ

- ใช้ flat structure สำหรับ simple apps
- ใช้ nested structure สำหรับ complex apps
- ตั้งชื่อ routes ให้สื่อความหมาย
- ลบ routes ที่ไม่จำเป็น
- ใช้ consistent naming conventions

### 2. Navigation UX

ปรับปรุง navigation experience

- ใช้ clear visual hierarchy
- เพิ่ม breadcrumbs สำหรับ deep navigation
- ใช้ active states ที่ชัดเจน
- Implement smooth transitions
- Support browser navigation อย่างถูกต้อง

### 3. Loading States

ใช้ loading states ที่ดี

- ใช้ skeleton screens แทน spinners
- แสดง progress อย่างชัดเจน
- ใช้ progressive loading
- Handle errors อย่าง graceful
- ให้ user control การ retry

### 4. Route Guards

ใช้ route guards อย่างเหมาะสม

- ใช้ guards สำหรับ security
- ใช้ guards สำหรับ data requirements
- Implement clear redirect logic
- ใช้ middleware สำหรับ cross-cutting concerns
- Log guard violations สำหรับ debugging

### 5. SEO Optimization

ปรับปรุง SEO สำหรับ routing

- ใช้ semantic URLs
- เพิ่ม meta tags ครบถ้วน
- ใช้ canonical URLs
- Generate sitemaps
- ใช้ structured data

## Expected Outcome

- Route structure ชัดเจนและเป็นระเบียบ
- Navigation ลื่นไหลและเป็นธรรมชาติ
- Loading states ดีและ user-friendly
- Route guards ทำงานถูกต้อง
- SEO สำหรับ routing ดีขึ้น
- Prefetching ทำงานอย่างมีประสิทธิภาพ
- Edge cases ถูกจัดการอย่างเหมาะสม
