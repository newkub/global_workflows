---
title: Analyze CLI
description: วิเคราะห์ CLI tool quality, help docs, argument parsing, exit codes, shell completion
auto_execution_mode: 3
related_workflows:
  - /analyze-uxui
  - /improve-cli
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ CLI tool quality เพื่อระบุ UX gaps และ missing features

## Scope

CLI argument parsing, help documentation, exit codes, shell completion, interactive prompts, progress indicators, output formatting

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม CLI metrics ผ่าน scripts (command detection, help scan, exit code analysis)

### 2. Check Argument Parsing

1. ระบุ missing argument validation
2. ระบุ missing type coercion สำหรับ arguments
3. ระบุ missing default values
4. ระบุ missing required argument enforcement
5. ระบุ missing subcommand support
6. ระบุ missing variadic arguments

### 3. Check Help Documentation

1. ระบุ missing help text สำหรับ commands
2. ระบุ missing usage examples
3. ระบุ missing flag descriptions
4. ระบุ missing `--help` และ `-h` flags
5. ระบุ missing version flag (`--version`, `-v`)
6. ระบุ missing man page generation

### 4. Check Exit Codes

1. ระบุ missing exit code conventions (0 success, 1-255 errors)
2. ระบุ inconsistent exit code usage
3. ระบุ missing specific exit codes สำหรับ different error types
4. ระบุ missing exit code documentation
5. ระบุ missing graceful shutdown (SIGINT, SIGTERM)

### 5. Check Interactive Features

1. ระบุ missing interactive prompts
2. ระบุ missing autocomplete สำหรับ prompts
3. ระบุ missing progress indicators (spinners, progress bars)
4. ระบุ missing confirmation prompts สำหรับ destructive actions
5. ระบุ missing multi-select prompts
6. ระบุ missing password input (hidden)

### 6. Check Output Formatting

1. ระบุ missing JSON output mode
2. ระบุ missing table output mode
3. ระบุ missing color output (with `--no-color` fallback)
4. ระบุ missing verbose mode (`-v`, `--verbose`)
5. ระบุ missing quiet mode (`-q`, `--quiet`)
6. ระบุ missing log levels

### 7. Check Shell Completion

1. ระบุ missing bash completion
2. ระบุ missing zsh completion
3. ระบุ missing fish completion
4. ระบุ missing PowerShell completion
5. ระบุ missing completion installation command

### 8. Check Configuration

1. ระบุ missing config file support
2. ระบุ missing environment variable support
3. ระบุ missing `.rc` file loading
4. ระบุ missing config precedence (CLI > env > config > default)
5. ระบุ missing config validation

### 9. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: argument parsing → help docs → exit codes → interactive → output → completion → config

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม command และ severity

### 2. Severity Classification

- **Critical**: missing argument validation, missing help, wrong exit codes
- **High**: missing confirmation for destructive actions, missing config support
- **Medium**: missing shell completion, missing JSON output, missing verbose mode
- **Low**: missing man page, missing color output, missing fish completion

### 3. Framework Awareness

- ตรวจสอบ Bun CLI patterns
- ตรวจสอบ CLI framework integration
- ระบุ CLI testing patterns

### 4. Use Scripts For CLI Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ `/test-cli` สำหรับ CLI testing
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- CLI gaps ระบุพร้อม command และ severity
- Argument parsing และ help issues จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-cli`
