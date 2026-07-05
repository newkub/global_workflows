---
title: Validate Dependencies
description: ตรวจสอบความถูกต้อง ความปลอดภัย และความเหมาะสมของ dependencies ทั้งหมดใน project
auto_execution_mode: 3
related_workflows:
  - /check-unused-deps
  - /check-vulnerability
  - /check-versioning
  - /ensure-compatibility-with
  - /list-dependencies
  - /run-audit
---

## Goal

ตรวจสอบ dependencies ทั้งหมดใน project ว่าถูกต้อง ปลอดภัย ใช้งานจริง และเหมาะสมกับ project

## Scope

ใช้สำหรับทุก workspace ที่มี package manifest เช่น `package.json`, `Cargo.toml`, `pyproject.toml`, `go.mod`

## Execute

### 1. Read Package Manifests

อ่าน package manifests ทั้งหมดใน project

1. อ่าน `package.json`, `Cargo.toml`, `pyproject.toml`, หรือ `go.mod` ตาม project type
2. ถ้าเป็น monorepo อ่านทุก workspace และ root manifest
3. รวบรวม dependencies ทุกประเภท (dependencies, devDependencies, peerDependencies, optionalDependencies)
4. รวบรวม version ranges และ constraints ของแต่ละ dependency

### 2. Validate Version Compatibility

ตรวจสอบความเข้ากันของ versions

1. ตรวจสอบ semver ranges ถูกต้องตามมาตรฐาน
2. ตรวจสอบ version conflicts ระหว่าง workspaces ใน monorepo
3. ตรวจสอบ peer dependency requirements ตรงกับ installed versions
4. ตรวจสอบ engine constraints (Node, Bun, Rust edition) เข้ากับ runtime ปัจจุบัน
5. ทำ `/ensure-compatibility-with` สำหรับ compatibility checks โดยละเอียด
6. ทำ `/check-versioning` สำหรับ dependency versioning โดยละเอียด

### 3. Validate Security

ตรวจสอบความปลอดภัยของ dependencies

1. ทำ `/check-vulnerability` เพื่อสแกน security vulnerabilities
2. ทำ `/run-audit` เพื่อ audit dependencies และ licenses
3. ตรวจสอบ license compatibility กับ project license
4. ระบุ dependencies ที่มี known advisories

### 4. Validate Usage

ตรวจสอบการใช้งาน dependencies

1. ทำ `/check-unused-deps` เพื่อหา dependencies ที่ไม่ได้ใช้
2. ตรวจสอบ dependencies ที่ขาด (ใช้ใน code แต่ไม่อยู่ใน manifest)
3. ตรวจสอบ dependencies ที่ซ้ำซ้อนหรือทำงานคล้ายกัน
4. ตรวจสอบ dependencies ที่ประกาศผิดประเภท (เช่น dev dep อยู่ใน dependencies)

### 5. Validate Lock File Integrity

ตรวจสอบ lock file สมบูรณ์และ sync กับ manifest

1. ตรวจสอบ lock file มีอยู่ (`bun.lock`, `package-lock.json`, `Cargo.lock`, `go.sum`)
2. ตรวจสอบ lock file sync กับ manifest versions
3. ตรวจสอบไม่มี duplicate entries ใน lock file
4. ตรวจสอบ lock file ไม่มี conflicts หรือ corruption

### 6. Validate Workspace Dependencies

ตรวจสอบ workspace dependencies ใน monorepo

1. ตรวจสอบ `workspace:*` references ชี้ไปยัง package ที่มีอยู่จริง
2. ตรวจสอบไม่มี circular dependencies ระหว่าง workspaces
3. ตรวจสอบ workspace dependency versions สอดคล้องกับ published versions
4. ทำ `/check-monorepo` สำหรับ monorepo-specific checks

### 7. Validate Appropriateness

ตรวจสอบความเหมาะสมของ dependencies

1. ทำ `/list-dependencies` เพื่อดูภาพรวมและ categorization
2. ตรวจสอบ dependencies ตรงกับ project requirements
3. ตรวจสอบไม่มี dependencies ที่ deprecated หรือ unmaintained
4. ตรวจสอบ bundle size impact ของ dependencies
5. ทำ `/use-lib-better` เพื่อเปรียบเทียบ alternatives ที่ดีกว่า

### 8. Generate Report

สร้างรายงานผลการตรวจสอบ

1. รวบรวม findings ทั้งหมดจากทุกขั้นตอน
2. จัดลำดับตาม severity (Critical, High, Medium, Low)
3. จัดรูปแบบตาม `/report-format-table`
4. แนะนำการดำเนินการแก้ไข

## Rules

### 1. Validation Coverage

ตรวจสอบครอบคลุมทุกมิติ

- ตรวจสอบ version compatibility และ constraints
- ตรวจสอบ security vulnerabilities และ licenses
- ตรวจสอบ usage และ unused dependencies
- ตรวจสอบ lock file integrity
- ตรวจสอบ workspace dependency consistency ใน monorepo

### 2. Reference Existing Workflows

ใช้ references แทนการทำซ้ำ

- ใช้ `/check-unused-deps` สำหรับ unused dependency detection
- ใช้ `/check-vulnerability` สำหรับ security scanning
- ใช้ `/check-versioning` สำหรับ version management
- ใช้ `/run-audit` สำหรับ audit และ license compliance
- ใช้ `/list-dependencies` สำหรับ dependency overview

### 3. Severity Classification

จัดลำดับความรุนแรงของ issues

- Critical: security vulnerabilities ระดับ critical/high, version conflicts ที่ทำให้ build พัง
- High: unused dependencies จำนวนมาก, lock file ไม่ sync, circular dependencies
- Medium: deprecated dependencies, license concerns, peer dependency warnings
- Low: outdated versions, bundle size optimizations, alternative suggestions

### 4. Ecosystem Adaptability

ปรับใช้ตาม ecosystem ของ project

- ตรวจสอบ `package.json` สำหรับ JavaScript/TypeScript
- ตรวจสอบ `Cargo.toml` สำหรับ Rust
- ตรวจสอบ `pyproject.toml` สำหรับ Python
- ตรวจสอบ `go.mod` สำหรับ Go
- ใช้ tools ที่เหมาะสมกับแต่ละ ecosystem

### 5. Report Formatting

จัดรูปแบบ output ตามมาตรฐาน

- ใช้ `/report-format-table` สำหรับ dependency validation results
- แสดง table structure: No, Name, Version, Type, Issue, Severity, Recommendation
- จัดกลุ่มตาม severity (Critical, High, Medium, Low)
- ใช้ symbols (✅, ❌, ⚠️) สำหรับ status indicators

## Expected Outcome

- Dependencies ทั้งหมดถูกตรวจสอบครบทุกมิติ
- Version compatibility ได้รับการยืนยัน
- Security vulnerabilities ถูกระบุและจัดลำดับ
- Unused และ duplicate dependencies ถูกระบุ
- Lock file integrity ได้รับการตรวจสอบ
- Workspace dependencies สอดคล้องกันใน monorepo
- รายงานผลพร้อมคำแนะนำการดำเนินการ
