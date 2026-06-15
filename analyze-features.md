---
title: Analyze Features
description: วิเคราะห์และจัดระเบียบ features ใน project
auto_execution_mode: 3
related_workflows:
  - /idea-features
  - /sumarize-features
  - /write-docs
---

## Goal

วิเคราะห์และจัดระเบียบ features ใน project อย่างเป็นระบบ

## Scope

ครอบคลุมการวิเคราะห์ features ทั้งหมดใน project รวมถึงการจัดกลุ่ม การบันทึก และการสร้าง documentation

## Execute

### 1. Discovery And Inventory

ค้นหาและรวบรวม features ทั้งหมด

1. ทำ `/analyze-project` เพื่อเข้าใจโครงสร้าง project
2. ค้นหา features จาก code, documentation, และ requirements
3. รวบรวม features จากทุก modules และ components
4. ตรวจสอบ dependencies ระหว่าง features

### 2. Categorize And Group

จัดกลุ่ม features ตาม domain และ functionality

1. จัดกลุ่ม features ตาม business domain
2. จัดกลุ่ม features ตาม technical layer
3. ระบุ dependencies ระหว่าง features
4. จัดลำดับความสำคัญของ features

### 3. Document Features

บันทึก features ในรูปแบบที่เป็นระบบ

1. สร้าง `docs/project/features.md`
2. บันทึก features พร้อมคำอธิบาย
3. ระบุ status ของแต่ละ feature
4. เพิ่ม examples และ use cases

### 4. Validate And Review

ตรวจสอบและทบทวน features

1. ตรวจสอบความสมบูรณ์ของ features
2. ตรวจสอบความถูกต้องของ dependencies
3. ทบทวนกับ team หรือ stakeholders
4. อัพเดท documentation ตามผลทบทวน

## Rules

### 1. Feature Identification

ระบุ features อย่างชัดเจนและครบถ้วน

- ใช้ชื่อ feature ที่สื่อความหมายชัดเจน
- ระบุ purpose และ value ของแต่ละ feature
- แยก features จาก technical implementation
- ระบุ user stories หรือ use cases
- บันทึก assumptions และ constraints

### 2. Categorization Strategy

จัดกลุ่ม features อย่างมีประสิทธิภาพ

- จัดกลุ่มตาม business domain หลัก
- จัดกลุ่มตาม user journey หรือ workflow
- ระบุ core features และ supporting features
- แยก features ตาม priority และ complexity
- ใช้ hierarchy ที่เหมาะสมกับ project

### 3. Documentation Format

บันทึก features ในรูปแบบมาตรฐาน

- ใช้ table สำหรับ feature list
- บันทึก status, priority, และ dependencies
- เพิ่ม description และ acceptance criteria
- ใช้ backticks สำหรับ `feature names`, `statuses`, `priorities`
- รักษา consistency ทั่วทั้ง documentation

### 4. Dependencies Management

จัดการ dependencies ระหว่าง features

- ระบุ dependencies ชัดเจน
- แยก hard dependencies จาก soft dependencies
- ระบุ blocking relationships
- วาด dependency graph หากจำเป็น
- ตรวจสอบ circular dependencies

## Expected Outcome

- Features ถูกค้นพบและบันทึกครบถ้วน
- Features ถูกจัดกลุ่มอย่างเป็นระบบ
- Documentation สำหรับ features ถูกสร้างและอัพเดท
- Dependencies ระหว่าง features ถูกระบุชัดเจน
