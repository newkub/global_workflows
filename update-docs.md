---
title: Update Documentation
description: Write high-quality documentation with VitePress
auto_execution_mode: 3
related_workflows:
  - /analyze-features
  - /analyze-project
  - /update-reference
  - /bench-competitors
  - /all-workspaces
  - /follow-vitepress
  - /follow-content-quality
---

## Goal

Write high-quality documentation using real data from source code and VitePress

## Scope

Cover comprehensive documentation writing including features, examples, API docs, and references

## Execute

### 1. Check Project Type

Check project type to determine documentation strategy

1. Run `/check-monorepo` to verify if project is a monorepo
2. If monorepo, follow Monorepo section
3. If not monorepo, follow Single Project section

### 2. Update Documentation For Single Project

For non-monorepo projects:

1. Run `/analyze-features` and `/analyze-project` to analyze project
2. Select template based on project type (Library, Product, CLI, Web)
3. Create `docs/` folder and structure according to template
4. Write real content in main files:
   - `project/overview.md` - Project overview with features and architecture
   - `project/features.md` - Detailed features with examples
   - `getting-started/installation.md` - Installation guide with examples
   - `getting-started/usage.md` - Usage examples that work
5. Write `index.md` according to `/update-readme` template (Features table, Key Concepts, Tech Stack, Quick Start)
6. Use frontmatter for all files
7. (Optional) Run `/bench-competitors` to create `comparison.md` in `project/` if needed

### 3. Update Documentation For Monorepo

For monorepos with many workspaces:

1. Run `/analyze-features` and `/analyze-project` to analyze entire project
2. Run `/all-workspaces` to discover and prioritize workspaces
3. Create single `docs/` folder in root directory only
4. ห้ามสร้าง `docs/` ในแต่ละ workspace ภายใต้ `packages/`, `apps/`, หรือ `framework/`
5. Write real content in main files:
   - `project/overview.md` - Entire monorepo overview with features and architecture
   - `project/features.md` - Detailed features of all workspaces with examples
   - `project/workspaces.md` - Details of each workspace (summary + link ไปยัง workspace page)
   - `getting-started/installation.md` - Installation guide with examples
   - `getting-started/usage.md` - Usage examples that work
6. สร้างหน้า documentation สำหรับแต่ละ workspace ภายใต้ `docs/workspaces/` เช่น `docs/workspaces/core-shared.md`, `docs/workspaces/cli-release.md`
7. ใช้ VitePress nav ลิงก์ไปยัง workspace pages แทนการเขียนเนื้อหาซ้ำในหลายไฟล์
8. Write `index.md` according to `/update-readme` template (Features table, Key Concepts, Tech Stack, Quick Start)
9. Use frontmatter for all files
10. (Optional) Run `/bench-competitors` to create `comparison.md` in `project/` if needed

### 4. Setup VitePress

Configure VitePress for documentation site

1. Run `/follow-vitepress` to setup VitePress completely
2. สำหรับ monorepo ให้สร้าง `docs/` ที่ root และตั้งค่า VitePress ที่นั่น (ไม่ใช่ `apps/docs/`)
3. สำหรับ single project ให้สร้าง `docs/` ที่ root เช่นกัน
4. Install dependencies: `vitepress`, `@shikijs/vitepress-twoslash`, `@yuy1n/vitepress-plugin-group-icons`
5. Create `.vitepress/` config directory in `docs/`
6. Create `.vitepress/config.ts` with nav and sidebar
7. สำหรับ monorepo ให้ตั้งค่า nav ลิงก์ไปยัง workspace pages ใน `docs/workspaces/`
8. Create `.vitepress/theme/` with custom theme
9. Setup UnoCSS integration according to `/follow-unocss`
10. Setup Shiki Twoslash for type hover
11. Setup VitePress Plugin Group Icons
12. Add scripts in `package.json`: `dev:docs`, `build:docs`, `preview:docs`

### 5. Content Quality

1. ทำ `/follow-content-quality` เพื่อตรวจสอบและปรับปรุงคุณภาพเนื้อหาครบวงจร
2. ตรวจสอบความสม่ำเสมอของ formatting, heading structure, และ style
3. ตรวจสอบว่าเนื้อหาอ่านง่าย สอดคล้องกัน และไม่ซ้ำซ้อน

### 6. Update References

When modifying files, run `/update-reference` to update all references

## Rules

### 1. Monorepo Documentation

- สำหรับ monorepo ต้องมี `docs/` เดียวใน root directory เท่านั้น
- ห้ามสร้าง `docs/` ในแต่ละ workspace ภายใต้ `packages/`, `apps/`, `framework/`
- สร้างหน้า workspace documentation ภายใต้ `docs/workspaces/` เช่น `docs/workspaces/core-shared.md`
- ใช้ VitePress nav ลิงก์ไปยัง workspace pages แทนการเขียนเนื้อหาซ้ำ
- ใน `project/workspaces.md` เขียนเพียง summary และ link ไปยัง workspace page ไม่ต้องเขียนซ้ำ
- จัดลำดับ workspaces ตามความสำคัญ (foundation packages ก่อน)

### 2. Directory Structure

ใช้ structure ตามประเภท project (Library, Product, CLI, Web, Monorepo):

**Required Files**:
- `index.md` - Project overview (ตาม template `/update-readme`)
- `.vitepress/config.ts` - VitePress configuration

**Required Directories**:
- `project/` - Project overview
- `getting-started/` - Getting started
- `.vitepress/` - VitePress configuration

**Optional Directories**:
- `workspaces/` - Workspace documentation (monorepo only, one file per workspace)
- `guides/` - Detailed guides
- `key-concepts/` - Key concepts and terminology
- `principles/` - Principles and best practices
- `api/` - API documentation
- `examples/` - Examples
- `reference/` - Reference documentation
- `templates/` - Templates for project
- `workflows/` - Project-specific workflows
- `development/` - Development guides

### 3. VitePress Configuration

- ทำ `/follow-vitepress` สำหรับ VitePress setup
- สำหรับ monorepo ให้สร้าง `docs/` ที่ root ไม่ใช่ `apps/docs/`
- ใช้ UnoCSS สำหรับ styling
- ใช้ Shiki Twoslash สำหรับ type hover
- ใช้ VitePress Plugin Group Icons สำหรับ icons
- ตั้งค่า nav และ sidebar ใน config
- สำหรับ monorepo ให้ nav ลิงก์ไปยัง workspace pages ใน `docs/workspaces/`
- สร้าง home page พร้อม hero และ features

### 4. References Management

- ทำ `/update-reference` เมื่อแก้ไขไฟล์
- ตรวจสอบ references ใน project, workflows, และ skills
- ตรวจสอบว่าไม่มี references ที่เสียหาย

## Expected Outcome

### Documentation

- Documentation ตามมาตรฐาน
- Structure สอดคล้องกับ template
- Content คุณภาพสูง
- ไฟล์ทั้งหมดมี frontmatter
- `index.md` เขียนตาม template ของ `/update-readme`
- `comparison.md` สร้างโดย `/bench-competitors`
- สำหรับ monorepo: มี `docs/` เดียวใน root ที่รวมทุก workspaces
- สำหรับ monorepo: workspace pages อยู่ใน `docs/workspaces/` และ nav ลิงก์ไปยังแต่ละ page
- ไม่มี `docs/` ในแต่ละ workspace

### VitePress

- VitePress config พร้อมใช้งาน
- UnoCSS integrated พร้อม presetWind4
- Theme custom พร้อมใช้งาน
- Package scripts พร้อมใช้งาน
- Shiki Twoslash integrated พร้อม type hover
- VitePress Plugin Group Icons integrated
- Home page พร้อม frontmatter ตาม VitePress default

### References

- References ใน project ถูกอัพเดททั้งหมด
- References ใน workflows ถูกอัพเดททั้งหมด
- References ใน skills ถูกอัพเดททั้งหมด
- ไม่มี references ที่เสียหาย
