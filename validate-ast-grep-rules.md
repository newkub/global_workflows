---
title: Validate Ast-grep Rules
description: ตรวจสอบ ast-grep rules ว่า parse ได้ ไม่มี false positives/negatives และ fix ปลอดภัย
auto_execution_mode: 3
url: https://ast-grep.github.io/guide/rule-config.html
related:
  - /follow-ast-grep
  - /update-ast-grep-rules
  - /run-scan
  - /resolve-errors
  - /loop-until-complete
---

## Goal

ตรวจสอบ ast-grep rules ว่าทำงานถูกต้อง: parse ได้ ไม่มี false positives/negatives และ `fix` ปลอดภัย

## Scope

ใช้สำหรับ validate rules ใน `rules/` directory หลังเขียนใหม่ แก้ไข หรือก่อนรัน scan กับ codebase

## Execute

### 1. Check Parse

ตรวจสอบว่า rules ทั้งหมด parse ได้ไม่มี syntax errors

1. รัน `bunx ast-grep scan --inspect summary` เพื่อตรวจสอบว่า rules ทั้งหมด effective
2. ตรวจสอบว่าไม่มี rules ที่ถูก ignore หรือ invalid
3. ถ้ามี parse errors ให้ทำ `/resolve-errors` แล้วรันซ้ำ

### 2. Check False Positives

ตรวจสอบว่า rules ไม่ match code ที่ถูกต้อง

1. รัน `bun run scan` และตรวจสอบผลลัพธ์
2. ระบุ matches ที่ไม่ใช่ violations จริง
3. ปรับ `ignores` สำหรับไฟล์ที่ไม่ควรตรวจ (เช่น test files, config files)
4. ปรับ `constraints` สำหรับ filter meta variables ที่เกินไป
5. ใช้ `bunx ast-grep scan --filter 'RULE_ID'` เพื่อตรวจสอบ rule เฉพาะ

### 3. Check False Negatives

ตรวจสอบว่า rules ไม่พลาด code ที่ควร match

1. ระบุ code patterns ที่ควรถูกตรวจแต่ไม่ถูก match
2. ปรับ `pattern` ให้ครอบคลุมมากขึ้น หรือเพิ่ม `any` patterns
3. ตรวจสอบว่า `kind` และ `pattern` ใช้ร่วมกันอย่างถูกต้อง
4. รัน `bunx ast-grep scan --filter 'RULE_ID'` เพื่อยืนยันว่า match ครบแล้ว

### 4. Check Fix Safety

ตรวจสอบว่า `fix` templates ไม่ทำให้ code เสีย

1. รัน `bunx ast-grep scan --interactive` เพื่อตรวจสอบ fix ทีละ match
2. ตรวจสอบว่า fixed code ยัง compile ได้และทำงานถูกต้อง
3. ถ้า fix ไม่ปลอดภัย ให้ลบ `fix` ออกและใช้ `message` แทน

### 5. Run Test Suite

ถ้ามี `testConfigs` ใน `sgconfig.yml`

1. รัน `bunx ast-grep test` เพื่อ verify rules กับ test cases
2. ตรวจสอบว่า test cases ครอบคลุมทั้ง valid และ invalid patterns
3. ถ้า test fail ให้ทำ `/resolve-errors` แล้วรันซ้ำ

### 6. Final Scan

1. รัน `bun run scan` อีกครั้งเพื่อยืนยันผลลัพธ์สุดท้าย
2. ทำ `/loop-until-complete` จนกว่าจะไม่มี issues จาก validation

## Rules

### Validation Order

- ตรวจสอบ parse ก่อนเสมอ ถ้า parse ไม่ผ่านขั้นตอนถัดไปไม่มีความหมาย
- ตรวจสอบ false positives ก่อน false negatives เพราะ false positives ทำให้ scan ไม่น่าเชื่อถือ
- ตรวจสอบ fix safety หลัง false positives/negatives เพราะ fix ต้อง match ถูกก่อน

### False Positive Prevention

- ใช้ `ignores` สำหรับ test files, config files, และ generated code
- ใช้ `constraints` สำหรับ filter meta variables ที่ match หลายเกินไป
- อย่าจับ framework utilities เป็น violations เช่น `sql` template tag ของ Drizzle
- ตรวจสอบว่า `files` และ `ignores` ถูกต้อง

### False Negative Prevention

- ใช้ `any` patterns สำหรับรองรับหลายรูปแบบของ pattern เดียวกัน
- ตรวจสอบว่า `kind` และ `pattern` ใช้ร่วมกันอย่างถูกต้อง
- ทดสอบกับ code จริงหลายกรณี ไม่ใช่แค่ตัวอย่างเดียว

### Fix Safety

- ทดสอบ `fix` กับ `--interactive` ก่อน apply จริงเสมอ
- ถ้า fix ไม่ปลอดภัย ให้ลบ `fix` ออกและใช้ `message` แทน
- ตรวจสอบว่า fixed code ยัง compile ได้

### Non-Duplication

- ใช้ `/update-ast-grep-rules` สำหรับเขียน rules ใหม่
- ใช้ `/run-scan` สำหรับ scan codebase และแก้ไข issues
- Workflow นี้เน้นเฉพาะ validation ของ rules

## Expected Outcome

- Rules ทั้งหมด parse ได้ไม่มี syntax errors
- ไม่มี false positives หรือ false negatives
- `fix` templates ปลอดภัยไม่ทำให้ code เสีย
- Test suite ผ่านถ้ามี `testConfigs`
- `bun run scan` ให้ผลลัพธ์ที่น่าเชื่อถือ
