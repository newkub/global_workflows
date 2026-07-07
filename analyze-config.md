---
title: Analyze Config
description: วิเคราะห์ config files, env vars, secrets exposure, config consistency, deployment configs
auto_execution_mode: 3
related_workflows:
  - /improve-config
  - /check-configuration
  - /check-vulnerability
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ configuration health ของ project เพื่อระบุ consistency issues และ security risks

## Scope

Config files, environment variables, secrets exposure, config consistency, deployment configs, config type safety, config documentation, monorepo config inheritance

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม config metrics ผ่าน scripts (env validation, config consistency, secret detection)

### 2. Check Config Files

1. ระบุ config files ทั้งหมดใน project (`.env`, `tsconfig.json`, `vite.config.ts`, etc.)
2. ระบุ config duplication ข้าม workspaces ใน monorepo
3. ระบุ config ที่ไม่ใช้แล้ว
4. ระบุ missing config files ที่ควรมี

### 3. Check Environment Variables

1. ระบุ env vars ที่ใช้ใน code แต่ไม่มีใน `.env.example`
2. ระบุ env vars ใน `.env.example` ที่ไม่ใช้ใน code แล้ว
3. ระบุ missing env validation ที่ startup
4. ระบุ missing config type safety
5. ระบุ env vars ที่ไม่มี default values

### 4. Check Secrets Exposure

1. ระบุ secrets ใน config files ที่ committed ลง version control
2. ระบุ `.env` files ที่ไม่อยู่ใน `.gitignore`
3. ระบุ secrets ใน logs หรือ error messages
4. ทำ `/check-vulnerability` เพื่อ scan secrets

### 5. Check Config Consistency

1. ระบุ `tsconfig.json` ที่ไม่ consistent ข้าม workspaces
2. ระบุ `biome.jsonc` ที่ไม่ consistent
3. ระบุ conflicting config ระหว่าง tools
4. ระบุ config inheritance ที่ไม่ชัดเจนใน monorepo

### 6. Check Deployment Configs

1. ระบุ missing deployment config files (Dockerfile, CI/CD, wrangler.toml)
2. ระบุ deployment configs ที่ไม่ match development configs
3. ระบุ missing environment-specific configs (dev, staging, prod)
4. ระบุ hardcoded values ที่ควรเป็น config

### 7. Check Config Documentation

1. ระบุ missing config documentation
2. ระบุ env vars ที่ไม่มี description
3. ระบุ missing setup guide สำหรับ new developers
4. ระบุ outdated config documentation

### 8. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม severity: secrets exposure → env validation → consistency → deployment → documentation

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม file, config key, และ severity

### 2. Security First

- Secrets exposure เป็น Critical เสมอ
- Missing env validation เป็น High
- Missing `.gitignore` สำหรับ `.env` เป็น Critical

### 3. Monorepo Awareness

- ตรวจสอบ config inheritance จาก root ไปยัง workspaces
- ระบุ workspace-specific configs ที่ขัดกับ root config

## Expected Outcome

- Config issues ระบุพร้อม file, key, และ severity
- พร้อมสำหรับ `/improve-config` หรือ `/check-configuration`
