---
title: Analyze Frontend
description: วิเคราะห์ frontend: UX/UI, accessibility, i18n, SEO, routing, rendering, form, PWA, web performance, browser compat
auto_execution_mode: 3
related_workflows:
  - /analyze-uxui
  - /analyze-accessibility
  - /analyze-i18n
  - /analyze-seo
  - /analyze-routing
  - /analyze-rendering
  - /analyze-form
  - /analyze-pwa
  - /analyze-web-performance
  - /analyze-browser-compat
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ frontend quality และ user experience ของ codebase

## Scope

UX/UI, accessibility, i18n, SEO, routing, rendering strategy, form patterns, PWA, web performance, browser compatibility

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม frontend metrics ผ่าน scripts (bundle analysis, accessibility scan, performance audit)

### 2. Analyze User Experience

1. ทำ `/analyze-uxui` วิเคราะห์ WCAG, ARIA, keyboard navigation
2. ทำ `/analyze-accessibility` วิเคราะห์ WCAG compliance, screen readers, color contrast
3. ทำ `/analyze-i18n` วิเคราะห์ internationalization, hardcoded strings, RTL support

### 3. Analyze Frontend Architecture

1. ทำ `/analyze-routing` วิเคราะห์ route structure, lazy loading, route guards, nested routes
2. ทำ `/analyze-rendering` วิเคราะห์ SSR/SSG/CSR/ISR strategy, hydration, streaming

### 4. Analyze Frontend Patterns

1. ทำ `/analyze-form` วิเคราะห์ form UX, validation, multi-step, CSRF, file upload in forms
2. ทำ `/analyze-seo` วิเคราะห์ meta tags, structured data, Core Web Vitals

### 5. Analyze Frontend Performance

1. ทำ `/analyze-web-performance` วิเคราะห์ Core Web Vitals, LCP, INP, CLS, FCP, TBT, Speed Index
2. ทำ `/analyze-browser-compat` วิเคราะห์ browser compatibility, polyfills, caniuse, feature detection
3. ถ้า project มี PWA ให้ทำ `/analyze-pwa` วิเคราะห์ service worker, manifest, installable, offline-first

### 6. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: web performance → accessibility → routing → rendering → form → browser compat → PWA → UX/UI → SEO → i18n

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม severity

### 2. Conditional Execution

- ถ้า project ไม่มี frontend ให้ข้าม group นี้ทั้งหมด
- ถ้า project ไม่มี web frontend ให้ข้าม `/analyze-seo`
- ถ้า project ไม่มี forms ให้ข้าม `/analyze-form`
- ถ้า project ไม่มี PWA ให้ข้าม `/analyze-pwa`

### 3. Severity Classification

- **Critical**: missing auth guards, hydration mismatches, no SSR สำหรับ SEO pages
- **High**: missing lazy loading, WCAG violations, missing form validation
- **Medium**: missing preload, inconsistent naming, missing breadcrumbs
- **Low**: missing i18n, missing structured data, missing input masking

### 4. Use Scripts For Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ Lighthouse สำหรับ Core Web Vitals
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

### 5. Non-Redundancy

- แต่ละ sub-workflow มี scope ที่ไม่ทับซ้อนกัน
- ใช้ references แทนการเขียนซ้ำเนื้อหาจาก sub-workflows

## Expected Outcome

- Frontend gaps ระบุพร้อม severity
- พร้อมสำหรับ orchestrator consolidation หรือ `/improve-uxui`
