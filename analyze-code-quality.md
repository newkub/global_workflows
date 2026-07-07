---
title: Analyze Code Quality
description: Orchestrator วิเคราะห์ codebase ครบทุกด้าน ผ่าน 9 group workflows
auto_execution_mode: 3
related_workflows:
  - /deep-analyze-with-use-scripts
  - /analyze-code-patterns
  - /analyze-quality-dimensions
  - /analyze-frontend
  - /analyze-backend
  - /analyze-domain-features
  - /analyze-operations
  - /analyze-project-state
  - /analyze-platform
  - /analyze-developer-experience
  - /report-format-table
  - /prioritize
  - /report-health
  - /deep-review
  - /resolve-issue
  - /analyze-bug-prone
  - /suggest-next-action
---

## Goal

วิเคราะห์ codebase ครบทุกด้านในครั้งเดียว ผ่าน 9 group workflows ที่จัดการ 87 มิติ

## Scope

ครอบคลุม code patterns, quality dimensions, frontend, backend, domain features, operations, project state, platform, และ developer experience

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม metrics ทั้งหมดผ่าน scripts automation

### 2. Run Group Workflows

1. ทำ `/analyze-code-patterns` วิเคราะห์ code patterns และ foundation quality (14 มิติ)
2. ทำ `/analyze-quality-dimensions` วิเคราะห์ quality dimensions ทั้งหมด (16 มิติ)
3. ถ้า project มี frontend ให้ทำ `/analyze-frontend` วิเคราะห์ frontend quality และ user experience (10 มิติ)
4. ถ้า project มี backend ให้ทำ `/analyze-backend` วิเคราะห์ backend และ data layer quality (10 มิติ)
5. ทำ `/analyze-domain-features` วิเคราะห์ domain-specific features แบบ conditional (11 มิติ)
6. ทำ `/analyze-operations` วิเคราะห์ operations และ production readiness แบบ conditional (10 มิติ)
7. ทำ `/analyze-project-state` วิเคราะห์ project state และ completeness (5 มิติ)
8. ทำ `/analyze-platform` วิเคราะห์ platform-specific quality แบบ conditional (5 มิติ)
9. ทำ `/analyze-developer-experience` วิเคราะห์ developer experience (6 มิติ)

### 3. Consolidate Report

1. รวมผลลัพธ์ทั้งหมดจาก step 2
2. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
3. ทำ `/prioritize` เพื่อจัดลำดับ findings ตาม impact และ effort
4. จัดลำดับ group priority: quality dimensions → code patterns → backend → domain features → operations → frontend → developer experience → platform → project state

## Rules

### 1. Orchestrator Pattern

- ใช้ group workflows และรวมผล ไม่ duplicate analysis steps
- แต่ละ group workflow ใช้ได้อิสระโดยไม่ต้องเรียก orchestrator
- แต่ละ sub-workflow ใช้ได้อิสระโดยไม่ต้องเรียก group workflow
- Conditional execution อยู่ในแต่ละ group workflow ไม่ซ้ำใน orchestrator

### 2. Non-Redundancy

- ใช้ references แทนการเขียนซ้ำเนื้อหาจาก group workflows
- แต่ละ group workflow มี scope ที่ไม่ทับซ้อนกัน
- แต่ละ sub-workflow มี scope ที่ไม่ทับซ้อนกัน

### 3. Severity Priority

- Security และ auth findings มี priority สูงสุด
- Data integrity และ database issues มี priority รองลงมา
- Performance และ UX/UI มี priority ปานกลาง
- Documentation และ content quality มี priority ต่ำสุด

### 4. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม severity

### 5. Use Scripts For Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ pattern detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- รายงานวิเคราะห์ codebase ครบทุกด้าน 87 มิติ ผ่าน 9 group workflows
- จัดลำดับการแก้ไขตาม impact
- พร้อมสำหรับ `/report-health`, `/deep-review`, `/resolve-issue` หรือ `/suggest-next-action`
