---
title: Follow Suggestions
description: ทำตามคำแนะนำจาก AI, linters, และ tools อย่างเป็นระบบ
auto_execution_mode: 3
related_workflows:
  - /follow-typescript
  - /follow-biome
  - /follow-eslint
---

## Goal

ทำตามคำแนะนำจาก AI, linters, และ tools อย่างเป็นระบบและมีประสิทธิภาพ

## Scope

ใช้สำหรับการ apply suggestions จาก AI assistants, linters, formatters, และ development tools

## Execute

### 1. Review Suggestions

ตรวจสอบและจัดลำดับความสำคัญของ suggestions

1. รวบรวม suggestions จากทุก sources (AI, linters, tools)
2. จัดกลุ่มตามประเภท (code quality, performance, security, best practices)
3. จัดลำดับความสำคัญตาม impact และ effort
4. ตรวจสอบว่า suggestions มีความจำเป็นและ relevance

### 2. Apply Critical Fixes

แก้ไข issues ที่มีผลกระทบสูงก่อน

1. แก้ไข security vulnerabilities และ critical errors
2. แก้ไข type errors และ compilation errors
3. แก้ไข performance bottlenecks ที่ชัดเจน
4. แก้ไข breaking changes ที่จำเป็น

### 3. Apply Quality Improvements

ปรับปรุง code quality ตาม best practices

1. ทำ `/follow-typescript` สำหรับ type safety
2. ทำ `/follow-biome` หรือ `/follow-eslint` สำหรับ linting
3. แก้ไข code smells และ anti-patterns
4. ปรับปรุง naming conventions ด้วย `/follow-naming`

### 4. Verify Changes

ตรวจสอบผลลัพธ์หลัง apply suggestions

1. รัน `typecheck` เพื่อตรวจสอบ type safety
2. รัน `lint` เพื่อตรวจสอบ code quality
3. รัน `test` เพื่อตรวจสอบ functionality
4. ตรวจสอบว่าไม่มี regressions

## Rules

### 1. Suggestion Prioritization

จัดลำดับความสำคัญของ suggestions อย่างเป็นระบบ

- Security vulnerabilities และ critical errors มีความสำคัญสูงสุด
- Type errors และ compilation errors ต้องแก้ไขก่อน
- Performance issues ที่มีผลกระทบสูง มีความสำคัญรองลงมา
- Code quality improvements ทำหลังจาก critical issues
- ใช้ impact vs effort matrix สำหรับการจัดลำดับ

### 2. Apply Strategy

ใช้กลยุทธ์ที่เหมาะสมสำหรับการ apply suggestions

- Apply suggestions ที่มีผลกระทบสูงและ effort ต่ำก่อน
- Group related suggestions และ apply พร้อมกัน
- ทำ `/resolve-errors` หากได้รับ errors เท่านั้น
- ทำ `/dont-over-engineer` เพื่อหลีกเลี่ยง over-engineering
- ใช้ minimal changes ที่เป็นไปได้

### 3. Verification Process

ตรวจสอบผลลัพธ์อย่างเป็นระบบหลัง apply suggestions

- รัน `typecheck` ก่อนเสมอเพื่อตรวจสอบ type safety
- รัน `lint` เพื่อตรวจสอบว่าผ่าน linting rules
- รัน `test` เพื่อตรวจสอบว่าไม่มี regressions
- ตรวจสอบ manually สำหรับ changes ที่สำคัญ
- ใช้ `/run-verify` สำหรับ verification อัตโนมัติ

### 4. Source-Specific Guidelines

ทำตาม guidelines เฉพาะของแต่ละ source

- AI suggestions: ตรวจสอบ context และ relevance ก่อน apply
- Linter suggestions: ตรวจสอบว่าไม่ใช้ ignore patterns
- Formatter suggestions: ตรวจสอบ consistency ทั้ง codebase
- Tool suggestions: ตรวจสอบ compatibility กับ project setup
- ทำ `/follow-config` สำหรับ configuration-related suggestions

## Expected Outcome

- Suggestions ถูกจัดลำดับและ apply อย่างเป็นระบบ
- Code quality และ type safety ดีขึ้น
- ไม่มี regressions หลัง apply suggestions
- ผ่าน typecheck, lint, และ test

## Common Mistakes (optional)

ข้อผิดพลาดที่พบบ่อย:

- Apply suggestions โดยไม่ตรวจสอบ relevance หรือ context
- Apply suggestions ทั้งหมดโดยไม่จัดลำดับความสำคัญ
- ไม่ verify หลัง apply suggestions
- Over-engineering เมื่อ apply suggestions
- ใช้ ignore patterns แทนการแก้ไขจริง
