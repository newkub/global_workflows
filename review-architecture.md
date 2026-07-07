---
title: Review Architecture
description: Review architecture และ design patterns พร้อมระบุ issues และ recommendations
auto_execution_mode: 3
related_workflows:
  - /analyze-architecture
  - /follow-architecture
  - /deep-analyze-with-use-scripts
  - /check-duplication
  - /comment-todo
  - /report
  - /report-format-table
  - /improve-architecture
---

## Goal

Review architecture และ design patterns เพื่อระบุ issues จัดลำดับ severity และให้ actionable recommendations

## Scope

ใช้สำหรับ review architecture ครบวงจร อ้างถึง `/analyze-architecture` สำหรับการวิเคราะห์เชิงลึก และเพิ่มการตรวจสอบ design principles, anti-patterns พร้อม recommendations

## Execute

### 1. Run Architecture Analysis

1. ทำ `/analyze-architecture` เพื่อวิเคราะห์ architecture แบบครบวงจร (pattern, layers, coupling, domain boundaries, SoC, DI, consistency)
2. ทำ `/follow-architecture` เพื่อระบุ architecture pattern ที่เหมาะสมกับ project
3. เก็บ findings จาก `/analyze-architecture` เป็น input สำหรับ review

### 2. Check Design Principles

ตรวจสอบ design principles ที่ไม่ครอบคลุมใน `/analyze-architecture`

1. ตรวจสอบ SOLID principles ทีละข้อ ระบุ violations พร้อม examples
2. ตรวจสอบ DRY ด้วย `/check-duplication` เพื่อระบุ copy-paste patterns
3. ตรวจสอบ KISS ระบุ over-engineering และ unnecessary complexity
4. ตรวจสอบ YAGNI ระบุ features หรือ abstractions ที่ยังไม่จำเป็น

### 3. Identify Anti-Patterns

ระบุ anti-patterns ที่พบจาก analysis results

1. ระบุ God Objects จาก modules ที่มี responsibilities มากเกินไป (ใช้ coupling metrics จาก step 1)
2. ระบุ Spaghetti Code จาก high complexity และ deep dependency chains
3. ระบุ Golden Hammer จาก pattern ที่ใช้ซ้ำเกินสมควร
4. ระบุ Copy-Paste Programming จากผลของ `/check-duplication`

### 4. Classify And Prioritize

จัดลำดับ issues ทั้งหมดตาม severity และ impact

1. รวบรวม issues จาก `/analyze-architecture` และ steps 2-3
2. จัดประเภทตาม Severity Classification ใน Rules
3. จัดลำดับตาม impact: Critical → High → Medium → Low
4. ระบุ actionable recommendations สำหรับแต่ละ issue

### 5. Report Findings

1. ทำ `/report` เพื่อรายงานผล review ในแชท
2. ทำ `/report-format-table` เพื่อจัดรูปแบบตาราง issues พร้อม severity, location, และ recommendations
3. ทำ `/comment-todo` สำหรับระบุ issues ใน code โดยไม่แก้ไข code
4. แนะนำขั้นตอนถัดไป: `/improve-architecture` สำหรับแก้ไข issues ที่พบ

## Rules

### 1. Severity Classification

- **Critical**: layer violations, circular dependencies, missing domain boundaries, security-related architectural flaws
- **High**: high coupling (imports > 10), deep dependency chains (depth > 5), missing SoC, God Objects
- **Medium**: missing DI, architectural inconsistencies, leaky abstractions, DRY violations
- **Low**: missing documentation, minor pattern deviations, YAGNI violations

### 2. Review Only

- ห้ามแก้ไข code ระหว่าง review ใช้ `/comment-todo` สำหรับระบุ issues
- รายงาน issues ทั้งหมดพร้อม location และ severity
- ให้ actionable recommendations ที่นำไป implement ได้โดยตรง

### 3. Non-Redundancy

- อ้างถึง `/analyze-architecture` สำหรับ analysis steps โดยไม่ duplicate
- ไม่ซ้ำซ้อนระหว่าง Execute และ Rules
- เพิ่มคุณค่าด้วย design principles และ anti-patterns ที่ `/analyze-architecture` ไม่ครอบคลุม

### 4. Tool Selection

- ใช้ `madge` สำหรับ dependency graph และ circular dependency detection
- ใช้ `ast-grep` สำหรับ pattern-based analysis
- ใช้ `/check-duplication` สำหรับ DRY violations
- ถ้าเป็น monorepo: วิเคราะห์ workspace boundaries ด้วย

### 5. Conditional Execution

- ถ้าเป็น monorepo ให้ตรวจสอบ workspace dependency direction และ shared code strategy
- ถ้าไม่มี database ให้ข้าม data layer review
- ถ้าไม่มี frontend ให้ข้าม presentation layer review

## Expected Outcome

- Architecture patterns ถูกระบุและวิเคราะห์โดยอ้างถึง `/analyze-architecture`
- Design principles และ anti-patterns ถูกตรวจสอบพร้อม examples
- Issues ทั้งหมดถูกระบุ จัดประเภท severity และจัดลำดับตาม impact
- Actionable recommendations ชัดเจนสำหรับแต่ละ issue
- พร้อมสำหรับ `/improve-architecture` เพื่อแก้ไข issues
