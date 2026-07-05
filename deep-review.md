---
title: Deep Review
description: Review ครบทุกมิติอย่างลึกซึ้ง พร้อม severity ratings และ actionable recommendations
auto_execution_mode: 3
related_workflows:
  - /deep-thinking
  - /deep-analyze
  - /review-architecture
  - /review-test-case
  - /review-codebase-and-fix
  - /health
  - /validate
  - /deep-research
  - /report-format-table
---

## Goal

Review โปรเจกต์ครบทุกมิติอย่างลึกซึ้งเพื่อเป็น quality gate ก่อน production หรือ major release

## Scope

ใช้สำหรับ comprehensive review ครอบคลุม: code quality, architecture, security, performance, testing, documentation, configuration, dependencies, และ workflows เป็น quality gate ไม่ได้แก้ไข code

## Execute

### 1. Deep Thinking Phase

ทำ `/deep-thinking` เพื่อวางแผนการ review อย่างเป็นระบบ

1. กำหนด review objectives และ success criteria
2. ระบุ review dimensions ที่เกี่ยวข้องกับ project
3. สร้าง review checklist สำหรับแต่ละ dimension
4. ระบุ risks และ priorities ของการ review

### 2. Foundation Scan

ทำ `/analyze-project` เพื่อเข้าใจ project context

1. ทำ `/analyze-project` สำหรับ basic project analysis
2. ระบุ project type, tech stack, และ architecture
3. อ่าน `AGENTS.md` และ project conventions
4. ระบุ review scope ที่เฉพาะเจาะจงกับ project

### 3. Code Quality Review

Review code quality อย่างละเอียด

1. ทำ `/use-ast-grep` หา anti-patterns และ code smells
2. ทำ `/check-duplication`, `/check-unsued-files`, `/check-unused-deps` แบบ parallel
3. ทำ `/check-long-files` และ `/check-maintainability`
4. ตรวจสอบ naming conventions และ consistency
5. ตรวจสอบ error handling และ edge case coverage
6. ระบุ technical debt และ severity

### 4. Architecture Review

ทำ `/review-architecture` สำหรับ architecture และ design patterns

1. ทำ `/review-architecture` วิเคราะห์ architectural patterns
2. ตรวจสอบ module boundaries และ dependencies
3. ตรวจสอบ design principles (SOLID, DRY, KISS, YAGNI)
4. ระบุ anti-patterns และ coupling issues
5. ประเมิน scalability และ maintainability

### 5. Security Review

Review security อย่างครบถ้วน

1. ทำ `/check-vulnerability` สำหรับ dependency vulnerabilities
2. ค้นหา hardcoded secrets ด้วย `Grep`
3. ตรวจสอบ authentication และ authorization patterns
4. ตรวจสอบ input validation และ sanitization
5. ตรวจสอบ API security และ rate limiting
6. ระบุ security risks พร้อม severity

### 6. Performance Review

Review performance และ optimization

1. วิเคราะห์ performance bottlenecks
2. ตรวจสอบ database queries และ N+1 problems
3. ตรวจสอบ caching strategies
4. ตรวจสอบ bundle size และ asset optimization
5. ตรวจสอบ rendering performance สำหรับ frontend
6. ระบุ optimization opportunities

### 7. Testing Review

ทำ `/review-test-case` สำหรับ test quality

1. ทำ `/review-test-case` ตรวจสอบ test quality ทีละ case
2. ตรวจสอบ test coverage และ gaps
3. ตรวจสอบ test isolation และ reliability
4. ตรวจสอบ E2E test coverage ถ้ามี
5. ระบุ untested critical paths

### 8. Documentation Review

Review documentation และ knowledge transfer

1. ตรวจสอบ README และ setup guides
2. ตรวจสอบ API documentation และ examples
3. ตรวจสอบ code comments และ inline documentation
4. ตรวจสอบ `AGENTS.md` และ workflow files
5. ระบุ documentation gaps

### 9. Configuration Review

Review configuration และ environment setup

1. ทำ `/check-configuration` สำหรับ config validation
2. ตรวจสอบ environment variables และ secrets management
3. ตรวจสอบ CI/CD pipeline configuration
4. ตรวจสอบ build configuration และ optimization
5. ตรวจสอบ dependency versions และ compatibility

### 10. External Research

ทำ `/deep-research` เพื่อเปรียบเทียบกับ best practices

1. ค้นหา best practices สำหรับ tech stack ที่ใช้
2. เปรียบเทียบ findings กับ industry standards
3. ระบุ gaps ระหว่าง current implementation และ best practices
4. ระบุ outdated patterns หรือ deprecated approaches

### 11. Comprehensive Report

สร้างรายงาน review ครบถ้วน

1. ทำ `/report-format-table` สร้างตาราง findings
2. กำหนด columns: Dimension, Finding, Severity, Location, Recommendation
3. จัดกลุ่ม findings ตาม dimension
4. จัดลำดับตาม severity (Critical, High, Medium, Low)
5. สร้าง executive summary พร้อม overall health score
6. ทำ `/suggest-next-action` เสนอ action ถัดไป

## Rules

### 1. Review Scope

- ครอบคลุมทุก dimension ที่เกี่ยวข้องกับ project
- ถ้า project ไม่มี database ให้ข้าม database review
- ถ้า project ไม่มี frontend ให้ข้าม rendering performance review
- ปรับ scope ตาม project characteristics

### 2. Severity Classification

- **Critical**: blocking production, security vulnerability, data loss risk
- **High**: core functionality at risk, significant performance issue
- **Medium**: code quality issue, minor performance, documentation gap
- **Low**: cosmetic, naming convention, minor improvement

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review
- ใช้ `/comment-todo` สำหรับระบุ issues ใน code
- แยก review process จาก fix process
- ถ้าต้องแก้ไข ให้ทำ `/review-codebase-and-fix` หลัง review

### 4. Evidence-Based Findings

- ทุก finding ต้องมี evidence (file path, line number, code snippet)
- ไม่เดา ใช้ tools สำหรับ verification
- อ้างอิง best practices หรือ standards ที่ตรวจสอบได้
- ระบุ false positives ที่พบ

### 5. Parallel Processing

- รัน independent reviews แบบ parallel
- อ่าน files แบบ parallel
- รัน checks หลายอย่างพร้อมกัน
- รัน `Grep` และ ast-grep patterns พร้อมกัน

### 6. Report Quality

- ใช้ `/report-format-table` สำหรับ structured output
- จัดกลุ่ม findings ตาม dimension และ severity
- ให้ recommendations ที่ actionable และ concrete
- สร้าง executive summary สำหรับ stakeholders
- ระบุ overall health score และ confidence level

## Expected Outcome

- Review ครบทุกมิติที่เกี่ยวข้องกับ project
- Findings ทั้งหมดมี severity rating และ evidence
- Executive summary พร้อม overall health score
- Recommendations ที่ actionable และจัดลำดับตาม priority
- ระบุ critical issues ที่ต้องแก้ก่อน production
- ระบุ gaps ระหว่าง current implementation และ best practices
- เป็น quality gate สำหรับ decision ว่าพร้อม production หรือไม่
