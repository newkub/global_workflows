---
title: Analyze Project
description: วิเคราะห์โปรเจกต์พื้นฐานด้วยเลือกใช้ tools ที่เหมาะสมกับงาน
auto_execution_mode: 3
related_workflows:
  - /deep-analyze
  - /scan-codebase
  - /use-ast-grep
  - /use-scripts
  - /follow-my-cli
  - /analyze-structure
---

## Goal

วิเคราะห์โปรเจกต์อย่างมีประสิทธิภาพด้วยการเลือกใช้ tools ที่เหมาะสมกับงาน

## Scope

ครอบคลุมการวิเคราะห์โปรเจกต์พื้นฐานด้วย 4 tools หลัก: `/use-ast-grep`, `/use-scripts`, Windsurf file ops, `/follow-my-cli`

**Note:** ถ้าต้องการวิเคราะห์อย่างลึกซึ้งครบทุกมิติ ให้ทำ `/deep-analyze` แทน

## Execute

### 1. Tool Selection

เลือกใช้ tools ที่เหมาะสมกับงาน

1. ทำ `/follow-my-cli` เพื่อเช็ค CLI tools ที่ติดตั้ง
2. เลือกใช้ tools ตามความเหมาะสม:
   - **AST-based analysis**: ใช้ `/use-ast-grep`
   - **Data processing**: ใช้ `/use-scripts`
   - **File operations**: ใช้ Windsurf file ops (`Grep`, `find_by_name`, `list_dir`)
   - **CLI automation**: ใช้ CLI tools จาก `/follow-my-cli`

### 2. Discovery And Structure

ค้นพบข้อมูลเบื้องต้นและโครงสร้าง

1. ทำ `/analyze-structure` เพื่อดูโครงสร้างไฟล์และ folders
2. ใช้ Windsurf file ops ดู directory และ config files
3. ระบุประเภทโปรเจกต์จาก manifest files
4. ตรวจหา monorepo structure

### 3. Data Collection

รวบรวมข้อมูลจากทุกแหล่ง

1. อ่าน manifest files แบบ parallel
2. ใช้ `Grep` ค้นหา code patterns และ symbols
3. ทำ `/use-ast-grep` สำหรับ AST-based code search
4. ทำ `/use-scripts` สำหรับ data processing ซับซ้อน

### 4. Architecture And Dependencies

วิเคราะห์สถาปัตยกรรมและ dependencies

1. ทำ `/review-architecture` เพื่อระบุ architectural pattern
2. วิเคราะหา data flow ด้วย `Grep`
3. ระบุ tech stack และ dependencies

### 5. Code Analysis

วิเคราะห์ code patterns และ quality

1. ทำ `/use-ast-grep` หา patterns, anti-patterns, design patterns
2. หา code smells ด้วย `Grep` multiline mode
3. ทำ `/use-scripts` คำนวณ metrics
4. ตรวจสอบ naming conventions

### 6. Quality And Security

ประเมินคุณภาพและความปลอดภัย

1. ทำ `/check-duplication`, `/check-unsued-files`, `/check-unused-deps` แบบ parallel
2. ทำ `/check-vulnerability` ตรวจสอบ security
3. ตรวจหา hardcoded secrets ด้วย `Grep`

### 7. Report And Recommendations

สร้างรายงานและข้อเสนอแนะ

1. ทำ `/report` สร้างตารางจัดกลุ่มตามหมวดหมู่
2. ให้ recommendations ตาม priority

## Rules

### 1. Tool Selection

เลือกใช้ tools ตามความเหมาะสมกับงาน

- **AST-based analysis**: ใช้ `/use-ast-grep` สำหรับ pattern matching และ structural search
- **Data processing**: ใช้ `/use-scripts` สำหรับ metrics calculation และ complex processing
- **File operations**: ใช้ Windsurf file ops (`Grep`, `find_by_name`, `list_dir`) สำหรับ file discovery
- **CLI automation**: ทำ `/follow-my-cli` สำหรับเช็คและใช้ CLI tools ที่ติดตั้ง

### 2. Parallel Processing

ประมวลผลแบบ parallel เพื่อความเร็ว

- อ่าน manifest files พร้อมกัน
- รัน checks หลายอย่างพร้อมกัน
- รัน `Grep` patterns พร้อมกัน

### 3. Metric Thresholds

กำหนด thresholds สำหรับ code quality

- Long functions: > 50 lines
- Deep nesting: > 3 levels
- High complexity: cyclomatic complexity > 10
- Large files: > 300 lines

## Expected Outcome

- รายงานโครงสร้างโปรเจกต์ที่ครบถ้วน
- รายการ dependencies พร้อม versions
- ระบุ architectural patterns ที่ใช้
- รายการ code patterns และ anti-patterns ที่พบ
- รายการ code smells พร้อม locations
- รายการ design patterns ที่ใช้
- Code metrics (complexity, coupling, cohesion)
- รายการ naming violations
- รายการ security vulnerabilities
- Recommendations สำหรับ refactor และ improvements ตาม priority
