---
description: แนวทางการพัฒนา monorepo ด้วย Moonrepo
title: Moonrepo Best Practices
auto_execution_mode: 3
---

## Goal

กำหนดแนวทางการพัฒนา monorepo ด้วย Moonrepo ให้มีประสิทธิภาพสูงสุด

## Execute

### 1. Setup

1. ติดตั้ง Moonrepo ด้วย `bun add -d @moonrepo/cli`
2. Initialize monorepo ด้วย `moon init -y`
3. สร้าง `.moon/` directory สำหรับ configuration
4. สร้าง `workspace.yml` สำหรับ workspace configuration
5. สร้าง `.moon/tasks/` directory สำหรับ task definitions
6. สร้าง `toolchains.yml` สำหรับ language versions

### 2. Configuration

1. กำหนด projects ใน `moon.yml` ของแต่ละ project
2. ตั้งค่า `workspace.yml` สำหรับ global settings
3. กำหนด tasks ใน `.moon/tasks/all.yml` สำหรับ reusable tasks
4. ตั้งค่า toolchains ใน `.moon/toolchains.yml`
5. กำหนด dependencies และ task dependencies
6. ตั้งค่า MCP integration สำหรับ Windsurf
7. ตั้งค่า VS Code integration ด้วย `sync: true`
8. ใช้ schema จาก local cache ใน configuration files:
   - `all.yml`: `$schema: './cache/schemas/tasks.json'`
   - `toolchains.yml`: `$schema: './cache/schemas/toolchain.json'`
   - `workspace.yml`: `$schema: './cache/schemas/workspace.json'`
9. สร้าง `.moon/tasks/all.yml` โดยให้ `/tasks`

### 3. Project Configuration

1. ใช้ `moon.yml` สำหรับ project metadata
2. กำหนด `layer` สำหรับ project type (application, library, tool, automation, configuration, scaffolding)
3. กำหนด `stack` สำหรับ technology stack (backend, frontend, data, infrastructure, systems)
4. ตั้งค่า `project` metadata:
   - `title`: ชื่อที่อ่านง่าย
   - `description`: รายละเอียดเกี่ยวกับ project
   - `channel`: Slack/Discord channel สำหรับการอภิปราย
   - `owner`: team หรือ organization ที่เป็นเจ้าของ
   - `maintainers`: รายชื่อผู้ดูแล
5. กำหนด `tags` สำหรับ categorization และ grouping
6. ตั้งค่า `env` สำหรับ environment variables ของ tasks
7. กำหนด `fileGroups` สำหรับ grouping files ที่ใช้ใน tasks
8. ตั้งค่า project dependencies ใน `dependsOn`
9. ใช้ task inheritance จาก `.moon/tasks/all.yml`

### 4. Tasks

1. กำหนด tasks ใน `.moon/tasks/all.yml` สำหรับ reusability
2. ใช้ `moon run <project>:<task>` สำหรับ execution
3. ตั้งค่า task dependencies ด้วย `dependsOn`
4. ใช้ environment variables สำหรับ configuration
5. ใช้ `--affected` flag สำหรับ affected projects
6. กำหนด cache ให้เหมาะสมสำหรับแต่ละ task type

Example task configuration ใน `.moon/tasks/all.yml`:

```yml
tasks:
  versionCheck:
    command: 'yarn version check'
    inputs: []
    options:
      cache: false
```

**กำหนด cache ให้เหมาะสม:**
- **cache: false** - สำหรับ tasks ที่ต้องตรวจสอบข้อมูลล่าสุดเสมอ (version check, security audit)
- **cache: true** - สำหรับ tasks ที่มี deterministic output (build, compile, test)
- **cache: false** - สำหรับ tasks ที่มี side effects (publish, deploy)

### 5. Caching

1. ใช้ smart hashing สำหรับ deterministic builds
2. ตั้งค่า remote caching ด้วย Bazel RE API
3. ใช้ incremental builds สำหรับ performance
4. ตรวจสอบ cache hit/miss ด้วย `moon run <task> --dry-run`

### 6. Toolchain

1. ตั้งค่า Node.js version ใน `.moon/toolchains.yml`
2. ตั้งค่า Bun version สำหรับ runtime
3. กำหนด Rust version สำหรับ polyglot projects
4. ใช้ proto สำหรับ multi-language version management
5. ตรวจสอบ toolchain versions ด้วย `moon check`

### 7. GitHub Actions CI

1. สร้าง `.github/workflows/ci.yml` สำหรับ CI/CD pipeline
2. ใช้ Bun สำหรับ dependency installation
3. ตั้งค่า matrix สำหรับ multiple OS และ Node.js versions
4. ใช้ `moonrepo/run-report-action@v1` สำหรับ reporting

Example `.github/workflows/ci.yml`:

```yml
name: 'Pipeline'
on:
  push:
    branches:
      - 'master'
  pull_request:
jobs:
  ci:
    name: 'CI'
    runs-on: 'ubuntu-latest'
    steps:
      # Checkout repository
      - uses: 'actions/checkout@v4'
        with:
          fetch-depth: 0
      # Install Node.js
      - uses: 'actions/setup-node@v6'
      # Install dependencies
      - run: 'bun install'
      # Run moon and affected tasks
      - run: 'bun moon ci'
      - uses: 'moonrepo/run-report-action@v1'
        if: success() || failure()
        with:
          access-token: ${{ secrets.GITHUB_TOKEN }}
```

### 8. Git Configuration

1. เพิ่ม `.moon/cache/` ใน `.gitignore`
2. เพิ่ม `run/` ใน `.gitignore`
3. กำหนด VCS hooks ใน `.moon/workspace.*`
4. ตั้งค่า `vcs.sync: true` สำหรับ automatic sync

## Rules

### 1. Configuration Files

กำหนด configuration files ที่จำเป็นสำหรับ Moonrepo
- ต้องมี `.moon/` directory ที่ root ของ monorepo
- ทุก projects ต้องมี `moon.yml` สำหรับ metadata
- สร้าง `.moon/tasks/all.yml` สำหรับ reusable tasks
- สร้าง `workspace.yml` สำหรับ global settings
- สร้าง `toolchains.yml` สำหรับ language versions
- ดู directory structure ตาม `/monorepo`

### 2. Task Synchronization

ให้แต่ละ `moon.yml` ใน workspace มี tasks เท่ากับและตรงกับ `.moon/tasks/all.yml`
- กำหนด tasks ใน `.moon/tasks/all.yml` สำหรับ reusability
- ใช้ task inheritance ในแต่ละ project
- ให้ tasks ตรงกับ scripts ตาม `/package-manifest`
- ใช้ `moon run <project>:<task>` สำหรับ task execution
- ตรวจสอบ task dependencies อย่างถูกต้อง

### 3. VCS Hooks Configuration

ใช้เฉพาะ hooks ที่จำเป็นเพื่อ performance
- `pre-commit` - lint, format (use `--affected --status=staged`)
- `pre-push` - typecheck, test (use `--affected`)

Example `vcs.hooks` configuration in `.moon/workspace.yml`:

```yml
vcs:
  defaultBranch: 'main'
  sync: true
  hooks:
    pre-commit:
      - 'moon run :lint :format --affected --status=staged'
    pre-push:
      - 'moon run :typecheck :test --affected'
```

### 4. Installation

ติดตั้งและตั้งค่า Moonrepo
- ใช้ `bun add -d @moonrepo/cli` สำหรับ installation
- Initialize ด้วย `moon init`
- ตรวจสอบ configuration ด้วย `moon check`

## Expected Outcome

- Moonrepo configuration ที่สมบูรณ์
- Task orchestration ที่ automatic และ efficient
- Caching ที่ทำงานได้อย่างมีประสิทธิภาพ
- Toolchain consistency ทั่วทั้ง team
- Build times ที่ลดลงอย่างมีนัยสำคัญ

