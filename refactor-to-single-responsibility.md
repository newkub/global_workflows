---
title: Refactor To Single Responsibility
description: ปรับโค้ดให้มีหน้าที่เดียวตาม SRP ด้วย minimal changes
auto_execution_mode: 3
related_workflows:
  - /dont-over-engineer
  - /improve-naming
  - /check-duplication
  - /refactor-long-files-to-single-responsibility
  - /use-import-alias
---

## Goal

ปรับโค้ดให้แต่ละ function/module มีหน้าที่เดียว ง่ายต่อการ maintain และ test ด้วย minimal changes

## Scope

Refactor functions และ modules ที่มีหลาย responsibilities ให้มีหน้าที่เดียวตาม Single Responsibility Principle ด้วย minimal changes

## Execute

### 1. Analyze Current Code

1. อ่าน `/restructure` เพื่อเข้าใจโครงสร้างที่ถูกต้อง
2. Refactor ตามโครงสร้างที่ระบุใน `/restructure`
3. อ่านไฟล์ที่ต้องการ refactor
4. ระบุ function ที่มีหลาย responsibilities
5. จด responsibilities ที่พบ

### 2. Identify Root Cause

1. วิเคราะห์ปัญหาจนเข้าใจ root cause
2. หา solution ที่เรียบง่ายที่สุด
3. ไม่สร้าง abstraction ที่ไม่จำเป็น

### 3. Identify Responsibilities

1. แยก `business logic` ออกจาก `utility logic`
2. แยก `pure functions` ออกจาก functions ที่มี `side effects`
3. ระบุ `I/O operations` (network, file, storage)
4. ระบุ `data transformations`
5. ระบุ `validation/logic`

### 4. Apply Minimal Fix

1. ใช้ single-line change เมื่อเป็นไปได้
2. ไม่ refactor ทั้งโค้ดเบสเพื่อแก้ปัญหาเล็กๆ
3. ไม่สร้าง generic solution สำหรับปัญหาเฉพาะ

### 5. Extract Functions

1. สร้าง function ใหม่สำหรับแต่ละ responsibility
2. ใช้ `/improve-naming` เพื่อตั้งชื่อที่สื่อความหมาย
3. รักษา `parameter structure` เดิมถ้าเป็นไปได้
4. เก็บ `return values` ให้เหมือนเดิม

### 6. Compose Responsibilities

1. รวม functions ย่อยใน function หลัก
2. ใช้ `/check-duplication` เพื่อตรวจสอบซ้ำซ้อน
3. ปรับ imports หลังจาก refactor

### 7. Verify

1. ตรวจสอบว่า functionality เหมือนเดิม
2. ทดสอบว่า code ทำงานได้
3. ตรวจสอบว่า functions ไม่เกิน 20-30 บรรทัด
4. ตรวจสอบไม่มี side effects
5. ลบ code ที่ไม่จำเป็นที่เพิ่มขึ้น

## Rules

### 1. Single Responsibility

แต่ละ function ควรมีหน้าที่เดียว

- เปลี่ยนแปลงเพราะเหตุผลเดียว
- ง่ายต่อการ test
- ง่ายต่อการ reuse
- ง่ายต่อการ debug

### 2. Minimal Changes

ใช้ minimal changes เสมอเมื่อ refactor

- ใช้ single-line change เมื่อเป็นไปได้
- ไม่ refactor ทั้งโค้ดเบสเพื่อแก้ปัญหาเล็กๆ
- ไม่สร้าง abstraction ที่ไม่จำเป็น

### 3. Root Cause First

ต้องเข้าใจ root cause ก่อนแก้

- ต้องเข้าใจ root cause ก่อนแก้
- ไม่แก้ symptom โดยไม่รู้สาเหตุ
- ไม่เดา solution โดยไม่วิเคราะห์

### 4. Simple Solutions

ใช้ solution ที่เรียบง่ายที่สุด

- ใช้ solution ที่เรียบง่ายที่สุด
- ไม่สร้าง generic solution สำหรับปัญหาเฉพาะ
- ไม่เพิ่ม complexity โดยไม่จำเป็น

### 5. Separation Of Concerns

แยก concerns ตามลักษณะการทำงาน

| Concern | ตัวอย่าง |
|---------|----------|
| `Business Logic` | validation, calculation, decision |
| `I/O Operations` | fetch, read, write |
| `Data Transform` | format, parse, convert |
| `Utilities` | date, string, math |

### 6. Function Size

จำกัดขนาด function

- ไม่เกิน 20-30 บรรทัด
- ถ้าเกิน ให้แยกออกเป็น functions ย่อย
- ใช้ `/refactor-long-files-to-single-responsibility` หากไฟล์ใหญ่เกินไป

### 7. Pure Functions

แยก pure functions ออกจาก side effects

- Pure functions: ไม่มี side effects, same input → same output
- Side effects: เปลี่ยน state, ทำ I/O, ทำ mutation

```typescript
// Pure function
const calculateTotal = (items: Item[]) => items.reduce((sum, item) => sum + item.price, 0);

// Side effect function
const saveToStorage = async (data: Data) => { await storage.set('data', data); };
```

### 8. Naming Conventions

ตั้งชื่อให้สื่อความหมาย

- ใช้ `VerbNoun` pattern: `calculateTotal`, `fetchUser`
- หลีกเลี่ยง generic names: `process`, `handle`, `update`
- ใช้ `/improve-naming` เพื่อปรับชื่อ

### 9. Dependencies

จัดการ dependencies อย่างถูกต้อง

- รับ dependencies ผ่าน parameters ไม่ใช่ hard code
- ใช้ `dependency injection` สำหรับ testability
- ใช้ `/use-import-alias` เพื่อจัดการ imports

## Expected Outcome

- Functions มีขนาดเล็ก (ไม่เกิน 20-30 บรรทัด)
- แต่ละ function มีหน้าที่เดียว
- Business logic แยกจาก I/O operations
- Pure functions แยกจาก side effects
- ง่ายต่อการ test และ maintain
- ชื่อ functions สื่อความหมาย
- ไม่มี code duplication
- แก้ปัญหาด้วย minimal changes
- ไม่มี over-engineering
- Code ยังเรียบง่ายและเข้าใจง่าย