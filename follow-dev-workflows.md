---
title: Follow Dev Workflows
description: Complete development lifecycle from idea to maintenance with 13 phases
auto_execution_mode: 3
---

Complete development lifecycle workflow covering all phases from discovery to continuous improvement

## Goal

Create development lifecycle system covering all steps in continuous loop to maintain quality and sustainable development

## Execute

### 1. Prepare

1. ใช้ `/update-references` เพื่อเก็บ reference
2. ใช้ `/learn-from-web` เสมอถ้าเป็น dependencies
3. อ่าน workflows ที่คล้ายกัน
4. ใช้ `/principles` เพื่อดู principles

### 2. Discover and Plan

1. Run `/analyze-project` to analyze current structure
2. Run `/idea-features` to generate feature ideas
3. Run `/plan` to create roadmap
4. Create todo list for tracking progress

### 3. Project Setup

1. Run `/ship-run` to verify project structure and run dev server
2. Run `/architecture` to organize by architecture

### 4. Development

1. Run `/realize-implementation` to convert TODO/MOCK to production code
2. Run `/todo` to implement TODO items
3. Run `/continue` to complete pending work
4. Run `/write-test` to write tests for new features

### 5. Code Quality

1. Run `/resolve-errors` to fix all errors and warnings
2. Run `/refactor` to improve code structure
3. Run `/refactor-long-files-to-single-responsibility` to split long files

### 6. Testing

1. Run `/test-api` to test API endpoints
2. Run `/test-integration` to test component integration
3. Run `/test-e2e` to test user flows
4. Run `/run-test` to run full test suite

### 7. Build and Verify

1. Run `/run-verify` to run verification pipeline
2. Run `/run-build` to build production artifacts
3. Run `/run-typecheck` to check TypeScript
4. Run `/run-lint` to check code quality
5. Run `/run-format` to format code

### 8. Documentation

1. Run `/write-docs` to create documentation
2. Run `/write-readme` to update README

### 9. Review

1. Run `/code-review-and-fix` to review all aspects
2. Run `/self-audit` to self-assess code quality
3. Run `/check-long-files` to check file sizes

### 9. Deployment

1. Run `/vercel` to deploy on Vercel
2. Run `/cloudflare-worker` to deploy on Cloudflare
3. Verify deployment success

### 10. Release

1. Run `/commit` to create conventional commits
2. Run `/changesets` for versioning
3. Run `/auto-it` or `/release-it` for automation
4. Run `/run-release` to release to registry

### 11. Improvement

1. Run `/improve-codebase` for all-around improvements
2. Run `/maintain-project` for ongoing maintenance

### 12. Dependencies

1. Run `/update-dependencies` to update to latest
2. Run `/renovate` for automated updates
3. Run `/use-taze` to manage monorepo dependencies
4. Check and apply security patches

### 14. Loop

1. Run `/continue` to complete any pending work
2. Return to Phase 1 to start new cycle
3. Document lessons learned

## Rules

1. เรียงลำดับตาม: Discover and Plan → Project Setup → Development → Code Quality → Testing → Build and Verify → Documentation → Review → Deployment → Release → Improvement → Dependencies → Loop
2. แต่ละ phase ต้องผ่านก่อนถึงจะไป phase ถัดไปได้
3. ถ้า build fail ให้กลับไป `/resolve-errors`
4. ถ้า test fail ให้กลับไป `/write-test`
5. ถ้า lint fail ให้กลับไป `/resolve-errors`
6. ถ้า typecheck fail ให้กลับไป `/resolve-errors`
7. ถ้า review fail ให้กลับไป `/improve-codebase`
8. เป็น continuous loop ไม่มีจุดสิ้นสุด
9. สามารถเริ่มจาก phase ใดก็ได้ตามสถานะปัจจุบัน
10. สามารถข้าม phase ที่ไม่จำเป็นได้
11. สามารถกลับไป phase ก่อนหน้าถ้าพบปัญหา
12. Deploy และ Release ต้องการ manual approval
13. Schedule `/maintain-project` และ `/update-dependencies`

## Expected Outcome

- Complete development lifecycle from idea to maintenance
- Continuous improvement loop with no end
- High quality code verified at all levels
- Comprehensive testing (unit, integration, e2e)
- Automated and reliable deployment pipeline
- Up-to-date documentation
- Security compliant system
- Maintainable high-quality project

