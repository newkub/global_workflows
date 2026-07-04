---
title: Review Issue
description: วิเคราะห์และตรวจสอบปัญหาด้วย script-based codebase scanning
auto_execution_mode: 3
related_workflows:
  - /scan-codebase
  - /use-scripts
  - /code-search
  - /follow-root-cause-analysis
  - /report
---

## Goal

ตรวจสอบและวิเคราะห์ปัญหาอย่างเป็นระบบโดยใช้ scripts สำหรับ scan codebase อัตโนมัติ

## Scope

ใช้สำหรับทุกประเภทปัญหา (code, config, docs, workflows) ที่ต้องการ codebase scanning เพื่อหา root cause

## Execute

### 1. Identify Issue

ระบุปัญหาและรวบรวมข้อมูลเบื้องต้น

1. ระบุประเภทปัญหา (code, config, docs, workflow, architecture)
2. อ่าน error messages และไฟล์ที่เกี่ยวข้อง
3. ถามผู้ใช้ถ้าไม่เข้าใจ context

### 2. Scan Codebase

ใช้ `/scan-codebase` เป็น foundation สำหรับ scan อัตโนมัติ

1. ทำ `/scan-codebase` เพื่อ scan structure, patterns, และ quality ของ codebase
2. ทำ `/use-scripts` สร้าง Bun script ใน `.devin/scripts/` สำหรับ issue-specific scanning:
   - ค้นหาไฟล์ที่เกี่ยวข้องกับปัญหาด้วย `Bun.Glob`
   - ค้นหา patterns ด้วย `grep_search` และ `ast-grep`
   - รวบรวม error locations และ affected files
3. รัน script ใน dry run mode ก่อนเพื่อตรวจสอบผลลัพธ์
4. รัน script จริงและรวบรวม findings
5. ลบ script หลังใช้งาน

### 3. Analyze Findings

วิเคราะห์ผลลัพธ์จากการ scan

1. จัดลำดับ issues ตาม impact และ frequency
2. ทำ `/follow-root-cause-analysis` สำหรับปัญหาซับซ้อน
3. ระบุ root cause และ affected scope
4. วางแผนแนวทางแก้ไขแบบ minimal changes

### 4. Report Findings

รายงานผลลัพธ์การตรวจสอบ

1. ทำ `/report` สรุป findings เป็นตาราง
2. ระบุไฟล์และบรรทัดที่มีปัญหา
3. แนะนำแนวทางแก้ไขตาม priority
4. ทำ `/suggest-next-action` เสนอ action ถัดไป

## Rules

### 1. Script Usage

- ใช้ `/use-scripts` สร้าง script ใน `.devin/scripts/` เท่านั้น
- รองรับ dry run mode เสมอ
- ลบ script หลังใช้งานเสร็จ
- ใช้ Bun native APIs สำหรับ file operations และ pattern matching

### 2. Scanning Strategy

- ใช้ `/scan-codebase` เป็น foundation สำหรับการ scan (มี `/use-scripts` ภายในแล้ว)
- ใช้ `/use-scripts` เพิ่มเติมสำหรับ issue-specific scanning
- ค้นหาแบบ parallel เพื่อความเร็ว
- จำกัด scope ด้วย path และ file patterns
- ใช้ `ast-grep` สำหรับ structural search และ `grep_search` สำหรับ text search

### 3. Analysis Principles

- แก้ที่ root cause ไม่ใช่ symptom
- ทำ minimal changes เท่าที่จำเป็น
- ตรวจสอบ side effects ก่อนและหลังแก้ไข
- จัดลำดับตาม impact และ urgency

### 4. Communication

- ระบุไฟล์และบรรทัดที่มีปัญหาชัดเจน
- อธิบาย root cause และทำไมต้องแก้
- รายงาน progress สม่ำเสมอ
- ถามถ้าไม่แน่ใจ

## Expected Outcome

- ปัญหาถูกระบุและวิเคราะห์อย่างเป็นระบบ
- Root cause ถูกระบุชัดเจน
- Findings ถูกรายงานเป็น structured format
- แนวทางแก้ไขถูกเสนอตาม priority
