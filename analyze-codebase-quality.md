---
title: Analyze Codebase Quality
description: Orchestrator วิเคราะห์ codebase ครบทุกด้าน ผ่าน analyze-code-* sub-workflows
auto_execution_mode: 3
related_workflows:
  - /analyze-code-structure
  - /analyze-code-foundation
  - /analyze-code-runtime
  - /analyze-code-ux
  - /analyze-code-localization
  - /analyze-features
  - /analyze-errors
  - /analyze-missing-implementation
  - /report-format-table
---

## Goal

วิเคราะห์ codebase ครบทุกด้านในครั้งเดียว ผ่าน analyze-code-* sub-workflows

## Scope

ครอบคลุม code structure, code quality, runtime patterns, accessibility, i18n, features, errors, และ missing implementation

## Execute

### 1. Analyze Code Structure

1. ทำ `/analyze-code-structure` เพื่อวิเคราะห์โครงสร้างไฟล์และ folders

### 2. Analyze Code Foundation

ทำ `/analyze-code-foundation` วิเคราะห์ structure และ foundation patterns 19 หมวด: SRP/SoC, Type Safety, Hard Code, Anti-Patterns, Dead Code, Side Effects, Circular Dependencies, Duplication, Naming, Consistency, Complexity, Dependency Structure, Reusability, Config, State Management, Test Quality, Documentation, API Design

### 3. Analyze Code Runtime

ทำ `/analyze-code-runtime` วิเคราะห์ runtime patterns 8 หมวด: Error Handling, Async Patterns, Boundary Validation, Concurrency, Resource Management, Logging Quality, Performance, Security

### 4. Analyze Accessibility

ถ้า project มี frontend ให้ทำ `/analyze-code-ux` วิเคราะห์ WCAG, ARIA, keyboard navigation, color contrast, interaction patterns

### 5. Analyze I18n

ถ้า project มี frontend ให้ทำ `/analyze-code-localization` วิเคราะห์ i18n, l10n, RTL, locale, pluralization

### 6. Analyze Features

ทำ `/analyze-features` วิเคราะห์และจัดระเบียบ features ใน project

### 7. Analyze Errors

ถ้ามี errors จากการ run commands ให้ทำ `/analyze-errors` เพื่อหา root cause

### 8. Analyze Missing Implementation

ทำ `/analyze-missing-implementation` วิเคราะห์สิ่งที่ขาดหายไปใน codebase

### 9. Consolidate Report

1. รวมผลลัพธ์ทั้งหมดจาก step 1-8
2. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
3. จัดลำดับตาม impact: structure → foundation → runtime → UX → localization → missing implementation → features → errors

## Rules

### 1. Orchestrator Pattern

- ใช้ sub-workflows และรวมผล ไม่ duplicate analysis steps
- แต่ละ sub-workflow ใช้ได้อิสระโดยไม่ต้องเรียก orchestrator
- ปรับ scope ตาม project characteristics

### 2. Conditional Execution

- ถ้า project ไม่มี frontend ให้ข้าม `/analyze-code-ux` และ `/analyze-code-localization`
- ถ้า project ไม่มี errors ให้ข้าม `/analyze-errors`
- ถ้า project ไม่มี features ที่ซับซ้อน ให้ข้าม `/analyze-features`

### 3. Non-Redundancy

- ไม่ซ้ำซ้อนระหว่าง Execute และ Rules
- ใช้ references แทนการเขียนซ้ำเนื้อหาจาก sub-workflows

## Expected Outcome

- รายงานวิเคราะห์ codebase ครบทุกด้าน
- จัดลำดับการแก้ไขตาม impact
- พร้อมสำหรับ `/report-health` หรือ `/review-codebase`
