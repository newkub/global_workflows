---
title: Analyze Routing
description: วิเคราะห์ route structure, lazy loading, route guards, nested routes, 404 handling
auto_execution_mode: 3
related_workflows:
  - /analyze-structure
  - /analyze-architecture
  - /improve-routing
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ routing architecture และ route logic เพื่อระบุ navigation gaps และ guard issues

## Scope

Route structure, lazy loading, route guards, nested routes, 404 handling, redirect strategy, route params, route middleware

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม routing metrics ผ่าน scripts (route detection, guard scan, lazy loading analysis)

### 2. Check Route Structure

1. ระบุ route organization (file-based vs config-based)
2. ระบุ missing route groups และ layout routes
3. ระบุ inconsistent route naming conventions
4. ระบุ missing route types (index, dynamic, catch-all)
5. ระบุ route depth ที่ลึกเกินไป

### 3. Check Lazy Loading

1. ระบุ missing route-level code splitting
2. ระบุ routes ที่โหลดทั้งหมดใน initial bundle
3. ระบุ missing preload/prefetch สำหรับ likely routes
4. ระบุ missing Suspense boundaries สำหรับ lazy routes
5. ระบุ missing loading states สำหรับ lazy routes

### 4. Check Route Guards

1. ระบุ missing auth guards ใน protected routes
2. ระบุ missing permission checks ใน route guards
3. ระบุ missing role-based route protection
4. ระบุ guard order ที่ไม่สอดคล้อง
5. ระบุ missing redirect after auth
6. ระบุ missing guard for tenant-specific routes

### 5. Check Nested Routes

1. ระบุ missing parent-child route relationships
2. ระบุ missing shared layouts สำหรับ route groups
3. ระบุ missing outlet management
4. ระบุ inconsistent nesting patterns
5. ระบุ missing breadcrumb generation

### 6. Check Error And Redirect Handling

1. ระบุ missing 404 page
2. ระบุ missing error boundaries สำหรับ route errors
3. ระบุ missing redirect rules (trailing slash, case sensitivity)
4. ระบุ missing canonical URL handling
5. ระบุ missing redirect loops detection

### 7. Check Route Params And Search

1. ระบุ missing param validation
2. ระบุ missing search param handling
3. ระบุ missing URL state synchronization
4. ระบุ missing param type safety
5. ระบุ missing history mode configuration

### 8. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: route guards → lazy loading → error handling → route structure → nested routes → params

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม route path และ severity

### 2. Severity Classification

- **Critical**: missing auth guards, missing 404, redirect loops
- **High**: missing lazy loading, missing permission checks, missing error boundaries
- **Medium**: missing preload, inconsistent naming, missing breadcrumbs
- **Low**: missing param validation, missing search params, inconsistent nesting

### 3. Framework Awareness

- ตรวจสอบ TanStack Router file-based routing
- ตรวจสอบ route generation patterns
- ระบุ framework-specific routing solutions

### 4. Use Scripts For Routing Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ route pattern detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- Routing gaps ระบุพร้อม route path และ severity
- Guard และ lazy loading issues จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-routing`
