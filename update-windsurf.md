title: Update Windsurf Configuration
description: อัพเดทและปรับปรุงไฟล์ configuration และ workflows ของ Windsurf ให้เป็นมาตรฐาน
auto_execution_mode: 3
## Purpose

อัพเดทและปรับปรุงไฟล์ configuration และ workflows ของ Windsurf ให้เป็นมาตรฐานและสม่ำเสมอ

## Scope

ใช้สำหรับ:

- อัพเดท skill files ให้เป็นมาตรฐาน
- อัพเดท workflow files ให้สอดคล้องกัน
- ตรวจสอบและแก้ไข references ที่ไม่ถูกต้อง
- ปรับปรุงโครงสร้างและเนื้อหาให้เป็นมาตรฐาน

## Inputs

| Input | Details |
|-------|-----------|
| Target Directory | Directory containing files to update |
| Update Type | Skills, workflows, or both |
| Standards | Which standards to follow |

## Rules

### Reference Validation Rules

| Category | Requirements |
|----------|--------------|
| **Verify Before Reference** | Always verify that referenced files/workflows/skills exist before creating references |
| **No Broken Links** | Never create references to non-existent paths |
| **Post-Update Check** | After any update, run `/validate` to verify all references are correct |
| **Skill References** | Use `@skill-name` format and verify skill exists in skills directory |
| **Workflow References** | Use `/workflow-name` format and verify workflow exists in workflows directory |
| **File References** | Use relative or absolute paths and verify file exists |
| **MCP References** | Verify MCP server is available before referencing |

### Quality Rules

| Category | Requirements |
|----------|--------------|
| **Standards Compliance** | All updated files must follow `/write-workflows` standards |
| **Frontmatter Complete** | Must include title, description, auto_execution_mode, file-patterns |
| **9 Main Sections** | Purpose, Scope, Inputs, Rules, Structure, Steps, Outputs, Expected Outcome, Reference |
| **English Headings** | All headings must be in English |
| **Thai Content** | All content in Thai except headings and code |

### Update Rules

| Category | Requirements |
|----------|--------------|
| **Update global_rules.md** | ใช้ `/update-global-rules` เพื่ออัพเดท `global_rules.md` ให้เป็นมาตรฐาน |
| **Update write-workflows** | ใช้ `/update-global-workflows` เพื่ออัพเดท `/write-workflows` ให้เป็นมาตรฐาน |
| **Cross-Reference Sync** | ทุกครั้งที่อัพเดท workflow หลัก ต้องอัพเดท workflows ที่เกี่ยวข้องด้วย |

## Steps

### Phase 1: Setup

- 1.1 **เตรียม Context**
  - อ่าน config และ rules ที่เกี่ยวข้อง
  - ตรวจสอบ `follow` references ใน frontmatter
  - ใช้ `/write-workflows` เพื่อเข้าใจมาตรฐาน

### Phase 2: Research

- 2.1 **ศึกษา Reference**
  - อ่าน `/update-skills` workflow
  - อ่าน `/update-global-workflows` workflow
  - รวบรวมข้อมูลสำคัญสำหรับการอัพเดท

### Phase 3: Analyze

- 3.1 **วิเคราะห์โครงสร้าง**
  - กำหนดว่าไฟล์ใดบ้างต้องอัพเดท
  - ระบุส่วนที่ไม่ตรงตามมาตรฐาน
  - วางแผนการอัพเดท

### Phase 4: Plan

- 4.1 **วางแผนการอัพเดท**
  - กำหนดลำดับการอัพเดทไฟล์ตามความสำคัญ
  - ออกแบบ steps ให้ชัดเจนและทำตามได้

### Phase 5: Execute

- 5.1 **อัพเดท Skills**
  - ใช้ `/update-skills` เพื่ออัพเดท skill files ทั้งหมด
  - ตรวจสอบให้เข้ากับ `@write-skills/folder-prefix` และ `@write-skills/templates`

- 5.2 **อัพเดท Global Workflows**
  - ใช้ `/update-global-workflows` เพื่ออัพเดท workflow files
  - ตรวจสอบให้เข้ากับ `/write-workflows`

- 5.3 **อัพเดท Global Rules**
  - ใช้ `/update-global-rules` เพื่ออัพเดท `global_rules.md`
  - ตรวจสอบให้เข้ากับมาตรฐานที่กำหนด

- 5.4 **อัพเดท Write-Workflows**
  - ใช้ `/update-global-workflows` เพื่ออัพเดท `/write-workflows`
  - ตรวจสอบให้มีการอัพเดทล่าสุดจาก `/update-global-workflows`

- 5.5 **รัน /optimize-workflows**
  - ปรับปรุงคุณภาพหลังอัพเดทเสร็จ
  - ตรวจสอบความสม่ำเสมอ

- 5.6 **อัพเดท Skills README**
  - ใช้ `/update-readme` เพื่ออัพเดท `C:\Users\Veerapong\.codeium\windsurf\skills\README.md`
  - ตรวจสอบให้มีข้อมูลครบถ้วนตามมาตรฐาน

### Phase 6: Verify

- 6.1 **ตรวจสอบความถูกต้อง**
  - ตรวจสอบ frontmatter ครบถ้วน
  - ตรวจสอบ step numbering ต่อเนื่อง
  - ตรวจสอบ reference มีอยู่จริง

- 6.2 **ตรวจสอบ Reference Paths**
  - หลังจากอัพเดท ให้ตรวจสอบว่า reference paths ทั้งหมดมีอยู่จริง

### Phase 7: Review

- 7.1 **ตรวจสอบคุณภาพ**
  - อ่านทวนเนื้อหาทั้งหมด
  - ตรวจสอบความชัดเจนของภาษา
  - ตรวจสอบ formatting

### Phase 8: Finalize

- 8.1 **รัน /optimize-workflows**
  - ตรวจสอบความสมบูรณ์
  - สรุปผลงานที่อัพเดท

## Expected Outcome

- ไฟล์ skills และ workflows ทั้งหมดเป็นมาตรฐาน
- Frontmatter ครบถ้วนตามมาตรฐาน
- Reference paths มีอยู่จริงและถูกต้อง
- เนื้อหาเข้าใจง่ายและเป็นมืออาชีพ

## Reference

- `/update-skills` - อัพเดท skill files
- `/update-global-workflows` - อัพเดท workflow files
- `/write-workflows` - มาตรฐานการเขียน workflow
- `/learn-from-web` - อัพเดทเนื้อหาจากแหล่งข้อมูล
- `/optimize-workflows` - ปรับปรุงคุณภาพ workflows
