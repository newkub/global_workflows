---
title: Analyze Standards
description: วิเคราะห์ coding standards compliance, style guide, convention enforcement, Biome rules
auto_execution_mode: 3
related_workflows:
  - /analyze-code-patterns
  - /analyze-naming
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ coding standards compliance เพื่อระบุ convention violations

## Scope

Coding standards, style guide compliance, convention enforcement, linter configuration, formatter consistency

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม standards metrics ผ่าน scripts (lint scan, convention detection, config analysis)

### 2. Check Linter Configuration

1. ระบุ missing linter rules (Biome)
2. ระบุ disabled rules ที่ไม่มี justification
3. ระบุ inconsistent linter config ข้าม workspaces
4. ระบุ missing lint:fix script
5. ระบุ missing pre-commit lint hooks

### 3. Check Formatter Configuration

1. ระบุ inconsistent formatter config ข้าม workspaces
2. ระบุ missing format script
3. ระบุ missing format-on-save configuration
4. ระบุ inconsistent indentation (tabs vs spaces)
5. ระบุ inconsistent line endings (LF vs CRLF)

### 4. Check Convention Enforcement

1. ระบุ missing file naming conventions enforcement
2. ระบุ missing export naming conventions
3. ระบุ missing import order enforcement
4. ระบุ missing component naming conventions
5. ระบุ missing function naming conventions

### 5. Check Style Guide Compliance

1. ระบุ inconsistent brace style
2. ระบุ inconsistent semicolon usage
3. ระบุ inconsistent quote style
4. ระบุ inconsistent trailing commas
5. ระบุ inconsistent arrow function usage
6. ระบุ inconsistent type annotation style

### 6. Check Code Organization Standards

1. ระบุ inconsistent file structure ข้าม modules
2. ระบุ missing module template
3. ระบุ inconsistent export organization
4. ระบุ missing README per module
5. ระบุ missing AGENTS.md per workspace

### 7. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: linter configuration → convention enforcement → style guide → formatter → code organization

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม file:line และ severity

### 2. Severity Classification

- **Critical**: disabled security lint rules, no linter, no formatter
- **High**: inconsistent config ข้าม workspaces, missing convention enforcement
- **Medium**: inconsistent style, missing format-on-save, missing module templates
- **Low**: inconsistent type annotation style, missing README per module

### 3. Use Scripts For Standards Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ `bunx biome lint` สำหรับ lint rule detection
- ใช้ ast-grep สำหรับ convention pattern detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- Standards gaps ระบุพร้อม file:line และ severity
- พร้อมสำหรับ `/run-lint` หรือ `/improve-consistency`
