---
title: Refactor File To Single Responsibility
description: ปรับโค้ดในไฟล์ให้มีหน้าที่เดียวตาม SRP ด้วย minimal changes
auto_execution_mode: 3
related_workflows:
  - /dont-over-engineer
  - /improve-naming
  - /check-duplication
  - /use-import-alias
  - /restructure
  - /update-reference
  - /refactor-long-files-to-single-responsibility
---

## Goal

ปรับโค้ดให้แต่ละ function/module มีหน้าที่เดียว ง่ายต่อการ maintain และ test ด้วย minimal changes

## Scope

Refactor functions และ modules ที่มีหลาย responsibilities ให้มีหน้าที่เดียวตาม Single Responsibility Principle ด้วย minimal changes สำหรับไฟล์ที่ยาวกว่า 250 บรรทัด ให้ใช้ `/refactor-long-files-to-single-responsibility`

## Execute

### 1. Check File Size

ตรวจสอบขนาดไฟล์ก่อน refactor

1. ตรวจสอบขนาดไฟล์
2. ถ้า > 250 บรรทัด ใช้ `/refactor-long-files-to-single-responsibility`
3. ถ้า <= 250 บรรทัด ดำเนินการต่อ

### 2. Analyze And Identify

วิเคราะห์และระบุ responsibilities

1. อ่าน `/restructure` เพื่อเข้าใจโครงสร้างที่ถูกต้อง
2. อ่านไฟล์ที่ต้องการ refactor
3. ระบุ function ที่มีหลาย responsibilities
4. แยก `business logic`, `I/O operations`, `data transformations`, `validation/logic`
5. แยก `pure functions` ออกจาก functions ที่มี `side effects`

### 3. Extract And Compose

แยกและรวม responsibilities

1. สร้าง function ใหม่สำหรับแต่ละ responsibility
2. ใช้ `/improve-naming` เพื่อตั้งชื่อที่สื่อความหมาย
3. รักษา `parameter structure` และ `return values` เดิม
4. รวม functions ย่อยใน function หลัก
5. ใช้ `/check-duplication` เพื่อตรวจสอบซ้ำซ้อน
6. ปรับ imports หลังจาก refactor

### 4. Verify And Update

ตรวจสอบและอัปเดท

1. ตรวจสอบว่า functionality เหมือนเดิม
2. ทดสอบว่า code ทำงานได้
3. ตรวจสอบว่า functions ไม่เกิน 20-30 บรรทัด
4. ลบ code ที่ไม่จำเป็น
5. ทำตาม `@[/edit-relative]` เพื่ออัปเดท references

## Rules

### 1. Single Responsibility

แต่ละ function มีหน้าที่เดียว

- เปลี่ยนแปลงเพราะเหตุผลเดียว
- ง่ายต่อการ test, reuse, debug

### 2. Minimal Changes

ใช้ minimal changes เสมอ

- ใช้ single-line change เมื่อเป็นไปได้
- ไม่ refactor ทั้งโค้ดเบสเพื่อแก้ปัญหาเล็กๆ
- ไม่สร้าง abstraction ที่ไม่จำเป็น

### 3. Root Cause First

เข้าใจ root cause ก่อนแก้

- วิเคราะห์ปัญหาจนเข้าใจ root cause
- หา solution ที่เรียบง่ายที่สุด
- ไม่แก้ symptom โดยไม่รู้สาเหตุ

### 4. Separation Of Concerns

แยก concerns ตามลักษณะการทำงาน

| Concern | ตัวอย่าง |
|---------|----------|
| `Business Logic` | validation, calculation, decision |
| `I/O Operations` | fetch, read, write |
| `Data Transform` | format, parse, convert |
| `Utilities` | date, string, math |

### 5. Function Size

จำกัดขนาด function

- ไม่เกิน 20-30 บรรทัด
- ถ้าเกิน ให้แยกออกเป็น functions ย่อย

### 6. Pure Functions

แยก pure functions ออกจาก side effects

- Pure functions: ไม่มี side effects, same input → same output
- Side effects: เปลี่ยน state, ทำ I/O, ทำ mutation

```typescript
// Pure function
const calculateTotal = (items: Item[]) => items.reduce((sum, item) => sum + item.price, 0);

// Side effect function
const saveToStorage = async (data: Data) => { await storage.set('data', data); };
```

### 7. Naming Conventions

ตั้งชื่อให้สื่อความหมาย

- ใช้ `VerbNoun` pattern: `calculateTotal`, `fetchUser`
- หลีกเลี่ยง generic names: `process`, `handle`, `update`

### 8. Dependencies

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

