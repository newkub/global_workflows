---
title: Write Global Workflows
description: เขียน workflow file ที่ deterministic ปลอดภัย ชัดเจน ใช้ได้จริง รองรับหลาย AI tools
auto_execution_mode: 3
related:
  - /read-related-workflows
  - /check-reference
  - /follow-content-quality
  - /simplify
  - /follow-principles-engineering
  - /follow-consistency
  - /use-scripts
  - /edit-relative
  - /suggest-next-action
  - /follow-deterministic
  - /follow-best-practice
  - /improve-context-rot
  - /follow-harness-engineering
  - /follow-monorepo
  - /refactor-workflow
---

## Goal

สร้าง workflow file ที่ deterministic, safe, robust, อ่านง่าย, follow ง่าย, flow ลื่น, ทำงานตรงจุด และรองรับหลาย AI tools

## Scope

เขียนหรือปรับปรุง workflow file ทั้งใน `global_workflows` และ workspace โดยไม่ทำลาย references เดิม

## Execute

### 1. Detect AI Tool

ตรวจจับ AI tool ที่ใช้เพื่อกำหนด format และ directory ปลายทาง

> Goal: รู้ target AI tool และ directory ปลายทาง

1. ตรวจจับจาก directory:
   - Windsurf: `~/.codeium/windsurf/global_workflows/`
   - Codex: `~/.codex/workflows/`
   - Claude: `~/.claude/workflows/`
   - OpenCode: `~/.opencode/workflows/`
2. ถ้าตรวจจับไม่ได้ → ถามผู้ใช้ — ถ้าผู้ใช้ไม่ตอบ → stop และ report

### 2. Read Context

อ่าน context ก่อนเขียนเพื่อป้องกันซ้ำซ้อนและอ้างอิงผิด

> Goal: ไม่ซ้ำซ้อน อ้างอิงถูกต้อง

1. ทำ `/read-related-workflows` → อ่าน dependencies และตรวจ redundancy
2. ทำ `/check-reference` → ยืนยันว่า workflows ที่จะอ้างอิงมีอยู่จริง
3. ถ้าเกี่ยวกับ `tools` หรือ `libraries` เฉพาะเจาะจง → ทำ `/follow-best-practice`
4. ถ้าอ่าน context ไม่ได้หรือ reference ไม่ชัด → stop และ report (ไม่ฝืนเขียน)

### 3. Write Frontmatter

กำหนด frontmatter fields ให้ valid และรองรับ target AI tool

> Goal: Frontmatter valid รองรับ target AI tool

1. กำหนด fields: `title`, `description`, `auto_execution_mode: 3`, `related`, และ `url` เมื่อมี external docs
2. `title` ต้อง Title Case ตรงกับ filename; `description` กระชับไม่เกิน 100 ตัวอักษรและอธิบายสิ่งที่ workflow ทำ
3. `related` ต้องมีเฉพาะ workflows ที่เรียกโดยตรงใน Execute หรือ Rules
4. ถ้าไฟล์มีอยู่แล้ว → confirm ก่อน overwrite และแสดง dry run preview
5. ถ้า frontmatter ไม่ valid → fix แล้ว recheck (max 3 ครั้ง → stop/report)

### 4. Write Goal And Scope

เขียน Goal และ Scope ให้ชัดเจน เพื่อให้ AI เข้าใจวัตถุประสงค์ได้โดยไม่ต้องอ่านทั้งไฟล์

> Goal: Goal และ Scope ชัดเจน ตอบได้ว่าทำอะไร

1. `## Goal` ต้องตอบว่า workflow นี้ทำอะไรและสอดคล้องกับ filename
2. `## Scope` ต้องระบุชัดเจนว่าใช้กับอะไรและไม่ทับซ้อนกับ workflows อื่น
3. ถ้า Goal หรือ Scope กว้าง/กำกวม/ไม่ตรง filename → rewrite

### 5. Write Execute And Rules

เขียน Execute และ Rules ตามหลักการ — ทุก step ต้องมี description และ `> Goal:` ก่อน numbered list

> Goal: Execute และ Rules ทำตามได้ deterministic

1. ทำ `/follow-principles-engineering`, `/follow-consistency`, และ `/follow-deterministic`
2. Execute ใช้ format: heading → description → `> Goal:` → numbered list
3. Rules จัดกลุ่มเป็นหัวข้อ single concern และต้อง support flow, speed, safety, clarity, deterministic
4. ถ้า data processing ซับซ้อน → ใช้ `/use-scripts` ตาม Rules section `Flow And Efficiency`
5. ทำ Rule `High Impact Content` เพื่อกรองสิ่งที่ไม่สำคัญ

### 6. Review Quality

Review คุณภาพเนื้อหาหลังเขียนเพื่อให้ทำตามได้จริงและไม่ซ้ำซ้อน

> Goal: เนื้อหาคุณภาพ ไม่มี noise ไม่ซ้ำซ้อน

1. ทำ `/follow-content-quality` → review clarity, completeness, consistency, correctness
2. ทำ `/simplify` → ลดความซับซ้อนโดยไม่เสีย context สำคัญ
3. ตรวจสอบ Rule `High Impact Content` → เก็บเฉพาะสิ่งที่ impact จริง ลบ noise
4. ถ้า workflow มี > 5 steps หรือ high-risk actions → ตรวจสอบ `/improve-context-rot` และ `/follow-harness-engineering`
5. ถ้าไม่ผ่าน → revise และ recheck (max 3 ครั้ง → stop/report)

### 7. Write Expected Outcome

เขียน Expected Outcome ให้สอดคล้องกับ Goal เพื่อให้รู้ว่าเสร็จแล้วได้อะไร

> Goal: Expected Outcome สอดคล้อง Goal รู้ผลลัพธ์

1. `## Expected Outcome` ต้องตอบว่าเสร็จแล้วได้อะไรและสอดคล้องกับ Goal
2. ระบุ output format ชัดเจน: ตาราง, รายการ, ไฟล์, หรือ state change
3. ถ้า Expected Outcome ไม่วัดผลได้หรือไม่ตรง Goal → rewrite

### 8. Test Workflow

ทดสอบ workflow ก่อนใช้จริงเพื่อตรวจสอบว่าทำตามได้จริง

> Goal: Workflow ทำตามได้จริง deterministic idempotent

1. จำลองการเรียก workflow ในสถานการณ์จริง — ตรวจว่าทุก step ทำตามได้จริงและไม่กำกวม
2. ตรวจ deterministic และ idempotency: input เดียวกัน → output เหมือนกันและไม่มี side effects
3. ตรวจ flow: ไม่ย้อนกลับไปมาโดยไม่จำเป็น, fail fast, และไม่มี duplicated work
4. ถ้าพบ issue → กลับไปแก้ที่ Steps 3-7 แล้ว test ใหม่

### 9. Validate And Finalize

ตรวจสอบและสรุป workflow เพื่อให้พร้อมใช้งานและไม่ทำลาย references เดิม

> Goal: Workflow พร้อมใช้ ไม่ทำลาย references เดิม

1. ตรวจสอบโครงสร้าง: ไม่เกิน 250 บรรทัด, steps ไม่เกิน 10, sections ครบและเรียงถูกต้อง
2. ตรวจ filename เป็น `kebab-case` และตรงกับ `title` Title Case
3. ตรวจ `related`: เฉพาะ workflows ที่เรียกโดยตรง, ไม่มี missing/unused related
4. ตรวจ Scope ไม่ทับซ้อนกับ workflows อื่น และถ้าแก้ไฟล์เดิมต้องไม่ทำลาย references
5. ทำ `/edit-relative` และ `/suggest-next-action` → อัปเดท references และแนะนำ workflows ที่ควรใช้ต่อ
6. ตรวจ deterministic, safety, fail handling, idempotency, ไม่มี TODO/MOCK/placeholder
7. ถ้า validation ไม่ผ่าน → กลับไปแก้และ re-validate (max 3 ครั้ง → stop/report)

## Rules

### 1. Structure And Consistency

- ลำดับ sections: `## Goal`, `## Scope`, `## Execute`, `## Rules`, `## Expected Outcome`, และ `## Example Template` (optional)
- Execute step ต้องเรียง: heading → description → `> Goal:` → numbered list — `> Goal:` ต้องเฉพาะ step ไม่ copy overall Goal
- Execute, Rules, Expected Outcome, และ Example Template ต้องสอดคล้องกัน — ถ้าแก้ format ที่หนึ่ง ต้องแก้ทุกที่ที่เกี่ยวข้อง
- workflow ที่มี output ต้องระบุ output format ชัดเจนและตรวจสอบก่อนจบว่าตรงกับ Expected Outcome

### 2. Flow And Efficiency

- Flow ต้องไหลลื่น: prepare → gather context → write → review → test → finalize — ห้ามย้อนกลับไปมาโดยไม่จำเป็น
- เรียง Foundation, High impact, Dependencies, High-risk ก่อน เพื่อ fail fast และลด rework
- แต่ละ step มี 2-10 รายการย่อย — ตรงจุด ไม่แตกย่อยจิปาถะ — รวมงานที่ต่อเนื่องกันไว้ใน step เดียว
- ใช้ `/use-scripts` เมื่อ operations > 10 ไฟล์, pattern matching ต้อง parser, หรือ metrics ต้อง aggregation — จำกัด tool calls เท่าที่จำเป็น

### 3. Responsibility And Duplication

- แต่ละ workflow ทำหน้าที่เดียว — ถ้ามีหน้าที่หลายอย่าง → แยกเป็น sub-workflows ผ่าน `related` — ถ้าเกิน 250 บรรทัด → ทำ `/refactor-workflow`
- ห้าม duplicate เนื้อหา — ถ้าซ้ำกับ `/write-workflows` หรือ `/write-skills` → อ้างอิงแทน — ห้ามเขียน Execute step ที่ทำหน้าที่ workflow อื่น
- `related` ต้องมีเฉพาะ workflows ที่เรียกโดยตรงใน Execute หรือ Rules — ไม่มี unused related และไม่มี missing related

### 4. Clarity And Followability

- หัวข้อภาษาอังกฤษ Title Case, รายการภาษาไทย — ใช้ bullet points (`-`) และ backticks สำหรับ `tools`, `commands`, `/workflow-name`
- เขียน explicit: active voice, ระบุ subject/object, หลีกเลี่ยงคำกำกวม — ทุก step ต้องตีความได้ทางเดียว
- เขียนเป็นหลักการ how-to ไม่ผูกกับ project — อ้างอิง official documentation เมื่อเกี่ยวกับ `tools` หรือ `libraries`
- ถ้ามีตัวอย่าง → ใส่ใน `## Example Template` และต้อง match format ที่ Rules กำหนด

### 5. Deterministic And Measurable

- ผลลัพธ์ต้อง deterministic — input เดียวกัน → output เดียวกันทุกครั้ง — ลำดับ steps ต้อง fixed
- Validation criteria ต้อง measurable: ระบุ threshold, expected format, pass/fail condition, และ retry limit (max 3 → stop)
- ทุก review finding ต้องมี evidence — ถ้ามี output report → ระบุ `/report-format-*` ที่ใช้

### 6. Safety And Robustness

- ทุก step ต้องมี fail handling — ถ้า context/reference/requirement ไม่ชัด หรือ validation fail → stop/report/ask user
- Destructive หรือ high-risk actions ต้องมี user confirmation + dry run mode — ไม่มี hardcoded secrets หรือ paths
- ถ้าแก้ไข workflow เดิม → ต้องไม่ทำลาย references เดิม — workflow ต้อง idempotent: รันซ้ำได้โดยไม่เกิด side effects
- ถ้าเป็น monorepo → ทำ `/follow-monorepo`; ถ้าเกี่ยวกับ tools/libs → ทำ `/follow-best-practice`

### 7. High Impact Content

- เขียนเฉพาะสิ่งที่สำคัญและ impact จริง — ไม่เขียน noise — ครอบคลุมทุก impact ที่สำคัญ
- ทุก bullet ต้องตอบได้ว่า "ถ้าไม่มีแล้วผลลัพธ์เปลี่ยนไหม" — ถ้าไม่เปลี่ยน → ลบ
- ห้าม TODO, MOCK, placeholder, generic filler, หรือคำสวยแต่ไม่ actionable

## Expected Outcome

- Workflow ที่ deterministic, safe, robust, อ่านง่าย, follow ง่าย, flow ลื่น, ทำงานเร็ว, ตรงจุด, ไม่เกิน 250 บรรทัด, single responsibility, references ถูกต้อง, และใช้ได้จริง

## Example Template

```markdown
---
title: Workflow Name
description: กระชับไม่เกิน 100 ตัวอักษร
auto_execution_mode: 3
related:
  - /related-workflow
---

## Goal

วัตถุประสงค์กระชับ ตอบว่า workflow นี้ทำอะไร

## Scope

ขอบเขตงาน ระบุว่าใช้กับอะไรและไม่ใช้กับอะไร

## Execute

### 1. Step Name

Description ของ step

> Goal: เป้าหมายเฉพาะของ step นี้

1. ทำ `/workflow-name` เพื่อ [วัตถุประสงค์]
2. ถ้าทำไม่ได้ → stop และ report

## Rules

### 1. Rule Category

- rule ที่สำคัญและ impact จริง

## Expected Outcome

- Outcome ที่คาดหวังพร้อม output format (ตาราง, รายการ, ไฟล์, หรือ state change)
```