---
title: Open Project Status
description: เปิด project status dashboard ด้วย Bun native APIs, Solid.js, และ UnoCSS
auto_execution_mode: 3
related_workflows:
  - /run-verify
  - /commit-all-and-push
---

## Goal

เปิด project status dashboard ที่ดึงข้อมูลจาก project จริงๆ และแสดงผลในรูปแบบ interactive tabs

## Scope

สร้างและเปิด project status dashboard ใน `packages/project-status` ที่มี:
- Tab system พร้อม README, Features, Status, Dependencies, Actions
- Data fetching จาก project จริงๆ (git, package.json, idea-features.md)
- Integration กับ `@[/run-verify]` และ `@[/commit-all-and-push]`
- Bun native APIs สำหรับ performance และ zero-install

## Execute

### 1. Navigate to Project Status Package

1. ไปยัง `packages/project-status`
2. ตรวจสอบว่า dependencies ติดตั้งครบถ้วน

### 2. Start Development Server

1. รัน `bun run dev` เพื่อเปิด server
2. Server จะทำงานที่ `http://localhost:3000`
3. เปิด browser ไปยัง URL นั้น

### 3. Verify Tabs Work

1. ตรวจสอบ README tab - แสดง README.md
2. ตรวจสอบ Features tab - แสดง features จาก idea-features.md
3. ตรวจสอบ Status tab - แสดง git status และ package info
4. ตรวจสอบ Dependencies tab - แสดง dependencies จาก package.json
5. ตรวจสอบ Actions tab - รัน verify, build, test

### 4. Test Actions Integration

1. ใน Actions tab, คลิก "Run Verify"
2. ตรวจสอบว่า output แสดงถูกต้อง
3. ทดสอบ actions อื่นๆ (Build, Test)

### 5. Verify Real-time Updates

1. แก้ไขไฟล์ใน project
2. Refresh Status tab
3. ตรวจสอบว่า git status อัปเดต

## Rules

### 1. Use Bun Native APIs

ใช้ Bun native APIs สำหรับทุก operations:
- `Bun.file()` - อ่านไฟล์
- `Bun.spawn()` - รัน commands
- `Bun.serve()` - HTTP server
- `Bun.watch()` - File watching (ถ้าต้องการ)

### 2. Parse Project Files

ดึงข้อมูลจาก project จริงๆ:
- `README.md` - จาก project root
- `idea-features.md` - จาก `apps/website/`
- `package.json` - จาก project root
- Git status - ผ่าน `git` commands

### 3. Tab System

Tabs ที่ต้องมี:
- **README** - แสดง README.md พร้อม markdown rendering
- **Features** - แสดง features พร้อม progress bar
- **Status** - แสดง git status, package info
- **Dependencies** - แสดง dependencies จาก package.json
- **Actions** - Quick actions (verify, build, test)

### 4. Integration with Workflows

เชื่อมต่อกับ workflows ที่มีอยู่:
- `@[/run-verify]` - ผ่าน API endpoint `/api/action/verify`
- `@[/commit-all-and-push]` - สามารถเพิ่มในอนาคต

### 5. Error Handling

จัดการ errors อย่างเหมาะสม:
- แสดง error messages ที่ชัดเจน
- ใช้ try-catch สำหรับ async operations
- แสดง fallback UI เมื่อ data โหลดไม่สำเร็จ

### 6. Performance

ใช้ Bun native APIs เพื่อ performance:
- ไม่ใช้ external dependencies ที่ไม่จำเป็น
- Cache data เมื่อเป็นไปได้
- ใช้ streaming สำหรับ large outputs

## Expected Outcome

- Project status dashboard เปิดที่ `http://localhost:3000`
- ทุก tabs ทำงานได้อย่างถูกต้อง
- Data ดึงจาก project จริงๆ
- Actions integration ทำงานได้
- UI มีความ Modern, Clean และ Responsive
- Dark mode รองรับ
