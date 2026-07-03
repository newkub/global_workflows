---
title: Review Issue and Fix
description: ระบบวิเคราะห์และแก้ไขปัญหาทั่วไป (code, content, docs, config, workflows)
auto_execution_mode: 3
---

## Goal

วิเคราะห์และแก้ไขปัญหาอย่างเป็นระบบ ไม่ว่าจะเป็น code, content, documentation, configuration, หรือ workflows โดยใช้กระบวนการที่เป็นระบบและสามารถใช้ได้กับทุก context

## Execute

### 1. Understand Context

1. **ระบุประเภทของปัญหา**
   - Code issue (bug, error, performance)
   - Content issue (documentation, markdown, text)
   - Config issue (configuration files, environment)
   - Workflow issue (process, automation)
   - Architecture issue (structure, design)

2. **รวบรวมข้อมูล**
   - อ่านไฟล์ที่เกี่ยวข้อง
   - ดู error messages หรือ logs
   - ทำความเข้าใจ requirements
   - ระบุ stakeholders ที่เกี่ยวข้อง

3. **ตั้งคำถามถ้าจำเป็น**
   - ถ้าไม่เข้าใจ context ให้ถามผู้ใช้
   - ขอ clarification ถ้าข้อมูลไม่เพียงพอ
   - ยืนยัน assumptions ก่อนดำเนินการ

### 2. Analyze Problem

1. **ระบุ Root Cause**
   - ใช้ `/follow-root-cause-analysis` สำหรับปัญหาที่ซับซ้อน
   - แยกปัญหาออกเป็นส่วนย่อยๆ
   - ระบุ dependencies ที่เกี่ยวข้อง
   - ตรวจสอบ patterns ที่คล้ายกัน

2. **จัดลำดับความสำคัญ**
   - ระบุ impact ของปัญหา
   - ประเมินความเร่งด่วน
   - พิจารณา trade-offs
   - ตัดสินใจว่าควรแก้ที่จุดไหน

3. **วางแผนแนวทางแก้ไข**
   - คิดหลาย solutions ที่เป็นไปได้
   - เปรียบเทียบ pros/cons
   - เลือก solution ที่เหมาะสมที่สุด
   - วางแผนการ implement

### 3. Implement Fix

1. **ทำการเปลี่ยนแปลง**
   - ใช้ tools ที่เหมาะสมกับ context
   - ทำ minimal changes ที่จำเป็น
   - หลีกเลี่ยง over-engineering
   - ทำตาม best practices ที่เกี่ยวข้อง

2. **ตรวจสอบความถูกต้อง**
   - รัน validation ตาม context
   - ทดสอบว่าแก้ปัญหาได้จริง
   - ตรวจสอบ side effects
   - ยืนยันว่าไม่สร้างปัญหาใหม่

3. **ทำตาม workflows ที่เกี่ยวข้อง**
   - ถ้าเป็น code: ทำ `/ship-run` หรือ `/edit-only`
   - ถ้าเป็น content: ทำ `/follow-content-quality`
   - ถ้าเป็น config: ทำ `/follow-config`
   - ถ้าเป็น workflow: ทำ `/follow-workflows`

### 4. Verify and Document

1. **ยืนยันการแก้ไข**
   - รัน tests ถ้ามี
   - ตรวจสอบ output
   - ทดสอบ manually ถ้าจำเป็น
   - ยืนยันกับผู้ใช้

2. **Document การเปลี่ยนแปลง**
   - อัพเดท comments ถ้าจำเป็น
   - เพิ่ม documentation ถ้าจำเป็น
   - บันทึก lessons learned
   - อัพเดท references ที่เกี่ยวข้อง

3. **ปิด task**
   - รายงานผลลัพธ์
   - แนะนำ next actions
   - อัพเดท todo list
   - ทำ `/suggest-next-action`

## Rules

### 1. Generic Principles

ใช้หลักการที่ใช้ได้กับทุก context:

- **Understand first, fix later** - อย่าแก้โดยไม่เข้าใจ
- **Minimal changes** - แก้เฉพาะที่จำเป็น
- **Root cause focus** - แก้ที่ source ไม่ใช่ symptom
- **Verify thoroughly** - ยืนยันว่าแก้ได้จริง
- **Document clearly** - บันทึกสิ่งที่ทำและทำไม

### 2. Context-Specific Rules

**สำหรับ Code Issues:**
- ทำตาม `/follow-code-quality`
- ใช้ `/search-code` เพื่อหา patterns
- รัน typecheck, lint, test
- ทำ `/ship-run` หลังแก้

**สำหรับ Content Issues:**
- ทำตาม `/follow-content-quality`
- ตรวจสอบ grammar, spelling
- จัดรูปแบบตาม standards
- อัพเดท references

**สำหรับ Config Issues:**
- ทำตาม `/follow-config`
- ตรวจสอบ syntax
- ยืนยัน environment variables
- ทดสอบ configuration

**สำหรับ Workflow Issues:**
- ทำตาม `/follow-workflows`
- ตรวจสอบ dependencies
- ทดสอบ automation
- อัพเดท documentation

**สำหรับ Architecture Issues:**
- ทำตาม `/follow-architecture`
- วิเคราะห์ impact
- วางแผน migration
- ทำ incrementally

### 3. Communication Rules

- **Ask when uncertain** - ถ้าไม่แน่ใจให้ถาม
- **Be specific** - ระบุไฟล์, บรรทัด, ปัญหาชัดเจน
- **Provide context** - อธิบายทำไมต้องแก้
- **Report progress** - แจ้งสถานะอย่างสม่ำเสมอ
- **Suggest next actions** - แนะนำสิ่งที่ควรทำต่อ

## Expected Outcome

- ปัญหาถูกแก้ไขที่ root cause
- การเปลี่ยนแปลงเป็น minimal และ focused
- ไม่มี side effects ที่ไม่คาดคิด
- การเปลี่ยนแปลงถูก document ชัดเจน
- Stakeholders ทราบผลลัพธ์

## Examples

### Example 1: Code Bug

**Context:** Function คืนค่าผิด

**Steps:**
1. อ่านไฟล์ที่เกี่ยวข้อง
2. วิเคราะห์ logic ของ function
3. ระบุว่าเงื่อนไข if ผิด
4. แก้เงื่อนไข
5. รัน test
6. ทำ `/ship-run`

### Example 2: Documentation Error

**Context:** README มีข้อมูลเก่า

**Steps:**
1. อ่าน README.md
2. เปรียบเทียบกับ code จริง
3. ระบุส่วนที่เก่า
4. อัพเดท content
5. ทำ `/follow-content-quality`
6. ตรวจสอบ references

### Example 3: Config Issue

**Context:** Environment variable ผิด

**Steps:**
1. อ่าน .env และ config files
2. ตรวจสอบว่า variable ถูกต้อง
3. แก้ค่าใน .env
4. รัน application
5. ยืนยันว่าทำงานได้
6. อัพเดท .env.example

### Example 4: Workflow Bug

**Context:** Workflow ไม่ทำงานตามที่คาด

**Steps:**
1. อ่าน workflow file
2. ตรวจสอบ steps และ dependencies
3. ระบุ step ที่ผิด
4. แก้ workflow
5. ทดสอบ workflow
6. อัพเดท documentation

### Example 5: Architecture Issue

**Context:** Module มี circular dependency

**Steps:**
1. วิเคราะห์ dependency graph
2. ระบุ circular dependencies
3. วางแผน refactor
4. แยก shared types
5. ทำ incrementally
6. รัน tests ทุกครั้ง

## Edge Cases

### 1. Unclear Context

**Problem:** ไม่รู้ว่าเป็นประเภทไหน
**Solution:**
- ถามผู้ใช้สำหรับ clarification
- ดูไฟล์ที่เกี่ยวข้อง
- ทำ assumption และยืนยัน
- เริ่มจากการ analyze

### 2. Multiple Issues

**Problem:** มีหลายปัญหาพร้อมกัน
**Solution:**
- จัดลำดับความสำคัญ
- แก้ทีละอย่าง
- ทำตาม `/prioritize`
- รายงาน progress

### 3. No Clear Solution

**Problem:** ไม่รู้วิธีแก้
**Solution:**
- ค้นหา references
- ทำ `/deep-research`
- ขอคำแนะนำจากผู้ใช้
- ลอง solutions ที่เป็นไปได้

### 4. Breaking Changes

**Problem:** แก้แล้วทำให้อย่างอื่นพัง
**Solution:**
- ทำ rollback
- วิเคราะห์ impact
- วางแผน migration
- ทำ incrementally

### 5. Performance Impact

**Problem:** แก้แล้วช้าลง
**Solution:**
- วัด performance
- วิเคราะห์ bottleneck
- optimize หรือ reconsider
- ทำ `/run-profile`

## Tooling Integration

### 1. Code Analysis

สำหรับ code issues:
- **ast-grep** - ค้นหา patterns
- **Grep** - text search
- **Biome** - linting
- **Vitest** - testing

### 2. Content Analysis

สำหรับ content issues:
- **Grep** - ค้นหา text
- **read_file** - อ่านไฟล์
- **multi_edit** - แก้หลายไฟล์
- **find_by_name** - หาไฟล์

### 3. Config Validation

สำหรับ config issues:
- **JSON validators** - syntax check
- **Environment checkers** - variable validation
- **Config linters** - best practices

### 4. Workflow Testing

สำหรับ workflow issues:
- **Dry run** - ทดสอบโดยไม่ execute
- **Step-by-step** - ทำทีละ step
- **Logging** - ติดตาม execution

## Common Patterns

### 1. Debug Pattern

```
1. Reproduce issue
2. Add logging
3. Identify location
4. Fix root cause
5. Remove logging
6. Verify fix
```

### 2. Refactor Pattern

```
1. Understand current code
2. Identify improvements
3. Plan refactoring
4. Make changes incrementally
5. Test after each change
6. Final verification
```

### 3. Migration Pattern

```
1. Analyze old structure
2. Design new structure
3. Create migration plan
4. Implement incrementally
5. Test thoroughly
6. Remove old code
```

### 4. Documentation Pattern

```
1. Read existing docs
2. Identify gaps/errors
3. Update content
4. Verify accuracy
5. Check references
6. Update links
```

## Quality Checklist

ก่อนจบ task ตรวจสอบ:

- [ ] เข้าใจปัญหาอย่างถูกต้อง
- [ ] แก้ที่ root cause ไม่ใช่ symptom
- [ ] ทำ minimal changes ที่จำเป็น
- [ ] ไม่สร้าง side effects ใหม่
- [ ] ทดสอบว่าแก้ได้จริง
- [ ] Document การเปลี่ยนแปลง
- [ ] รายงานผลลัพธ์ชัดเจน
- [ ] แนะนำ next actions

## Related Workflows

- `/follow-root-cause-analysis` - วิเคราะห์หาสาเหตุหลัก
- `/resolve-errors` - แก้ errors อย่างเป็นระบบ
- `/debug-issue` - debug ปัญหาอย่างเป็นระบบ
- `/follow-code-quality` - คุณภาพโค้ด
- `/follow-content-quality` - คุณภาพ content
- `/follow-config` - configuration management
