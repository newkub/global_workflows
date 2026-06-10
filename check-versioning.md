---
title: Check Versioning
description: ตรวจสอบ version management และ changelog
auto_execution_mode: 3
related_workflows:
  - /release-npm
  - /release-crates
---

## Goal

ตรวจสอบ version management และ changelog maintenance

## Execute

### 1. Check Version Management

1. ตรวจสอบ semantic versioning ถูกใช้
2. ตรวจสอบ version numbers ถูกต้อง
3. ตรวจสอบ version consistency
4. ตรวจสอบ version increments

### 2. Check Changelog

1. ตรวจสอบ changelog มีอยู่
2. ตรวจสอบ changelog format ถูกต้อง
3. ตรวจสอบ changelog เป็นปัจจุบัน
4. ตรวจสอบ changelog completeness

### 3. Check Release Process

1. ตรวจสอบ release process มีอยู่
2. ตรวจสอบ release automation
3. ตรวจสอบ release notes
4. ตรวจสอบ release tags

### 4. Check Dependency Versioning

1. ตรวจสอบ dependency versions
2. ตรวจสอบ version ranges
3. ตรวจสอบ lock files
4. ตรวจสอบ version constraints

### 5. Check API Versioning

1. ตรวจสอบ API versioning strategy
2. ตรวจสอบ API version compatibility
3. ตรวจสอบ API deprecation policy
4. ตรวจสอบ API migration guide

### 6. Run Version Check

1. ตรวจสอบ version consistency ทั่ว project
2. ตรวจสอบ changelog accuracy
3. ตรวจสอบ release readiness
4. บันทึก version issues

## Rules

### 1. Semantic Versioning

- MAJOR: incompatible changes
- MINOR: backwards-compatible features
- PATCH: backwards-compatible bug fixes
- PRE-RELEASE: pre-release versions

### 2. Changelog Format

- ใช้ Keep a Changelog format
- แบ่งเป็น Added, Changed, Deprecated, Removed, Fixed, Security
- ใช้ version numbers ชัดเจน
- ใช้ dates สำหรับ releases

### 3. Release Process

- ใช้ automated releases
- ใช้ git tags
- ใช้ release notes
- ใช้ version bumping

### 4. Priority Levels

- Critical: versioning ไม่สอดคล้อง
- High: changelog ขาดหรือล้า
- Medium: release process ไม่มี
- Low: เป็น versioning optimizations

## Expected Outcome

- Version management ถูกต้อง
- Changelog ครบถ้วนและเป็นปัจจุบัน
- Release process ทำงานได้
- Dependency versioning ถูกต้อง
- API versioning ชัดเจน

