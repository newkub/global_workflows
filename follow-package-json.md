---
title: Follow Package Json
description: ตั้งค่า package.json ด้วย scripts มาตรฐานสำหรับ development workflow
auto_execution_mode: 3
---


## Goal

ตั้งค่า package.json ด้วย scripts มาตรฐานและ sorting ตามลำดับ workflows

## Scope

ตั้งค่า package.json สำหรับทุก workspace และ packages ใน monorepo

## Execute

### 1. Create Package.json

1. สร้าง `package.json` ด้วย `name` และ `types` เสมอ
2. ตั้งค่า lifecycle scripts สำหรับ automation
3. ตั้งค่า development scripts สำหรับการทำงาน
4. จัดลำดับ scripts ตาม workflow execution order

```json
{
  "name": "package-name",
  "types": "./index.d.ts",
  "scripts": {
    "preinstall": "",
    "prepare": "lefthook install",
    "postinstall": "",
    "preview": "",
    "dev": "",
    "watch": "",
    "format": "",
    "lint": "",
    "test": "",
    "build": "",
    "verify": "bun run lint && bun run test && bun run build",
    "release": ""
  }
}
```

### 2. Configure Scripts

1. ตั้งค่า `preinstall` สำหรับ update dependencies
2. ตั้งค่า `prepare` สำหรับ setup หลัง install
3. ตั้งค่า `postinstall` สำหรับ post-install tasks
4. ตั้งค่า `preview` สำหรับ preview build
5. ตั้งค่า `dev` สำหรับ development server
6. ตั้งค่า `watch` สำหรับ watch mode
7. ตั้งค่า `format` สำหรับ code formatting
8. ตั้งค่า `lint` สำหรับ code linting
9. ตั้งค่า `test` สำหรับ run tests
10. ตั้งค่า `build` สำหรับ build project
11. ตั้งค่า `verify` สำหรับ pre-deploy verification
12. ตั้งค่า `release` สำหรับ release package

### 3. Follow Workflows

1. ทำ `/tasks` สำหรับตั้งค่า scripts มาตรฐาน
2. ทำ `/taze` สำหรับ automated dependency management
3. ทำ `/update-dependencies-latest` สำหรับ manual dependency updates
4. ดู workflows ทั้งหมดใน `/windsurf-global-workflows`

### 4. Setup Monorepo

1. ตั้งค่า `turbo` ที่ root `package.json` เท่านั้น
2. ตั้งค่า `lefthook` ที่ root `package.json` เท่านั้น
3. ไม่ใช้ `lefthook` หรือ `turbo` ที่ workspace level

## Rules

### 1. Package Metadata

ต้องมี fields พื้นฐานเสมอ:

- `name`: ชื่อ package ใน kebab-case
- `types`: path ไปยัง type declarations เสมอ (เช่น `./index.d.ts`)
- `version`: version ของ package

### 2. Scripts Sorting Order

จัดลำดับ scripts ตาม workflow execution order:

- Lifecycle scripts ก่อน: `preinstall`, `prepare`, `postinstall`
- Preview scripts: `preview` (อยู่ต้นสำหรับ preview build)
- Development scripts: `dev`, `watch`
- Quality scripts: `format`, `lint`, `test`
- Build scripts: `build`, `verify`
- Release scripts: `release` (อยู่ท้ายสำหรับ release package)

### 3. Core Scripts

- `preinstall`: สำหรับ update dependencies -> ใช้ `bun update --latest`
- `prepare`: สำหรับ setup หลัง install -> ใช้ `lefthook install`
- `postinstall`: สำหรับ post-install tasks -> ตั้งค่า script ที่จำเป็น
- `preview`: สำหรับ preview build -> ตั้งค่า script สำหรับ preview
- `dev`: สำหรับ development server -> ตั้งค่า script สำหรับ dev server
- `watch`: สำหรับ watch mode -> ตั้งค่า script สำหรับ watch files
- `format`: สำหรับ format code -> ตั้งค่า script สำหรับ formatter
- `lint`: สำหรับ lint code -> ตั้งค่า script สำหรับ linter
- `test`: สำหรับ run tests -> ตั้งค่า script สำหรับ test runner
- `build`: สำหรับ build project -> ตั้งค่า script สำหรับ build
- `verify`: สำหรับ verify ก่อน deploy -> รัน lint, test และ build
- `release`: สำหรับ release package -> ตั้งค่า script สำหรับ release

### 4. Monorepo Configuration

- ใช้ `turbo.json` -> ตั้งค่า turbo ที่ root `package.json` เท่านั้น
- ใช้ `lefthook` -> ตั้งค่า lefthook ที่ root `package.json` เท่านั้น
- ใช้ workspaces -> ไม่ต้องใช้ lefthook หรือ turbo ที่ workspace level

## Expected Outcome

1. Package.json มี scripts มาตรฐานครบถ้วน
2. Lifecycle scripts ทำงานอัตโนมัติถูกต้อง
3. Development workflow สม่ำเสมอและใช้งานง่าย
4. Monorepo configuration ถูกต้องตาม best practices

