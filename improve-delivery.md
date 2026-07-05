---
title: Improve Delivery
description: ปรับปรุง SEO, content, DX, documentation และ versioning
auto_execution_mode: 3
related_workflows:
  - /improve-operations
  - /improve-seo
  - /improve-content
  - /improve-dx
  - /improve-cli
  - /improve-sdk
  - /improve-tui
  - /update-docs
  - /improve-documentation
  - /improve-versioning
---

## Goal

ปรับปรุง SEO, content, developer experience และ documentation ของ codebase

## Scope

ใช้สำหรับการปรับปรุงด้าน delivery ของ codebase ทั้ง SEO, content, DX และ documentation

## Execute

### 1. SEO And Content

1. ถ้า project เป็น web application ที่ต้องการ SEO ทำ `/improve-seo`
2. ทำ `/improve-content` เพื่อปรับปรุงคุณภาพเนื้อหา

### 2. Developer Experience

1. ทำ `/improve-dx` เพื่อปรับปรุง developer experience ครบวงจร
2. ถ้า project มี CLI tools ทำ `/improve-cli`
3. ถ้า project มี SDK libraries ทำ `/improve-sdk`
4. ถ้า project มี TUI ทำ `/improve-tui`

### 3. Documentation

1. ทำ `/update-docs` เพื่อสร้าง documentation
2. ทำ `/improve-documentation` เพื่อปรับปรุงคุณภาพ documentation
3. ถ้า project มี releases ทำ `/improve-versioning`

## Rules

### 1. Execution Order

- ทำทีละ section และตรวจสอบ
- ถ้าพบ issues ทำ `/resolve-errors` ก่อนดำเนินต่อ
- ทำ `/update-reference` หลังแต่ละ section
- รัน tests หลังแต่ละ improvement และตรวจสอบ coverage ไม่ลดลง

## Expected Outcome

- SEO, content ถูกปรับปรุง
- DX, CLI, SDK, TUI ถูกปรับปรุง
- Docs, versioning ถูกปรับปรุง
