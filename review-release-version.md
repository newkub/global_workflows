---
title: Review Release Version
description: Review version และ changelog ก่อน release ไปยัง registry
auto_execution_mode: 3
related_workflows:
  - /run-release
  - /follow-release-it
  - /follow-release-npm
  - /follow-changesets
  - /follow-auto-it
  - /commit
  - /commit-and-push
  - /report-format-table
  - /resolve-errors
---

## Goal

Review version bump, changelog, และ release artifacts ก่อน publish เพื่อให้มั่นใจว่า release ถูกต้อง ปลอดภัย และไม่มี issues

## Scope

ใช้สำหรับ review ก่อน release ทุกประเภท (npm, crates, docker, vscode, webstore) ครอบคลุม version, changelog, breaking changes, และ release readiness

## Execute

### 1. Verify Branch

ตรวจสอบว่า release ทำบน branch ที่ถูกต้อง

1. ตรวจสอบว่า branch ปัจจุบันคือ `main` หรือ default branch
2. ตรวจสอบว่า working directory สะอาด (ไม่มี uncommitted changes)
3. ตรวจสอบว่า local branch sync กับ remote
4. ห้าม release บน feature branch หรือ develop branch
5. ถ้ามี uncommitted changes ให้ทำ `/commit` ก่อน

### 2. Review Version Bump

ตรวจสอบ version bump ที่เหมาะสม

1. อ่าน current version จาก `package.json`, `Cargo.toml`, หรือ `manifest.json`
2. ตรวจสอบ version bump type ตาม conventional commits ตั้งแต่ release ล่าสุด:
   - **Patch** (x.y.Z): bug fixes เท่านั้น
   - **Minor** (x.Y.0): new features ที่ backward compatible
   - **Major** (X.0.0): breaking changes
3. ตรวจสอบ commits ตั้งแต่ tag ล่าสุดด้วย `git log $(git describe --tags --abbrev=0)..HEAD --oneline`
4. ถ้าใช้ `/follow-changesets` ให้ตรวจสอบ changeset files
5. ถ้าใช้ `/follow-release-it` ให้ตรวจสอบ config ใน `.releaseit.json`

### 3. Review Changelog

ตรวจสอบ changelog ก่อน release

1. ตรวจสอบว่า `CHANGELOG.md` มี entry สำหรับ version ใหม่
2. ตรวจสอบว่า changelog ครอบคลุมทุก changes ตั้งแต่ release ล่าสุด
3. ตรวจสอบว่า breaking changes ถูก document ชัดเจน
4. ตรวจสอบว่ามี migration guide สำหรับ breaking changes (ถ้ามี)
5. ถ้าใช้ `/follow-changesets` ให้ตรวจสอบ generated changelog

### 4. Verify Release Readiness

ตรวจสอบความพร้อมก่อน release

1. ทำ `/run-verify` เพื่อตรวจสอบ lint, typecheck, test, build ผ่านทั้งหมด
2. ตรวจสอบว่าไม่มี `TODO`, `MOCK`, หรือ placeholder ใน production code
3. ตรวจสอบว่า documentation อัปเดต (README, API docs, migration guide)
4. ตรวจสอบว่า dependencies ไม่มี vulnerabilities ด้วย `/run-audit`
5. ตรวจสอบว่า `LICENSE` file มีอยู่และถูกต้อง
6. ถ้าเป็น npm: ตรวจสอบ `files` field และ `publishConfig` ใน `package.json`
7. ถ้าเป็น monorepo: ตรวจสอบ inter-package dependencies ที่ต้อง bump ด้วย

### 5. Check Breaking Changes

ตรวจสอบ breaking changes อย่างละเอียด

1. ตรวจสอบ API changes ที่อาจทำให้ consumers พัง
2. ตรวจสอบ dependency version changes
3. ตรวจสอบ configuration format changes
4. ตรวจสอบ runtime requirements (Node, Bun, browser versions)
5. ถ้ามี breaking changes ให้แน่ใจว่า major version ถูก bump
6. ถ้าเป็น monorepo ให้ตรวจสอบว่า packages ที่ depend กันถูก bump ตามด้วย

### 6. Verify Git Tag

ตรวจสอบ git tag เพื่อป้องกัน duplicate release

1. ตรวจสอบว่า tag สำหรับ version ใหม่ยังไม่มีอยู่: `git tag -l "v${version}"`
2. ถ้า tag มีอยู่แล้ว ให้หยุด release และตรวจสอบว่า release ไปแล้วหรือไม่
3. ถ้าเป็น pre-release (beta, alpha, rc) ให้ตรวจสอบ tag format: `v${version}-beta.1`
4. ตรวจสอบว่า latest tag สอดคล้องกับ version ใน manifest file

### 7. Report Review Result

รายงานผลการ review ในรูปแบบตาราง

1. ทำ `/report-format-table` เพื่อจัดรูปแบบตาราง
2. สร้างตารางพร้อม columns: Category, Status, Details, Action Required
3. หมวดหมู่: Branch, Version Bump, Changelog, Build, Tests, Security, Breaking Changes, Git Tag
4. ระบุ action ที่ต้องทำก่อน release (ถ้ามี)

### 8. Release Or Hold

ตัดสินใจหลัง review

1. ถ้าทุกอย่างผ่าน: ทำ `/run-release` เพื่อ release
2. ถ้ามี issues: หยุด release และทำ `/resolve-errors`
3. ถ้ามี breaking changes ที่ไม่ได้ document: หยุด release และอัปเดต changelog
4. ถ้า build หรือ test fail: หยุด release และทำ `/resolve-errors`
5. ถ้า tag ซ้ำ: หยุด release และตรวจสอบสถานะ release ก่อนหน้า

### 9. Post-Release Verification

ตรวจสอบหลัง release สำเร็จ

1. ตรวจสอบว่า package ปรากฏบน registry (npm, crates, etc.)
2. ตรวจสอบว่า git tag ถูกสร้างและ push แล้ว
3. ตรวจสอบว่า GitHub Release ถูกสร้าง (ถ้าใช้)
4. ทำ `/commit-and-push` เพื่อ push changelog และ version bump
5. ถ้า release พัง: ทำ rollback ตาม platform-specific guidelines
6. บันทึก release notes สำหรับ communication

## Rules

- ห้าม release บน branch อื่นนอกจาก `main` หรือ default branch
- ห้าม release ถ้า working directory ไม่สะอาด
- ห้าม release ถ้า `/run-verify` ไม่ผ่าน
- ห้าม release ถ้ามี breaking changes ที่ไม่ได้ document
- ห้าม release ถ้า changelog ไม่ครอบคลุม changes
- ห้าม release ถ้ามี vulnerabilities ใน dependencies
- ห้าม release ถ้า git tag สำหรับ version ใหม่มีอยู่แล้ว
- ใช้ `/run-release` สำหรับการ release จริง
- ใช้ `/report-format-table` สำหรับรายงาน review result
- Release ต้องการ manual approval เสมอ
- ถ้าใช้ automated release (release-it, auto-it) ให้ review ก่อน CI trigger
- ถ้าเป็น monorepo ให้ตรวจสอบ inter-package dependencies ทุกครั้ง
- ถ้าเป็น pre-release (beta, alpha, rc) ให้ระบุ tag format ที่ถูกต้อง
- ตรวจสอบ post-release verification ทุกครั้งหลัง publish

## Common Mistakes

- Release บน feature branch โดยไม่ตรวจสอบ
- ลืมตรวจสอบ git tag ซ้ำทำให้ release ซ้ำ
- ไม่อัปเดต changelog ก่อน release
- ลืม push changelog และ version bump หลัง release
- ไม่ตรวจสอบ inter-package dependencies ใน monorepo
- Release โดยไม่มี migration guide สำหรับ breaking changes
- ไม่ verify บน registry หลัง release

## Anti-Patterns

- Force release ถ้า CI หรือ verify fail
- Release โดยไม่มี changelog
- ใช้ patch bump สำหรับ breaking changes
- ลืม tag สำหรับ pre-release versions
- Release โดยไม่ตรวจสอบ license
- ไม่มี rollback plan เมื่อ release พัง

## Expected Outcome

- Release ทำบน `main` หรือ default branch เท่านั้น
- Version bump ถูกต้องตาม conventional commits
- Changelog ครอบคลุมทุก changes
- Breaking changes ถูก document ชัดเจนพร้อม migration guide
- Build, tests, และ verify ผ่านทั้งหมด
- Dependencies ไม่มี vulnerabilities
- Git tag ไม่ซ้ำและถูกต้อง
- Review result รายงานในรูปแบบตาราง
- Post-release verification ผ่าน
- Release ดำเนินการเฉพาะเมื่อทุกอย่างผ่าน
