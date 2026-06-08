---
description: Setup Renovate สำหรับ auto update dependencies
title: Setup Renovate
auto_execution_mode: 3
---

## Goal

ตั้งค่า Renovate เพื่ออัปเดต dependencies อัตโนมัติผ่าน GitHub Actions

## Scope

สำหรับโปรเจกต์ที่ใช้ GitHub และต้องการจัดการ dependencies อัตโนมัติ

## Execute

### 1. Setup Renovate Config

1. สร้างไฟล์ `.github/renovate.json` ด้วย config พื้นฐาน
2. ตั้งค่า schedule และ automerge rules
3. ตั้งค่า extends สำหรับ base config และ biome versions

```json [.github/renovate.json]
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": ["config:base", "config:recommended", "customManagers:biomeVersions"],
  "schedule": ["every day"],
  "packageRules": [
    {
      "matchDepTypes": ["dependencies", "devDependencies"],
      "automerge": true
    }
  ]
}
```

### 2. Setup GitHub Actions Workflow

1. สร้างไฟล์ `.github/workflows/renovate.yml`
2. ตั้งค่า schedule และ triggers
3. ตั้งค่า permissions สำหรับ contents, pull-requests, issues
4. เพิ่ม steps: checkout, setup bun, install dependencies, run renovate

```yaml [.github/workflows/renovate.yml]
name: Renovate

on:
  schedule:
    - cron: "0 2 * * *" # Every day at 2 AM UTC
  workflow_dispatch:
  push:
    branches: [main, master]
    paths:
      - ".github/renovate.json"
      - ".github/renovate.json5"
      - ".github/renovate.yml"
      - ".github/renovate.yaml"

jobs:
  renovate:
    runs-on: ubuntu-latest
    timeout-minutes: 30

    permissions:
      contents: write
      pull-requests: write
      issues: write

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Bun
        uses: oven-sh/setup-bun@v1
        with:
          bun-version: latest

      - name: Install dependencies
        run: bun install --frozen-lockfile

      - name: Run Renovate
        uses: renovatebot/github-action@v39.2.4
        with:
          configurationFile: .github/renovate.json
          token: ${{ secrets.RENOVATE_TOKEN }}
        env:
          LOG_LEVEL: info
          RENOVATE_PLATFORM: github
          RENOVATE_AUTODISCOVER: "true"
          RENOVATE_AUTODISCOVER_FILTER: "newkub/*"
```

### 3. Setup RENOVATE_TOKEN

1. สร้าง GitHub Personal Access Token ด้วย `repo` scope
2. ตั้งค่า secret ใน repository ผ่าน GitHub CLI: `gh secret set RENOVATE_TOKEN`
3. ตรวจสอบว่า workflow สามารถ access secret ได้

## Rules

### 1. Renovate Config

- ใช้ `config:base` และ `config:recommended` เป็น base config
- เพิ่ม `customManagers:biomeVersions` สำหรับ Biome
- ตั้งค่า `schedule: ["every day"]` สำหรับรันทุกวัน
- ตั้งค่า `automerge: true` สำหรับ dependencies และ devDependencies

### 2. GitHub Actions Workflow

- ใช้ `cron: "0 2 * * *"` สำหรับรันทุกวันเวลา 2 AM UTC
- เพิ่ม `workflow_dispatch` สำหรับ manual trigger
- เพิ่ม `push` trigger เมื่อ renovate config เปลี่ยน
- ตั้งค่า permissions: contents write, pull-requests write, issues write
- ใช้ `renovatebot/github-action@v39.2.4`
- ตั้งค่า `RENOVATE_AUTODISCOVER: "true"` และ `RENOVATE_AUTODISCOVER_FILTER`

### 3. Token Management

- ใช้ GitHub Personal Access Token ด้วย `repo` scope
- ตั้งค่า secret ผ่าน GitHub CLI: `gh secret set RENOVATE_TOKEN -b "token"`
- ตรวจสอบ secret ผ่าน `gh secret list`

## Expected Outcome

- Renovate รันทุกวันเวลา 2 AM UTC หรือ manual trigger
- Dependencies อัปเดตอัตโนมัติและ auto merge
- PRs สร้างขึ้นสำหรับ dependency updates
- Lock files อัปเดตอัตโนมัติ

## Common Mistakes

- ไม่ตั้งค่า RENOVATE_TOKEN ทำให้ workflow fail
- ใช้ scope ไม่เพียงพอ (ต้องใช้ `repo` สำหรับ private repos)
- ไม่ตั้งค่า permissions ใน workflow ทำให้ไม่สามารถสร้าง PR ได้
