---
title: Review Codebase
description: Review codebase ครบวงจรเพื่อตรวจสอบคุณภาพโค้ด
auto_execution_mode: 3
related_workflows:
  - /analyze-project
  - /check-maintainability
  - /review-architecture
  - /improve-security
  - /improve-web-performance
  - /improve-coverage
  - /comment-todo
---

## Goal

Review codebase ครบวงจรเพื่อตรวจสอบคุณภาพโค้ดและระบุ issues ที่ต้องแก้ไข

## Scope

ใช้สำหรับ review codebase ครบวงจรทั้ง structure, quality, architecture, security, performance, และ testing

## Execute

### 1. Analyze Project Structure

วิเคราะห์โครงสร้าง project

1. ทำ `/analyze-project`

### 2. Review Code Quality

ตรวจสอบคุณภาพโค้ด

1. ทำ `/check-maintainability`

### 3. Review Architecture

ตรวจสอบ architecture และ design patterns

1. ทำ `/review-architecture`

### 4. Review Security

ตรวจสอบ security vulnerabilities

1. ทำ `/improve-security`

### 5. Review Performance

ตรวจสอบ performance และ optimization

1. ทำ `/improve-web-performance`

### 6. Review Testing

ตรวจสอบ test coverage และ quality

1. ทำ `/improve-coverage`

### 7. Document Findings

บันทึก findings และ recommendations

1. รวบรวม issues ทั้งหมด
2. จัดลำดับความสำคัญตาม impact
3. สร้าง recommendations สำหรับแต่ละ issue
4. ทำ `/report-format-summary` เพื่อสรุปผล
5. บันทึก findings ใน documentation

## Rules

### 1. Execution Order

ทำตามลำดับ review อย่างเคร่งครัด

- Review ตามลำดับ: structure → quality → architecture → security → performance → testing
- ไม่ข้ามขั้นตอน review
- ทำ review ครบถ้วนก่อนจบ

### 2. Tool Usage

ใช้ automated tools เพื่อเพิ่มประสิทธิภาพ

- ใช้ `linters` เมื่อมี
- ใช้ `type checkers` เมื่อมี
- ใช้ `security scanners` เมื่อมี
- ใช้ tools เพื่อ identify issues อัตโนมัติ

### 3. Root Cause Analysis

ระบุ root cause ของ issues

- ระบุ root cause ไม่ใช่แก้เฉพาะ symptoms
- วิเคราะห์ dependencies ระหว่าง issues
- ตรวจสอบ impact ของแต่ละ issue

### 4. No Code Modifications

ห้ามแก้ไข code ระหว่าง review

- ไม่แก้ไข code ระหว่าง review
- เฉพาะ comment TODO สำหรับระบุ issues
- ทำ `/comment-todo` สำหรับระบุ issues โดยไม่แก้ไข

## Expected Outcome

- Codebase ถูก review ครบวงจร
- Issues ทั้งหมดถูกระบุและจัดลำดับ
- Recommendations ชัดเจนสำหรับแต่ละ issue
- Documentation บันทึก findings ครบถ้วน
