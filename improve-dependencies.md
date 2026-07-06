---
title: Improve Dependencies
description: ปรับปรุง dependencies ครบวงจร inventory, validation, security, cleanup, update, optimization
auto_execution_mode: 3
related_workflows:
  - /list-dependencies
  - /validate-dependencies
  - /check-unused-deps
  - /check-vulnerability
  - /run-audit
  - /use-lib-better
  - /use-lib-effective
  - /update-dependencies-latest
  - /check-versioning
  - /ensure-compatibility-with
  - /follow-renovate
  - /refactor-packages
---

## Goal

ปรับปรุง dependencies ครบวงจรตั้งแต่ inventory, validation, security, cleanup, update ไปจนถึง optimization และ automation

## Scope

ใช้สำหรับการปรับปรุง dependencies ของ codebase ทั้งใน single project และ monorepo ครอบคลุมทุก ecosystem (JavaScript, Rust, Python, Go)

## Execute

### 1. Inventory And Categorization

รวบรวมและจัดกลุ่ม dependencies ทั้งหมด

1. ทำ `/list-dependencies` เพื่อแสดงรายการ dependencies ทั้งหมดพร้อม categorize
2. อ่าน package manifests ทุก workspace ใน monorepo
3. จัดกลุ่มตาม purpose (framework, utilities, testing, linting, build tools)
4. แยก production และ development dependencies
5. ระบุ workspace packages ใน monorepo

### 2. Validation And Security

ตรวจสอบความถูกต้องและความปลอดภัย

1. ทำ `/validate-dependencies` เพื่อตรวจสอบครบทุกมิติ
2. ทำ `/check-vulnerability` เพื่อสแกน security vulnerabilities
3. ทำ `/run-audit` เพื่อ audit dependencies และ licenses
4. ทำ `/ensure-compatibility-with` เพื่อตรวจสอบ version compatibility
5. ตรวจสอบ lock file integrity และ sync กับ manifest
6. ตรวจสอบ workspace dependency consistency ใน monorepo

### 3. Cleanup And Deduplication

ล้าง dependencies ที่ไม่จำเป็น

1. ทำ `/check-unused-deps` เพื่อหา dependencies ที่ไม่ได้ใช้
2. ลบ unused dependencies ด้วย `bun remove` หรือ equivalent
3. ตรวจสอบและรวม dependencies ที่ซ้ำซ้อนหรือทำงานคล้ายกัน
4. ตรวจสอบ dependencies ที่ประกาศผิดประเภท (เช่น dev dep อยู่ใน dependencies)
5. ทำ `/refactor-packages` เพื่อจัดระเบียบ packages

### 4. Update And Modernize

อัพเดท dependencies ให้ทันสมัย

1. ทำ `/update-dependencies-latest` เพื่ออัพเดท dependencies ทั้งหมด
2. อัพเดททีละประเภท: patch → minor → major
3. อ่าน changelogs ก่อนอัพเดท major versions
4. รัน tests หลังการอัพเดทแต่ละรอบ
5. ตรวจสอบ version consistency ใน monorepo

### 5. Optimization And Effectiveness

ใช้ dependencies ให้เต็มประสิทธิภาพ

1. ทำ `/use-lib-effective` เพื่อวิเคราะห์การใช้งาน dependencies
2. ทำ `/use-lib-better` เพื่อเปรียบเทียบและหา alternatives ที่ดีกว่า
3. แทนที่ custom implementation ด้วย library functions
4. เปิดใช้งาน tree-shaking และ lazy loading
5. ตรวจสอบ bundle size impact

### 6. Versioning And Automation

จัดการ versioning และ automation

1. ทำ `/check-versioning` เพื่อตรวจสอบ version management
2. ตรวจสอบ semver ranges และ version pinning strategy
3. ทำ `/follow-renovate` เพื่อตั้งค่า automated dependency updates
4. กำหนด schedule สำหรับ automated updates
5. ตั้งค่า auto-merge สำหรับ patch updates ที่ผ่าน tests

## Rules

### 1. Execution Order

- ทำทีละ section และตรวจสอบ
- ทำ `Inventory` → `Validation` → `Cleanup` → `Update` → `Optimization` → `Automation`
- ถ้าพบ issues ทำ `/resolve-errors` ก่อนดำเนินต่อ
- ทำ `/update-reference` หลังแต่ละ section
- รัน tests หลังแต่ละ improvement และตรวจสอบ coverage ไม่ลดลง

### 2. Safety Measures

- สร้าง branch ใหม่ก่อนอัพเดท dependencies
- รัน tests ก่อนและหลังการเปลี่ยนแปลง
- อัพเดททีละประเภท (patch → minor → major)
- มี rollback plan ถ้าอัพเดทล้มเหลว
- ตรวจสอบ breaking changes ก่อนอัพเกรด major versions

### 3. Ecosystem Adaptability

- ตรวจสอบ `package.json` สำหรับ JavaScript/TypeScript
- ตรวจสอบ `Cargo.toml` สำหรับ Rust
- ตรวจสอบ `pyproject.toml` สำหรับ Python
- ตรวจสอบ `go.mod` สำหรับ Go
- ใช้ tools ที่เหมาะสมกับแต่ละ ecosystem

### 4. Monorepo Handling

- อัพเดท root dependencies ก่อน
- อัพเดท shared dependencies ให้ consistent
- ใช้ workspace protocol เมื่อเหมาะสม
- ตรวจสอบ dependency hoisting หลังอัพเดท
- ตรวจสอบ circular dependencies ระหว่าง workspaces

### 5. Report Formatting

- ทำ `/report-format-table` สำหรับสรุปผลลัพธ์
- แสดง table structure: No, Name, Version, Type, Status, Issue, Recommendation
- จัดกลุ่มตาม severity และ category
- ใช้ symbols (✅, ❌, ⚠️) สำหรับ status indicators

## Expected Outcome

- Dependencies ทั้งหมดถูก inventory และ categorize
- Version compatibility และ security ได้รับการตรวจสอบ
- Unused และ duplicate dependencies ถูกลบ
- Dependencies อัพเดทเป็น latest versions
- Dependencies ถูกใช้งานอย่างมีประสิทธิภาพ
- Versioning และ automation ถูกตั้งค่า
- ทุกการเปลี่ยนแปลงผ่านการทดสอบและ verify
