---
title: Development Guidelines
description: แนวทางการพัฒนาโปรเจกต์เพื่อรักษาคุณภาพโค้ดและความสม่ำเสมอ
auto_execution_mode: 3
---

## Goal

กำหนดแนวทางการพัฒนาโปรเจกต์เพื่อป้องกันปัญหาที่เกิดซ้ำ รักษามาตรฐานคุณภาพ และสร้างความสม่ำเสมอในการทำงาน

## Scope

ครอบคลุมแนวทางการใช้เครื่องมือ การจัดการไฟล์ การใช้ git หลักการพื้นฐานที่ใช้ได้กับทุกภาษา การเขียน test การ review code การจัดการ error และแนวทางคุณภาพโค้ด

## Execute

### 1. Tool-Specific Guidelines

แนวทางการใช้เครื่องมือเฉพาะทาง

1. ใช้ `bun` แทน `npm` หรือ `npx` เสมอ
2. ใช้ `cwd` parameter แทน `cd` ใน commands
3. หลีกเลี่ยง `any` ใน TypeScript โดยไม่จำเป็นและไม่มีคำอธิบาย
4. ใช้ const หรือ let แทน var เสมอ
5. ใช้ === แทน == เสมอ

### 2. File Operations

แนวทางการจัดการไฟล์

1. ตรวจสอบว่ามีไฟล์อยู่แล้วหรือไม่ก่อนสร้างใหม่
2. สำรองและตรวจสอบ references ทั้งหมดก่อนลบไฟล์
3. Update references ทั้งหมดเมื่อย้ายไฟล์
4. Read ไฟล์ก่อนแก้ไขทุกครั้ง
5. ถามผู้ใช้ก่อนสร้างไฟล์ที่ไม่จำเป็น

### 3. Git Operations

แนวทางการใช้ git

1. ตรวจสอบ git status ก่อน commit
2. Commit เฉพาะไฟล์ที่เกี่ยวข้องกับงานที่ทำ (หลีกเลี่ยง node_modules, .env)
3. ใช้ commit message ที่ชัดเจนและ follow conventional commits
4. แจ้งทีมก่อน force push

### 4. Universal Principles

หลักการพื้นฐานที่อิสระจาก Paradigm และใช้ได้กับทุกภาษา:

1. KISS - เลือกวิธีเรียบง่ายที่สุด อย่าสร้าง Abstraction เกินความจำเป็น
2. DRY - Logic ต้องมีแหล่งที่มาเพียงแหล่งเดียว แต่อย่า Over-DRY
3. YAGNI - อย่าเขียนโค้ดเผื่ออนาคต เขียนเฉพาะที่ต้องการปัจจุบัน
4. High Cohesion - สิ่งที่ทำงานเดียวกันควรอยู่ด้วยกัน
5. Low Coupling - ชิ้นส่วนคุยกันผ่านช่องทางแคบและชัดเจน
6. Separation of Concerns - แยกหน้าที่ตามมิติความกังวล (UI, Core, Data)

### 5. Testing Guidelines

แนวทางการเขียน test

1. Test behavior แทน implementation details
2. ใช้ mocks สำหรับ external dependencies (API, database)
3. Test edge cases และ error cases
4. หลีกเลี่ยง flaky tests ที่ fail แบบสุ่ม
5. Document เหตุผลเมื่อ skip tests
6. หลีกเลี่ยง tests ที่ duplicate logic ของ production code

### 6. Code Review Guidelines

แนวทางการ review code

1. Review logic ก่อน style
2. ตรวจ edge cases และ error handling
3. ตรวจ security vulnerabilities
4. ตรวจ performance bottlenecks
5. ตรวจความสอดคล้องกับ architecture
6. ให้ feedback ที่ construct และ actionable

### 7. Error Handling Guidelines

แนวทางการจัดการ error

1. ใช้ specific error types แทน generic exceptions
2. Log errors อย่างเหมาะสม หลีกเลี่ยง silent errors
3. ใช้ error types หรือ enums แทน error codes
4. Document เหตุผลเมื่อใช้ suppressions
5. Handle errors ที่ boundary layers
6. Propagate errors อย่างเหมาะสม

## Rules

### 1. Code Quality

รักษาคุณภาพโค้ด:

- แยก functions ที่ยาวเกิน 50 บรรทัด
- Functions ทำอย่างเดียวและทำดี
- ใช้ early return ลด deep nesting
- หลีกเลี่ยง circular dependencies
- Extract shared functions เมื่อ copy-paste เกิน 2 ครั้ง

### 2. Architecture

ออกแบบสถาปัตยกรรมให้ดี:

- แยก layers และ responsibilities
- ใช้ interfaces ลด coupling
- ใช้ composition เมื่อเหมาะสม
- Depend บน abstractions แทน concrete classes

### 3. Naming Conventions

ตั้งชื่อให้ชัดเจนและสื่อความหมาย:

- ใช้ชื่อที่บอก intent แทน implementation
- ใช้ full words แทน abbreviations ที่ไม่ชัดเจน
- ใช้ is/has/can/should prefix สำหรับ boolean
- หลีกเลี่ยง misleading names
- หลีกเลี่ยงชื่อที่มีช่องว่างหรืออักขระพิเศษ

### 4. Code Duplication

หลีกเลี่ยงการซ้ำซ้อน:

- Extract shared functions เมื่อ copy-paste เกิน 2 ครั้ง
- ใช้ constants สำหรับ hardcoded values ที่ซ้ำกัน
- ใช้ validation libraries แทน duplicate validation logic
- Refactor เป็น reusable components เมื่อมี similar logic

### 5. Comments and Documentation

ใช้ comments อย่างเหมาะสม:

- เขียน self-explanatory code หลีกเลี่ยง comments ที่อธิบายสิ่งที่โค้ดทำอยู่แล้ว
- Comments อธิบาย why ไม่ใช่ what
- อัปเดท comments ให้ตรงกับ code ปัจจุบัน
- ใช้ context กับ placeholder comments เช่น TODO, FIXME
- Comments ควรกระชับกว่า code ที่อธิบาย

### 6. Performance

เพิ่มประสิทธิภาพโค้ด:

- Batch หรือ optimize I/O operations ใน loops
- หลีกเลี่ยง allocate memory ใน loops โดยไม่จำเป็น
- ใช้ algorithms ที่มีประสิทธิภาพสูงกว่า
- Cleanup resources เพื่อหลีกเลี่ยย memory leaks
- Lazy load resources เมื่อเป็นไปได้

### 7. Security

รักษาความปลอดภัย:

- หลีกเลี่ยย hardcode secrets, API keys, passwords
- ใช้ .gitignore สำหรับ sensitive files
- Sanitize หรือ validate user input ก่อน execute
- หลีกเลี่ยย expose internal details ใน error messages
- ใช้ encryption และ algorithms ที่ทันสมัย

## Expected Outcome

- โค้ดมีคุณภาพสูงและสม่ำเสมอ
- ไม่มีปัญหาที่เกิดซ้ำ
- ทีมทำงานร่วมกันได้อย่าง smooth
- ลด technical debt ในระยะยาว
- รักษาความปลอดภัยของโปรเจกต์
