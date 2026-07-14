---
title: Validate Usage
description: ตรวจสอบการใช้งาน packages ตามประเภท (CLI, TUI, Web, SDK, Library, Framework)
auto_execution_mode: 3
related:
  - /list-usage
  - /check-unused-deps
  - /check-unsued-files
  - /validate
  - /analyze-project
  - /follow-cli-tools
  - /follow-desktop-app
  - /follow-web-design
  - /report-format-table
---

## Goal

ตรวจสอบการใช้งาน packages ตามประเภท (CLI, TUI, Web, SDK, Library, Framework) ว่าถูกต้อง เหมาะสม

## Scope

ใช้สำหรับทุก workspace เพื่อตรวจสอบและ validate การใช้งานของ packages ตามประเภท

## Execute

### 1. Identify Package Type

ระบุประเภทของ package จาก `package.json` และ project structure

1. ตรวจสอบ `package.json` fields (bin, main, browser, types)
2. ตรวจสอบ project structure และ entry points
3. ระบุประเภท: CLI, TUI, Web, SDK, Library, Framework
4. ตรวจสอบ dependencies ที่เกี่ยวข้องกับประเภทนั้นๆ

### 2. Validate By Package Type

ตรวจสอบตามประเภท package ที่ระบุ

1. ถ้าเป็น CLI: ทำ `/follow-cli-tools` เพื่อตรวจสอบ bin field, argument parsing, help text, error handling
2. ถ้าเป็น TUI: ทำ `/follow-desktop-app` เพื่อตรวจสอบ TUI framework, keyboard events, terminal size
3. ถ้าเป็น Web: ทำ `/follow-web-design` เพื่อตรวจสอบ framework, routing, state management, accessibility
4. ถ้าเป็น SDK: ตรวจสอบ API design, type definitions, error handling, auth, rate limiting, logging
5. ถ้าเป็น Library: ทำ `/follow-barrel-export` เพื่อตรวจสอบ exports, barrel files, tree-shaking, bundle size, test coverage
6. ถ้าเป็น Framework: ตรวจสอบ plugin system, lifecycle hooks, configuration schema, extensibility

### 3. Validate Common Patterns

ตรวจสอบ patterns ที่ใช้ร่วมกัน

1. ทำ `/check-unused-deps` เพื่อตรวจสอบ dependencies ที่ไม่ได้ใช้
2. ทำ `/check-unsued-files` เพื่อตรวจสอบ dead code
3. ตรวจสอบ unused exports และ missing exports
4. ตรวจสอบ circular dependencies
5. ตรวจสอบ security vulnerabilities

### 4. Provide Validation Report

ให้รายงานการตรวจสอบ

1. สรุปสิ่งที่ดีอยู่แล้วเสมอ
2. ระบุ issues อย่างชัดเจนตามประเภท package
3. ให้ข้อเสนอแนะ actionable และระบุ priority
4. จัดรูปแบบ output ตาม `/report-format-table`

## Rules

### 1. Package Type Detection

การระบุประเภท package ต้อง:

- ตรวจสอบ `package.json` fields อย่างครบถ้วน
- พิจารณา project structure แล dependencies
- ระบุประเภทอย่างถูกต้อง
- รองรับ packages ที่มีหลายประเภท (hybrid)

### 2. Type-Specific Validation

ตรวจสอบตามประเภท package:

- CLI: ทำตาม `/follow-cli-tools`
- TUI: ทำตาม `/follow-desktop-app`
- Web: ทำตาม `/follow-web-design`
- SDK: API design, type definitions, error handling, auth, rate limiting, logging
- Library: exports, barrel files, tree-shaking, bundle size, test coverage
- Framework: plugin system, lifecycle hooks, configuration schema, extensibility

### 3. Common Pattern Validation

ตรวจสอบ patterns ที่ใช้ร่วมกัน:

- ไม่มี unused dependencies
- ไม่มี dead code
- exports ครบถ้วน
- ไม่มี circular dependencies
- ไม่มี security vulnerabilities

### 4. Report Formatting

จัดรูปแบบ output ตาม `/report-format-table`

- กำหนด table structure ด้วย numbered columns
- จัดกลุ่มตาม package type (CLI, TUI, Web, SDK, Library, Framework, Common)
- เรียงลำดับภายในกลุ่มตาม priority
- ใช้ symbols (✅, ❌, ⚠️) สำหรับ status indicators

## Expected Outcome

- Packages ใช้งานอย่างถูกต้องตามประเภท
- ได้รับ report ที่ชัดเจนพร้อม recommendations ตามประเภท
- สามารถปรับปรุง code ให้เหมาะสมกับประเภท package ได้อย่างมั่นใจ
