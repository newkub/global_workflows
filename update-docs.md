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
3. Create single `docs/` folder in root directory (do not create `docs/` in each workspace)
4. Write real content combining all workspaces in main files:
   - `project/overview.md` - Entire monorepo overview with features and architecture
   - `project/features.md` - Detailed features of all workspaces with examples
   - `project/workspaces.md` - Details of each workspace
   - `getting-started/installation.md` - Installation guide with examples
   - `getting-started/usage.md` - Usage examples that work
5. Write `index.md` according to `/update-readme` template (Features table, Key Concepts, Tech Stack, Quick Start)
6. Use frontmatter for all files
7. (Optional) Run `/bench-competitors` to create `comparison.md` in `project/` if needed

### 4. Setup VitePress

Configure VitePress for documentation site

1. Run `/follow-vitepress` to setup VitePress completely
2. Install dependencies: `vitepress`, `@shikijs/vitepress-twoslash`, `@yuy1n/vitepress-plugin-group-icons`
3. Create `.vitepress/` config directory in `docs/`
4. Create `.vitepress/config.ts` with nav and sidebar
5. Create `.vitepress/theme/` with custom theme
6. Setup UnoCSS integration according to `/follow-unocss`
7. Setup Shiki Twoslash for type hover
8. Setup VitePress Plugin Group Icons
9. Add scripts in `package.json`: `dev:docs`, `build:docs`, `preview:docs`

### 5. Update References

When modifying files, run `/update-reference` to update all references

## Rules

### 1. Monorepo Documentation

- สำหรับ monorepo ต้องมี `docs/` เดียวใน root directory เท่านั้น
- ห้ามสร้าง `docs/` ในแต่ละ workspace
- เขียน documentation ที่รวมทุก workspaces ในไฟล์เดียว
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
- ใช้ UnoCSS สำหรับ styling
- ใช้ Shiki Twoslash สำหรับ type hover
- ใช้ VitePress Plugin Group Icons สำหรับ icons
- ตั้งค่า nav และ sidebar ใน config
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
