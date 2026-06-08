---
title: Follow Changesets
description: ตั้งค่าและใช้งาน Changesets สำหรับ versioning และ changelog management ใน monorepo
auto_execution_mode: 3
---

## Purpose

ตั้งค่า Changesets สำหรับจัดการ versioning, changelogs และ package publishing ใน monorepo อย่างเป็นระบบ

## Scope

- ติดตั้ง `@changesets/cli`
- กำหนดค่า `.changeset/config.json`
- ตั้งค่า GitHub Actions สำหรับ release
- จัดการ versioning workflow

## Inputs

| Input | Details |
|-------|-----------|
| Package Manager | Bun |
| Repository | Git repository |
| CI/CD | GitHub Actions (แนะนำ) |

## Rules

| Category | Requirements |
|------|---------|
| **Installation** | `bun add -D @changesets/cli` |
| **Access Token** | ต้องมี `GITHUB_TOKEN` หรือ `NPM_TOKEN` |
| **Base Branch** | กำหนด base branch (default: main) |
| **Commit** | ใช้ `changeset version` ก่อน publish |

## Structure

### Directory Structure

```text
project/
├── .changeset/
│   ├── config.json       # Changesets config
│   └── README.md         # Documentation
├── .github/
│   └── workflows/
│       └── release.yml   # Release workflow
└── package.json
```

### Phase Definitions

| Phase | Description | Main Activities |
|-------|-------------|---------------|
| Setup | ติดตั้ง | Add changesets/cli |
| Configure | กำหนดค่า | Create config |
| Workflow | CI/CD setup | GitHub Actions |
| Release | Publish | Version + publish |

## Steps

### Phase 0: Precondition

- 0.1 **ตรวจสอบ Environment**
  - มี Bun ติดตั้งแล้ว
  - มี Git repository
  - มี GitHub repository (สำหรับ GitHub Actions)

### Phase 1: Setup

- 1.1 **ติดตั้ง Changesets**
  - รัน `bun add -D @changesets/cli`
  - รัน `bunx changeset init`

- 1.2 **กำหนดค่า Access Token**
  - สร้าง `NPM_TOKEN` secret ใน GitHub repository
  - หรือ `GITHUB_TOKEN` (ถ้า publish บน GitHub Packages)

### Phase 2: Configure

- 2.1 **แก้ไข config.json**
  - แก้ไข `.changeset/config.json`:

```json [.changeset/config.json]
{
  "$schema": "https://unpkg.com/@changesets/config@3.0.0/schema.json",
  "changelog": "@changesets/cli/changelog",
  "commit": false,
  "fixed": [],
  "linked": [],
  "access": "restricted",
  "baseBranch": "main",
  "updateInternalDependencies": "patch",
  "ignore": []
}
```

### Phase 3: Workflow

- 3.1 **สร้าง Release Workflow**
  - สร้าง `.github/workflows/release.yml`:

```yml [.github/workflows/release.yml]
name: Release

on:
  push:
    branches:
      - main

concurrency: ${{ github.workflow }}-${{ github.ref }}

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v1
      - run: bun install
      - name: Create Release Pull Request or Publish
        uses: changesets/action@v1
        with:
          version: bun changeset version
          publish: bun changeset publish
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

### Phase 4: Release

- 4.1 **สร้าง Changeset**
  - รัน `bunx changeset`
  - เลือก packages และระบุ changeset type

- 4.2 **Publish**
  - Merge release PR ที่สร้างโดย GitHub Actions
  - หรือรัน `bunx changeset publish` ด้วยตนเอง

## Outputs

| Output | Details |
|--------|-----------|
| .changeset/config.json | Changesets configuration |
| .changeset/*.md | Changeset files |
| CHANGELOG.md | Generated changelogs |
| GitHub Actions workflow | Automated release |

## Expected Outcome

- Changesets ติดตั้งและทำงานได้
- Config กำหนดค่าถูกต้อง
- GitHub Actions workflow พร้อมใช้งาน
- Versioning และ publishing ทำงานอัตโนมัติ

## Reference

- `/validate` - ตรวจสอบความถูกต้องก่อนเริ่ม
- `/connect-workflows` - เชื่อมโยง workflows
