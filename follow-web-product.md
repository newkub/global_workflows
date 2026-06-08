---
title: Follow Web Product
description: สร้าง Nuxt web product พร้อม navigation, layouts และ pages ครบถ้วน
auto_execution_mode: 3
---

## Goal

สร้าง Nuxt web application สำหรับนำเสนอ product พร้อม navigation, footer และ pages ที่จำเป็น

## Execute

### 1. Setup

1. ทำ `/follow-nuxt` สำหรับ Nuxt project setup
2. ระบุ project location เช่น `apps/web/`
3. ตั้งค่า rendering mode เป็น SSR หรือ Hybrid
4. ติดตั้ง dependencies ที่จำเป็น

### 2. Layout Structure

1. สร้าง `layouts/default.vue` เป็น layout หลัก
2. สร้าง components สำหรับ navigation และ footer
3. ใช้ `<slot />` สำหรับ page content
4. ตั้งค่า global styles ใน layout

### 3. Navigation Component

1. สร้าง `components/Nav.vue` หรือ `components/TheNav.vue`
2. เพิ่ม navigation items: Product, Docs, Pricing, Examples, About, Contact
3. เพิ่ม logo ทางซ้าย
4. เพิ่ม Get Started button ทางขวา
5. ใช้ `<NuxtLink>` สำหรับ internal links
6. ตั้งค่า responsive design สำหรับ mobile

### 4. Footer Component

1. สร้าง `components/Footer.vue` หรือ `components/TheFooter.vue`
2. เพิ่ม links ที่จำเป็น (เช่น About, Contact, Legal)
3. เพิ่ม social links
4. ตั้งค่า copyright information

### 5. Page Structure

1. สร้าง `pages/index.vue` เป็น landing page
2. สร้าง `pages/product/index.vue` สำหรับ product page
3. สร้าง `pages/docs/index.vue` สำหรับ documentation page
4. สร้าง `pages/pricing/index.vue` สำหรับ pricing page
5. สร้าง `pages/examples/index.vue` สำหรับ examples page
6. สร้าง `pages/about/index.vue` สำหรับ about page
7. สร้าง `pages/contact/index.vue` สำหรับ contact page
8. สร้าง `pages/policies/privacy.md` สำหรับ privacy policy
9. สร้าง `pages/policies/terms.md` สำหรับ terms of service
10. ใช้ layouts/default สำหรับทุก pages

### 6. Navigation Integration

1. import Nav และ Footer ใน `layouts/default.vue`
2. วาง Nav ด้านบน และ Footer ด้านล่าง
3. ตั้งค่า active state สำหรับ current page
4. ตั้งค่า mobile menu toggle

### 7. Content Quality

1. ทำ `/follow-content-quality` สำหรับทุก pages
2. ใช้ semantic HTML
3. ตั้งค่า SEO meta tags ใน `nuxt.config.ts`
4. ตั้งค่า page titles และ descriptions

## Rules

### 1. Prerequisites

- ต้องใช้ `/follow-nuxt` ก่อน setup
- ต้องใช้ `/follow-content-quality` สำหรับ content

### 2. Layout Requirements

- layouts/default.vue ต้องมี Nav และ Footer
- ทุก pages ต้องใช้ layouts/default

### 3. Navigation Requirements

- Nav ต้องมี: Logo, Product, Docs, Pricing, Examples, About, Contact, Get Started button
- Footer ต้องมี links ไปยัง policies (Privacy, Terms)
- ใช้ `<NuxtLink>` สำหรับ internal navigation

### 4. Page Requirements

- สร้าง pages ทั้ง 9 หน้า: index, product, docs, pricing, examples, about, contact, policies/privacy, policies/terms

### 5. Component Standards

- Components ต้องใช้ `script setup lang="ts"`
- ตั้งค่า responsive design สำหรับ mobile

## Expected Outcome

- Nuxt web application ที่มี layout สมบูรณ์
- Navigation component พร้อม links ที่จำเป็น
- Footer component ที่เหมาะสม
- Pages ทั้ง 9 หน้าที่เชื่อมต่อกับ navigation
- Responsive design ที่ทำงานได้ดี
