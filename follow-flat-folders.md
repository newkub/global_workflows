title: Follow Flat Folders
description: จัดการโครงสร้างโฟลเดอร์แบบ flat ตามหลักการ Single Responsibility
auto_execution_mode: 3
## Purpose

จัดการโครงสร้างโฟลเดอร์แบบ flat (ไม่ซ้อนลึก) เพื่อให้โครงสร้าง project ง่ายต่อการเข้าใจและ maintain

## Scope

ใช้สำหรับ:

- จัดเรียงโฟลเดอร์ใน flat structure
- หลีกเลี่ยง deep nesting
- รักษา consistency ในการจัดเรียง
- ทำให้ navigation ง่ายขึ้น

## Inputs

| Input | Details |
|-------|---------|
| Root Directory | โฟลเดอร์ root ที่ต้องการจัดเรียง |
| Max Depth | (optional) ความลึกสูงสุดที่ยอมรับ |

## Rules

### Flat Folder Principles

| Principle | Description |
|-----------|-------------|
| **Max 2 Levels** | โฟลเดอร์ซ้อนไม่เกิน 2 ระดับ |
| **Feature-based** | จัดกลุ่มตาม feature ไม่ใช่ type |
| **Clear Names** | ชื่อโฟลเดอร์สื่อความหมายชัดเจน |
| **No Empty** | ไม่มี empty folders |

### Standard Structure

```text
project/
├── src/                    # Source code
├── tests/                  # Test files
├── docs/                   # Documentation
├── scripts/                # Build/utility scripts
├── public/                 # Static assets
├── config/                 # Configuration files
└── [feature]/              # Feature modules (flat)
    ├── components/
    ├── utils/
    └── types/
```

## Structure

### Phase Definitions

| Phase | Description | Main Activities |
|-------|-------------|---------------|
| Audit | ตรวจสอบ | วิเคราะห์โครงสร้างปัจจุบัน |
| Plan | วางแผน | ออกแบบ flat structure |
| Restructure | จัดเรียง | ย้ายโฟลเดอร์ |
| Verify | ตรวจสอบ | ยืนยันความถูกต้อง |

## Steps

### Phase 1: Audit

- 1.1 **Map Folder Structure**
  - ใช้ `tree` หรือ `find` ดูโครงสร้าง
  - นับจำนวน levels
  - ระบุ deep nesting (>2 levels)

- 1.2 **Identify Issues**
  - หาโฟลเดอร์ที่ว่างเปล่า
  - หาโฟลเดอร์ที่มีไฟล์น้อยเกินไป
  - หาโฟลเดอร์ที่ซ้อนเกินไป

### Phase 2: Plan

- 2.1 **Design Target Structure**
  - กำหนด top-level folders
  - กำหนด max depth (แนะนำ 2)
  - วางแผนการย้าย

- 2.2 **Create Migration Plan**
  - รายการโฟลเดอร์ที่ย้าย
  - รายการ imports ที่อัพเดท
  - ลำดับการย้าย

### Phase 3: Restructure

- 3.1 **Move Folders**
  - ย้ายโฟลเดอร์ตาม plan
  - รวมโฟลเดอร์ที่เล็กเกินไป
  - ลบ empty folders

- 3.2 **Update References**
  - อัพเดท paths ใน config files
  - อัพเดท imports
  - อัพเดท scripts

### Phase 4: Verify

- 4.1 **Check Structure**
  - ตรวจสอบ depth <= 2
  - ตรวจสอบไม่มี empty folders
  - ตรวจสอบ naming consistency

- 4.2 **Test Project**
  - รัน build
  - รัน tests
  - ตรวจสอบว่า paths ถูกต้อง

## Outputs

| Output | Details |
|--------|---------|
| New Structure | โครงสร้างโฟลเดอร์ใหม่ |
| Moved Items | รายการที่ย้าย |
| Updated Paths | paths ที่อัพเดท |

## Expected Outcome

- โฟลเดอร์ไม่เกิน 2 levels
- ไม่มี empty folders
- Navigation ง่ายขึ้น
- Project ทำงานได้ตามปกติ

## Reference

- `/validate` - ตรวจสอบความถูกต้องก่อนเริ่ม
- `/review-structure` - ตรวจสอบโครงสร้าง

