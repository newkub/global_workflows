---
title: Report Format Terminal
description: จัดรูปแบบ terminal output ด้วย ANSI codes สำหรับ CLI และ dev server output
auto_execution_mode: 3
---

## Goal

จัดรูปแบบ terminal output ด้วย ANSI codes ให้สวยงามและอ่านง่าย

## Scope

ใช้สำหรับการจัดรูปแบบ output จาก:
- CLI applications
- Development server logs
- Build output
- Test results

## Execute

### 1. Detect Terminal Capabilities

1. ตรวจสอบ terminal support สำหรับ ANSI codes และ colors
2. ตรวจสอบ terminal width สำหรับ layout planning
3. กำหนด fallback strategy สำหรับ terminal ที่ไม่รองรับ

### 2. Apply Color Scheme

1. ใช้สีตามประเภท output: Success (green), Error (red), Warning (yellow), Info (blue)
2. ใช้ text styles: bold สำหรับ headers, dim สำหรับ metadata, underline สำหรับ links
3. ตรวจสอบ contrast สำหรับ dark/light terminal themes

### 3. Format Layout Structure

1. ใช้ box drawing characters (`┌─┐`, `│ │`, `└─┘`) สำหรับ borders
2. ใช้ separators สำหรับแยก sections
3. จัด padding และ alignment ให้สมมาตร
4. ใช้ indentation สำหรับ nested content

### 4. Format Content Elements

1. จัด format status indicators พร้อม symbols (✅, ❌, ⚠️, ℹ️, 🔄)
2. จัด format commands ด้วย syntax highlighting (cyan, green, yellow)
3. จัด format tables ด้วย grid layout และ alignment
4. จัด format progress bars ด้วย visual indicators

### 5. Handle Overflow Content

1. ใช้ ellipsis สำหรับ content ที่ยาวเกิน width
2. ใช้ text wrapping สำหรับ long lines
3. ใช้ pagination สำหรับ output ที่ยาวมาก
4. ใช้ scroll indicators ถ้าจำเป็น

## Rules

### Accessibility

ความสามารถในการอ่านบน terminal ทุกประเภท

- ตรวจสอบ terminal capabilities ก่อนใช้ ANSI codes
- ใช้ fallback สำหรับ terminal ที่ไม่รองรับ
- ใช้ high contrast สำหรับ text สำคัญ
- หลีกเลี่ยงสีที่อ่านยากบนพื้นหลังบางสี

### Consistency

ความสม่ำเสมอของ formatting

- ใช้ color scheme เดียวกันทั้ง output
- ใช้ consistent spacing และ alignment
- ใช้ headers และ separators แบบเดียวกัน
- ใช้ symbols และ styles แบบเดียวกัน

## Expected Outcome

- Terminal output ที่สวยงามและอ่านง่าย
- ใช้ ANSI codes อย่างเหมาะสม
- Fallback สำหรับ terminal ที่ไม่รองรับ
- Structure ที่ชัดเจนและ consistent
