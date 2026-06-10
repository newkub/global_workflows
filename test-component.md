---
title: Test Component
description: ทดสอบ UI components แยกจาก unit tests ด้วย component testing frameworks
auto_execution_mode: 3
related_workflows:
  - /test-function
  - /test-e2e
  - /vue
  - /react
---

## Goal

ทดสอบ UI components ให้ครบถ้วน รวม props, events, slots, composition และ user interactions

## Execute

### 1. Setup Component Testing Framework

1. ติดตั้ง Vue Test Utils สำหรับ Vue หรือ React Testing Library สำหรับ React
2. Configure test environment สำหรับ component rendering
3. Setup testing utilities แล helpers
4. Configure component mounting options

### 2. Test Component Rendering

1. Test component mounts สำเร็จ
2. Test default props แล initial state
3. Test conditional rendering
4. Test slot content สำหรับ Vue หร children สำหรับ React

### 3. Test Props And Inputs

1. Test required props validation
2. Test prop type checking
3. Test prop updates แล reactivity
4. Test default values แล fallbacks

### 4. Test User Interactions

1. Test click events
2. Test form inputs (text, checkbox, radio, select)
3. Test keyboard interactions
4. Test mouse events (hover, drag, drop)

### 5. Test Events And Emitters

1. Test event emissions สำหรับ Vue
2. Test callback props สำหรับ React
3. Test event payloads
4. Test event bubbling แล propagation

### 6. Test Component State

1. Test internal state changes
2. Test computed properties สำหรับ Vue
3. Test derived state สำหรับ React
4. Test state persistence แล reset

### 7. Test Component Composition

1. Test nested components
2. Test component communication
3. Test provide/inject สำหรับ Vue
4. Test context สำหรับ React

### 8. Test Component Lifecycle

1. Test onMounted/onUnmounted สำหรับ Vue
2. Test useEffect/useEffectCleanup สำหรับ React
3. Test async operations ใน lifecycle
4. Test cleanup แล memory leaks

### 9. Run And Verify Tests

1. Execute all component tests
2. Verify test coverage สำหรับ components
3. Check for flaky tests
4. Validate test isolation

## Rules

### 1. Component Testing Principles

- Test behavior ไม่ใช่ implementation details
- Test จาก user perspective เหมือน real usage
- Avoid testing internal state โดยตรง
- Focus on inputs (props, user actions) แล outputs (rendered output, events)

### 2. Testing Framework Usage

| Framework | Library | Key Methods |
|-----------|---------|-------------|
| Vue | @vue/test-utils | mount, shallowMount, trigger |
| React | @testing-library/react | render, fireEvent, waitFor |
| Svelte | @testing-library/svelte | render, fireEvent |

### 3. Test Isolation

- แต่ละ test ต้อง isolated ไม่ depend กัน
- Cleanup หลังแต่ละ test ด้วย afterEach
- ใช้ fresh component instance ทุก test
- Reset state แล mocks ระหว่าง tests

### 4. Async Testing

- ใช้ waitFor สำหรับ async operations
- Test loading states แล error states
- Mock async calls ด้วย vi.fn() สำหรับ Vitest
- Handle timeouts แล race conditions

### 5. Accessibility Testing

- Test semantic HTML structure
- Verify ARIA attributes
- Test keyboard navigation
- Check focus management

## Expected Outcome

- [ ] Components ทดสอบครบถ้วน
- [ ] Props, events, แล interactions ถูก validate
- [ ] Test coverage สูงสำหรับ UI layer
- [ ] Tests รันเร็ว แล reliable
- [ ] Component testing integrated ใน CI
- [ ] Clear documentation สำหรับ component behavior

## Common Mistakes

- Test implementation details แทน behavior
- ไม่ cleanup หลัง tests ทำให้ flaky
- Test internal state โดยตรง
- ไม่ mock external dependencies
- ไม่ test error states แล edge cases
- Test ซับซ้อนเกินไป ทำให้ maintain ยาก

## Anti-Patterns

- ❌ Test internal methods ที่ไม่ expose ใน API
- ❌ ใช้ shallowMount เสมอโดยไม่จำเป็น
- ❌ Test CSS หร styling details
- ❌ ไม่ test accessibility
- ❌ Test ซ้อนทับกับ e2e tests

