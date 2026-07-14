---
title: Report Health
description: วิเคราะห์สุขภาพโปรเจกต์ 60+ categories พร้อม health score และ action items
auto_execution_mode: 3
related:
  - /deep-review
  - /report-format-table
  - /use-scripts
  - /update-health-cli
---

## Goal

วิเคราะห์สุขภาพโปรเจกต์ครบ 60+ categories พร้อม health score, action items, และ production readiness

## Scope

ใช้สำหรับการตรวจสอบสุขภาพโปรเจกต์ทุกประเภท ครอบคลุม 60+ categories จัดกลุ่มตาม 5 domains

## Execute

### 1. Run Health CLI

1. ตรวจสอบว่ามี `tools/health/` directory หรือไม่
2. ถ้ามี ให้รัน `bun --filter @booking/tools-health health` เพื่อสร้าง health report
3. ถ้าไม่มี ให้ทำ `/update-health-cli` ก่อนเพื่อสร้าง health CLI
4. รัน `bun --filter @booking/tools-health health:json` ถ้าต้องการ JSON output
5. รายงานผลลัพธ์จาก CLI โดยตรง — ไม่ต้อง analyze เอง

### 2. Prepare Data

1. กำหนด metrics และ status indicators สำหรับแต่ละ category (ดูรายการใน step 7)
2. ทำ `/use-scripts` เพื่อวิเคราะห์ข้อมูลลึกซึ้งด้วย tools (`knip`, `taze`, `biome`, `vitest`, `madge`, `ast-grep`, `jscpd`)
3. ทำ `/deep-review` เพื่อวิเคราะห์ codebase ครบทุกด้าน ผ่าน analyze-* sub-workflows

### 3. Calculate Health Score

1. คำนวณ score แต่ละ category: ✅ = 1, ⚠️ = 0.5, ❌ = 0
2. รวมเป็น health score รวม (0-100%)
3. แสดง progress bar: `████████░░░░ 67%`
4. จัดเรียง categories ที่ได้คะแนนต่ำก่อนเพื่อ prioritize action
5. กำหนด grade: A (90+), B (80+), C (70+), D (60+), F (<60)

### 4. Format Table

1. ทำ `/report-format-table` เพื่อจัดรูปแบบตาราง

### 5. Group And Sort

1. จัดกลุ่มข้อมูลตาม category ที่เกี่ยวข้อง
2. ใช้ headers สำหรับ grouping
3. เรียงลำดับภายในกลุ่มตามความรุนแรง (Severity)
4. ใช้ separators สำหรับแยกกลุ่มที่ชัดเจน

### 6. Generate Action Items

1. รวม recommendations ทั้งหมดที่ Severity = High
2. จัดเรียงตาม impact และ effort
3. ระบุ workflow ที่แนะนำสำหรับแต่ละ action item
4. แยก quick wins (low effort, high impact) จาก major improvements

### 7. Analyze Additional Categories

จัดกลุ่มตาม domain ใช้ `/improve-*` workflow ที่เกี่ยวข้อง

**User-Facing**: Accessibility, i18n, SEO, UX/UI, Web Performance, Landing Pages, Content Quality, Form Quality, Error Messages & UX

**Security & Compliance**: Auth, RBAC, Session Management, Privacy & GDPR, Audit Trail, Rate Limiting, Idempotency, Multi-tenancy

**Backend & Data**: API Design, Database, Data Quality, Data Migration, Caching, Queue, Search, Realtime, Webhook, Integration, Network, Email, Notifications, Payment, File Upload, Feature Flags

**Infrastructure**: Deployment, DevOps, Config, Asset, Scalability, Routing, Redundancy, Reliability, Logging, Debugging

**Code & Architecture**: Foundation, Codebase, Frontend, Backend Services, Features Coverage, Naming, Comments, Completeness, Correctness, Compatibility, Dependencies, Versioning, Delivery, Platform, Mobile Experience, DX, Team Health

## Rules

### 1. Health Score

- คะแนนต่อ category: ✅ = 1, ⚠️ = 0.5, ❌ = 0
- คำนวณเป็น percentage ของทุก categories (รวม 60+ categories)
- แสดง progress bar พร้อม grade
- เรียงลำดับ categories ที่ได้คะแนนต่ำก่อน

### 2. Table Formatting

ทำตาม `/report-format-table` สำหรับโครงสร้างและการจัดรูปแบบตาราง

## Expected Outcome

- รายงานสุขภาพโปรเจกต์ครอบคลุม 60+ categories จัดกลุ่มตาม domain
- Health score รวมพร้อม grade และ progress bar
- ตารางที่มีโครงสร้างสอดคล้องและจัดกลุ่มชัดเจน
- Action items แยก quick wins จาก major improvements
- Metrics ครอบคลุม 60+ categories จัดกลุ่มตาม 5 domains
