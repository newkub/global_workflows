---
title: Analyze DX Config
description: วิเคราะห์ dev tooling config, editor setup, extensions, snippets
auto_execution_mode: 3
related_workflows:
  - /analyze-developer-experience
  - /analyze-config
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ developer tooling configuration เพื่อระบุ setup gaps

## Scope

Dev tooling config, editor setup, extensions, snippets, workspace settings, dev dependencies

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม DX config metrics ผ่าน scripts (config scan, extension detection, workspace analysis)

### 2. Check Editor Setup

1. ระบุ missing `.vscode/settings.json`
2. ระบุ missing `.vscode/extensions.json`
3. ระบุ missing `.vscode/launch.json`
4. ระบุ missing `.vscode/tasks.json`
5. ระบุ missing editor format-on-save

### 3. Check Dev Dependencies

1. ระบุ missing dev dependencies สำหรับ DX (Biome, Knip, ast-grep)
2. ระบุ inconsistent dev dependency versions ข้าม workspaces
3. ระบุ missing dev dependency documentation
4. ระบุ unused dev dependencies
5. ระบุ missing dev dependency grouping

### 4. Check Workspace Settings

1. ระบุ missing workspace settings consistency
2. ระบุ missing recommended extensions
3. ระบุ missing editor config (`.editorconfig`)
4. ระบุ missing prettier/biome ignore patterns
5. ระบุ missing file association settings

### 5. Check Snippets And Templates

1. ระบุ missing code snippets สำหรับ common patterns
2. ระบุ missing file templates
3. ระบุ missing component templates
4. ระบุ missing function templates
5. ระบุ missing test templates

### 6. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: editor setup → dev dependencies → workspace settings → snippets

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม severity

### 2. Severity Classification

- **Critical**: no editor config, no linter, no formatter
- **High**: missing launch.json, missing format-on-save, missing dev deps
- **Medium**: missing snippets, missing templates, inconsistent workspace settings
- **Low**: missing file associations, missing extension recommendations

### 3. Use Scripts For DX Config Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ `/use-scripts` สำหรับ config scanning

## Expected Outcome

- DX config gaps ระบุพร้อม severity
- พร้อมสำหรับ `/improve-dx` หรือ `/improve-config`
