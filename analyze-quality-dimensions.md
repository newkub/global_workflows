---
title: Analyze Quality Dimensions
description: วิเคราะห์ quality dimensions: security, auth, performance, bundle, test, config, deps, state, concurrency, errors, logging, privacy, code review, refactoring, maintainability
auto_execution_mode: 3
related_workflows:
  - /analyze-security
  - /analyze-auth
  - /analyze-performance
  - /analyze-bundle
  - /analyze-asset
  - /analyze-test
  - /analyze-config
  - /analyze-dependencies
  - /analyze-state-management
  - /analyze-concurrency
  - /analyze-error-handling
  - /analyze-logging
  - /analyze-privacy
  - /analyze-review-process
  - /analyze-refactoring
  - /analyze-maintainability
  - /analyze-bug-prone
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ quality dimensions ทั้งหมดของ codebase

## Scope

Security, auth, performance, bundle, asset, test, config, dependencies, state management, concurrency, error handling, logging, privacy, code review, refactoring, maintainability

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม quality metrics ผ่าน scripts (security scan, test coverage, dependency analysis)

### 2. Analyze Security And Auth

1. ทำ `/analyze-security` วิเคราะห์ OWASP Top 10, auth flaws, injection, secrets exposure
2. ทำ `/analyze-auth` วิเคราะห์ auth flows, session management, OAuth, MFA, token rotation

### 3. Analyze Performance And Assets

1. ทำ `/analyze-performance` วิเคราะห์ bundle size, render, N+1 queries, memory leaks
2. ทำ `/analyze-bundle` วิเคราะห์ bundle size, tree shaking, code splitting, vendor chunks
3. ทำ `/analyze-asset` วิเคราะห์ image/font/icon optimization, asset pipeline, CDN usage

### 4. Analyze Code Quality

1. ทำ `/analyze-test` วิเคราะห์ test coverage, quality, patterns, E2E gaps
2. ทำ `/analyze-config` วิเคราะห์ config files, env vars, secrets exposure, consistency
3. ทำ `/analyze-dependencies` วิเคราะห์ dependency graph, outdated, vulnerabilities, unused

### 5. Analyze Runtime Quality

1. ทำ `/analyze-state-management` วิเคราะห์ state stores, data flow, reactivity patterns
2. ทำ `/analyze-concurrency` วิเคราะห์ race conditions, async safety, deadlocks, shared state
3. ทำ `/analyze-error-handling` วิเคราะห์ error boundaries, try/catch patterns, error propagation
4. ทำ `/analyze-logging` วิเคราะห์ structured logging, log levels, PII detection, log retention

### 6. Analyze Privacy

1. ทำ `/analyze-privacy` วิเคราะห์ privacy patterns, consent management, data minimization, anonymization

### 7. Analyze Process Quality

1. ทำ `/analyze-review-process` วิเคราะห์ review process quality, PR templates, review checklist, review coverage
2. ทำ `/analyze-refactoring` วิเคราะห์ refactoring readiness, technical debt, code smells priority
3. ทำ `/analyze-maintainability` วิเคราะห์ maintainability index, changeability, testability, readability

### 8. Analyze Bug-Prone Code

1. ทำ `/analyze-bug-prone` วิเคราะห์ code ที่มีแนวโน้มก่อให้เกิด bug ก่อนเกิดปัญหา

### 9. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: security → auth → privacy → maintainability → refactoring → performance → bundle → test → dependencies → code review → error handling → concurrency → state management → logging → config → asset

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม severity

### 2. Severity Classification

- **Critical**: security vulnerabilities, auth bypass, PII in logs, missing consent
- **High**: missing tests, missing error handling, race conditions, missing dependency updates
- **Medium**: missing memoization, inconsistent state, missing structured logging
- **Low**: missing asset optimization, missing log retention, missing config validation

### 3. Use Scripts For Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ pattern detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

### 4. Non-Redundancy

- แต่ละ sub-workflow มี scope ที่ไม่ทับซ้อนกัน
- ใช้ references แทนการเขียนซ้ำเนื้อหาจาก sub-workflows

## Expected Outcome

- Quality dimension gaps ระบุพร้อม severity
- พร้อมสำหรับ orchestrator consolidation หรือ `/deep-review`
