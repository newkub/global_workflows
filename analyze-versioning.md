---
title: Analyze Versioning
description: วิเคราะห์ semver compliance, changelog quality, deprecation policy, release notes
auto_execution_mode: 3
related_workflows:
  - /analyze-deployment
  - /analyze-sdk
  - /improve-versioning
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ versioning strategy และ release management เพื่อระบุ semver และ changelog gaps

## Scope

Semver compliance, changelog quality, deprecation policy, release notes, version bumps, breaking change management

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม versioning metrics ผ่าน scripts (version scan, changelog analysis, deprecation detection)

### 2. Check Semver Compliance

1. ระบุ missing semver versioning
2. ระบุ breaking changes ที่ไม่ได้ bump major version
3. ระบุ new features ที่ไม่ได้ bump minor version
4. ระบุ bug fixes ที่ไม่ได้ bump patch version
5. ระบุ pre-release versioning issues (alpha, beta, rc)
6. ระบุ inconsistent version formats

### 3. Check Changelog Quality

1. ระบุ missing changelog
2. ระบุ missing changelog entries สำหรับ releases
3. ระบุ inconsistent changelog format (Keep a Changelog)
4. ระบุ missing changelog categories (Added, Changed, Fixed, Removed)
5. ระบุ missing breaking change indicators
6. ระบุ missing migration notes ใน changelog

### 4. Check Deprecation Policy

1. ระบุ missing deprecation notices
2. ระบุ missing deprecation timeline
3. ระบุ missing deprecation warnings ใน code
4. ระบุ missing migration guides สำหรับ deprecated features
5. ระบุ missing removal version สำหรับ deprecated APIs
6. ระบุ inconsistent deprecation process

### 5. Check Release Notes

1. ระบุ missing release notes
2. ระบุ missing release description
3. ระบุ missing release assets
4. ระบุ missing release links (changelog, migration guide)
5. ระบุ missing release tags
6. ระบุ inconsistent release note format

### 6. Check Version Bumps

1. ระบุ missing automated version bump
2. ระบุ missing commit message convention (conventional commits)
3. ระบุ missing release tooling (changesets, release-it)
4. ระบุ missing pre-release detection
5. ระบุ missing monorepo versioning strategy
6. ระบุ missing dependency version sync

### 7. Check Breaking Change Management

1. ระบุ missing breaking change documentation
2. ระบุ missing breaking change migration path
3. ระบุ missing breaking change codemods
4. ระบุ missing breaking change announcement
5. ระบุ missing breaking change deprecation period
6. ระบุ missing breaking change impact analysis

### 8. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: semver compliance → breaking change management → deprecation → changelog → release notes → version bumps

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม severity

### 2. Severity Classification

- **Critical**: wrong semver bumps, missing changelog, no deprecation policy
- **High**: missing breaking change docs, missing migration guides, missing release notes
- **Medium**: inconsistent changelog format, missing deprecation warnings, missing tags
- **Low**: missing pre-release handling, missing codemods, missing impact analysis

### 3. Framework Awareness

- ตรวจสอบ Changesets configuration
- ตรวจสอบ conventional commits
- ระบุ release tooling

### 4. Use Scripts For Versioning Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ `/use-scripts` สำหรับ version scanning
- ทำ `/review-release-version` สำหรับ release readiness

## Expected Outcome

- Versioning gaps ระบุพร้อม severity
- Semver และ changelog issues จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-versioning`
