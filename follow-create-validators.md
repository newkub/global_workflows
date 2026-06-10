---
title: Create Validators
description: แปลงกฎจาก AGENTS.md และ rules เป็น deterministic validators (ast-grep, linter, etc.)
auto_execution_mode: 3
related_workflows:
  - /write-windsurf-global-workflows
  - /write-ast-grep-rules
---

## Goal

แปลงกฎจาก AGENTS.md, workflows, และ rules เป็น deterministic validators ที่ execute ได้

## Scope

ครอบคลุม AST-based validators, linter rules, type validators, และ test validators

## Execute

### 1. ระบุกฎจาก AGENTS.md

1. อ่าน AGENTS.md และระบุกฎที่ต้องการ
2. ระบุกฎที่เป็น text-based
3. จัดกลุ่มกฎตามประเภท

### 2. เลือกประเภท Validator

- **ast-grep** - สำหรับ structural patterns
- **ESLint/Clippy** - สำหรับ code quality
- **Zod** - สำหรับ config validation
- **Tests** - สำหรับ complex validation

### 3. เขียน Validator

เขียน validator ตามประเภทที่เลือก:
- สำหรับ ast-grep: ทำ `/write-ast-grep-rules`
- สำหรับ ESLint/Clippy: เขียน custom lint rules
- สำหรับ Zod: สร้าง schema validation
- สำหรับ Tests: เขียน test-based validators

### 4. ทดสอบ Validator

```bash
# Test ast-grep rules
ast-grep scan --config .ast-grep/

# Test ESLint rules
eslint --rule prefer-bun-shell:error src/

# Test Zod schemas
vitest run validators.test.ts
```

### 5. Integrate กับ CI/CD

เพิ่ม validators เข้าไปใน CI/CD pipeline

## Rules

### 1. AST-based Validators (ast-grep)

ใช้สำหรับ structural code patterns:
- ห้ามใช้ ignore comments
- ต้องมี error handling
- ต้องมี // MOCK comment สำหรับ mocks
- ใช้ atomic rules: pattern, kind, regex
- ใช้ relational rules: inside, has, precedes, follows
- ใช้ composite rules: all, any, not, matches
- ใช้ constraints สำหรับ filter matches
- ใช้ transform สำหรับ meta-variable manipulation

### 2. Linter Rules (ESLint, Clippy)

ใช้สำหรับ code quality checks:
- ไม่ hardcoded secrets
- ใช้ Bun shell สำหรับ automation
- Follow naming conventions

### 3. Type Validators (Zod)

ใช้สำหรับ config validation:
- Validate AGENTS.md structure
- Validate workflow configs
- Validate environment variables

### 4. Test Validators

ใช้สำหรับ complex validation:
- Module size limits
- Circular dependency checks
- Performance benchmarks

## Expected Outcome

- Validators ที่ execute ได้
- Automatic validation ใน CI/CD
- Consistent enforcement
- Early error detection

## Common Mistakes

- สร้าง validators ที่มี false positives มากเกินไป
- ไม่ test validators กับ code จริง
- ไม่ document validators
- สร้าง validators ที่ซับซ้อนเกินไป

## ตัวอย่างจาก AGENTS.md

### กฎ: "ไม่ mock หรือ TODO โดย default"

```yaml
# no-default-mock.sgr.yaml
id: no-default-mock
language: typescript
rule:
  all:
    - pattern: mock($$$)
    - not:
        has:
          pattern: '// MOCK'
message: "Mock must be marked with // MOCK comment"
```

### กฎ: "ใช้ Bun shell สำหรับ automation"

```javascript
// prefer-bun-shell.js
module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Prefer Bun shell for automation',
    },
  },
  create(context) {
    return {
      CallExpression(node) {
        if (node.callee.name === 'exec' || 
            node.callee.name === 'spawn') {
          context.report({
            node,
            message: 'Use Bun shell instead: Bun.$`command`',
          });
        }
      },
    };
  },
};
```

## CLI Reference

### ast-grep Commands

```bash
# Search pattern
ast-grep run -p 'console.log($ARG)'

# Search and rewrite
ast-grep run -p 'console.log($ARG)' -r 'console.warn($ARG)'

# Scan with rules
ast-grep scan --config sgconfig.yml

# Test rules
ast-grep test --config sgconfig.yml

# Interactive mode
ast-grep scan --interactive
```

### ESLint Commands

```bash
# Run with custom rule
eslint --rule prefer-bun-shell:error src/

# Test rule
eslint --rule prefer-bun-shell:error --fix-dry-run src/
```

## Tools

- ast-grep - AST-based code search and transformation
- ESLint - JavaScript/TypeScript linter
- Clippy - Rust linter
- Biome - Fast JavaScript/TypeScript linter
- Zod - TypeScript-first schema validation
- Vitest - Fast test framework

## Naming Convention

ตั้งชื่อ validators ตาม pattern:
- `no-*` - ห้ามทำอะไรบางอย่าง
- `prefer-*` - แนะนำให้ทำอะไรบางอย่าง
- `enforce-*` - บังคับกฎ
- `must-have-*` - ต้องมีอะไรบางอย่าง

## References

- [ast-grep](https://ast-grep.github.io/)
- [ESLint](https://eslint.org/)
- [Zod](https://zod.dev/)

