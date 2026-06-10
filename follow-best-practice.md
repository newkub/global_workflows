---
title: Best Practice
description: เขียนโค้ดตาม best practices ของ language, runtime, และ library
auto_execution_mode: 3
related_workflows:
  - /follow-learn-best-practices
  - /deep-research
---

## Goal

เขียนโค้ดตาม best practices ของ language, runtime, และ library ที่ใช้งาน

## Scope

ใช้สำหรับทุก workspace เพื่อให้โค้ดมีคุณภาพสูงและเป็นไปตามมาตรฐาน

## Execute

### 1. Analyze Dependencies

1. อ่าน `package.json`, `Cargo.toml`, หรือ package manifest ที่เกี่ยวข้อง
2. ระบุ language, runtime, และ libraries ที่ใช้
3. ตรวจสอบ version ของ dependencies ทั้งหมด
4. สรุป tech stack ที่ใช้ใน project

### 2. Research Best Practices

1. ทำ `/deep-research` เพื่อค้นหา best practices
2. อ่าน official documentation ของ language และ libraries
3. ค้นหา best practices จาก trusted sources
4. ตรวจสอบว่ามีการอัพเดทล่าสุดหรือไม่

### 3. Apply Best Practices

1. ทำ `/follow-learn-best-practices` เพื่อเรียนรู้จาก official docs
2. ปรับปรุงโค้ดตาม best practices ที่ค้นพบ
3. ตรวจสอบความสอดคล้องกับ codebase ที่มีอยู่
4. อัพเดท configuration และ settings ที่เกี่ยวข้อง

### 4. Verify Implementation

1. รัน linter และ typecheck เพื่อตรวจสอบ
2. รัน tests เพื่อยืนยันว่าไม่มี regression
3. ตรวจสอบว่า best practices ถูกนำไปใช้ครบถ้วน
4. อัพเดท documentation หากจำเป็น

## Rules

### 1. Dependency Analysis

ตรวจสอบ dependencies ใน project อย่างละเอียด

- อ่าน `package.json`, `Cargo.toml`, `go.mod`, `requirements.txt`
- ระบุ language เช่น `TypeScript`, `Rust`, `Go`, `Python`
- ระบุ runtime เช่น `Node.js`, `Bun`, `Deno`
- ระบุ libraries เช่น `React`, `Vue`, `Axios`, `Prisma`
- ตรวจสอบ version compatibility

### 2. Research Sources

ใช้ sources ที่เชื่อถือได้สำหรับ best practices

- Official documentation เป็น primary source
- Community guidelines และ style guides
- Well-known blogs และ articles
- GitHub repositories ที่มีคนใช้เยอะ
- Stack Overflow สำหรับ common issues

### 3. Language-Specific Conventions

ทำตาม conventions ของแต่ละ language

- TypeScript: ทำตาม TypeScript best practices
- Rust: ทำตาม Rust guidelines
- Go: ทำตาม Go conventions
- Python: ทำตาม PEP 8 และ best practices
- ใช้ linter ที่เหมาะสมกับแต่ละ language

### 4. Library-Specific Patterns

ใช้ patterns ที่เหมาะสมกับแต่ละ library

- React: ใช้ hooks patterns และ component patterns
- Vue: ใช้ composition API และ best practices
- Prisma: ใช้ schema best practices และ queries
- อ่าน documentation ของแต่ละ library อย่างละเอียด
- ตรวจสอบ examples จาก official sources

### 5. Runtime Considerations

พิจารณา characteristics ของ runtime ที่ใช้

- Node.js: ใช้ async patterns และ event loop best practices
- Bun: ใช้ Bun-specific APIs และ native features
- Deno: ทำตาม Deno security แล module patterns
- Browser: พิจารณา performance และ compatibility
- Server: พิจารณา security และ scalability

### 6. Consistency Maintenance

รักษาความสม่ำเสมอทั่วทั้ง codebase

- ใช้ naming conventions ที่สม่ำเสมอ
- ใช้ code style ที่สม่ำเสมอ
- ใช้ patterns ที่สม่ำเสมอ
- ตั้งค่า linter และ formatter อัตโนมัติ
- ทำ code review เพื่อตรวจสอบ

## Expected Outcome

- Code ที่เขียนตาม best practices ของ language, runtime, และ library
- Code quality สูงและ maintainable
- Consistency ทั่วทั้ง codebase
- Documentation ที่อัพเดทแล้ว
- Tests ที่ผ่านทั้งหมด
