---
description: แปล function และ code ต่างๆ เป็นประโยคที่เข้าใจง่าย
auto_execution_mode: 3
---

## 1. Code Analysis

1. อ่านไฟล์ที่ต้องการแปล

- ตรวจสอบโครงสร้างไฟล์
- จดบันทึก functions และ logic สำคัญ

2. วิเคราะห์ code structure

- ระบุ input/output ของแต่ละ function
- จำแนกประเภทของ operations

3. สรุป functionality หลัก

- บันทึกวัตถุประสงค์ของ code
- จดความสัมพันธ์ระหว่าง functions

## 2. Translation Process

1. แปล function names

- แปลชื่อเป็นภาษาที่เข้าใจง่าย
- รักษาความหมายเดิมไว้

2. อธิบาย function logic

- อธิบาย input parameters
- อธิบาย process ภายใน
- อธิบาย return values

3. สรุปการทำงาน

- เขียนประโยคสรุป functionality
- ให้ตัวอย่างการใช้งาน
- อธิบาย edge cases ถ้ามี

## 3. Example Usage

1. แปล function ง่ายๆ

```typescript
function calculateSum(a: number, b: number): number {
  return a + b;
}
```

→ "ฟังก์ชันคำนวณผลรวมของตัวเลขสองตัว"

- input: a (ตัวเลขแรก), b (ตัวเลขที่สอง)
- output: ผลรวมของ a และ b

2. แปล function ซับซ้อน

```typescript
async function fetchUserData(userId: string): Promise<User | null> {
  const user = await db.users.findById(userId);
  return user;
}
```

→ "ฟังก์ชันดึงข้อมูลผู้ใช้จาก database โดยใช้ userId"

- input: userId (รหัสผู้ใช้)
- process: ค้นหาใน database และคืนค่าข้อมูลผู้ใช้
- output: object ข้อมูลผู้ใช้ หรือ null ถ้าไม่พบ

3. แปล class methods

```typescript
class EmailValidator {
  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
```

→ "เมธอดตรวจสอบรูปแบบอีเมลว่าถูกต้องหรือไม่"

- input: email (อีเมลที่ต้องการตรวจสอบ)
- output: true ถ้ารูปแบบถูกต้อง, false ถ้าไม่ถูกต้อง
