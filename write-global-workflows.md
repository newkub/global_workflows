---
title: Write Global Workflows
description: เขียน workflow file ให้เป็นมาตรฐานเดียวกัน รองรับหลาย AI tools
auto_execution_mode: 3
related_workflows:
  - /read-related-workflows
  - /check-reference
  - /follow-content-quality
  - /improve-correctness
  - /edit-relative
  - /suggest-next-action
  - /improve-context-rot
  - /follow-harness-engineering
  - /follow-best-practice
  - /learn-from-web
  - /use-scripts
  - /follow-principles
  - /follow-consistency
---

## Goal

สร้าง workflow file ที่มีโครงสร้างสม่ำเสมอ อ่านง่าย รองรับหลาย AI tools

## Scope

เขียน workflow file ทั้งใน `global_workflows` และ workspace โดยทำตาม `/follow-content-quality`

รองรับ AI tools: Windsurf, Codex, Claude, OpenCode และอื่นๆ ที่รองรับ workflow/skill format

## Execute

### 1. Detect AI Tool

1. ตรวจจับจาก directory structure: Windsurf (`~/.codeium/windsurf/global_workflows/`), Codex (`~/.codex/workflows/`), Claude (`~/.claude/workflows/`), OpenCode (`~/.opencode/workflows/`)
2. กำหนด `workflow_root` ตาม tool ที่ตรวจจับได้ ถ้าตรวจจับไม่ได้ให้ถามผู้ใช้

### 2. Read And Research

1. ทำ `/read-related-workflows` เพื่ออ่าน workflows ที่เกี่ยวข้องแบบ recursive ป้องกันการซ้ำซ้อน
2. ทำ `/check-reference` เพื่อตรวจสอบ references ที่จะใช้มีอยู่จริง
3. ทำ `/follow-best-practice` และ `/learn-from-web` สำหรับ topic ที่เกี่ยวข้อง
4. ถ้ามี workflow หรือ skill ที่ครอบคลุม topic เดียวกัน ให้ใช้ reference แทนการเขียนซ้ำ

### 3. Write Frontmatter

1. เขียน `title` เป็น Title Case ตรงกับ filename
2. เขียน `description` กระชับไม่เกิน 100 ตัวอักษร
3. ตั้ง `auto_execution_mode: 3` เสมอ
4. เพิ่ม `url` (optional) ถ้ามี external documentation
5. เพิ่ม `related_workflows` (optional) ถ้ามี dependencies

### 4. Write Execute And Rules

1. ทำ `/follow-principles` และ `/follow-consistency` เพื่อเขียนเป็นหลักการทั่วไปอย่างสม่ำเสมอ
2. เขียน Execute ด้วย numbered list และ Rules ด้วย bullet points
3. ทำ `/follow-content-quality` เพื่อปรับปรุงคุณภาพเนื้อหา และ `/improve-correctness` เพื่อตรวจสอบความถูกต้อง
4. ออกแบบตาม `/improve-context-rot` และ `/follow-harness-engineering`: แบ่ง steps ไม่เกิน 10 tool calls, ระบุ verification checks, error handling, และ governance สำหรับ high-risk actions
5. ทำ `/use-scripts` สำหรับ data processing ซับซ้อน หรือ metrics calculation
6. ตรวจสอบว่าไฟล์ไม่เกิน 250 บรรทัดและ references มีอยู่จริง

### 5. Suggest Related Workflows

1. ทำ `/suggest-next-action` เพื่อแนะนำ global workflows ที่ควรใช้ต่อ
2. ตรวจสอบว่า workflows ที่แนะนำมีอยู่จริงใน `global_workflows`

### 6. Update References

1. ทำ `/edit-relative` เพื่ออัปเดท references ทั้งหมดที่เกี่ยวข้องกับ workflow ที่แก้ไข
2. ตรวจสอบว่าไม่มี references เก่าเหลืออยู่ และ references ใหม่ถูกต้อง

## Rules

### 1. Structure And Consistency

- `title`: Title Case ตรงกับ filename, `description`: กระชับไม่เกิน 100 ตัวอักษร
- `auto_execution_mode: 3` เสมอ, `url` และ `related_workflows` optional
- ## Goal, ## Scope, ## Execute, ## Rules, ## Expected Outcome (required), ## Report (optional)
- Goal สอดคล้องกับ Filename, Execute สอดคล้องกับ Goal และ Rules, Expected Outcome สอดคล้องกับ Goal

### 2. Multi-Tool Compatibility

- ใช้ relative paths ไม่ใช้ absolute paths ของ tool เฉพาะ ถ้าจำเป็นระบุเป็น conditional
- Workflow structure ต้องเหมือนกันทุก tool แตกต่างเฉพาะตำแหน่งไฟล์

### 3. Content And Style

- หัวข้อภาษาอังกฤษ Title Case, รายการภาษาไทย, ใช้ bullet points (-) ชิดซ้ายใน Rules
- ไฟล์ไม่เกิน 250 บรรทัด, ใช้ backticks สำหรับ `tools`, `commands`, `file paths`, `/workflow-name`
- เขียนเป็นหลักการ how-to ไม่ใช่ step-by-step เฉพาะกรณี

### 4. References And Non-Redundancy

- ใช้ references แทน duplicate, ไม่ซ้ำซ้อนระหว่าง Execute และ Rules
- Orchestrator workflow อ้างถึง sub-workflow โดยไม่ระบุรายละเอียดภายใน
- รายละเอียดที่อยู่ใน sub-workflow แล้วให้อ้างถึง ไม่ duplicate

### 5. Execution And Automation

- เรียงลำดับ: Foundation ก่อน, High impact ก่อน, Dependencies ก่อน, Critical path ก่อน, High risk เพื่อ fail fast
- เขียน conditional execution สำหรับ steps ที่ไม่จำเป็นต้องทำทุก project ใช้ "ถ้ามี..." หรือ "ถ้า project มี..."
- ใช้ `/use-scripts` เมื่อ file operations มากกว่า 10 ไฟล์, pattern matching ต้อง parser, หรือ metrics calculation ต้อง aggregation
- ใช้ `/deep-analyze-with-use-scripts` ใน Execute สำหรับ workflows ที่มี step วิเคราะห์โปรเจกต์
- ถ้าเป็น monorepo: ทำ `/follow-monorepo`

### 6. Workflow Type Requirements

- `analyze-*` ต้องมี `/deep-analyze-with-use-scripts` เป็น step แรก, `/report-format-table` ในขั้นตอนสุดท้าย, severity classification, "Analysis Only" rule, และ "Use Scripts For Analysis" rule
- `review-*` ต้องมี `/report` ใน Execute, severity classification, และ actionable recommendations
- ถ้า workflow มี output ต้องระบุ `/report-format-*` ที่ใช้

### 7. Best Practices Alignment

- อ้างอิง official documentation เมื่อเขียนเกี่ยวกับ tools หรือ libraries เฉพาะเจาะจง
- ตรวจสอบว่า workflow structure สอดคล้องกับ best practices ของ markdown และ documentation

## Example Template

```markdown
---
title: Workflow Name
description: กระชับไม่เกิน 100 ตัวอักษร
auto_execution_mode: 3
related_workflows: [/related-workflow]
---

## Goal

วัตถุประสงค์กระชับ

## Scope

ขอบเขตงานที่ครอบคลุม

## Execute

### 1. Step Name

1. ทำ `/workflow-name` เพื่อ [วัตถุประสงค์]

## Rules

### 1. Rule Category

- bullet point 1

## Expected Outcome

- Outcome ที่คาดหวัง
```

## Expected Outcome

- Workflow file มีโครงสร้างสม่ำเสมอ อ่านง่าย รองรับหลาย AI tools
- Execute และ Rules เขียนตาม format ที่กำหนด ไม่เกิน 250 บรรทัด
- ออกแบบตาม `/improve-context-rot` และ `/follow-harness-engineering`
- Workflows ที่อ้างอิงมีอยู่จริง และแนะนำ workflows ที่ควรใช้ต่อ
