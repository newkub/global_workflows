---
title: Deep Report
description: สร้าง deep report ละเอียดครบทุกมิติ พร้อมตาราง 7 columns และสรุป 5 ส่วน
auto_execution_mode: 3
related:
  - /report-health
  - /update-health-cli
  - /report-format-table
  - /suggest-next-action
  - /review-codebase-everything
  - /deep-analyze
  - /deep-review
---

## Goal

สร้าง deep report ที่ละเอียด  actionable และครบทุกมิติ พร้อมตาราง 7 columns และสรุป 5 ส่วน

## Scope

ใช้สำหรับสร้าง deep report หลังจากรัน health CLI หรือ review codebase เพื่อรายงาน findings แบบละเอียด ไม่ใช้สำหรับสร้างหรืออัปเดท analyzers

## Execute

### 1. Gather Data

รวบรวมข้อมูลจาก health CLI และ review workflows

> Goal: มีข้อมูลครบสำหรับสร้าง deep report

1. รัน `bun --filter @booking/tools-health health:json` เพื่อดึง health report ในรูปแบบ JSON
2. ถ้าไม่มี health CLI → ทำ `/update-health-cli` ก่อน
3. ทำ `/deep-review` เพื่อวิเคราะห์ codebase ครบทุกด้าน ถ้าต้องการข้อมูลเพิ่มเติม
4. รวบรวม findings จาก health report และ review results

> Goal: มีข้อมูลครบจากทั้ง health CLI และ review workflows

### 2. Classify Findings

จำแนก findings เพื่อเตรียมข้อมูลสำหรับตาราง

> Goal: แต่ละ finding มีข้อมูลครบ 7 columns

1. สำหรับแต่ละ finding ใน health report:
   1. กำหนด **Scope**: `Domain > Category` (เช่น `Code & Architecture > Completeness`)
   2. กำหนด **File**: ไฟล์และบรรทัดที่มีปัญหา (เช่น `apps/website/src/routes/__root.tsx:26`)
   3. วิเคราะห์ **Cause**: สาเหตุรากของปัญหา (root cause analysis)
   4. กำหนด **Solutions**: วิธีแก้ที่ actionable และเฉพาะเจาะจง
   5. กำหนด **Severity**: Critical > High > Medium > Low
   6. กำหนด **Review Workflow**: `/review-*` workflow จาก AGENTS.md
   7. ระบุ **Evidence**: code snippet หรือ pattern ที่ trigger finding
2. ถ้า finding เป็น false positive ให้ระบุใน column Cause ว่า `False positive: <reason>`
3. จัดเรียงตาม severity: Critical ก่อน, High รองลงมา

> Goal: แต่ละ finding มีข้อมูลครบทุก column พร้อม root cause analysis

### 3. Build Report Table

สร้างตาราง deep report ตาม format 7 columns

> Goal: ตารางที่ actionable และตรวจสอบได้

1. ทำ `/report-format-table` เพื่อจัดรูปแบบตาราง
2. สร้างตารางด้วย 7 columns: Scope, File, Cause, Solutions, Severity, Review Workflow, Evidence
3. จัดกลุ่มตาม `reviewWorkflow` เพื่อเชื่อมโยงกับ `/review-*` workflows จาก AGENTS.md
4. ภายในแต่ละกลุ่ม จัดเรียงตาม severity: Critical ก่อน, High รองลงมา
5. กรองเฉพาะ categories ที่มี findings (ไม่แสดง pass)
6. แต่ละ row ต้องมี evidence ที่ตรวจสอบได้จริง

> Goal: ตารางที่จัดกลุ่มตาม review workflow พร้อม evidence ที่ตรวจสอบได้

### 4. Build Deep Summary

สร้างสรุปละเอียดครบทุกมิติท้าย report

> Goal: สรุปที่ครบทุกมิติและนำไป action ได้

1. **Domain Breakdown** — score และ status ของทุก domain:
   - User-Facing, Security & Compliance, Backend & Data, Infrastructure, Code & Architecture
   - แต่ละ domain: score %, pass/warn/fail counts, top finding
2. **Severity Distribution** — จำนวน findings ตาม severity:
   - Critical, High, Medium, Low
   - เปรียบเทียบกับครั้งก่อน (ถ้ามีข้อมูล)
3. **Analyzer Changes** — สรุป analyzers ที่เปลี่ยนแปลง (ถ้าเป็นการอัปเดท CLI):
   - สร้างใหม่: รายการ analyzers ที่เพิ่ม
   - อัปเดท: รายการ analyzers ที่แก้ไข พร้อมสิ่งที่เปลี่ยน
   - ลบ: รายการ analyzers ที่ลบ
4. **False Positive Analysis** — สรุป false positives ที่พบและแก้:
   - รายการ findings ที่เป็น false positive
   - สาเหตุที่เป็น false positive
   - วิธีแก้ที่ใช้
5. **Recommended Actions** — action items จัดลำดับตาม priority:
   - Quick wins: low effort, high impact
   - Major improvements: high effort, high impact
   - แต่ละ action: reviewWorkflow ที่แนะนำ, estimated effort, expected impact

> Goal: สรุป 5 ส่วนที่ครบทุกมิติและนำไป action ได้

### 5. Suggest Next Actions

แนะนำ action ถัดไปตาม findings

> Goal: รู้ action ถัดไปที่ควรทำตาม priority

1. ทำ `/suggest-next-action` ตาม findings ที่จัดลำดับแล้ว
2. แนะนำ `/review-*` workflow สำหรับแต่ละ finding ตาม `reviewWorkflow` field
3. แนะนำ `/update-health-cli` ถ้า CLI ต้องปรับปรุง
4. แนะนำ `/update-agents-md` ถ้า AGENTS.md ไม่ตรงกับ dependencies ปัจจุบัน

> Goal: action items ที่ชัดเจนและจัดลำดับตาม priority

## Rules

### 1. Table Columns

ตาราง deep report มี 7 columns ตามลำดับ:

| Column | Description | Required |
|---|---|---|
| **Scope** | `Domain > Category` ที่พบปัญหา | Yes |
| **File** | ไฟล์และบรรทัดที่มีปัญหา | Yes |
| **Cause** | สาเหตุรากของปัญหา (root cause) | Yes |
| **Solutions** | วิธีแก้ที่ actionable และเฉพาะเจาะจง | Yes |
| **Severity** | Critical > High > Medium > Low | Yes |
| **Review Workflow** | `/review-*` workflow จาก AGENTS.md | Yes |
| **Evidence** | code snippet หรือ pattern ที่ trigger finding | Yes |

### 2. Grouping

- จัดกลุ่มตาม `reviewWorkflow` เพื่อเชื่อมโยงกับ `/review-*` workflows
- ภายในแต่ละกลุ่ม จัดเรียงตาม severity: Critical ก่อน, High รองลงมา
- ใช้ headers สำหรับ grouping ตาม `/report-format-table`

### 3. Evidence Requirement

- ทุก row ต้องมี evidence ที่ตรวจสอบได้จริง
- evidence ต้องเป็น code snippet, grep output, หรือ pattern ที่ trigger finding
- ถ้าไม่มี evidence ที่ตรวจสอบได้ → ระบุว่า `Manual review required`

### 4. False Positive Handling

- ถ้า finding เป็น false positive ให้ระบุใน column Cause ว่า `False positive: <reason>`
- ระบุวิธีแก้ใน column Solutions ว่า `Fixed: <what was changed>`
- รวมในส่วน False Positive Analysis ของ deep summary

### 5. Root Cause Analysis

- column Cause ต้องเป็น root cause ไม่ใช่ symptom
- ถ้าเป็น false positive ให้อธิบายว่าทำไม analyzer ทำงานผิด
- ถ้าเป็นปัญหาจริง ให้อธิบายว่า code ผิดอะไรและทำไม

### 6. Solutions Quality

- column Solutions ต้องเป็นวิธีแก้ที่ actionable และเฉพาะเจาะจง
- ไม่ใช้ generic advice เช่น "improve code quality"
- ระบุ file และ function ที่ต้องแก้ ถ้าเป็นไปได้

### 7. Summary Completeness

- deep summary ต้องมีครบทั้ง 5 ส่วน: Domain Breakdown, Severity Distribution, Analyzer Changes, False Positive Analysis, Recommended Actions
- ถ้าไม่มีข้อมูลส่วนใด (เช่น ไม่มี false positive) ให้ระบุว่า `None found`

## Expected Outcome

- ตาราง deep report 7 columns พร้อม evidence ที่ตรวจสอบได้
- สรุป 5 ส่วน: Domain Breakdown, Severity Distribution, Analyzer Changes, False Positive Analysis, Recommended Actions
- จัดกลุ่มตาม `reviewWorkflow` จาก AGENTS.md
- ทุก finding มี root cause analysis และ actionable solutions
- action items จัดลำดับตาม priority: quick wins ก่อน, major improvements รองลงมา
