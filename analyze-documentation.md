---
title: Analyze Documentation
description: วิเคราะห์ README, API docs, JSDoc, changelog, examples, outdated docs, doc coverage
auto_execution_mode: 3
related_workflows:
  - /deep-analyze-with-use-scripts
  - /improve-documentation
  - /improve-dx
  - /update-readme
  - /update-docs
  - /write-examples
  - /use-scripts
  - /report-format-table
---

## Goal

วิเคราะห์ documentation quality และ coverage เพื่อระบุ gaps ที่ส่งผลต่อ developer experience และ onboarding

## Scope

README, API docs, JSDoc/TSDoc, changelog, examples, inline comments, architecture docs, contributing guides, outdated docs, doc coverage

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม documentation metrics ผ่าน scripts (JSDoc coverage, README analysis, example validation)

### 2. Analyze README Quality

1. ระบุ missing README sections (description, install, usage, config, contributing, license)
2. ระบุ outdated information ใน README
3. ระบุ missing badges (CI status, coverage, version)
4. ระบุ missing quick start guide
5. ระบุ missing prerequisites และ requirements

### 3. Analyze API Documentation

1. ระบุ public APIs ที่ขาด documentation
2. ระบุ missing API reference (endpoints, parameters, responses, examples)
3. ระบุ missing OpenAPI/Swagger specification
4. ระบุ API docs ที่ไม่ตรงกับ actual implementation
5. ระบุ missing error code documentation

### 4. Analyze JSDoc And TSDoc

1. ระบุ public functions/classes ที่ขาด JSDoc/TSDoc
2. ระบุ JSDoc ที่ไม่มี `@param`, `@returns`, `@throws`
3. ระบุ JSDoc ที่ outdated หรือไม่ตรงกับ code
4. ระบุ missing `@example` สำหรับ complex functions
5. ระบุ missing `@deprecated` annotations

### 5. Analyze Changelog And Versioning

1. ระบุ missing CHANGELOG.md
2. ระบุ changelog ที่ไม่ follow Keep a Changelog format
3. ระบุ missing version tags ใน changelog
4. ระบุ missing breaking change documentation
5. ระบุ missing migration guides สำหรับ major versions

### 6. Analyze Examples And Tutorials

1. ระบุ missing examples สำหรับ public APIs
2. ระบุ examples ที่ outdated หรือไม่ทำงาน
3. ระบุ missing getting started tutorial
4. ระบุ missing use case examples
5. ระบุ missing integration examples

### 7. Analyze Architecture And Contributing Docs

1. ระบุ missing architecture documentation
2. ระบุ missing contributing guidelines (CONTRIBUTING.md)
3. ระบุ missing code style guide
4. ระบุ missing development setup guide
5. ระบุ missing decision records (ADR)

### 8. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: README → API docs → JSDoc → examples → changelog → architecture → contributing

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม location และ severity

### 2. Severity Classification

- **Critical**: missing README, missing API docs สำหรับ public APIs, outdated docs ที่ทำให้ใช้ผิด
- **High**: missing JSDoc สำหรับ public functions, missing changelog, missing examples
- **Medium**: missing contributing guide, missing architecture docs, missing badges
- **Low**: missing ADR, missing `@example`, missing badges

### 3. Use Scripts For Doc Coverage

- ใช้ `/deep-analyze-with-use-scripts` เสมอสำหรับ documentation analysis
- ใช้ `/use-scripts` เมื่อต้องวิเคราะห์ไฟล์มากกว่า 10 ไฟล์

### 4. Doc-Code Consistency

- ตรวจสอบว่า docs ตรงกับ actual implementation
- ระบุ docs ที่ outdated หรือ misleading
- ตรวจสอบ example code ที่ไม่ทำงาน

## Expected Outcome

- Documentation gaps ระบุพร้อม location และ severity
- Documentation quality และ coverage recommendations
- พร้อมสำหรับ `/improve-documentation` หรือ `/improve-dx`
