---
title: Review Multi Tenancy
description: Review multi-tenancy isolation ครอบคลุม data partitioning, tenant context, และ cross-tenant leak prevention
auto_execution_mode: 3
related:
  - /deep-analyze-with-use-scripts
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review multi-tenancy isolation quality ครอบคลุม data partitioning, tenant context propagation, cross-tenant data leak prevention และ tenant-specific resource isolation

## Scope

tenant data isolation, tenant context management, cross-tenant access prevention, tenant-specific configuration, resource quota per tenant และ tenant onboarding/offboarding

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ multi-tenancy setup
2. ระบุ tenant model (shared database, database per tenant, schema per tenant), tenant identification method และ tenant context propagation

### 2. Deep Analyze

1. ทำ `/deep-analyze-with-use-scripts` เพื่อสร้าง `analyze-multi-tenancy.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ tenant context propagation ผ่านทุก layer: API → service → database
3. Script ตรวจสอบ data isolation: tenant_id filtering ในทุก query, missing tenant scope, cross-tenant data access
4. Script ตรวจสอบ tenant-specific configuration: per-tenant settings, feature flags, rate limits
5. Script ตรวจสอบ resource isolation: per-tenant quotas, storage limits, compute limits
6. Script ตรวจสอบ tenant onboarding/offboarding: provisioning, data migration, data deletion
7. Script คำนวณ multi-tenancy health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: cross-tenant data access, missing tenant_id filter, tenant context leak
- **High**: inconsistent tenant propagation, missing tenant isolation ใน shared resources
- **Medium**: missing per-tenant quota, incomplete tenant offboarding, tenant config gap
- **Low**: tenant naming convention, minor isolation improvement

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
