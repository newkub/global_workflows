---
title: Run Watch
description: รัน watch mode และแก้ไข errors อัตโนมัติ
auto_execution_mode: 3
---


## Goal

รัน watch mode และแก้ไข errors ที่เกิดขึ้นอัตโนมัติ

## Scope

ตรวจสอบและแก้ไข errors ขณะรัน watch mode

## Execute

### 1. Run Watch

1. run watch ใน main config ถ้าไม่มีกำหนดให้ด้วย

### 2. Resolve Errors

1. ทำ `/resolve-errors` เพื่อแก้ไขข้อผิดพลาด

## Rules

### 1. Watch Configuration

- ต้องมี watch script ใน package manifest หรือ main config
- watch script ควร monitor files ที่เกี่ยวข้อง

### 2. Error Handling

- ใช้ /resolve-errors เมื่อพบ error

## Expected Outcome

- Watch mode ทำงานได้อย่างต่อเนื่อง
- Errors ถูกแก้ไขอัตโนมัติ
- Code อัพเดทและไม่มี errors เหลือ
