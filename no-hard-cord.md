---
title: No Hard Code
description: ลบ hard code ออกจาก codebase ด้วย environment variables, config, constants
auto_execution_mode: 3
---

## Goal

ลบ hard code ทั้งหมดออกจาก codebase เพื่อเพิ่ม flexibility, security และ maintainability

## Execute

### 1. Identify Hard Code

ค้นหา hard code ใน codebase

1. ทำ `/search-code` เพื่อค้นหา magic numbers ด้วย patterns
2. ทำ `/search-code` เพื่อค้นหา hardcoded strings ที่ไม่ใช่ messages
3. ทำ `/search-code` เพื่อค้นหา hardcoded URLs และ API endpoints
4. ทำ `/search-code` เพื่อค้นหา hardcoded paths และ filenames
5. ทำ `/run-secret-scanning` เพื่อค้นหา secrets หรือ sensitive data
6. ทำ `/search-code` เพื่อค้นหา business rules ที่ hardcoded

### 2. Replace Magic Values

แทนที่ magic values ด้วย named constants

1. สร้าง constants files สำหรับ magic numbers
2. ตั้งชื่อ constants ให้มีความหมายชัดเจน
3. จัดกลุ่ม constants ตาม context
4. ใช้ const หรือ readonly สำหรับ constants
5. ทำ `/update-references` เพื่อแทนที่ magic values ด้วย constants

### 3. Extract Configuration

แยก configuration ออกจาก code

1. ทำ `/config` เพื่อสร้าง config files สำหรับ environment-specific values
2. ใช้ environment variables สำหรับ secrets
3. ใช้ runtime config สำหรับ dynamic values
4. ใช้ config objects สำหรับ related settings
5. ใช้ type-safe config ด้วย TypeScript

### 4. Externalize Business Rules

ทำให้ business rules เป็น configurable

1. แยก business rules ออกจาก logic
2. สร้าง rule engines หรือ config สำหรับ rules
3. ใช้ feature flags สำหรับ conditional behavior
4. ใช้ strategy pattern สำหรับ interchangeable logic
5. ทำ `/write-docs` เพื่อ Document business rules อย่างชัดเจน

### 5. Externalize URLs and Paths

แยก URLs และ paths ออกจาก code

1. สร้าง constants สำหรับ base URLs
2. ใช้ environment variables สำหรับ API endpoints
3. ใช้ path builders สำหรับ dynamic paths
4. ใช้ config สำหรับ file paths
5. ทำ `/update-references` เพื่อใช้ relative paths แทน absolute เมื่อเป็นไปได้

### 6. Secure Secrets

จัดการ secrets อย่างปลอดภัย

1. ทำ `/phase-dev` เพื่อใช้ environment variables สำหรับ secrets
2. ใช้ secret management services
3. ไม่ commit secrets ไปยัง version control
4. ใช้ .env files สำหรับ local development
5. Rotate secrets เป็นประจำ

### 7. Validate

ตรวจสอบว่าไม่มี hard code เหลืออยู่

1. ทำ `/run-lint` เพื่อตรวจสอบด้วย lint rules สำหรับ detect hard code
2. ทำ `/review-codebase` เพื่อ Review code อย่าง manual
3. ตรวจสอบใน environments ต่างๆ
4. ตรวจสอบว่า configuration ถูกต้อง
5. ทำ `/write-docs` เพื่อ Document configuration ทั้งหมด

## Rules

### 1. Analysis Requirements

ตรวจสอบและวิเคราะห์ hard code ใน codebase

- ค้นหา magic numbers, strings, URLs, paths
- ตรวจสอบ secrets และ sensitive data
- วิเคราะห์ business rules ที่ hardcoded
- ระบุ dependencies ที่ externalize ได้

### 2. Refactoring Principles

หลักการในการ refactor hard code

- ใช้ named constants สำหรับ magic values
- แยก configuration ออกจาก business logic
- ทำให้ business rules เป็น configurable
- ใช้ environment variables สำหรับ secrets
- รักษา type safety ของ configuration

### 3. Integration Order

ลำดับการ integrate การแก้ไข

- Replace magic values ก่อน
- Extract configuration ต่อไป
- Externalize business rules หลังจากนั้น
- Externalize URLs และ paths
- Secure secrets สุดท้าย
- ตรวจสอบและ validate ทั้งหมด

### 4. File Operations

การจัดการไฟล์เมื่อ refactor

- สร้าง constants files สำหรับ magic values
- สร้าง config files สำหรับ environment-specific values
- สร้าง .env.example สำหรับ local development
- อัพเดท references ด้วย `/update-references` สำหรับไฟล์ที่ลบ
- Update documentation สำหรับ configuration changes

## Expected Outcome

- ไม่มี magic values ใน code
- Configuration แยกออกจาก code
- Business rules เป็น configurable
- URLs และ paths externalized
- Secrets จัดการอย่างปลอดภัย
- Code ที่ maintain ได้ง่ายขึ้น
- Configuration ที่ document ครบถ้วน
- Security ที่ดีขึ้น

