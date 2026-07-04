---
title: Improve Comment
description: ปรับปรุงคุณภาพ comments ใน codebase ให้ชัดเจนและเป็นประโยชน์
auto_execution_mode: 3
related_workflows:
  - /follow-content-quality
  - /refactor
---

## Goal

ปรับปรุงคุณภาพ comments ใน codebase ให้ชัดเจน กระชับ และเป็นประโยชน์ต่อการอ่านและบำรุงรักษา code

## Scope

ใช้สำหรับทุก workspace ที่มี code ที่ต้องการปรับปรุง comments:

- ใช้กับทุกภาษา (TypeScript, JavaScript, Rust, Go, Python, etc.)
- ใช้กับทุกประเภทของ files (source files, test files, config files)
- ใช้กับทั้ง library และ application code
- ใช้กับทุก workspace ใน monorepo

## Execute

### 1. Analyze Comments

วิเคราะห์และประเมิน comments ที่มีอยู่ใน codebase

- ใช้ `grep` หรือ code search tools เพื่อค้นหา comments ทั้งหมด
- ประเมินความจำเป็นและประโยชน์ของแต่ละ comment
- ระบุ comments ที่ซ้ำซ้อนกับ code หรือล้าสมัย
- จัดลำดับ priority ตาม impact และความสำคัญของไฟล์

### 2. Remove Unnecessary Comments

ลบ comments ที่ไม่จำเป็นและไม่เป็นประโยชน์

- ลบ comments ที่ซ้ำซ้อนกับ code หรืออธิบายสิ่งที่ชัดเจนอยู่แล้ว
- ลบ commented-out code ที่ไม่จำเป็น
- ลบ comments ที่ล้าสมัยและไม่ตรงกับ code ปัจจุบัน
- ลบ comments ที่ไม่มีความหมายหรือเป็นการโกหก

### 3. Improve Existing Comments

ปรับปรุง comments ที่มีประโยชน์ให้ดีขึ้น

- ทำให้ comments กระชับและชัดเจน
- อธิบาย "why" ไม่ใช่ "what" - ทำไมต้องทำแบบนี้ ไม่ใช่ทำอะไร
- ใช้ active voice และ present tense
- หลีกเลี่ยง jargon และคำที่ไม่ชัดเจน
- ใช้ภาษาที่เหมาะสมกับ context (ภาษาไทย/อังกฤษ)

### 4. Add Missing Comments

เพิ่ม comments ที่จำเป็นสำหรับสิ่งที่ไม่ชัดเจนจาก code

- เพิ่ม comments สำหรับ business logic ที่ซับซ้อน
- เพิ่ม comments สำหรับ algorithms ที่ไม่ชัดเจน
- เพิ่ม comments สำหรับ edge cases และ special handling
- เพิ่ม JSDoc สำหรับ public APIs และ interfaces
- เพิ่ม comments สำหรับ workarounds, performance considerations, security considerations

### 5. Verify And Test

ตรวจสอบและยืนยันการเปลี่ยนแปลง

- ตรวจสอบว่า comments ตรงกับ code ปัจจุบัน
- รัน `biome check` หรือ lint tools เพื่อยืนยัน
- ทดสอบ code ที่มีการเปลี่ยนแปลง

## Rules

### 1. Comment Principles

- Comments ควรอธิบาย "why" ไม่ใช่ "what"
- Code ควร self-documenting มากที่สุด
- Comments ควรเป็นประโยชน์ต่อผู้อ่านในอนาคต
- Comments ควรถูกบำรุงรักษาเหมือน code
- Comments ที่ล้าสมัยคือ comments ที่เป็นอันตราย

### 2. When to Comment

- อธิบาย business logic ที่ซับซ้อน
- อธิบาย algorithms ที่ไม่ชัดเจน
- อธิบาย edge cases และ special handling
- อธิบาย public APIs และ interfaces
- อธิบาย workarounds และ temporary solutions
- อธิบาย performance considerations
- อธิบาย security considerations

### 3. When NOT to Comment

- ห้าม comment สิ่งที่ชัดเจนอยู่แล้ว
- ห้าม comment ที่ซ้ำซ้อนกับ code
- ห้าม comment ที่ล้าสมัย
- ห้าม commented-out code
- ห้าม comment ที่ไม่มีความหมาย
- ห้าม comment ที่เป็นการโกหก (misleading)

### 4. Comment Style

- ใช้ภาษาที่เหมาะสมกับ context (ภาษาไทย/อังกฤษ)
- ใช้ active voice และ present tense
- ใช้ประโยคที่สั้นและกระชับ
- ใช้ proper grammar และ spelling
- ใช้ consistent style ทั่วทั้ง codebase

### 5. Comment Formats

- ใช้ single-line comments สำหรับ comments สั้น
- ใช้ multi-line comments สำหรับ comments ยาว
- ใช้ JSDoc สำหรับ function documentation
- ใช้ inline comments สำหรับ explanations ที่จำเป็น
- ใช้ block comments สำหรับ section headers

## Expected Outcome

- Comments ที่มีประโยชน์จริงและเป็นประโยชน์ต่อผู้อ่านในอนาคต
- Comments ที่ตรงกับ code ปัจจุบันและถูกบำรุงรักษาเหมือน code
- Comments ที่ชัดเจนและเข้าใจง่าย
- Code ที่ self-documenting มากขึ้น
- ไม่มี comments ที่ซ้ำซ้อนหรือล้าสมัย

## Report

รายงานสถานะการปรับปรุง comments

- ใช้ `/report-format-summary` สำหรับสรุปผลลัพธ์
- ระบุจำนวน comments ที่ถูกลบและเพิ่ม
- ระบุไฟล์ที่มีการเปลี่ยนแปลง
- แสดง examples ของ comments ที่ปรับปรุง
