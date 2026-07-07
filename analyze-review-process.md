---
title: Analyze Review Process
description: วิเคราะห์ review process quality, PR templates, review checklist, review coverage
auto_execution_mode: 3
related_workflows:
  - /analyze-quality-dimensions
  - /analyze-test
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ review process เพื่อระบุ review quality gaps

## Scope

Review process quality, PR templates, review checklist, review coverage, review automation

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม review metrics ผ่าน scripts (PR template scan, CI check detection, review config analysis)

### 2. Check PR Templates

1. ระบุ missing PR template (`.github/pull_request_template.md`)
2. ระบุ incomplete PR template (missing testing checklist)
3. ระบุ missing PR labels configuration
4. ระบุ missing PR reviewer assignment rules
5. ระบุ missing PR size limits

### 3. Check Review Checklist

1. ระบุ missing review checklist สำหรับ different change types
2. ระบุ missing security review checklist
3. ระบุ missing performance review checklist
4. ระบุ missing breaking change checklist
5. ระบุ missing database migration review checklist

### 4. Check Review Coverage

1. ระบุ missing required reviewers
2. ระบุ missing CODEOWNERS file
3. ระบุ missing branch protection rules
4. ระบุ missing review requirement สำหรับ critical paths
5. ระบุ missing review bypass prevention

### 5. Check Review Automation

1. ระบุ missing automated review tools (Copilot review, ast-grep scan)
2. ระบุ missing CI checks ใน PR pipeline
3. ระบุ missing pre-merge validation
4. ระบุ missing review stale management
5. ระบุ missing review metrics tracking

### 6. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: review coverage → review checklist → PR templates → review automation

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม severity

### 2. Severity Classification

- **Critical**: no PR template, no required reviewers, no branch protection
- **High**: missing CODEOWNERS, missing review checklist, missing CI checks
- **Medium**: incomplete PR template, missing review automation, missing labels
- **Low**: missing review metrics, missing stale management, missing size limits

### 3. Use Scripts For Review Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ `/use-scripts` สำหรับ GitHub config scanning

## Expected Outcome

- Code review gaps ระบุพร้อม severity
- พร้อมสำหรับ `/improve-code-quality` หรือ `/follow-github-actions`
