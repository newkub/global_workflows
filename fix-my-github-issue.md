---
title: Fix GitHub Issue
description: แก้ไข GitHub issue จาก remote repository อย่างเป็นระบบ ตั้งแต่การระบุปัญหา การวิเคราะห์ การแก้ไข การทดสอบ ไปจนถึงการ commit และ push changes
auto_execution_mode: 3
---


Workflow สำหรับการแก้ไข GitHub issue จาก remote repository อย่างเป็นระบบ เพื่อให้มั่นใจว่าการแก้ไขเป็นไปอย่างถูกต้อง ครบถ้วน และตรงตามความต้องการของ issue

## Execute

### 1. Identify Issue

ระบุและทำความเข้าใจ issue ที่จะแก้ไขก่อนเริ่มทำงาน

1. อ่าน issue จาก GitHub repository ที่ระบุ
2. ตรวจสอบว่า issue ยังเปิดอยู่หรือไม่ และไม่มีคนทำอยู่แล้ว
3. วิเคราะห์ความต้องการของ issue อย่างละเอียด:
   - ปัญหาที่เกิดขึ้นคืออะไร
   - ผลลัพธ์ที่คาดหวังคืออะไร
   - มีข้อมูลเพิ่มเติมหรือ context อะไรบ้าง
4. ตรวจสอบว่ามี issue ที่คล้ายกันหรือ duplicate หรือไม่
5. บันทึกข้อมูลสำคัญจาก issue: issue number, title, description, labels, assignee

### 2. Analyze Codebase

วิเคราะห์ codebase เพื่อหาตำแหน่งที่ต้องแก้ไข

1. ค้นหาไฟล์ที่เกี่ยวข้องกับ issue โดยใช้ Grep หรือ find_by_name
2. อ่านโค้ดในส่วนที่เกี่ยวข้องเพื่อทำความเข้าใจ flow การทำงาน
3. ตรวจสอบ dependencies และ imports ที่เกี่ยวข้อง
4. ดู patterns ที่มีอยู่แล้วใน codebase (naming, structure, conventions)
5. ดูตัวอย่าง implementations ที่คล้ายกันก่อนเริ่มทำ
6. วิเคราะห์ impact ของการเปลี่ยนแปลงที่จะทำ

### 3. Reproduce Issue

พยายาม reproduce ปัญหาเพื่อยืนยันว่าเข้าใจถูกต้อง

1. ทำตาม steps ที่ระบุใน issue description
2. ตรวจสอบว่าสามารถ reproduce ปัญหาได้จริง
3. บันทึก steps การ reproduce และผลลัพธ์ที่เกิดขึ้น
4. ถ้าไม่สามารถ reproduce ได้ ให้ถามเพิ่มเติมใน issue comments

### 4. Plan Solution

วางแผนการแก้ไขปัญหาก่อนเริ่มเขียนโค้ด

1. กำหนด approach ที่จะใช้ในการแก้ไข
2. แบ่งงานออกเป็น sub-tasks ที่เล็กๆ และจัดการได้
3. ระบุไฟล์ที่ต้องแก้ไขทั้งหมด
4. กำหนด test cases ที่จะใช้ทดสอบ
5. พิจารณา side effects และ edge cases ที่อาจเกิดขึ้น
6. ตรวจสอบว่า solution สอดคล้องกับ patterns ที่มีอยู่แล้ว

### 5. Implement Fix

เริ่มแก้ไขโค้ดตามแผนที่วางไว้

1. สร้าง branch ใหม่จาก branch หลัก (หรือ branch ที่ระบุใน issue)
2. ทำการแก้ไขไฟล์ตามลำดับที่วางแผนไว้
3. ใช้ import alias เสมอ
4. แยก separate concerns (types, config, utils ออกจาก logic หลัก)
5. ทำ bulk file ops ใช้ pwsh ถ้าจำเป็น
6. ทำตาม best practices และ patterns ที่มีอยู่ใน codebase
7. หลีกเลี่ยง hard code ให้ใช้ config หรือ constants แทน

### 6. Test Changes

ทดสอบการเปลี่ยนแปลงที่ทำไป

1. รัน tests ที่เกี่ยวข้องเพื่อยืนยันว่าไม่ทำลาย functionality เดิม
2. ทดสอบ manually ตาม steps การ reproduce ที่บันทึกไว้
3. ตรวจสอบว่า issue ได้รับการแก้ไขแล้วจริง
4. ทดสอบ edge cases และ side effects ที่อาจเกิดขึ้น
5. รัน linting และ formatting tools
6. ตรวจสอบ TypeScript errors ถ้ามี

### 7. Commit Changes

Commit changes อย่างเป็นระบบ

1. ตรวจสอบ changes ทั้งหมดด้วย git status
2. ใช้ conventional commits format สำหรับ commit message:
   - feat: สำหรับ new features
   - fix: สำหรับ bug fixes
   - docs: สำหรับ documentation
   - style: สำหรับ formatting
   - refactor: สำหรับ code refactoring
   - test: สำหรับ tests
   - chore: สำหรับ maintenance
3. ระบุ issue number ใน commit message: `fix: resolve #123 - description`
4. Commit changes ด้วย git commit

### 8. Push and Create PR

Push changes และสร้าง Pull Request

1. Push branch ไปยัง remote repository
2. สร้าง Pull Request จาก branch ใหม่ไปยัง target branch
3. เขียน PR description อย่างชัดเจน:
   - อธิบายการเปลี่ยนแปลงที่ทำ
   - เชื่อมโยงกับ issue ที่เกี่ยวข้อง
   - ระบุ steps การทดสอบ
   - ระบุ screenshots หรือ evidence ถ้าจำเป็น
4. เพิ่ม reviewers ตามที่ระบุใน issue หรือ project conventions
5. เพิ่ม labels ที่เหมาะสม
6. แจ้งใน issue comments ว่าได้สร้าง PR แล้ว

### 9. Address Feedback

จัดการ feedback จาก reviewers

1. ตรวจสอบ comments ใน PR อย่างละเอียด
2. ทำการแก้ไขตาม feedback ที่ได้รับ
3. ทดสอบการเปลี่ยนแปลงใหม่อีกครั้ง
4. Commit และ push changes เพิ่มเติม
5. ตอบกลับ comments ใน PR เพื่อยืนยันว่าได้แก้ไขแล้ว

### 10. Merge and Close

Merge PR และปิด issue

1. รอ approval จาก reviewers
2. รัน CI/CD pipeline ให้ผ่านทั้งหมด
3. Merge PR เข้าไปใน target branch
4. ปิด issue ด้วย comment ที่อธิบายว่าได้แก้ไขแล้ว
5. ลบ branch ที่ใช้ทำงานหลังจาก merge เสร็จ

## Rules

### 1. Issue Analysis Rules

กฎการวิเคราะห์ issue ก่อนเริ่มแก้ไข

1. ต้องอ่านและเข้าใจ issue อย่างละเอียดก่อนเริ่มทำงาน
2. ต้องตรวจสอบว่า issue ไม่มี duplicate และยังไม่มีคนทำอยู่
3. ต้องสามารถ reproduce ปัญหาได้จริงก่อนเริ่มแก้ไข
4. ต้องถามเพิ่มเติมใน issue comments ถ้าข้อมูลไม่เพียงพอ
5. ต้องบันทึกข้อมูลสำคัญจาก issue ไว้ใช้ในการอ้างอิง

### 2. Code Analysis Rules

กฎการวิเคราะห์ codebase ก่อนแก้ไข

1. ต้องใช้ Grep หรือ find_by_name ในการค้นหาไฟล์ ไม่ใช้ bash
2. ต้องตรวจสอบ patterns ที่มีอยู่แล้วใน codebase (naming, structure, conventions)
3. ต้องดูตัวอย่าง implementations ที่คล้ายกันก่อนเริ่มทำ
4. ต้องวิเคราะห์ impact ของการเปลี่ยนแปลงก่อนแก้ไข
5. ต้องทำตาม patterns และ conventions ที่มีอยู่แล้ว

### 3. Implementation Rules

กฎการแก้ไขโค้ด

1. ต้องสร้าง branch ใหม่ก่อนเริ่มแก้ไข
2. ต้องใช้ import alias เสมอ
3. ต้องแยก separate concerns (types, config, utils ออกจาก logic หลัก)
4. ต้องหลีกเลี่ยง hard code ให้ใช้ config หรือ constants แทน
5. ต้องทำตาม best practices และ patterns ที่มีอยู่ใน codebase
6. ต้องทำ bulk file ops ใช้ pwsh ถ้าจำเป็น

### 4. Testing Rules

กฎการทดสอบ

1. ต้องรัน tests ที่เกี่ยวข้องก่อนและหลังแก้ไข
2. ต้องทดสอบ manually ตาม steps การ reproduce
3. ต้องทดสอบ edge cases และ side effects
4. ต้องรัน linting และ formatting tools
5. ต้องตรวจสอบ TypeScript errors ถ้ามี
6. ต้องยืนยันว่า issue ได้รับการแก้ไขแล้วจริง

### 5. Commit Rules

กฎการ commit changes

1. ต้องใช้ conventional commits format
2. ต้องระบุ issue number ใน commit message
3. ต้องเขียน commit message อย่างชัดเจนและกระชับ
4. ต้องตรวจสอบ changes ก่อน commit
5. ต้อง commit changes อย่างเป็นระบบและ logical

### 6. PR Rules

กฎการสร้างและจัดการ Pull Request

1. ต้อง push branch ไปยัง remote repository
2. ต้องเขียน PR description อย่างชัดเจน
3. ต้องเชื่อมโยง PR กับ issue ที่เกี่ยวข้อง
4. ต้องระบุ steps การทดสอบใน PR description
5. ต้องเพิ่ม reviewers ตาม conventions
6. ต้องแจ้งใน issue comments ว่าได้สร้าง PR แล้ว

### 7. Feedback Rules

กฎการจัดการ feedback

1. ต้องตรวจสอบ comments ใน PR อย่างละเอียด
2. ต้องทำการแก้ไขตาม feedback ที่ได้รับ
3. ต้องทดสอบการเปลี่ยนแปลงใหม่อีกครั้ง
4. ต้องตอบกลับ comments ใน PR
5. ต้องยืนยันว่าได้แก้ไขตาม feedback แล้ว

### 8. Merge Rules

กฎการ merge และปิด issue

1. ต้องรอ approval จาก reviewers
2. ต้องรัน CI/CD pipeline ให้ผ่านทั้งหมด
3. ต้อง merge PR เข้าไปใน target branch
4. ต้องปิด issue ด้วย comment ที่อธิบาย
5. ต้องลบ branch ที่ใช้ทำงานหลังจาก merge เสร็จ

