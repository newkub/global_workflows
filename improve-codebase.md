---
title: Improve Codebase
description: ปรับปรุงคุณภาพ codebase ครบวงจร foundation ถึง delivery
auto_execution_mode: 3
related_workflows:
  - /analyze-project
  - /prioritize
  - /improve-architecture
  - /improve-foundation
  - /improve-backend
  - /improve-security
  - /improve-reliability
  - /improve-performance
  - /improve-frontend
  - /improve-operations
  - /improve-delivery
---

## Goal

ปรับปรุงคุณภาพ codebase ครบวงจรตั้งแต่ foundation ไปจนถึง delivery โดยจัดกลุ่มตามลำดับความสำคัญ

## Scope

ใช้สำหรับการปรับปรุงคุณภาพ codebase ครบวงจรทั้ง foundation, code quality, performance, และ delivery

## Execute

### 0. Analyze Project

1. ทำ `/analyze-project` เพื่อวิเคราะห์โปรเจกต์พื้นฐาน
2. รับผลลัพธ์จากการวิเคราะห์เพื่อใช้ในการวางแผนการปรับปรุง

### 1. Architecture And Structure

1. ทำ `/improve-architecture` เพื่อปรับปรุง architecture, dependencies, file structure, routing

### 2. Foundation And Code Quality

1. ทำ `/improve-foundation` เพื่อปรับปรุง type safety, code quality, state management

### 3. Backend And Data

1. ทำ `/improve-backend` เพื่อปรับปรุง database, data quality, API, backend services, network, payment, email

### 4. Security And Compliance

1. ทำ `/improve-security` เพื่อปรับปรุง security, compliance, privacy

### 5. Reliability And Testing

1. ทำ `/improve-reliability` เพื่อปรับปรุง error handling, observability, testing, coverage

### 6. Performance And Caching

1. ทำ `/improve-performance` เพื่อปรับปรุง web performance, rendering, scalability, caching

### 7. Frontend And Platform

1. ทำ `/improve-frontend` เพื่อปรับปรุง UI/UX, accessibility, forms, i18n, platform, mobile

### 8. Operations

1. ทำ `/improve-operations` เพื่อปรับปรุง integrations, realtime, DevOps, deployment, feature flags, monitoring, cost

### 9. Delivery And Documentation

1. ทำ `/improve-delivery` เพื่อปรับปรุง SEO, content, DX, docs, versioning

## Rules

### 1. Priority-Based Execution

- ทำทีละ sub-workflow และตรวจสอบ
- ทำ `Architecture` → `Foundation` → `Backend` → `Security` → `Reliability` → `Performance` → `Frontend` → `Operations` → `Delivery`
- ถ้าพบ issues ทำ `/resolve-errors` ก่อนดำเนินต่อ
- ทำ `/update-reference` หลังแต่ละ sub-workflow
- รัน tests หลังแต่ละ improvement และตรวจสอบ coverage ไม่ลดลง

### 2. Use References And Report

- ทำตาม sub-workflows ที่ระบุใน Execute
- ดู Expected Outcome จาก sub-workflows แต่ละอัน
- ทำ `/report-format-terminal` สำหรับรายงานความคืบหน้า
- ทำ `/report-format-table` สำหรับสรุปผลลัพธ์

## Expected Outcome

- Project ถูกวิเคราะห์อย่างครบถ้วนก่อนเริ่มปรับปรุง
- Architecture, dependencies, file structure, routing ถูกปรับปรุง
- Foundation, type safety, code quality ถูกปรับปรุง
- Database, API, backend, network, payment, email ถูกปรับปรุง
- Security, compliance, privacy ถูกปรับปรุง
- Error handling, testing, coverage ถูกปรับปรุง
- Performance, rendering, scalability, caching ถูกปรับปรุง
- UI/UX, accessibility, forms, i18n, platform, mobile ถูกปรับปรุง
- Integrations, realtime, DevOps, deployment, feature flags, monitoring, cost ถูกปรับปรุง
- SEO, content, DX, docs, versioning ถูกปรับปรุง
- ทุกการเปลี่ยนแปลงผ่านการทดสอบและ verify
