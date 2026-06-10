---
title: Test E2E
description: ทดสอบ end-to-end ด้วย Playwright เพื่อตรวจสอบ user flows บน real browser
auto_execution_mode: 3
---

## Goal

ทดสอบ end-to-end ด้วย real browser เพื่อตรวจสอบ complete user flows, cross-browser compatibility, UI interactions, visual regression และ integration ทั้งหมด

## Execute

### 1. Setup Playwright

1. Install browsers
2. Configure playwright.config
3. Setup base URL
4. กำหนด critical paths และ user journeys

### 2. Create Page Objects

1. Build page classes
2. Add selectors
3. Create actions
4. Add assertions

### 3. Write Critical Path Tests

1. Test login flow
2. Test main features
3. Test checkout
4. Test logout

### 4. Write Regression Tests

1. Test all major flows
2. Test edge cases
3. Test error states
4. Test mobile views

### 5. Add Visual Testing

1. Setup screenshots
2. Configure baselines
3. Add visual checks
4. Handle dynamic content

### 6. Add Accessibility

1. Setup axe-core
2. Run a11y scans
3. Check violations
4. Document issues

### 7. Run and Verify Tests

1. Execute on Chrome, Firefox, WebKit
2. Check mobile viewports
3. Check for flakiness
4. Validate flow, browser, viewport, a11y coverage

### 8. Setup CI

1. Configure GitHub Actions
2. Setup test reporting
3. Add notifications
4. Schedule runs

## Rules

1. Test real user scenarios และ use Page Object Model
2. Use test IDs ไม่ใช้ CSS selectors และ auto-wait for elements
3. Tests ต้อง independent, deterministic และ no flaky tests
4. Use parallel execution สำหรับ speed
5. จัดการ flaky tests อย่างเป็นระบบ

## Expected Outcome

1. Critical paths covered
2. Cross-browser testing
3. Mobile viewport tests
4. Visual regression baseline
5. Accessibility compliance
6. CI integration
7. Reliable test suite

