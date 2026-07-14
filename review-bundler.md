---
title: Review Bundler
description: Review bundler/build tool config ครอบคลุม chunk splitting, tree shaking, minification, source maps, plugins
auto_execution_mode: 3
related:
  - /scan-codebase
  - /deep-analyze-codebase
  - /update-rules
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
  - /review-performance
  - /review-config-files
  - /review-assets
  - /review-techstack
---

## Goal

Review bundler และ build tool configuration ครอบคลุม chunk splitting, tree shaking, minification, source maps, build scripts, plugins และ build performance พร้อมสร้างรายงานตารางและ health score

## Scope

bundler/build tool configuration ที่ยังไม่ถูกครอบคลุมโดย review workflows เฉพาะทาง:

- bundler configuration: Vite, esbuild, bunup, Rolldown, Rollup, Webpack
- chunk splitting strategy: manual chunks, dynamic imports, vendor splitting
- tree shaking และ dead code elimination effectiveness
- minification, compression และ output optimization
- source maps: production source maps, debug info, source map exposure
- build scripts: build commands, watch mode, env-specific builds, SPA vs SSR builds
- plugin configuration: plugin ordering, plugin compatibility, custom plugins
- build performance: build speed, cache utilization, parallel processing, incremental builds
- build warnings และ deprecated options
- ไม่ซ้ำกับ `/review-performance` สำหรับ runtime performance, Core Web Vitals, rendering
- ไม่ซ้ำกับ `/review-config-files` สำหรับ tsconfig, biome config, config consistency
- ไม่ซ้ำกับ `/review-assets` สำหรับ image optimization, font loading, CDN
- ไม่ซ้ำกับ `/review-techstack` สำหรับ framework selection, library versions, runtime compatibility
- ถ้าพบ issues ในหมวดนั้น ให้ส่งต่อไปยัง review workflow นั้น

## Execute

### 1. Prepare

สแกน codebase เพื่อเข้าใจ bundler configuration และ build setup

1. ทำ `/scan-codebase` เพื่อเข้าใจ project structure, bundler tools และ build configs
2. ระบุ bundler (Vite, esbuild, bunup, Rolldown, Rollup, Webpack), build scripts และ plugin setup
3. ถ้าสแกนไม่ได้ → stop และ report

### 2. Deep Analyze

วิเคราะห์ bundler configuration อย่างลึกซึ้งด้วย scripts

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-bundler.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ bundler configuration: Vite config, esbuild options, bunup config, build mode (SSR/SPA), target settings
3. Script ตรวจสอบ chunk splitting: manual chunks, dynamic imports, vendor splitting, shared chunks และ duplicate dependencies
4. Script ตรวจสอบ tree shaking: side effects in `package.json`, unused exports, dead code elimination effectiveness
5. Script ตรวจสอบ minification และ compression: minifier settings, gzip/brotli, output size analysis
6. Script ตรวจสอบ source maps: production source map config, source map exposure risk, debug info
7. Script ตรวจสอบ build scripts: build commands, watch mode, env-specific builds, build script consistency
8. Script ตรวจสอบ plugin configuration: plugin ordering, plugin compatibility, custom plugin quality
9. Script ตรวจสอบ build performance: build speed, cache utilization, parallel processing, incremental builds
10. Script ตรวจสอบ build warnings, deprecated options และ compatibility issues
11. Script คำนวณ bundler health score และ output เป็น structured JSON
12. ทำ `/update-rules` เพื่ออัปเดต `rules/` สำหรับ bundler patterns ที่พบ

### 3. Validate Findings

ตรวจสอบความถูกต้องของ findings ก่อน report

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity: Critical → High → Medium → Low
3. ระบุ false positives ที่พบ
4. ถ้า validation ไม่ผ่าน → กลับไปแก้ที่ Step 2

### 4. Report

สร้างรายงานผลการ review ในแชท

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง **Bundler Metrics Summary**: 8 metrics พร้อม count, threshold, status
3. สร้างตาราง **Findings by Category**: Category, Finding, Severity, Location, Recommendation
4. สร้างตาราง **Recommended Actions**: Priority, Action, Impact, Effort, Workflow
5. แสดง bundler health score พร้อม progress bar และ grade
6. ทำ `/suggest-next-action` เพื่อแนะนำ action ถัดไป

## Rules

### 1. Severity Classification

- **Critical**: production source maps exposed, broken build config, missing minification in production, security risk from source map exposure
- **High**: missing chunk splitting for large vendor, no tree shaking (side effects not configured), deprecated build options, slow build blocking CI
- **Medium**: suboptimal chunk strategy, missing gzip/brotli, inconsistent build scripts across workspaces, plugin ordering issue
- **Low**: minor config improvement, missing build cache, cosmetic build warning

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number
- ไม่เดา ใช้ tools สำหรับ verification (`ast-grep`, `grep`, script analysis, build output analysis)
- ระบุ bundler pattern ที่พบ และ recommended fix ที่ชัดเจน
- ระบุ false positives ที่พบ

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review
- แยก review process จาก fix process
- ถ้าต้องแก้ไข ให้ทำ `/fix` หลัง review

### 4. Health Score Formula

- 8 metrics หลัก:
  1. Bundler Configuration Quality
  2. Chunk Splitting & Code Splitting
  3. Tree Shaking & Dead Code Elimination
  4. Minification & Compression
  5. Source Maps & Debug Info
  6. Build Scripts & Environment Builds
  7. Plugin Configuration & Compatibility
  8. Build Performance & Cache Utilization
- คะแนนต่อ metric: ✅ = 1, ⚠️ = 0.5, ❌ = 0
- Health score = (total score / 8) × 100%
- Grade: A (90+), B (80+), C (70+), D (60+), F (<60)

### 5. Scope Boundaries

- ไม่ซ้ำกับ `/review-performance` สำหรับ runtime performance, Core Web Vitals, rendering bottlenecks
- ไม่ซ้ำกับ `/review-config-files` สำหรับ tsconfig, biome config, config consistency
- ไม่ซ้ำกับ `/review-assets` สำหรับ image optimization, font loading, CDN, asset bundling
- ไม่ซ้ำกับ `/review-techstack` สำหรับ framework selection, library versions, runtime compatibility
- ถ้าพบ issues ในหมวดเหล่านั้น ให้ส่งต่อไปยัง review workflow นั้น

## Expected Outcome

- รายงานตาราง **Bundler Metrics Summary** พร้อม status indicators
- รายงาน **Findings by Category** พร้อม severity และ location
- รายงาน **Recommended Actions** พร้อม priority และ workflow
- Bundler health score พร้อม grade และ progress bar
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
