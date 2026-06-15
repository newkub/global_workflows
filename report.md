---
title: Reporting
description: ตอบในแชทเป็นตารางพร้อม numbered columns, grouping, sorting
auto_execution_mode: 3
related_workflows:
  - /report-format-table
  - /report-progress
  - /report-status
  - /report-error
  - /report-before-after
---

## Goal

ตอบในแชทเป็นตารางที่มี numbered columns, grouping, sorting เพื่อความชัดเจน

## Scope

ใช้สำหรับการรายงานข้อมูลทุกประเภทในรูปแบบตารางและ numbered list

## Execute

### 1. Prepare Data

รวบรวมและจัดเตรียมข้อมูล

1. รวบรวมข้อมูลที่ต้องการรายงาน
2. จัดกลุ่มข้อมูลตาม category ที่เกี่ยวข้อง
3. กำหนดลำดับความสำคัญของแต่ละ item
4. ตัดสินใจว่าจะใช้รูปแบบตารางหรือ numbered list

### 2. Format as Table

จัดรูปแบบเป็นตาราง (ถ้าเหมาะสม)

1. สร้างตารางพร้อม numbered columns
2. ใช้ headers ชัดเจนสำหรับแต่ละ column
3. จัดเรียง columns ตามความสำคัญ
4. เรียงลำดับ rows ตามลำดับที่สมเหตุสมผล

### 3. Format as Numbered List

จัดรูปแบบเป็น numbered list (ถ้าเหมาะสม)

1. แปลงข้อมูลเป็น numbered list
2. ใช้ format `1.`, `2.`, `3.` สำหรับแต่ละข้อ
3. จัดกลุ่มข้อตาม category
4. เรียงลำดับข้อตามความสำคัญ

### 4. Apply Grouping and Sorting

จัดกลุ่มและเรียงลำดับข้อมูล

1. จัดกลุ่มข้อมูลตามหมวดหมู่ที่เกี่ยวข้อง
2. ใช้ headers สำหรับแยกกลุ่มที่ชัดเจน
3. เรียงลำดับภายในกลุ่มตามความสำคัญ
4. ใช้ separators สำหรับแยกกลุ่ม (ถ้าจำเป็น)

### 5. Validate Output

ตรวจสอบคุณภาพของผลลัพธ์

1. ตรวจสอบว่าทุก column มี number (ถ้าใช้ตาราง)
2. ตรวจสอบ grouping และ sorting ที่ถูกต้อง
3. ตรวจสอบว่าอ่านง่ายบนทุก device
4. ตรวจสอบความสอดคล้องของ formatting

## Rules

### 1. Format Selection

ต้องเลือกรูปแบบที่เหมาะสมกับข้อมูล

- ใช้ตารางเมื่อมีข้อมูลหลาย columns ที่ต้องเปรียบเทียบ
- ใช้ numbered list เมื่อต้องการเน้นลำดับความสำคัญ
- สามารถผสมทั้งสองรูปแบบในรายงานเดียวกันได้
- เลือกรูปแบบที่อ่านง่ายที่สุดสำหรับผู้รับ

### 2. Table Structure

โครงสร้างตารางที่ต้องใช้

- ทุกตารางต้องมี numbered columns
- ใช้ headers ชัดเจนสำหรับแต่ละ column
- จัดเรียง columns ตามความสำคัญ
- ใช้ alignment (left, center, right) ที่เหมาะสมกับ data types

### 3. Grouping and Sorting

การจัดกลุ่มและเรียงลำดับข้อมูล

- จัดกลุ่มข้อมูลตาม category ที่เกี่ยวข้อง
- ใช้ headers สำหรับ grouping ที่ชัดเจน
- เรียงลำดับภายในกลุ่มตามความสำคัญ
- ใช้ separators สำหรับแยกกลุ่ม (ถ้าจำเป็น)

### 4. Content Formatting

การจัดรูปแบบเนื้อหา

- ใช้ bold สำหรับ headers และ keywords สำคัญ
- ใช้ code blocks สำหรับ commands และ file paths
- ใช้ backticks สำหรับ inline code
- ใช้ symbols (✅, ❌, ⚠️) สำหรับ status indicators

### 5. Output Channel

ช่องทางที่ใช้ส่งรายงาน

- ตอบกลับในแชทเท่านั้น
- ไม่สร้างไฟล์แยกสำหรับรายงาน
- ใช้ markdown table format มาตรฐาน
- ตารางต้องอ่านง่ายบนทุก device

### 6. Readability

ความอ่านง่ายของรายงาน

- แต่ละข้อต้องกระชับ ตรงประเด็น
- หลีกเลี่ยงข้อความที่ยาวเกินไป
- ใช้ภาษาที่เข้าใจง่าย
- จัดรูปแบบให้สอดคล้องกันทั้งเอกสาร

## Expected Outcome

- ตารางที่มี numbered columns
- Grouping และ sorting ที่ชัดเจน
- ข้อมูลที่อ่านง่าย
- สรุปเป็น numbered list ที่ชัดเจน
- รูปแบบที่เหมาะสมกับประเภทข้อมูล

## Common Mistakes

ข้อผิดพลาดที่พบบ่อย:

- ไม่เลือกรูปแบบที่เหมาะสมกับข้อมูล (ตาราง vs numbered list)
- ไม่จัดกลุ่มข้อมูลทำให้อ่านยาก
- ไม่เรียงลำดับตามความสำคัญ
- ใช้ columns ที่กว้างเกินไปทำให้อ่านยากบน mobile
- ข้อความยาวเกินไปไม่กระชับ
- ไม่ใช้ headers ที่ชัดเจน
- ไม่สอดคล้องกันระหว่างตารางและ numbered list
