---

title: Improve Missing Feature

description: เติมเต็ม features ที่มีอยู่ให้ใช้งานได้สมบูรณ์ และปรับปรุงให้ดียิ่งขึ้น

auto_execution_mode: 3

related_workflows:
  - /analyze-project
  - /check-correctness
  - /check-completeness

---

## Goal

เติมเต็ม features ที่มีอยู่ให้ใช้งานได้สมบูรณ์ และปรับปรุงให้ดียิ่งขึ้น

## Scope

ครอบคลุมการตรวจสอบ features ที่ยังไม่สมบูรณ์, การเติมเต็ม functionality ที่ขาด, และการปรับปรุงคุณภาพของ features ที่มีอยู่

## Execute

### 1. Identify Incomplete Features

1. ทำ `/analyze-project` เพื่อดูภาพรวม features ทั้งหมด
2. ตรวจสอบ TODO, FIXME, HACK comments ใน codebase
3. ระบุ features ที่มี mock data หรือ placeholder implementations
4. ตรวจสอบ features ที่มี error handling ไม่ครบถ้วน

### 2. Prioritize Improvements

1. จัดลำดับ features ตามความสำคัญ:
   - Critical: features หลักที่ผู้ใช้ใช้บ่อย
   - High: features ที่มีผลต่อ core functionality
   - Medium: features ที่เพิ่มประสบการณ์ผู้ใช้
   - Low: features ที่เป็น nice-to-have
2. ประเมิน effort ที่ต้องใช้สำหรับแต่ละ feature
3. เลือก features ที่ให้ผลลัพธ์สูงสุดต่อ effort

### 3. Implement Missing Functionality

1. แปลง mock data เป็น production code
2. เติมเต็ม error handling ที่ขาด
3. เพิ่ม validation และ edge case handling
4. ทำ `/implement-comment-todo` สำหรับ TODO ที่เกี่ยวข้อง

### 4. Enhance Quality

1. ปรับปรุง performance ของ features ที่มีอยู่
2. เพิ่ม test coverage สำหรับ features ที่เพิ่มเติม
3. ปรับปรุง UX/UI ตาม best practices
4. เพิ่ม documentation สำหรับ features ที่ปรับปรุง

### 5. Validate Changes

1. ทำ `/check-correctness` เพื่อยืนยันความถูกต้อง
2. ทำ `/check-completeness` เพื่อตรวจสอบความสมบูรณ์
3. รัน tests ทั้งหมดเพื่อยืนยันไม่มี regression
4. ทำ manual testing สำหรับ features ที่ปรับปรุง

## Rules

### 1. Prioritization Framework

ใช้ framework ในการจัดลำดับ:

- ใช้ Eisenhower Matrix: Urgent vs Important
- พิจารณา impact ต่อผู้ใช้และ business value
- พิจารณา effort และ risk ในการ implement
- เลือก quick wins ก่อนเพื่อสร้าง momentum

### 2. Implementation Standards

มาตรฐานการ implement:

- แปลง mock เป็น production code ทันทีที่เป็นไปได้
- เติมเต็ม error handling ครบถ้วน
- เพิ่ม edge case handling สำหรับทุก scenarios
- เขียน tests ครอบคลุมทุก code paths

### 3. Quality Enhancement

การปรับปรุงคุณภาพ:

- วัด performance ก่อนและหลังปรับปรุง
- ใช้ best practices จาก official documentation
- ปรับปรุง accessibility ตาม WCAG standards
- เพิ่ม logging และ monitoring ตามความจำเป็น

### 4. Documentation

การจัดการ documentation:

- อัปเดต README สำหรับ features ที่เพิ่มเติม
- เพิ่ม examples สำหรับการใช้งาน
- อัปเดต API documentation หากมีการเปลี่ยนแปลง
- เพิ่ม changelog สำหรับ breaking changes

## Expected Outcome

- Features ที่ใช้งานได้สมบูรณ์ ไม่มี mock หรือ placeholder
- Error handling ครบถ้วนทุก scenarios
- Test coverage สูงสำหรับ features ที่ปรับปรุง
- Documentation อัปเดตและครบถ้วน

## Common Mistakes

ข้อผิดพลาดที่พบบ่อย:

- ไม่จัดลำดับ features ทำทุกอย่างพร้อมกัน
- ทิ้ง mock หรือ placeholder ไว้โดยไม่แปลง
- ไม่เพิ่ม tests สำหรับ features ที่เพิ่มเติม
- ไม่อัปเดต documentation
- ปรับปรุงโดยไม่วัดผลลัพธ์

## Anti-Patterns

รูปแบบที่ไม่ควรทำ:

- ❌ ทำทุกอย่างพร้อมกันโดยไม่จัดลำดับ
- ❌ ทิ้ง TODO หรือ mock ไว้โดยไม่แก้ไข
- ❌ เพิ่ม features โดยไม่มี tests
- ❌ ปรับปรุงโดยไม่วัด performance
- ❌ ไม่อัปเดต documentation
