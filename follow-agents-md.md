---
title: Follow Agents Md
description: Follow AGENTS.md specified in workspace
auto_execution_mode: 3
related_workflows:
  - /follow-content-quality
  - /update-reference
---

## Goal

ทำตาม AGENTS.md ที่ระบุ workflows และ skills สำหรับโปรเจกต์

## Scope

การทำตาม AGENTS.md ใน workspace รวมถึงการอัปเดต การอ่าน และการทำตาม workflows และ skills ที่ระบุ

## Execute

### 1. Analyze Project

วิเคราะห์โปรเจกต์เพื่อเข้าใจโครงสร้างและความต้องการ

1. ทำ `/analyze-project` เพื่อเข้าใจโครงสร้างโปรเจกต์
2. ระบุ tech stack, frameworks, และ patterns ที่ใช้
3. บันทึก project type และ architecture

### 2. Identify Relevant Workflows

ระบุ global workflows ที่เกี่ยวข้องกับโปรเจกต์

1. อ่าน global workflows ทั้งหมดใน `~/.codeium/windsurf/global_workflows/`
2. ระบุ workflows ที่เกี่ยวข้องกับ tech stack และ project type
3. ระบุ workflows ที่จำเป็นสำหรับ development lifecycle
4. จัดกลุ่ม workflows ตาม categories (setup, development, deployment)

### 3. Identify Relevant Skills

ระบุ skills ที่เกี่ยวข้องกับโปรเจกต์

1. อ่าน skills ทั้งหมดใน `~/.codeium/windsurf/skills/`
2. ระบุ skills ที่เกี่ยวข้องกับ tech stack และ frameworks
3. ระบุ skills ที่จำเป็นสำหรับ development patterns
4. จัดกลุ่ม skills ตาม categories

### 4. Update AGENTS.md

อัปเดตไฟล์ AGENTS.md ด้วย workflows และ skills ที่ระบุ

1. อ่าน AGENTS.md ที่มีอยู่ใน workspace
2. เขียนหรืออัปเดต AGENTS.md ด้วย workflows และ skills ที่เกี่ยวข้อง
3. ใช้ `/follow-content-quality` สำหรับคุณภาพเนื้อหา
4. ทำ `/update-reference` หากมี file operations

### 5. Locate And Parse AGENTS.md

ค้นหาและวิเคราะห์ AGENTS.md

1. ค้นหา AGENTS.md ใน workspace root
2. ตรวจสอบว่าไฟล์มีอยู่
3. อ่านเนื้อหา AGENTS.md
4. ระบุ workflows และ skills ที่ระบุ
5. จัดกลุ่มตาม categories ที่ระบุ

### 6. Execute Workflows

ทำตาม workflows ที่ระบุ

1. ตรวจจับ development phase ปัจจุบันอัตโนมัติ:
   - โปรเจกต์ใหม่/เซสชันใหม่: ไม่มี package.json, ไม่มี config files, หรือ workspace ว่างเปล่า
   - พัฒนาฟีเจอร์: มี package.json, มี config files, มี source code
   - เริ่มเผยแพร่: มีการเปลี่ยนแปลง version, changelog, หรือพร้อมเผยแพร่
2. ทำ workflows ตาม phase ที่ตรวจจับได้ตามลำดับ
3. ทำจริงแต่ละอัน ตามลำดับจนเสร็จ ไม่ใช่แค่จัดกลุ่ม
4. ทำ `/update-reference` ถ้ามี file operations

### 7. Load Skills

โหลด skills ที่ระบุ

1. โหลด skills ตามที่ระบุใน AGENTS.md
2. ใช้ skills สำหรับการพัฒนาตาม context

### 8. Validate

ตรวจสอบความถูกต้องของ AGENTS.md

1. ตรวจสอบว่า workflows และ skills ที่ระบุมีอยู่จริง
2. ตรวจสอบว่าเนื้อหาสอดคล้องกับ project needs
3. ทำ `/check-correctness` เพื่อตรวจสอบความถูกต้อง
4. ทำ `/report` เพื่อสรุปผลการอัปเดต

## Rules

### 1. AGENTS.md Structure

โครงสร้างของ AGENTS.md:

- ต้องอยู่ใน workspace root
- ใช้ YAML frontmatter สำหรับ metadata
- จัดกลุ่ม workflows และ skills ตาม categories
- ใช้ markdown สำหรับ formatting

### 2. AGENTS.md Location

AGENTS.md ต้องอยู่ใน:

- Workspace root
- ชื่อไฟล์ต้องเป็น `AGENTS.md` (ตัวพิมพ์ใหญ่)

### 3. Execution Order

ทำตามลำดับที่ระบุใน AGENTS.md:

- ถ้าระบุลำดับ ให้ทำตามลำดับนั้น
- ถ้าไม่ระบุ ให้ทำตามลำดับ development lifecycle
- Foundation workflows ก่อน
- High impact workflows ก่อน

### 4. Workflow Selection

เลือก workflows ที่เกี่ยวข้อง:

- เลือกตาม tech stack (frameworks, languages)
- เลือกตาม project type (monorepo, single repo)
- เลือกตาม development needs (setup, linting, testing)
- หลีกเลี่ยง workflows ที่ไม่เกี่ยวข้อง

### 5. Skill Selection

เลือก skills ที่เกี่ยวข้อง:

- เลือกตาม libraries และ frameworks ที่ใช้
- เลือกตาม patterns ที่ใช้ในโปรเจกต์
- เลือกตาม best practices ที่ต้องการ
- หลีกเลี่ยง skills ที่ไม่เกี่ยวข้อง

### 6. Content Quality

เนื้อหาใน AGENTS.md ต้อง:

- ชัดเจน กระชับ อ่านง่าย
- มี description สำหรับแต่ละ workflow และ skill
- จัดกลุ่มตาม categories ที่ชัดเจน
- ไม่ซ้ำซ้อนกับ global rules

### 7. Non-Redundancy

หลีกเลี่ยงความซ้ำซ้อน:

- ไม่ซ้ำกับ global rules ใน `global_rules.md`
- รวม workflows และ skills ที่เกี่ยวข้องไว้ด้วยกัน
- ใช้ references แทนการ duplicate
- เป็น single source of truth สำหรับ project

### 8. Workflow Validation

ตรวจสอบ workflows ก่อนทำ:

- ตรวจสอบว่า workflows ที่ระบุมีอยู่
- ถ้าไม่พบ ให้ข้ามหรือแจ้งเตือน
- ตรวจสอบว่า workflows เหมาะสมกับโปรเจกต์

### 9. Skill Validation

ตรวจสอบ skills ก่อนโหลด:

- ตรวจสอบว่า skills ที่ระบุมีอยู่
- ถ้าไม่พบ ให้ข้ามหรือแจ้งเตือน
- ตรวจสอบว่า skills เหมาะสมกับโปรเจกต์

### 10. Error Handling

จัดการ error เมื่อเกิดขึ้น:

- ถ้า AGENTS.md ไม่มี ให้แจ้งเตือน
- ถ้า workflow ไม่มี ให้ข้ามและแจ้งเตือน
- ถ้า skill ไม่มี ให้ข้ามและแจ้งเตือน

## Expected Outcome

- [ ] AGENTS.md ที่อัปเดตแล้วใน workspace root
- [ ] Workflows และ skills ที่เกี่ยวข้องกับโปรเจกต์
- [ ] เนื้อหาที่ชัดเจนและจัดกลุ่มอย่างเป็นระบบ
- [ ] ไม่มีความซ้ำซ้อนกับ global rules
- [ ] Workflows ที่ระบุใน AGENTS.md ถูกทำ
- [ ] Skills ที่ระบุใน AGENTS.md ถูกโหลด
- [ ] โปรเจกต์ถูกพัฒนาตามมาตรฐานที่ระบุ
- [ ] ไม่มี error จาก workflows หรือ skills ที่ไม่มีอยู่

## Common Mistakes

ข้อผิดพลาดที่พบบ่อย:

- ไม่วิเคราะห์โปรเจกต์ก่อนเลือก workflows และ skills
- เลือก workflows หรือ skills ที่ไม่เกี่ยวข้อง
- ไม่ตรวจสอบว่า workflows หรือ skills มีอยู่จริง
- ไม่ใช้ `/follow-content-quality` สำหรับคุณภาพเนื้อหา
- ไม่ทำ `/update-reference` หลัง file operations
- ไม่ตรวจสอบว่า AGENTS.md มีอยู่ก่อนทำ
- ไม่เรียงลำดับ workflows ตาม development lifecycle

## Anti-Patterns

รูปแบบที่ควรหลีกเลี่ยง:

- ❌ เลือก workflows หรือ skills โดยไม่วิเคราะห์โปรเจกต์
- ❌ Duplicate เนื้อหาจาก global rules
- ❌ ไม่จัดกลุ่ม workflows และ skills ตาม categories
- ❌ ไม่ตรวจสอบความถูกต้องของ AGENTS.md
- ❌ ทำ workflows โดยไม่ตรวจสอบ AGENTS.md
- ❌ ข้าม workflow validation
- ❌ โหลด skills โดยไม่ตรวจสอบว่ามีอยู่
- ❌ ไม่เรียงลำดับตาม development lifecycle
