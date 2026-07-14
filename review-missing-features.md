---
title: Review Missing Features
description: Review หา features ที่ API/database มีแล้วแต่ UX/UI หรือการใช้งานยังไม่สมบูรณ์
auto_execution_mode: 3
related:
  - /deep-analyze-with-use-scripts
  - /update-rules
  - /scan-codebase
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
  - /review-api
  - /review-database
  - /review-uxui
---

## Goal

Review codebase เพื่อหา features ที่ backend/API/database มี implementation แล้ว แต่ user-facing ส่วน (UX/UI, flow, screen, interaction) ยังไม่สมบูรณ์หรือหายไป

## Scope

ใช้กับทุก project ที่มี backend/API/database แยกจาก frontend/UX หรือมี gap ระหว่าง system capability กับ user-facing experience รวมถึง:

- API endpoints ที่ไม่มี UI เรียกใช้
- Database schema/tables ที่ไม่มี UX จัดการ
- Backend services ที่ไม่มี user-facing flow
- Features ที่มี admin/provider/staff flow แต่ไม่มี customer/user flow
- Feature flags หรือ configuration ที่เปิดใช้แล้วแต่ไม่มี UI รองรับ

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ project structure, architecture, และ layer ต่างๆ
2. ระบุ backend capabilities: API endpoints, database tables, server functions, services, background jobs
3. ระบุ frontend/UX capabilities: routes, pages, components, forms, navigation
4. ถ้าหา layer ไม่เจอ ให้ถามผู้ใช้ว่าต้องการ focus ที่ส่วนไหน

### 2. Map Capabilities To UX

1. ทำ `/deep-analyze-with-use-scripts` เพื่อสร้าง `analyze-missing-features` script
2. Script สร้าง inventory ของ backend capabilities พร้อม location
3. Script สร้าง inventory ของ frontend/UX capabilities พร้อม location
4. Script map backend capability ไปหา frontend/UX usage ที่ควรมี
5. ทำ `/update-rules` เพื่อบันทึก patterns ที่พบ
6. ถ้า script ไม่ผ่าน → แก้ไขแล้ว re-run ถ้าไม่ผ่านหลังจาก 3 ครั้ง → stop และ report

### 3. Detect Missing Features

**Goal reminder:** หา features ที่ backend/database มีแล้วแต่ UX/UI ไม่สมบูรณ์

1. หา API endpoints ที่ไม่มี corresponding UI action
2. หา database tables/columns ที่ไม่มี UX สำหรับ user จัดการหรือดู
3. หา backend flows ที่ขาด user-facing steps (confirmation, feedback, error handling)
4. หา features ที่มี partial UX (มี list แต่ไม่มี create/edit, มี create แต่ไม่มี delete)
5. หา features ที่มี admin/provider/staff flow แต่ไม่มี customer-facing counterpart
6. หา feature flags/config ที่เปิดใช้แล้วแต่ไม่มี UI รองรับ

### 4. Validate Findings

1. ทำ `/validate` สำหรับ validate แต่ละ missing feature
2. จัดลำดับตาม severity: Critical → High → Medium → Low
3. ระบุ false positives (เช่น internal API ที่ไม่ควรมี UI)
4. ถ้า validation ไม่ผ่าน → กลับไปแก้ที่ Step 2

### 5. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง **Missing Features**: Backend Capability, Expected UX, Current UX, Severity, Location, Evidence, Recommendation
3. สร้างตาราง **Backend-UX Coverage**: Layer, Coverage Ratio, Gaps
4. ทำ `/suggest-next-action` เพื่อแนะนำ action ถัดไป

## Rules

### 1. Severity Classification

- **Critical**: ฟีเจอร์หลักที่ API/database มีแล้วแต่ไม่มี UX ทำให้ user ไม่สามารถใช้งานได้เลย
- **High**: ฟีเจอร์สำคัญที่ UX ไม่สมบูรณ์ (ขาด create/edit/delete, ขาด error/loading state, ขาด confirmation)
- **Medium**: ฟีเจอร์รองที่ UX ยังไม่มี หรือมีแต่สำหรับบาง role
- **Low**: ฟีเจอร์ internal/optional ที่อาจไม่ต้องมี UI ตาม design

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path/line number หรือ code snippet
- ระบุ backend capability และ UX ที่ควรมี
- ระบุ false positives (เช่น internal-only API, admin-only endpoint)
- ระบุ assumption ถ้าไม่แน่ใจว่าควรมี UX หรือไม่

### 3. Scope Boundaries

- ไม่ซ้ำกับ `/review-api` สำหรับ API design review
- ไม่ซ้ำกับ `/review-database` สำหรับ schema review
- ไม่ซ้ำกับ `/review-uxui` สำหรับ UX/UI quality review
- ถ้าพบ issues ในหมวดเหล่านั้น ให้ส่งต่อไปยัง review workflow นั้น

### 4. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review
- ใช้ `/comment-todo` สำหรับระบุ issues ใน code

## Expected Outcome

- รายงาน missing features ที่ backend มีแล้วแต่ UX ไม่สมบูรณ์
- ตาราง mapping ระหว่าง backend capability กับ expected UX
- Coverage ratio ระหว่าง backend API/database กับ user-facing features
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
