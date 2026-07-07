---
title: Follow Workspace
description: ตั้งค่า workspace ให้ทำตาม /follow-tasks และ /update-readme
auto_execution_mode: 3
related_workflows:
  - /follow-tasks
  - /update-readme
  - /write-global-workflows
---

## Goal

ตั้งค่า workspace ใน monorepo ให้ทำตาม `/follow-tasks` และ `/update-readme` ด้วย `/write-global-workflows`

## Scope

ครอบคลุมการตั้งค่า workspace ทั้ง root และ workspaces ใน monorepo

## Execute

### 1. Setup Root Workspace

ตั้งค่า workspace ที่ root ของ monorepo

1. ทำ `/follow-tasks` เพื่อตั้งค่า scripts ใน `package.json` หรือ `Cargo.toml`
2. ทำ `/update-readme` เพื่อสร้าง `README.md` ที่มีเนื้อหาครบถ้วน
3. ตรวจสอบว่า scripts และ documentation สอดคล้องกับ tech stack

### 2. Setup Individual Workspaces

ตั้งค่าทุก workspace ใน monorepo

1. ทำ `/all-workspaces` เพื่อดู workspaces ทั้งหมด
2. สำหรับแต่ละ workspace:
   - ทำ `/follow-tasks` เพื่อตั้งค่า scripts
   - ทำ `/update-readme` เพื่อสร้าง `README.md`
3. ตรวจสอบ consistency ระหว่าง workspaces

### 3. Validate Configuration

ตรวจสอบว่า configuration ถูกต้องครบถ้วน

1. รัน `bun run verify` ที่ root workspace
2. รัน `bun run verify` ที่แต่ละ workspace
3. ตรวจสอบว่า `README.md` มีเนื้อหาครบถ้วน ไม่มี placeholder
4. ตรวจสอบว่า scripts ทำงานได้จริง

## Rules

### 1. Workspace Structure

จัดโครงสร้าง workspace ตามมาตรฐาน monorepo

- ใช้ `apps/` สำหรับ applications
- ใช้ `packages/` สำหรับ shared packages
- ใช้ workspace references ด้วย `#` prefix
- รักษา consistency ระหว่าง workspaces

### 2. Scripts Configuration

ตั้งค่า scripts ตาม `/follow-tasks`

- เลือกระดับ scripts ตามขนาดโปรเจกต์ (Minimal, Standard, Complete)
- ใช้ scripts ที่สอดคล้องกับ tech stack
- รักษา consistency ระหว่าง workspaces
- ตรวจสอบว่า `verify` script ทำงานได้

### 3. Documentation Standards

สร้าง documentation ตาม `/update-readme`

- ใช้ข้อมูลจริงจากการวิเคราะห์โปรเจกต์
- ไม่ใช้ placeholder ยกเว้น banner image
- ครอบคลุมทุก sections ที่จำเป็น
- ใช้ format ที่สม่ำเสมอ

### 4. Consistency Across Workspaces

รักษา consistency ระหว่าง workspaces

- ใช้ tech stack เดียวกันทั่วทั้ง monorepo
- ใช้ scripts ที่สอดคล้องกัน
- ใช้ documentation format เดียวกัน
- รักษา naming conventions เดียวกัน

## Expected Outcome

- Root workspace มี scripts และ documentation ครบถ้วน
- ทุก workspace มี scripts และ documentation ครบถ้วน
- Scripts ทำงานได้จริงทุก workspace
- Documentation ไม่มี placeholder
- Consistency ระหว่าง workspaces

