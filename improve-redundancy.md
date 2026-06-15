---
title: Improve Redundancy
description: ลดความซ้ำซ้อนในทุกด้าน ใช้ single source of truth
auto_execution_mode: 3
related_workflows:
  - /follow-consistency
  - /improve-content
---

## Goal

ลดความซ้ำซ้อนในทุกด้าน ใช้ single source of truth

## Scope

ใช้สำหรับลดความซ้ำซ้อนใน content, code, configuration, documentation, workflows, skills

## Execute

### 1. Identify Redundancy

ระบุความซ้ำซ้อนในระบบ

- ตรวจสอบ duplicate content ทั่วทั้งระบบ (เช่น description ซ้ำกันในหลาย workflows)
- ตรวจสอบ duplicate patterns (code patterns, content patterns, configuration patterns)
- วิเคราะห์ความซ้ำซ้อนใน configuration
- ระบุส่วนที่สามารถรวมได้ (มีความหมายเหมือนกัน, ใช้ใน context เดียวกัน, ไม่มีความแตกต่างเฉพาะ)

### 2. Consolidate Content

รวมรายละเอียดที่เหมือนกัน

- รวม content ที่เหมือนกันไว้ที่เดียว (เช่น รวม description ซ้ำไว้ที่ workflow หลัก)
- สร้าง single source of truth
- จัดลำดับ content ให้เป็นระเบียบ (ใช้ hierarchy ตามความสำคัญ, จัดกลุ่มตาม domain)
- ลบ content ที่ซ้ำซ้อน

### 3. Use References

ใช้ references แทนการ duplicate

- ใช้ references ไปยัง single source of truth (เช่น `ทำตาม /workflow-name`)
- อัปเดท references ทั้งหมด
- ตรวจสอบว่า references ถูกต้อง
- ทำ `/check-reference` เพื่อตรวจสอบ references มีอยู่จริง

### 4. Verify

ตรวจสอบว่าไม่มีความซ้ำซ้อน

- ตรวจสอบว่าไม่มี duplicate content (ใช้ search tools เพื่อตรวจสอบ)
- ตรวจสอบว่า references ถูกต้อง (ทั้งใน workflows และ skills)
- ตรวจสอบว่า single source of truth ถูกต้อง (ครบถ้วนและอัปเดทล่าสุด)
- ตรวจสอบว่าไม่มี orphan content (content ที่ไม่มีใครอ้างอิง)

## Rules

### 1. Single Source Of Truth

ใช้ single source of truth

- รวมรายละเอียดที่เหมือนกันไว้ที่เดียว
- ใช้ references ไปยัง single source of truth
- หลีกเลี่ยงการ copy-paste โดยไม่จำเป็น
- อัปเดท single source of truth เมื่อมีการเปลี่ยนแปลง

### 2. Reference Usage

ใช้ references อย่างถูกต้อง

- ใช้ references แทนการ duplicate content
- เขียน references เป็นลิงค์เท่านั้น
- ตรวจสอบ references ว่ามีอยู่จริง
- อัปเดท references เมื่อมีการเปลี่ยนแปลง

### 3. Content Consolidation

รวม content อย่างมีประสิทธิภาพ

- รวม content ที่เหมือนกันไว้ที่เดียว
- จัดลำดับ content ให้เป็นระเบียบ
- ใช้ headings และ sections ชัดเจน
- ลบ content ที่ไม่จำเป็น

### 4. Dependency Management

จัดการ dependencies อย่างถูกต้อง

- ตรวจสอบ dependent workflows เมื่อแก้ไข
- อัปเดท references ทั้งหมดที่เกี่ยวข้อง
- ตรวจสอบว่าไม่มี circular references
- ตรวจสอบว่า references สอดคล้องกัน

## Expected Outcome

- ไม่มี duplicate content (ลด duplicate content ลง 100%)
- ใช้ single source of truth (ทุก content มี source เดียว)
- References ถูกต้องและอัปเดท (ทั้งหมดผ่าน `/check-reference`)
- Content รวมอย่างมีประสิทธิภาพ (จัดลำดับชัดเจน ตาม hierarchy)
- Workflows และ skills ใช้ references อย่างถูกต้อง (ไม่มี circular references)
