---
title: Analyze Project Issues
description: วิเคราะห์ issues ใน project และ report เป็น table
auto_execution_mode: 3
related_workflows:
  - /report-format-table
  - /report
  - /analyze-project
  - /analyze-codebase
---

## Goal

วิเคราะห์ issues ใน project และ report เป็น table เพื่อการจัดการที่เป็นระบบ

## Scope

ใช้สำหรับการวิเคราะห์ issues ใน project (TODO, FIXME, HACK, comments ฯลฯ)

## Execute

### 1. Scan Project For Issues

ค้นหา issues ใน project

1. ใช้ Grep ค้นหา patterns: `TODO`, `FIXME`, `HACK`, `XXX`
2. ค้นหา comments ที่บ่งบอกปัญหา: `// BUG`, `// ISSUE`, `// PROBLEM`
3. ค้นหา error handling ที่ไม่สมบูรณ์: `catch {}`, `// ignore error`
4. ค้นหา mock implementations: `// MOCK`, `// FAKE`, `// STUB`
5. รวบรวมผลลัพธ์จากทุก source

### 2. Analyze Each Issue

วิเคราะห์แต่ละ issue ที่พบ

1. อ่าน context รอบๆ issue เพื่อเข้าใจปัญหา
2. ประเมิน severity (critical, high, medium, low)
3. ประเมิน impact (functionality, performance, security, maintainability)
4. ประเมิน effort ที่ต้องใช้ในการแก้ไข
5. ตรวจสอบ dependencies ระหว่าง issues

### 3. Categorize Issues

จัดหมวดหมู่ issues

1. จัดกลุ่มตาม type: bugs, features, refactoring, documentation, testing
2. จัดกลุ่มตาม module หรือ component
3. จัดกลุ่มตาม priority ของการแก้ไข
4. จัดกลุ่มตาม complexity ของการแก้ไข

### 4. Generate Report

สร้างรายงานเป็น table

1. ทำ `/report-format-table` เพื่อจัดรูปแบบตาราง
2. กำหนด columns: ลำดับ, ประเภท, รายละเอียด, ความรุนแรง, ความพยายาม, สถานะ
3. จัดกลุ่มข้อมูลตาม category ที่กำหนด
4. เรียงลำดับตาม priority (critical > high > medium > low)
5. ใช้ symbols (🔴, 🟡, 🟢) สำหรับ severity indicators

## Rules

### 1. Scanning

กฎการค้นหา issues

- ใช้ Grep สำหรับค้นหา patterns
- ค้นหาทุก type ของ issues (TODO, FIXME, HACK, BUG)
- ค้นหา error handling ที่ไม่สมบูรณ์
- ค้นหา mock implementations
- รวบรวมผลลัพธ์จากทุก source

### 2. Analysis

กฎการวิเคราะห์ issues

- อ่าน context รอบๆ issue
- ประเมิน severity, impact, effort
- ตรวจสอบ dependencies ระหว่าง issues

### 3. Categorization

กฎการจัดหมวดหมู่

- จัดกลุ่มตาม type (bugs, features, refactoring, documentation, testing)
- จัดกลุ่มตาม module หรือ component
- จัดกลุ่มตาม priority และ complexity

### 4. Report Formatting

กฎการจัดรูปแบบรายงาน

- ทำตาม `/report-format-table`
- มี numbered columns
- มี columns: ลำดับ, ประเภท, รายละเอียด, ความรุนแรง, ความพยายาม, สถานะ
- จัดกลุ่มตาม category
- เรียงลำดับตาม priority
- ใช้ symbols สำหรับ severity indicators

## Expected Outcome

- Table report ที่มีข้อมูล issues ครบถ้วน
- Analysis ที่ถูกต้องและเป็นระบบ
- การจัดหมวดหมู่ที่ชัดเจน
- การจัดลำดับ priority ที่เหมาะสม
- การจัดรูปแบบตามมาตรฐาน `/report-format-table`
