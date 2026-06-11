---
title: Generate Changelog
description: สร้าง changelog ด้วย changelogen
auto_execution_mode: 3
related_workflows:
  - /follow-changelogen
---

## Goal

สร้าง changelog อัตโนมัติจาก conventional commits ด้วย changelogen

## Scope

ใช้สำหรับสร้าง changelog จาก git commit history ด้วย changelogen

## Execute

### 1. Generate Changelog

สร้าง changelog จาก commits ด้วย changelogen

1. รัน `bunx changelogen@latest` สำหรับ generate changelog
2. รัน `bunx changelogen@latest --bump` สำหรับ bump version
3. รัน `bunx changelogen@latest --release` สำหรับ full release
4. ตรวจสอบ output จาก command

### 2. Review Changelog

ตรวจสอบ changelog ที่สร้าง

1. อ่าน `CHANGELOG.md` ที่สร้าง
2. ตรวจสอบ version numbers ถูกต้อง
3. ตรวจสอบ commit messages ถูกจัดกลุ่ม
4. ตรวจสอบ dates ถูกต้อง

### 3. Commit Changelog

Commit changelog ที่สร้าง

1. Add `CHANGELOG.md` ไปยัง git
2. Commit ด้วย message ที่เหมาะสม
3. Push ไปยัง remote repository

## Rules

### 1. Use Changelogen

ใช้ changelogen สำหรับ changelog generation

- ทำตาม `/follow-changelogen` สำหรับ configuration และ setup
- ใช้ `bunx changelogen@latest` สำหรับ one-time usage
- ใช้ `--bump` สำหรับ version bump เท่านั้น
- ใช้ `--release` สำหรับ full release

### 2. Commit Conventions

ใช้ conventional commits สำหรับ changelog generation

- ใช้ format: `type(scope): description`
- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `perf`
- ใช้ breaking change indicator: `feat!:` หรือ `BREAKING CHANGE:`
- ใช้ scopes สำหรับ categorization ใน monorepos

## Expected Outcome

- Changelog สร้างอัตโนมัติด้วย changelogen
- Version numbers ถูกต้อง
- Commit messages ถูกจัดกลุ่ม
- Changelog format มาตรฐาน

