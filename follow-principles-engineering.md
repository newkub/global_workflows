---
title: Follow Principles Engineering
description: ตรวจสอบว่าไฟล์ match กับ software engineering principles
auto_execution_mode: 3
related_workflows:
  - /check-correctness
  - /analyze-consistency
  - /check-quality
---

## Goal

ตรวจสอบว่าไฟล์ที่ส่งให้ match กับ software engineering principles ตาม file name

## Scope

ตรวจสอบไฟล์ทั้งใน global_workflows และ workspace ว่า match กับ principles ที่ระบุใน file name

## Execute

### 1. Identify Principle From Filename

1. ระบุ principle จาก file name (เช่น `single-responsibility.ts` → SRP)
2. ตรวจสอบว่า principle อยู่ในรายการ common principles หรือไม่
3. ระบุ category ของ principle (SOLID, General, Architecture, etc.)
4. วิเคราะห์ expected behavior ของ principle นั้นๆ

### 2. Check File Matches Principle

1. อ่านไฟล์ที่ส่งให้ทั้งหมด
2. ตรวจสอบ structure, logic, และ naming match กับ principle หรือไม่

### 3. Analyze Violations

1. ระบุ violations ของ principle ที่พบในไฟล์
2. จัดลำดับความรุนแรงของ violations
3. ระบุส่วนที่ match กับ principle
4. ระบุส่วนที่ไม่ match กับ principle

### 4. Provide Recommendations

1. แนะนำการแก้ไข violations
2. แนะนำ patterns ที่ match กับ principle
3. แนะนำ refactoring ที่จำเป็น
4. ระบุ examples ที่ดีให้ดู

## Rules

### 1. Common Principles

รายการ software engineering principles ที่พบบ่อย

- **SOLID**: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion
- **DRY**: Don't Repeat Yourself
- **KISS**: Keep It Simple, Stupid
- **YAGNI**: You Aren't Gonna Need It
- **Separation of Concerns**: แยก concerns ตาม responsibilities
- **Clean Architecture**: Layer separation ตาม architecture
- **Functional Programming**: Pure functions, immutability
- **Test-Driven Development**: Test ก่อน implement

### 2. Filename Matching

กฎการ match ระหว่าง file name และ principle

- `single-responsibility.ts` → SRP (Single Responsibility Principle)
- `open-closed.ts` → OCP (Open/Closed Principle)
- `dry-utils.ts` → DRY (Don't Repeat Yourself)
- `simple-component.ts` → KISS (Keep It Simple)
- `clean-architecture.ts` → Clean Architecture
- ใช้ kebab-case สำหรับ principle names ใน filename
- ตรวจสอบ keywords ใน filename เพื่อระบุ principle

### 3. File Checking

ตรวจสอบ structure, logic, และ naming ของไฟล์ match กับ principle

- SRP: ไฟล์และ functions ต้องมี single responsibility
- DRY: ไม่มี code duplication หรือ logic ที่ซ้ำกัน
- KISS: logic ต้องเรียบง่าย ไม่ซับซ้อน ไม่ over-engineering
- Clean Architecture: ต้องมี layer separation ชัดเจน และ dependencies ถูกต้อง
- Separation of Concerns: concerns ต้องแยกชัดเจน ทั้ง logic และ naming

### 4. Violation Severity

ระดับความรุนแรงของ violations

- **Critical**: ทำลาย principle อย่างสิ้นเชิง
- **High**: violations ที่สำคัญแต่ยังทำงานได้
- **Medium**: violations ที่ควรแก้แต่ไม่ critical
- **Low**: minor violations ที่ไม่ส่งผลต่อ functionality

## Expected Outcome

- Principle ที่ match กับ file name ถูกระบุ
- Violations ของ principle ถูกระบุและจัดลำดับ
- Recommendations สำหรับการแก้ไขถูกให้
- File ถูกปรับปรุงให้ match กับ principle

