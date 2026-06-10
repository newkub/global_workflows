---

title: Review Compatibility

description: Review browser/platform compatibility, polyfills และ feature detection

auto_execution_mode: 3

related_workflows:
  - /check-compatibility
  - /review-frontend-optimization
  - /review-performance

---

## Goal

Review compatibility layer ทั้งหมมเพื่อระบุและแก้ไข issues ตาม priority

## Scope

ครอบคลุม browser compatibility, platform compatibility, polyfills, feature detection

## Execute

### 1. Analyze Browser Compatibility

1. ตรวจสอบ browser support matrix
2. Review polyfill usage
3. Check feature detection
4. Validate progressive enhancement

### 2. Review Platform Compatibility

1. Check mobile support
2. Review tablet support
3. Validate desktop support
4. Check cross-platform issues

### 3. Review Polyfills

1. Check polyfill necessity
2. Review polyfill performance
3. Validate polyfill loading
4. Check polyfill alternatives

### 4. Review Feature Detection

1. Check feature detection usage
2. Review feature detection accuracy
3. Validate fallback mechanisms
4. Check graceful degradation

### 5. Prioritize And Report

1. Group issues ตาม impact
2. ใช้ `/report` เพื่อสรุปผล
3. รอ user confirmation

### 6. Execute Fixes

1. Add missing polyfills
2. Improve feature detection
3. Fix compatibility issues
4. Optimize polyfills

## Rules

### 1. Browser Compatibility

ตรวจสอบ browser compatibility:

- Browser support matrix ชัดเจน
- Polyfills ถูกต้อง
- Feature detection ดี
- Progressive enhancement มี
- ไม่ break old browsers

### 2. Platform Compatibility

ตรวจสอบ platform compatibility:

- Mobile support ดี
- Tablet support ดี
- Desktop support ดี
- Cross-platform ทำงานได้
- Responsive design ดี

### 3. Polyfills

ตรวจสอบ polyfills:

- Polyfills จำเป็นเท่านั้น
- Polyfill performance ดี
- Polyfill loading ดี
- Polyfill alternatives พิจารณา
- ไม่ over-polyfill

### 4. Feature Detection

ตรวจสอบ feature detection:

- Feature detection ใช้
- Feature detection ถูกต้อง
- Fallback mechanisms มี
- Graceful degradation ดี
- ไม่ user agent sniffing

### 5. Testing

ตรวจสอบ testing:

- Cross-browser testing มี
- Cross-platform testing มี
- Automated testing มี
- Manual testing มี
- Testing coverage ดี

## Expected Outcome

- Browser compatibility ดี
- Platform compatibility ดี
- Polyfills ใช้งานได้
- Feature detection ดี
- Testing ครบถ้วน

## Common Mistakes

ข้อผิดพลาดที่พบบ่อย:

- ไม่ support old browsers
- Over-polyfill
- User agent sniffing
- ไม่มี fallback
- ไม่ test cross-browser

## Anti-Patterns

รูปแบบที่ไม่ควรทำ:

- ❌ ไม่ support old browsers
- ❌ Over-polyfill
- ❌ User agent sniffing
- ❌ ไม่มี fallback
- ❌ ไม่ test cross-browser

