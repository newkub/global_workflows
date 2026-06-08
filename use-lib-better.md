---

title: Use Better Libraries

description: ค้นหาและแนะนำ libraries ที่ดีกว่าสำหรับโปรเจกต์

auto_execution_mode: 3

related_workflows:
  - /my-tech-stack
  - /deep-research
  - /analyze-project

---

## Goal

ค้นหาและแนะนำ libraries ที่ดีกว่าสำหรับโปรเจกต์ โดยพิจารณาจาก modern, type-safe, performance, DX, และ active maintenance

## Scope

ครอบคลุมการวิเคราะห์ tech stack ปัจจุบัน, ค้นหา alternatives, ประเมิน candidates, และวางแผน migration

## Execute

### 1. Check Existing Tech Stack

1. ทำ `/my-tech-stack` เพื่อดู tech stack ที่ใช้งานอยู่
2. ระบุ libraries ที่มีอยู่ใน stack ปัจจุบัน
3. ถ้าไม่มีข้อมูล ให้ทำ `/deep-research` เพื่อค้นหาข้อมูลเพิ่มเติม

### 2. Analyze Current Stack

1. รัน `/analyze-project` เพื่อดู tech stack ปัจจุบัน
2. ตรวจสอบ `package.json`, `Cargo.toml`, `pyproject.toml` หรือ manifest ที่เกี่ยวข้อง
3. ระบุ libraries ที่ใช้งานอยู่และเวอร์ชันปัจจุบัน
4. ทำความเข้าใจ use cases และ requirements ของแต่ละ library

### 3. Research Alternatives

1. ใช้ `/deep-research` เพื่อค้นหา libraries ทางเลือกที่ดีกว่า
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
   - GitHub search: "benchmark [library name]"
6. ตรวจสอบ community adoption และ ecosystem maturity:
   - State of JS/CSS/Rust surveys
   - Awesome lists บน GitHub
   - Product Hunt, Hacker News

### 4. Evaluate Candidates

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

### 5. Recommend and Plan

1. สร้างรายการแนะนำพร้อมเหตุผลสำหรับแต่ละ library
2. จัดลำดับตาม Priority Matrix:
   - **High Priority**: Total Score >= 25, Migration Effort: Low, Risk Level: Low
   - **Medium Priority**: Total Score 20-24, Migration Effort: Medium, Risk Level: Medium
   - **Low Priority**: Total Score < 20, Migration Effort: High, Risk Level: High
3. เขียน migration plan สำหรับแต่ละ library
4. ระบุ risks และ mitigation strategies

## Rules

### 1. Evaluation Criteria

เกณฑ์การประเมิน:

- ประเมินตามเกณฑ์ Type Safety, Performance, DX, Maintenance, Bundle Size, Dependencies, และ Migration Cost
- ใช้ scoring system 1-5 points ตามเกณฑ์ที่กำหนด
- คำนวณ Total Score (สูงสุด 35 points)

### 2. Research Sources

แหล่งข้อมูลที่ใช้:

- ใช้ sources จาก package registry official sites, GitHub repositories, และ benchmark repositories
- เปรียบเทียบ apples-to-apples ด้วยล่าสุด version ของทั้งสองฝั่ง
- พิจารณา long-term support, stability, และ license compatibility

### 3. Priority Matrix

การจัดลำดับ:

- ใช้ Priority Matrix สำหรับการจัดลำดับ (High/Medium/Low)
- High Priority: Total Score >= 25, Migration Effort: Low, Risk Level: Low
- Medium Priority: Total Score 20-24, Migration Effort: Medium, Risk Level: Medium
- Low Priority: Total Score < 20, Migration Effort: High, Risk Level: High

### 4. Documentation

การจัดการ documentation:

- สร้างรายการ libraries พร้อม current vs recommended, pros/cons, migration effort, และ priority
- เขียน migration plan สำหรับแต่ละ library
- ระบุ risks และ mitigation strategies

## Expected Outcome

- รายการ libraries ที่แนะนำพร้อมเหตุผลรองรับ
- Scoring system ชัดเจน (Total Score 1-35 points)
- Priority Matrix สำหรับการจัดลำดับ (High/Medium/Low)
- Migration plan ที่ realistic และ prioritized
- Risk assessment สำหรับการเปลี่ยนแต่ละ library

## Common Mistakes

ข้อผิดพลาดที่พบบ่อย:

- ไม่ตรวจสอบ tech stack ปัจจุบันก่อนค้นหา alternatives
- เปรียบเทียบ libraries ที่ไม่ใช่ same category
- ไม่พิจารณา migration cost และ breaking changes
- ใช้ outdated benchmarks หรือข้อมูล
- ไม่ตรวจสอบ license compatibility

## Anti-Patterns

รูปแบบที่ไม่ควรทำ:

- ❌ เปลี่ยน library โดยไม่มีเหตุผลชัดเจน
- ❌ เปรียบเทียบ libraries ที่ serve different purposes
- ❌ ไม่พิจารณา long-term maintenance
- ❌ ใช้ benchmarks ที่ไม่เกี่ยวข้อง
- ❌ เปลี่ยน library โดยไม่มี migration plan

