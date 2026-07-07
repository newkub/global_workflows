---
title: Analyze Content Quality
description: วิเคราะห์ content accuracy, completeness, clarity, consistency ใน docs/content
auto_execution_mode: 3
related_workflows:
  - /analyze-documentation
  - /improve-content
  - /follow-content-quality
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ quality ของ content ใน docs และ codebase เพื่อระบุ accuracy และ completeness gaps

## Scope

Content accuracy, completeness, clarity, consistency, tone, formatting, outdated content, broken links, content coverage

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม content metrics ผ่าน scripts (link scan, content analysis, formatting check)

### 2. Check Content Accuracy

1. ระบุ outdated content ที่ไม่ตรงกับ current codebase
2. ระบุ incorrect code examples ที่ไม่ทำงาน
3. ระบุ misleading information
4. ระบุ missing version-specific information
5. ระบุ incorrect API references

### 3. Check Content Completeness

1. ระบุ missing documentation สำหรับ features
2. ระบุ missing examples สำหรับ APIs
3. ระบุ missing edge case documentation
4. ระบุ missing troubleshooting guides
5. ระบุ missing getting started guides
6. ระบุ missing migration guides

### 4. Check Content Clarity

1. ระบุ content ที่ ambiguous หรือ confusing
2. ระบุ missing diagrams หรือ visual aids
3. ระบุ jargon ที่ไม่ได้อธิบาย
4. ระบุ missing prerequisites
5. ระบุ missing step-by-step instructions

### 5. Check Content Consistency

1. ระบุ inconsistent terminology
2. ระบุ inconsistent formatting
3. ระบุ inconsistent tone และ style
4. ระบุ inconsistent code style ใน examples
5. ระบุ inconsistent heading hierarchy

### 6. Check Broken Links And References

1. ระบุ broken internal links
2. ระบุ broken external links
3. ระบุ missing cross-references
4. ระบุ outdated references ไปยัง moved files
5. ระบุ missing anchor links

### 7. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: accuracy → completeness → broken links → clarity → consistency

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม content path และ severity

### 2. Severity Classification

- **Critical**: incorrect code examples, broken getting started, outdated critical docs
- **High**: missing feature docs, broken links, misleading information
- **Medium**: missing examples, inconsistent terminology, missing diagrams
- **Low**: inconsistent formatting, missing edge cases, jargon

### 3. Framework Awareness

- ตรวจสอบ VitePress content
- ตรวจสอบ README และ AGENTS.md
- ตรวจสอบ JSDoc และ inline comments

### 4. Use Scripts For Content Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ `/use-scripts` สำหรับ link scanning และ content analysis
- ทำตาม `/follow-content-quality` สำหรับ quality standards

## Expected Outcome

- Content quality gaps ระบุพร้อม content path และ severity
- Accuracy และ completeness issues จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-content`
