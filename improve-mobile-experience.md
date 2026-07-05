---
title: Improve Mobile Experience
description: ปรับปรุง mobile app และ offline support ครบวงจร
auto_execution_mode: 3
related_workflows:
  - improve-platform
  - improve-uxui
  - improve-web-performance
  - improve-compatibility
---

## Goal

ปรับปรุง mobile experience ทั้ง app performance, offline support, และ platform-specific optimizations

## Scope

ใช้สำหรับ project ที่มี mobile app (Capacitor, React Native, หรือ PWA) หรือต้องการ offline support

## Execute

### 1. Mobile App Optimization

ปรับปรุง mobile app performance

1. วิเคราะห์ app startup time และ cold start
2. ตรวจสอบ memory usage และ leak detection
3. Optimize bundle size สำหรับ mobile
4. ตั้งค่า lazy loading สำหรับ non-critical components
5. ทำ `/improve-web-performance` สำหรับ webview performance
6. ตรวจสอบ native bridge calls efficiency

### 2. Offline Support

ปรับปรุง offline capabilities

1. Implement service worker สำหรับ PWA
2. ตั้งค่า cache strategy สำหรับ offline access
3. Implement data sync เมื่อ online อีกครั้ง
4. จัดการ conflict resolution สำหรับ offline edits
5. ตรวจสอบ local storage limits และ cleanup
6. แสดง offline status ให้ user เห็นชัดเจน

### 3. Platform-Specific

ปรับปรุง platform-specific features

1. ตรวจสอบ platform detection logic
2. ใช้ native plugins สำหรับ device features (camera, geolocation, biometric)
3. ตั้งค่า push notifications สำหรับแต่ละ platform
4. ตรวจสอบ permission handling ที่เหมาะสม
5. ทำ `/improve-compatibility` สำหรับ cross-platform compatibility

### 4. Mobile UX

ปรับปรุง mobile-specific UX

1. ตรวจสอบ touch targets ขนาดเหมาะสม (min 44px)
2. ตั้งค่า safe area insets สำหรับ notch devices
3. ใช้ haptic feedback สำหรับ important actions
4. ตรวจสอบ keyboard handling และ input focus
5. ทำ `/improve-uxui` สำหรับ UX improvements ทั่วไป

## Rules

### 1. Performance Budget

- App startup < 3 seconds
- Bundle size < 5MB สำหรับ initial load
- Memory usage < 100MB ใน normal usage
- 60fps สำหรับ animations และ scrolling

### 2. Offline First

- Critical features ต้องใช้ได้ offline
- Data sync ต้อง automatic และ conflict-free
- แสดง sync status ให้ user เห็นเสมอ
- Cache ต้องมี expiry และ cleanup

### 3. Native Integration

- ใช้ native plugins สำหรับ device features
- จัดการ permission denials gracefully
- Test บน real devices ก่อน release
- ตรวจสอบ platform-specific bugs

## Expected Outcome

- Mobile app startup เร็ว และใช้ memory น้อย
- Offline support ครบถ้วน พร้อม data sync
- Platform-specific features ทำงานถูกต้อง
- Mobile UX ตอบสนอง touch interaction ดี
- Cross-platform compatibility ผ่านการทดสอบ
