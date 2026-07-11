---
title: Analyze Code Patterns
description: วิเคราะห์ code patterns: structure, architecture, foundation, runtime, dead code, type safety, naming, complexity, coupling, cohesion, duplication, imports, patterns, standards
auto_execution_mode: 3
related_workflows:
  - /analyze-structure
  - /analyze-architecture
  - /analyze-foundation
  - /analyze-runtime
  - /analyze-dead-code
  - /analyze-type-safety
  - /analyze-naming
  - /analyze-complexity
  - /analyze-coupling
  - /analyze-cohesion
  - /analyze-srp
  - /analyze-duplication
  - /analyze-imports
  - /analyze-patterns
  - /analyze-standards
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ code patterns และ foundation quality ของ codebase

## Scope

Structure, architecture, foundation, runtime, dead code, type safety, naming, complexity, coupling, cohesion, duplication, imports, patterns, standards

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม code pattern metrics ผ่าน scripts (complexity scan, coupling graph, duplication detection)

### 2. Analyze Structure And Architecture

1. ทำ `/analyze-structure` เพื่อวิเคราะห์โครงสร้างไฟล์และ folders
2. ทำ `/analyze-architecture` วิเคราะห์ architecture patterns, layer boundaries, module coupling

### 3. Analyze Foundation And Runtime

1. ทำ `/analyze-foundation` วิเคราะห์ foundation patterns 19 หมวด
2. ทำ `/analyze-runtime` วิเคราะห์ runtime patterns 8 หมวด

### 4. Analyze Code Quality Patterns

1. ทำ `/analyze-dead-code` วิเคราะห์ unused exports, unreachable code, orphaned files
2. ทำ `/analyze-type-safety` วิเคราะห์ TS strictness, type coverage, `any` usage, type inference
3. ทำ `/analyze-naming` วิเคราะห์ naming conventions, consistency, clarity, API naming patterns

### 5. Analyze Code Metrics

1. ทำ `/analyze-complexity` วิเคราะห์ cyclomatic complexity, cognitive complexity, function/file length, nesting depth
2. ทำ `/analyze-coupling` วิเคราะห์ module coupling, circular dependencies, dependency direction, import depth
3. ทำ `/analyze-cohesion` วิเคราะห์ module cohesion, SRP adherence, feature grouping, responsibility analysis
4. ทำ `/analyze-srp` วิเคราะห์ SRP violations, mixed concerns, God modules แบบเจาะลึก

### 6. Analyze Code Duplication And Patterns

1. ทำ `/analyze-duplication` วิเคราะห์ DRY violations, copy-paste detection, code clones, duplicate logic
2. ทำ `/analyze-imports` วิเคราะห์ import organization, barrel exports, import order, unused imports, circular imports
3. ทำ `/analyze-patterns` วิเคราะห์ design pattern usage, anti-patterns, code smells, refactoring opportunities
4. ทำ `/analyze-standards` วิเคราะห์ coding standards compliance, style guide, convention enforcement, Biome rules

### 7. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: architecture → coupling → cohesion → SRP → complexity → duplication → patterns → structure → foundation → type safety → imports → standards → naming → dead code

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม file:line และ severity

### 2. Severity Classification

- **Critical**: architecture violations, disabled strict mode, `any` ใน API boundaries
- **High**: dead code, `@ts-ignore`, unsafe assertions, inconsistent naming
- **Medium**: missing type annotations, ambiguous names, inconsistent casing
- **Low**: missing const assertions, missing exhaustive checks

### 3. Use Scripts For Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ pattern detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

### 4. Non-Redundancy

- แต่ละ sub-workflow มี scope ที่ไม่ทับซ้อนกัน
- ใช้ references แทนการเขียนซ้ำเนื้อหาจาก sub-workflows

## Expected Outcome

- Code pattern gaps ระบุพร้อม file:line และ severity
- พร้อมสำหรับ orchestrator consolidation หรือ `/deep-review`
