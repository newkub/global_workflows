---
title: Analyze Platform
description: วิเคราะห์ platform-specific quality: mobile, CLI, SDK, extension, MCP
auto_execution_mode: 3
related_workflows:
  - /analyze-mobile
  - /analyze-cli
  - /analyze-sdk
  - /analyze-extension
  - /analyze-mcp
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ platform-specific quality เพื่อระบุ platform gaps ในแต่ละ target platform

## Scope

Mobile app, CLI tools, SDK/library, browser/IDE extension, MCP server

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม platform metrics ผ่าน scripts (platform detection, config scan, capability analysis)

### 2. Analyze Mobile Platform

1. ถ้า project มี mobile app ให้ทำ `/analyze-mobile` วิเคราะห์ mobile app quality, offline support, touch UX, native features

### 3. Analyze CLI Platform

1. ถ้า project มี CLI ให้ทำ `/analyze-cli` วิเคราะห์ CLI tool quality, help docs, argument parsing, exit codes

### 4. Analyze SDK Platform

1. ถ้า project มี SDK/library ให้ทำ `/analyze-sdk` วิเคราะห์ SDK quality, API surface, versioning, docs, examples

### 5. Analyze Extension Platform

1. ถ้า project มี extension ให้ทำ `/analyze-extension` วิเคราะห์ extension quality, permissions, lifecycle, performance

### 6. Analyze MCP Platform

1. ถ้า project มี MCP server ให้ทำ `/analyze-mcp` วิเคราะห์ MCP server quality, tool schemas, error handling, transport

### 7. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: SDK → mobile → MCP → CLI → extension

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม platform และ severity

### 2. Conditional Execution

- ถ้า project ไม่มี mobile app ให้ข้าม `/analyze-mobile`
- ถ้า project ไม่มี CLI ให้ข้าม `/analyze-cli`
- ถ้า project ไม่มี SDK/library ให้ข้าม `/analyze-sdk`
- ถ้า project ไม่มี extension ให้ข้าม `/analyze-extension`
- ถ้า project ไม่มี MCP server ให้ข้าม `/analyze-mcp`

### 3. Severity Classification

- **Critical**: missing API validation, missing error handling, no type exports
- **High**: missing docs, missing examples, missing lifecycle management
- **Medium**: missing offline support, missing shell completion, missing deprecation
- **Low**: missing permission optimization, missing transport selection, missing examples

### 4. Use Scripts For Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ platform pattern detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

### 5. Non-Redundancy

- แต่ละ sub-workflow มี scope ที่ไม่ทับซ้อนกัน
- ใช้ references แทนการเขียนซ้ำเนื้อหาจาก sub-workflows

## Expected Outcome

- Platform gaps ระบุพร้อม platform และ severity
- พร้อมสำหรับ orchestrator consolidation หรือ `/improve-platform`
