---
title: Improve Frontend
description: ปรับปรุง UI/UX, accessibility, forms และ platform compatibility
auto_execution_mode: 3
related_workflows:
  - /improve-performance
  - /improve-uxui
  - /improve-accessibility
  - /improve-form
  - /improve-user-features
  - /improve-web-saas
  - /improve-website
  - /improve-platform
  - /improve-compatibility
  - /improve-mobile-experience
  - /improve-caching
  - /improve-feature-flags
  - /improve-i18n
  - /improve-search
  - /improve-pagination
  - /improve-error-messages
---

## Goal

ปรับปรุง UI/UX, accessibility, forms และ platform compatibility ของ codebase

## Scope

ใช้สำหรับการปรับปรุงด้านหน้าของ codebase ทั้ง UI/UX, accessibility, forms และ platform support

## Execute

### 1. UI/UX And Frontend

1. ถ้า project มี UI ทำ `/improve-uxui` สำหรับ UX/UI improvements
2. ทำ `/improve-accessibility` เพื่อปรับปรุง accessibility
3. ถ้า project มี forms ทำ `/improve-form`
4. ถ้า project มี multi-language ทำ `/improve-i18n` เพื่อปรับปรุง internationalization
5. ถ้า project มี search ทำ `/improve-search` เพื่อปรับปรุง search experience
6. ถ้า project มี list views ทำ `/improve-pagination` เพื่อปรับปรุง pagination UX
7. ทำ `/improve-error-messages` เพื่อปรับปรุง user-facing error messages
8. ถ้า project เป็น web SaaS ทำ `/improve-web-saas`
9. ถ้า project เป็น website ทำ `/improve-website`

### 2. Platform And Mobile

1. ถ้า project ต้องการ multiple platform ทำ `/improve-platform`
2. ทำ `/improve-compatibility` เพื่อปรับปรุง browser/platform compatibility
3. ถ้า project มี mobile app ทำ `/improve-mobile-experience`

### 3. Caching And Feature Control

1. ทำ `/improve-caching` เพื่อปรับปรุง caching strategy สำหรับ frontend
2. ถ้า project ใช้ feature flags ทำ `/improve-feature-flags` สำหรับ gradual rollout และ kill switches

## Rules

### 1. Execution Order

- ทำทีละ section และตรวจสอบ
- ถ้าพบ issues ทำ `/resolve-errors` ก่อนดำเนินต่อ
- ทำ `/update-reference` หลังแต่ละ section
- รัน tests หลังแต่ละ improvement และตรวจสอบ coverage ไม่ลดลง

## Expected Outcome

- UI/UX, accessibility, forms, i18n, search, pagination, error messages ถูกปรับปรุง
- Platform compatibility และ mobile experience ถูกปรับปรุง
- Caching และ feature flags ถูกปรับปรุง
