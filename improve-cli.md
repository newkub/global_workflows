---
title: Improve CLI
description: ปรับปรุง CLI tools ครบวงจรเพื่อความสมบูรณ์และ DX
auto_execution_mode: 3
related_workflows:
  - create-cli-tools
  - follow-create-bun-cli
  - improve-dx
  - follow-content-quality
---

## Goal

ปรับปรุง CLI tools ครบวงจรเพื่อให้มีประสิทธิภาพ ใช้งานง่าย และ developer experience ที่ดี

## Scope

ใช้สำหรับ CLI tools ทุกประเภท (Bun CLI, Node.js CLI, general CLI tools)

## Execute

### 1. Analyze CLI Structure

วิเคราะห์โครงสร้าง CLI ปัจจุบัน

1. ทำ `/analyze-project` เพื่อดูโครงสร้าง
2. ตรวจสอบ CLI interface design
3. ตรวจสอบ argument parsing logic
4. ตรวจสอบ error handling
5. ตรวจสอบ documentation

### 2. Improve CLI Interface

ปรับปรุง CLI interface ให้ใช้งานง่าย

1. ทำตาม `/create-cli-tools` สำหรับ interface design
2. เพิ่ม `--help` และ `--version` flags
3. ใช้ consistent naming conventions
4. เพิ่ม subcommands ที่ logical
5. ใช้ exit codes ที่มาตรฐาน

### 3. Improve Error Handling

ปรับปรุง error handling ให้ robust

1. Validate inputs ทั้งหมด
2. ใช้ custom error messages ที่ actionable
3. แสดง suggestions สำหรับ fix errors
4. Handle edge cases gracefully
5. ไม่ crash unexpectedly

### 4. Improve Documentation

ปรับปรุง documentation ให้ครบถ้วน

1. เขียน README ที่ครบถ้วน
2. ให้ examples สำหรับทุก command
3. Document installation steps
4. Add troubleshooting guide
5. ทำ `/follow-content-quality` สำหรับคุณภาพ

### 5. Improve Performance

ปรับปรุง performance ของ CLI

1. Optimize startup time
2. ใช้ lazy loading สำหรับ heavy operations
3. Cache results ที่เหมาะสม
4. Reduce dependencies
5. Monitor performance metrics

### 6. Improve Developer Experience

ปรับปรุง developer experience

1. ทำตาม `/improve-dx` สำหรับ DX improvements
2. ตั้งค่า build tools ที่เหมาะสม
3. ตั้งค่า development scripts
4. ใช้ watch mode สำหรับ development
5. ตั้งค่า linting และ formatting

## Rules

### 1. Interface Design

CLI interface ต้องใช้งานง่าย

- ใช้ consistent naming conventions
- รองรับ `--help` และ `--version`
- ใช้ exit codes ที่มาตรฐาน (0 = success, 1 = error)
- มี clear error messages
- ใช้ short flags สำหรับ common options

### 2. Error Handling

Error handling ต้อง robust

- Validate inputs ทั้งหมด
- Provide helpful error messages
- Handle edge cases gracefully
- ไม่ crash unexpectedly
- ใช้ error codes สำหรับ easy reference

### 3. Documentation

Documentation ต้องครบถ้วน

- เขียน README ที่ครบถ้วน
- ให้ examples สำหรับทุก command
- Document installation steps
- Add troubleshooting guide
- ทำ `/follow-content-quality` เสมอ

### 4. Performance

Performance ต้องดี

- Startup time ควร < 100ms
- ใช้ lazy loading สำหรับ heavy operations
- Cache results ที่เหมาะสม
- Reduce dependencies
- Monitor performance metrics

### 5. Developer Experience

Developer experience ต้องดี

- ทำตาม `/improve-dx` เสมอ
- ตั้งค่า build tools ที่เหมาะสม
- ตั้งค่า development scripts
- ใช้ watch mode สำหรับ development
- ตั้งค่า linting และ formatting

## Expected Outcome

- CLI interface ใช้งานง่ายและ consistent
- Error handling robust และ actionable
- Documentation ครบถ้วนและชัดเจน
- Performance ดีและเร็ว
- Developer experience ดี
- CLI tools พร้อมสำหรับ production
