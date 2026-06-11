---
title: Best Practice
description: เขียนโค้ดตาม best practices ของ language, runtime, และ library
auto_execution_mode: 3
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

1. ระบุ library, framework หรือ tool ที่ต้องการเรียนรู้ best practices
2. หา official website และ documentation
3. ใช้ `/learn-from-web` สำหรับ libraries และ frameworks
4. ใช้ DeepWiki สำหรับ GitHub repositories
5. ใช้ Context7 สำหรับ library documentation
6. ใช้ Web Search เป็น fallback
7. ลำดับความสำคัญ: Official Docs → DeepWiki → Context7 → Web Search
8. ตรวจสอบว่าข้อมูลเป็นปัจจุบัน

### 3. Apply Best Practices

1. อ่านไฟล์ที่ต้องปรับปรุงทั้งหมด
2. วิเคราะห์ว่าไฟล์เหล่านี้ต้องการปรับปรุงอะไรตาม best practices
3. แก้ไขไฟล์ตาม best practices ที่เรียนรู้มา
4. ตรวจสอบความสอดคล้องกับ codebase ที่มีอยู่
5. อัพเดท configuration และ settings ที่เกี่ยวข้อง
6. เขียน best practices ที่สำคัญลงในไฟล์ documentation
7. ระบุ patterns และ conventions ที่แนะนำ

### 4. Verify Implementation

1. รัน linter และ typecheck เพื่อตรวจสอบ
2. รัน tests เพื่อยืนยันว่าไม่มี regression
3. ตรวจสอบว่า best practices ถูกนำไปใช้ครบถ้วน
4. อัพเดท documentation หากจำเป็น
5. ทดลองใช้งานตาม best practices
6. บันทึก lessons learned

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
- ใช้ `/learn-from-web` เป็น primary workflow สำหรับ learning
- ใช้ `/deep-research` เมื่อต้องการข้อมูลลึกจาก multiple sources

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
- Best practices ที่ถูกต้องและเป็นปัจจุบัน
- Code examples และ configurations ที่ดี
