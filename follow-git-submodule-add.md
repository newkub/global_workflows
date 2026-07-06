---
title: Git Submodule Add
description: เพิ่ม git submodule เข้าไปใน repository เพื่อ track external dependencies ที่เป็น Git repository อื่น
auto_execution_mode: 3
---


เพิ่ม Git repository อื่นเข้ามาเป็น submodule ของ repository ปัจจุบัน เพื่อจัดการ external dependencies ที่ต้องการ track version แยกจาก main repository

## Execute

### 1. Preparation

เตรียมความพร้อมก่อนเพิ่ม submodule

1. ตรวจสอบว่า repository ปัจจุบันอยู่ใน clean state
2. ตรวจสอบ URL ของ repository ที่ต้องการเพิ่มเป็น submodule
3. ตัดสินใจว่าจะเพิ่ม submodule ไว้ที่ path ไหน (default คือชื่อ repository)
4. ตรวจสอบว่ามี submodule ชื่อเดียวกันอยู่แล้วหรือไม่

### 2. Add Submodule

เพิ่ม submodule เข้าไปใน repository

1. ใช้คำสั่ง `git submodule add <url> [path]` เพื่อเพิ่ม submodule
2. Git จะ clone repository ที่ระบุเข้ามาใน working directory
3. Git จะสร้างหรืออัพเดทไฟล์ .gitmodules
4. Git จะเพิ่ม entry สำหรับ submodule ใน staging area

### 3. Verify Changes

ตรวจสอบการเปลี่ยนแปลงหลังเพิ่ม submodule

1. รัน `git status` เพื่อดูไฟล์ที่ถูกเพิ่ม (.gitmodules และ submodule folder)
2. ตรวจสอบไฟล์ .gitmodules ว่ามี configuration ถูกต้อง
3. ตรวจสอบ submodule folder ว่าถูก clone มาถูกต้อง
4. รัน `git diff --cached --submodule` เพื่อดู changes อย่างละเอียด

### 4. Commit Changes

Commit การเพิ่ม submodule

1. Stage .gitmodules file และ submodule folder
2. Commit ด้วย message ที่อธิบายว่าเพิ่ม submodule อะไร
3. Push commit ไปยัง remote repository

### 5. Configure URL (Optional)

ตั้งค่า URL สำหรับ submodule ถ้าจำเป็น

1. ถ้าต้องใช้ URL ส่วนตัวสำหรับ push ใช้ `git config submodule.<name>.url <private-url>`
2. ใช้ relative URL ถ้า submodule อยู่ใน same server
3. ตรวจสอบว่า URL ที่ใช้เป็น URL ที่ team อื่นสามารถ access ได้

## Rules

### 1. URL Selection Rules

เลือก URL ที่เหมาะสมสำหรับ submodule

1. ใช้ URL ที่ team ทั้งหมดสามารถ access ได้
2. ถ้ามี URL สำหรับ push และ pull ต่างกัน ให้ใช้ URL สำหรับ pull
3. ใช้ relative URL ถ้า submodule อยู่บน same server เพื่อความยืดหยุ่น
4. หลีกเลี่ยงใช้ local file path สำหรับ production

### 2. Path Naming Rules

ตั้งชื่อ path สำหรับ submodule

1. ใช้ชื่อที่สื่อความหมายและอธิบาย purpose ของ submodule
2. หลีกเลี่ยงชื่อที่ขึ้นต้นด้วยตัวเลขหรือ special characters
3. ใช้ lowercase และ hyphens หรือ underscores สำหรับ multi-word names
4. จัดเก็บ submodule ใน directory ที่เหมาะสมกับ structure ของ project

### 3. Commit Message Rules

เขียน commit message สำหรับการเพิ่ม submodule

1. ใช้ conventional commit format: `feat(submodules): add <submodule-name>`
2. อธิบายว่า submodule นี้ทำหน้าที่อะไร
3. ระบุ URL ของ submodule ใน body ถ้าจำเป็น
4. ระบุ version หรือ commit ที่ track อยู่ถ้าจำเป็น

### 4. .gitmodules Management Rules

จัดการไฟล์ .gitmodules อย่างถูกต้อง

1. ไม่แก้ไข .gitmodules ด้วยตนเองเว้นแต่จำเป็น
2. Commit .gitmodules พร้อมกับ submodule changes
3. ตรวจสอบว่า .gitmodules ถูก version control อย่างถูกต้อง
4. ตรวจสอบว่า URL ใน .gitmodules เป็น URL ที่ team สามารถ access ได้

### 5. Submodule State Rules

จัดการ state ของ submodule หลังเพิ่ม

1. Submodule จะถูก track เป็น specific commit ไม่ใช่ branch
2. ตรวจสอบว่า submodule อยู่ใน commit ที่ต้องการ
3. ใช้ `git submodule update --init` เพื่อ initialize submodule เมื่อ clone
4. ตรวจสอบว่า submodule folder ไม่ถูก ignore ใน .gitignore

