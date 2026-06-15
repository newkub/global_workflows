---
title: Improve Config
description: ปรับปรุงคุณภาพ configuration files ครบวงจร
auto_execution_mode: 3
related_workflows:
  - /follow-config
  - /follow-tasks
  - /check-configuration
  - /follow-monorepo
  - /follow-turborepo
  - /follow-moonrepo
---

## Goal

ปรับปรุงคุณภาพ configuration files ครบวงจรให้ถูกต้อง สอดคล้อง และเป็นมาตรฐาน

## Scope

ใช้สำหรับปรับปรุง configuration files ทั้งใน root workspace และ packages/apps ใน monorepo

## Execute

### 1. Analyze Current Configurations

ตรวจสอบและวิเคราะห์ configuration files ที่มีอยู่

1. อ่าน config files ทั้งหมดใน root (`biome.jsonc`, `tsconfig.json`, `turbo.json`, `lefthook.yml`, `.moon/workspace.yml`)
2. อ่าน config files ในทุก workspace ที่มี
3. ตรวจสอบ dependencies ใน `package.json` ทุก workspace
4. ระบุ tech stack ที่ใช้ (Bun, TypeScript, Biome, Turborepo, Drizzle, etc.)
5. ทำ `/analyze-all-files` เพื่อดูโครงสร้าง config files ทั้งหมด

### 2. Check Consistency

ตรวจสอบความสอดคล้องของ configuration files

1. เปรียบเทียบ config files ระหว่าง root และ workspaces
2. ตรวจสอบว่า workspace-specific config override เฉพาะที่จำเป็น
3. ตรวจสอบ path aliases ใน `tsconfig.json` ทั้งหมด
4. ตรวจสอบ linting rules สอดคล้องกัน
5. ตรวจสอบ scripts ใน `package.json` สอดคล้องกัน

### 3. Run Required Workflows

รัน workflows ที่จำเป็นเพื่อปรับปรุง configuration

1. ทำ `/read-related-workflows` สำหรับ config-related workflows
2. ทำ `/follow-config` เพื่อตั้งค่า configuration ตาม dependencies
3. ทำ `/follow-tasks` เพื่อตั้งค่า scripts ใน `package.json`
4. รัน workflows ตาม tech stack (เช่น `/follow-biome`, `/follow-turborepo`, `/follow-typescript`)
5. รัน workflows สำหรับ tools ที่มี (เช่น `/follow-lefthook`, `/follow-ast-grep`)

### 4. Fix Configuration Issues

แก้ไขปัญหาใน configuration files

1. แก้ไข TypeScript errors จาก config files
2. แก้ไข path aliases ที่ไม่ถูกต้อง
3. แก้ไข linting rules ที่ขัดแย้งกัน
4. แก้ไข scripts ที่ไม่ทำงาน
5. แก้ไข dependencies ที่ขาดหาย
6. แก้ไข environment variables ที่ไม่ถูกต้อง

### 5. Validate And Test

ตรวจสอบและทดสอบ configuration files

1. รัน `bun run verify` ใน root
2. รัน `bun run verify` ในทุก workspace
3. ตรวจสอบว่า config files ถูกต้อง
4. ตรวจสอบว่า scripts ทำงานได้
5. ตรวจสอบว่า linting ผ่าน
6. ตรวจสอบว่า typecheck ผ่าน

### 6. Update References

อัพเดท references ที่เกี่ยวข้อง

1. ทำ `/update-reference` หลังแก้ไข config files
2. อัพเดท documentation ที่เกี่ยวข้องกับ config
3. อัพเดท AGENTS.md ถ้าจำเป็น

### 7. Optimize For Monorepo

ปรับปรุง configuration สำหรับ monorepo ให้มีประสิทธิภาพสูงสุด

1. ทำตาม `/follow-monorepo` สำหรับ monorepo structure
2. ทำตาม `/follow-turborepo` หรือ `/follow-moonrepo` สำหรับ build system
3. ตรวจสอบ workspace protocol และ version conflicts
4. ตรวจสอบ circular dependencies ด้วย tools

## Rules

### 1. Foundation First

ตั้งค่า foundation ก่อนปรับปรุงส่วนอื่น

- ตรวจสอบ architecture และ dependencies ก่อน
- อัพเดท configuration files ให้ถูกต้อง
- แก้ไข issues ใน root config ก่อน
- แก้ไข issues ใน workspace config หลังจากนั้น

### 2. Consistency Across Workspaces

รักษาความสม่ำเสมอทั่ว monorepo

- Config files ใน root ควรเป็น base สำหรับทุก workspace
- Workspace-specific config ควร override เฉพาะที่จำเป็น
- Scripts ใน `package.json` ควรสอดคล้องกัน
- Linting rules ควรสอดคล้องกันทั่วทั้ง project
- Path aliases ควรสอดคล้องกัน

### 3. Minimal And Necessary

รันเฉพาะที่จำเป็น

- รันเฉพาะ workflows ที่เกี่ยวข้องกับ stack ที่ใช้
- ไม่รัน workflows ที่ไม่จำเป็น
- ตรวจสอบ dependencies ก่อนรัน workflows
- รัน workflows ตามลำดับที่เหมาะสม (foundation ก่อน)

### 4. Use References

ใช้ references แทนการเขียนซ้ำ

- ทำตาม workflows ที่ระบุใน Execute
- ใช้ config templates จาก global workflows
- อ้างอิงจาก best practices ของแต่ละ tool

### 5. Test Before Commit

ทดสอบก่อน commit

- รัน verify pipeline ก่อน commit
- ตรวจสอบว่าทุก workspace ผ่าน verify
- ตรวจสอบว่าไม่มี TypeScript errors
- ตรวจสอบว่าไม่มี linting errors

## Expected Outcome

- Configuration files ตั้งค่าถูกต้องตาม tech stack
- Config สอดคล้องกันทั่ว monorepo
- Scripts ใน `package.json` พร้อมใช้งาน
- Path aliases ถูกต้องและสอดคล้องกัน
- Linting rules สอดคล้องกัน
- Verify pipeline ผ่านทั้ง root และ workspaces
- TypeScript errors ลดลง
- Linting errors ลดลง
