---
title: Monorepo
description: Implement Monorepo Architecture for large-scale projects with multiple packages or applications
auto_execution_mode: 3
---

## Goal

สร้าง Monorepo Architecture สำหรับโปรเจกต์ขนาดใหญ่ที่มีหลาย packages หรือ applications

## Scope

ใช้สำหรับโปรเจกต์ขนาดใหญ่ที่มีหลาย packages หรือ applications ที่ต้องการ shared code และ coordinated development

## Execute

### 1. Analyze Requirements

วิเคราะห์ความต้องการ monorepo และเลือก tool ที่เหมาะสม

1. ระบุจำนวน apps และ packages
2. ระบุ dependencies ระหว่าง packages
3. เลือก build system (`Turborepo` สำหรับ React/Next.js, `Moonrepo` สำหรับ multi-language)
4. ระบุ deployment strategy และขนาดทีม

### 2. Setup Monorepo

ตั้งค่า monorepo ด้วย tool ที่เลือก

1. ทำ `/turborepo` หรือ `/moonrepo` สำหรับ tool setup
2. แยก packages ตาม concerns และระบุ dependencies
3. ตั้งค่า workspace protocol (`workspace:*`) และ shared configs
4. ทำ `/refactor` หลังเสร็จสิ้น

## Rules

### 1. Monorepo Organization

ใช้สำหรับ large-scale projects ที่มีหลาย packages หรือ applications

- `apps/` สำหรับ deployable applications
- `packages/` สำหรับ shared libraries (TypeScript/JavaScript)
- `crates/` สำหรับ Rust packages (optional)
- แยก packages/crates ตาม concerns
- ระบุ dependencies ระหว่าง packages/crates อย่างชัดเจน
- ใช้ workspace protocol (`workspace:*`) สำหรับ internal deps

### 2. Apps Structure

โครงสร้างของ applications ใน monorepo

- `web/` - web application (`Next.js`, `Nuxt`, `Vite`)
- `admin/` - admin panel (`Next.js`, `Nuxt`, `Vite`)
- `cli/` - CLI tool (`Bun`, `Node`)
- `desktop/` - desktop application (`Electron`, `Tauri`)
- `browser-extensions/` - browser extensions (`Chrome`, `Firefox`)
- `mobile/` - mobile application (`React Native`)
- แต่ละ app มี `package.json` และ config ของตัวเอง
- ใช้ shared packages จาก `packages/`
- ทำตาม best practices ของ framework แต่ละตัว

### 3. Packages Structure

โครงสร้างของ shared packages ใน monorepo

- `shared/` - shared libraries (required)
  - `ui/` - shared UI components (required)
  - `utils/` - shared utility functions (required)
- `<domain>/` - domain-specific packages
  - `auth/` - authentication logic
  - `billing/` - billing logic
  - `...` - other domain packages
- แต่ละ package มี `package.json` และ exports
- Packages สามารถ depend กันได้
- หลีกเลี่ยง circular dependencies
- ใช้ `exports` field สำหรับ clear API

### 4. Crates Structure

โครงสร้างของ Rust crates ใน monorepo (optional)

- `<domain>/` - domain-specific crates
  - `auth/` - authentication logic
  - `...` - other domain crates
- แต่ละ crate มี `Cargo.toml` และ exports
- Crates สามารถ depend กันได้
- หลีกเลี่ยง circular dependencies
- ใช้ `workspace` dependencies

### 5. Dependencies Management

จัดการ dependencies ระหว่าง packages และ crates

- ระบุ dependencies ระหว่าง packages/crates อย่างชัดเจน
- ใช้ workspace protocol สำหรับ internal dependencies
- หลีกเลี่ยง circular dependencies
- Workspace-level lockfile
- ใช้ `bunx taze` สำหรับ dependency updates
- Pin versions สำหรับ production
- ใช้ `overrides` สำหรับ conflict resolution

### 6. Build System Configuration

ตั้งค่า build system สำหรับ monorepo

- ใช้ `Turborepo` สำหรับ caching และ task orchestration
- ใช้ `Moonrepo` สำหรับ multi-language support
- ตั้งค่า `turbo.json` หรือ `moon.yml` อย่างเหมาะสม
- ระบุ task dependencies ด้วย `dependsOn`
- ใช้ `outputs` สำหรับ cache invalidation
- ตั้งค่า `pipeline` สำหรับ task execution

### 7. Shared Configuration

ตั้งค่า shared configs สำหรับทั้ง monorepo

- Root-level `tsconfig.json` with `composite: true`
- Shared `biome.jsonc` for linting/formatting
- Shared `knip.json` for unused code detection
- Shared `lefthook.yml` for git hooks
- Use `extends` in workspace configs
- Keep tool versions consistent

## Expected Outcome

- โครงสร้าง monorepo ชัดเจนพร้อมการแยกส่วนที่เหมาะสม
- Apps และ packages จัดระเบียบตาม concerns
- Dependencies ระหว่าง packages ชัดเจน
- Build system มีประสิทธิภาพพร้อม caching
- Shared configuration ทั่วทั้ง workspaces
- Code สามารถทดสอบและบำรุงรักษาได้ง่าย
- Architecture ที่ scalable สำหรับการเติบโตของทีม

