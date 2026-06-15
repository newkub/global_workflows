---
title: Use Lib Better
description: วิเคราะห์ dependencies ปัจจุบัน, ตรวจสอบ unused/duplicates, และแนะนำ alternatives ที่ดีกว่า
auto_execution_mode: 3

related_workflows:
  - /follow-my-tech-stack
  - /check-unused-deps
  - /check-vulnerability
  - /check-duplication
  - /deep-research
  - /search-github-star
  - /search-raindrop
  - /analyze-project
---

## Goal

วิเคราะห์ dependencies ปัจจุบัน, ตรวจสอบ unused/duplicates, security vulnerabilities, และแนะนำ alternatives ที่ดีกว่า

## Execute

### 1. Analyze Current Stack

1. ทำ `/follow-my-tech-stack` เพื่อดู tech stack ทั้งหมด
2. อ่าน `package.json` หรือ manifest ที่เกี่ยวข้อง
3. จัดกลุ่ม dependencies ตาม category (framework, ui, database, testing, tooling)
4. ระบุ version ปัจจุบันของแต่ละ package

### 2. Identify Issues

1. รัน `depcheck` เพื่อหา unused dependencies
2. ตรวจสอบ duplicate packages และ conflicts
3. ตรวจสอบ outdated packages ด้วย `taze` หรือ `npm outdated`
4. ตรวจสอบ security vulnerabilities ด้วย `bun audit` หรือ `npm audit`
5. ตรวจสอบ peer dependency warnings

### 3. Analyze Usage

1. ค้นหา imports ของแต่ละ package ใน codebase ด้วย `Grep`
2. ตรวจสอบ configuration files และ scripts ที่เกี่ยวข้อง
3. ระบุ packages ที่สามารถ replace ด้วย alternatives ที่ดีกว่า

### 4. Research Alternatives

1. ใช้ `/deep-research` เพื่อค้นหา dependencies ทางเลือกที่ดีกว่า
2. ค้นหาใน package registries (npmjs.com, crates.io, PyPI, pkg.go.dev)
3. ใช้ comparison tools (Bundlephobia, npm trends, Libraries.io)
4. ดู GitHub repositories (stars, forks, issues, release frequency)
5. ตรวจสอบ benchmarks และ community adoption

### 5. Evaluate Candidates

1. ให้คะแนนแต่ละ candidate ตามเกณฑ์ (1-5 points):
   - **Modern**: ใช้ latest standards, APIs, patterns
   - **Type Safety**: มี TypeScript definitions หรือ built-in types ที่ดี
   - **Performance**: Benchmarks ดีกว่าหรือเทียบเท่า
   - **DX**: API ใช้งานง่าย, documentation ดี, error messages ชัดเจน
   - **Maintenance**: Active development, responsive maintainers, security updates
   - **Bundle Size**: เล็กกว่าหรือเท่ากับปัจจุบัน
   - **Dependencies**: น้อยกว่าหรือเท่ากับปัจจุบัน
2. คำนวณ Total Score (สูงสุด 35 points)
3. ประเมิน Migration Effort และ Risk Level (Low/Medium/High)

### 6. Plan and Prioritize

1. จัดลำดับตาม Priority Matrix:
   - **High Priority**: Score >= 25, Effort: Low, Risk: Low
   - **Medium Priority**: Score 20-24, Effort: Medium, Risk: Medium
   - **Low Priority**: Score < 20, Effort: High, Risk: High
2. เขียน migration plan สำหรับแต่ละ dependency
3. ระบุ risks และ mitigation strategies

### 7. Execute Changes

1. ลบ unused dependencies ด้วย `bun remove`
2. อัพเกรด outdated packages ด้วย `bun add`
3. แก้ไข configuration files ที่เกี่ยวข้อง
4. รัน tests และ lint เพื่อ verify
5. ทำ commit และ document changes

## Rules

### 1. Dependency Categories

จัดกลุ่ม dependencies ตาม category:

- **Framework**: `solid-js`, `@solidjs/start`, `vinxi`, `vite`
- **UI Components**: `@kobalte/core`, `clsx`, `tailwind-merge`, `unocss`
- **Database**: `drizzle-orm`, `drizzle-kit`
- **Validation**: `zod`
- **Authentication**: `@workos-inc/node`, `argon2`, `otplib`
- **Email**: `nodemailer`, `resend`
- **Testing**: `vitest`, `@playwright/test`, `happy-dom`
- **Tooling**: `@biomejs/biome`, `lefthook`, `depcheck`

### 2. Issue Detection

ตรวจสอบปัญหา dependencies:

- ตรวจสอบ packages ที่มี functionality ซ้ำกันหรือ version conflicts
- ใช้ `Grep` หรือ `find` เพื่อค้นหา imports และ verify usage
- ตรวจสอบ configuration files, scripts, และ type definitions
- จัดลำดับความสำคัญ: High (unused, duplicates, security), Medium (outdated), Low (optimization)

### 3. Evaluation Criteria

ประเมินตามเกณฑ์ Type Safety, Performance, DX, Maintenance, Bundle Size, Dependencies, และ Migration Cost ด้วย scoring system 1-5 points

### 4. Safety Measures

- ทำ backup ก่อนลบ packages
- รัน tests หลังการเปลี่ยนแปลง
- ตรวจสอบ breaking changes ก่อนอัพเกรด
- Document ทุกการเปลี่ยนแปลง
- เปรียบเทียบ apples-to-apples ด้วยล่าสุด version
- พิจารณา long-term support, stability, และ license compatibility

## Expected Outcome

- Dependencies ที่ clean และ optimized
- ไม่มี unused หรือ duplicate packages
- Security vulnerabilities ถูกแก้ไข
- Bundle size ลดลง
- Scoring system ชัดเจน (Total Score 1-35 points)
- Priority Matrix สำหรับการจัดลำดับ (High/Medium/Low)
- Migration plan ที่ realistic และ prioritized
- Documentation ครบถ้วน

## Anti-Patterns

รูปแบบที่ไม่ควรทำ:

- ❌ ลบ packages โดยไม่ตรวจสอบ usage
- ❌ อัพเกรด major version โดยไม้อ่าน changelog
- ❌ อัพเกรดทุก packages พร้อมกันโดยไม่ทดสอบ
- ❌ ไม่ document การเปลี่ยนแปลง
- ❌ ละเลย security vulnerabilities
- ❌ ไม่รัน tests หลังการเปลี่ยนแปลง
- ❌ ลบ packages ที่ framework จัดการให้อยู่แล้ว

