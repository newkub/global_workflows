---
title: Improve Test Coverage
description: ปรับปรุง test coverage ให้ครอบคลุมและตรงเป้าหมาย
auto_execution_mode: 3
related_workflows:
  - /write-test
  - /run-test-coverage
  - /validate-test
  - /report
  - /follow-code-quality
---

## Goal

ปรับปรุง test coverage ให้ครอบคลุมและตรงเป้าหมาย บรรลุ 100% ทุก category

## Scope

ใช้สำหรับปรับปรุง test coverage ทั้ง unit, integration, และ e2e tests

## Execute

### 1. Check Current Coverage

1. ทำ `/run-test-coverage` เพื่อสร้าง coverage report
2. ตรวจสอบ `lines` coverage percentage
3. ตรวจสอบ `branches` coverage percentage
4. ตรวจสอบ `functions` coverage percentage
5. ตรวจสอบ `statements` coverage percentage

### 2. Analyze Coverage Gaps

1. ระบุ critical code ที่ไม่ถูก cover
2. ระบุ edge cases ที่ไม่ถูก cover
3. ระบุ error paths ที่ไม่ถูก cover
4. รัน `knip` สำหรับ detect dead code
5. สร้าง plan สำหรับเพิ่ม coverage

### 3. Write Tests

1. ทำ `/write-test` เพื่อเขียน tests ครอบคลุม uncovered code
2. เขียน tests สำหรับ critical code
3. เขียน tests สำหรับ edge cases และ error paths
4. ตรวจสอบ coverage ครบทุก code paths

### 4. Implement Formal Verification (Conditional)

ถ้า project มี critical components ให้ทำ formal verification

1. ระบุ components ที่ต้องการ formal verification:
   - Security-critical code (auth, encryption, payment)
   - Safety-critical code (medical, automotive, industrial)
   - Financial transactions
   - Data validation and sanitization
2. ใช้ formal verification tools:
   - Type systems ที่ strong (TypeScript, Rust, Haskell)
   - Property-based testing (QuickCheck, Hypothesis, `fast-check`)
   - Model checking (TLA+, Alloy)
   - Static analysis (SonarQube, CodeQL)
   - Theorem provers (Coq, Isabelle)
3. เขียน formal specifications สำหรับ critical invariants
4. Verify invariants ด้วย automated tools
5. Document formal verification results

### 5. Set Up Coverage Enforcement

1. ตั้งค่า coverage targets ใน CI/CD
2. Block PRs ที่ไม่ผ่าน coverage thresholds
3. Monitor coverage trends

### 6. Report Results

1. ทำ `/report` สรุปผลลัพธ์ coverage
2. ทำ `/suggest-next-action` เพื่อแนะนำ action ถัดไป
3. แสดง coverage metrics ทุก category
4. ระบุ areas ที่ยังต้องปรับปรุง

## Rules

### 1. Coverage Targets

- `lines`, `branches`, `functions`, `statements`: 100%
- Critical paths: 100% coverage
- Security code: 100% coverage
- Error handling: 100% coverage
- Business logic: 100% coverage

### 2. Coverage Quality

- ไม่ใช่เพียง percentage แต่ quality ของ tests
- ตรวจสอบว่า tests มีความหมาย
- ตรวจสอบว่า tests ทดสอบสิ่งที่สำคัญ
- หลีกเลี่ยง tests ที่ไม่มีค่า

### 3. Consistency

- Coverage targets สอดคล้องกับ `/write-test` และ `/run-test-coverage`
- ใช้ framework coverage tools ที่เหมาะสม (`vitest run --coverage`, `cargo llvm-cov`, `pytest --cov`)
- หาก coverage ไม่ถึง 100% ต้องเขียน test เพิ่ม ไม่มีข้อยกเว้น
- Formal verification สำหรับ critical components เท่านั้น ไม่บังคับสำหรับทุก code

## Expected Outcome

- Coverage ถึง 100% ทุก category (lines, branches, functions, statements)
- Critical code ถูก cover 100%
- Formal verification ผ่านสำหรับ critical components (ถ้ามี)
- Coverage report ถูกสร้าง
- Coverage enforcement ตั้งค่าใน CI/CD
- Tests มีคุณภาพสูง
- รายงานสรุปผลลัพธ์ coverage ครบถ้วน
