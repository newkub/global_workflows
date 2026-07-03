---
title: Review Issue and Fix
description: วิเคราะห์และแก้ไขปัญหาทั่วไป (code, content, docs, config, workflows)
auto_execution_mode: 3
related_workflows:
  - follow-root-cause-analysis
  - resolve-errors
  - debug-issue
  - follow-code-quality
  - follow-content-quality
  - follow-config
  - follow-workflows
  - follow-architecture
---

## Goal

วิเคราะห์และแก้ไขปัญหาอย่างเป็นระบบ ไม่ว่าจะเป็น code, content, documentation, configuration, หรือ workflows

## Scope

ใช้กับทุก context (code, content, config, workflow, architecture)

## Execute

### 1. Understand Context

ระบุประเภทของปัญหาและรวบรวมข้อมูล

1. ระบุประเภท (code, content, config, workflow, architecture)
2. อ่านไฟล์ที่เกี่ยวข้องและ error messages
3. ทำความเข้าใจ requirements
4. ถามผู้ใช้ถ้าไม่เข้าใจ context

### 2. Analyze Problem

วิเคราะห์และวางแผนแนวทางแก้ไข

1. ทำ `/follow-root-cause-analysis` สำหรับปัญหาซับซ้อน
2. จัดลำดับความสำคัญตาม impact และ urgency
3. วางแผน solution ที่เหมาะสมที่สุด

### 3. Implement Fix

ทำการเปลี่ยนแปลงตาม context

1. ทำ minimal changes ที่จำเป็น
2. ทำตาม workflows ที่เกี่ยวข้อง:
   - Code: `/ship-run` หรือ `/edit-only`
   - Content: `/follow-content-quality`
   - Config: `/follow-config`
   - Workflow: `/follow-workflows`
   - Architecture: `/follow-architecture`

### 4. Verify And Document

ยืนยันการแก้ไขและบันทึก

1. ทดสอบว่าแก้ปัญหาได้จริง
2. ตรวจสอบ side effects
3. Document การเปลี่ยนแปลง
4. ทำ `/suggest-next-action`

## Rules

### 1. Generic Principles

ใช้หลักการที่ใช้ได้กับทุก context

- อย่าแก้โดยไม่เข้าใจ
- ทำ minimal changes เท่านั้น
- แก้ที่ root cause ไม่ใช่ symptom
- ยืนยันว่าแก้ได้จริง
- Document ชัดเจน

### 2. Context-Specific Rules

ทำตาม workflows ที่เกี่ยวข้องตาม context

- Code: `/follow-code-quality`, `/ship-run`
- Content: `/follow-content-quality`
- Config: `/follow-config`
- Workflow: `/follow-workflows`
- Architecture: `/follow-architecture`

### 3. Communication

- ถามถ้าไม่แน่ใจ
- ระบุไฟล์และปัญหาชัดเจน
- อธิบายทำไมต้องแก้
- รายงาน progress สม่ำเสมอ

## Expected Outcome

- ปัญหาถูกแก้ที่ root cause
- การเปลี่ยนแปลงเป็น minimal
- ไม่มี side effects ใหม่
- การเปลี่ยนแปลงถูก document
