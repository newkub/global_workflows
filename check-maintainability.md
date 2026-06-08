---
title: Check Maintainability
description: ตรวจสอบ code complexity, technical debt, และ testability
auto_execution_mode: 3
related_workflows:
  - /refactor
  - /improve-testability
---

## Goal

ตรวจสอบ maintainability ของ codebase เพื่อให้ง่ายต่อการพัฒนาต่อ

## Execute

### 1. Check Code Complexity

1. ตรวจสอบ cyclomatic complexity
2. ตรวจสอบ cognitive complexity
3. ตรวจสอบ function length
4. ตรวจสอบ nesting depth

### 2. Check Technical Debt

1. ตรวจสอบ code smells
2. ตรวจสอบ anti-patterns
3. ตรวจสอบ duplicated code
4. ตรวจสอบ dead code

### 3. Check Documentation Quality

1. ตรวจสอบ inline documentation
2. ตรวจสอบ API documentation
3. ตรวจสอบ architecture documentation
4. ตรวจสอบ README quality

### 4. Check Testability

1. ตรวจสอบ test coverage
2. ตรวจสอบ test quality
3. ตรวจสอบ test maintainability
4. ตรวจสอบ mocking strategy

### 5. Check Coupling and Cohesion

1. ตรวจสอบ coupling ระหว่าง modules
2. ตรวจสอบ cohesion ภายใน modules
3. ตรวจสอบ dependency directions
4. ตรวจสอบ circular dependencies

### 6. Run Maintainability Analysis

1. ใช้ tools เช่น SonarQube, CodeClimate
2. รัน complexity analysis
3. รัน technical debt analysis
4. สร้าง action plan สำหรับ improvements

## Rules

### 1. Complexity Guidelines

- Cyclomatic complexity: < 10
- Cognitive complexity: < 15
- Function length: < 50 lines
- Nesting depth: < 4 levels

### 2. Technical Debt

- ระบุ technical debt ที่ critical
- สร้าง plan สำหรับ payoff
- ติดตาม technical debt ratio
- จัดลำดับ payoff ตาม impact

### 3. Documentation Quality

- Complex logic: ต้องมี comments
- Public APIs: ต้องมี documentation
- Architecture: ต้องมี diagrams
- README: ต้องครบถ้วน

### 4. Priority Levels

- Critical: code ซับซ้อนมากและยากแก้
- High: technical debt สะสมมาก
- Medium: documentation ขาด
- Low: เป็น optimizations

## Expected Outcome

- Code complexity อยู่ในเกณฑ์ที่เหมาะสม
- Technical debt ถูกระบุและจัดการ
- Documentation ครบถ้วน
- Testability สูง
- Coupling ต่ำและ cohesion สูง
