---
title: Review Code And Comment Todo
description: Review codebase และ comment TODO เพื่อระบุ issues โดยไม่ลงมือแก้ไข
auto_execution_mode: 3
related_workflows:
  - /review-codebase
---

## Goal

Review codebase และ comment TODO เพื่อระบุ issues ที่ต้องปรับปรุงโดยไม่ลงมือแก้ไข

## Scope

ครอบคลุมการ review codebase และ comment TODO: `code quality`, `architecture`, `performance`, `security`, `documentation`, `testing`, และ `developer experience` โดยไม่ลงมือแก้ไข

## Execute

### 1. Systematic Review

ทำ `/review-codebase` เพื่อ review ทุกด้านของโปรเจกต์อย่าง systematic

1. ทำ `/review-codebase` เพื่อ review architecture, code quality, security, performance
2. ดู table สรุปผลเป็น numbered columns, grouping, sorting
3. Comment TODO ใน code ตาม issues ที่ระบุจาก review
4. ระบุ priority ใน TODO comment (critical, high, medium, low)

### 2. Comment TODO Only

Comment TODO เพื่อระบุ issues โดยไม่ลงมือแก้ไข

1. Comment TODO พร้อม description ชัดเจน
2. ระบุ priority และ category ใน TODO comment
3. ระบุ file และ line number ที่เกี่ยวข้อง
4. ไม่ลงมือแก้ไข code ใดๆ

## Rules

### 1. Comment TODO Only

ห้ามลงมือแก้ไข code ใดๆ

- Comment TODO เท่านั้น ไม่แก้ไข code
- ไม่สร้าง `pages`, `components`, `functions` ใหม่
- ไม่เพิ่ม `dependencies` ที่ไม่จำเป็น
- ไม่รัน `lint`, `typecheck`, `test`, `build`
- ไม่ commit ใดๆ

### 2. Use Review Codebase

ต้องใช้ `/review-codebase` เพื่อ systematic review

- ทำ `/review-codebase` เพื่อระบุ issues
- ดู table สรุปผลเป็น numbered columns, grouping, sorting
- Comment TODO ตาม issues ที่ระบุจาก review
- ระบุ priority และ category ใน TODO comment

### 3. TODO Comment Format

ใช้ format มาตรฐานสำหรับ TODO comments

- `// TODO [priority] [category]: description`
- Priority: `critical`, `high`, `medium`, `low`
- Category: `security`, `performance`, `quality`, `style`, `docs`
- Description: อธิบายสิ่งที่ต้องแก้ไขอย่างชัดเจน

### 4. No Execution

ห้าม execute ใดๆ ทั้งสิ้น

- ไม่รัน commands ใดๆ
- ไม่แก้ไข files ใดๆ
- ไม่ install dependencies
- ไม่ commit changes
- Comment TODO เท่านั้น

## Expected Outcome

- Issues ทั้งหมดถูกระบุจาก `/review-codebase`
- Table สรุปผลการ review พร้อม action items
- TODO comments ถูกเพิ่มใน code ตาม issues
- Priority และ category ถูกระบุใน TODO comments
- Code ไม่ถูกแก้ไขใดๆ
- ไม่มี features ใหม่
- ไม่มี commits ใดๆ
- พร้อมสำหรับ user ตัดสินใจแก้ไขต่อ

## Common Mistakes

ข้อผิดพลาดที่พบบ่อย:

- ลงมือแก้ไข code โดยไม่ได้รับอนุญาต
- ไม่ระบุ priority ใน TODO comment
- ไม่ระบุ category ใน TODO comment
- Comment TODO โดยไม่อธิบายชัดเจน
- รัน commands โดยไม่จำเป็น

## Anti-Patterns

รูปแบบที่ไม่ควรทำ:

- ❌ แก้ไข code โดยไม่ได้รับอนุญาต
- ❌ รัน `lint`, `typecheck`, `test`, `build`
- ❌ Commit changes โดยไม่ได้รับอนุญาต
- ❌ Comment TODO โดยไม่ใช้ `/review-codebase`
- ❌ ไม่ระบุ priority และ category ใน TODO
