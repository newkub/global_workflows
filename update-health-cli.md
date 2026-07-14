---
title: Update Health CLI
description: สร้างและอัปเดท health CLI ใน tools/health ที่ root ตาม /report-health 60+ categories
auto_execution_mode: 3
related:
  - /report-health
  - /deep-report
  - /update-agents-md
  - /follow-create-bun-cli
  - /follow-clean-architecture
  - /read-related-workflows
  - /deep-analyze-with-use-scripts
  - /validate
  - /report-format-table
  - /suggest-next-action
  - /restructure
  - /edit-relative
---

## Goal

สร้างและอัปเดท health CLI ใน `tools/health` ที่ project root ให้ครอบคลุม 60+ categories ตาม `/report-health` พร้อม health score, action items, และ production readiness

## Scope

ใช้สำหรับสร้างและอัปเดท health analysis CLI ใน `tools/health` ที่ project root ครอบคลุม 60+ categories จัดกลุ่มตาม 5 domains ตาม `/report-health`

## Execute

### 0. Check Should Update

ตรวจสอบว่า CLI ต้องอัปเดทหรือไม่ โดยเช็ค git changes ที่เกี่ยวข้อง

> Goal: รู้ว่า CLI ต้องอัปเดทตาม code changes หรือไม่ ก่อนเริ่มงาน

1. รัน `git -C <project-root> diff --name-only HEAD~1 -- tools/health/` เพื่อเช็คว่า analyzer source files เปลี่ยนแปลง
2. รัน `git -C <project-root> diff --name-only HEAD~1 -- .devin/workflows/ apps/*/AGENTS.md AGENTS.md` เพื่อเช็คว่า workflows และ AGENTS.md เปลี่ยนแปลง
3. รัน `git -C <project-root> diff --name-only HEAD~1 -- apps/website/src/` เพื่อเช็คว่า source code เปลี่ยนแปลง
4. ถ้าไม่มี git changes เลย → ข้ามไป Step 5 (Validate CLI) เพื่อรัน CLI ที่มีอยู่
5. ถ้ามี git changes → ทำตาม Step 0.5 ก่อน แล้วทำ Step 1 เป็นต้นไป
6. ถ้าเป็นการรันครั้งแรก (ไม่มี `tools/health/`) → ทำ Step 1 เป็นต้นไปเลย

> Goal: ไม่เสียเวลาอัปเดท CLI ถ้าไม่มีอะไรเปลี่ยน แต่ถ้ามี changes ให้อัปเดทให้ทันสมัยก่อนรัน

### 0.5. Check AGENTS.md Freshness

ตรวจสอบว่า AGENTS.md ต้องอัปเดทก่อนหรือไม่ เพื่อให้ reviewWorkflow mapping ถูกต้อง

> Goal: AGENTS.md เป็นปัจจุบันก่อนอัปเดท analyzers เพราะ analyzers อ้างอิง review-* workflows จาก AGENTS.md

1. อ่าน `AGENTS.md` ที่ root และ workspace level
2. เช็คว่า `## Workflows` section ครอบคลุม dependencies ใน `package.json` ทั้งหมดหรือไม่
3. เช็คว่า `## Review` section อ้างอิง `/review-codebase-everything` และมี workspace-specific reviews ครบ
4. เช็คว่า `## Skills` section มี skills ที่ map กับ dependencies ครบ
5. ถ้า AGENTS.md ขาด workflows, skills หรือ reviews ที่ map กับ dependencies ปัจจุบัน → ทำ `/update-agents-md` ก่อน
6. ถ้า AGENTS.md เป็นปัจจุบัน → ข้ามไป Step 1

> Goal: analyzers ใช้ reviewWorkflow ที่ถูกต้องตาม AGENTS.md ปัจจุบัน

### 1. Read Context

อ่าน context ก่อนเริ่มงานเพื่อเข้าใจ categories และ CLI ที่มีอยู่

1. ทำ `/report-health` เพื่อดูรายการ 60+ categories จัดกลุ่มตาม 5 domains
2. ทำ `/read-related-workflows` เพื่ออ่าน workflows ที่เกี่ยวข้องกับ project แบบ recursive
3. อ่าน `tools/health/` directory ที่ project root เพื่อดู CLI ที่มีอยู่แล้ว
4. อ่าน `src/analyzers/` เป็น reference implementation
5. ทำ `/follow-create-bun-cli` เพื่ออ่าน Bun CLI best practices
6. ทำ `/follow-clean-architecture` เพื่ออ่าน Clean Architecture structure สำหรับ CLI

> Goal: เข้าใจ categories ทั้งหมด CLI structure ที่มีอยู่ และ architecture guidelines

### 2. Build Analyzer Inventory

สร้าง mapping ระหว่าง categories และ analyzer modules เพื่อระบุสิ่งที่ต้องทำ

1. สร้าง mapping จาก report-health categories เป็น analyzer module:
   - แต่ละ domain มี analyzer file: `user-facing.ts`, `security.ts`, `backend-data.ts`, `infrastructure.ts`, `code-arch.ts`
   - แต่ละ category เป็น `Analyzer` object ใน domain file
2. ระบุ analyzers ที่มีอยู่แล้ว, ที่ต้องสร้างใหม่, และที่ต้องอัปเดท
3. ระบุ analyzers ที่ไม่มี category สอดคล้องแล้วเพื่อพิจารณาลบ

> Goal: รู้ analyzers ที่ต้องสร้าง อัปเดท และลบ

### 3. Create Or Update Analyzers

สร้างหรืออัปเดท analyzer แต่ละตัวตาม category ใน `/report-health`

1. สำหรับแต่ละ category ใน `/report-health`:
   1. อ่าน `/report-health` Step 7 สำหรับรายการ categories ในแต่ละ domain
   2. สร้าง `Analyzer` object ใน domain file ที่เกี่ยวข้อง ถ้ายังไม่มี
   3. อัปเดท analyzer ที่มีอยู่แล้วให้สอดคล้องกับ category ปัจจุบัน
   4. ใช้ `/deep-analyze-with-use-scripts` สำหรับโครงสร้าง analyzer
2. ทุก analyzer ต้องใช้ shared utilities จาก `src/utils/`:
   - `file-utils.ts` สำหรับ `walk`, `readText`, `getRel`, `findLine`
   - `git-grep.ts` สำหรับ `gitGrep`, `gitGrepCount`, `gitGrepFiles`
   - `format.ts` สำหรับ `formatTable`, `formatJson`, `formatDomainTable`, `formatCategoryTable`
3. แต่ละ analyzer ต้องมี:
   - `name` ตรงกับ category name ใน `/report-health`
   - `domain` ตรงกับ domain ใน `/report-health`
   - `reviewWorkflow` ตรงกับ `/review-*` workflow จาก AGENTS.md
   - `analyze()` ที่ return `CategoryResult` พร้อม `status`, `score`, `findings`
4. ใส่ specific checks ตาม scope ของแต่ละ category
5. ถ้า analyzer ไม่สามารถ implement ทั้งหมดได้ ให้ comment `// TODO` พร้อมรายละเอียดสิ่งที่ต้องทำ

> Goal: ทุก category มี analyzer ที่ทำงานได้และสอดคล้องกับ `/report-health`

### 4. Restructure Analyzers

ปรับโครงสร้างไฟล์ถ้าเกิน 250 บรรทัดและอัปเดท references

1. ทำ `/restructure` สำหรับ `src/analyzers/` ถ้ามีไฟล์ที่ยาวกว่า 250 บรรทัด
2. จัดกลุ่ม analyzers ตาม domain เดียวใน file เดียว
3. ทำ `/edit-relative` ทุกครั้งหลังย้ายหรือเปลี่ยนชื่อไฟล์

> Goal: ไฟล์ไม่เกิน 250 บรรทัด และ references ถูกต้อง

### 5. Validate CLI

ตรวจสอบว่า CLI รันได้และ output ถูกต้อง

1. รัน `bun --filter @booking/tools-health lint` สำหรับ typecheck และ lint
2. รัน health CLI ด้วย `bun --filter @booking/tools-health health`
3. ตรวจสอบ output ว่าอยู่ใน expected format (table และ json)
4. รัน `bunx biome check tools/health` เพื่อตรวจ lint และ format
5. ทำ `/validate` เพื่อตรวจสอบความถูกต้อง

> Goal: CLI ผ่าน typecheck, lint และ output ถูกต้อง

### 6. Deep Report

สร้าง deep report ตาม `/deep-report` พร้อมตารางละเอียดและสรุปครบทุกมิติ

> Goal: รายงานผลแบบละเอียดครบทุกมิติ พร้อมตารางที่ actionable

1. ทำ `/deep-report` เพื่อสร้าง deep report ตาม format ที่กำหนด
2. แสดงตาราง deep report ด้วย 7 columns ตาม Rules section 9 (Deep Report Table)
3. จัดกลุ่มตาม `reviewWorkflow` จาก AGENTS.md เพื่อเชื่อมโยงกับ `/review-*` workflows
4. แสดงสรุปละเอียดครบทุกมิติตาม Rules section 10 (Deep Summary)
5. ทำ `/suggest-next-action` เพื่อแนะนำ action ถัดไป

> Goal: deep report ที่ละเอียด  actionable และครบทุกมิติ

## Rules

### 1. CLI Structure

- ใช้โครงสร้างจาก `/follow-create-bun-cli` และ `/follow-clean-architecture`
- แยก concerns ตาม Clean Architecture: `domain/` (pure logic), `application/` (orchestration), `adapters/` (I/O), `presentation/` (CLI entry point)
- แยก concerns: analyzers (business logic), services (scorer, reporter), utils, types
- ชื่อไฟล์ใช้ `kebab-case` เสมอ
- Entry point: `src/cli.ts` และ `src/index.ts`

### 2. Analyzer Structure

- ใช้ Bun native APIs: `Bun.file`, `Bun.spawn`, `Bun.write`
- ใช้ TypeScript สำหรับ type safety
- ทุก analyzer ต้อง return `CategoryResult` พร้อม `status`, `score`, `findings`
- ทุก analyzer ต้องมี `reviewWorkflow` ที่ map ไปยัง `/review-*` workflow จาก AGENTS.md
- ใช้ shared utilities จาก `src/utils/` แทนการ duplicate code
- Output เป็น table และ JSON ตาม `--format` flag

### 3. Category Coverage

- ครอบคลุม 60+ categories จาก `/report-health` Step 7
- 5 domains: User-Facing, Security & Compliance, Backend & Data, Infrastructure, Code & Architecture
- แต่ละ category มี status: ✅ pass, ⚠️ warn, ❌ fail
- คำนวณ health score: ✅ = 100, ⚠️ = 50, ❌ = 0
- แสดง progress bar พร้อม grade: A (90+), B (80+), C (70+), D (60+), F (<60)

### 4. Table Output Format

- กรองเฉพาะ categories ที่มี findings (ไม่แสดง pass)
- จัดกลุ่มตาม `reviewWorkflow` จาก AGENTS.md
- แสดงเฉพาะไฟล์ที่มีปัญหา พร้อม severity และ message
- แสดง summary ด้านล่าง: domain scores, severity counts, total categories
- แสดง action items สำหรับ Critical และ High severity

### 5. CLI Help

- มี `--help` และ `-h` option ที่แสดง usage, options, exit codes, examples
- มี error messages สำหรับ invalid arguments
- มี exit codes: 0 = success, 1 = invalid arguments

### 6. Specific Checks

- อ่าน `## Execute` และ `## Rules` ของ `/report-health`
- แปลง checks ที่เป็น code patterns เป็น regex หรือ AST-based search
- ใช้ `gitGrep` สำหรับ pattern-based search
- อย่า implement checks ที่เป็น process guidelines หรือ require human judgment

### 7. Single Responsibility

- หนึ่งไฟล์ทำหนึ่ง domain ไม่เกิน 250 บรรทัด
- หนึ่ง analyzer ทำหนึ่ง category
- ทำ `/edit-relative` ทุกครั้งหลังย้ายหรือเปลี่ยนชื่อไฟล์

### 8. Validation

- ทุก analyzer ต้องผ่าน typecheck ก่อน commit
- ทุก analyzer ต้องรันได้โดยไม่ error
- ทุก finding ต้องมี evidence: file path, line number, หรือ code snippet
- ใช้ `/validate` ก่อนสรุปผล

### 9. Deep Report Table

ตาราง deep report มี 7 columns จัดกลุ่มตาม `reviewWorkflow`:

| Column | Description | Example |
|---|---|---|
| **Scope** | Domain และ category ที่พบปัญหา | `Code & Architecture > Completeness` |
| **File** | ไฟล์และบรรทัดที่มีปัญหา | `apps/website/src/routes/__root.tsx:26` |
| **Cause** | สาเหตุรากของปัญหา (root cause) | `Case-insensitive 'placeholder' matches HTML attributes` |
| **Solutions** | วิธีแก้ที่ actionable และเฉพาะเจาะจง | `Use case-sensitive search for MOCK/STUB/FAKE markers only` |
| **Severity** | ระดับความรุนแรง: Critical > High > Medium > Low | `High` |
| **Review Workflow** | `/review-*` workflow ที่แนะนำจาก AGENTS.md | `/review-realize-implementation` |
| **Evidence** | code snippet หรือ pattern ที่ trigger finding | `grep -i 'placeholder' → 947 matches in <input placeholder=...>` |

- จัดเรียงตาม severity: Critical ก่อน, High รองลงมา
- กรองเฉพาะ categories ที่มี findings (ไม่แสดง pass)
- แต่ละ row ต้องมี evidence ที่ตรวจสอบได้จริง
- ถ้า finding เป็น false positive ให้ระบุใน column Cause ว่า `False positive: <reason>`

### 10. Deep Summary

สรุปละเอียดครบทุกมิติท้าย report มี 5 ส่วน:

1. **Domain Breakdown** — score, pass/warn/fail counts, top finding ของทุก domain
2. **Severity Distribution** — จำนวน findings ตาม Critical/High/Medium/Low
3. **Analyzer Changes** — สร้างใหม่/อัปเดท/ลบ พร้อมสิ่งที่เปลี่ยน
4. **False Positive Analysis** — รายการ, สาเหตุ, วิธีแก้
5. **Recommended Actions** — quick wins และ major improvements พร้อม reviewWorkflow, effort, impact

## Expected Outcome

- `tools/health` มี health CLI ครอบคลุม 60+ categories ตาม `/report-health`
- CLI รันได้ด้วย `bun run health` และ `bun run health:json`
- ไม่มีไฟล์ใดยาวกว่า 250 บรรทัด
- Deep report แสดงตาราง 7 columns พร้อมสรุปละเอียดครบทุกมิติ
- ตรวจสอบ git changes และ AGENTS.md freshness ก่อนอัปเดท analyzers
