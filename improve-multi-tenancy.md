---
title: Improve Multi Tenancy
description: ปรับปรุง tenant isolation, provisioning, routing และ resource limits
auto_execution_mode: 3
related_workflows:
  - improve-security
  - improve-database
  - improve-routing
  - improve-rate-limiting
  - improve-rbac
---

## Goal

ปรับปรุง multi-tenancy architecture ให้ tenant isolation ปลอดภัย, provisioning อัตโนมัติ, และ resource limits ชัดเจน

## Scope

ใช้สำหรับ SaaS หรือ platform ที่มี multiple tenants ต้องการ data isolation และ resource management

## Execute

### 1. Analyze Tenancy Model

วิเคราะห์ tenancy model ปัจจุบัน

1. ระบุ tenancy model: shared database, database-per-tenant, schema-per-tenant
2. ตรวจสอบ tenant isolation strategy
3. ตรวจสอบ tenant data access patterns
4. ตรวจสอบ tenant-specific configurations
5. ทำ `/improve-database` สำหรับ database-level isolation

### 2. Tenant Isolation

ปรับปรุง tenant data isolation

1. ตรวจสอบ row-level security (RLS) หรือ tenant filters
2. ตรวจสอบ query-level tenant filtering ทุก query
3. ตรวจสอบ tenant context propagation ทุก layer
4. ป้องกัน cross-tenant data leakage
5. ทำ `/improve-security` สำหรับ isolation audit
6. ทดสอบ isolation ด้วย tenant-specific test cases

### 3. Tenant Provisioning

อัตโนมัติ tenant provisioning

1. สร้าง tenant onboarding flow
2. ตั้งค่า tenant database/schema initialization
3. ตั้งค่า default configurations สำหรับ tenant ใหม่
4. ตั้งค่า tenant admin user creation
5. ตั้งค่า tenant-specific seed data
6. สร้าง tenant deactivation และ data cleanup flow

### 4. Tenant-Aware Routing

ปรับปรุง routing สำหรับ multi-tenant

1. ใช้ subdomain-based tenant routing (tenant.app.com)
2. ใช้ path-based tenant routing (app.com/tenant)
3. ใช้ header-based tenant routing สำหรับ API
4. ตั้งค่า tenant resolution middleware
5. ทำ `/improve-routing` สำหรับ routing architecture

### 5. Resource Limits And Quotas

ตั้งค่า resource management ต่อ tenant

1. กำหนด tenant tier และ resource limits
2. ตั้งค่า API rate limits ต่อ tenant
3. ตั้งค่า storage quotas ต่อ tenant
4. ตั้งค่า compute resource limits ต่อ tenant
5. ทำ `/improve-rate-limiting` สำหรับ quota management
6. ติดตาม resource usage และ alerting

### 6. Tenant Configuration

จัดการ tenant-specific configurations

1. สร้าง tenant settings system
2. อนุญาต tenant-specific feature flags
3. อนุญาต tenant-specific branding และ theming
4. อนุญาต tenant-specific integrations
5. ตั้งค่า configuration inheritance (global → tenant → user)

### 7. Tenant Monitoring

ติดตาม tenant health และ usage

1. ติดตาม tenant activity metrics
2. ติดตาม tenant resource consumption
3. ตั้งค่า tenant health checks
4. ตั้งค่า alerts สำหรับ tenant issues
5. สร้าง tenant usage reports

## Rules

### 1. Isolation Is Critical

- ไม่มี cross-tenant data access โดยไม่ได้รับอนุญาต
- ทุก query ต้อง filter ด้วย tenant ID
- Tenant context ต้อง propagate ทุก layer
- ทดสอบ isolation อย่างสม่ำเสมอ

### 2. Noisy Neighbor Prevention

- ใช้ resource limits ป้องกัน tenant หนึ่งกระทบอีก tenant
- ใช้ rate limiting ต่อ tenant
- ใช้ connection pooling ต่อ tenant
- Monitor และ alert สำหรับ abnormal usage

### 3. Graceful Degradation

- Tenant ที่เกิน quota ได้รับ clear error message
- ไม่ crash หรือ block tenant อื่น
- อนุญาต grace period สำหรับ temporary overages
- แจ้ง tenant admin ก่อน enforce limits

## Expected Outcome

- Tenant isolation ปลอดภัย ไม่มี cross-tenant leakage
- Tenant provisioning อัตโนมัติ
- Tenant-aware routing ชัดเจน
- Resource limits และ quotas ทำงานตาม tier
- Tenant configuration ยืดหยุ่น
- Tenant monitoring ครบถ้วน
