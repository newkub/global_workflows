---
title: Run Test CLI
description: ทดสอบ CLI commands ทั้งหมด รวมถึง options และ help documentation
auto_execution_mode: 3
---

## Goal

ทดสอบ CLI commands ทั้งหมดให้ทำงานถูกต้อง โดยเริ่มจากการตรวจสอบ `--help` และทดสอบทุก command และ options

## Execute

### 1. Discovery Phase

1. รัน `bun run src/index.ts --help` เพื่อดูรายการ commands ทั้งหมด
2. บันทึก commands ที่พบลงใน checklist
3. ระบุ options ที่ใช้บ่อยสำหรับแต่ละ command

### 2. Help Documentation Testing

1. รัน `<command> --help` สำหรับแต่ละ command
2. ตรวจสอบว่า description ชัดเจนและครบถ้วน
3. ยืนยันว่า options และ arguments แสดงถูกต้อง
4. ตรวจสอบ formatting และ readability

### 3. Command Execution Testing

1. ทดสอบแต่ละ command ด้วย arguments ที่ถูกต้อง
2. ทดสอบกรณี error (missing arguments, invalid inputs)
3. ตรวจสอบ exit codes (0 สำหรับ success, non-zero สำหรับ error)
4. ยืนยันว่า output แสดงผลถูกต้อง

### 4. Options Testing

1. ทดสอบ short options (`-h`, `-v`, `-f`)
2. ทดสอบ long options (`--help`, `--version`, `--force`)
3. ทดสอบ options ที่รับค่า (`--config path`, `--output file`)
4. ตรวจสอบ combinations ของ options ที่ใช้ร่วมกันได้

### 5. Edge Cases Testing

1. ทดสอบกับ empty inputs
2. ทดสอบกับ special characters
3. ทดสอบกับ long inputs
4. ทดสอบกับ concurrent execution

## Rules

### 1. Test Coverage

ทดสอบให้ครอบคลุมทุก scenarios:

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

## Expected Outcome

- CLI commands ทั้งหมดทำงานถูกต้อง
- `--help` documentation ครบถ้วนและอ่านง่าย
- ทุก options ทำงานตามที่ออกแบบ
- Error handling ครอบคลุมทุกกรณี
- Test results บันทึกไว้สำหรับ regression testing
