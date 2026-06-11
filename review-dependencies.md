---
title: Review Dependencies
description: Review dependencies ทั้งหมดใน project เพื่อตรวจสอบ vulnerabilities, unused dependencies, และ optimization opportunities
auto_execution_mode: 3
---

## Goal

Review dependencies ทั้งหมดใน project เพื่อระบุ issues ตาม priority

## Scope

ครอบคลุม dependencies ทั้งหมดใน project รวมถึง production, development, และ peer dependencies

## Execute

### 1. Analyze Dependencies

1. อ่าน `package.json` ทั้งหมดใน monorepo
2. ตรวจสอบ dependencies ทั้งหมดใน `node_modules`
3. รวบรวม dependencies จากทุก workspace

### 2. Check Vulnerabilities

1. รัน `bun audit` หรือ `npm audit` เพื่อตรวจสอบ security vulnerabilities
2. ใช้ `/check-vulnerability` สำหรับ detailed analysis
3. ระบุ vulnerabilities ตาม severity (Critical, High, Medium, Low)

### 3. Check Unused Dependencies

1. ใช้ `/check-unused-deps` เพื่อตรวจสอบ dependencies ที่ไม่ได้ใช้
2. ตรวจสอบ peer dependencies ที่ไม่จำเป็น
3. ตรวจสอบ dev dependencies ที่สามารถลบได้

### 4. Check Outdated Dependencies

1. รัน `bun outdated` หรือ `npm outdated` เพื่อตรวจสอบ dependencies ที่ล้าสมัย
2. ระบุ dependencies ที่ต้องอัพเดท (major, minor, patch)
3. ตรวจสอบ breaking changes ใน major updates

### 5. Analyze Dependency Tree

1. ตรวจสอบ circular dependencies
2. ตรวจสอบ duplicate dependencies
3. ตรวจสอบ bundle size impact
4. ตรวจสอบ dependency conflicts

### 6. Check License Compliance

1. ตรวจสอบ licenses ของทุก dependencies
2. ระบุ dependencies ที่มี license issues
3. ตรวจสอบ compliance กับ organization policies

### 7. Prioritize And Report

1. Group issues ตาม severity (Critical, High, Medium, Low)
2. ใช้ `/report` เพื่อสรุปผลเป็น table พร้อม numbered columns, grouping, sorting
3. รอ user confirmation ก่อนดำเนินการแก้ไข
4. ถ้าไม่พบ issues ให้รายงานว่า No issues found

### 8. Execute Fixes

1. Fix critical vulnerabilities ก่อน (ใช้ `/fix-vulnerability`)
2. Remove unused dependencies
3. Update outdated dependencies (ตาม priority)
4. Resolve license issues

## Rules

### 1. Review Scope

- ต้อง review dependencies ทั้งหมดใน monorepo
- ต้องตรวจสอบทุก workspace
- ต้องระบุ severity ชัดเจนสำหรับแต่ละ issue

### 2. Prioritization

- Critical: Security vulnerabilities with known exploits
- High: High severity vulnerabilities, outdated major versions
- Medium: Medium severity vulnerabilities, outdated minor versions
- Low: Low severity vulnerabilities, outdated patch versions, unused dev dependencies

### 3. Execution

- ต้องรอ user confirmation ก่อนแก้ไข
- ใช้ `/check-vulnerability` สำหรับ security vulnerabilities
- ใช้ `/check-unused-deps` สำหรับ unused dependencies
- ต้อง validate ทุกครั้งหลังแก้ไข (รัน build, test)

### 4. Output Format

- ใช้ `/report` เพื่อสรุปผลเป็น table พร้อม numbered columns, grouping, sorting
- ระบุ package name, current version, latest version, severity
- Link ไปยัง package documentation หรือ security advisory

## Expected Outcome

- Dependencies ทั้งหมดถูกระบุและ prioritize
- Table สรุปผลการ review พร้อม action items
- Issues ถูกแก้ไขตาม priority
- Validation ผ่านทุกขั้นตอน
- Dependencies ปลอดภัยและเป็นปัจจุบัน

## Common Mistakes

ข้อผิดพลาดที่พบบ่อย:

- ไม่รอ user confirmation ก่อนแก้ไข
- ไม่ระบุ severity ชัดเจน
- แก้ไข issues ไม่ตาม priority
- ไม่ validate หลังแก้ไข
- อัพเดท major versions โดยไม่ตรวจสอบ breaking changes

## Anti-Patterns

รูปแบบที่ไม่ควรทำ:

- ❌ อัพเดททุก dependencies พร้อมกันโดยไม่ prioritize
- ❌ ข้าม critical vulnerabilities เพื่อไปแก้ unused dependencies
- ❌ ไม่ตรวจสอบ breaking changes ก่อน major updates
- ❌ ไม่รายงานผลเป็น table ที่ชัดเจน
