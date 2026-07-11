---
title: Improve Dependencies
description: ปรับปรุง dependencies ครบวงจร inventory, validation, security, cleanup, update, optimization, planning, automation
auto_execution_mode: 3
related_workflows:
  - /list-dependencies
  - /validate-dependencies
  - /check-unused-deps
  - /check-duplication
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

ปรับปรุง dependencies ครบวงจรตั้งแต่ inventory, validation, security, cleanup, update, planning ไปจนถึง optimization และ automation

## Scope

ใช้สำหรับการปรับปรุง dependencies ของ codebase ทั้งใน single project และ monorepo ครอบคลุมทุก ecosystem (JavaScript, Rust, Python, Go)

## Execute

### 1. Inventory And Categorization

รวบรวมและวิเคราะห์ dependencies ทั้งหมด

1. ทำ `/list-dependencies` เพื่อแสดงรายการ dependencies ทั้งหมดพร้อม categorize
2. อ่าน package manifests ทุก workspace ใน monorepo
3. จัดกลุ่มตาม purpose (framework, utilities, testing, linting, build tools)
4. แยก production และ development dependencies
5. ระบุ workspace packages ใน monorepo
6. ระบุ duplicate, deprecated, หรือ packages ที่ไม่ค่อย maintain

### 2. Validation And Security

ตรวจสอบความถูกต้องและความปลอดภัย

1. ทำ `/validate-dependencies` เพื่อตรวจสอบครบทุกมิติ
2. ทำ `/check-vulnerability` เพื่อสแกน security vulnerabilities
3. ทำ `/run-audit` เพื่อ audit dependencies และ licenses
4. ทำ `/ensure-compatibility-with` เพื่อตรวจสอบ version compatibility
5. ทำ `/check-unused-deps` เพื่อหา unused dependencies
6. ทำ `/check-duplication` เพื่อหา duplicate packages และ conflicts
7. ตรวจสอบ outdated packages ด้วย `taze` หรือ `npm outdated`
8. ตรวจสอบ peer dependency warnings
9. ตรวจสอบ lock file integrity และ sync กับ manifest
10. ตรวจสอบ workspace dependency consistency ใน monorepo

### 3. Cleanup And Deduplication

ล้าง dependencies ที่ไม่จำเป็น

1. ลบ unused dependencies ด้วย `bun remove` หรือ equivalent
2. ตรวจสอบและรวม dependencies ที่ซ้ำซ้อนหรือทำงานคล้ายกัน
3. ตรวจสอบ dependencies ที่ประกาศผิดประเภท (เช่น dev dep อยู่ใน dependencies)
4. ทำ `/refactor-packages` เพื่อจัดระเบียบ packages
5. ทำ backup ก่อนลบ packages
6. แก้ไข configuration files ที่เกี่ยวข้อง
7. รัน tests และ lint เพื่อ verify
8. document ทุกการเปลี่ยนแปลง

### 4. Update And Modernize

อัพเดท dependencies ให้ทันสมัย

1. ทำ `/update-dependencies-latest` เพื่ออัพเดท dependencies ทั้งหมด
2. อัพเดททีละประเภท: patch → minor → major
3. อ่าน changelogs ก่อนอัพเดท major versions
4. อัพเกรด outdated packages ด้วย `bun add` หรือ equivalent
5. แก้ไข configuration files ที่เกี่ยวข้อง
6. รัน tests หลังการอัพเดทแต่ละรอบ
7. ตรวจสอบ version consistency ใน monorepo
8. ทำ commit และ document ทุกการเปลี่ยนแปลง

### 5. Optimization And Effectiveness

ใช้ dependencies ให้เต็มประสิทธิภาพ

1. ทำ `/use-lib-effective` เพื่อวิเคราะห์การใช้งาน dependencies
2. ทำ `/use-lib-better` เพื่อรับรายการ deps ที่ควรใช้ พร้อมคะแนนและ priority
3. แทนที่ custom implementation ด้วย library functions
4. เปิดใช้งาน tree-shaking และ lazy loading
5. ตรวจสอบ bundle size impact

### 6. Plan And Prioritize

สร้าง migration plan จาก deps ที่แนะนำ

1. รับ output จาก `/use-lib-better` มาสร้าง migration plan
2. จัดลำดับตาม Priority Matrix:
   - **High**: Score >= 25, Effort: Low, Risk: Low
   - **Medium**: Score 20-24, Effort: Medium, Risk: Medium
   - **Low**: Score < 20, Effort: High, Risk: High
3. ระบุ risks และ mitigation strategies
4. ตัดสินใจว่าจะ replace, add, remove, หรือ upgrade deps ใด

### 7. Versioning And Automation

จัดการ versioning และ automation

1. ทำ `/check-versioning` เพื่อตรวจสอบ version management
2. ตรวจสอบ semver ranges และ version pinning strategy
3. ทำ `/follow-renovate` เพื่อตั้งค่า automated dependency updates
4. กำหนด schedule สำหรับ automated updates
5. ตั้งค่า auto-merge สำหรับ patch updates ที่ผ่าน tests

## Rules

### 1. Execution Order

- ทำทีละ section และตรวจสอบ
- ทำ `Inventory` → `Validation` → `Cleanup` → `Update` → `Optimization` → `Plan` → `Automation`
- ถ้าพบ issues ทำ `/resolve-errors` ก่อนดำเนินต่อ
- ทำ `/update-reference` หลังแต่ละ section
- รัน tests หลังแต่ละ improvement และตรวจสอบ coverage ไม่ลดลง

### 2. Safety Measures

- สร้าง branch ใหม่ก่อนอัพเดท dependencies
- รัน tests ก่อนและหลังการเปลี่ยนแปลง
- อัพเดททีละประเภท (patch → minor → major)
- มี rollback plan ถ้าอัพเดทล้มเหลว
- ตรวจสอบ breaking changes ก่อนอัพเกรด major versions
- ทำ backup ก่อนลบ packages
- ตรวจสอบ usage ก่อนลบ package

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
- Version compatibility, security, และ peer dependency ได้รับการตรวจสอบ
- Unused และ duplicate dependencies ถูกลบ
- Dependencies อัพเดทเป็น latest versions
- Dependencies ถูกใช้งานอย่างมีประสิทธิภาพ
- Migration plan ถูกสร้างจาก deps ที่แนะนำ
- Versioning และ automation ถูกตั้งค่า
- ทุกการเปลี่ยนแปลงผ่านการทดสอบและ verify

## Anti-Patterns

- ❌ ลบ packages โดยไม่ตรวจสอบ usage
- ❌ อัพเกรด major version โดยไม่อ่าน changelog
- ❌ อัพเกรดทุก packages พร้อมกันโดยไม่ทดสอบ
- ❌ ไม่ document การเปลี่ยนแปลง
- ❌ ละเลย security vulnerabilities
- ❌ ไม่รัน tests หลังการเปลี่ยนแปลง
- ❌ ลบ packages ที่ framework จัดการให้อยู่แล้ว
