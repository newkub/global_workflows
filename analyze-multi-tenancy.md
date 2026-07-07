---
title: Analyze Multi Tenancy
description: วิเคราะห์ tenant isolation, provisioning, routing, resource limits
auto_execution_mode: 3
related_workflows:
  - /analyze-architecture
  - /analyze-security
  - /analyze-database
  - /improve-multi-tenancy
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ multi-tenancy patterns เพื่อระบุ tenant isolation และ resource allocation issues

## Scope

Tenant isolation, provisioning, routing, resource limits, tenant data separation, tenant configuration, tenant lifecycle, billing separation

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม multi-tenancy metrics ผ่าน scripts (tenant pattern detection, isolation scan, routing analysis)

### 2. Check Tenant Isolation

1. ระบุ tenant isolation strategy (database per tenant, schema per tenant, row-level)
2. ระบุ missing data isolation ใน queries
3. ระบุ missing tenant context propagation
4. ระบุ cross-tenant data leakage risks
5. ระบุ missing tenant-scoped cache isolation

### 3. Check Tenant Provisioning

1. ระบุ missing tenant onboarding flow
2. ระบุ missing tenant configuration setup
3. ระบุ missing tenant data initialization
4. ระบุ missing tenant default settings
5. ระบุ missing tenant provisioning validation

### 4. Check Tenant Routing

1. ระบุ missing tenant resolution from request (subdomain, path, header)
2. ระบุ missing tenant routing middleware
3. ระบุ missing tenant fallback handling
4. ระบุ missing tenant-specific routes
5. ระบุ missing tenant DNS configuration

### 5. Check Resource Limits

1. ระบุ missing per-tenant rate limiting
2. ระบุ missing per-tenant storage quotas
3. ระบุ missing per-tenant API quotas
4. ระบุ missing per-tenant compute limits
5. ระบุ missing per-tenant user limits
6. ระบุ missing resource usage tracking

### 6. Check Tenant Lifecycle

1. ระบุ missing tenant suspension mechanism
2. ระบุ missing tenant deletion flow
3. ระบุ missing tenant data export
4. ระบุ missing tenant data cleanup
5. ระบุ missing tenant status management

### 7. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: isolation → routing → resource limits → provisioning → lifecycle

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม location และ severity

### 2. Severity Classification

- **Critical**: cross-tenant data leakage, missing data isolation
- **High**: missing tenant routing, missing rate limiting, missing resource limits
- **Medium**: missing provisioning, missing lifecycle management, missing cache isolation
- **Low**: missing tenant export, missing default settings, missing fallback

### 3. Framework Awareness

- ตรวจสอบ Drizzle row-level security
- ตรวจสอบ Supabase multi-tenant patterns
- ตรวจสอบ Stripe Connect tenant routing

### 4. Use Scripts For Multi-Tenancy Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ tenant pattern detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- Multi-tenancy gaps ระบุพร้อม location และ severity
- Isolation และ routing issues จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-multi-tenancy`
