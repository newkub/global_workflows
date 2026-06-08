---
title: "Windsurf Rules to AST-grep"
description: Convert .windsurf/rules to AST-grep rules for automated code analysis
auto_execution_mode: 3
---

# Windsurf Rules to AST-grep

## Goal

Convert `.windsurf/rules/` directory to AST-grep rules for better code analysis and automatic refactoring using AST-based pattern matching.

## Execute

### 1. Research And Prepare

1.  Read `.windsurf/rules/index.md` to understand existing rules
2.  Use `/follow-ast-grep` to understand AST-grep setup requirements
3.  Use `/write-ast-grep-rules` to learn rule creation patterns

### 2. Setup AST-grep Environment

1.  Install AST-grep CLI with `bun add -D @ast-grep/cli`
2.  Configure `sgconfig.yml` with proper rule directories
3.  Setup project structure (`rules/`, `rule-tests/`, `utils/`)
4.  Add scan script to `package.json`

### 3. Convert Rules to AST-grep Format

1.  Create deprecated code rules in `ast-grep-rules/nouse/`
2.  Create import alias rules for `#shared`, `#server`, and default imports
3.  Create component structure rules for UI and page imports
4.  Create code organization rules for re-exports and type imports
5.  Create data fetching rules for Nuxt patterns

### 4. Test And Validate

1.  Run `sg scan --config sgconfig.yml` to test all rules
2.  Verify rules find expected issues in codebase
3.  Test fix templates with `--interactive` mode
4.  Validate rule accuracy with `ast-grep test`

### 5. Integrate With Development

1.  Add AST-grep scan to pre-commit hooks
2.  Include in CI/CD pipeline
3.  Create documentation for team usage
4.  Setup IDE integration with LSP

## Rules

### 1. Rule Analysis

Parse existing rules and map them to AST-grep equivalents:

- Read `.windsurf/rules/index.md` to understand rule patterns
- Identify rule priorities and requirements
- Map simple text rules to pattern with regex
- Map structural rules to relational rules
- Map complex rules to composite rules with constraints

### 2. AST-grep Setup

Configure AST-grep environment properly:

- Install AST-grep CLI as dev dependency with Bun
- Create `sgconfig.yml` with proper rule directories
- Include all rule directories in configuration
- Test configuration validity before use

### 3. Rule Conversion

Convert Windsurf rules to AST-grep YAML format:

- Every rule must have valid YAML syntax
- Use appropriate severity levels (error, warning, info)
- Include proper file globbing for scope limitation
- Test patterns must match intended code exactly
- Fix templates must produce valid code output

### 4. Testing And Validation

Ensure rules work correctly:

- Run full scan against codebase to verify matches
- Test fix application with interactive mode
- Validate no false positives in test cases
- Ensure no breaking changes when applying fixes

### 5. Integration

Integrate rules into development workflow:

- Add AST-grep scan to pre-commit hooks
- Include in CI/CD pipeline
- Setup IDE LSP integration
- Create team documentation for usage

## Expected Outcome

- `.windsurf/rules/` converted to AST-grep rules
- AST-grep environment properly configured
- All rules tested and validated
- Rules integrated into development workflow
- Team documentation created
- Improved code quality enforcement with AST-based analysis
