---
title: Test Compatibility
description: ทดสอบ browser, device แล OS compatibility สำหรับ cross-platform support
auto_execution_mode: 3
related_workflows:
  - /test-e2e
---

## Goal

ทดสอบ compatibility ข้าม browsers, devices, แล operating systems ให้ครอบคลุม

## Execute

### 1. Define Target Platforms

1. ระบุ browsers ที่ support (Chrome, Firefox, Safari, Edge)
2. ระบุ devices ที่ support (desktop, tablet, mobile)
3. ระบุ operating systems (Windows, macOS, Linux, iOS, Android)
4. Define browser version ranges

### 2. Setup Cross-Browser Testing

1. ติดตั้ง BrowserStack หร Sauce Labs
2. Configure browser testing profiles
3. Setup local testing สำหรับ development
4. Configure viewport sizes

### 3. Test Browser Compatibility

1. Test บน Chrome (latest 2 versions)
2. Test บน Firefox (latest 2 versions)
3. Test บน Safari (latest 2 versions)
4. Test บน Edge (latest 2 versions)

### 4. Test Device Compatibility

1. Test บน desktop (1920x1080, 1366x768)
2. Test บน tablet (768x1024, 1024x768)
3. Test บน mobile (375x667, 414x896)
4. Test responsive breakpoints

### 5. Test OS Compatibility

1. Test บน Windows 10/11
2. Test บน macOS (latest 2 versions)
3. Test บน Linux (Ubuntu, Fedora)
4. Test บน iOS แล Android

### 6. Test Feature Compatibility

1. Test ES6+ features support
2. Test CSS features support
3. Test API compatibility (localStorage, IndexedDB)
4. Test WebAssembly support

### 7. Run Compatibility Tests

1. Execute cross-browser tests
2. Execute cross-device tests
3. Execute cross-OS tests
4. Document compatibility issues

### 8. Implement Polyfills

1. Detect unsupported features
2. Add polyfills สำหรับ legacy browsers
3. Configure transpilation targets
4. Test polyfill functionality

## Rules

### 1. Browser Support Matrix

| Browser | Versions | Priority |
|---------|----------|----------|
| Chrome | Latest 2 | High |
| Firefox | Latest 2 | High |
| Safari | Latest 2 | High |
| Edge | Latest 2 | High |
| IE 11 | Optional | Low |

### 2. Device Testing

- Desktop: 1920x1080, 1366x768
- Tablet: 768x1024, 1024x768
- Mobile: 375x667, 414x896
- Test landscape แล portrait modes

### 3. Feature Detection

ใช้ feature detection แทน browser detection:

```javascript
// Good
if ('IntersectionObserver' in window) {
  // Use IntersectionObserver
}

// Bad
if (navigator.userAgent.includes('Chrome')) {
  // Use feature
}
```

### 4. Progressive Enhancement

- Build สำหรับ modern browsers ก่อน
- Add polyfills สำหรับ legacy browsers
- Graceful degradation สำหรับ unsupported features
- Document browser-specific workarounds

### 5. Testing Tools

| Tool | Use Case | Cost |
|------|----------|------|
| BrowserStack | Cross-browser testing | Paid |
| Sauce Labs | Cross-browser testing | Paid |
| LambdaTest | Cross-browser testing | Paid |
| Local browsers | Development | Free |

## Expected Outcome

- [ ] Browser compatibility validated
- [ ] Device compatibility tested
- [ ] OS compatibility verified
- [ ] Polyfills implemented
- [ ] Compatibility matrix documented
- [ ] Known issues documented

## Common Mistakes

- ไม่ test บน Safari (macOS/iOS)
- ไม่ test บน mobile devices
- ใช้ browser detection แทน feature detection
- ไม่ implement polyfills
- ไม่ document compatibility issues
- Test เฉพาะ Chrome

## Anti-Patterns

- ❌ ใช้ browser detection แทน feature detection
- ❌ ไม่ test บน Safari
- ❌ ไม่ test บน mobile
- ❌ Hardcode browser-specific code
- ❌ ไม่ implement polyfills

