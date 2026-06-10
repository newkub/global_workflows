---
title: Follow ESLint
description: ตั้งค่า ESLint 9 พร้อม plugins ครบถ้วนสำหรับ TypeScript/Vue/Nuxt
auto_execution_mode: 3
---

ตั้งค่า ESLint 9 ด้วย flat config format พร้อม plugins ครบถ้วน

## Execute

### 1. Install Core Dependencies

1. รัน `bun add -D eslint @eslint/js typescript-eslint`
2. รัน `bun add -D eslint-config-prettier`

### 2. Install Vue/Nuxt Plugins

1. รัน `bun add -D eslint-plugin-vue @vue/eslint-config-typescript`
2. รัน `bun add -D @nuxt/eslint-config`

### 3. Install Code Quality Plugins

1. รัน `bun add -D eslint-plugin-import eslint-plugin-unused-imports`
2. รัน `bun add -D eslint-plugin-no-secrets eslint-plugin-regexp`
3. รัน `bun add -D eslint-plugin-functional eslint-plugin-oxlint`

### 4. Install Testing/A11y Plugins

1. รัน `bun add -D eslint-plugin-vitest eslint-plugin-vue-a11y`

### 5. Create Flat Config

`eslint.config.ts`
```typescript
import { defineConfig } from 'eslint/config'
import js from '@eslint/js'
import ts from 'typescript-eslint'
import vue from 'eslint-plugin-vue'
import prettier from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'
import unusedImports from 'eslint-plugin-unused-imports'
import noSecrets from 'eslint-plugin-no-secrets'
import regexp from 'eslint-plugin-regexp'
import functional from 'eslint-plugin-functional'
import oxlint from 'eslint-plugin-oxlint'
import vitest from 'eslint-plugin-vitest'
import vueA11y from 'eslint-plugin-vue-a11y'

export default defineConfig([
  js.configs.recommended,
  ...ts.configs.recommended,
  ...vue.configs['flat/recommended'],
  prettier,
  {
    files: ['**/*.{ts,tsx,vue}'],
    plugins: {
      import: importPlugin,
      'unused-imports': unusedImports,
      'no-secrets': noSecrets,
      regexp,
      functional,
      oxlint,
      vitest,
      'vue-a11y': vueA11y
    },
    rules: {
      'import/order': ['warn', { alphabetize: { order: 'asc' } }],
      'import/no-cycle': 'error',
      'import/no-unresolved': 'error',
      'unused-imports/no-unused-imports': 'warn',
      'no-secrets/no-secrets': 'error',
      'regexp/prefer-regexp-exec': 'warn',
      'functional/immutable-data': 'warn',
      'functional/no-let': 'warn',
      'oxlint/unicorn/no-array-for-each': 'warn'
    }
  },
  {
    ignores: ['dist/**', 'node_modules/**', '.nuxt/**', '*.config.js']
  }
])
```

### 6. Add Package Scripts

`package.json`
```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "lint:report": "eslint . --format json -o eslint-report.json"
  }
}
```

### 7. Configure IDE

`.vscode/settings.json`
```json
{
  "eslint.validate": ["javascript", "typescript", "vue"],
  "eslint.format.enable": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```

## Rules

### Vue/Nuxt Configuration

- **eslint-plugin-vue**: Vue 3 linting rules และ template linting
- **@vue/eslint-config-typescript**: Vue + TypeScript config อย่างเป็นทางการ
- **@nuxt/eslint-config**: Nuxt 3 project-aware config

### Import/Export Management

- **eslint-plugin-import**: Import ordering, validation, auto-sort
- **eslint-plugin-unused-imports**: Auto-remove unused imports
- **import/no-cycle**: Detect circular dependencies

### Code Quality & Security

- **eslint-plugin-no-secrets**: Detect hardcoded secrets/API keys
- **eslint-plugin-regexp**: RegExp best practices
- **eslint-plugin-functional**: Functional programming rules
- **eslint-plugin-oxlint**: Fast Rust-based linting

### Testing & Accessibility

- **eslint-plugin-vitest**: Vitest linting rules
- **eslint-plugin-vue-a11y**: Vue accessibility rules

### Configuration Standards

- **Flat Config**: ใช้ `eslint.config.ts` แทน `.eslintrc`
- **defineConfig()**: ใช้ `defineConfig()` จาก `eslint/config`
- **TypeScript**: ใช้ `typescript-eslint` แทน `@typescript-eslint/parser`
- **Prettier Last**: ใส่ `prettier` config เป็นตัวสุดท้าย
- **No ESLintIgnore**: ไม่ใช้ `.eslintignore` ใน ESLint 9

## Expected Outcome

1. ESLint 9 พร้อม flat config และ plugins ครบถ้วน
2. Vue 3 + TypeScript + Nuxt 3 support
3. Import ordering และ circular dependency detection
4. Security checks สำหรับ hardcoded secrets
5. Functional programming best practices
6. Fast linting ด้วย oxlint
7. Testing linting ด้วย vitest
8. Accessibility rules สำหรับ Vue

