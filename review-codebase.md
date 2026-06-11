---
title: Review Codebase
description: Review codebase ครบวงจรเพื่อตรวจสอบคุณภาพโค้ด
auto_execution_mode: 3
related_workflows:
  - /review-code-quality
  - /review-everything
---

## Goal

Review codebase ครบวงจรเพื่อตรวจสอบคุณภาพโค้ดและระบุ issues ที่ต้องแก้ไข

## Execute

### 1. Analyze Project Structure

วิเคราะห์โครงสร้าง project

1. ทำ `/analyze-project` เพื่อวิเคราะห์โครงสร้าง
2. ตรวจสอบ dependencies และ tech stack
3. ระบุ architecture patterns
4. ตรวจสอบ organization ของ files และ folders

### 2. Review Code Quality

ตรวจสอบคุณภาพโค้ด

1. ทำ `/review-code-quality` เพื่อตรวจสอบ code quality
2. ตรวจสอบ complexity, maintainability, และ technical debt
3. ตรวจสอบ naming conventions และ code style
4. ตรวจสอบ type safety และ error handling

### 3. Review Architecture

ตรวจสอบ architecture และ design patterns

1. ทำ `/review-architecture` เพื่อตรวจสอบ architecture
2. ตรวจสอบ separation of concerns
3. ตรวจสอบ design patterns
4. ตรวจสอบ dependencies ระหว่าง modules

### 4. Review Security

ตรวจสอบ security vulnerabilities

1. ทำ `/review-security` เพื่อตรวจสอบ security
2. ตรวจสอบ authentication และ authorization
3. ตรวจสอบ input validation และ sanitization
4. ตรวจสอบ sensitive data handling

### 5. Review Performance

ตรวจสอบ performance และ optimization

1. ทำ `/review-performance` เพื่อตรวจสอบ performance
2. ตรวจสอบ bottlenecks และ optimization opportunities
3. ตรวจสอบ bundle size และ loading performance
4. ตรวจสอบ database queries และ caching

### 6. Review Testing

ตรวจสอบ test coverage และ quality

1. ทำ `/review-test-methodology` เพื่อตรวจสอบ testing
2. ตรวจสอบ test coverage
3. ตรวจสอบ test quality และ test strategy
4. ตรวจสอบ integration และ e2e tests

### 7. Document Findings

บันทึก findings และ recommendations

1. รวบรวม issues ทั้งหมด
2. จัดลำดับความสำคัญตาม impact
3. สร้าง recommendations สำหรับแต่ละ issue
4. บันทึก findings ใน documentation

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

### 4. Issue Prioritization

จัดลำดับ issues ตามความสำคัญ

- จัดลำดับ issues ตาม impact (critical, high, medium, low)
- จัดลำดับตามความยากในการแก้ไข
- จัดลำดับตามความเร่งด่วน

### 5. No Code Modifications

ห้ามแก้ไข code ระหว่าง review

- ไม่แก้ไข code ระหว่าง review
- เฉพาะ comment TODO สำหรับระบุ issues
- ใช้ `/comment-todo` สำหรับระบุ issues โดยไม่แก้ไข

## Expected Outcome

- Codebase ถูก review ครบวงจร
- Issues ทั้งหมดถูกระบุและจัดลำดับ
- Recommendations ชัดเจนสำหรับแต่ละ issue
- Documentation บันทึก findings ครบถ้วน
