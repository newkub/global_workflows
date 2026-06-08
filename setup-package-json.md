---
title: Follow Package Json
description: ตั้งค่า package.json ด้วย scripts มาตรฐานสำหรับ development workflow
auto_execution_mode: 3
---

## Goal

สร้าง package.json ที่มี scripts มาตรฐานสำหรับ development, building, testing และ verification

## Execute

### 1. Create Package.json

1. สร้าง `package.json` ด้วย scripts พื้นฐาน
2. ตั้งค่า lifecycle scripts สำหรับ automation
3. ตั้งค่า development scripts สำหรับการทำงาน

```json
{
  "scripts": {
    "watch": "",
    "prepare": "lefthook install",
    "dev": "",
    "format": "",
    "lint": "",
    "build": "",
    "test": "",
    "verify": "bun run lint && bun run test && bun run build"
  }
}
```

### 2. Configure Scripts

1. ตั้งค่า `watch` สำหรับ watch mode
2. ตั้งค่า `prepare` สำหรับ setup หลัง install
3. ตั้งค่า `dev` สำหรับ development server
4. ตั้งค่า `format` สำหรับ code formatting
5. ตั้งค่า `lint` สำหรับ code linting
6. ตั้งค่า `build` สำหรับ build project
7. ตั้งค่า `test` สำหรับ run tests
8. ตั้งค่า `verify` สำหรับ pre-deploy verification

### 3. Follow Workflows

1. ตรวจสอบประเภทของ project
2. ทำตาม workflows ย่อยที่เกี่ยวข้อง
3. ดู workflows ทั้งหมดใน `/follow-windsurf-global-workflows`

### 4. Setup Monorepo

1. ตั้งค่า `turbo` ที่ root `package.json` เท่านั้น
2. ตั้งค่า `lefthook` ที่ root `package.json` เท่านั้น
3. ไม่ใช้ `lefthook` หรือ `turbo` ที่ workspace level

## Rules

### 1. Frontmatter Standards

- title: Title Case
- description: ไม่เกิน 100 ตัวอักษร
- auto_execution_mode: 3

### 2. Core Scripts

- `watch`: สำหรับ watch mode -> ตั้งค่า script สำหรับ watch files
- `prepare`: สำหรับ setup หลัง install -> ใช้ `lefthook install`
- `preinstall`: สำหรับ update dependencies -> ใช้ `bun update --latest`
- `dev`: สำหรับ development server -> ตั้งค่า script สำหรับ dev server
- `format`: สำหรับ format code -> ตั้งค่า script สำหรับ formatter
- `lint`: สำหรับ lint code -> ตั้งค่า script สำหรับ linter
- `build`: สำหรับ build project -> ตั้งค่า script สำหรับ build
- `test`: สำหรับ run tests -> ตั้งค่า script สำหรับ test runner
- `verify`: สำหรับ verify ก่อน deploy -> รัน lint, test และ build

### 3. Monorepo Configuration

- ใช้ `turbo.json` -> ตั้งค่า turbo ที่ root `package.json` เท่านั้น
- ใช้ `lefthook` -> ตั้งค่า lefthook ที่ root `package.json` เท่านั้น
- ใช้ workspaces -> ไม่ต้องใช้ lefthook หรือ turbo ที่ workspace level

### 4. Package Manifest Integration

- ใช้ `/setup-package-manifest` สำหรับตั้งค่า scripts แบบ complete
- เลือก template level ตามขนาดโปรเจกต์: Minimal, Standard, Complete
- กำหนด scripts ให้สอดคล้องกับ tech stack

## Expected Outcome

1. Package.json มี scripts มาตรฐานครบถ้วน
2. Lifecycle scripts ทำงานอัตโนมัติถูกต้อง
3. Development workflow สม่ำเสมอและใช้งานง่าย
4. Monorepo configuration ถูกต้องตาม best practices
