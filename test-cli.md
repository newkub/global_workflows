---
title: Test CLI
description: ทดสอบ CLI commands ทั้งหมด รวมถึง options, help documentation และ edge cases
auto_execution_mode: 3
related_workflows:
  - /test-usage
  - /run-test-browser
  - /record-terminal
  - /capture-terminal
  - /resolve-errors
  - /report
---

## Goal

ทดสอบ CLI commands ทั้งหมดให้ทำงานถูกต้อง โดยเริ่มจากการตรวจสอบ `--help` และทดสอบทุก command และ options

## Scope

ใช้สำหรับทดสอบ CLI ทุกประเภท เช่น `bun run src/index.ts`, `bin/cli`, หรือ executable commands ที่รับ arguments

## Execute

### 1. Discovery Phase

ค้นหา CLI entry points และ commands ทั้งหมด

1. ตรวจสอบ `package.json` สำหรับ `bin` field และ scripts
2. ตรวจสอบ entry points (`src/index.ts`, `src/cli/`, `bin/`)
3. รัน `<entry> --help` เพื่อดูรายการ commands ทั้งหมด
4. บันทึก commands ที่พบลงใน checklist
5. ระบุ options ที่ใช้บ่อยสำหรับแต่ละ command

### 2. Help Documentation Testing

ตรวจสอบ help documentation ของทุก command

1. รัน `<command> --help` สำหรับแต่ละ command
2. ตรวจสอบว่า description ชัดเจนและครบถ้วน
3. ยืนยันว่า options และ arguments แสดงถูกต้อง
4. ตรวจสอบ formatting และ readability
5. ตรวจสอบว่ามี usage examples ที่เข้าใจง่าย

### 3. Command Execution Testing

ทดสอบแต่ละ command ด้วย arguments จริง

1. ทดสอบแต่ละ command ด้วย valid arguments
2. ทดสอบกรณี error (missing arguments, invalid inputs)
3. ตรวจสอบ exit codes (0 สำหรับ success, non-zero สำหรับ error)
4. ยืนยันว่า output แสดงผลถูกต้อง
5. ทดสอบ command combinations และ pipelines

### 4. Options Testing

ทดสอบ options ทุกประเภท

1. ทดสอบ short options (`-h`, `-v`, `-f`)
2. ทดสอบ long options (`--help`, `--version`, `--force`)
3. ทดสอบ options ที่รับค่า (`--config path`, `--output file`)
4. ทดสอบ combinations ของ options ที่ใช้ร่วมกันได้
5. ทดสอบ conflicting options และ error messages

### 5. Edge Cases Testing

ทดสอบกรณีพิเศษและ boundary conditions

1. ทดสอบกับ empty inputs
2. ทดสอบกับ special characters และ unicode
3. ทดสอบกับ long inputs และ large files
4. ทดสอบกับ concurrent execution
5. ทดสอบกับ missing dependencies หรือ invalid config

### 6. Record And Capture

บันทึก terminal sessions สำหรับ documentation และ regression testing

1. ทำ `/record-terminal` เพื่อบันทึก test execution
2. ทำ `/capture-terminal` เพื่อ capture screenshot สำหรับ test cases ที่สำคัญ
3. เก็บไฟล์ใน `test/screenshots/` และ `test/recordings/`

### 7. Review And Report

1. ทำ `/review-test-result` เพื่อวิเคราะห์ผล test execution
2. ทำ `/report` สรุปผลลัพธ์:
   - `/report-format-table` สำหรับ command test results
   - `/report-format-terminal` สำหรับ terminal output ที่สำคัญ

## Rules

### 1. Test Coverage

- ทดสอบทุก command ที่มีใน CLI
- ทดสอบทุก option ที่ประกาศไว้
- ทดสอบทั้ง success และ error cases
- ทดสอบ integration ระหว่าง commands

### 2. Documentation Standards

Help documentation ต้องมี:

- `description` กระชับและชัดเจน
- `usage examples` ที่เข้าใจง่าย
- `options` พร้อมคำอธิบาย
- `arguments` ระบุชนิดข้อมูลและความจำเป็น

### 3. Output Validation

ตรวจสอบ output ตามประเภท:

- `stdout` สำหรับ output ปกติ
- `stderr` สำหรับ error messages
- `exit codes` ต้องสอดคล้องกับผลลัพธ์
- `logging` ต้องมีระดับที่เหมาะสม

### 4. Error Handling

Error handling ต้องมี:

- `error messages` ที่เข้าใจง่าย
- `suggestions` สำหรับแก้ไขปัญหา
- `exit codes` ที่เหมาะสม
- ไม่ crash หรือ hang ในกรณีพิเศษ

### 5. Integration With Test Usage

- ใช้ `/test-cli` จาก `/test-usage` เมื่อ project มี CLI
- ไม่ต้องรันถ้า project ไม่มี CLI entry point
- บันทึก results สำหรับ regression testing

## Expected Outcome

- CLI commands ทั้งหมดทำงานถูกต้อง
- `--help` documentation ครบถ้วนและอ่านง่าย
- ทุก options ทำงานตามที่ออกแบบ
- Error handling ครอบคลุมทุกกรณี
- Test results บันทึกไว้สำหรับ regression testing
