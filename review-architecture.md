---
title: Review Architecture
description: Review architecture ครอบคลุม patterns, boundaries, coupling, และ design principles
auto_execution_mode: 3
related:
  - /scan-codebase
  - /deep-analyze-codebase
  - /validate
  - /update-rules
  - /report
  - /report-format-table
  - /suggest-next-action
  - /comment-todo
  - /analyze-code-structure
---

## Goal

Review architecture ระดับ macro ครอบคลุม design patterns, module boundaries, dependency directions, coupling, และ SOLID principles

## Scope

architectural patterns, module boundaries, dependency directions, SOLID principles, scalability, concurrency, multi-tenancy, queue architecture, routing, และ side effects

## Execute

### 1. Prepare

สแกน codebase เพื่อเข้าใจ architecture ปัจจุบัน

1. ทำ `/scan-codebase` เพื่อเข้าใจ architecture
2. ระบุ architectural patterns ที่ใช้
3. ถ้าสแกนไม่ได้ → stop และ report

### 2. Deep Analyze

วิเคราะห์ architecture อย่างลึกซึ้งด้วย scripts

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-architecture.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ:
   - Module boundaries และ import directions
   - Dependency graph และ circular dependencies
   - SOLID principles และ design patterns
   - Scalability และ concurrency issues
3. Script คำนวณ architecture health score และ output เป็น structured JSON
4. ถ้า script ไม่ผ่าน → แก้ไข script แล้ว re-run ถ้าไม่ผ่านหลังจาก 3 ครั้ง → stop และ report

### 3. Validate Findings

ตรวจสอบความถูกต้องของ findings ก่อน report

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. ทำ `/update-rules` เพื่ออัปเดท ast-grep rules ตาม findings
3. จัดลำดับการ validate ตาม severity
4. ถ้า validation ไม่ผ่าน → กลับไปแก้ที่ Step 2

### 4. Report

รายงานผลการ review ในแชท

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings: Category, Finding, Severity, Location, Recommendation
3. จัดกลุ่ม findings ตาม category และเรียงตาม severity
4. ทำ `/suggest-next-action` เพื่อแนะนำ action ถัดไป

## Rules

### 1. Severity Classification

- **Critical**: broken architecture, circular dependency ระหว่าง modules
- **High**: violated SOLID principle, tight coupling
- **Medium**: inconsistent pattern, missing abstraction
- **Low**: minor pattern improvement

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number
- ไม่เดา ใช้ tools สำหรับ verification
- ระบุ false positives ที่พบ

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review
- ใช้ `/comment-todo` สำหรับระบุ issues ใน code
- แยก review process จาก fix process

### 4. Scope Boundaries

- ไม่ review code-level structure (symbols, exports, members) ที่ `/analyze-code-structure` ทำ
- ไม่ review filesystem organization ที่ `/review-filesystem` ทำ
- ไม่ review refactor opportunities ลึกที่ `/review-refactor` ทำ
- focus ที่ system-level: patterns, boundaries, coupling, SOLID, scalability
- สำหรับ drill-down ระดับไฟล์ ทำ `/analyze-code-structure`

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
