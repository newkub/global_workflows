---
title: Improve Windsurf Workflows
description: ปรับปรุงคุณภาพ global workflows ด้วยการลด redundancy และปรับ writing
auto_execution_mode: 3
related_workflows:
  - use-workflows
  - improve-correctness
  - write-windsurf-global-workflows
  - learn-from-web
---

## Goal

ปรับปรุงคุณภาพ global workflows ด้วยการลด redundancy และปรับ writing ให้อ่านแล้ว follow ตามได้ง่าย

## Scope

ใช้สำหรับปรับปรุง global workflows ใน `global_workflows/`

## Execute

### 1. Reduce Redundancy With Use-Workflows

ลดความซ้ำซ้อนโดยใช้ global workflows ที่มีอยู่

- ทำ `/use-workflows` เพื่อตรวจสอบความซ้ำซ้อนกับ global workflows
- อ่าน global workflows ทั้งหมดใน `global_workflows/`
- ระบุ workflows ที่สามารถใช้ `/use-workflows` แทนการเขียนซ้ำ
- ระบุ workflows ที่สามารถรวมกันได้
- ลบ workflows ที่ไม่จำเป็นหรือซ้ำซ้อน

### 2. Improve Writing For Readability

ปรับ writing ให้อ่านแล้ว follow ตามได้ง่าย

- ทำตาม `/write-windsurf-global-workflows` สำหรับมาตรฐาน writing
- ใช้ภาษาที่ชัดเจนและกระชับ
- ใช้ bullet points สำหรับ Rules และ numbered lists สำหรับ Execute
- ใช้ backticks สำหรับ `tools`, `commands`, `file paths`, `/workflow-name`
- ตรวจสอบว่าไฟล์ไม่เกิน 250 บรรทัด
- ตรวจสอบว่า Goal, Scope, Execute, Rules, Expected Outcome ครบถ้วน

### 3. Improve Correctness

ปรับปรุงความถูกต้องของ workflows

- ทำ `/improve-correctness` เพื่อตรวจสอบความถูกต้อง
- ตรวจสอบ references ทั้งหมดว่ามีอยู่จริง
- ตรวจสอบ frontmatter ถูกต้อง (title, description, auto_execution_mode)
- ตรวจสอบ related_workflows มีอยู่จริง
- แก้ไข issues ตาม priority (Critical, High, Medium, Low)

## Rules

### 1. Use Existing Workflows

ใช้ workflows ที่มีอยู่ก่อนเขียนใหม่

- ทำ `/use-workflows` ก่อนเขียน workflow ใหม่
- ถ้ามี workflow ที่ครอบคลุม topic เดียวกัน ให้ใช้ reference
- อย่าพยายามเขียนซ้ำกับไฟล์ที่อ้างไป
- เขียนแค่ว่าให้ทำตามที่อ้างไป

### 2. Follow Writing Standards

ทำตามมาตรฐาน writing

- ทำตาม `/write-windsurf-global-workflows` เสมอ
- ทำตาม `/follow-content-quality` เสมอ
- ไฟล์ต้องไม่เกิน 250 บรรทัด
- ใช้คำศัพท์สม่ำเสมอทั่วทั้ง workflows

### 3. Priority-Based Fixes

แก้ไขตามลำดับความสำคัญ

- แก้ไข Critical issues ก่อนเสมอ
- แก้ไข High issues ก่อน Medium และ Low
- ทีละ issue และตรวจสอบก่อนดำเนินต่อ
- ทำตาม `/improve-correctness` สำหรับการแก้ไข

### 4. Verify References

ตรวจสอบ references ทั้งหมด

- ทำ `/check-reference` เพื่อตรวจสอบ references มีอยู่จริง
- ตรวจสอบ workflows ที่อ้างถึงมีอยู่จริง
- ตรวจสอบ skills ที่อ้างถึงมีอยู่จริง
- อัพเดท references ที่ไม่ถูกต้อง

## Expected Outcome

- Global workflows มีความซ้ำซ้อนน้อยลง
- Workflows อ่านง่ายและ follow ตามได้ง่าย
- References ถูกต้องทั้งหมด
- ไฟล์ไม่เกิน 250 บรรทัด
- Writing สอดคล้องกับมาตรฐาน
- Issues ทั้งหมดถูกแก้ไขตาม priority
