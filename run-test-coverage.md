title: Run Test Coverage
description: รัน test coverage analysis เพื่อวิเคราะห์และปรับปรุง code coverage
auto_execution_mode: 3
## Purpose

รัน test coverage analysis เพื่อวิเคราะห์ code coverage และแนะนำการปรับปรุง

## Scope

ใช้สำหรับ:

- วิเคราะห์ code coverage ปัจจุบัน
- ระบุ areas ที่ขาด coverage
- แนะนำ tests ที่ควรเพิ่ม
- Monitor coverage trends

## Inputs

| Input | Details |
|-------|---------|
| Coverage Threshold | (optional) เปอร์เซ็นต์ขั้นต่ำ |
| Report Format | (optional) format ของ report |

## Rules

### Coverage Analysis

| Metric | Description |
|--------|-------------|
| Lines | % ของ lines ที่ถูก execute |
| Functions | % ของ functions ที่ถูก call |
| Branches | % ของ branches ที่ถูก test |
| Statements | % ของ statements ที่ถูก execute |

### Threshold Rules

| Coverage | การดำเนินการ |
|----------|-------------|
| >= 80% | Acceptable |
| >= 90% | Good |
| >= 95% | Excellent |
| < 80% | ต้องเพิ่ม tests |

## Structure

### File Location

```text
.windsurf/workflows/
└── run-test-coverage.md
```

### Phase Definitions

| Phase | Description | Main Activities |
|-------|-------------|---------------|
| Setup | เตรียมการ | install, check config |
| Run | รัน coverage | execute tests with coverage |
| Analyze | วิเคราะห์ | ดู coverage report |
| Improve | ปรับปรุง | เพิ่ม tests ถ้าจำเป็น |

## Steps

### Phase 1: Setup

- 1.1 **Install Dependencies**
  - รัน `/run-install`
  - ตรวจสอบ coverage tools ถูกติดตั้ง

- 1.2 **Check Configuration**
  - ตรวจสอบ coverage config ใน vitest/jest config
  - ตรวจสอบ coverage thresholds
  - ตรวจสอบ coverage directory

### Phase 2: Run Coverage

- 2.1 **Execute Coverage**
  - รัน `bun run test:coverage` หรือ script ที่กำหนด
  - รอ tests เสร็จสิ้น
  - บันทึก coverage metrics

- 2.2 **Generate Report**
  - สร้าง coverage report files
  - ตรวจสอบ report ถูกสร้าง
  - บันทึก report location

### Phase 3: Analyze

- 3.1 **Review Metrics**
  - ดู coverage percentages
  - ระบุ files ที่มี coverage ต่ำ
  - ระบุ uncovered lines/branches

- 3.2 **Identify Gaps**
  - หา code ที่ไม่มี tests
  - หา edge cases ที่ยังไม่ถูก cover
  - หา error paths ที่ยังไม่ถูก test

### Phase 4: Improve

- 4.1 **Add Tests**
  - เขียน tests สำหรับ gaps ที่พบ
  - focus ที่ uncovered code paths
  - เพิ่ม edge case tests

- 4.2 **Re-run Coverage**
  - รัน coverage อีกครั้ง
  - ตรวจสอบว่า coverage เพิ่มขึ้น
  - ทำซ้ำจนกว่าจะพอใจ

## Outputs

| Output | Details |
|--------|---------|
| Coverage Report | รายงาน coverage ทั้งหมด |
| Coverage Metrics | เปอร์เซ็นต์แต่ละ category |
| Uncovered Code | รายการ code ที่ยังไม่มี tests |
| Improvement Suggestions | แนะนำ tests ที่ควรเพิ่ม |

## Expected Outcome

- Coverage report ถูกสร้าง
- Metrics ครบทุก category
- Uncovered code ถูกระบุ
- Tests เพิ่มขึ้นถ้าจำเป็น

## Reference

- `/validate` - ตรวจสอบความถูกต้องก่อนเริ่ม
- `/run-test` - รัน tests
- `/run-install` - ติดตั้ง dependencies
