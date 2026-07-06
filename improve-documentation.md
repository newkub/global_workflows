---
title: Improve Documentation
description: ปรับปรุงคุณภาพ API reference, README, changelog, examples
auto_execution_mode: 3
related_workflows:
  - improve-content
  - improve-api-design
  - follow-code-quality
  - improve-uxui
  - follow-content-quality
---

## Goal

ปรับปรุง documentation quality ทั้ง API reference, README, changelog, examples, และ inline docs

## Scope

ใช้สำหรับ project ที่มี documentation ที่ต้องการปรับปรุงคุณภาพ ไม่ใช่การสร้างใหม่ (ใช้ `/update-docs` สำหรับสร้าง)

## Execute

### 1. README Quality

ปรับปรุง README

1. ตรวจสอบ README มี project overview ที่ชัดเจน
2. ตรวจสอบ installation instructions ครบถ้วน
3. ตรวจสอบ quick start guide ทำตามได้ง่าย
4. ตรวจสอบ feature list และ use cases
5. ทำ `/improve-content` สำหรับคุณภาพเนื้อหา
6. ตรวจสอบ badges และ links ไม่ broken

### 2. API Reference

ปรับปรุง API documentation

1. ทำ `/improve-api-design` สำหรับ API consistency
2. ตรวจสอบทุก public API มี JSDoc/TSDoc comments
3. ตรวจสอบ parameter types และ return types documented
4. ตรวจสอบ error scenarios และ edge cases documented
5. ตั้งค่า auto-generated API reference (TypeDoc, etc.)
6. ตรวจสอบ code examples ใน API docs ทำงานได้จริง

### 3. Changelog And Release Notes

ปรับปรุง changelog

1. ตรวจสอบ changelog ใช้ Keep a Changelog format
2. ตรวจสอบ semantic versioning compliance
3. ตรวจสอบ breaking changes มี migration guide
4. ตรวจสอบ release notes มี summary ที่กระชับ
5. ตรวจสอบ deprecation notices ชัดเจน

### 4. Code Examples

ปรับปรุง examples

1. ตรวจสอบ examples ครอบคลุมทุก major use case
2. ตรวจสอบ examples ทำงานได้จริง ไม่ใช่ pseudocode
3. ตรวจสอบ examples มี comments อธิบาย
4. ตั้งค่า runnable examples สำหรับ testing
5. ทำ `/run-examples` เพื่อตรวจสอบ examples ทำงานได้

### 5. Inline Documentation

ปรับปรุง inline docs

1. ทำ `/improve-comment` สำหรับ code comments
2. ตรวจสอบ complex functions มี doc comments
3. ตรวจสอบ TODOs แล FIXMEs มี context
4. ตรวจสอบ architecture decisions documented (ADR)
5. ตรวจสอบ inline docs ไม่ขัดแย้งกับ code

### 6. Documentation Site

ปรับปรุง documentation site

1. ตรวจสอบ navigation และ search functionality
2. ตรวจสอบ mobile responsiveness
3. ตรวจสอบ dark mode support
4. ตรวจสอบ syntax highlighting ถูกต้อง
5. ทำ `/improve-uxui` สำหรับ docs UX

## Rules

### 1. Accuracy First

- Documentation ตรงกับ code ปัจจุบันเสมอ
- Examples ทำงานได้จริง
- API reference สอดคล้องกับ actual signatures
- Version numbers ถูกต้อง

### 2. Completeness

- ทุก public API มี documentation
- ทุก major use case มี example
- Breaking changes มี migration guide
- Error scenarios documented

### 3. Quality

- ทำ `/follow-content-quality` เสมอ
- ใช้ clear และ concise language
- ใช้ diagrams สำหรับ complex concepts
- ใช้ consistent formatting

### 4. Maintainability

- Auto-generate API reference ถ้าเป็นไปได้
- Examples เป็น runnable tests
- Documentation versioned กับ code
- Dead links ตรวจสอบอัตโนมัติ

## Expected Outcome

- README ครบถ้วน อ่านง่าย ทำตามได้
- API reference ครบทุก public API พร้อม examples
- Changelog ใช้ Keep a Changelog format
- Code examples ทำงานได้จริง ครอบคลุม use cases
- Inline docs ชัดเจน ไม่ขัดแย้งกับ code
- Documentation site มี navigation และ search ที่ดี
