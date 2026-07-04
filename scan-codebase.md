---
title: Scan Codebase
description: Scan codebase อย่างรวดเร็วด้วย static analysis tools
auto_execution_mode: 3
related_workflows:
  - /use-scripts
  - /analyze-project
  - /write-ast-grep-rules
---

## Goal

Scan codebase อย่างรวดเร็วเพื่อเข้าใจ structure, patterns, และ quality ใน 3 นาที

## Scope

ครอบคลุม file structure, code patterns, structural analysis, และ quality metrics ด้วย minimal AI token

## Execute

### 1. File Structure Discovery (30 วินาที)

ค้นพบ structure ของ codebase

1. ทำ `find_by_name` หา manifest files (`package.json`, `tsconfig.json`, `Cargo.toml`, `pyproject.toml`)
2. ทำ `find_by_name` หา directory structure (`src/`, `app/`, `lib/`, `components/`, `utils/`)
3. ระบุ project type จาก manifest files
4. ตรวจสอบ monorepo structure (workspaces, packages/)

### 2. Pattern Search (1 นาที)

ค้นหา patterns ทั่วไปด้วย Grep

1. ทำ `Grep` หา `import` patterns (parallel)
2. ทำ `Grep` หา `export` patterns (parallel)
3. ทำ `Grep` หา `function`, `class`, `const`, `interface` (parallel)
4. ทำ `Grep` หา key terms ที่เกี่ยวข้องกับ domain (parallel)
5. รวบรวม results และ count frequencies

### 3. Structural Analysis (1 นาที)

วิเคราะห์ structure ด้วย ast-grep ผ่าน `/use-scripts`

1. ทำ `/use-scripts` สร้าง Bun script ใน `.devin/scripts/` สำหรับรัน ast-grep patterns:
   ```typescript
   await $`ast-grep run -p 'function $NAME($$ARGS) {$$BODY}' --json`
   await $`ast-grep run -p 'const $NAME = $VALUE' --json`
   await $`ast-grep run -p 'class $NAME {$$BODY}' --json`
   await $`ast-grep run -p 'interface $NAME {$$BODY}' --json`
   ```
2. รัน script ใน dry run mode ก่อนเพื่อตรวจสอบผลลัพธ์
3. รัน script จริงและรวบรวม results และ group ตาม file type
4. ลบ script หลังใช้งาน

### 4. Quality Check (30 วินาที)

ตรวจสอบคุณภาพโค้ด

1. ทำ `check-duplication` หา duplicate code
2. ทำ `Grep` หา anti-patterns (`any`, `console.log`, nested ternary)
3. ตรวจสอบ biome/gritql config ถ้ามี
4. รัน biome/gritql ถ้ามี config

### 5. Structured Data Generation (30 วินาที)

สร้าง structured data สำหรับ AI ด้วย `/use-scripts`

1. ทำ `/use-scripts` สร้าง Bun script ใน `.devin/scripts/` สำหรับรวบรวม findings และสร้าง structured data:
   ```typescript
   {
     structure: { files, directories, projectType },
     patterns: { imports, exports, functions, classes },
     quality: { duplicates, antiPatterns, issues },
     metrics: { complexity, coupling }
   }
   ```
2. รัน script ใน dry run mode ก่อนเพื่อตรวจสอบผลลัพธ์
3. รัน script จริงและทำ `/report-format-table` สร้าง table summary
4. ลบ script หลังใช้งาน

### 6. AI Summarization (Minimal Token)

สรุป findings ด้วย AI

1. ส่ง structured data ให้ AI
2. ขอ summary ของ codebase
3. ขอ recommendations ตาม priority
4. ทำ `/report` สรุปผลลัพธ์


## Rules

### 1. Parallel Processing

ประมวลผลแบบ parallel เพื่อความเร็ว

- รัน Grep patterns พร้อมกัน
- รัน ast-grep patterns พร้อมกัน
- รัน quality checks พร้อมกัน

### 2. Tool Selection

เลือก tools ที่เหมาะสมกับแต่ละ phase

- Phase 1: `find_by_name` สำหรับ file discovery
- Phase 2: `Grep` สำหรับ pattern matching
- Phase 3: `/use-scripts` + ast-grep สำหรับ structural analysis
- Phase 4: `check-duplication`, `biome/gritql` สำหรับ quality
- Phase 5: `/use-scripts` สำหรับ structured data generation
- Phase 6: AI สำหรับ summarization
- ทำ `/write-ast-grep-rules` สำหรับสร้าง ast-grep rules

### 3. AI Token Minimization

ใช้ AI token อย่างประหยัด

- ส่ง structured data แทน raw code
- ใช้ AI เฉพาะ summarization
- ใช้ AI เฉพาะ generate recommendations

### 4. Coverage Standards

ครอบคลุมทุกมิติที่สำคัญ

- Structure: files, directories, project type
- Patterns: imports, exports, functions, classes
- Quality: duplicates, anti-patterns, issues
- Metrics: complexity, coupling

### 5. Actionable Output

สร้างผลลัพธ์ที่นำไปปฏิบัติได้จริง

- ระบุ project type และ structure
- ระบุ patterns ที่ใช้บ่อย
- ระบุ quality issues พร้อม priority
- ให้ recommendations ตาม impact

## Expected Outcome

- Project structure ที่ชัดเจน
- Code patterns ที่ใช้บ่อย
- Quality issues พร้อม priority
- Recommendations ตาม impact
