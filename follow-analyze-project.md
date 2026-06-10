---
title: Analyze Project
description: วิเคราะห์โปรเจกต์เพื่อเข้าใจโครงสร้าง dependencies และคุณภาพโค้ด
auto_execution_mode: 3
---

## Goal

วิเคราะห์โปรเจกต์เพื่อเข้าใจโครงสร้าง dependencies และคุณภาพโค้ด

## Scope

ครอบคลุมการวิเคราะห์ทุกมิติของโปรเจกต์ รวมถึง structure, tech stack, architecture, quality, security, dependencies และ performance

## Execute

### 1. Discovery And Structure

ค้นพบข้อมูลเบื้องต้นและโครงสร้าง

1. ทำ `/check-architecture` เพื่อดู directory และ config files
2. ระบุประเภทโปรเจกต์จาก manifest files
3. ตรวจหา monorepo structure (workspaces, moon, nx)
4. วิเคราะห์ directory patterns: `src/`, `app/`, `packages/`, `apps/`

### 2. Manifest And Dependencies

วิเคราะห์ manifest files และ dependencies

1. อ่าน manifest files แบบ parallel
2. ดึง dependencies พร้อม versions
3. ระบุ frontend framework, backend runtime, database
4. ตรวจหา build tools และ testing frameworks

### 3. Architecture And Patterns

วิเคราะห์สถาปัตยกรรมและ patterns

1. ทำ `/architecture` เพื่อระบุ architectural pattern
2. วิเคราะห์ data flow ด้วย `grep_search` หา imports/exports
3. บันทึก state management (Pinia, Zustand, Redux)
4. ใช้ `/search-code` หา common patterns และ naming conventions

### 4. Quality And Security

ประเมินคุณภาพและความปลอดภัย

1. ทำ `/check-duplication`, `/check-unsued-files`, `/check-unused-deps` แบบ parallel
2. ทำ `/check-vulnerability` ตรวจสอบ security
3. ตรวจหา hardcoded secrets ด้วย `grep_search`
4. ตรวจสอบ type safety coverage จาก `tsconfig.json`

### 5. Performance And Metrics

วิเคราะห์ performance และสร้าง metrics

1. ทำ `/use-scripts` พร้อม parser คำนวณ metrics
2. หาไฟล์ที่มีขนาดใหญ่ (lines > 300)
3. วิเคราะห์ cyclomatic complexity
4. ตรวจหา performance anti-patterns

### 6. Report And Recommendations

สร้างรายงานและข้อเสนอแนะ

1. รวบรวม findings ใน structured data
2. ทำ `/report` สร้างตารางจัดกลุ่มตามหมวดหมู่
3. ระบุ strengths, weaknesses, risk areas
4. ให้ recommendations ตาม priority

## Rules

### 1. Parallel Processing

ประมวลผลแบบ parallel เพื่อเพิ่มประสิทธิภาพ

- อ่าน manifest files พร้อมกัน
- รัน checks หลายอย่างพร้อมกัน
- ทำ `/use-scripts` สำหรับ batch operations

### 2. Tool Selection

เลือกใช้เครื่องมือที่เหมาะสมกับงานแต่ละประเภท

- ใช้ `/search-code` สำหรับ codebase analysis
- ใช้ `grep_search` สำหรับ pattern matching
- ใช้ `find_by_name` สำหรับ file discovery
- ทำ Bun scripts สำหรับ custom metrics

### 3. Parser Usage

ทำ `/use-scripts` พร้อม dependency parsers สำหรับวิเคราะห์ dependencies

- TypeScript/JavaScript: ใช้ oxc-parser จาก `https://esm.sh/oxc-parser`
- Rust/Python/Go/PHP: ใช้ tree-sitter ผ่าน WASM
- สร้าง scripts ใน `.windsurf/scripts/` และลบหลังใช้งาน

### 4. Coverage Standards

ครอบคลุมทุกมิติที่สำคัญของโปรเจกต์

- Structure: directory layout, file organization
- Tech Stack: languages, frameworks, libraries
- Architecture: patterns, data flow, state management
- Quality: coverage, linting, type safety
- Security: vulnerabilities, secrets, risks
- Dependencies: versions, outdated, duplicates
- Performance: complexity, bundle size

### 5. Actionable Output

สร้างผลลัพธ์ที่นำไปปฏิบัติได้จริง

- ให้ recommendations ที่ concrete และ prioritized
- ระบุ effort และ impact
- แยก quick wins จาก long-term improvements
- ทำ `/report` เพื่อสรุปผล

## Expected Outcome

- รายงานโครงสร้างโปรเจกต์ที่ครบถ้วน
- รายการ dependencies พร้อม versions
- ระบุ architectural patterns ที่ใช้
- Metrics คุณภาพโค้ด (complexity, coverage)
- รายการ security vulnerabilities
- Recommendations ตาม priority

## Common Mistakes

ข้อผิดพลาดที่พบบ่อย:

- ไม่ประมวลผลแบบ parallel ทำให้ช้า
- ไม่ใช้ parser ที่เหมาะสมกับภาษา
- ไม่ระบุ tech stack ชัดเจน
- ไม่ครอบคลุมทุกมิติที่สำคัญ
- ให้ recommendations ที่ไม่ concrete

## Anti-Patterns

รูปแบบที่ไม่ควรทำ:

- ❌ อ่านไฟล์ทีละไฟล์แบบ sequential
- ❌ ใช้ grep สำหรับทุกอย่างโดยไม่ใช้ parser
- ❌ วิเคราะห์เฉพาะ surface level
- ❌ ไม่ให้ recommendations ที่ actionable
- ❌ สร้าง scripts แล้วไม่ลบหลังใช้งาน

