---
title: Write Global Workflows
description: เขียน workflow file ให้เป็นมาตรฐานเดียวกัน รองรับหลาย AI tools
auto_execution_mode: 3
related:
  - /read-related-workflows
  - /check-reference
  - /follow-content-quality
  - /simplify
  - /follow-best-practice
  - /follow-principles-engineering
  - /follow-consistency
  - /improve-context-rot
  - /follow-harness-engineering
  - /use-scripts
  - /edit-relative
  - /suggest-next-action
  - /refactor-workflow
  - /follow-monorepo
---

## Goal

สร้าง workflow file ที่มีโครงสร้างสม่ำเสมอ อ่านแล้วทำตามได้ รองรับหลาย AI tools

## Scope

เขียน workflow file ทั้งใน `global_workflows` และ workspace

## Execute

### 1. Detect AI Tool

1. ตรวจจับจาก directory:
   - Windsurf: `~/.codeium/windsurf/global_workflows/`
   - Codex: `~/.codex/workflows/`
   - Claude: `~/.claude/workflows/`
   - OpenCode: `~/.opencode/workflows/`
2. ถ้าตรวจจับไม่ได้ → ถามผู้ใช้
   - ถ้าผู้ใช้ไม่ตอบ → stop และ report

### 2. Read Context

1. ทำ `/read-related-workflows` → อ่าน dependencies และตรวจ redundancy
2. ทำ `/check-reference` → ยืนยันว่า workflows ที่จะอ้างอิงมีอยู่จริง
3. ถ้า workflow เกี่ยวกับ `tools` หรือ `libraries` เฉพาะเจาะจง → ทำ `/follow-best-practice`
4. ถ้าอ่าน context ไม่ได้ → stop และ report (ไม่ฝืนเขียน)

### 3. Write Frontmatter

1. กำหนด fields:
   - `title`: Title Case ตรงกับ filename
   - `description`: กระชับไม่เกิน 100 ตัวอักษร อธิบายสิ่งที่ workflow ทำ
   - `auto_execution_mode: 3` เสมอ
   - `related`: เฉพาะ workflows ที่เรียกโดยตรงใน Execute หรือ Rules เท่านั้น
   - `url`: ถ้ามี external documentation
2. ถ้าไฟล์มีอยู่แล้ว → confirm ก่อน overwrite และแสดง dry run preview (high-risk action)
3. ถ้า frontmatter ไม่ valid → fix แล้ว recheck
   - ถ้าไม่ผ่านหลังจาก 3 ครั้ง → stop และ report

### 4. Write Goal And Scope

1. `## Goal` — วัตถุประสงค์กระชับ สอดคล้องกับ filename
   - ตอบคำถาม: "workflow นี้ทำอะไร"
2. `## Scope` — ระบุชัดเจนว่าใช้กับอะไร
3. ถ้า Goal ไม่ตอบ 'ทำอะไร' หรือ Scope ไม่ชัดเจน → rewrite

### 5. Write Execute And Rules

1. ทำ `/follow-principles-engineering` และ `/follow-consistency` → เขียนเป็นหลักการทั่วไป
2. **Execute**: numbered list ตามโครงสร้างใน Rules section `Structure And Consistency`
3. **Rules**: bullet points จัดกลุ่มตามหัวข้อ แต่ละหัวข้อมี single concern
4. ออกแบบตาม `/improve-context-rot` และ `/follow-harness-engineering`:
   - ระบุ verification checks
   - ระบุ error handling
   - ระบุ governance สำหรับ high-risk actions
   - ระบุ user confirmation พร้อม dry run mode สำหรับ destructive actions
5. ถ้า data processing ซับซ้อน → ใช้ `/use-scripts` (ดู threshold ใน Rules section `Execution And Automation`)
6. ทำ `/follow-content-quality` → review คุณภาพเนื้อหา
   - ทำ `/simplify` → ลดความซับซ้อน
   - ถ้าไม่ผ่าน → revise และ recheck

### 6. Write Expected Outcome

1. `## Expected Outcome` → สอดคล้องกับ Goal
   - ตอบคำถาม: "เสร็จแล้วได้อะไร"
2. ระบุ output format ชัดเจน: ตาราง, รายการ, ไฟล์, หรือ state change
3. ถ้าไม่สอดคล้องกับ Goal → rewrite

### 7. Test Workflow

1. จำลองการเรียก workflow ในสถานการณ์จริง
   - ตรวจสอบว่าทุก step ทำตามได้จริง ไม่มี ambiguous instructions
2. ตรวจสอบ idempotency: workflow รันซ้ำได้โดยไม่เกิด side effects
3. ถ้าพบ issue → กลับไปแก้ที่ Steps 3-6 แล้ว test ใหม่

### 8. Validate And Finalize

1. ตรวจสอบโครงสร้าง:
   - ไม่เกิน 250 บรรทัด
   - steps ไม่เกิน 10
   - sections ครบและเรียงลำดับถูกต้อง (ตาม Rules section `Structure And Consistency`)
2. ตรวจสอบ `related` มีเฉพาะ workflows ที่เรียกโดยตรงใน Execute หรือ Rules
3. ตรวจสอบ Scope ไม่ทับซ้อนกับ workflows อื่น (ใช้ผลจาก Step 2)
4. ทำ `/edit-relative` → อัปเดท references ทั้งหมด
5. ทำ `/suggest-next-action` → แนะนำ workflows ที่ควรใช้ต่อ
6. ถ้า validation ไม่ผ่าน → กลับไปแก้และ re-validate
   - ถ้าไม่ผ่านหลังจาก 3 ครั้ง → stop และ report

## Rules

### 1. Structure And Consistency

- ลำดับ sections:
  1. `## Goal` (required)
  2. `## Scope` (required)
  3. `## Execute` (required)
  4. `## Rules` (required)
  5. `## Expected Outcome` (required)
  6. `## Example Template` (optional)
  7. `## Report` (optional)
- Execute สอดคล้องกับ Goal
- Rules สอดคล้องกับ Execute
- Expected Outcome สอดคล้องกับ Goal
- workflow ที่มี output ต้องระบุ output format ชัดเจน และตรวจสอบก่อนจบว่าตรงกับ Expected Outcome
- workflow ที่เกิน 5 steps ต้องมี goal reminder ใน Execute step กลางๆ เพื่อรักษา goal alignment

### 2. Single Responsibility

- แต่ละ workflow ทำหน้าที่เดียวเท่านั้น — Scope กำหนดหน้าที่นั้น
- ถ้า workflow มีหน้าที่หลายอย่าง → แยกเป็น sub-workflows แล้วอ้างอิงผ่าน `related`
- ห้ามเขียน Execute step ที่ทำหน้าที่ของ workflow อื่น → อ้างอิงแทน
- ถ้า concept คล้าย workflow ที่มีอยู่ → อ้างอิง workflow นั้นแทนการเขียนใหม่
- ถ้า workflow เกิน 250 บรรทัด หรือมีหน้าที่หลายอย่าง → ทำ `/refactor-workflow`

### 3. Delegation And No Duplication

- ห้าม duplicate เนื้อหาทุกประเภท (sections, steps, rules, descriptions, references) ทั้งภายในไฟล์และระหว่าง workflows
- ถ้าเนื้อหาซ้ำกับ `/write-workflows` หรือ `/write-skills` → อ้างอิงแทนการเขียนซ้ำ
- การตรวจ redundancy และ dependency graph เป็นหน้าที่ของ `/read-related-workflows` — อย่าเขียนซ้ำ
- ใช้ `related` เพื่อชี้ไปยัง workflow ที่ทำหน้าที่นั้น ไม่ใช่เพื่อทำหน้าที่นั้นซ้ำ
- Orchestrator workflow อ้างถึง sub-workflow โดยไม่ระบุรายละเอียดภายใน

### 4. Content And Style

- หัวข้อภาษาอังกฤษ Title Case, รายการภาษาไทย
- ใช้ bullet points (`-`) ชิดซ้ายใน Rules
- ใช้ backticks สำหรับ `tools`, `commands`, `file paths`, `/workflow-name`
- เขียนเป็นหลักการ how-to ไม่ใช่ step-by-step ที่ผูกกับ project เฉพาะเจาะจง
- อ้างอิง official documentation เมื่อเขียนเกี่ยวกับ `tools` หรือ `libraries` เฉพาะเจาะจง
- เรียงลำดับ bullets ตามความสำคัญ: general ก่อน, specific ทีหลัง
- เขียน content ให้ explicit:
  - ใช้ active voice
  - ระบุ subject และ object ชัดเจน
  - หลีกเลี่ยงคำกำกวม (should, could, might)
- ถ้ามีตัวอย่างการใช้งานจริง → ใส่ใน `## Example Template` (optional) หลัง `## Expected Outcome`

### 5. Execution And Automation

- เรียงลำดับ: Foundation ก่อน, High impact ก่อน, Dependencies ก่อน, Critical path ก่อน, High-risk steps ก่อน — เพื่อ fail fast
- แต่ละ step ต้องมี 2-10 รายการย่อย
  - ถ้าเกิน → แบ่งเป็น sub-workflows หรือใช้ orchestrator pattern
- ระบุชัดว่า step ไหน required หรือ optional
  - ใช้ prefix "ถ้า..." สำหรับ optional
- ใช้ `/use-scripts` เมื่อ:
  - file operations มากกว่า 10 ไฟล์
  - pattern matching ต้อง parser
  - metrics calculation ต้อง aggregation
- workflow ต้องไม่เกิน 20 tool calls ในการรัน 1 รอบ
- ถ้าเป็น monorepo → ทำ `/follow-monorepo`
- แต่ละ Execute step ต้องระบุว่าถ้า fail ให้ทำอย่างไร: retry, skip, หรือ stop และ report
- high-risk actions (delete, overwrite, deploy) ต้องมี user confirmation และ dry run mode ก่อน execute จริง
- ถ้า workflow ไม่ fit กับสถานการณ์ → หยุดและบอกผู้ใช้ (ไม่ฝืนทำ)
- ถ้าแก้ workflow ที่มีอยู่ → ตรวจสอบว่าไม่ทำลาย references เดิม (backward compatibility)

### 6. Workflow Type Requirements

| Type | Step แรก | Step สุดท้าย | Rules |
| --- | --- | --- | --- |
| `analyze-*` | `/deep-analyze-codebase` | `/report-format-table` | Severity Classification, Analysis Only, Use Scripts For Analysis |
| `review-*` | `/deep-analyze-codebase` + `/update-rules` | `/validate` + `/report` + `/report-format-table` | Severity Classification, Evidence-Based Findings, Review Independence |
| `improve-*` | Review And Inventory | `/report` | Severity Classification, Follow Write Standards, Review Before Improve |
| `run-*` | Check Configuration | Report | Error Handling, Verification, No Ignore |

**ข้อกำหนดร่วม:**

- `review-*`: ทุก finding ต้องมี evidence — file path, line number, หรือ code snippet
  - ต้องมี `/deep-analyze-codebase`, `/update-rules`, และ `/validate` ใน `related` และ Execute steps เสมอ
- ถ้า workflow มี output → ต้องระบุ `/report-format-*` ที่ใช้

### 7. Naming And Prefix

- Filename: `kebab-case.md` ตรงกับ `title` แบบ Title Case
- Prefix ตาม workflow type: `review-*`, `improve-*`, `run-*` หรือไม่มี prefix สำหรับ utility workflows
- `description` อธิบายสิ่งที่ workflow **ทำ** ไม่ใช่สิ่งที่ workflow **ครอบคลุม**
  - ต้องมี keywords ที่ค้นหาได้ง่าย
- ใช้ terminology และ tone สม่ำเสมอกันทั้ง `global_workflows`

### 8. Context Preservation

- การ simplify ต้องเก็บ context ครบ ไม่ลบข้อมูลสำคัญออก
  - ลดความซ้ำซ้อนแต่เนื้อหาหลักต้องยังอยู่ครบ
- รวมกลุ่มข้อที่เกี่ยวข้องแทนการลบทิ้ง
- ตรวจสอบหลัง simplify ว่า context ยังครบก่อนบันทึก

## Expected Outcome

- Workflow มีโครงสร้างสม่ำเสมอ อ่านแล้วทำตามได้ รองรับหลาย AI tools
- Execute และ Rules เขียนตาม format ที่กำหนด ไม่เกิน 250 บรรทัด
- แต่ละ workflow มี single responsibility ไม่ซ้ำซ้อนกับ workflows อื่น
- เนื้อหา explicit ชัดเจน ไม่กำกวม ไม่ซ้ำซ้อน
- Workflows ที่อ้างอิงมีอยู่จริง และแนะนำ workflows ที่ควรใช้ต่อ

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

วัตถุประสงค์กระชับ

## Scope

ขอบเขตงานที่ครอบคลุม

## Execute

### 1. Step Name

อธิบายวัตถุประสงค์ของ step

1. ทำ `/workflow-name` เพื่อ [วัตถุประสงค์]

## Rules

### 1. Rule Category

- bullet point 1

## Expected Outcome

- Outcome ที่คาดหวัง
```
