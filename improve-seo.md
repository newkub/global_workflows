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

- ตรวจสอบ metadata (title, description, keywords)
- ตรวจสอบ Open Graph tags
- ตรวจสอบ Twitter Card tags
- ตรวจสอบ structured data (Schema.org)
- ตรวจสอบ sitemap.xml
- ตรวจสอบ robots.txt
- ตรวจสอบ canonical URLs
- ตรวจสอบ heading structure (H1-H6)
- ตรวจสอบ internal linking
- ตรวจสอบ mobile-friendliness

### 2. Optimize Metadata

ปรับปรุง metadata

- เขียน title tags ที่ unique และ descriptive
- เขียน meta descriptions ที่ compelling
- ใช้ Open Graph tags สำหรับ social sharing
- ใช้ Twitter Card tags
- ใช้ canonical URLs สำหรับ duplicate content
- ใช้ hreflang tags สำหรับ multilingual
- ใช้ noindex/nofollow อย่างเหมาะสม

### 3. Implement Structured Data

Implement structured data

- ใช้ JSON-LD format
- Implement Organization schema
- Implement WebSite schema
- Implement Article/BlogPosting schema
- Implement Product schema (ถ้ามี)
- Implement BreadcrumbList schema
- Implement FAQPage schema (ถ้ามี)
- Validate ด้วย Rich Results Test

### 4. Optimize Content

ปรับปรุง content

- ทำ `/follow-content-quality` สำหรับคุณภาพเนื้อหา
- ใช้ heading structure ที่ถูกต้อง (H1 หนึ่งตัวต่อ page)
- ใช้ semantic HTML
- Optimize images (alt text, file names)
- ใช้ internal linking อย่างเหมาะสม
- ใช้ external links ที่ relevant
- สร้าง content ที่ valuable และ original

### 5. Technical SEO

ปรับปรุง technical SEO

- สร้าง sitemap.xml และ submit ไปยัง Google Search Console
- สร้าง robots.txt ที่เหมาะสม
- Optimize URL structure (readable, hyphen-separated)
- Implement HTTPS
- Optimize page speed (ทำ `/improve-web-performance`)
- Ensure mobile-friendly
- Fix broken links (404s)
- Implement redirects อย่างเหมาะสม

### 6. Monitor And Improve

Monitor และปรับปรุง

- Set up Google Search Console
- Set up Google Analytics 4
- Monitor search performance
- Monitor crawl errors
- Monitor indexing status
- Monitor Core Web Vitals
- A/B test metadata
- Update content regularly

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
