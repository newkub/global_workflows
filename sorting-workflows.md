---
title: Sorting Workflows
description: จัดเรียง workflows ตามลำดับอักษรและความสำคัญ
auto_execution_mode: 3
---


## Goal

จัดเรียง workflows ใน global_workflows ตามลำดับอักษรและความสำคัญเพื่อให้ค้นหาและจัดการได้ง่ายิ่ง

## Execute

### 1. List All Workflows

รวบรวม workflows ทั้งหมดใน global_workflows

1. ใช้ `find_by_name` หรือ `list_dir` เพื่อดูไฟล์ทั้งหมด
2. กรองเฉพาะไฟล์ `.md` ใน global_workflows
3. แยกไฟล์ที่ไม่ใช่ workflows (เช่น README, .gitkeep)

### 2. Sort Alphabetically

จัดเรียง workflows ตามลำดับอักษร

1. ใช้ sorting algorithm เพื่อจัดเรียงตามชื่อไฟล์
2. แยก workflows ตาม prefix (analyze-, check-, follow-, run-, improve-, etc.)
3. จัดลำดับภายในแต่ละ prefix ตามอักษร

### 3. Sort By Priority

จัดลำดับ workflows ตามความสำคัญ

1. ระบุ workflows ที่ใช้บ่อย (high frequency)
2. ระบุ workflows ที่สำคัญ (critical path)
3. จัดลำดับตาม priority ที่กำหนด

### 4. Generate Sorted List

สร้างรายการ workflows ที่จัดเรียงแล้ว

1. สร้าง list แบบ markdown แสดง workflows ทั้งหมด
2. แบ่งเป็น groups ตาม prefix
3. แสดงลำดับในแต่ละ group
4. เพิ่ม descriptions สั้นๆ สำหรับแต่ละ workflow

## Rules

- ใช้ alphabetical order เป็น primary sorting
- ใช้ priority เป็น secondary sorting
- แยก workflows ตาม prefix ที่ชัดเจน
- เก็บ workflows ที่ไม่มี prefix ไว้ด้ายสุด
- ไม่รวมไฟล์ที่ไม่ใช่ workflows

## Expected Outcome

- Workflows จัดเรียงตามลำดับอักษร
- แบ่งเป็น groups ตาม prefix ชัดเจน
- ง่าต่อการค้นหาและจัดการ
