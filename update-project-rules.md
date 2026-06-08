---
title: Update Project Rules
description: อัปเดต project rules ตามการวิเคราะห์โปรเจกต์และ best practices
auto_execution_mode: 3
---

## Goal

อัปเดต project rules ใน `.windsurf/rules/` ตามการวิเคราะห์โปรเจกต์และ best practices

## Execute

### 1. Analyze Current State

วิเคราะห์สถานะปัจจุบันของ project rules

1. ทำ `/analyze-project` เพื่อเข้าใจโครงสร้างโปรเจกต์
2. อ่าน rules ที่มีอยู่ใน `.windsurf/rules/`
3. ระบุ gaps ระหว่าง current rules และ project needs

### 2. Identify Rule Categories

ระบุประเภทของ rules ที่ต้องการ

1. ระบุ architectural patterns จาก `/follow-architecture`
2. ระบุ tech stack specific rules (frameworks, languages)
3. ระบุ quality standards (linting, formatting, testing)
4. ระบุ security requirements และ best practices

### 3. Update Workspace Rules

อัปเดต rules ใน `.windsurf/rules/`

1. สร้างหรืออัปเดตไฟล์ rules ตาม categories ที่ระบุ
2. ใช้ `/follow-content-quality` สำหรับคุณภาพเนื้อหา
3. ทำ `/update-reference` หากมี file operations
4. ตรวจสอบว่า rules ไม่ซ้ำซ้อนกับ global rules

### 4. Validate And Test

ตรวจสอบและทดสอบ rules

1. ตรวจสอบว่า rules ถูกต้องและสมบูรณ์
2. ทำ `/check-correctness` เพื่อตรวจสอบความถูกต้อง
3. ทดสอบว่า rules ทำงานได้จริง
4. ทำ `/report` เพื่อสรุปผลการอัปเดต

## Rules

### 1. Rule Storage

Rules ต้องเก็บใน locations ที่ถูกต้อง:

- Workspace rules: `.windsurf/rules/*.md`

### 2. Rule Discovery

Windsurf ค้นหา rules จาก:

- Current workspace และ sub-directories: ทุก `.windsurf/rules` directories
- Git repository structure: ค้นหาขึ้นไปจนถึง git root
- Multiple workspace: deduplicate และแสดง path สั้นสุด

### 3. Rule Categories

Rules ควรจัดกลุ่มตาม categories:

- Architecture: patterns, structure, organization
- Code Quality: linting, formatting, style
- Testing: coverage, frameworks, patterns
- Security: vulnerabilities, secrets, best practices
- Performance: optimization, anti-patterns
- Dependencies: management, updates, versions

### 4. Non-Redundancy

หลีกเลี่ยงความซ้ำซ้อน:

- ไม่ซ้ำกับ global rules ใน `global_rules.md`
- รวม rules ที่เกี่ยวข้องไว้ในไฟล์เดียว
- ใช้ references แทนการ duplicate
- เป็น single source of truth

### 5. Activation Mode

Rules มี activation modes:

- `always_on`: ใช้เสมอ
- `glob`: match กับ file patterns
- `model_decision`: AI ตัดสินใจเอง
- `manual`: ต้องเปิดใช้งานด้วยตนเอง

### 6. Content Quality

Rules ต้องมีคุณภาพ:

- ชัดเจน กระชับ อ่านง่าย
- มีตัวอย่างที่เข้าใจง่าย
- สอดคล้องกับ project context
- ไม่ subjective หรือ ambiguous

## Expected Outcome

- Project rules ที่อัปเดตแล้วใน `.windsurf/rules/`
- Rules ที่สอดคล้องกับ project needs
- ไม่มีความซ้ำซ้อนกับ global rules
- Rules ที่ทำงานได้จริงและถูกต้อง
