---
title: Ensure Compatibility With
description: ทำให้ a เข้ากับ b สำหรับ versions, APIs, formats, และ structures
auto_execution_mode: 3
related_workflows:
  - /improve-compatibility
  - /check-unused-deps
---

## Goal

ทำให้ a เข้ากับ b โดยตรวจสอบและปรับ compatibility ระหว่าง versions, APIs, formats, และ structures

## Scope

ครอบคลุมการทำให้ a เข้ากับ b สำหรับ:
- Version compatibility (dependencies, runtimes)
- API compatibility (signatures, types, behavior)
- Format compatibility (file formats, data structures)
- Structure compatibility (schemas, interfaces)

## Execute

### 1. Identify A And B

ระบุ a และ b ที่ต้องการทำให้เข้ากัน

1. ระบุ source (a) - file, version, API, format
2. ระบุ target (b) - file, version, API, format
3. กำหนด compatibility requirements
4. กำหนด constraints และ limitations
5. ทำ `/check-reference` เพื่อตรวจสอบ requirements

### 2. Analyze Compatibility Issues

วิเคราะห์ปัญหา compatibility ระหว่าง a และ b

1. ตรวจสอบ version differences
2. ตรวจสอบ API signature differences
3. ตรวจสอบ format differences
4. ตรวจสอบ structure differences
5. ทำ `/search-code` เพื่อหา usage patterns

### 3. Apply Compatibility Fixes

ปรับ a ให้เข้ากับ b

1. ปรับ version ranges ใน manifests
2. ปรับ API calls ให้ compatible
3. ปรับ format ให้เข้ากัน
4. ปรับ structures ให้ match
5. เพิ่ม adapters หรือ wrappers ถ้าจำเป็น

### 4. Validate Compatibility

ตรวจสอบว่า a เข้ากับ b แล้ว

1. รัน tests ที่เกี่ยวข้อง
2. ตรวจสอบ type definitions
3. ตรวจสอบ runtime behavior
4. ตรวจสอบ edge cases
5. ทำ `/run-test` สำหรับ validation

### 5. Document Changes

บันทึกการเปลี่ยนแปลงที่ทำ

1. บันทึก breaking changes ที่แก้ไข
2. บันทึก migration steps
3. บันทึก compatibility notes
4. อัปเดต documentation
5. อัปเดต changelog

## Rules

### 1. Minimal Changes

ทำการเปลี่ยนแปลงน้อยที่สุด

- เปลี่ยนเฉพาะสิ่งที่จำเป็นต้องเปลี่ยน
- ใช้ adapters หรือ wrappers แทนการแก้ core logic
- รักษา backward compatibility ถ้าเป็นไปได้
- ทำ incremental changes
- ทดสอบทุกการเปลี่ยนแปลง

### 2. Validation First

ตรวจสอบก่อนทำการเปลี่ยนแปลง

- ทำ `/analyze-project` ก่อนเริ่ม
- ทำ `/run-test` หลังจากแก้ไข
- ตรวจสอบ type definitions
- ตรวจสอบ runtime behavior
- ทดสอบ edge cases

### 3. Documentation

บันทึกการเปลี่ยนแปลงอย่างชัดเจน

- บันทึก breaking changes
- บันทึก migration steps
- อัปเดต documentation
- อัปเดต changelog
- บันทึก compatibility notes

### 4. Rollback Plan

มี plan สำหรับ rollback

- ทำ backup ก่อนเปลี่ยนแปลง
- บันทึก original state
- มี steps สำหรับ rollback
- ทดสอบ rollback process
- มี communication plan

### 5. Testing Strategy

ทดสอบอย่างครอบคลุม

- ทดสอบ unit tests
- ทดสอบ integration tests
- ทดสอบ backward compatibility
- ทดสอบ forward compatibility
- ทดสอบ edge cases

## Expected Outcome

- a เข้ากับ b แล้ว
- Breaking changes ถูกแก้ไข
- Tests ผ่านทั้งหมด
- Documentation อัปเดตแล้ว
- Rollback plan พร้อม
