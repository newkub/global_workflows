---
title: Grouping Workflows
description: จัดกลุ่ม workflows ตามประเภทและหมวดหมู่
auto_execution_mode: 3
---

## Goal

จัดกลุ่ม workflows ใน global_workflows ตามประเภทและหมวดหมู่เพื่อให้จัดการและค้นหาได้ง่ายิ่ง

## Execute

### 1. Analyze Workflow Patterns

วิเคราะห์ patterns ของ workflows ทั้งหมด

1. ระบุ prefixes ที่มี (analyze-, check-, follow-, run-, improve-, etc.)
2. ระบุ workflows ที่ไม่มี prefix
3. ระบุ workflows ที่มีความสัมพันธ์กัน
4. ระบุ workflows ที่ทำงานคล้ายกัน

### 2. Define Categories

กำหนด categories สำหรับการจัดกลุ่ม

- **Analysis**: analyze-* workflows
- **Quality Checks**: check-* workflows
- **Development**: run-* workflows
- **Improvement**: improve-* workflows
- **Configuration**: follow-* workflows ที่เกี่ยวกับ config
- **File Operations**: edit-*, delete-*, move-*, rename-*
- **Project Management**: ship-code, plan, etc.
- **Utilities**: all-*, continue, etc.

### 3. Group Workflows

จัดกลุ่ม workflows ตาม categories

1. แยก workflows ตาม categories ที่กำหนด
2. จัดลำดับ workflows ภายในแต่ละ category
3. เพิ่ม subcategories ถ้าจำเป็น
4. จัดเก็บ workflows ที่คล้ายกันไว้ด้วยกัน

### 4. Generate Grouped List

สร้างรายการ workflows ที่จัดกลุ่มแล้ว

1. สร้าง list แบบ markdown แสดง categories
2. แสดง workflows ในแต่ละ category
3. เพิ่ม descriptions สั้นๆ สำหรับแต่ละ category
4. เพิ่ม cross-references ระหว่าง categories

## Rules

- ใช้ prefix เป็น primary grouping
- ใช้ functionality เป็น secondary grouping
- จัดกลุ่มตาม business logic ไม่ใช่ technical details
- เก็บ workflows ที่คล้ายกันไว้ด้วยกัน
- ไม่สร้าง categories ที่มี workflow เดียว

## Expected Outcome

- Workflows จัดกลุ่มตามประเภทชัดเจน
- ง่าต่อการค้นหาตาม category
- ง่าต่อการเข้าใจ scope ของ workflows
