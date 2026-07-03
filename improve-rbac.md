---
title: Improve RBAC
description: ปรับปรุง Role-Based Access Control ให้ปลอดภัยและ maintainable
auto_execution_mode: 3
related_workflows:
  - improve-security
  - follow-clean-architecture
---

## Goal

ปรับปรุง RBAC (Role-Based Access Control) ให้ปลอดภัย ใช้งานได้ และ maintainable

## Scope

ใช้สำหรับปรับปรุง access control ใน web applications, APIs, และ systems ที่มี user roles

## Execute

### 1. Analyze Current RBAC

วิเคราะห์ RBAC ปัจจุบัน

- ตรวจสอบ roles และ permissions ที่มีอยู่
- วิเคราะห์ access control logic
- ตรวจสอบ security gaps
- ระบุ hardcoded permissions
- ตรวจสอบ permission inheritance

### 2. Design RBAC Model

ออกแบบ RBAC model

- กำหนด roles ที่ชัดเจน (admin, moderator, user, guest)
- กำหนด permissions ที่ granular (read, write, delete, manage)
- สร้าง role hierarchy ที่เหมาะสม
- กำหนด resource-based permissions
- สร้าง permission groups สำหรับ reuse

### 3. Implement RBAC Middleware

สร้าง RBAC middleware

- สร้าง authorization middleware
- สร้าง permission checker functions
- สร้าง role decorator/guard
- สร้าง resource-based access control
- สร้าง permission caching

### 4. Update API Endpoints

อัปเดต API endpoints

- เพิ่ม permission checks ทุก endpoint
- ใช้ RBAC middleware ที่สร้างไว้
- ตรวจสอบ resource ownership
- ตรวจสอบ role-based access
- ทำ audit logging

### 5. Update UI Components

อัปเดต UI components

- ซ่อน/แสดง features ตาม permissions
- สร้าง permission-aware components
- สร้าง role-based navigation
- แสดง permission errors ที่ชัดเจน
- สร้าง admin panel สำหรับ manage roles

### 6. Add RBAC Tests

เพิ่ม tests สำหรับ RBAC

- Test role assignments
- Test permission checks
- Test unauthorized access
- Test resource ownership
- Test role hierarchy

## Rules

### 1. Principle of Least Privilege

ให้ permissions น้อยที่สุดที่จำเป็น

- Default deny all
- Grant permissions explicitly
- หลีกเลี่ยง wildcard permissions
- Review permissions regularly

### 2. Separation of Concerns

แยก authorization logic ออกจาก business logic

- ใช้ middleware สำหรับ authorization
- ไม่ hardcode permissions ใน controllers
- ใช้ centralized permission checker
- แยก role management ออกจาก application logic

### 3. Audit and Logging

บันทึกทุก access control decisions

- Log permission denials
- Log role changes
- Log sensitive operations
- Monitor suspicious activities

### 4. Maintainability

ทำให้ RBAC ง่ายต่อการ maintain

- ใช้ configuration-based permissions
- Document ทุก role และ permission
- สร้าง admin tools สำหรับ manage RBAC
- ทำ permission review regularly

## Expected Outcome

- RBAC ที่ปลอดภัยและ maintainable
- Authorization logic ที่ consistent
- Permissions ที่ granular และ flexible
- Audit trail ที่ครบถ้วน
- UI ที่ permission-aware
- Tests ที่ครอบคลุม

## Common Mistakes

- Hardcoding permissions ใน controllers
- ใช้ wildcard permissions เกินไป
- ไม่มี audit logging
- ไม่ test unauthorized access
- ไม่ review permissions regularly

## Anti-Patterns

- ใช้ if (user.role === 'admin') โดยตรง
- ไม่มี centralized permission checker
- ไม่แยก authorization logic
- ไม่ log permission denials
- ใช้ magic strings สำหรับ permissions
