---
title: Analyze SDK
description: วิเคราะห์ SDK/library quality, API surface, versioning, docs, examples
auto_execution_mode: 3
related_workflows:
  - /analyze-api
  - /analyze-versioning
  - /improve-sdk
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ SDK และ library quality เพื่อระบุ API surface gaps และ developer experience issues

## Scope

API surface, versioning, documentation, examples, type exports, tree shaking, bundle size, backward compatibility, deprecation policy

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม SDK metrics ผ่าน scripts (export scan, type coverage, example detection)

### 2. Check API Surface

1. ระบุ missing public API exports
2. ระบุ inconsistent API naming conventions
3. ระบุ missing type exports สำหรับ public API
4. ระบุ leaking internal implementation ใน public API
5. ระบุ missing barrel exports
6. ระบุ over-exposed API (too many public exports)

### 3. Check Versioning

1. ระบุ missing semver compliance
2. ระบุ breaking changes ที่ไม่ได้ bump major version
3. ระบุ missing changelog
4. ระบุ missing migration guides สำหรับ breaking changes
5. ระบุ missing deprecation notices
6. ระบุ missing version compatibility matrix

### 4. Check Documentation

1. ระบุ missing API reference documentation
2. ระบุ missing getting started guide
3. ระบุ missing usage examples
4. ระบุ missing JSDoc สำหรับ public API
5. ระบุ missing type documentation
6. ระบุ missing integration guides

### 5. Check Examples

1. ระบุ missing code examples สำหรับ each API
2. ระบุ missing runnable examples
3. ระบุ missing edge case examples
4. ระบุ missing integration examples
5. ระบุ missing example testing
6. ระบุ missing example versioning

### 6. Check Bundle And Tree Shaking

1. ระบุ missing ESM exports
2. ระบุ missing `sideEffects: false` ใน package.json
3. ระบุ missing tree-shakeable exports
4. ระบุ bundle size ที่ใหญ่เกินไป
5. ระบุ missing dual package (CJS/ESM)
6. ระบุ missing export maps

### 7. Check Backward Compatibility

1. ระบุ breaking changes โดยไม่มี migration path
2. ระบุ missing compatibility layer
3. ระบุ removed APIs ที่ไม่มี deprecation period
4. ระบุ changed behavior ที่ไม่ documented
5. ระบุ missing peer dependency management

### 8. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: API surface → backward compatibility → versioning → documentation → examples → bundle

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม export path และ severity

### 2. Severity Classification

- **Critical**: breaking changes without migration, missing type exports, leaking internals
- **High**: missing docs, missing examples, missing changelog, no tree shaking
- **Medium**: missing deprecation notices, missing JSDoc, inconsistent naming
- **Low**: missing dual package, missing export maps, missing compatibility matrix

### 3. Framework Awareness

- ตรวจสอบ package.json exports field
- ตรวจสอบ TypeScript declaration files
- ระบุ bundler configuration สำหรับ library

### 4. Use Scripts For SDK Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ export pattern detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- SDK gaps ระบุพร้อม export path และ severity
- API surface และ compatibility issues จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-sdk`
