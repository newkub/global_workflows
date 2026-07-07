---
title: Follow Git Filter
description: rewrite git history ด้วย git filter-repo และ BFG เพื่อลบ secrets หรือ large files
auto_execution_mode: 3
related_workflows:
  - /follow-git-workflows
  - /follow-git-cleanup
  - /check-vulnerability
---

## Goal

Rewrite git history อย่างปลอดภัย เพื่อลบ secrets, large files หรือ sensitive data ออกจาก history

## Scope

ครอบคลุม git filter-repo และ BFG Repo-Cleaner สำหรับ history rewriting

## Execute

### 1. Prepare Rewrite

1. สำรอง repository ก่อน: `git clone --mirror <repo-url> backup.git`
2. แจ้ง team members ว่าจะ rewrite history
3. ระบุสิ่งที่ต้องลบ: secrets, large files, sensitive data
4. ตรวจสอบว่าไม่มี uncommitted changes

### 2. Use Git Filter-Repo

1. ติดตั้ง `git-filter-repo` (pip install git-filter-repo)
2. ลบไฟล์: `git filter-repo --invert-paths --path <file-to-remove>`
3. ลบ secret: `git filter-repo --replace-text <expressions-file>`
4. ลบ directory: `git filter-repo --invert-paths --path <directory>/`

### 3. Use BFG Repo-Cleaner

1. ดาวน์โหลด BFG จาก bfg repo-cleaner
2. ลบ large files: `bfg --strip-blobs-bigger-than 50M`
3. ลบ secrets: `bfg --replace-text <replacements-file>`
4. ลบ folder: `bfg --delete-folders <folder-name>`

### 4. Clean Up After Rewrite

1. รัน `git reflog expire --expire=now --all`
2. รัน `git gc --prune=now --aggressive`
3. รัน `git fsck --full` เพื่อตรวจสอบ integrity
4. ทำ `/follow-git-cleanup` เพื่อ cleanup repository

### 5. Force Push Rewritten History

1. รัน `git push --force-with-lease origin <branch>`
2. แจ้ง team members ให้ re-clone repository
3. อัปเดต remote tracking: `git push --force --tags`
4. ตรวจสอบว่า history ถูก rewrite ถูกต้อง

## Rules

### 1. Safety First

- สำรอง repository ก่อน rewrite เสมอ
- ทดสอบบน mirror clone ก่อนทำบน main repository
- แจ้ง team members ก่อน force push
- มี rollback plan: ใช้ backup ถ้ามีปัญหา

### 2. When To Rewrite

- ลบ secrets ที่ถูก commit โดยไม่ตั้งใจ
- ลบ large files ที่ทำให้ repository ใหญ่เกินไป
- ลบ sensitive data (credentials, API keys, passwords)
- ห้าม rewrite history เพื่อแค่ "ทำให้สะอาด" โดยไม่จำเป็น

### 3. Post-Rewrite

- แจ้ง team members ให้ re-clone ทุกครั้ง
- อัปเดต CI/CD ถ้าจำเป็น
- ตรวจสอบว่า secrets ที่ลบไม่สามารถเข้าถึงได้จาก history
- ทำ `/check-vulnerability` เพื่อยืนยันว่าไม่มี secrets เหลือ

### 4. Non-Redundancy

- รายละเอียด cleanup อยู่ใน `/follow-git-cleanup` แล้ว
- รายละเอียด vulnerability check อยู่ใน `/check-vulnerability` แล้ว

## Expected Outcome

- Secrets และ sensitive data ถูกลบออกจาก history
- Repository ขนาดเล็กลงหลังลบ large files
- Team members re-clone และทำงานต่อได้
- ไม่มี secrets ที่สามารถเข้าถึงได้จาก history
