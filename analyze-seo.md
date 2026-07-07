---
title: Analyze SEO
description: วิเคราะห์ meta tags, structured data, sitemap, robots.txt, Core Web Vitals, SEO best practices
auto_execution_mode: 3
related_workflows:
  - /deep-analyze-with-use-scripts
  - /improve-seo
  - /improve-web-performance
  - /improve-landing-pages
  - /use-scripts
  - /report-format-table
---

## Goal

วิเคราะห์ SEO quality ของ web application เพื่อระบุ issues ที่ส่งผลต่อ search engine ranking และ discoverability

## Scope

Meta tags, structured data, sitemap, robots.txt, Core Web Vitals, URL structure, content quality, internal linking, image SEO, mobile SEO

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม SEO metrics ผ่าน scripts (meta tag analysis, sitemap validation, structured data validation)

### 2. Analyze Meta Tags

1. ระบุ missing title tags หรือ title ที่ยาวเกิน 60 ตัวอักษร
2. ระบุ missing meta descriptions หรือ description ที่ยาวเกิน 160 ตัวอักษร
3. ระบุ missing Open Graph tags (og:title, og:description, og:image, og:url)
4. ระบุ missing Twitter Card tags
5. ระบุ missing canonical URLs
6. ระบุ duplicate title หรือ description tags ข้าม pages

### 3. Analyze Structured Data

1. ระบุ missing structured data (JSON-LD) สำหรับ content types
2. ระบุ invalid structured data ที่ไม่ผ่าน Google Rich Results Test
3. ระบุ missing schema.org types ที่ควรมี (Article, Product, BreadcrumbList, FAQPage)
4. ระบุ missing organization และ website schema

### 4. Analyze Sitemap And Robots

1. ระบุ missing sitemap.xml
2. ระบุ missing robots.txt
3. ระบุ sitemap entries ที่ไม่ตรงกับ actual routes
4. ระบุ missing sitemap submission ใน robots.txt
5. ระบุ blocked routes ที่ไม่ควร block

### 5. Analyze URL Structure

1. ระบุ URLs ที่ไม่ SEO-friendly (query params, dynamic IDs, non-descriptive)
2. ระบุ missing URL redirects (301, 302)
3. ระบุ missing trailing slash consistency
4. ระบุ missing hreflang tags สำหรับ multi-language
5. ระบุ broken internal links

### 6. Analyze Core Web Vitals

1. ระบุ LCP issues (large images, render-blocking resources)
2. ระบุ INP issues (long task, heavy JavaScript)
3. ระบุ CLS issues (missing dimensions, dynamic content)
4. ระบุ missing image optimization (WebP, AVIF, responsive srcset)
5. ระบุ missing lazy loading สำหรับ below-the-fold images

### 7. Analyze Content And Mobile SEO

1. ระบุ thin content pages (< 300 words)
2. ระบุ missing heading hierarchy (H1 → H2 → H3)
3. ระบุ missing alt text สำหรับ images
4. ระบุ missing mobile viewport meta tag
5. ระบุ missing mobile-friendly design issues

### 8. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: meta tags → structured data → Core Web Vitals → sitemap → URL structure → content → mobile

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม location และ severity

### 2. Severity Classification

- **Critical**: missing title, missing canonical, broken sitemap, no mobile viewport
- **High**: missing meta description, missing structured data, LCP > 4s, CLS > 0.25
- **Medium**: missing Open Graph, missing alt text, non-SEO-friendly URLs, INP > 500ms
- **Low**: missing Twitter Card, thin content, missing hreflang

### 3. Use Scripts For Batch Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอสำหรับ SEO analysis
- ใช้ `/use-scripts` เมื่อต้องวิเคราะห์ pages มากกว่า 10 pages

### 4. Framework Awareness

- ตรวจสอบ framework-specific SEO patterns (Next.js, Nuxt, TanStack Start)
- ระบุ SSR/SSG ที่ไม่ SEO-friendly
- ตรวจสอบ meta tag management approach

## Expected Outcome

- SEO issues ระบุพร้อม location และ severity
- Search engine optimization recommendations
- พร้อมสำหรับ `/improve-seo` หรือ `/improve-landing-pages`
