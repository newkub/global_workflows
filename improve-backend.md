---
title: Improve Backend
description: ปรับปรุง database, data quality, API design และ backend services
auto_execution_mode: 3
related_workflows:
  - /improve-database
  - /improve-data-quality
  - /improve-api-design
  - /improve-backend-services
  - /improve-network
  - /improve-payment
  - /improve-email
  - /improve-search
  - /improve-file-upload
  - /improve-data-migration
  - /improve-idempotency
  - /improve-pagination
---

## Goal

ปรับปรุง database, data quality, API design และ backend services ของ codebase

## Scope

ใช้สำหรับการปรับปรุงด้าน backend ของ codebase ทั้ง database, API, network, payment และ email

## Execute

### 1. Database And Data

1. ถ้า project มี database ทำ `/improve-database` เพื่อปรับปรุง database ครบวงจร
2. ถ้า project มี data quality concerns ทำ `/improve-data-quality`
3. ถ้า project มี database migrations ทำ `/improve-data-migration` เพื่อปรับปรุง migration strategy

### 2. API And Backend

1. ถ้า project มี API ทำ `/improve-api-design` เพื่อปรับปรุง API design
2. ถ้า project มี search ทำ `/improve-search` เพื่อปรับปรุง search functionality
3. ถ้า project มี file upload ทำ `/improve-file-upload` เพื่อปรับปรุง upload system
4. ถ้า project มี mutation endpoints ทำ `/improve-idempotency` เพื่อปรับปรุง duplicate prevention
5. ถ้า project มี list endpoints ทำ `/improve-pagination` เพื่อปรับปรุง pagination strategy
6. ถ้า project มี backend services ทำ `/improve-backend-services` เพื่อปรับปรุง webhooks, queue, health-check
7. ถ้า project มี network calls ทำ `/improve-network`
8. ถ้า project มี payment ทำ `/improve-payment`
9. ถ้า project ส่ง email ทำ `/improve-email`

## Rules

### 1. Execution Order

- ทำทีละ section และตรวจสอบ
- ถ้าพบ issues ทำ `/resolve-errors` ก่อนดำเนินต่อ
- ทำ `/update-reference` หลังแต่ละ section
- รัน tests หลังแต่ละ improvement และตรวจสอบ coverage ไม่ลดลง

## Expected Outcome

- Database, data quality, migration ถูกปรับปรุง
- API design, search, file upload, idempotency, pagination ถูกปรับปรุง
- Backend services, network, payment, email ถูกปรับปรุง
