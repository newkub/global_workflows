---
title: Analyze Mobile
description: วิเคราะห์ mobile app quality, offline support, responsive, touch UX, native features
auto_execution_mode: 3
related_workflows:
  - /analyze-uxui
  - /analyze-performance
  - /improve-mobile-experience
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ mobile app quality เพื่อระบุ platform-specific gaps และ native integration issues

## Scope

Mobile app quality, offline support, responsive design, touch UX, native features, app lifecycle, deep linking, push integration

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม mobile metrics ผ่าน scripts (platform detection, native API scan, responsive analysis)

### 2. Check Offline Support

1. ระบุ missing offline data caching
2. ระบุ missing offline form submission queue
3. ระบุ missing conflict resolution สำหรับ sync
4. ระบุ missing offline indicator UI
5. ระบุ missing background sync
6. ระบุ missing progressive loading

### 3. Check Responsive Design

1. ระบุ missing responsive breakpoints
2. ระบุ missing touch-friendly tap targets (min 44x44px)
3. ระบุ missing safe area insets (notch, home indicator)
4. ระบุ missing orientation handling
5. ระบุ missing tablet/landscape layouts
6. ระบุ text ที่เล็กเกินไปบน mobile

### 4. Check Touch UX

1. ระบุ missing touch gestures (swipe, pinch, long press)
2. ระบุ missing haptic feedback
3. ระบุ missing pull-to-refresh
4. ระบุ missing swipe actions (delete, archive)
5. ระบุ missing bottom sheet patterns
6. ระบุ missing thumb-friendly navigation

### 5. Check Native Features

1. ระบุ missing camera integration
2. ระบุ missing geolocation integration
3. ระบุ missing biometric authentication
4. ระบุ missing push notification integration
5. ระบุ missing share sheet integration
6. ระบุ missing contacts integration

### 6. Check App Lifecycle

1. ระบุ missing app state handling (foreground/background)
2. ระบุ missing session restoration
3. ระบุ missing crash recovery
4. ระบุ missing memory warning handling
5. ระบุ missing background task management
6. ระบุ missing app update mechanism

### 7. Check Deep Linking

1. ระบุ missing deep link configuration
2. ระบุ missing universal links (iOS) และ app links (Android)
3. ระบุ missing deep link routing
4. ระบุ missing deferred deep linking
5. ระบุ missing deep link analytics

### 8. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: offline support → native features → touch UX → lifecycle → responsive → deep linking

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม severity

### 2. Severity Classification

- **Critical**: no offline support, missing crash recovery, missing biometric auth
- **High**: missing push, missing camera, missing app state handling, tap targets too small
- **Medium**: missing haptics, missing pull-to-refresh, missing deep links
- **Low**: missing tablet layouts, missing share sheet, missing contacts

### 3. Framework Awareness

- ตรวจสอบ Capacitor plugin integration
- ตรวจสอบ SolidJS mobile components
- ระบุ platform-specific code patterns

### 4. Use Scripts For Mobile Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ Capacitor API detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- Mobile gaps ระบุพร้อม severity
- Offline และ native feature issues จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-mobile-experience`
