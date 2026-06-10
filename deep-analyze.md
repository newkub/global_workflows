---
title: Deep Analyze
description: วิเคราะห์โปรเจกต์อย่างละเอียดโดยอ่านไฟล์ทั้งหมด
auto_execution_mode: 3
---

## Goal

วิเคราะห์โปรเจกต์อย่างละเอียดเพื่อเข้าใจโครงสร้าง การทำงาน และ dependencies

## Scope

วิเคราะห์ architecture, code quality, dependencies และ documentation ของโปรเจกต์

## Execute

### 1. Planning And Preparation

1. ระบุวัตถุประสงค์และ scope ของการวิเคราะห์
2. เตรียม tools สำหรับการวิเคราะห์ (grep, list_dir, etc.)
3. กำหนดลำดับความสำคัญของ analysis areas
4. ตั้งค่า success criteria และ reporting format

### 2. Data Collection

1. ทำ `/check-architecture` เพื่อดูโครงสร้างไฟล์และโฟลเดอร์
2. ใช้ `/read-all-files` เพื่ออ่านไฟล์ทั้งหมดในโปรเจกต์
3. ทำ `/search-code` เพื่อค้นหา code patterns, symbols, และ references
4. อ่าน manifest files เช่น `package.json`, `Cargo.toml`, `tsconfig.json`
5. ตรวจสอบโครงสร้าง directory ด้วย `list_dir`
6. ระบุ dependencies และ dev dependencies

### 3. Architecture Analysis

1. วิเคราะห์โครงสร้างโปรเจกต์ (monorepo, single package, layers)
2. ตรวจสอบการใช้งาน design patterns
3. ระบุ tech stack และ frameworks ที่ใช้
4. วิเคราะห์ dependencies ระหว่าง modules

### 4. Code Quality Review

1. ตรวจสอบ code organization และ separation of concerns
2. วิเคราะห์ error handling และ type safety
3. ตรวจสอบการใช้งาน best practices
4. ระบุ potential issues หรือ areas for improvement

### 5. Documentation And Findings

1. สรุปโครงสร้างโปรเจกต์
2. ระบุ tech stack และ dependencies
3. บันทึก architecture patterns ที่ใช้
4. แนะนำ improvements ถ้าจำเป็น
5. Follow `/report` เพื่อรายงานผลการวิเคราะห์ทั้งหมด

## Rules

### 1. Planning And Preparation

- ต้องใช้ `/read-all-files` ก่อนเริ่มวิเคราะห์
- อ่าน manifest files ก่อน source code
- วิเคราะห์ตามลำดับ: structure → architecture → quality → findings
- ใช้คำศัพท์สม่ำเสมอทั้ง workflow
- บันทึก findings อย่างชัดเจนและกระชับ

### 2. Data Collection Strategy

- แบ่งไฟล์เป็น batches และอ่าน parallel
- จัดเก็บ file contents ใน structured format
- ระบุ files ที่สำคัญ (manifest, config, entry points)
- วิเคราะห์ dependency graph และตรวจสอบ version conflicts

### 3. Analysis Standards

- ใช้คำศัพท์สม่ำเสมอทั้ง workflow
- บันทึก findings อย่างชัดเจนและกระชับ
- ทุก findings ต้องมี evidence จาก code
- ระบุ patterns ที่ซ้ำกันและ correlations

### 4. Quality Assurance

- เปรียบเทียบ findings จากทุก phases
- จัดลำดับ priorities ของ improvements
- ประเมิน effort และ impact สำหรับแต่ละ recommendation
- สร้าง action items ที่ชัดเจนและสามารถดำเนินการได้

## Expected Outcome

- เข้าใจโครงสร้างโปรเจกต์อย่างครบถ้วน
- รู้ tech stack และ dependencies ทั้งหมด
- ระบุ architecture patterns ที่ใช้
- มี recommendations สำหรับ improvements
- Architecture report ที่ครบถ้วน
- Action items ที่สามารถดำเนินการได้ทันที
