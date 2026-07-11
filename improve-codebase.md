---
title: Improve Codebase
description: ปรับปรุงคุณภาพ codebase ครบวงจร foundation ถึง delivery
auto_execution_mode: 3
related_workflows:
  - /analyze-project
  - /report-health
  - /prioritize
  - /improve-architecture
  - /improve-dependencies
  - /improve-foundation
  - /improve-backend
  - /improve-security
  - /improve-reliability
  - /improve-performance
  - /improve-frontend
  - /improve-operations
  - /improve-delivery
  - /improve-redundancy
  - /resolve-errors
  - /update-reference
  - /report-format-terminal
  - /report-format-table
  - /follow-code-quality
  - /pondering
---

## Goal

ปรับปรุงคุณภาพ codebase ครบวงจรตั้งแต่ foundation ไปจนถึง delivery โดยจัดกลุ่มตามลำดับความสำคัญ

## Scope

ใช้สำหรับการปรับปรุงคุณภาพ codebase ครบวงจรทั้ง foundation, code quality, performance, และ delivery

## Execute

### 1. Analyze And Baseline

1. ทำ `/analyze-project` เพื่อวิเคราะห์โปรเจกต์พื้นฐาน
2. ทำ `/report-health` เพื่อวัด health score ก่อนเริ่มปรับปรุง
3. ทำ `/pondering` เพื่อทบทวนว่าควรปรับปรุงอะไรก่อนและผลกระทบของแต่ละการเปลี่ยนแปลง
4. ทำ `/prioritize` เพื่อจัดลำดับ improvements ตาม impact และ effort

### 2. Architecture And Structure

1. ทำ `/improve-architecture` เพื่อปรับปรุง architecture, file structure, routing

### 3. Dependencies And Security

1. ทำ `/improve-dependencies` เพื่อปรับปรุง dependencies ครบวงจร inventory, validation, security, cleanup, update, optimization

### 4. Foundation And Code Quality

1. ทำ `/improve-foundation` เพื่อปรับปรุง type safety, code quality, state management

### 5. Backend And Data

1. ทำ `/improve-backend` เพื่อปรับปรุง database, data quality, API, backend services, network, payment, email

### 6. Security And Compliance

1. ทำ `/improve-security` เพื่อปรับปรุง security, compliance, privacy

### 7. Reliability And Testing

1. ทำ `/improve-reliability` เพื่อปรับปรุง error handling, observability, testing, coverage

### 8. Performance And Caching

1. ทำ `/improve-performance` เพื่อปรับปรุง web performance, rendering, scalability, caching

### 9. Frontend And Platform

1. ทำ `/improve-frontend` เพื่อปรับปรุง UI/UX, accessibility, forms, i18n, platform, mobile

### 10. Operations

1. ทำ `/improve-operations` เพื่อปรับปรุง integrations, realtime, DevOps, deployment, feature flags, monitoring, cost

### 11. Delivery And Documentation

1. ทำ `/improve-delivery` เพื่อปรับปรุง SEO, content, DX, docs, versioning

### 12. Report And Verify

1. ทำ `/report-health` เพื่อวัด health score หลังปรับปรุง
2. ทำ `/report-format-terminal` สำหรับรายงานความคืบหน้า
3. ทำ `/report-format-table` สำหรับสรุปผลลัพธ์ before-after

## Rules

### 1. Priority-Based Execution

- ทำทีละ sub-workflow และตรวจสอบ
- ทำตามลำดับ: `Architecture` → `Dependencies` → `Foundation` → `Backend` → `Security` → `Reliability` → `Performance` → `Frontend` → `Operations` → `Delivery`
- ถ้าพบ issues ทำ `/resolve-errors` ก่อนดำเนินต่อ
- ทำ `/update-reference` หลังแต่ละ sub-workflow
- รัน tests หลังแต่ละ improvement และตรวจสอบ coverage ไม่ลดลง

### 2. Conditional Execution

- ถ้า project ไม่มี backend ข้าม Step 5 (Backend And Data)
- ถ้า project ไม่มี payment ข้าม payment checks ใน Step 5
- ถ้า project ไม่มี frontend ข้าม Step 9 (Frontend And Platform)
- ถ้า project ไม่มี CI/CD ข้าม deployment checks ใน Step 10
- ตรวจสอบ project characteristics จาก `/analyze-project` ก่อน execute แต่ละ step

### 3. Report Formatting

- ทำ `/report-format-terminal` สำหรับรายงานความคืบหน้าระหว่างทำ
- ทำ `/report-format-table` สำหรับสรุปผลลัพธ์ before-after
- ใช้ `/report-health` score เป็น before-after metric

## Expected Outcome

- Health score ก่อนและหลังปรับปรุงเป็น metric วัดผล
- Codebase ถูกปรับปรุงครบวงจรตามลำดับ priority
- ทุกการเปลี่ยนแปลงผ่านการทดสอบและ verify
- รายงาน before-after พร้อม action items ที่เหลือ
