---
title: Refactor All Workspaces
description: Deep refactoring ทุก workspace ใน monorepo ด้วย comprehensive analysis และ safety measures
auto_execution_mode: 3
related_workflows:
  - /deep-refactor
  - /all-workspaces
  - /refactor-all-workspace
---

## Goal

Deep refactoring ทุก workspace ใน monorepo ด้วย comprehensive analysis, systematic planning, incremental execution, และ robust validation

## Scope

Deep refactor ทุก workspace ใน monorepo ด้วย safety measures ครบถ้วน

## Execute

### 0. Foundation And Safety

เตรียมความพร้อมและ safety measures ก่อนเริ่ม refactor

1. ทำ `/run-test` เพื่อตรวจสอบ baseline ก่อนเริ่ม
2. ทำ `/run-typecheck` เพื่อตรวจสอบ type safety baseline
3. สร้าง commit checkpoint สำหรับ rollback หากจำเป็น

### 1. Discover Workspaces

ค้นหาและระบุ workspaces ทั้งหมดใน monorepo

1. ทำ `/analyze-project` เพื่อดู workspace configuration ทั้งหมด
2. จัดลำดับ workspaces ตามความสำคัญ (foundation packages ก่อน, applications ทีหลัง)

### 2. Deep Analysis

วิเคราะหา codebase เชิงลึกเพื่อระบุ issues ทั้งหมด

1. ทำ `/run-lint` เพื่อตรวจสอบ code quality issues
2. ทำ `/check-duplication` เพื่อหา code duplication
3. ทำ `/read-all-files` เพื่ออ่านไฟล์ทั้งหมดในโปรเจกต์เพื่อวิเคราะหา
4. ทำ `/check-long-files` เพื่อระบุไฟล์ที่ยาวเกินไป
5. ทำ `/check-architecture` เพื่อตรวจสอบ architecture issues
6. วิเคราะหา dependencies graph และ coupling
7. ระบุ technical debt และ code smells
8. วิเคราะหา performance bottlenecks
9. ตรวจสอบ test coverage และ gaps
10. สรุป findings และ prioritize issues

### 3. Strategic Planning

วางแผน refactoring อย่าง systematic และ risk-aware

1. กำหนด priorities ตาม impact, risk, และ dependencies
2. เลือก architecture pattern ที่เหมาะสมด้วย `/follow-architecture`
3. วางแผน breaking changes และ migration path
4. สร้าง test cases สำหรับ protect behavior ที่มีอยู่
5. กำหนด success criteria สำหรับแต่ละ phase
6. วางแผน rollback strategy สำหรับแต่ละ phase
7. ประมาณการ effort และ timeline สำหรับแต่ละ phase

### 4. Process Each Workspace

ทำ deep refactoring ในแต่ละ workspace ตามลำดับที่กำหนด

1. ทำ `/deep-refactor` เพื่อปรับปรุงโครงสร้างโค้ดใน workspace
2. ทำ `/run-test` เพื่อตรวจสอบว่า workspace ทำงานได้ปกติ
3. ทำ `/run-typecheck` เพื่อตรวจสอบ types ถูกต้อง
4. สร้าง commit checkpoint หลังแต่ละ workspace

### 5. Comprehensive Validation

ตรวจสอบทุกด้านเพื่อความปลอดภัย

1. ทำ `/run-typecheck` เพื่อตรวจสอบ type safety ทั้งหมด
2. ทำ `/run-test` เพื่อยืนยันว่า functionality ยังทำงาน
3. ทำ `/test-usage` เพื่อตรวจสอบการใช้งานจริง
4. ทำ `/run-lint` เพื่อตรวจสอบ code quality
5. ทำ `/check-architecture` เพื่อตรวจสอบ architecture consistency
6. ทำ `/run-build` เพื่อตรวจสอบ build process
7. ตรวจสอบว่า success criteria ทั้งหมดผ่าน

### 6. Documentation And Cleanup

อัปเดท documentation และ cleanup

1. ทำ `/update-reference` เพื่ออัปเดท references ทั้งหมด
2. อัปเดท documentation ที่เกี่ยวข้อง
3. ลบ code ที่ไม่ได้ใช้ (dead code)
4. ลบ comments ที่ไม่จำเป็น
5. สร้าง final commit พร้อม descriptive message

## Rules

### 1. Safety First

ความปลอดภัยเป็น first priority:

- ต้องมี baseline test และ typecheck ก่อนเริ่ม
- ต้องสร้าง commit checkpoint หลังแต่ละ workspace
- ต้องมี rollback plan สำหรับแต่ละ workspace
- ต้อง validate ทุกครั้งก่อนไป workspace ถัดไป

### 2. Workspace Processing Order

จัดลำดับการประมวลผลตามความสำคัญ:

- ทำ workspaces ที่เป็น foundation ก่อน (shared packages, utilities)
- ทำ workspaces ที่มี dependencies ซับซ้อนทีหลัง
- หลีกเลี่ยง circular dependencies ระหว่าง workspaces

### 3. Incremental And Verifiable

ทำ incremental และ verify ทุกครั้ง:

- ทำทีละ workspace ไม่ทำทั้งหมดพร้อมกัน
- รัน typecheck และ test หลังแต่ละ workspace
- สร้าง commit checkpoint หลังแต่ละ workspace
- ยืนยันว่าแต่ละ workspace ทำงานได้ก่อนไป workspace ถัดไป
- rollback ง่ายหากมีปัญหา

### 4. Deep Analysis

วิเคราะหาเชิงลึกก่อนเริ่ม refactor:

- ใช้ multiple tools เพื่อ detect issues ทั้งหมด
- วิเคราะหา dependencies graph และ coupling
- ระบุ technical debt และ code smells
- วิเคราะหา performance bottlenecks
- ตรวจสอบ test coverage และ gaps
- prioritize issues ตาม impact และ risk

### 5. Error Handling

จัดการข้อผิดพลาดอย่างเป็นระบบ:

- ทำ `/resolve-errors` สำหรับ workspaces ที่มี issues
- ตรวจสอบว่าการประมวลผลไม่ทำให้เกิดปัญหาใหม่

### 6. Comprehensive Validation

ตรวจสอบทุกด้านก่อนสิ้นสุด:

- Typecheck ผ่านทั้งหมด
- Tests ผ่านทั้งหมด
- Usage test ผ่าน
- Lint ผ่าน
- Architecture consistent
- Build ผ่าน
- Success criteria ทั้งหมดผ่าน

## Expected Outcome

- แต่ละ workspace ใน monorepo ได้รับ deep refactoring ครบถ้วน
- Code quality สูงและ maintainability ดีขึ้นอย่างมีนัยสำคัญ
- Technical debt ลดลงอย่างมีนัยสำคัญ
- Performance ดีขึ้นจากการ optimize
- Test coverage ครบถ้วนและผ่านทุก tests
- Code สอดคล้องกับ best practices และ conventions
- Typecheck ผ่านทั้งหมด
- Tests ผ่านทั้งหมด
- Functionality ยังทำงานได้
- Architecture consistent และ scalable
- Documentation ครบถ้วนและอัปเดท

