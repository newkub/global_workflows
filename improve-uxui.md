---
title: Improve Uxui
description: ปรับปรุง UX/UI ครบทุก platform ด้วย design system, accessibility, และ performance
auto_execution_mode: 3
related_workflows:
  - follow-design-system
  - follow-web-design
  - follow-unocss-theme
  - improve-accessibility
  - improve-web-performance
  - improve-seo
  - improve-ux-writing
  - improve-landing-pages
  - improve-cli
  - improve-tui
  - idea-uxui
---

## Goal

ปรับปรุง UX/UI ให้ดีขึ้นตาม design system principles และ best practices ครบทุก platform (Web, Mobile, Desktop, CLI, TUI)

## Scope

ใช้สำหรับปรับปรุง UX/UI ของ web applications, mobile apps, desktop applications, CLI tools, และ TUI applications

## Execute

### 1. Improve Design System

ปรับปรุง design system ให้ครอบคลุมทุก platform

1. ทำ `/idea-uxui` เพื่อวิเคราะห์และสร้างไอเดีย UX/UI improvements
2. ทำ `/follow-design-system` สำหรับ universal design system principles (TUI, Web, Desktop, Mobile)
3. ถ้า project ใช้ UnoCSS ทำ `/follow-unocss-theme` สำหรับ theme colors ด้วย HSL variables
4. ถ้า project เป็น web ทำ `/follow-web-design` สำหรับ web-specific design principles

### 2. Improve Platform-Specific UX

ปรับปรุง UX ตาม platform ที่ project มี

1. ถ้า project มี CLI tools ทำ `/improve-cli` สำหรับ CLI interface และ DX
2. ถ้า project มี TUI ทำ `/improve-tui` สำหรับ terminal UI layout, input, และ rendering
3. ถ้า project มี mobile app ทำ `/improve-mobile-experience` สำหรับ mobile UX

### 3. Improve Cross-Cutting Concerns

ปรับปรุง accessibility, UX writing, landing pages, และ performance

1. ทำ `/improve-accessibility` เพื่อปรับปรุง accessibility ครบวงจรทุก platform
2. ทำ `/improve-ux-writing` เพื่อปรับปรุง UX writing ครบวงจรทุก platform
3. ถ้า project มี landing pages ทำ `/improve-landing-pages` เพื่อปรับปรุงครบวงจร
4. ถ้า project เป็น web ทำ `/improve-web-performance` สำหรับ Core Web Vitals
5. ถ้า project มี TUI ทำ `/improve-tui` สำหรับ rendering performance
6. ถ้า project มี CLI ทำ `/improve-cli` สำหรับ startup time และ lazy loading

## Rules

### 1. Design System First

- ทำ `/follow-design-system` ก่อน implement เสมอ
- ถ้า project ใช้ UnoCSS ทำ `/follow-unocss-theme`

### 2. Conditional Execution

- ใช้ conditional execution ตาม platform ที่ project มี
- แต่ละ platform มี constraints แตกต่างกัน (ดู `/follow-design-system`)

### 3. Delegate To Specialized Workflows

- ใช้ specialized workflows แทนการ duplicate เนื้อหาในนี้

## Expected Outcome

- UX/UI ดีขึ้นอย่างชัดเจนทุก platform
- Design system ที่ scalable และ cross-platform
- Accessibility, performance, และ UX writing ดีขึ้นทุก platform
- Consistent design ทั่วทั้ง application
