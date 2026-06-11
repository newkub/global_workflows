---
title: Review Everything
description: Systematic codebase review ด้วย prioritized issues และ validation
auto_execution_mode: 3
related_workflows:
  - /review-dependencies
  - /review-architecture
  - /review-database
  - /review-api
  - /review-data
  - /review-performance
  - /review-seo
  - /review-frontend-optimization
  - /review-design-system
  - /review-security
  - /review-uxui
  - /review-testing
  - /review-code-quality
  - /review-logging
  - /review-monitoring
  - /review-cicd
  - /review-documentation
  - /review-error-handling
  - /review-configuration
  - /review-integration
  - /review-scalability
  - /review-compatibility
  - /review-accessibility
  - /review-internationalization
  - /review-backup
---

## Goal

Review โปรเจกต์ทุกด้านอย่าง systematic เพื่อระบุและแก้ไข issues ตาม priority

## Scope

ครอบคลุมการ review ทุกด้านของโปรเจกต์ รวมถึง correctness, architecture, code quality, security, performance และ test coverage

## Execute

### 1. Analyze Project

1. ใช้ `/analyze-project` เพื่อวิเคราะห์โปรเจกต์อย่างละเอียด

### 2. Systematic Review

1. ใช้ `/review-dependencies` เพื่อ review dependencies
2. ใช้ `/review-architecture` เพื่อ review architecture
3. ใช้ `/review-database` เพื่อ review database layer
4. ใช้ `/review-api` เพื่อ review API endpoints
5. ใช้ `/review-data` เพื่อ review data models และ DTOs
6. ใช้ `/review-performance` เพื่อ review performance
7. ใช้ `/review-seo` เพื่อ review SEO optimization
8. ใช้ `/review-frontend-optimization` เพื่อ review frontend optimization
9. ใช้ `/review-design-system` เพื่อ review design system
10. ใช้ `/review-security` เพื่อ review security
11. ใช้ `/review-uxui` เพื่อ review UX/UI
12. ใช้ `/review-testing` เพื่อ review testing
13. ใช้ `/review-code-quality` เพื่อ review code quality
14. ใช้ `/review-logging` เพื่อ review logging
15. ใช้ `/review-monitoring` เพื่อ review monitoring
16. ใช้ `/review-cicd` เพื่อ review CI/CD
17. ใช้ `/review-documentation` เพื่อ review documentation
18. ใช้ `/review-error-handling` เพื่อ review error handling
19. ใช้ `/review-configuration` เพื่อ review configuration
20. ใช้ `/review-integration` เพื่อ review integration
21. ใช้ `/review-scalability` เพื่อ review scalability
22. ใช้ `/review-compatibility` เพื่อ review compatibility
23. ใช้ `/review-accessibility` เพื่อ review accessibility
24. ใช้ `/review-internationalization` เพื่อ review internationalization
25. ใช้ `/review-backup` เพื่อ review backup

### 3. Prioritize And Report

1. Group issues ตาม severity (Critical, High, Medium, Low)
2. ใช้ `/report` เพื่อสรุปผลเป็น table พร้อม numbered columns, grouping, sorting
3. รอ user confirmation ก่อนดำเนินการแก้ไข
4. ถ้าไม่พบ issues ให้รายงานว่า No issues found

### 4. Execute Fixes

1. Fix critical issues ก่อน (ใช้ `/fix-vulnerability` สำหรับ security vulnerabilities)
2. Fix high priority issues (performance issues, test failures)
3. Fix medium priority issues (code quality, lint warnings)
4. Fix low priority issues (style issues, documentation)

## Rules

### 1. Review Scope

- ต้อง review ทุกด้านตาม improve-codebase-everything
- ต้องใช้ tools ที่เหมาะสมกับ project type
- ต้องระบุ severity ชัดเจนสำหรับแต่ละ issue

### 2. Prioritization

- Critical: Security vulnerabilities, type errors, build failures
- High: Performance issues, test failures, breaking changes
- Medium: Code quality violations, lint warnings, deprecated APIs
- Low: Style issues, documentation gaps, minor improvements

### 3. Execution

- ต้องรอ user confirmation ก่อนแก้ไข
- ใช้ `/check-vulnerability` สำหรับ security vulnerabilities
- ใช้ `/resolve-errors` สำหรับ issues ที่พบ
- ใช้ `/improve-codebase-everything` สำหรับ improvement tasks
- ต้อง validate ทุกครั้งหลังแก้ไข

### 4. Output Format

- ใช้ `/report` เพื่อสรุปผลเป็น table พร้อม numbered columns, grouping, sorting
- ระบุ location ชัดเจน (file path, line number)
- Link ไปยังไฟล์ที่เกี่ยวข้อง

## Expected Outcome

- Issues ทั้งหมดถูกระบุและ prioritize
- Table สรุปผลการ review พร้อม action items
- Issues ถูกแก้ไขตาม priority
- Validation ผ่านทุกขั้นตอน
- Code quality ดีขึ้นตาม improve-codebase-everything

## Common Mistakes

ข้อผิดพลาดที่พบบ่อย:

- ไม่รอ user confirmation ก่อนแก้ไข
- ไม่ระบุ severity ชัดเจน
- แก้ไข issues ไม่ตาม priority
- ไม่ validate หลังแก้ไข
- ใช้ `/report` ไม่ถูกต้อง

## Anti-Patterns

รูปแบบที่ไม่ควรทำ:

- ❌ แก้ไขทุกอย่างพร้อมกันโดยไม่ prioritize
- ❌ ข้าม critical issues เพื่อไปแก้ low priority
- ❌ ไม่ใช้ tools ที่เหมาะสมกับ project type
- ❌ ไม่รายงานผลเป็น table ที่ชัดเจน
