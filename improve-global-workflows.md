---
title: Improve Global Workflows
description: ปรับปรุง global workflows ให้สอดคล้องกับมาตรฐาน
auto_execution_mode: 3
---

## Goal

ปรับปรุง global workflows ให้สอดคล้องกับมาตรฐาน principles, content quality และ write workflows

## Execute

### 1. Identify Principles

1. ทำ `/follow-principles` เพื่อระบุ principle จาก file name
2. ระบุ principle ที่ต้องปฏิบัติตาม
3. ตรวจสอบว่า principle ถูกต้อง

### 2. Apply Content Quality

1. ทำ `/follow-content-quality` เพื่อตรวจสอบ format
2. ตรวจสอบ clarity, consistency, correctness
3. ตรวจสอบ organization และ remove redundancy
4. ตรวจสอบความยาวไม่เกิน 200 บรรทัด

### 3. Follow Write Workflows Standard

1. ทำ `/follow-write-workflows` เพื่อตรวจสอบ frontmatter
2. ตรวจสอบโครงสร้าง (Goal, Execute, Rules, Expected Outcome)
3. ตรวจสอบ formatting (Title Case, numbered list, bullet points)
4. ตรวจสอบการใช้ backticks สำหรับ tools, commands, workflows
5. ตรวจสอบการอ้างอิง workflows ที่มีอยู่จริง

### 4. Verify Alignment

1. ตรวจสอบว่า Goal สอดคล้องกับ filename
2. ตรวจสอบว่า Execute สอดคล้องกับ Goal และ Rules
3. ตรวจสอบว่า Expected Outcome สอดคล้องกับ Goal
4. ตรวจสอบความสอดคล้องของคำศัพท์ทั้งไฟล์

## Rules

### 1. Principles Compliance

ทำตาม principle ที่ระบุใน file name:

- ระบุ principle จาก file name อย่างถูกต้อง
- ปฏิบัติตาม principle โดยตรง
- ไม่ข้ามขั้นตอนที่กำหนด
- ตรวจสอบความสมบูรณ์

### 2. Content Quality Standards

ตรวจสอบคุณภาพเนื้อหา:

- ใช้ spacing และ indentation สม่ำเสมอ
- ใช้ headings ที่ชัดเจน (## Goal, ## Execute, ## Rules, ## Expected Outcome)
- หัวข้อใช้ Title Case ภาษาอังกฤษ
- รายการใช้ภาษาไทย
- ไฟล์ไม่ยาวเกิน 200 บรรทัด
- ใช้ backticks สำหรับ `code`, `tools`, `commands`, `workflows`

### 3. Write Workflows Structure

โครงสร้างมาตรฐาน:

- Frontmatter: `title`, `description`, `auto_execution_mode: 3`
- Execute ใช้ `### N. Step Name` และ numbered list
- Rules ใช้ `### N. Rule Category` และ bullet points
- แต่ละ ### มีข้อความด้านบนก่อน bullet points
- ไม่ซ้ำซ้อนระหว่าง Execute และ Rules

### 4. Alignment And Consistency

ตรวจสอบความสอดคล้อง:

- Goal สอดคล้องกับ filename
- Execute สอดคล้องกับ Goal และ Rules
- Expected Outcome สอดคล้องกับ Goal
- ใช้คำศัพท์สม่ำเสมอทั่วทั้ง workflow
- ไม่มีข้อความขัดแย้งกัน

## Expected Outcome

- Global workflows ที่สอดคล้องกับ principles
- เนื้อหามีคุณภาพสูง อ่านง่าย ไม่ซ้ำซ้อน
- โครงสร้างสม่ำเสมอตามมาตรฐาน write workflows
- Frontmatter สมบูรณ์
- Consistency สูงกับ workflows อื่น
