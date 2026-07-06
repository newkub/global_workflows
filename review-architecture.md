---
title: Review Architecture
description: Review architecture และ design patterns ของโปรเจกต์
auto_execution_mode: 3
related_workflows:
  - /analyze-code-structure
  - /restructure
  - /follow-architecture
  - /report-format-table
---

## Goal

Review architecture และ design patterns ของโปรเจกต์เพื่อตรวจสอบคุณภาพและระบุ issues

## Scope

ใช้สำหรับ review architecture ครบวงจร รวมถึง patterns, dependencies, coupling, cohesion, และ design principles

## Execute

### 1. Analyze Structure

1. ทำ `/analyze-code-structure` เพื่อวิเคราะห์โครงสร้างไฟล์และ folders
2. ทำ `/follow-architecture` เพื่อระบุ architectural pattern
3. วิเคราะห์ layering (presentation, business, data)
4. ตรวจสอบ module boundaries และ responsibilities

### 2. Review Dependencies And Coupling

ตรวจสอบ dependencies และ coupling

1. ทำ `/use-scripts` พร้อม parser วิเคราะห์ import dependencies
2. สร้าง dependency graph ด้วย `graphviz` หรือ ASCII art
3. ระบุ circular dependencies
4. วิเคราะห์ coupling levels (tight vs loose)

### 3. Evaluate Cohesion And Separation

ประเมิน cohesion และ separation of concerns

1. วิเคราะห์ module cohesion (high vs low)
2. ตรวจสอบ single responsibility principle
3. ระบุ modules ที่มีหลาย responsibilities
4. ตรวจสอบ separation of concerns ระหว่าง layers

### 4. Check Design Principles

ตรวจสอบ design principles

1. ตรวจสอบ SOLID principles
2. ตรวจสอบ DRY (Don't Repeat Yourself)
3. ตรวจสอบ KISS (Keep It Simple, Stupid)
4. ตรวจสอบ YAGNI (You Aren't Gonna Need It)

### 5. Identify Anti-Patterns

ระบุ anti-patterns ที่พบ

1. ค้นหา God Objects ด้วย `Grep`
2. ค้นหา Spaghetti Code ด้วย complexity analysis
3. ค้นหา Golden Hammer (overuse of single pattern)
4. ค้นหา Copy-Paste Programming ด้วย `/check-duplication`

### 6. Restructure And Document

1. ทำ `/restructure` เพื่อปรับปรุง structure ที่มีปัญหา
2. รวบรวม architectural issues ทั้งหมด
3. จัดลำดับความสำคัญตาม impact
4. ทำ `/report-format-table` เพื่อแสดงผล
5. สร้าง dependency graph visualization

## Rules

### 1. Tool Selection

ใช้เครื่องมือที่เหมาะสมกับงานแต่ละประเภท

- ใช้ `Grep` สำหรับ pattern matching
- ใช้ `/use-scripts` พร้อม parser สำหรับ dependency analysis
- ใช้ `graphviz` สำหรับ dependency graph
- ทำ Bun scripts สำหรับ custom metrics

### 2. Dependency Analysis

วิเคราะห์ dependencies อย่างละเอียด

- สร้าง dependency graph ที่ครอบคลุม
- ระบุ modules ที่มี dependencies มากเกินไป
- ตรวจสอบ circular dependencies
- วิเคราะห์ depth ของ dependency tree

### 3. Pattern Recognition

ระบุ patterns และ anti-patterns อย่างถูกต้อง

- ใช้ AST-based analysis สำหรับ pattern detection
- ตรวจสอบว่า patterns ถูกใช้ตาม context
- ระบุ anti-patterns ที่เป็น risk
- ให้ recommendations สำหรับ refactoring

### 4. Principle Validation

ตรวจสอบว่า code ทำตาม design principles

- ตรวจสอบ SOLID principles ทีละข้อ
- ระบุ violations ของแต่ละ principle
- ให้ examples ของ violations
- ให้ recommendations สำหรับการแก้ไข

### 5. No Code Modifications

ห้ามแก้ไข code ระหว่าง review

- เฉพาะ analyze และ document findings
- ไม่แก้ไข code ระหว่าง review
- ทำ `/comment-todo` สำหรับระบุ issues

## Expected Outcome

- Architectural patterns ถูกระบุและวิเคราะห์
- Dependency graph แสดง relationships ระหว่าง modules
- Issues ทั้งหมดถูกระบุและจัดลำดับ
- Anti-patterns ถูกระบุพร้อม recommendations
- Recommendations ชัดเจนสำหรับแต่ละ issue
