---
title: Improve SEO
description: ปรับปรุง SEO ครบวงจรด้วย metadata, structured data, sitemap, และ best practices
auto_execution_mode: 3
related_workflows:
  - improve-web-performance
  - improve-accessibility
  - follow-content-quality
---

## Goal

ปรับปรุง SEO ให้ดีขึ้นตาม Google Search Essentials และ best practices

## Scope

ใช้สำหรับปรับปรุง SEO ของ web applications และ documentation sites

## Execute

### 1. Check SEO

ตรวจสอบ SEO ปัจจุบัน

1. ตรวจสอบ metadata (title, description, keywords)
2. ตรวจสอบ Open Graph tags
3. ตรวจสอบ Twitter Card tags
4. ตรวจสอบ structured data (Schema.org)
5. ตรวจสอบ sitemap.xml
6. ตรวจสอบ robots.txt
7. ตรวจสอบ canonical URLs
8. ตรวจสอบ heading structure (H1-H6)
9. ตรวจสอบ internal linking
10. ตรวจสอบ mobile-friendliness

### 2. Optimize Metadata

ปรับปรุง metadata

1. เขียน title tags ที่ unique และ descriptive
2. เขียน meta descriptions ที่ compelling
3. ใช้ Open Graph tags สำหรับ social sharing
4. ใช้ Twitter Card tags
5. ใช้ canonical URLs สำหรับ duplicate content
6. ใช้ hreflang tags สำหรับ multilingual
7. ใช้ noindex/nofollow อย่างเหมาะสม

### 3. Implement Structured Data

Implement structured data

1. ใช้ JSON-LD format
2. Implement Organization schema
3. Implement WebSite schema
4. Implement Article/BlogPosting schema
5. Implement Product schema (ถ้ามี)
6. Implement BreadcrumbList schema
7. Implement FAQPage schema (ถ้ามี)
8. Validate ด้วย Rich Results Test

### 4. Optimize Content

ปรับปรุง content

1. ทำ `/follow-content-quality` สำหรับคุณภาพเนื้อหา
2. ใช้ heading structure ที่ถูกต้อง (H1 หนึ่งตัวต่อ page)
3. ใช้ semantic HTML
4. Optimize images (alt text, file names)
5. ใช้ internal linking อย่างเหมาะสม
6. ใช้ external links ที่ relevant
7. สร้าง content ที่ valuable และ original

### 5. Technical SEO

ปรับปรุง technical SEO

1. สร้าง sitemap.xml และ submit ไปยัง Google Search Console
2. สร้าง robots.txt ที่เหมาะสม
3. Optimize URL structure (readable, hyphen-separated)
4. Implement HTTPS
5. Optimize page speed (ทำ `/improve-web-performance`)
6. Ensure mobile-friendly
7. Fix broken links (404s)
8. Implement redirects อย่างเหมาะสม

### 6. Monitor And Improve

Monitor และปรับปรุง

1. Set up Google Search Console
2. Set up Google Analytics 4
3. Monitor search performance
4. Monitor crawl errors
5. Monitor indexing status
6. Monitor Core Web Vitals
7. A/B test metadata
8. Update content regularly

## Rules

### 1. Google Search Essentials

ทำตาม Google Search Essentials

- Content ต้อง helpful, reliable, people-first
- ไม่ใช้ black-hat SEO techniques
- ไม่ cloaking หรือ redirect ที่ misleading
- ไม่ spam หรือ keyword stuffing
- เคารพ robots.txt

### 2. Metadata Guidelines

ทำตามเกณฑ์ metadata

- Title: 50-60 characters
- Meta description: 150-160 characters
- H1: หนึ่งตัวต่อ page, unique
- URLs: สั้น, descriptive, hyphen-separated
- Alt text: descriptive สำหรับ images

### 3. Priority-Based Optimization

ปรับปรุงตามลำดับความสำคัญ

- Critical: ทำให้ไม่ index ได้เลย
- High: ทำให้ ranking แย่มาก
- Medium: ทำให้ ranking แย่เล็กน้อย
- Low: เป็น best practices

## Expected Outcome

- Metadata ครบถ้วนและ optimized
- Structured data valid และ rich results แสดง
- Sitemap และ robots.txt configured
- Core Web Vitals ผ่าน
- Mobile-friendly
- Search performance ดีขึ้น
- Indexing status ปกติ
- Crawl errors ลดลง
