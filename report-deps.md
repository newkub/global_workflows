---
title: Report Deps
description: สรุป dependencies: versions, outdated, unused, vulnerabilities, licenses
auto_execution_mode: 3
related:
  - /report-format-table
  - /list-dependencies
  - /check-vulnerability
  - /check-unused-deps
---

## Goal

รายงานสถานะ dependencies ของโปรเจกต์: versions, outdated, unused, vulnerabilities, licenses และ insights

## Scope

ใช้สำหรับการรายงาน dependencies ใน package manifests (`package.json`, `Cargo.toml`, `pyproject.toml`, etc.) — ไม่รวมการติดตั้งหรืออัปเดต (ใช้ `/run-install` หรือ `/update-dependencies-latest`)

## Execute

### 1. Collect Dependency Inventory

รวบรวม dependencies ทั้งหมดจาก manifests

> Goal: มี inventory ครบสำหรับการวิเคราะห์

1. ทำ `/list-dependencies` เพื่อดู dependencies ทั้งหมด
2. อ่าน `package.json` (หรือ manifest อื่นๆ) เพื่อดู versions ปัจจุบัน
3. แยก dependencies ตามประเภท: `dependencies`, `devDependencies`, `peerDependencies`, `optionalDependencies`
4. ระบุ workspace dependencies (`workspace:*`) ถ้าเป็น monorepo

### 2. Check Outdated

ตรวจสอบ dependencies ที่ล้าสมัย

> Goal: รู้ว่า dependencies ใดต้องอัปเดต

1. รัน `bun outdated` หรือเทียบเท่าสำหรับภาษาอื่น
2. ระบุ dependencies ที่มี major, minor, หรือ patch update
3. จัดประเภท: safe to update (patch/minor) vs breaking (major)
4. ระบุ dependencies ที่เป็น latest แล้ว

### 3. Check Unused

ตรวจสอบ dependencies ที่ไม่ได้ใช้

> Goal: รู้ dependencies ที่ควรลบ

1. ทำ `/check-unused-deps` เพื่อตรวจจับ unused dependencies
2. ระบุ dependencies ที่ไม่ได้ import หรือ require ใน code
3. ระบุ devDependencies ที่ไม่ได้ใช้ใน scripts
4. แยก type-only packages (`@types/*`) จาก runtime dependencies

### 4. Check Vulnerabilities

ตรวจสอบช่องโหว่ด้านความปลอดภัย

> Goal: รู้ vulnerabilities และความรุนแรง

1. ทำ `/check-vulnerability` เพื่อ scan vulnerabilities
2. ระบุ severity: critical, high, medium, low
3. ระบุ dependencies ที่มี vulnerabilities และมี fix available
4. ระบุ dependencies ที่มี vulnerabilities และไม่มี fix

### 5. Check Licenses

ตรวจสอบ licenses ของ dependencies

> Goal: รู้ licenses และความเข้ากันได้

1. ระบุ license ของแต่ละ dependency
2. จัดประเภท: permissive (MIT, Apache-2.0), copyleft (GPL), proprietary
3. ระบุ dependencies ที่มี license ไม่เข้ากันกับโปรเจกต์
4. ระบุ dependencies ที่ไม่มี license

### 6. Format Report

จัดรูปแบบรายงานให้อ่านง่าย

> Goal: รายงานครบ อ่านง่าย มี insights

1. ทำ `/report-format-table` เพื่อจัดรูปแบบเป็นตาราง
2. แสดงผลตามลำดับ: Summary → Outdated → Unused → Vulnerabilities → Licenses
3. กำหนด columns สำหรับตารางหลัก:
   - **No.** ลำดับ
   - **Package** ชื่อ package
   - **Current** version ปัจจุบัน
   - **Latest** version ล่าสุด
   - **Type** dep / devDep / peer
   - **Status** ✅ latest / ⚠️ outdated / ❌ vulnerable / 🗑️ unused
4. แยกตารางตามหมวด: Outdated, Unused, Vulnerabilities, Licenses

### 7. Provide Insights

ให้ insights และ recommendations

> Goal: ผู้อ่านรู้ว่าต้องทำอะไรต่อ

1. สรุปจำนวน dependencies ทั้งหมดแยกตามประเภท
2. ระบุ priority actions: critical vulnerabilities ก่อน, จากนั้น unused, จากนั้น outdated
3. ระบุความเสี่ยงของการอัปเดต major versions
4. แนะนำ next steps: `/run-install` สำหรับอัปเดต, `/cleanup-files` สำหรับลบ unused

## Rules

### Read-Only

- ไม่ติดตั้ง ไม่อัปเดต ไม่ลบ dependencies — รายงานเท่านั้น
- ใช้ `/run-install` สำหรับการติดตั้ง
- ใช้ `/update-dependencies-latest` สำหรับการอัปเดต
- ใช้ `/cleanup-files` สำหรับการลบ

### Output Format

- ทำ `/report-format-table` สำหรับจัดรูปแบบผลลัพธ์
- แยกตารางตามหมวด: Outdated, Unused, Vulnerabilities, Licenses
- ใช้ symbols: ✅ latest, ⚠️ outdated, ❌ vulnerable, 🗑️ unused, ⚖️ license issue

### High Impact Content

- ถ้ามีมากกว่า 100 dependencies → แสดงเฉพาะที่มีปัญหา
- ชี้เน้น critical vulnerabilities ก่อนเสมอ
- ชี้เน้น unused dependencies ที่ควรลบ
- ชี้เน้น major version updates ที่มีความเสี่ยง

### Non-Redundancy

- รายละเอียด listing อยู่ใน `/list-dependencies` แล้ว
- รายละเอียด vulnerability scanning อยู่ใน `/check-vulnerability` แล้ว
- รายละเอียด unused detection อยู่ใน `/check-unused-deps` แล้ว

## Expected Outcome

- สรุป dependencies ทั้งหมดในตารางที่อ่านง่าย
- ระบุ outdated, unused, vulnerable และ license issues
- มี priority actions ชัดเจน
- ไม่มีการแก้ไข dependencies จริง — read-only report
