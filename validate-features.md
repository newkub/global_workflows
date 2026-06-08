---

title: Validate Features

description: ตรวจสอบและระบุ features ที่ไม่จำเป็นต้องมี เพื่อลดความซับซ้อน

auto_execution_mode: 3

related_workflows:
  - /analyze-project
  - /check-unused-deps
  - /check-unsued-files

---

## Goal

ตรวจสอบและระบุ features ที่ไม่จำเป็นต้องมี เพื่อลดความซับซ้อนและปรับปรุง maintainability

## Scope

ครอบคลุมการตรวจสอบ features ที่ไม่ได้ใช้, features ที่ซ้ำซ้อน, และ features ที่ไม่ตรงกับ requirements

## Execute

### 1. Identify Unused Features

1. ทำ `/analyze-project` เพื่อดูภาพรวม features ทั้งหมด
2. ตรวจสอบ code paths ที่ไม่มีการเรียกใช้
3. ตรวจสอบ components หรือ modules ที่ไม่ถูก import
4. ทำ `/check-unsued-files` เพื่อหาไฟล์ที่ไม่ได้ใช้

### 2. Identify Redundant Features

1. ตรวจสอบ features ที่มี functionality ซ้ำกัน
2. ระบุ code duplication ระหว่าง features
3. ตรวจสอบ dependencies ที่ซ้ำซ้อน
4. ทำ `/check-duplication` เพื่อหา code ที่ซ้ำกัน

### 3. Validate Against Requirements

1. ตรวจสอบว่า features ทั้งหมดตรงกับ requirements ปัจจุบัน
2. ระบุ features ที่ถูกสร้างแต่ไม่มีใน requirements
3. ตรวจสอบ features ที่ obsolete หรือ deprecated
4. ตรวจสอบ features ที่ไม่ตรงกับ business goals

### 4. Assess Impact

1. ประเมินผลกระทบของการลบ features แต่ละตัว
2. ตรวจสอบ dependencies ระหว่าง features
3. ระบุ features ที่มีผลต่อ core functionality
4. จัดลำดับ features ที่จะลบตามความเสี่ยงต่ำสุด

### 5. Remove Unnecessary Features

1. ลบ features ที่ไม่ได้ใช้และไม่มีผลกระทบ
2. รวม features ที่ซ้ำซ้อนเป็นตัวเดียว
3. อัปเดต imports และ references หลังลบ
4. อัปเดต documentation และ tests

### 6. Validate Changes

1. รัน build หรือ type check เพื่อยืนยันไม่มี errors
2. รัน tests ทั้งหมดเพื่อยืนยันไม่มี regression
3. ทำ `/check-unused-deps` เพื่อลบ dependencies ที่ไม่ได้ใช้
4. ทำ manual testing สำหรับ features ที่เหลือ

## Rules

### 1. Validation Criteria

เกณฑ์การตรวจสอบ:

- Features ที่ไม่มีการเรียกใช้ใน codebase
- Features ที่ไม่มี tests
- Features ที่ไม่มี documentation
- Features ที่ไม่ตรงกับ requirements ปัจจุบัน
- Features ที่มี functionality ซ้ำกับ features อื่น

### 2. Impact Assessment

การประเมินผลกระทบ:

- ตรวจสอบ dependencies ทั้ง direct และ indirect
- ตรวจสอบ configuration ที่อ้างอิงถึง features
- ตรวจสอบ external integrations ที่ใช้ features
- ตรวจสอบ user-facing functionality ที่ใช้ features

### 3. Removal Strategy

กลยุทธ์การลบ:

- ลบ features ที่ไม่มีผลกระทบก่อน
- รวม features ที่ซ้ำซ้อนเป็นตัวเดียว
- ลบ features ที่ obsolete หรือ deprecated
- ลบ features ที่ไม่ตรงกับ business goals

### 4. Documentation Updates

การอัปเดต documentation:

- อัปเดต README สำหรับ features ที่ลบ
- อัปเดต API documentation หากมีการเปลี่ยนแปลง
- เพิ่ม changelog สำหรับ breaking changes
- อัปเดต examples และ tutorials

## Expected Outcome

- Features ที่จำเป็นเท่านั้นที่เหลืออยู่
- Codebase ที่กระชับและง่ายต่อการ maintain
- Dependencies ที่ลดลง
- Documentation ที่อัปเดตและครบถ้วน

## Common Mistakes

ข้อผิดพลาดที่พบบ่อย:

- ลบ features โดยไม่ตรวจสอบ dependencies
- ลบ features ที่ยังใช้งานอยู่
- ไม่อัปเดต documentation หลังลบ
- ไม่รัน tests หลังลบ
- ลบ features โดยไม่ประเมินผลกระทบ

## Anti-Patterns

รูปแบบที่ไม่ควรทำ:

- ❌ ลบ features โดยไม่ตรวจสอบ dependencies
- ❌ ลบ features ที่ยังมีผู้ใช้
- ❌ ลบ features โดยไม่มี tests
- ❌ ลบ features โดยไม่อัปเดต documentation
- ❌ ลบ features ที่สำคัญโดยไม่ปรึกษาทีม
