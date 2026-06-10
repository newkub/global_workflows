---
title: Update Git Submodules in Drive D
description: ค้นหาและอัพเดท git submodules ทั้งหมดที่อยู่ใน drive D ด้วยการ update remote และ recursive
auto_execution_mode: 3
---

## Goal

อัพเดท git submodules ทั้งหมดใน drive D ไปยัง latest remote version อย่างปลอดภัย

## Execute

### 1. Scan Drive D for Git Submodules

ค้นหา repositories ทั้งหมดใน drive D ที่มี git submodules

1. ใช้ `find` หรือ `fd` เพื่อค้นหา `.gitmodules` files
2. กรองเฉพาะ paths ที่อยู่ใน drive D
3. ตรวจสอบว่าแต่ละ repository มี submodules ที่ active จริงๆ
4. สร้าง list ของ repositories ที่ต้องการ update

### 2. Validate Submodule Status

ตรวจสอบสถานะปัจจุบันของ submodules แต่ละอัน

1. รัน `git submodule status` เพื่อดู current commit
2. ตรวจสอบว่า submodules ไม่มี uncommitted changes
3. ตรวจสอบว่า submodules ไม่อยู่ใน detached HEAD state ที่มี local changes
4. บันทึกสถานะก่อน update เพื่อ rollback ถ้าจำเป็น

### 3. Update Submodules Remote

อัพเดท submodules ไปยัง latest remote version

1. รัน `git submodule update --remote --recursive` เพื่อ fetch latest changes
2. ตรวจสอบว่าแต่ละ submodule update สำเร็จโดยไม่มี conflicts
3. ถ้ามี conflicts ให้รายงานและ skip ไปยังอันถัดไป

### 4. Verify Updates

ตรวจสอบว่า submodules ถูก update ถูกต้อง

1. รัน `git submodule status` อีกครั้งเพื่อยืนยัน new commits
2. ตรวจสอบว่า submodules สามารถ initialize และ update ได้
3. ทดสอบ build หรือ run tests ถ้ามี
4. รายงานผลลัพธ์ของการ update แต่ละ repository

### 5. Commit Changes (Optional)

ถ้าต้องการ commit การเปลี่ยนแปลงของ submodule references

1. ใช้ `git add <submodule-path>` เพื่อ stage changes
2. สร้าง commit message ที่อธิบายการ update
3. รัน `git commit` เพื่อบันทึกการเปลี่ยนแปลง
4. Push changes ไปยัง remote ถ้าจำเป็น

## Rules

- Drive D Scope Only: ทำงานเฉพาะ repositories ที่อยู่ใน drive D เท่านั้น
- กรอง paths ที่ขึ้นต้นด้วย `D:` หรือ `/mnt/d` (WSL)
- ไม่แตะ repositories ใน drives อื่นโดยไม่ได้รับอนุญาต
- ตรวจสอบ drive letter ก่อน execute ทุกครั้ง
- Safety First: ป้องกันการสูญหายของข้อมูลใน submodules
- ตรวจสอบ uncommitted changes ก่อน update เสมอ
- ถ้าพบ local changes ให้ข้ามและรายงาน
- ไม่ใช้ `--force` flag โดยไม่จำเป็น
- สร้าง backup หรือ stash changes ถ้าจำเป็น
- Recursive Updates: จัดการ nested submodules อย่างถูกต้อง
- ใช้ `--recursive` flag เสมอสำหรับ complex submodule trees
- ตรวจสอบ nested submodules แต่ละ level
- รายงานปัญหาเฉพาะ nested submodules ให้ชัดเจน
- Batch Processing: ประมวลผลหลาย repositories อย่างมีประสิทธิภาพ
- ใช้ loops เพื่อ process แต่ละ repository
- แสดง progress ขณะทำงาน
- รายงานสรุปผลลัพธ์ทั้งหมดหลังจบ
- ไม่ stop ทั้ง batch เพราะ repository เดียวล้มเหลว

## Expected Outcome

- git submodules ทั้งหมดใน drive D ถูกอัพเดทไปยัง latest remote version
- ไม่มีข้อมูลสูญหายหรือเสียหายระหว่างการอัพเดท
- รายงานผลลัพธ์ของการอัพเดทแต่ละ repository
