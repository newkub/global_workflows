---
title: Use Better Dependencies
description: ค้นหาและแนะนำ dependencies ที่ดีกว่าสำหรับโปรเจกต์
auto_execution_mode: 3
---

## Goal

ค้นหาและแนะนำ dependencies ที่ดีกว่าสำหรับโปรเจกต์ โดยพิจารณาจาก modern, type-safe, performance, DX, และ active maintenance

## Execute

### 1. Analyze Current Stack

1. รัน `/analyze-project` เพื่อดู tech stack ปัจจุบัน
2. ตรวจสอบ `package.json`, `Cargo.toml`, `pyproject.toml` หรือ manifest ที่เกี่ยวข้อง
3. ระบุ dependencies ที่ใช้งานอยู่และเวอร์ชันปัจจุบัน
4. ทำความเข้าใจ use cases และ requirements ของแต่ละ dependency

### 2. Research Alternatives

1. ใช้ `/deep-research` เพื่อค้นหา dependencies ทางเลือกที่ดีกว่า
2. ค้นหาใน package registries ตามภาษา:
   - JavaScript/TypeScript: npmjs.com, npms.io, jsdelivr.com
   - Rust: crates.io, lib.rs
   - Python: PyPI, pypistats.org
   - Go: pkg.go.dev
   - PHP: Packagist
3. ใช้ comparison tools:
   - Bundlephobia: ตรวจสอบ bundle size และ dependencies
   - npm trends: เปรียบเทียบ download trends
   - Libraries.io: รวมทุก language ในที่เดียว
4. ดู GitHub repositories สำหรับ:
   - stars, forks, watchers
   - open issues, PRs, release frequency
   - last commit date, contributors
5. ตรวจสอบ benchmarks และ performance comparisons:
   - dev-bench, js-framework-benchmark
   - GitHub search: "benchmark [dependency name]"
6. ตรวจสอบ community adoption และ ecosystem maturity:
   - State of JS/CSS/Rust surveys
   - Awesome lists บน GitHub
   - Product Hunt, Hacker News

### 3. Evaluate Candidates

1. ให้คะแนนแต่ละ candidate ตามเกณฑ์ (1-5 points):
   - **Modern** (1-5): ใช้ latest standards, APIs, patterns
   - **Type Safety** (1-5): มี TypeScript definitions หรือ built-in types ที่ดี
   - **Performance** (1-5): Benchmarks ดีกว่าหรือเทียบเท่า
   - **DX** (1-5): API ใช้งานง่าย, documentation ดี, error messages ชัดเจน
   - **Maintenance** (1-5): Active development, responsive maintainers, security updates
   - **Bundle Size** (1-5): เล็กกว่าหรือเท่ากับปัจจุบัน
   - **Dependencies** (1-5): น้อยกว่าหรือเท่ากับปัจจุบัน
2. คำนวณ Total Score (สูงสุด 35 points)
3. ประเมิน Migration Effort (Low/Medium/High)
4. ตรวจสอบ breaking changes และ migration path
5. ประเมิน Risk Level (Low/Medium/High)

### 4. Recommend and Plan

1. สร้างรายการแนะนำพร้อมเหตุผลสำหรับแต่ละ dependency
2. จัดลำดับตาม Priority Matrix:
   - **High Priority**: Total Score >= 25, Migration Effort: Low, Risk Level: Low
   - **Medium Priority**: Total Score 20-24, Migration Effort: Medium, Risk Level: Medium
   - **Low Priority**: Total Score < 20, Migration Effort: High, Risk Level: High
3. เขียน migration plan สำหรับแต่ละ dependency
4. ระบุ risks และ mitigation strategies

## Rules

1. ประเมินตามเกณฑ์ Type Safety, Performance, DX, Maintenance, Bundle Size, Dependencies, และ Migration Cost
2. ใช้ scoring system 1-5 points ตามเกณฑ์ที่กำหนด
3. ใช้ sources จาก package registry official sites, GitHub repositories, และ benchmark repositories
4. เปรียบเทียบ apples-to-apples ด้วยล่าสุด version ของทั้งสองฝั่ง
5. พิจารณา long-term support, stability, และ license compatibility
6. ใช้ Priority Matrix สำหรับการจัดลำดับ (High/Medium/Low)
7. สร้างรายการ dependencies พร้อม current vs recommended, pros/cons, migration effort, และ priority

## Expected Outcome

- รายการ dependencies ที่แนะนำพร้อมเหตุผลรองรับ
- Scoring system ชัดเจน (Total Score 1-35 points)
- Priority Matrix สำหรับการจัดลำดับ (High/Medium/Low)
- Migration plan ที่ realistic และ prioritized
- Risk assessment สำหรับการเปลี่ยนแต่ละ dependency
