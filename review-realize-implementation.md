---
title: Review Realize Implementation
description: Review implementation completeness รวม TODO, MOCK, STUB, FAKE, placeholder, flows, และ features
auto_execution_mode: 3
related:
  - /deep-analyze-codebase
  - /update-rules
  - /scan-codebase
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
  - /comment-todo
  - /roleplay-user
  - /review-api
  - /review-database
  - /review-security
  - /review-privacy
  - /review-rbac
  - /review-error-handling
  - /review-missing-features
---

## Goal

Review implementation completeness ใน codebase เพื่อหา TODO, FIXME, HACK, MOCK, FAKE, STUB, placeholder, incomplete flows, missing features, missing integrations, และ compliance gaps พร้อมระบุ critical path

## Scope

ใช้กับทุก project ที่มี implementation ยังไม่สมบูรณ์ รวมถึง:

- TODO, FIXME, HACK comments
- MOCK, FAKE, STUB, placeholder implementations
- Unfinished features, unimplemented interfaces, missing types
- Incomplete flows, missing steps, dead-ends, missing branches
- Missing supporting features, missing integrations, missing operational readiness
- Missing compliance, security, privacy, audit controls

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ project structure, domain, และ feature scope
2. ระบุ implementation patterns ที่ใช้: TODO, FIXME, HACK, MOCK, FAKE, STUB, placeholder
3. ถ้าสแกนไม่ได้ → stop และ report

### 2. Analyze Implementation Gaps

**Goal reminder:** หา implementation ที่ไม่สมบูรณ์ในทุกมิติ

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-implementation` script
2. Script สแกนหา TODO, FIXME, HACK, MOCK, FAKE, STUB, placeholder patterns พร้อม context
3. Script ตรวจหา unfinished features, unimplemented interfaces, missing error handling
4. Script ตรวจหา incomplete flows, dead-ends, missing success/error branches, missing recovery path
5. Script ตรวจหา missing supporting features, missing integrations, missing operational readiness, missing compliance
6. Script คำนวณ implementation completeness score
7. ทำ `/update-rules` เพื่อบันทึก patterns ที่พบ
8. ถ้า script ไม่ผ่าน → แก้ไขแล้ว re-run ถ้าไม่ผ่านหลังจาก 3 ครั้ง → stop และ report

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับตาม severity: Critical → High → Medium → Low
3. จัดกลุ่มตาม critical path: schema → data → API → UI/flow
4. ระบุ false positives
5. ถ้า validation ไม่ผ่าน → กลับไปแก้ที่ Step 2

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง **Implementation Metrics Summary**: TODO, FIXME, HACK, MOCK, FAKE, STUB, placeholder, unfinished features, missing types, incomplete flows, missing features
3. สร้างตาราง **Findings by Critical Path**: Layer, Finding, Severity, Location, Evidence, Recommendation
4. สร้างตาราง **Recommended Implementations**: Priority, Action, Impact, Effort, Workflow
5. แสดง implementation completeness score พร้อม grade และ progress bar
6. ทำ `/suggest-next-action` เพื่อแนะนำ action ถัดไป

## Rules

### 1. Severity Classification

- **Critical**: MOCK/FAKE/STUB ใน production path, core feature ไม่สมบูรณ์, missing critical schema/data, missing critical API, TODO ใน critical path, incomplete flow ที่อาจก่อให้เกิดความเสียหายทางกฎหมาย/ข้อมูล/การเงิน
- **High**: STUB ที่ถูกเรียกใช้, error handling ไม่สมบูรณ์, hardcoded data ที่ควรมาจาก source, missing type ใน critical path, missing supporting feature ใน flow
- **Medium**: TODO ใน non-critical path, partial implementation, missing validation, incomplete UX/flow state, missing integration, missing operational readiness
- **Low**: FIXME ใน non-critical path, cosmetic placeholder, missing docs, missing feature flag

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number
- ระบุ code snippet หรือ evidence ที่พบ
- ระบุ false positives
- ระบุ critical path: schema → data → API → UI/flow

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review
- ใช้ `/comment-todo` สำหรับระบุ issues ใน code
- ถ้าต้อง implement ให้ใช้ `/realize-implementation` หลัง review

### 4. Health Score Formula

- Metrics หลัก: TODO, FIXME, HACK, MOCK, FAKE, STUB, placeholder, unfinished features, missing types, incomplete flows, missing features
- คะแนนต่อ metric: ✅ = 1, ⚠️ = 0.5, ❌ = 0
- Health score = (total score / total metrics) × 100%
- Grade: A (90+), B (80+), C (70+), D (60+), F (<60)

### 5. Critical Path Priority

- จัดลำดับ findings ตาม critical path: schema → data → API → UI/flow
- แก้ไข schema ก่อน data, data ก่อน API, API ก่อน UI/flow

### 6. Flow And Feature Completeness

- ทำ `/roleplay-user` เพื่อจำลอง user journey และตรวจสอบ flow ที่ไม่สมบูรณ์
- ทำ `/review-missing-features` เพื่อหา features ที่ backend มีแล้วแต่ UX/UI ยังไม่สมบูรณ์
- ทำ `/review-api`, `/review-database`, `/review-security`, `/review-privacy`, `/review-rbac`, `/review-error-handling` ถ้าพบ gaps ในแต่ละด้าน
- ตรวจสอบว่า flow หลักมี happy path, error path, recovery, rollback, undo, confirmation
- ตรวจสอบว่า feature หลักมี supporting features ครบ: validation, auth, audit, notifications, rate limiting, tests, docs

## Expected Outcome

- รายงานตาราง Implementation Metrics Summary พร้อม status indicators
- รายงาน Findings by Critical Path พร้อม severity และ location
- รายงาน Flow And Feature Completeness Gaps
- รายงาน Recommended Implementations พร้อม priority และ workflow
- Implementation completeness score พร้อม grade และ progress bar
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
