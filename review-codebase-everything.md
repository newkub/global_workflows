---
title: Review Codebase Everything
description: Deep Review codebase ครบทุกมิติ ผ่าน 8 category orchestrators พร้อม validate issues
auto_execution_mode: 3
related:
  - /run-check
  - /read-related-workflows
  - /follow-agents-md
  - /review-code-quality
  - /review-security
  - /review-frontend
  - /review-backend
  - /review-infrastructure
  - /review-business
  - /review-delivery
  - /review-platform
  - /validate
  - /realize-implementation
  - /edit-relative
  - /commit
  - /report-health
  - /report-format-terminal
  - /report-format-table
  - /report
  - /resolve-errors
  - /update-reference
---

## Goal

Deep Review codebase ครบทุกมิติอย่างลึกซึ้ง ตั้งแต่ foundation ไปจนถึง delivery โดยจัดกลุ่มตามลำดับความสำคัญ และ validate issues ที่พบ

## Scope

ใช้สำหรับ comprehensive Review ครอบคลุมทุก dimension ผ่าน 8 category orchestrator workflows พร้อม validate issues ที่พบ

## Execute

### 1. Run Pre-Check

ตรวจสอบคุณภาพ codebase ก่อนเริ่ม review เพื่อให้แน่ใจว่า codebase อยู่ในสภาพที่ review ได้

1. ทำ `/run-check` เพื่อรัน lint, typecheck และ scan
2. ถ้าพบ errors ให้ทำ `/resolve-errors` ก่อนดำเนินต่อ
3. ยืนยันว่า lint, typecheck และ scan ผ่านทั้งหมดก่อนเริ่ม review ถ้าไม่ผ่านให้ stop และ report

### 2. Read Context

1. ทำ `/read-related-workflows` เพื่อระบุ review dimensions ที่เกี่ยวข้องกับ project
2. ทำ `/follow-agents-md` เพื่ออ่านและทำตาม `AGENTS.md` ในทุก workspace

### 3. Run Category Reviews

ทำ 8 category orchestrator workflows แต่ละ category เรียก sub-workflows ภายในของตัวเอง ถ้าพบ critical issues ให้หยุดและ validate ก่อนดำเนินต่อ

1. ทำ `/review-code-quality` เพื่อ review static analysis, architecture, types, naming, filesystem, refactor, bug-prone, hardcode, deprecation, realize implementation, techstack, dependencies
2. ทำ `/review-security` เพื่อ review auth/secrets/vulnerabilities, RBAC, browser security, data leak, privacy, audit log, session, token, rate limiting
3. ทำ `/review-frontend` เพื่อ review components/reactivity, hooks/composables, UX/UI, forms, accessibility, i18n, design system, image optimization
4. ทำ `/review-backend` เพื่อ review API, service, webhooks, queue, workers, content, file upload, database, migrations, data integrity, search
5. ทำ `/review-infrastructure` เพื่อ review deployment, CI/CD, config, monitoring, tracing, disaster recovery, backup, performance, caching, bundler, cost, integrations, resilience
6. ทำ `/review-business` เพื่อ review payment, subscription, multi-tenancy, feature flags, realtime, email
7. ทำ `/review-delivery` เพื่อ review SEO/content/DX/docs/versioning, documentation, SEO, developer experience, analytics, testing, PR, logging, debugging
8. ทำ `/review-platform` เพื่อ review mobile, desktop, CLI/TUI, SSR, state management, routing

### 4. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity: Critical → High → Medium → Low
3. ทำ `/realize-implementation` สำหรับ issues ที่ต้องการ refactor หรือ realize implementation
4. ทำ `/edit-relative` หลังจากแก้ไขไฟล์ และตรวจสอบว่า issues ถูก validate ครบถ้วน
5. ทำ `/commit` เมื่อ validate issues กลุ่มเสร็จ

### 5. Report And Verify

1. ทำ `/report-health` เพื่อวัด health score หลัง validate
2. เปรียบเทียบ before-after score เพื่อยืนยันการ review
3. ทำ `/report-format-terminal` สำหรับรายงานความคืบหน้า
4. ทำ `/report-format-table` สำหรับสรุปผลลัพธ์ before-after
5. ทำ `/report` เพื่อสรุปผลการ review และ validate

## Rules

### 1. Severity Classification

ทำตาม category orchestrator workflows แต่ละตัว Rules > Severity Classification

### 2. Evidence-Based Findings

ทำตาม category orchestrator workflows แต่ละตัว Rules > Evidence-Based Findings

### 3. Review Independence

ทำตาม category orchestrator workflows แต่ละตัว Rules > Review Independence

### 4. Execution Governance

- ทำ category orchestrator workflows ตามลำดับ Step 3 ถ้าพบ issues ทำ `/resolve-errors` ก่อนดำเนินต่อ
- ทำ `/update-reference` หลังแต่ละ category orchestrator workflow
- รัน tests หลังแต่ละ improvement และตรวจสอบ coverage ไม่ลดลง ใช้ `/report-health` score เป็น before-after metric
- ไม่ข้ามขั้นตอน Review หรือ validate
- ถ้า project ไม่มี code quality concerns ให้ข้าม `/review-code-quality`
- ถ้า project ไม่มี security concerns ให้ข้าม `/review-security`
- ถ้า project ไม่มี frontend ให้ข้าม `/review-frontend`
- ถ้า project ไม่มี backend ให้ข้าม `/review-backend`
- ถ้า project ไม่มี infrastructure ให้ข้าม `/review-infrastructure`
- ถ้า project ไม่มี business logic ให้ข้าม `/review-business`
- ถ้า project ไม่มี delivery channels ให้ข้าม `/review-delivery`
- ถ้า project ไม่มี platform-specific code ให้ข้าม `/review-platform`

### 5. Delegation

- Orchestrator เรียก category workflows เท่านั้น ไม่ทำ review เอง
- Category workflows เรียก sub-workflows ภายในของตัวเอง
- ไม่ duplicate เนื้อหา sub-workflows หรือ category workflows
- Skip conditions ของแต่ละ category อยู่ใน category workflow เอง

## Expected Outcome

- Findings และ recommendations จาก 8 category orchestrator workflows
- Issues ที่พบถูก validate ครบถ้วนตาม severity
- Before-after health score ผ่าน `/report-health`
- รายงานในแชทเป็นตารางตาม `/report`
