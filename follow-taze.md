---
title: Setup Taze
description: Setup Taze for automated dependency management in monorepos
auto_execution_mode: 3
---

## Goal

ตั้งค่า Taze สำหรับจัดการ dependencies อัตโนมัติใน monorepos

## Execute

### 1. Install Taze

1. รัน `bun add -d taze` เพื่อติดตั้ง dependency

### 2. Configure Package.json

1. เพิ่ม `prepare` script ใน `package.json`
2. ใช้ `taze -r -w -i --force` สำหรับ recursive, write, install

## Rules

### 1. Prepare Script

- ใช้ `taze -r -w -i --force` สำหรับ recursive, write, install
- รันอัตโนมัติก่อน git operations
- เหมาะสำหรับ monorepos

```json [package.json]
{
  "scripts": {
    "prepare": "taze -r -w -i --force"
  }
}
```

## Expected Outcome

- Dependencies ถูกจัดการอัตโนมัติ
- Monorepo รองรับการอัพเดท dependencies
