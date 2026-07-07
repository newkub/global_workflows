---
title: Analyze PWA
description: วิเคราะห์ PWA support, service worker, manifest, installable, offline-first
auto_execution_mode: 3
related_workflows:
  - /analyze-frontend
  - /analyze-mobile
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ PWA quality เพื่อระบุ missing PWA features และ offline support gaps

## Scope

Service worker, web app manifest, installable, offline-first, push notifications, background sync

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม PWA metrics ผ่าน scripts (manifest scan, service worker detection, offline test)

### 2. Check Service Worker

1. ระบุ missing service worker registration
2. ระบุ missing service worker caching strategy
3. ระบุ missing offline fallback page
4. ระบุ missing background sync support
5. ระบุ missing push notification support

### 3. Check Web App Manifest

1. ระบุ missing `manifest.json` หรือ `manifest.webmanifest`
2. ระบุ missing manifest fields (name, icons, start_url, display)
3. ระบุ missing maskable icons
4. ระบุ missing theme_color และ background_color
5. ระบุ missing shortcuts และ categories

### 4. Check Installable

1. ระบุ missing installability criteria
2. ระบุ missing install prompt handling
3. ระบุ missing custom install button
4. ระบุ missing install banner
5. ระบุ missing app store listing metadata

### 5. Check Offline-First

1. ระบุ missing offline data persistence
2. ระบุ missing offline form submission queue
3. ระบุ missing online/offline detection
4. ระบุ missing sync on reconnect
5. ระบุ missing offline UI indicators

### 6. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: service worker → manifest → installable → offline-first

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม severity

### 2. Severity Classification

- **Critical**: no service worker, no manifest, no offline support
- **High**: missing caching strategy, missing installable criteria, missing offline fallback
- **Medium**: missing maskable icons, missing offline indicators, missing sync
- **Low**: missing shortcuts, missing categories, missing install button

### 3. Use Scripts For PWA Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ `/use-scripts` สำหรับ manifest validation

## Expected Outcome

- PWA gaps ระบุพร้อม severity
- พร้อมสำหรับ `/improve-mobile-experience` หรือ `/improve-frontend`
