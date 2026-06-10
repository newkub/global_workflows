---
title: Build Cloudflare Worker
description: Setup build แบบ auto ง่ายที่สุด และ build จนกว่าจะผ่าน
auto_execution_mode: 3
related_workflows:
  - /follow-cloudflare-worker
  - /follow-wrangler-cli
  - /run-build
---

## Goal

Setup build แบบ auto ง่ายที่สุด สำหรับ Cloudflare Workers และ build จนกว่าจะผ่าน

## Execute

### 1. Setup And Configure

ตั้งค่า Wrangler และ dependencies

1. รัน `bunx wrangler deploy` โดยไม่ต้องมี config file (Wrangler 4.55+)
2. Wrangler auto-detect framework จาก `package.json` และสร้าง `wrangler.jsonc`
3. ยืนยัน auto-detected settings หรือใช้ `bunx wrangler setup` สำหรับ configure โดยไม่ deploy
4. รัน `bun install` และติดตั้ง `wrangler`, `@cloudflare/workers-types`, `@cloudflare/vitest-pool-workers`
5. เพิ่ม scripts ลง `package.json`: `build`, `build:local`, `typecheck`, `types`, `dev`, `test`
6. รัน `bun run types` เพื่อ generate `worker-configuration.d.ts`

### 2. Typecheck And Build

ตรวจสอบ types และ build

1. รัน `bun run typecheck` และแก้ไข errors จนผ่าน
2. รัน `bun run build` หรือ `bun run build:local`
3. ตรวจสอบ build artifacts และ bundle size (limit 1 MB)
4. แก้ไข build errors จนผ่าน โดยวิเคราะห์และรัน build ซ้ำ

### 3. Setup Staging Environment

ตั้งค่า staging environment และ D1 databases

1. เพิ่ม staging environment ใน `wrangler.toml`:
   ```toml
   [env.staging]
   name = "project-name-staging"
   [[env.staging.d1_databases]]
   binding = "DB"
   database_name = "project-name-staging"
   database_id = "REPLACE_ME_STAGING"
   ```
2. สร้าง D1 databases:
   ```bash
   wrangler d1 create project-name
   wrangler d1 create project-name-staging
   ```
3. อัปเดท `database_id` ใน `wrangler.toml` ด้วย IDs ที่ได้
4. รัน migrations บนทั้งสอง databases:
   ```bash
   wrangler d1 execute project-name --file=./drizzle/0000_*.sql
   wrangler d1 execute project-name-staging --file=./drizzle/0000_*.sql
   ```

### 4. Deploy Staging First

Deploy ไป staging เพื่อทดสอบก่อน

1. รัน `wrangler deploy --env staging --dry-run`
2. ตรวจสอบ staging configuration
3. Deploy staging: `wrangler deploy --env staging`
4. Test staging environment ด้วย curl หรือ browser
5. แก้ไข issues ถ้ามี

### 5. Deploy Production

Deploy ไป production เมื่อ staging ผ่าน

1. รัน `wrangler deploy --dry-run`
2. ตรวจสอบ production configuration
3. Deploy production: `wrangler deploy`
4. Test production environment
5. Verify staging และ production ทำงานแยกกัน

## Rules

### 1. Configuration

- ตั้งค่า `compatibility_date` เป็นวันปัจจุบันเสมอ
- เปิดใช้งาน `nodejs_compat` flag สำหรับ Node.js modules
- ใช้ `wrangler types` generate `Env` interface ไม่ hand-write
- Re-run `wrangler types` เมื่อ add หรือ rename bindings

### 2. Secrets And Observability

- ใช้ `wrangler secret put` สำหรับ secrets ไม่ hardcode
- ใช้ `vars` สำหรับ non-secret variables
- เปิดใช้งาน `observability.enabled` ใน config
- ตั้งค่า `head_sampling_rate` สำหรับ logs และ traces
- ใช้ structured JSON logging ด้วย `console.log`, `console.error`, `console.warn`

### 3. Build Process

- Typecheck ล้มเหลว: แก้ไขก่อน build
- Build ล้มเหลว: วิเคราะห์และแก้ไข
- ทำซ้ำจนกว่าจะผ่าน
- Optimize bundle ถ้าเกิน 1 MB limit

## Expected Outcome

- Wrangler config ตั้งค่าแบบ auto สำเร็จ
- Build script พร้อมใช้งาน
- Binding types generate อัตโนมัติ
- Typecheck ผ่านทั้งหมด
- Build สำเร็จไม่มี errors
- Bundle size อยู่ใน limit
- Dry-run deploy ผ่าน
- Observability เปิดใช้งาน
