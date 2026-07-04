---
title: Health
description: วิเคราะห์สุขภาพโปรเจกต์อย่างครบถ้วนและรายงานผลในรูปแบบตารางที่อ่านง่าย
auto_execution_mode: 3
related_workflows:
  - /analyze-project
  - /report-format-table
---

## Goal

วิเคราะห์สุขภาพโปรเจกต์อย่างครบถ้วนและรายงานผลในรูปแบบตารางที่อ่านง่าย

## Scope

ใช้สำหรับการตรวจสอบสุขภาพโปรเจกต์ทุกประเภท รวมถึง:
- โครงสร้างและ architecture
- Dependencies และ security
- Code quality และ maintainability
- Performance และ optimization
- Testing และ coverage

## Execute

### 1. Analyze Project

1. ทำ `/analyze-project` เพื่อวิเคราะห์โปรเจกต์อย่างครบถ้วน
2. รวบรวมข้อมูลทั้งหมดจากการวิเคราะห์
3. จัดกลุ่มข้อมูลตามหมวดหมู่ที่เกี่ยวข้อง

### 2. Prepare Data

1. แยกข้อมูลเป็น categories หลัก:
   - Structure & Architecture
   - Dependencies & Security
   - Code Quality
   - Testing & Coverage
   - Performance
   - Documentation
   - Code Organization
   - Configuration Management
   - CI/CD Pipeline
   - Git Workflow
   - Error Handling
   - Logging & Monitoring
   - API Design
   - State Management
   - Security Best Practices
   - Accessibility
   - Internationalization (i18n)
   - Performance Monitoring
   - Code Duplication
   - Technical Debt
2. กำหนด metrics และ status indicators สำหรับแต่ละ category
3. คำนวณ scores หรือ ratings ถ้าจำเป็น
4. วิเคราะห์ข้อมูลลึกซึ้งด้วย tools ต่างๆ (knip, taze, biome, oxlint, vitest)
5. ตรวจสอบ TODO, FIXME, HACK comments ทั่วทั้ง project
6. ตรวจสอบ console.log, console.error, console.warn usage
7. ตรวจสอบ test coverage และ test files
8. ตรวจสอบ README files และ documentation
9. ตรวจสอบ configuration files (tsconfig, biome, turbo, etc.)
10. ตรวจสอบ build configuration (bunup.config.ts)

### 3. Format Table

1. ทำ `/report-format-table` เพื่อจัดรูปแบบตาราง
2. กำหนด columns ดังนี้:
   - **No.** ลำดับ
   - **Metric** ตัวชี้วัด
   - **Value** ค่าที่วัดได้
   - **Status** สถานะ (✅/❌/⚠️)
   - **Severity** ความรุนแรง (High/Medium/Low)
   - **Location** ตำแหน่งที่พบ
   - **Recommendation** ข้อเสนอแนะ
3. จัดเรียง columns ตามความสำคัญ

### 4. Group And Sort

1. จัดกลุ่มข้อมูลตาม category ที่เกี่ยวข้อง
2. ใช้ headers สำหรับ grouping
3. เรียงลำดับภายในกลุ่มตามความรุนแรง (Severity)
4. ใช้ separators สำหรับแยกกลุ่มที่ชัดเจน

## Rules

### Table Structure

ทำตาม `/report-format-table` สำหรับโครงสร้างตาราง

- ใช้ numbered columns สำหรับลำดับที่ชัดเจน
- ใช้ headers ชัดเจนสำหรับแต่ละ column
- จัดเรียง columns ตามความสำคัญ
- ใช้ alignment ที่เหมาะสมกับ data types

### Content Formatting

ทำตาม `/report-format-table` สำหรับการจัดรูปแบบเนื้อหา

- ใช้ markdown table format มาตรฐาน
- ใช้ bold สำหรับ headers และ keywords สำคัญ
- ใช้ code blocks สำหรับ `commands` และ `file paths`
- ใช้ backticks สำหรับ inline code
- ใช้ symbols (✅, ❌, ⚠️) สำหรับ status indicators

### Grouping and Sorting

ทำตาม `/report-format-table` สำหรับการจัดกลุ่มและเรียงลำดับ

- จัดกลุ่มข้อมูลตาม category ที่เกี่ยวข้อง
- ใช้ headers สำหรับ grouping
- เรียงลำดับภายในกลุ่มตามความรุนแรง (Severity)
- ใช้ separators สำหรับแยกกลุ่มที่ชัดเจน

### Readability

ทำตาม `/report-format-table` สำหรับความอ่านง่าย

- ตารางต้องอ่านง่ายบนทุก device
- Columns ไม่กว้างเกินไป
- Rows ไม่ยาวเกินไป
- Formatting สอดคล้องกันทั้งตาราง

## Expected Outcome

- รายงานสุขภาพโปรเจกต์ที่ครบถ้วนครอบคลุม 18 categories
- ตารางที่มีโครงสร้างสอดคล้องและจัดกลุ่มชัดเจน
- Content ที่จัดรูปแบบอย่างชัดเจนด้วย metrics ที่เฉพาะเจาะจง
- ตารางที่อ่านง่ายบนทุก device โดยไม่มี column Category ซ้ำซ้อน
- Grouping และ sorting ที่เป็นระบบตาม severity
- Recommendations สำหรับ improvements ตาม priority และ impact
- Health score โดยรวมเพื่อวัดสุขภาพโดยรวมของ project
- Action items ที่สามารถดำเนินการได้ทันที
