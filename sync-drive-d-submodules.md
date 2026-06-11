---
title: Sync Drive D Submodules
description: Sync git submodules ใน D drive กับ remote repositories
auto_execution_mode: 3
---

## Goal

Sync git submodules ใน D drive กับ remote repositories อัตโนมัติ

## Scope

ใช้สำหรับ sync git submodules ใน multiple repositories ใน D drive

## Execute

### 1. List Submodules

ดู git submodules ใน repository

1. รัน `git submodule status` สำหรับดู submodules
2. รัน `git submodule foreach --quiet pwd` สำหรับ list paths
3. ตรวจสอบ `.gitmodules` file
4. ดู commit hashes ปัจจุบัน

### 2. Find Matching Submodules

หา submodules ที่เหมือนกันใน multiple repos ใน D drive

1. ดู submodules ใน current repo
2. ค้นหา repos ใน D:\ ที่มี submodules เหมือนกัน
3. เปรียบเทียบ submodule URLs
4. ระบุ submodules ที่ต้อง sync

### 3. Update Submodules

Update submodules ไปยัง latest commits

1. รัน `git submodule update --remote --recursive`
2. รัน `git submodule update --init --recursive` สำหรับ init
3. รัน `git submodule foreach git pull origin main` สำหรับ manual sync
4. ตรวจสอบ updated commits

### 4. Commit Changes

Commit submodule updates

1. ดู changes ด้วย `git status`
2. Add submodule changes
3. Commit ด้วย message ที่เหมาะสม
4. Push ไปยัง remote

## Rules

### 1. Submodule Discovery

ค้นหา submodules อย่างเป็นระบบ

- ใช้ `git submodule status` สำหรับ overview
- อ่าน `.gitmodules` file สำหรับ config
- ตรวจสอบ submodule URLs และ paths
- ดู commit hashes ปัจจุบัน

### 2. Sync Strategy

เลือก sync strategy ที่เหมาะสม

- ใช้ `--remote` สำหรับ sync กับ remote branches
- ใช้ `--recursive` สำหรับ nested submodules
- ใช้ `--init` สำหรับ init submodules ใหม่
- ใช้ `foreach` สำหรับ custom commands

### 3. Multiple Repos

จัดการ submodules ใน multiple repos ใน D drive

- ค้นหา repos ใน D:\ ที่มี submodules เหมือนกัน
- Sync submodules ในทุก repos ที่ match
- ใช้ scripts สำหรับ automation
- ใช้ relative paths สำหรับ portability

### 4. Error Handling

จัดการ submodule errors อย่างเหมาะสม

- จัดการ detached HEAD states
- จัดการ merge conflicts ใน submodules
- จัดการ network errors
- ใช้ retries สำหรับ failed updates

## Expected Outcome

- Submodules synced กับ remote
- All matching repos updated
- Submodule commits ถูกต้อง
- Changes committed และ pushed
