---
title: Analyze Dependencies
description: วิเคราะห์ dependency graph, outdated, vulnerabilities, unused deps, license compliance
auto_execution_mode: 3
related_workflows:
  - /check-vulnerability
  - /check-unused-deps
  - /improve-dependencies
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ dependency health ของ project เพื่อระบุ outdated, vulnerable, unused, และ license issues

## Scope

Dependency graph, outdated packages, security vulnerabilities, unused dependencies, duplicate packages, license compliance, dependency direction, peer dependency issues

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม dependency metrics ผ่าน scripts (outdated scan, vulnerability scan, unused detection, license audit)

### 2. Check Dependency Inventory

1. ระบุ dependencies ทั้งหมดจาก `package.json` หรือ `Cargo.toml` หรือ `go.mod`
2. จัดกลุ่มตามประเภท (runtime, dev, peer, optional)
3. ระบุ workspace dependencies ใน monorepo
4. ตรวจสอบ dependency tree depth

### 3. Check Outdated Dependencies

1. รัน `bun outdated` เพื่อตรวจสอบ outdated packages
2. ระบุ major version gaps ที่มี breaking changes
3. ระบุ packages ที่ไม่ maintain แล้ว (no updates > 1 year)
4. จัดลำดับการอัปเดตตาม risk และ impact

### 4. Check Security Vulnerabilities

1. รัน `bun audit` เพื่อ scan vulnerabilities
2. ทำ `/check-vulnerability` สำหรับ comprehensive scan
3. ระบุ CVEs และ severity
4. ระบุ transitive dependencies ที่มี vulnerabilities

### 5. Check Unused Dependencies

1. รัน `bun run knip` เพื่อ detect unused dependencies
2. ทำ `/check-unused-deps` สำหรับ detailed analysis
3. ระบุ dependencies ที่ import แต่ไม่ใช้จริง
4. ระบุ devDependencies ที่ควรเป็น runtime หรือกลับกัน

### 6. Check Duplicate Packages

1. ระบุ packages ที่ติดตั้งหลาย version ใน tree
2. ระบุ packages ที่ทำหน้าที่ซ้ำกัน (เช่น lodash และ underscore)
3. ระบุ packages ที่ควร dedupe

### 7. Check License Compliance

1. ระบุ licenses ของ dependencies ทั้งหมด
2. ระบุ licenses ที่ไม่ compatible (GPL, AGPL ใน commercial project)
3. ระบุ missing license files
4. ระบุ packages ที่ไม่มี license

### 8. Check Dependency Direction

1. ระบุ dependency direction violations (shared → app, utils → modules)
2. ระบุ circular dependencies ข้าม workspaces
3. ระบุ workspace boundary violations

### 9. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม severity: vulnerabilities → outdated → unused → duplicate → license → direction

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม package name, version, และ severity

### 2. Severity Classification

- **Critical**: CVEs with remote code execution
- **High**: outdated with breaking security fixes, GPL in commercial
- **Medium**: outdated major versions, unused deps
- **Low**: duplicate packages, minor version gaps

### 3. Monorepo Awareness

- ตรวจสอบ workspace dependencies แยกจาก external
- ระบุ cross-workspace dependency issues

## Expected Outcome

- Dependency health report พร้อม vulnerabilities, outdated, unused, และ license issues
- พร้อมสำหรับ `/improve-dependencies`
