---
title: Analyze All Files
description: วิเคราะห์ไฟล์ทั้งหมดในโปรเจกต์อย่างเป็นระบบ
auto_execution_mode: 3
---

## Goal

วิเคราะห์ไฟล์ทั้งหมดในโปรเจกต์เพื่อเข้าใจโครงสร้าง คุณภาพโค้ด และปัญหาที่อาจเกิดขึ้น

## Execute

### 1. Discovery Phase
- ค้นหาไฟล์ทั้งหมดในโปรเจกต์ด้วย `find_by_name`
- กรองไฟล์ตามประเภท (`.ts`, `.tsx`, `.vue`, `.json`, `.md`)
- จัดกลุ่มไฟล์ตาม directory structure
- สร้าง inventory ของไฟล์ทั้งหมด

### 2. Read Files
- อ่านไฟล์ทั้งหมดแบบ parallel
- ใช้ `read_file` สำหรับไฟล์โค้ด
- ใช้ `read_notebook` สำหรับ `.ipynb` files
- เก็บ content ไว้ใน memory สำหรับ analysis

### 3. Code Quality Analysis
- ตรวจสอบ code patterns ด้วย `Grep`
- ค้นหา anti-patterns และ code smells
- ตรวจสอบ consistency ของ naming conventions
- ตรวจสอบ type safety และ error handling

### 4. Architecture Analysis
- วิเคราะห์ dependency graph
- ตรวจสอบ circular dependencies
- วิเคราะห์ module boundaries
- ตรวจสอบ separation of concerns

### 5. Security Analysis
- ค้นหา hardcoded secrets ด้วย `Grep`
- ตรวจสอบ sensitive data handling
- ตรวจสอบ input validation
- ตรวจสอบ authentication/authorization patterns

### 6. Performance Analysis
- ค้นหา performance bottlenecks
- ตรวจสอบ memory leaks patterns
- ตรวจสอบ inefficient algorithms
- ตรวจสอบ bundle size issues

### 7. Documentation Analysis
- ตรวจสอบ README files
- ตรวจสอบ code comments
- ตรวจสอบ API documentation
- ตรวจสอบ inline documentation

### 8. Generate Report
- สรุป findings ทั้งหมด
- จัดลำดับความสำคัญของ issues
- แนะนำ improvements
- สร้าง action items

## Rules

### 1. File Discovery
ใช้ tools ที่เหมาะสมสำหรับค้นหาไฟล์

- ใช้ `find_by_name` สำหรับ file search
- ใช้ `Grep` สำหรับ content search
- กำหนด scope ด้วย `glob` และ `path`
- กรองไฟล์ที่ไม่จำเป็น (`.git`, `node_modules`)

### 2. Parallel Reading
อ่านไฟล์แบบ parallel เพื่อประสิทธิภาพ

- อ่านไฟล์หลายไฟล์พร้อมกัน
- จัดกลุ่มไฟล์ตามประเภท
- ใช้ batch reading สำหรับไฟล์จำนวนมาก
- จัดการ memory อย่างมีประสิทธิภาพ

### 3. Systematic Analysis
วิเคราะห์อย่างเป็นระบบตาม categories

- Code quality, architecture, security, performance
- Documentation, testing, configuration
- ใช้ patterns ที่กำหนดไว้ใน `rules/`
- ตรวจสอบ compliance กับ standards

### 4. Actionable Findings
สร้าง findings ที่สามารถดำเนินการได้

- ระบุไฟล์และ line numbers ชัดเจน
- จัดลำดับความสำคัญ (high, medium, low)
- แนะนำ solutions ที่เป็นรูปธรรม
- เชื่อมโยงกับ workflows ที่เกี่ยวข้อง

## Expected Outcome

- ไฟล์ทั้งหมดถูกอ่านและวิเคราะห์
- Code quality issues ถูกระบุ
- Architecture problems ถูกค้นพบ
- Security vulnerabilities ถูกตรวจสอบ
- Performance bottlenecks ถูกระบุ
- Documentation gaps ถูกระบุ
- Action items ถูกสร้าง
- Report ถูกสร้างและแชร์
