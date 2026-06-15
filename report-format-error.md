---
title: Report Format Error
description: จัดรูปแบบ error messages
auto_execution_mode: 3
---

## Goal

จัดรูปแบบ error messages ให้ชัดเจนและ debug ได้

## Scope

ใช้สำหรับการจัดรูปแบบ:
- Error reports
- Exception messages
- Validation errors
- Runtime errors

## Execute

### 1. Parse Errors

1. ระบุ error types และ categories
2. แยก error messages และ stack traces
3. แยก error codes และ metadata
4. แยก context และ causes

### 2. Format Errors

1. ใช้ red สำหรับ error indicators
2. ใช้ bold สำหรับ error messages
3. ใช้ code blocks สำหรับ stack traces
4. ใช้ sections สำหรับ grouping

### 3. Add Context

1. เพิ่ม timestamps สำหรับ reference
2. เพิ่ม locations สำหรับ debugging
3. เพิ่ม causes และ suggestions
4. เพิ่ม related errors ถ้าจำเป็น

### 4. Prioritize Errors

1. แสดง critical errors ก่อน
2. ใช้ severity indicators
3. ใช้ counts สำหรับ error summaries
4. ใช้ groupings สำหรับ related errors

## Rules

### Error Structure

โครงสร้าง error ที่ต้องใช้

- ใช้ clear error messages
- ใช้ consistent formatting
- ใช้ proper indentation สำหรับ stack traces
- ใช้ metadata ที่เป็นประโยชน์

### Context

บริบทที่ควรมี

- timestamps สำหรับ reference
- locations สำหรับ debugging
- causes และ suggestions
- related errors สำหรับ patterns

### Prioritization

การจัดลำดับความสำคัญ

- critical errors ก่อน
- ใช้ severity indicators
- ใช้ counts สำหรับ summaries
- ใช้ groupings สำหรับ patterns

## Expected Outcome

- Errors ที่ชัดเจนและ debug ได้
- Context ที่เพียงพอ
- Suggestions ที่เป็นประโยชน์
- Prioritization ที่ logical
