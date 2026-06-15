---
title: Report Format Diff
description: แสดง code diffs และ changes
auto_execution_mode: 3
---

## Goal

แสดง code diffs และ changes ให้ชัดเจนและอ่านง่าย

## Scope

ใช้สำหรับการแสดง:
- Git diffs
- PR reviews
- Code migrations
- File changes

## Execute

### 1. Generate Diff

1. รวบรวม changes จาก source และ target
2. สร้าง unified diff format
3. จัดกลุ่ม changes ตาม files
4. จัดเรียง files ตามความสำคัญ

### 2. Format Diff

1. ใช้ standard diff format (+, -, context)
2. ใช้ colors สำหรับ additions (green) และ deletions (red)
3. ใช้ line numbers สำหรับ reference
4. ใช้ context lines สำหรับ readability

### 3. Add Metadata

1. เพิ่ม file paths ชัดเจน
2. เพิ่ม change statistics (additions, deletions)
3. เพิ่ม commit hash หรือ reference
4. เพิ่ม author และ timestamp

### 4. Highlight Changes

1. ใช้ bold สำหรับ changed lines
2. ใช้ markers สำหรับ function/class changes
3. ใช้ annotations สำหรับ important changes
4. ใช้ summary สำหรับ file-level changes

## Rules

### Diff Format

รูปแบบ diff ที่ต้องใช้

- ใช้ standard unified diff format
- ใช้ consistent colors สำหรับ additions/deletions
- ใช้ line numbers สำหรับ reference
- ใช้ sufficient context สำหรับ readability

### Statistics

สถิติที่ควรมี

- additions และ deletions per file
- total changes summary
- files changed count
- change type indicators (added, modified, deleted)

### Metadata

ข้อมูลเพิ่มเติมที่ควรมี

- file paths ชัดเจน
- commit hash หรือ reference
- author และ timestamp
- change reason หรือ description

## Expected Outcome

- Diffs ที่ชัดเจนและอ่านง่าย
- Standard diff format ที่ consistent
- Statistics ที่ครบถ้วน
- Important changes ที่ถูก highlight
