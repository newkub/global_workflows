---
title: Report Format File Structure
description: แสดงโครงสร้างไฟล์และโฟลเดอร์
auto_execution_mode: 3
---

## Goal

แสดงโครงสร้างไฟล์และโฟลเดอร์ให้ชัดเจนและอ่านง่าย

## Scope

ใช้สำหรับการแสดง:
- Project structure
- File trees
- Directory organization
- Component hierarchy

## Execute

### 1. Define Structure

1. กำหนด root directory สำหรับ tree
2. กำหนด depth สำหรับการแสดง
3. กำหนด filters สำหรับ files/directories ที่ต้องการ
4. กำหนด sorting order (alphabetical, type, size)

### 2. Format Tree

1. ใช้ tree characters (├──, └──) สำหรับ hierarchy
2. ใช้ indentation สำหรับ depth levels
3. ใช้ icons สำหรับ file types (📁, 📄, 🔧)
4. ใช้ colors สำหรับ different file types

### 3. Add Metadata

1. เพิ่ม file sizes ถ้าจำเป็น
2. เพิ่ม modification dates ถ้าจำเป็น
3. เพิ่ม file counts สำหรับ directories
4. เพิ่ม summary statistics

### 4. Highlight Important Files

1. ใช้ bold สำหรับ files สำคัญ
2. ใช้ markers สำหรับ entry points
3. ใช้ annotations สำหรับ special files
4. ใช้ grouping สำหรับ related files

## Rules

### Tree Structure

โครงสร้าง tree ที่ต้องใช้

- ใช้ consistent tree characters
- ใช้ proper indentation สำหรับ depth
- จัด sorting ตาม logical order
- ใช้ icons ที่ชัดเจนสำหรับ file types

### Filtering

การกรอง files/directories

- กรอง files ที่ไม่จำเป็น (node_modules, .git)
- ใช้ patterns สำหรับ selective display
- จัดกลุ่ม files ตามประเภท
- ใช้ depth limits สำหรับ large projects

### Metadata

ข้อมูลเพิ่มเติมที่ควรมี

- file sizes สำหรับ large files
- modification dates สำหรับ tracking
- file counts สำหรับ directories
- summary statistics สำหรับ overview

## Expected Outcome

- File structure ที่ชัดเจนและอ่านง่าย
- Tree format ที่ consistent
- Metadata ที่เป็นประโยชน์
- Important files ที่ถูก highlight
