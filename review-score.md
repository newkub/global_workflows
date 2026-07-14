---
title: Review Score
description: ให้คะแนน quality หลายด้าน รวมสูงสุด 10 พร้อมระบุสิ่งที่ต้องปรับปรุง
auto_execution_mode: 3
related:
  - /check-correctness
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

ให้คะแนน quality หลายด้าน รวมเป็นคะแนนเต็ม 10 พร้อมระบุสิ่งที่ต้องปรับปรุง

## Scope

ใช้กับ workflow, skill, code, config, หรือไฟล์ใดๆ ที่ต้องการ quality scoring

## Execute

### 1. Identify Target

ระบุสิ่งที่จะให้คะแนนเพื่อกำหนด dimensions ที่เหมาะสม

1. ระบุไฟล์หรือสิ่งที่จะให้คะแนน (workflow, skill, code, config)
2. อ่านเนื้อหาทั้งหมดเพื่อเข้าใจ context
3. ถ้าเป็น workflow → ทำ `/check-correctness` ตามโครงสร้าง `/write-workflows`
4. ถ้าอ่านไม่ได้หรือไฟล์ไม่มี → stop และ report

> Goal: รู้ target และ context ก่อนให้คะแนน

### 2. Define Dimensions

กำหนด dimensions ที่จะให้คะแนนให้ครอบคลุมและสม่ำเสมอ

1. กำหนด dimensions ตามประเภทของ target:
   - **Workflow**: Structure, Clarity, Determinism, Safety, Completeness
   - **Code**: Correctness, Readability, Performance, Safety, Maintainability
   - **Config**: Validity, Consistency, Security, Completeness, Best Practices
2. แต่ละ dimension มี weight เท่ากัน (1 คะแนนต่อ dimension, รวม 5 dimensions = 10 คะแนน, คะแนนต่อ dimension = 0.0-2.0)
3. ถ้า target ไม่ตรงกับประเภทใด → ถามผู้ใช้ว่าใช้ dimensions ใด

> Goal: Dimensions ครอบคลุม สม่ำเสมอ เหมาะกับ target

### 3. Score Each Dimension

ให้คะแนนแต่ละ dimension ด้วย evidence และเหตุผล

1. ให้คะแนนแต่ละ dimension 0.0-2.0 โดยอ้างอิง criteria:
   - **2.0**: ผ่านทุก criteria ไม่มี issue
   - **1.5**: ผ่านเกือบทั้งหมด มี issue เล็กน้อย
   - **1.0**: ผ่านเกินครึ่ง มี issue ปานกลาง
   - **0.5**: ผ่านน้อย มี issue มาก
   - **0.0**: ไม่ผ่าน มี critical issue
2. ระบุ evidence สำหรับทุกคะแนน — ไม่ใช่ subjective judgment
3. ทำ `/validate` สำหรับ findings ที่ใช้เป็น evidence
4. ถ้าคะแนนไม่มี evidence → ปรับเป็น 0 และระบุว่า "no evidence"

> Goal: คะแนนทุก dimension มี evidence ไม่ใช่ความรู้สึก

### 4. Calculate Total

คำนวณคะแนนรวมและเกรด

1. รวมคะแนนทุก dimension → คะแนนรวมเต็ม 10
2. กำหนด grade: 9-10 = A, 7-8.9 = B, 5-6.9 = C, 3-4.9 = D, 0-2.9 = F
3. ถ้าคะแนนรวม < 7 → ระบุว่า "ต้องปรับปรุง" และแนะนำ `/improve-until-score10`

> Goal: คะแนนรวมชัดเจน รู้ grade และ action ถัดไป

### 5. Identify Improvements

ระบุสิ่งที่ต้องปรับปรุงเพื่อให้คะแนนเพิ่ม

1. จัดลำดับ improvements ตาม impact ต่อคะแนน (สูงสุด → ต่ำสุด)
2. ระบุ dimension, issue, recommendation, และคะแนนที่จะเพิ่มได้
3. ถ้าคะแนน = 10 → ระบุว่า "ไม่ต้องปรับปรุง"
4. ทำ `/suggest-next-action` เพื่อแนะนำ workflow ที่ควรใช้ต่อ

> Goal: Improvements ชัดเจน จัดลำดับตาม impact

### 6. Report

สร้างรายงานตารางตาม `/report-format-table`

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง **Score Summary**: Dimension, Score, Max, Evidence, Status
3. สร้างตาราง **Improvements**: Priority, Dimension, Issue, Recommendation, Score Gain
4. แสดงคะแนนรวมพร้อม grade และ progress bar

> Goal: รายงานตาราง อ่านง่าย ทำตามได้

## Rules

### 1. Scoring Criteria

- คะแนนต่อ dimension: 0.0, 0.5, 1.0, 1.5, 2.0 — ไม่มีคะแนนอื่น
- คะแนนรวม = ผลรวมทุก dimension — ไม่มี bonus หรือ penalty นอกจาก dimensions
- ทุกคะแนนต้องมี evidence — ไม่ใช่ subjective judgment — ถ้าไม่มี evidence → 0

### 2. Dimensions

- 5 dimensions ต่อ target type — แต่ละ dimension มี weight เท่ากัน
- ถ้า target ไม่ตรงประเภทใด → ถามผู้ใช้ — ไม่สุ่ม dimensions เอง
- Dimensions ต้องครอบคลุมทุกด้านที่สำคัญ — ไม่ตัดสิ่งที่ impact จริง

### 3. Output Format

- รายงานเป็นตารางตาม `/report-format-table` — มี Score Summary และ Improvements
- แสดงคะแนนรวมพร้อม grade และ progress bar
- ถ้าคะแนน < 7 → แนะนำ `/improve-until-score10`

### 4. Determinism And Safety

- ให้คะแนน input เดียวกัน → คะแนนเหมือนกันทุกครั้ง — evidence ต้อง measurable
- ไม่มี TODO, MOCK, หรือ placeholder ในรายงาน — ทุก finding มี evidence

## Expected Outcome

- ตารางคะแนน 5 dimensions พร้อม evidence, คะแนนรวมเต็ม 10, grade, และ improvements จัดลำดับตาม impact (รายงานตาราง)
