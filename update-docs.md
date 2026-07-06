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
  - /follow-project-docs
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

### 4. Setup Project Docs Site

ตั้งค่า docs site โดยทำตาม `/follow-project-docs` ซึ่งรวม VitePress setup, Vue components, และ Bun shell data scripts

1. ทำ `/follow-project-docs` เพื่อ setup docs site ทั้งหมด (VitePress + Vue components + Bun shell)
2. สำหรับ monorepo ให้สร้าง `docs/` ที่ root และตั้งค่าที่นั่น (ไม่ใช่ `apps/docs/`)
3. สำหรับ single project ให้สร้าง `docs/` ที่ root เช่นกัน
4. `/follow-project-docs` จะตั้งค่า VitePress, UnoCSS, Vue components, และ Bun shell scripts ให้อัตโนมัติ
5. สร้าง nav 4 sections: Project, Features, Review, Release ตาม `/follow-project-docs`
6. สำหรับ monorepo ให้ nav ลิงก์ไปยัง workspace pages ใน `docs/workspaces/` เพิ่มเติม
7. Add scripts in `package.json`: `dev:docs`, `build:docs`, `preview:docs`

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

### 3. Project Docs Site

- ทำ `/follow-project-docs` สำหรับ docs site setup ทั้งหมด (รวม VitePress, Vue components, Bun shell)
- ไม่ต้องเรียก `/follow-vitepress` แยก เพราะมีใน `/follow-project-docs` แล้ว
- สำหรับ monorepo ให้สร้าง `docs/` ที่ root ไม่ใช่ `apps/docs/`
- ใช้ Vue components แทนการเขียน markdown ธรรมดา
- ใช้ Bun shell scripts ดึงข้อมูลจริงจาก project
- ตั้งค่า nav 4 sections: Project, Features, Review, Release
- สำหรับ monorepo ให้เพิ่ม nav ลิงก์ไปยัง workspace pages ใน `docs/workspaces/`

### 4. References Management

- ทำ `/update-reference` เมื่อแก้ไขไฟล์
- ตรวจสอบ references ใน project, workflows, และ skills
- ตรวจสอบว่าไม่มี references ที่เสียหาย

### 5. Workflow Documentation Reports

เอกสารต้องอธิบาย report output ของ workflows ที่ใช้ใน project

- `analyze-*` workflows ต้องมี report step ที่เหมาะสม (เช่น `/report-format-table`) และต้องบันทึกใน docs ว่าผลลัพธ์อยู่ในรูปแบบใด
- `review-*` workflows ต้องมี report step ที่เหมาะสม (เช่น `/report-review` หรือ `/report-format-table`) และต้องบันทึกใน docs ว่าผลลัพธ์อยู่ในรูปแบบใด
- เหตุผล: report ที่เหมาะสมช่วยให้ผู้ใช้เข้าใจผลลัพธ์ได้ง่ายและนำไปใช้ต่อได้โดยตรง
- บันทึกตัวอย่าง report output ใน docs ถ้าจำเป็น

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

### Project Docs Site

- Docs site พร้อมใช้งานตาม `/follow-project-docs`
- VitePress config พร้อม nav 4 sections (Project, Features, Review, Release)
- Vue components สำหรับ visual UX/UI
- Bun shell scripts ดึงข้อมูลจริงจาก project
- UnoCSS integrated พร้อม presetWind4
- Theme custom พร้อมใช้งาน
- Package scripts พร้อมใช้งาน

### References

- References ใน project ถูกอัพเดททั้งหมด
- References ใน workflows ถูกอัพเดททั้งหมด
- References ใน skills ถูกอัพเดททั้งหมด
- ไม่มี references ที่เสียหาย
