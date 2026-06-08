---
title: Check Compatibility
description: ตรวจสอบ browser และ platform compatibility
auto_execution_mode: 3
related_workflows:
  - /improve-platform
---

## Goal

ตรวจสอบว่า application ทำงานได้บน browsers และ platforms ที่ target

## Execute

### 1. Check Browser Compatibility

1. ทดสอบบน Chrome (latest)
2. ทดสอบบน Firefox (latest)
3. ทดสอบบน Safari (latest)
4. ทดสอบบน Edge (latest)
5. ทดสอบบน mobile browsers

### 2. Check Platform Compatibility

1. ทดสอบบน Windows
2. ทดสอบบน macOS
3. ทดสอบบน Linux
4. ทดสอบบน iOS
5. ทดสอบบน Android

### 3. Check Version Compatibility

1. ตรวจสอบ minimum supported versions
2. ทดสอบบน older versions ที่จำเป็น
3. ตรวจสอบ polyfills ที่ใช้
4. ตรวจสอบ transpilation settings

### 4. Check API Compatibility

1. ตรวจสอบ browser APIs ที่ใช้
2. ตรวจสอบ feature detection
3. ตรวจสอบ fallback mechanisms
4. ตรวจสอบ graceful degradation

### 5. Run Cross-Browser Tests

1. ใช้ BrowserStack หรือ Sauce Labs
2. รัน automated cross-browser tests
3. ทดสอบ manual สำหรับ critical flows
4. บันทึก compatibility issues

### 6. Check Responsive Design

1. ทดสอบบน desktop resolutions
2. ทดสอบบน tablet resolutions
3. ทดสอบบน mobile resolutions
4. ตรวจสอบ breakpoints ที่เหมาะสม

## Rules

### 1. Browser Support Matrix

- Chrome: last 2 versions
- Firefox: last 2 versions
- Safari: last 2 versions
- Edge: last 2 versions
- Mobile: iOS Safari 12+, Chrome Android

### 2. Testing Strategy

- ทดสอบ critical flows บนทุก browsers
- ทดสอบ edge cases บน browsers หลัก
- ใช้ automated tests สำหรับ regression
- ทดสอบ manual สำหรับ visual issues

### 3. Priority Levels

- Critical: ไม่ทำงานบน browser หลัก
- High: ทำงานไม่ถูกต้องบน browser หลัก
- Medium: ทำงานไม่ถูกต้องบน browser รอง
- Low: เป็น best practices

## Expected Outcome

- Application ทำงานได้บน browsers ที่ target
- Platform compatibility ผ่าน
- Version compatibility ชัดเจน
- API compatibility มี fallbacks
- Responsive design ทำงานได้
