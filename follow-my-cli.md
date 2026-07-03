---
title: Follow My CLI
description: เช็คและใช้ CLI tools ที่ติดตั้งในเครื่อง (mise, scoop, winget)
auto_execution_mode: 3
related_workflows:
  - /use-scripts
---

## Goal

เช็ค CLI tools ที่ติดตั้งในเครื่องและเลือกใช้ตามความเหมาะสมกับงาน

## Scope

ครอบคลุมการเช็ค mise, scoop, winget และเลือกใช้ CLI tools ตามความเหมาะสม

## Execute

### 1. Check Installed CLI Tools

เช็ค CLI tools ที่ติดตั้งในเครื่อง

1. รัน `mise list` เพื่อดู tools ที่ติดตั้งด้วย mise
2. รัน `scoop list` เพื่อดู packages ที่ติดตั้งด้วย scoop
3. รัน `winget list` เพื่อดู apps ที่ติดตั้งด้วย winget
4. รวบรวมรายการ CLI tools ทั้งหมด

### 2. Analyze Task Requirements

วิเคราะห์งานที่ต้องทำ

1. ระบุประเภทงาน (file operations, code analysis, automation)
2. ระบุ performance requirements
3. ระบุ platform requirements (Windows, cross-platform)

### 3. Select Appropriate CLI Tool

เลือก CLI tool ตามความเหมาะสม

- **File operations**: ใช้ Windsurf file operations หรือ PowerShell
- **Code analysis**: ใช้ `/use-ast-grep` สำหรับ AST-based analysis
- **Data processing**: ใช้ `/use-scripts` สำหรับ Bun scripts
- **CLI automation**: ใช้ mise สำหรับ cross-platform tasks
- **Windows-specific**: ใช้ scoop หรือ winget สำหรับ Windows tools

### 4. Execute Task

ทำงานด้วย tool ที่เลือก

1. ใช้ tool ที่เลือกตามความเหมาะสม
2. ตรวจสอบผลลัพธ์
3. ปรับปรุงถ้าจำเป็น

## Rules

### 1. Tool Selection Criteria

เลือก tool ตามความเหมาะสม

- **mise**: ใช้สำหรับ cross-platform task management และ version management
- **scoop**: ใช้สำหรับ Windows package management
- **winget**: ใช้สำหรับ Windows app installation จาก Microsoft Store
- **Windsurf file ops**: ใช้สำหรับ file operations ใน IDE
- **Bun scripts**: ใช้สำหรับ data processing และ automation

### 2. Performance Considerations

คำนึถึง performance

- ใช้ Windsurf file ops สำหรับ operations ใน workspace
- ใช้ Bun scripts สำหรับ heavy data processing
- ใช้ mise สำหรับ cross-platform performance
- หลีกเลี่ยง external CLI calls ถ้ามี built-in alternative

### 3. Platform Compatibility

คำนึถึง platform compatibility

- mise: cross-platform (Linux, macOS, Windows)
- scoop: Windows เท่านั้น
- winget: Windows เท่านั้น
- Windsurf file ops: cross-platform
- Bun scripts: cross-platform

## Expected Outcome

- เลือกใช้ CLI tool ที่เหมาะสมกับงาน
- ทำงานอย่างมีประสิทธิภาพ
- เข้าใจความสามารถของแต่ละ tool
