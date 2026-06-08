---

title: Review Code Quality

description: Review code complexity, technical debt และ maintainability

auto_execution_mode: 3

related_workflows:
  - /check-maintainability
  - /check-duplication
  - /review-architecture

---

## Goal

Review code quality ทั้งหมดเพื่อระบุและแก้ไข issues ตาม priority

## Scope

ครอบคลุม code complexity, technical debt, maintainability, code smells

## Execute

### 1. Analyze Code Complexity

1. ตรวจสอบ cyclomatic complexity
2. Review function length
3. Check nesting depth
4. Analyze cognitive complexity

### 2. Review Technical Debt

1. Identify code smells
2. Check deprecated code
3. Review TODO comments
4. Analyze technical debt metrics

### 3. Check Maintainability

1. Review code readability
2. Check naming conventions
3. Validate code organization
4. Review documentation

### 4. Review Code Smells

1. Check duplicate code
2. Review long methods
3. Check large classes
4. Identify anti-patterns

### 5. Prioritize And Report

1. Group issues ตาม impact
2. ใช้ `/report` เพื่อสรุปผล
3. รอ user confirmation

### 6. Execute Fixes

1. Reduce complexity
2. Fix code smells
3. Improve maintainability
4. Reduce technical debt

## Rules

### 1. Code Complexity

ตรวจสอบ code complexity:

- Cyclomatic complexity < 10
- Function length < 50 lines
- Nesting depth < 4
- Cognitive complexity ต่ำ
- ไม่มี god functions

### 2. Technical Debt

ตรวจสอบ technical debt:

- ไม่มี deprecated code
- ไม่มี TODO comments
- Code up to date
- Dependencies current
- ไม่มี workarounds

### 3. Maintainability

ตรวจสอบ maintainability:

- Code readable
- Naming consistent
- Organization good
- Documentation adequate
- Easy to modify

### 4. Code Smells

ตรวจสอบ code smells:

- ไม่มี duplicate code
- ไม่มี long methods
- ไม่มี large classes
- ไม่มี feature envy
- ไม่มี data clumps

### 5. Best Practices

ตรวจสอบ best practices:

- ใช้ design patterns ถูกต้อง
- ไม่มี magic numbers
- ไม่มี hard-coded values
- ใช้ constants
- Code DRY

## Expected Outcome

- Code complexity ต่ำ
- Technical debt ลดลง
- Maintainability สูง
- Code smells ถูกแก้ไข
- Code quality ดีขึ้น

## Common Mistakes

ข้อผิดพลาดที่พบบ่อย:

- Complexity สูง
- Duplicate code
- Long methods
- Poor naming
- ไม่มี documentation

## Anti-Patterns

รูปแบบที่ไม่ควรทำ:

- ❌ Complexity สูง
- ❌ Duplicate code
- ❌ Long methods
- ❌ Poor naming
- ❌ ไม่มี documentation
