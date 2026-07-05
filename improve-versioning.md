---
title: Improve Versioning
description: ปรับปรุง semver, changelog, deprecation policy, release notes
auto_execution_mode: 3
related_workflows:
  - improve-documentation
  - improve-devops
  - improve-compliance
  - improve-dx
---

## Goal

ปรับปรุง versioning strategy ทั้ง semantic versioning, changelog management, deprecation policy, และ release process

## Scope

ใช้สำหรับ project ที่มี releases (npm, crates.io, Docker, VS Code, etc.) และต้องการ versioning ที่เป็นระบบ

## Execute

### 1. Semantic Versioning

ปรับปรุง semver compliance

1. ตรวจสอบ version format เป็น semver (MAJOR.MINOR.PATCH)
2. ตรวจสอบ breaking changes เพิ่ม MAJOR
3. ตรวจสอบ new features เพิ่ม MINOR
4. ตรวจสอบ bug fixes เพิ่ม PATCH
5. ตรวจสอบ pre-release และ build metadata format
6. ตรวจสอบ version ใน `package.json`, `Cargo.toml`, etc.

### 2. Changelog Management

ปรับปรุง changelog process

1. ตรวจสอบ changelog ใช้ Keep a Changelog format
2. ตรวจสอบ changeset หรือ conventional commits สำหรับ auto-generation
3. ตรวจสอบ changelog มี Added, Changed, Deprecated, Removed, Fixed, Security sections
4. ตรวจสอบทุก release มี entry ใน changelog
5. ทำ `/improve-documentation` สำหรับ changelog quality

### 3. Deprecation Policy

ปรับปรุง deprecation handling

1. ตรวจสอบ deprecated APIs มี `@deprecated` JSDoc
2. ตรวจสอบ deprecation notices ใน changelog
3. ตั้งค่า deprecation timeline (minor สำหรับ notice, next major สำหรับ removal)
4. ตรวจสอบ migration path documented
5. ตรวจสอบ runtime warnings สำหรับ deprecated APIs

### 4. Release Process

ปรับปรุง release workflow

1. ทำ `/improve-devops` สำหรับ release pipeline
2. ตรวจสอบ release tags และ GitHub Releases
3. ตั้งค่า automated release (release-it, auto, changesets)
4. ตรวจสอบ release notes สร้างอัตโนมัติจาก commits
5. ตรวจสอบ rollback strategy สำหรับ bad releases

### 5. Version Compatibility

ปรับปรุง compatibility management

1. ตรวจสอบ peer dependencies และ version ranges
2. ตรวจสอบ breaking change detection ใน CI
3. ตั้งค่า compatibility matrix สำหรับ testing
4. ตรวจสอบ migration guides สำหรับ major versions
5. ตรวจสอบ supported version policy (LTS, current, EOL)

### 6. Monorepo Versioning

ปรับปรุง versioning ใน monorepo

1. ตรวจสอบ versioning strategy (fixed, independent, locked)
2. ตั้งค่า changesets สำหรับ coordinated releases
3. ตรวจสอบ internal dependency version bumps
4. ตรวจสอบ publish order สำหรับ dependent packages
5. ทำ `/improve-dx` สำหรับ release DX

## Rules

### 1. Semver Strict

- Breaking change = MAJOR bump เสมอ
- New feature (non-breaking) = MINOR bump
- Bug fix = PATCH bump
- ไม่ skip versions โดยไม่จำเป็น
- Pre-release ใช้ suffix (-alpha, -beta, -rc)

### 2. Changelog Required

- ทุก release มี changelog entry
- ใช้ Keep a Changelog format
- Auto-generate จาก conventional commits ถ้าเป็นไปได้
- Breaking changes มี clear migration guide

### 3. Deprecation Process

- Deprecation notice อย่างน้อย 1 minor version ก่อน removal
- `@deprecated` JSDoc สำหรับทุก deprecated API
- Runtime warning สำหรับ deprecated APIs
- Migration path documented

### 4. Release Safety

- Release จาก main branch เท่านั้น
- Tags สอดคล้องกับ published version
- Rollback strategy มีไว้เสมอ
- Release notes สร้างอัตโนมัติ

## Expected Outcome

- Semantic versioning ใช้ถูกต้องทุก release
- Changelog ครบถ้วน พร้อม auto-generation
- Deprecation policy ชัดเจน พร้อม migration path
- Release process อัตโนมัติ พร้อม rollback
- Compatibility matrix ครอบคลุม supported versions
- Monorepo versioning ประสานกัน
