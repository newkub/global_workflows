title: Follow Flat Files
description: จัดการโครงสร้างไฟล์แบบ flat ตามหลักการ Single Responsibility
auto_execution_mode: 3
## Purpose

จัดการโครงสร้างไฟล์แบบ flat (ไม่ซ้อนโฟลเดอร์ลึก) ตามหลักการ Single Responsibility - แต่ละไฟล์มีหน้าที่ชัดเจนและจัดเรียงในระดับเดียวกัน

## Scope

ใช้สำหรับ:

- จัดเรียงไฟล์ใน flat structure
- ตั้งชื่อไฟล์ที่สื่อความหมาย
- หลีกเลี่ยงการซ้อนโฟลเดอร์ลึกเกินไป
- รักษา consistency ในการตั้งชื่อ

## Inputs

| Input | Details |
|-------|---------|
| Source Files | ไฟล์ที่ต้องการจัดเรียง |
| Target Directory | โฟลเดอร์ปลายทาง |

## Rules

### Flat Structure Principles

| Principle | Description |
|-----------|-------------|
| **Single Level** | ไฟล์อยู่ระดับเดียวกัน ไม่ซ้อนลึก |
| **Descriptive Names** | ชื่อไฟล์บ่งบอกหน้าที่ |
| **Prefix Grouping** | ใช้ prefix สำหรับจัดกลุ่ม |
| **No Index Files** | ไม่ใช้ index.ts เป็น barrel |

### Naming Conventions

| Pattern | Use Case |
|---------|----------|
| `feature.action.ts` | Feature-based |
| `type.name.ts` | Type-based (utils, composables) |
| `domain.operation.ts` | Domain-based |

## Structure

### Example Flat Structure

```text
src/
├── user.create.ts
├── user.update.ts
├── user.delete.ts
├── auth.login.ts
├── auth.logout.ts
├── utils.format.ts
├── utils.validate.ts
└── types.user.ts
```

### Phase Definitions

| Phase | Description | Main Activities |
|-------|-------------|---------------|
| Analyze | วิเคราะห์ | ดูโครงสร้างปัจจุบัน |
| Plan | วางแผน | กำหนด flat structure |
| Rename | ตั้งชื่อ | rename ไฟล์ตาม convention |
| Verify | ตรวจสอบ | ยืนยัน imports ถูกต้อง |

## Steps

### Phase 1: Analyze

- 1.1 **Map Current Structure**
  - วาดโครงสร้างปัจจุบัน
  - ระบุ nesting levels
  - หาไฟล์ที่ซ้อนลึก

- 1.2 **Identify Responsibilities**
  - วิเคราะห์หน้าที่แต่ละไฟล์
  - ระบุ coupling
  - หาโอกาสแยกไฟล์

### Phase 2: Plan

- 2.1 **Design Flat Structure**
  - กำหนด naming convention
  - วางแผนการจัดกลุ่มด้วย prefix
  - ร่าง target structure

- 2.2 **Plan Migrations**
  - ระบุไฟล์ที่ต้อง move
  - ระบุ imports ที่ต้อง update
  - ทำ migration plan

### Phase 3: Rename/Move

- 3.1 **Execute Renames**
  - ย้ายไฟล์ไป flat structure
  - ตั้งชื่อใหม่ตาม convention
  - อัพเดทไฟล์ references

- 3.2 **Update Imports**
  - อัพเดท imports ในไฟล์อื่น
  - ใช้ find/replace อย่างระมัดระวัง
  - ตรวจสอบ circular dependencies

### Phase 4: Verify

- 4.1 **Test Imports**
  - รัน typecheck
  - รัน tests
  - ตรวจสอบว่า imports ถูกต้อง

- 4.2 **Validate Structure**
  - ตรวจสอบ flat level
  - ตรวจสอบ naming consistency
  - ตรวจสอบ no index files

## Outputs

| Output | Details |
|--------|---------|
| Flat Structure | โครงสร้างไฟล์ใหม่ |
| Renamed Files | รายการที่ rename |
| Updated Imports | imports ที่อัพเดท |

## Expected Outcome

- ไฟล์อยู่ใน flat structure
- ชื่อไฟล์ descriptive
- ไม่มี nesting ลึก
- ทุก imports ทำงานได้

## Reference

- `/validate` - ตรวจสอบความถูกต้องก่อนเริ่ม
- `/review-structure` - ตรวจสอบโครงสร้าง

